import React from "react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/Section";
import { type LucideIcon } from "lucide-react";
import { Heading } from "@/components/ui/heading";
import { Container } from "../elements/container";

interface ProofItem {
  title: string;
  description: string;
  icon?: LucideIcon;
}

interface ProofSectionProps extends React.HTMLAttributes<HTMLElement> {
  heading: string;
  description?: string;
  items: ProofItem[];
  className?: string;
}

const ProofSection = ({
  heading,
  description,
  items,
  className,
  ...props
}: ProofSectionProps) => {
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
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {items.map((item, index) => (
              <div key={index} className="flex gap-4">
                {item.icon && (
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="size-6 text-primary" />
                  </div>
                )}
                <div className="flex-1">
                  <Heading variant="h5" as="h3" className="mb-2">
                    {item.title}
                  </Heading>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export { ProofSection };
