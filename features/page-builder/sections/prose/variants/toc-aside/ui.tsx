import Image from "next/image";
import { ChevronDown } from "lucide-react";

import { Heading } from "@/components/elements/heading";
import { renderInline } from "@/features/page-builder/sections/prose/shared/inline";
import {
  slugifyHeading,
  stripInline,
} from "@/features/page-builder/sections/prose/shared/inline-text";

import type { ProseNode, ProseTocAsideProps } from "./schema";

type TocEntry = { id: string; label: string };

function headingId(node: Extract<ProseNode, { type: "h2" }>) {
  return node.id ?? slugifyHeading(node.text);
}

function TocList({ entries }: { entries: TocEntry[] }) {
  return (
    <ol className="grid gap-1">
      {entries.map((entry, index) => (
        <li key={entry.id}>
          <a
            href={`#${entry.id}`}
            className="group flex gap-3 rounded-control px-3 py-2 text-sm leading-snug text-muted-foreground transition-ui hover:bg-primary-soft hover:text-primary focus-ring"
          >
            <span className="text-numeral w-4 shrink-0 tabular-nums text-primary/70 group-hover:text-primary">
              {index + 1}
            </span>
            <span>{entry.label}</span>
          </a>
        </li>
      ))}
    </ol>
  );
}

function Node({ node }: { node: ProseNode }) {
  switch (node.type) {
    case "h2":
      return (
        <Heading
          as="h2"
          variant="h3"
          id={headingId(node)}
          className="scroll-mt-28 pt-6 first:pt-0"
        >
          {stripInline(node.text)}
        </Heading>
      );
    case "h3":
      return (
        <Heading as="h3" variant="card" className="pt-2">
          {stripInline(node.text)}
        </Heading>
      );
    case "p":
      return <p>{renderInline(node.text)}</p>;
    case "ul":
      return (
        <ul className="grid list-disc gap-2 pl-5 marker:text-primary">
          {node.items.map((item, i) => (
            <li key={i} className="pl-1">
              {renderInline(item)}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="grid list-decimal gap-2 pl-5 marker:font-semibold marker:text-primary">
          {node.items.map((item, i) => (
            <li key={i} className="pl-1">
              {renderInline(item)}
            </li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <aside className="rounded-card bg-primary-soft px-5 py-5 sm:px-6">
          {node.title ? (
            <p className="text-label mb-3 text-primary">{node.title}</p>
          ) : null}
          {node.text ? <p>{renderInline(node.text)}</p> : null}
          {node.items ? (
            <ul className="mt-1 grid list-disc gap-2 pl-5 marker:text-primary">
              {node.items.map((item, i) => (
                <li key={i} className="pl-1">
                  {renderInline(item)}
                </li>
              ))}
            </ul>
          ) : null}
        </aside>
      );
    case "table":
      return (
        <figure>
          <div className="overflow-x-auto rounded-card border border-border/80 bg-card">
            <table className="w-full min-w-[30rem] border-collapse text-left text-[0.9375rem]">
              <thead className="bg-muted/70">
                <tr>
                  {node.head.map((cell) => (
                    <th key={cell} scope="col" className="text-label px-4 py-3 text-muted-foreground">
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {node.rows.map((row, r) => (
                  <tr key={r} className="border-t border-border/70 align-top">
                    {row.map((cell, c) =>
                      c === 0 ? (
                        <th key={c} scope="row" className="px-4 py-3 font-semibold text-foreground">
                          {renderInline(cell)}
                        </th>
                      ) : (
                        <td key={c} className="px-4 py-3">
                          {renderInline(cell)}
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {node.caption ? (
            <figcaption className="mt-2 text-sm text-muted-foreground">{node.caption}</figcaption>
          ) : null}
        </figure>
      );
    case "image":
      return (
        <figure>
          <div className="relative aspect-[16/10] overflow-hidden rounded-card bg-muted">
            <Image
              src={node.src}
              alt={node.alt}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 720px, 100vw"
            />
          </div>
          {node.caption ? (
            <figcaption className="mt-2 text-sm text-muted-foreground">{node.caption}</figcaption>
          ) : null}
        </figure>
      );
  }
}

/**
 * Corps de texte long (article) : colonne de lecture centrée (≤ 68 caractères)
 * et table des matières tirée des intertitres h2 — collante à gauche dès `xl`,
 * repliée en tête de texte en dessous. Rendu 100 % serveur.
 */
export function ProseTocAside(props: ProseTocAsideProps) {
  const toc: TocEntry[] = props.nodes
    .filter((n): n is Extract<ProseNode, { type: "h2" }> => n.type === "h2")
    .map((n) => ({ id: headingId(n), label: stripInline(n.text) }));
  const hasToc = toc.length >= 2;

  return (
    <div className="text-left xl:grid xl:grid-cols-[minmax(0,1fr)_minmax(0,42rem)_minmax(0,1fr)] xl:gap-x-12">
      {hasToc ? (
        <nav aria-label={props.tocLabel} className="hidden xl:block">
          <div className="sticky top-28">
            <p className="text-label mb-3 px-3 text-muted-foreground">{props.tocLabel}</p>
            <TocList entries={toc} />
          </div>
        </nav>
      ) : (
        <div className="hidden xl:block" />
      )}

      <div className="mx-auto min-w-0 max-w-[42rem]">
        {hasToc ? (
          <details className="group mb-10 rounded-card border border-border/80 bg-card xl:hidden">
            <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 font-semibold focus-ring rounded-card [&::-webkit-details-marker]:hidden">
              {props.tocLabel}
              <ChevronDown className="size-5 text-primary transition-ui group-open:rotate-180" aria-hidden />
            </summary>
            <nav aria-label={props.tocLabel} className="border-t border-border/70 px-1 py-2">
              <TocList entries={toc} />
            </nav>
          </details>
        ) : null}

        {/* minmax(0,1fr) : sans lui, un tableau large élargit la colonne au
            lieu de défiler dans sa carte (débordement horizontal sur mobile). */}
        <div className="grid grid-cols-[minmax(0,1fr)] gap-5 text-base leading-[1.75] text-foreground sm:text-[1.0625rem]">
          {props.nodes.map((node, i) => (
            <Node key={i} node={node} />
          ))}
        </div>
      </div>
    </div>
  );
}
