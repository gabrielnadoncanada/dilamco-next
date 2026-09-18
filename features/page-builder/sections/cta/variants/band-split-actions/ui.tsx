import { AppLink as Link } from "@/components/AppLink";
import { Heading } from "@/components/elements/heading";
import { Button, ButtonArrow } from "@/components/ui/button";
import type { CtaBandSplitActionsProps } from "./schema";

/**
 * Bande d'appel à l'action « encre » : panneau charbon, titre sur l'échelle
 * h1, une phrase, boutons clairs. Ferme chaque page.
 */
export function CtaBandSplitActions(props: CtaBandSplitActionsProps) {
  const primary = props.actions[0];
  const secondary = props.actions[1];

  return (
    <div className="relative overflow-hidden rounded-panel bg-ink px-6 py-12 text-left text-ink-foreground sm:px-10 sm:py-16 lg:px-14 lg:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 size-[380px] rounded-full bg-primary/40 blur-3xl"
      />
      <div className="relative grid gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <Heading as="h2" variant="h1" className="text-ink-foreground">
            {props.heading}
          </Heading>
          <p className="text-lead mt-4 text-ink-muted">{props.intro}</p>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-5 lg:items-end">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="xl" variant="paper">
              <Link href={primary.href}>
                {primary.label}
                <ButtonArrow />
              </Link>
            </Button>
            {secondary ? (
              <Button asChild size="xl" variant="ghost-light">
                <Link href={secondary.href}>{secondary.label}</Link>
              </Button>
            ) : null}
          </div>
          {props.note ? (
            <p className="text-xs text-ink-muted lg:text-right">{props.note}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
