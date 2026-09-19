import Image from "next/image";
import { AppLink as Link } from "@/components/AppLink";

import { Heading } from "@/components/elements/heading";
import { ArrowPill } from "@/components/ui/button";
import {
  SectionHeader,
  sectionBodyClassName,
} from "@/features/page-builder/sections/shared/ui/SectionHeader";
import { cn } from "@/lib/utils";

import type { GridBentoProps } from "./schema";

type Tile = GridBentoProps["tiles"][number];

const COLS = 3;

type Placed = { row: number; col: number; span: number; tall: boolean };

/**
 * Simule le placement automatique de CSS grid (mode « sparse », le curseur
 * n'avance que vers l'avant) pour connaître la case de chaque tuile.
 */
function place(tiles: Tile[], spans: number[]): Placed[] {
  const rows: boolean[][] = [];
  const free = (r: number, c: number) => !(rows[r]?.[c] ?? false);
  const mark = (r: number, c: number) => {
    rows[r] ??= Array(COLS).fill(false);
    rows[r][c] = true;
  };
  const fits = (r: number, c: number, span: number, tall: boolean) => {
    if (c + span > COLS) return false;
    for (let k = 0; k < span; k++) {
      if (!free(r, c + k) || (tall && !free(r + 1, c + k))) return false;
    }
    return true;
  };
  const out: Placed[] = [];
  let row = 0;
  let col = 0;
  tiles.forEach((t, i) => {
    const span = Math.min(spans[i], COLS);
    const tall = t.kind === "image" && t.span === "tall";
    for (;;) {
      if (fits(row, col, span, tall)) break;
      col++;
      if (col >= COLS) {
        col = 0;
        row++;
      }
    }
    for (let k = 0; k < span; k++) {
      mark(row, col + k);
      if (tall) mark(row + 1, col + k);
    }
    out.push({ row, col, span, tall });
    col += span;
    if (col >= COLS) {
      col = 0;
      row++;
    }
  });
  return out;
}

/**
 * Calcule la largeur de chaque tuile en colonnes : les tuiles `wide` prennent
 * 2 colonnes, les autres 1. On simule ensuite le placement et, tant qu'une
 * rangée contient une case vide, on étire la tuile voisine (celle de gauche,
 * sinon celle de droite) pour la remplir. Les tuiles hautes ne sont jamais
 * étirées : elles entreraient en collision avec la rangée d'à côté.
 */
function computeSpans(tiles: Tile[]): number[] {
  const spans = tiles.map((t) =>
    t.kind === "image" && t.span === "wide" ? 2 : 1,
  );
  for (let iter = 0; iter < tiles.length + 2; iter++) {
    const placed = place(tiles, spans);
    const rowCount = Math.max(...placed.map((p) => p.row + (p.tall ? 2 : 1)));
    const occ: (number | null)[][] = Array.from({ length: rowCount }, () =>
      Array(COLS).fill(null),
    );
    placed.forEach((p, i) => {
      for (let k = 0; k < p.span; k++) {
        occ[p.row][p.col + k] = i;
        if (p.tall) occ[p.row + 1][p.col + k] = i;
      }
    });
    let hole: { row: number; start: number; width: number } | null = null;
    for (let r = 0; r < rowCount && !hole; r++) {
      for (let c = 0; c < COLS; c++) {
        if (occ[r][c] === null) {
          let w = 1;
          while (c + w < COLS && occ[r][c + w] === null) w++;
          hole = { row: r, start: c, width: w };
          break;
        }
      }
    }
    if (!hole) return spans;
    const left = hole.start > 0 ? occ[hole.row][hole.start - 1] : null;
    const rightIdx = hole.start + hole.width;
    const right = rightIdx < COLS ? occ[hole.row][rightIdx] : null;
    const stretchable = (i: number | null) =>
      i !== null && !placed[i].tall && placed[i].row === hole!.row;
    const target = stretchable(left) ? left : stretchable(right) ? right : null;
    if (target === null) return spans;
    spans[target] += hole.width;
  }
  return spans;
}

function spanClass(tile: Tile, cols: number) {
  const col =
    cols >= 3 ? "md:col-span-3" : cols === 2 ? "md:col-span-2" : "";
  const row = tile.kind === "image" && tile.span === "tall" ? "md:row-span-2" : "";
  return `${col} ${row}`.trim();
}

function TileBody({ tile }: { tile: Tile }) {
  switch (tile.kind) {
    case "image": {
      const body = (
        <>
          <Image
            src={tile.image.src}
            alt={tile.image.alt}
            fill
            className="transition-media object-cover group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
          {tile.caption ? (
            <span className="absolute bottom-3 left-3 rounded-full bg-white/92 px-3 py-1.5 text-xs font-semibold text-foreground backdrop-blur">
              {tile.caption}
            </span>
          ) : null}
          {tile.href ? (
            <ArrowPill className="absolute right-3 top-3 size-9 bg-white/92 text-foreground" />
          ) : null}
        </>
      );
      const cls = "group relative block h-full min-h-[220px] overflow-hidden rounded-card bg-muted";
      return tile.href ? (
        <Link href={tile.href} className={cn(cls, "focus-ring")} aria-label={tile.image.alt}>
          {body}
        </Link>
      ) : (
        <div className={cls}>{body}</div>
      );
    }
    case "stat":
      return (
        <div className="flex h-full min-h-[220px] flex-col justify-between rounded-card bg-primary p-6 text-primary-foreground">
          <span className="text-numeral text-[length:var(--title-1)]">{tile.value}</span>
          <span className="text-sm font-medium text-primary-foreground/85">{tile.label}</span>
        </div>
      );
    case "quote":
      return (
        <figure className="flex h-full min-h-[220px] flex-col justify-between rounded-card bg-primary-soft/70 p-6">
          <blockquote className="font-display text-[length:var(--title-5)] font-medium leading-snug tracking-[-0.01em] text-foreground">
            « {tile.quote} »
          </blockquote>
          <figcaption className="mt-4 text-sm font-semibold text-muted-foreground">
            {tile.author}
          </figcaption>
        </figure>
      );
    case "text": {
      const inner = (
        <>
          <div>
            <Heading as="h3" variant="card">
              {tile.title}
            </Heading>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {tile.description}
            </p>
          </div>
          {tile.href ? <ArrowPill className="mt-4 self-end" /> : null}
        </>
      );
      const cls =
        "group flex h-full min-h-[220px] flex-col justify-between rounded-card border border-border/80 bg-card p-6 transition-ui";
      return tile.href ? (
        <Link href={tile.href} className={cn(cls, "focus-ring hover:border-primary hover:bg-primary-soft")}>
          {inner}
        </Link>
      ) : (
        <div className={cls}>{inner}</div>
      );
    }
  }
}

export function GridBento(props: GridBentoProps) {
  const spans = computeSpans(props.tiles);
  return (
    <div className="text-left">
      <SectionHeader heading={props.heading} intro={props.intro} />
      <div
        className={cn(
          props.heading || props.intro ? sectionBodyClassName : "",
          "grid auto-rows-[minmax(220px,auto)] gap-4 md:grid-cols-3",
        )}
      >
        {props.tiles.map((tile, i) => (
          <div key={i} className={spanClass(tile, spans[i])}>
            <TileBody tile={tile} />
          </div>
        ))}
      </div>
    </div>
  );
}
