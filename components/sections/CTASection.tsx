import React from "react";
import { cn } from "@/lib/utils";
import { SectionShell, type SectionShellProps, type SectionSurface } from "@/components/elements/section-shell";
import { ActionButtons, type ActionButton } from "@/components/ActionButtons";
import { Heading } from "@/components/elements/heading";
import { Divider } from "../elements/divider";

interface CTASectionProps extends Omit<SectionShellProps, "title" | "intro" | "actions" | "children" | "surface"> {
  heading: string;
  description: string;
  actions: ActionButton[];
  variant?: SectionSurface;
  className?: string;
}

const CTASection = ({
  heading,
  description,
  actions,
  variant = "muted",
  className,
  ...props
}: CTASectionProps) => {
  return (
    <SectionShell
      surface={variant}
      className={cn(className)}
      padding="small"
      title={<Heading variant="h2" as="h2" >{heading}</Heading>}
      intro={description}
      actions={<ActionButtons buttons={actions} className="justify-center" />}
      align="center"
      container="narrow"
      {...props}
    >
      <Divider />
    </SectionShell>
  );
};

export { CTASection };
