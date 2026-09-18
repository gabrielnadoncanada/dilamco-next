import type { ProcessHorizontalStepsCardsProps } from "./schema";
import { Heading } from "@/components/elements/heading";
import { cn } from "@/lib/utils";

/**
 * Étapes numérotées en ligne : grand numéro en police d'affichage, titre
 * court, une ligne. Le numéro est légitime ici : le processus est une vraie
 * séquence.
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

      <ol
        className={cn(
          "mt-10 grid gap-x-6 gap-y-8 border-t border-foreground/15 sm:grid-cols-2",
          cols,
        )}
      >
        {props.steps.map((step, index) => (
          <li
            key={`${step.number}-${step.title}`}
            className="relative pt-6"
          >
            <span
              aria-hidden
              className="absolute -top-px left-0 h-0.5 w-10 bg-primary"
            />
            <span className="font-display text-4xl font-semibold leading-none tracking-[-0.04em] text-primary tabular-nums">
              {String(step.number || index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold leading-snug tracking-[-0.015em] text-foreground">
              {step.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
