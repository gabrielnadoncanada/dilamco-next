import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/shop/utils";

const sectionVariants = cva("px-[clamp(20px,1rem,56px)]", {
  variants: {
    surface: {
      background: "bg-background",
      secondary: "bg-secondary",
      primary: "bg-primary text-background",
    },
    density: {
      default: "py-[var(--section-py)]",
      tall: "py-[var(--section-py-spacious)]",
      compact: "py-[var(--section-py-compact)]",
    },
    divider: {
      true: "border-b border-border",
      false: "",
    },
  },
  defaultVariants: {
    surface: "background",
    density: "default",
    divider: true,
  },
});

interface Props
  extends ComponentProps<"section">, VariantProps<typeof sectionVariants> {}

export function Section({
  className,
  surface,
  density,
  divider,
  ...props
}: Props) {
  return (
    <section
      className={cn(sectionVariants({ surface, density, divider }), className)}
      {...props}
    />
  );
}
