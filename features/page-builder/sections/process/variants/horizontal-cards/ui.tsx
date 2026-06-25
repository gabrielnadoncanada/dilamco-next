import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ProcessHorizontalStepsCardsProps } from "./schema";
import { Heading } from "@/components/elements/heading";
import { cn } from "@/lib/utils";

export function ProcessHorizontalStepsCards(
  props: ProcessHorizontalStepsCardsProps,
) {
  const gridClassName =
    props.steps.length >= 5 ? "lg:grid-cols-5" : "lg:grid-cols-4";

  return (
    <div>
      <div className="flex flex-col gap-3">
        <Heading as="h2" variant="h2">
          {props.heading}
        </Heading>

        {props.intro ? (
          <p className="max-w-2xl text-muted-foreground">{props.intro}</p>
        ) : null}
      </div>

      <div className="mt-10">
        {/* Responsive: keep cards readable on small screens */}
        <div className={cn("grid gap-6 sm:grid-cols-2", gridClassName)}>
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
      </div>
    </div>
  );
}
