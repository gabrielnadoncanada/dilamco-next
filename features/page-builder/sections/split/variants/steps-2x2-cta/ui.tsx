import { AppLink as Link } from "@/components/AppLink";
import { Button, ButtonArrow } from "@/components/ui/button";
import type { SplitSteps2x2CtaProps } from "./schema";
import { Heading } from "@/components/elements/heading";

export function SplitSteps2x2Cta(props: SplitSteps2x2CtaProps) {
  return (
    <div className="grid gap-y-8 text-left lg:grid-cols-12 lg:items-start lg:gap-x-12">
      <div className="lg:col-span-5">
        <Heading as="h2" variant="h2">
          {props.heading}
        </Heading>
        <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
          {props.description}
        </p>
      </div>

      <div className="lg:col-[6/13]">
        <div className="grid gap-4 sm:grid-cols-2">
          {props.steps.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-primary-soft/60 p-6"
            >
              <h3 className="font-display text-lg font-semibold leading-snug tracking-[-0.015em] text-foreground">
                {s.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        {props.actions?.length ? (
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
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
