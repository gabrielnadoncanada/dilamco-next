import { AppLink as Link } from "@/components/AppLink";

import { ArrowPill } from "@/components/ui/button";
import {
  SectionHeader,
  sectionBodyClassName,
} from "@/features/page-builder/sections/shared/ui/SectionHeader";

import type { GridLinkCardsCompactProps } from "./schema";

/**
 * Liens compacts (zones, pages sœurs). Mobile : pastilles qui s'enchaînent
 * (nom seul, pas de flèche ni de note) pour que onze villes tiennent en cinq
 * lignes. Dès `md` : une carte par lien avec titre, note courte, flèche.
 */
export function GridLinkCardsCompact(props: GridLinkCardsCompactProps) {
  const gridCols = props.columns === "3" ? "lg:grid-cols-3" : "md:grid-cols-2";

  return (
    <div className="text-left">
      <SectionHeader heading={props.heading} intro={props.intro} />

      <ul
        className={`${sectionBodyClassName} flex flex-wrap gap-2 md:grid md:grid-cols-2 md:gap-4 ${gridCols}`}
      >
        {props.items.map((item) => (
          <li key={item.href} className="md:contents">
            <Link
              href={item.href}
              aria-label={item.ctaLabel}
              className="group inline-flex min-h-11 items-center gap-3 rounded-full border border-border/80 bg-card px-4 py-2 transition-ui focus-ring hover:border-primary hover:bg-primary-soft md:h-full md:min-h-[4.75rem] md:justify-between md:gap-4 md:rounded-card md:px-5 md:py-3"
            >
              <span className="min-w-0">
                <span className="block font-display text-[0.9375rem] font-semibold leading-snug tracking-[-0.01em] md:text-[length:var(--title-5)] md:leading-[1.25] md:tracking-[-0.015em]">
                  {item.title}
                </span>
                {item.description ? (
                  <span className="mt-0.5 hidden truncate text-sm text-muted-foreground md:block">
                    {item.description}
                  </span>
                ) : null}
              </span>
              <ArrowPill className="hidden size-9 md:inline-flex" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
