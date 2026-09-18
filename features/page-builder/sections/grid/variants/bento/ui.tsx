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

/**
 * Calcule la largeur de chaque tuile en colonnes : les tuiles `wide` prennent
 * 2 colonnes, les autres 1 ; si la dernière rangée reste incomplète, sa
 * dernière tuile s'étire pour la remplir (jamais de trou dans la grille).
 */
function computeSpans(tiles: Tile[]): number[] {
  const spans = tiles.map((t) =>
    t.kind === "image" && t.span === "wide" ? 2 : 1,
  );
  let used = 0;
  let rowStart = 0;
  spans.forEach((span, i) => {
    if (used + span > COLS) {
      // La tuile précédente ferme la rangée : elle absorbe le reste.
      if (i > 0) spans[i - 1] += COLS - used;
      used = 0;
      rowStart = i;
    }
    used += span;
    if (used === COLS) {
      used = 0;
      rowStart = i + 1;
    }
  });
  if (used > 0 && used < COLS) {
    // Le reste va de préférence à une photo de la dernière rangée (une tuile
    // texte ou chiffre étirée sur 2 colonnes serait vide).
    let target = spans.length - 1;
    for (let j = spans.length - 1; j >= rowStart; j--) {
      if (tiles[j].kind === "image") {
        target = j;
        break;
      }
    }
    spans[target] += COLS - used;
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
