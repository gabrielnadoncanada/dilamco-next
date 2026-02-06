import React from "react";
import { SectionShell, type SectionShellProps } from "@/components/ui/section-shell";
import { ActionButtons, type ActionButton } from "@/components/ActionButtons";
import { Heading } from "@/components/ui/heading";
import { Divider } from "../ui/divider";
interface TextSectionProps extends Omit<SectionShellProps, "title" | "actions" | "children"> {
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
    <SectionShell
      className={className}
      title={<Heading variant="h2">{heading}</Heading>}
      actions={links && links.length > 0 ? <ActionButtons buttons={links} /> : undefined}
      {...props}
    ><Divider />
      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {paragraph}
          </p>
        ))}
      </div>
    </SectionShell>
  );
};

export { TextSection };
