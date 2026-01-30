import React from "react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/Section";
import { ActionButtons, type ActionButton } from "@/components/ActionButtons";
import { Heading } from "@/components/ui/heading";

interface CTASectionProps extends React.HTMLAttributes<HTMLElement> {
  heading: string;
  description: string;
  actions: ActionButton[];
  variant?: "default" | "accent";
  className?: string;
}

const CTASection = ({
  heading,
  description,
  actions,
  variant = "accent",
  className,
  ...props
}: CTASectionProps) => {
  return (
    <Section variant={variant} className={className} {...props}>
      <div className="mx-auto max-w-4xl text-center">
        <Heading variant="h1" as="h2" className="mb-4 lg:mb-6">
          {heading}
        </Heading>
        <p className="mb-8 text-lg font-medium text-muted-foreground md:text-xl lg:mb-10">
          {description}
        </p>
        <ActionButtons buttons={actions} className="justify-center" />
      </div>
    </Section>
  );
};

export { CTASection };
