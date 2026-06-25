import { AppLink as Link } from "@/components/AppLink";
import { Button } from "@/components/ui/button";
import type { CtaBandSplitActionsProps } from "./schema";
import { Heading } from "@/components/elements/heading";

export function CtaBandSplitActions(props: CtaBandSplitActionsProps) {
  const primary = props.actions[0];
  const secondary = props.actions[1];

  return (
    <div className="rounded-none border bg-card p-8 sm:p-10">
      <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-8">
          <Heading as="h2" variant="h2">
            {props.heading}
          </Heading>
          <p className="mt-3 text-muted-foreground">{props.intro}</p>
        </div>

        <div className="lg:col-span-4 lg:flex lg:justify-end">
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
            <Button
              asChild
              size="default"
              variant={primary.variant ?? "primary"}
            >
              <Link href={primary.href}>{primary.label}</Link>
            </Button>

            {secondary ? (
              <Button
                asChild
                size="default"
                variant={secondary.variant ?? "ghost"}
              >
                <Link href={secondary.href}>{secondary.label}</Link>
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
