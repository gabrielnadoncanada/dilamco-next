import { ArrowUpRight } from "lucide-react";
import { AppLink as Link } from "@/components/AppLink";

import { Heading } from "@/components/elements/heading";

import type { GridLinkCardsCompactProps } from "./schema";

/**
 * Grille de liens compacts (zones, pages sœurs) : une rangée par lien, titre
 * en gras, note courte facultative, flèche. Pas de carte, pas de bouton.
 */
export function GridLinkCardsCompact(props: GridLinkCardsCompactProps) {
  const gridCols = props.columns === "3" ? "md:grid-cols-3" : "md:grid-cols-2";

  return (
    <div className="text-left">
      <div className="max-w-2xl">
        <Heading as="h2" variant="h2">
          {props.heading}
        </Heading>
        {props.intro ? (
          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {props.intro}
          </p>
        ) : null}
      </div>

      <ul className={`mt-8 grid gap-3 sm:grid-cols-2 ${gridCols}`}>
        {props.items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-label={item.ctaLabel}
              className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-border/80 bg-card px-5 py-4 transition-[border-color,background-color] duration-200 hover:border-primary hover:bg-primary-soft focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/40"
            >
              <span className="min-w-0">
                <span className="block font-display text-lg font-semibold leading-tight tracking-[-0.015em] text-foreground">
                  {item.title}
                </span>
                {item.description ? (
                  <span className="mt-0.5 block truncate text-sm text-muted-foreground">
                    {item.description}
                  </span>
                ) : null}
              </span>
              <span
                aria-hidden
                className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground"
              >
                <ArrowUpRight className="size-4" strokeWidth={2.25} />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
