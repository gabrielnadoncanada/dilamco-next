import type { ComponentProps } from "react";
import { createElement } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/shop/utils";

const headlineVariants = cva(
  "font-serif font-normal text-foreground m-0 [&_em]:italic [&_em]:text-primary [&_em]:font-normal",
  {
    variants: {
      level: {
        hero: "text-[length:var(--title-1)] leading-[0.98] tracking-[-0.025em]",
        display:
          "text-[length:var(--title-2)] leading-[1] tracking-[-0.025em]",
        headline:
          "text-[length:var(--title-3)] leading-[1.02] tracking-[-0.02em]",
        headline2:
          "text-[length:var(--title-5)] leading-[1.1] tracking-[-0.02em]",
        subhead:
          "text-[length:var(--title-4)] leading-[1.1] tracking-[-0.02em]",
        title: "text-[length:var(--title-5)] leading-[1.05] tracking-[-0.02em]",
        subtitle:
          "text-[length:var(--title-6)] leading-[1.15] tracking-[-0.01em]",
      },
    },
    defaultVariants: {
      level: "headline",
    },
  },
);

type Tag = "h1" | "h2" | "h3" | "h4" | "p";

interface Props
  extends
    Omit<ComponentProps<"h2">, "color">,
    VariantProps<typeof headlineVariants> {
  as?: Tag;
}

const DEFAULT_TAG: Record<NonNullable<Props["level"]>, Tag> = {
  hero: "h1",
  display: "h1",
  headline: "h2",
  headline2: "h1",
  subhead: "h2",
  title: "h3",
  subtitle: "h3",
};

export function Headline({ as, level, className, ...props }: Props) {
  const resolvedLevel = level ?? "headline";
  const Tag = as ?? DEFAULT_TAG[resolvedLevel];
  return createElement(Tag, {
    className: cn(headlineVariants({ level: resolvedLevel }), className),
    ...props,
  });
}
