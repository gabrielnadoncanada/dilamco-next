import type { ProcessHorizontalStepsCardsProps } from "./schema";
import { Heading } from "@/components/elements/heading";
import {
  SectionHeader,
  sectionBodyClassName,
} from "@/features/page-builder/sections/shared/ui/SectionHeader";
import { cn } from "@/lib/utils";

/**
 * Frise d'étapes. Desktop (lg+) : un rail horizontal continu avec des jalons
 * numérotés, une colonne par étape. Sous lg : rail vertical à gauche, une
 * étape par ligne (plus d'orphelin en grille 2 × N).
 */
export function ProcessHorizontalStepsCards(
  props: ProcessHorizontalStepsCardsProps,
) {
  const count = props.steps.length;
  const cols =
    count >= 5
      ? "lg:grid-cols-5"
      : count === 4
        ? "lg:grid-cols-4"
        : count === 3
          ? "lg:grid-cols-3"
          : "lg:grid-cols-2";

  return (
    <div className="text-left">
      <SectionHeader heading={props.heading} intro={props.intro} />

      <ol
        className={cn(
          sectionBodyClassName,
          // Rail : vertical (gauche) sous lg, horizontal (haut) à partir de lg.
          "relative grid gap-y-10 before:absolute before:bg-border before:content-[''] max-lg:before:bottom-6 max-lg:before:left-[19px] max-lg:before:top-6 max-lg:before:w-px lg:gap-x-6 lg:before:left-0 lg:before:right-0 lg:before:top-[19px] lg:before:h-px",
          cols,
        )}
      >
        {props.steps.map((step, index) => {
          const n = String(step.number || index + 1).padStart(2, "0");
          return (
            <li
              key={`${step.number}-${step.title}`}
              className="relative grid grid-cols-[40px_1fr] content-start gap-x-4 lg:grid-cols-1 lg:gap-y-6"
            >
              <span
                aria-hidden
                className="text-numeral relative z-10 flex size-10 items-center justify-center rounded-full bg-primary text-sm text-primary-foreground ring-4 ring-background"
              >
                {n}
              </span>
              <div className="pt-1.5 lg:pt-0">
                <Heading as="h3" variant="card">
                  {step.title}
                </Heading>
                <p className="mt-1.5 max-w-[34ch] text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
