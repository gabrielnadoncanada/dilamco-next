import { AppLink as Link } from "@/components/AppLink";
import { Button } from "@/components/ui/button";
import type { SplitCardsProps } from "./schema";
import { Heading } from "@/components/elements/heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SplitCards(props: SplitCardsProps) {
  return (
    <div className="grid gap-y-8 lg:grid-cols-12 lg:items-start">
      <div className="lg:col-span-5">
        <Heading as="h2" variant="h2">
          {props.heading}
        </Heading>
        <p className="mt-3 text-sm text-muted-foreground">
          {props.description}
        </p>
      </div>

      <div className="lg:col-[7/13]">
        <div className="grid gap-4 sm:grid-cols-2">
          {props.steps.map((step) => (
            <Card key={`${step.number}-${step.title}`} className="relative">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-none border bg-background text-sm font-semibold">
                    {step.number}
                  </div>
                  <CardTitle className="text-base">{step.title}</CardTitle>
                </div>
              </CardHeader>

              <CardContent className="text-sm text-muted-foreground">
                {step.description}
              </CardContent>
            </Card>
          ))}
        </div>

        {props.actions?.length ? (
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            {props.actions.map((a) => (
              <Button
                key={`${a.href}-${a.label}`}
                asChild
                variant={a.variant ?? "primary"}
              >
                <Link href={a.href}>{a.label}</Link>
              </Button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
