import React from "react";
import { type SectionShellProps } from "@/components/ui/section-shell";
import { ProcessSection } from "@/components/sections/ProcessSection";
export interface Step {
  id: string | number;
  title: string;
  description: string;
}

interface StepsSectionProps extends Omit<SectionShellProps, "title" | "intro" | "children"> {
  heading: string;
  description?: string;
  steps: Step[];
  className?: string;
}

const StepsSection = ({
  heading,
  description,
  steps,
  className,
  ...props
}: StepsSectionProps) => {
  return (
    <ProcessSection
      className={className}
      heading={heading}
      description={description}
      layout="timeline"
      steps={steps.map((step) => ({
        id: step.id,
        title: step.title,
        description: step.description,
      }))}
      {...props}
    />
  );
};

export { StepsSection };
