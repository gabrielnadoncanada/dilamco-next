import React from "react";
import { SectionShell, type SectionShellProps } from "@/components/elements/section-shell";
import { type LucideIcon } from "lucide-react";
import { Heading } from "@/components/elements/heading";
import { SectionFooterDivider, SectionTitle } from "@/components/sections/section-helpers";

interface ProofItem {
  title: string;
  description: string;
  icon?: LucideIcon;
}

interface ProofSectionProps extends Omit<SectionShellProps, "title" | "intro" | "children"> {
  heading: string;
  intro?: React.ReactNode;
  items: ProofItem[];
  className?: string;
}

const ProofSection = ({
  heading,
  intro,
  items,
  className,
  ...props
}: ProofSectionProps) => {
  return (
    <SectionShell
      className={className}
      title={<SectionTitle heading={heading} />}
      intro={intro}
      align="center"
      {...props}
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
        {items.map((item, index) => (
          <div key={`${item.title}-${index}`} className="flex gap-4">
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
      <SectionFooterDivider />

    </SectionShell>
  );
};

export { ProofSection };
