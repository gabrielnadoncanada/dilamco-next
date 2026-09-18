import type { ReactNode } from "react";

import { Heading } from "@/components/elements/heading";
import { cn } from "@/lib/utils";

/** Style unique du paragraphe d'introduction sous un titre de section. */
export const leadClassName =
  "max-w-[56ch] text-base leading-relaxed text-muted-foreground sm:text-lg";

/** Espace entre l'en-tête d'une section et son contenu. */
export const sectionBodyClassName = "mt-10";

/**
 * En-tête de section commun à tous les blocs : titre h2 sur l'échelle
 * `--title-3`, intro optionnelle, emplacement optionnel à droite (navigation
 * de carrousel, lien). Garantit la même typographie et le même rythme partout.
 */
export function SectionHeader({
  heading,
  intro,
  aside,
  className,
  as = "h2",
}: {
  heading?: string;
  intro?: string;
  aside?: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  if (!heading && !intro) return null;

  return (
    <div
      className={cn(
        "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
        className,
      )}
    >
      <div className="max-w-2xl">
        {heading ? (
          <Heading as={as} variant="h2">
            {heading}
          </Heading>
        ) : null}
        {intro ? <p className={cn("mt-4", leadClassName)}>{intro}</p> : null}
      </div>
      {aside ? <div className="shrink-0">{aside}</div> : null}
    </div>
  );
}
