import React from "react";
import { cn } from "@/lib/utils";
import { SectionShell, type SectionShellProps } from "@/components/ui/section-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Divider } from "../ui/divider";
interface Step {
  id?: string | number;
  step?: string | number;
  title: string;
  description: string;
}

interface ProcessSectionProps extends Omit<SectionShellProps, "title" | "intro" | "actions" | "children"> {
  heading: string;
  intro?: string;
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
  layout = "cards",
  className,
  ...props
}: ProcessSectionProps) => {
  if (!items || items.length === 0) {
    return null;
  }

  const getStepValue = (step: Step, index: number) => step.step ?? step.id ?? index + 1;

  return (
    <SectionShell
      className={className}
      title={<Heading variant="h2">{heading}</Heading>}
      intro={intro}
      actions={actions}
      align="center"
      {...props}
    >
      <Divider />
      {layout === "timeline" ? (
        <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-6">
          {items.map((step, index) => (
            <div key={typeof step.id === "string" ? step.id : index} className="max-lg:flex max-lg:gap-4">
              <div className="relative lg:py-6">
                <div
                  className={cn(
                    "absolute h-full w-1 -translate-x-1/2 translate-y-11 bg-muted/50 bg-linear-to-b max-lg:left-1/2 lg:top-1/2 lg:h-1 lg:w-full lg:translate-x-6 lg:-translate-y-1/2 lg:bg-linear-to-r",
                    index === items.length - 1 && "from-muted/50 to-white"
                  )}
                />
                <div className="relative z-0 grid size-11 place-content-center rounded-full border-4 bg-background">
                  <p className="text-lg font-bold">{getStepValue(step, index)}</p>
                </div>
              </div>
              <div className="max-lg:mt-2">
                <p className="text-lg font-semibold text-black">{step.title}</p>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {items.map((step, index) => (
            <Card key={typeof step.id === "string" ? step.id : index} className="relative">
              <CardHeader>
                <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold text-primary">
                  {getStepValue(step, index)}
                </div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </SectionShell>
  );
};

export { ProcessSection };
