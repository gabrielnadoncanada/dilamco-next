import React from "react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Container } from "../elements/container";

interface Step {
  step: string | number;
  title: string;
  description: string;
}

interface ProcessSectionProps extends React.HTMLAttributes<HTMLElement> {
  heading: string;
  description?: string;
  steps: Step[];
  actions?: React.ReactNode;
  className?: string;
}

const ProcessSection = ({
  heading,
  description,
  steps,
  actions,
  className,
  ...props
}: ProcessSectionProps) => {
  return (
    <Section className={className} {...props}>
      <Container>
        <div className="space-y-8 md:space-y-12">
          <div className="text-center">
            <Heading variant="h2" className="mb-4">
              {heading}
            </Heading>
            {description && (
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
                {description}
              </p>
            )}
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold text-primary">
                    {step.step}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          {actions && (
            <div className="flex justify-center pt-4">
              {actions}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};

export { ProcessSection };
