import type { SplitTextDividerCardsProps } from "./schema";
import { Heading } from "@/components/elements/heading";
import { cn } from "@/lib/utils";

/**
 * Titre à gauche (collant), phrase d'intro et liste de points à droite. Les
 * « cartes » sont des rangées séparées par un filet : titre de carte, une
 * ligne de description.
 */
export function SplitTextDividerCards(props: SplitTextDividerCardsProps) {
  const cols =
    props.columns === "1"
      ? "sm:grid-cols-1"
      : props.columns === "3"
        ? "sm:grid-cols-2 lg:grid-cols-3"
        : "sm:grid-cols-2";

  return (
    <div className="grid gap-y-8 text-left lg:grid-cols-12 lg:gap-x-12">
      <div className="lg:col-span-5">
        <Heading as="h2" variant="h2" className="lg:sticky lg:top-28">
          {props.heading}
        </Heading>
      </div>

      <div className="lg:col-[6/13]">
        <p className="text-lead">{props.description}</p>

        <ul className={cn("mt-8 grid gap-x-8 border-t border-border/80", cols)}>
          {props.cards.map((card) => (
            <li key={card.title} className="border-b border-border/80 py-5">
              <Heading as="h3" variant="card">
                {card.title}
              </Heading>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {card.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
