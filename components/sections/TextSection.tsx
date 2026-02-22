import React from "react";
import { SectionShell, type SectionShellProps } from "@/components/elements/section-shell";
import { ActionButtons, type ActionButton } from "@/components/ActionButtons";
import { SectionFooterDivider, SectionTitle } from "@/components/sections/section-helpers";
interface TextSectionProps extends Omit<SectionShellProps, "title" | "actions" | "children"> {
  heading: string;
  intro?: React.ReactNode;
  paragraphs: string[];
  links?: ActionButton[];
  className?: string;
}

const TextSection = ({
  heading,
  intro,
  paragraphs,
  links,
  className,
  ...props
}: TextSectionProps) => {
  return (
    <SectionShell
      className={className}
      title={<SectionTitle heading={heading} />}
      intro={intro}
      actions={links && links.length > 0 ? <ActionButtons buttons={links} /> : undefined}
      {...props}
    >
      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p key={`${heading}-${index}`} className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {paragraph}
          </p>
        ))}
      </div>
      <SectionFooterDivider />
    </SectionShell>
  );
};

export { TextSection };
