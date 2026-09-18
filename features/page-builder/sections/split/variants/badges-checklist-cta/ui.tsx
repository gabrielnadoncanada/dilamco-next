import { Check } from "lucide-react";
import { AppLink as Link } from "@/components/AppLink";
import { Badge } from "@/components/ui/badge";
import { Button, ButtonArrow } from "@/components/ui/button";
import type { SplitBadgesChecklistCtaProps } from "./schema";
import { Heading } from "@/components/elements/heading";

/**
 * Titre + intro + pastilles à gauche ; panneau vert de marque à droite avec
 * une liste à cocher et les actions.
 */
export function SplitBadgesChecklistCta(props: SplitBadgesChecklistCtaProps) {
  const primaryAction = props.actions[0];
  const secondaryAction = props.actions[1];

  return (
    <div className="grid gap-y-8 text-left lg:grid-cols-12 lg:items-center lg:gap-x-12">
      <div className="lg:col-span-5">
        <Heading as="h2" variant="h2">
          {props.heading}
        </Heading>

        <p className="text-lead mt-4">{props.intro}</p>

        {props.badges?.length ? (
          <div className="mt-6 flex flex-wrap gap-2">
            {props.badges.slice(0, 4).map((badge) => (
              <Badge key={badge} variant="secondary">
                {badge}
              </Badge>
            ))}
          </div>
        ) : null}
      </div>

      <div className="lg:col-[7/13]">
        <div className="rounded-panel bg-primary p-7 text-primary-foreground sm:p-10">
          <Heading as="h3" variant="h3" className="text-primary-foreground">
            {props.cardTitle}
          </Heading>

          <ul className="mt-6 space-y-3.5">
            {props.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[0.9375rem] leading-relaxed"
              >
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                <span className="text-primary-foreground/92">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="paper">
              <Link href={primaryAction.href}>
                {primaryAction.label}
                <ButtonArrow />
              </Link>
            </Button>
            {secondaryAction ? (
              <Button asChild variant="ghost-light">
                <Link href={secondaryAction.href}>{secondaryAction.label}</Link>
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
