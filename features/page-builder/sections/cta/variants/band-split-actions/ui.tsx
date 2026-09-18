import { AppLink as Link } from "@/components/AppLink";
import { Button, ButtonArrow } from "@/components/ui/button";
import type { CtaBandSplitActionsProps } from "./schema";

/**
 * Bande d'appel à l'action « encre » : fond charbon, grand titre, une phrase,
 * boutons clairs. Ferme chaque page.
 */
export function CtaBandSplitActions(props: CtaBandSplitActionsProps) {
  const primary = props.actions[0];
  const secondary = props.actions[1];

  return (
    <div className="relative overflow-hidden rounded-[1.75rem] bg-ink px-6 py-12 text-left text-ink-foreground sm:px-10 sm:py-16 lg:px-16 lg:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 size-[380px] rounded-full bg-primary/40 blur-3xl"
      />
      <div className="relative grid gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <h2 className="display-heading text-[clamp(2rem,1.2rem+2.8vw,3.5rem)] text-ink-foreground">
            {props.heading}
          </h2>
          <p className="mt-4 max-w-[46ch] text-base leading-relaxed text-ink-muted sm:text-lg">
            {props.intro}
          </p>
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
