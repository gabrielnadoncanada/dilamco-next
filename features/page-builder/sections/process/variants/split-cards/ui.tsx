import { AppLink as Link } from "@/components/AppLink";
import { Button, ButtonArrow } from "@/components/ui/button";
import type { SplitCardsProps } from "./schema";
import { Heading } from "@/components/elements/heading";

/**
 * Titre à gauche, étapes numérotées à droite en liste verticale (numéro en
 * police d'affichage, filet entre les étapes).
 */
export function SplitCards(props: SplitCardsProps) {
  return (
    <div className="grid gap-y-8 text-left lg:grid-cols-12 lg:items-start lg:gap-x-12">
      <div className="lg:col-span-5">
        <Heading as="h2" variant="h2" className="lg:sticky lg:top-28">
          {props.heading}
        </Heading>
        <p className="text-lead mt-4">{props.description}</p>
      </div>

      <div className="lg:col-[6/13]">
        <ol className="border-t border-border/80">
          {props.steps.map((step, index) => (
            <li
              key={`${step.number}-${step.title}`}
              className="grid grid-cols-[3.5rem_1fr] gap-4 border-b border-border/80 py-5 sm:grid-cols-[4.5rem_1fr]"
            >
              <span className="text-numeral text-[length:var(--title-4)] text-primary">
                {String(step.number || index + 1).padStart(2, "0")}
              </span>
              <div>
                <Heading as="h3" variant="card">
                  {step.title}
                </Heading>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {props.actions?.length ? (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {props.actions.map((a, index) => (
              <Button
                key={`${a.href}-${a.label}`}
                asChild
                variant={a.variant ?? (index === 0 ? "primary" : "ghost")}
              >
                <Link href={a.href}>
                  {a.label}
                  {index === 0 ? <ButtonArrow /> : null}
                </Link>
              </Button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
