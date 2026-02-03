import React from "react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/Section";
import { Heading } from "@/components/ui/heading";
import { Container } from "../elements/container";

export interface Step {
  id: string | number;
  title: string;
  description: string;
}

interface StepsSectionProps extends React.HTMLAttributes<HTMLElement> {
  heading: string;
  description?: string;
  steps: Step[];
  className?: string;
}

const StepItem: React.FC<{
  step: Step;
  isLast: boolean;
  className?: string;
}> = ({ step, isLast, className }) => {
  return (
    <div className={cn("max-lg:flex max-lg:gap-4", className)}>
      <div className="relative lg:py-6">
        <div
          className={cn(
            "absolute h-full w-1 -translate-x-1/2 translate-y-11 bg-muted/50 bg-linear-to-b max-lg:left-1/2 lg:top-1/2 lg:h-1 lg:w-full lg:translate-x-6 lg:-translate-y-1/2 lg:bg-linear-to-r",
            isLast && "from-muted/50 to-white"
          )}
        />
        <div className="relative z-0 grid size-11 place-content-center rounded-full border-4 bg-background">
          <p className="text-lg font-bold">{step.id}</p>
        </div>
      </div>
      <div className="max-lg:mt-2">
        <p className="text-lg font-semibold text-black">{step.title}</p>
        <p className="mt-2 text-muted-foreground">{step.description}</p>
      </div>
    </div>
  );
};

const StepsSection = ({
  heading,
  description,
  steps,
  className,
  ...props
}: StepsSectionProps) => {
  if (!steps || steps.length === 0) {
    return null;
  }

  return (
    <Section className={className} {...props}>
      <Container>
        <div className="space-y-8 md:space-y-12">
          <div>
            <Heading variant="h2" className="mb-4">
              {heading}
            </Heading>
            {description && (
              <p className="mt-4 text-muted-foreground md:text-lg">
                {description}
              </p>
            )}
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-6">
            {steps.map((step, index) => (
              <StepItem
                key={typeof step.id === "string" ? step.id : index}
                step={step}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export { StepsSection };
