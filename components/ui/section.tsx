import React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Container } from "../elements/container";
const sectionVariants = cva(
  "w-full",
  {
    variants: {
      variant: {
        default: "",
        muted: "bg-background",
      },

    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
  VariantProps<typeof sectionVariants> {
  children: React.ReactNode;
  className?: string;
}

const Section = ({
  children,
  className,
  variant,
  ...props
}: SectionProps) => {
  return (
    <section
      data-surface={variant}
      className={cn(
        "pt-[var(--_spacing---section-space--main)] relative pb-[var(--_spacing---section-space--large)] bg-background text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export { Section };
