import type { ProcessHorizontalStepsCardsProps } from "./schema";
import { Heading } from "@/components/elements/heading";
import {
  SectionHeader,
  sectionBodyClassName,
} from "@/features/page-builder/sections/shared/ui/SectionHeader";
import { cn } from "@/lib/utils";

/**
 * Étapes numérotées en ligne : numéro en police d'affichage, titre de carte,
 * une ligne. Le numéro est légitime : le processus est une vraie séquence.
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
          "grid gap-x-6 gap-y-8 border-t border-foreground/15 sm:grid-cols-2",
          cols,
        )}
      >
        {props.steps.map((step, index) => (
          <li key={`${step.number}-${step.title}`} className="relative pt-6">
            <span
              aria-hidden
              className="absolute -top-px left-0 h-0.5 w-10 bg-primary"
            />
            <span className="text-numeral text-[length:var(--title-3)] text-primary">
              {String(step.number || index + 1).padStart(2, "0")}
            </span>
            <Heading as="h3" variant="card" className="mt-4">
              {step.title}
            </Heading>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
