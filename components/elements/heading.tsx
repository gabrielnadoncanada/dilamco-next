import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Titres du site (refonte 2026-09) : Bricolage Grotesque, graisse 600,
// interlettrage serré. `<em>` met un mot en vert primaire, sans italique.
// h4–h6 restent des labels en Plus Jakarta Sans.
const headingVariants = cva(
  "text-foreground text-balance [&_em]:not-italic [&_em]:text-primary",
  {
    variants: {
      variant: {
        h1: "font-display font-semibold text-[length:var(--title-2)] leading-[1.02] tracking-[-0.03em]",
        h2: "font-display font-semibold text-[length:var(--title-3)] leading-[1.06] tracking-[-0.028em]",
        h3: "font-display font-semibold text-[length:var(--title-4)] leading-[1.15] tracking-[-0.02em]",
        h4: "font-display font-semibold text-[length:var(--title-5)] leading-snug tracking-[-0.015em]",
        h5: "text-base font-semibold leading-snug tracking-tight md:text-lg",
        h6: "text-sm font-semibold leading-snug tracking-tight md:text-base",
      },
    },
    defaultVariants: {
      variant: "h1",
    },
  }
)

type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
  VariantProps<typeof headingVariants> {
  as?: HeadingElement
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, as, variant, ...props }, ref) => {

    const Component = as || (variant as HeadingElement) || "h1"
    const styleVariant = (variant || as || "h1") as NonNullable<VariantProps<typeof headingVariants>["variant"]>

    return (
      <Component
        ref={ref}
        className={cn(headingVariants({ variant: styleVariant }), className)}
        {...props}
      />
    )
  }
)
Heading.displayName = "Heading"

export { Heading, headingVariants }
