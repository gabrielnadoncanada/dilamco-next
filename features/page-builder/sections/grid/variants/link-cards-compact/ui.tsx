import { AppLink as Link } from "@/components/AppLink";

import { Heading } from "@/components/elements/heading";
import { ArrowPill } from "@/components/ui/button";
import {
  SectionHeader,
  sectionBodyClassName,
} from "@/features/page-builder/sections/shared/ui/SectionHeader";

import type { GridLinkCardsCompactProps } from "./schema";

/**
 * Grille de liens compacts (zones, pages sœurs) : une rangée par lien, titre
 * de carte, note courte facultative, flèche. Pas de bouton.
 */
export function GridLinkCardsCompact(props: GridLinkCardsCompactProps) {
  const gridCols = props.columns === "3" ? "md:grid-cols-3" : "md:grid-cols-2";

  return (
    <div className="text-left">
      <SectionHeader heading={props.heading} intro={props.intro} />

      <ul className={`${sectionBodyClassName} grid gap-4 sm:grid-cols-2 ${gridCols}`}>
        {props.items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-label={item.ctaLabel}
              className="group flex h-full min-h-[4.75rem] items-center justify-between gap-4 rounded-card border border-border/80 bg-card px-5 py-3 transition-ui focus-ring hover:border-primary hover:bg-primary-soft"
            >
              <span className="min-w-0">
                <Heading as="h3" variant="card" className="block">
                  {item.title}
                </Heading>
                {item.description ? (
                  <span className="mt-0.5 block truncate text-sm text-muted-foreground">
                    {item.description}
                  </span>
                ) : null}
              </span>
              <ArrowPill className="size-9" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
