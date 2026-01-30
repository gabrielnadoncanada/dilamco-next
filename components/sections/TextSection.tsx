import React from "react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/Section";
import { ActionButtons, type ActionButton } from "@/components/ActionButtons";
import { Heading } from "@/components/ui/heading";

interface TextSectionProps extends React.HTMLAttributes<HTMLElement> {
  heading: string;
  paragraphs: string[];
  links?: ActionButton[];
  className?: string;
}

const TextSection = ({
  heading,
  paragraphs,
  links,
  className,
  ...props
}: TextSectionProps) => {
  return (
    <Section className={className} {...props}>

      <Heading variant="h2" className="mb-6">
        {heading}
      </Heading>
      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {paragraph}
          </p>
        ))}
      </div>
      {links && links.length > 0 && (
        <div className="pt-4">
          <ActionButtons buttons={links} />
        </div>
      )}
    </Section>
  );
};

export { TextSection };
