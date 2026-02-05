import React from "react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { ActionButtons, type ActionButton } from "@/components/ActionButtons";
import { Heading } from "@/components/ui/heading";
import { VariantProps } from "class-variance-authority";
import { Divider } from "../ui/divider";
import { Container } from "../elements/container";

interface CTASectionProps extends React.HTMLAttributes<HTMLElement> {
  heading: string;
  description: string;
  actions: ActionButton[];
  variant?: VariantProps<typeof Section>["variant"];
  className?: string;
}

const CTASection = ({
  heading,
  description,
  actions,
  variant = "default",
  className,
  ...props
}: CTASectionProps) => {
  return (
    <Section variant={variant} className={cn(className, 'py-[var(--_spacing---section-space--main)]')} {...props}>
      <Divider />
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Heading variant="h1" as="h2" className="mb-4 lg:mb-6">
            {heading}
          </Heading>
          <p className="mb-8 text-lg font-medium text-muted-foreground md:text-xl lg:mb-10">
            {description}
          </p>
          <ActionButtons buttons={actions} className="justify-center" />
        </div>
      </Container>
    </Section>
  );
};

export { CTASection };
