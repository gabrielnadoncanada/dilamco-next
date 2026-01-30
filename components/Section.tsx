import React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Container } from "./elements/container";
const sectionVariants = cva(
  "w-full",
  {
    variants: {
      variant: {
        default: "",
        accent: "bg-accent",
        muted: "bg-muted",
      },
      maxWidth: {
        default: "max-w-6xl",
        wide: "max-w-7xl",
        narrow: "max-w-4xl",
        full: "max-w-none"
      },
    },
    defaultVariants: {
      variant: "default",
      maxWidth: "default",
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
  maxWidth,
  ...props
}: SectionProps) => {
  return (
    <section
      className={cn(
        "py-16 md:py-20 lg:py-24",
        className
      )}
      {...props}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
};

export { Section };
