import React from "react";
import { cn } from "@/lib/utils";
import { type SectionShellProps } from "@/components/elements/section-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Step {
  id?: string | number;
  step?: string | number;
  title: string;
  description: string;
}

interface ProcessSectionProps extends Omit<
  SectionShellProps,
  | "title"
  | "intro"
  | "actions"
  | "children"
  | "surface"
  | "padding"
  | "container"
  | "eyebrow"
  | "align"
  | "contentClassName"
  | "headerClassName"
  | "bodyClassName"
> {
  heading: string;
  intro?: React.ReactNode;
  items: Step[];
  actions?: React.ReactNode;
  layout?: "cards" | "timeline";
  className?: string;
}

const ProcessSection = ({
  heading,
  intro,
  items,
  actions,
  layout,
  className,
  "aria-labelledby": ariaLabelledby,
  ...props
}: ProcessSectionProps) => {
  void layout;

  if (!items || items.length === 0) {
    return null;
  }

  const getStepValue = (step: Step, index: number) => step.step ?? step.id ?? index + 1;
  const headingId = typeof ariaLabelledby === "string" ? ariaLabelledby : undefined;

  return (
    <section
      aria-labelledby={ariaLabelledby}
      className={cn("mx-auto max-w-7xl px-4 py-14 sm:py-16", className)}
      {...props}
    >
      <div className="flex flex-col gap-3">
        <h2 id={headingId} className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {heading}
        </h2>
        {typeof intro === "string" ? (
          <p className="max-w-2xl text-muted-foreground">{intro}</p>
        ) : intro ? (
          <div className="max-w-2xl text-muted-foreground">{intro}</div>
        ) : null}
      </div>

      <div className="mt-10">
        <div className="grid gap-6 lg:grid-cols-5">
          {items.map((step, index) => (
            <Card key={typeof step.id === "string" ? step.id : `${step.title}-${index}`} className="relative">
              {/* <div className="pointer-events-none absolute left-0 top-6 hidden h-px w-full bg-border lg:block" /> */}
              <CardHeader className="">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 aspect-square items-center justify-center rounded-full border bg-background text-sm font-semibold">
                    {getStepValue(step, index)}
                  </div>
                  <CardTitle className="text-base">{step.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{step.description}</CardContent>
            </Card>
          ))}
        </div>
      </div>

      {actions ? <div className="mt-8">{actions}</div> : null}
    </section>
  );
};

export { ProcessSection };
