import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Titres éditoriaux alignés sur la boutique (composant Headline) : Fraunces
// (font-serif → --font-display) en graisse normale pour h1–h3, avec emphase
// `<em>` en italique vert primaire. h4–h6 restent des labels sans-serif
// fonctionnels. Unifie d'un coup toutes les pages vitrine data-driven.
const headingVariants = cva(
  "text-foreground [&_em]:italic [&_em]:font-normal [&_em]:text-primary",
  {
    variants: {
      variant: {
        h1: "font-serif font-normal text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.02] tracking-[-0.025em]",
        h2: "font-serif font-normal text-[clamp(1.9rem,3.5vw,3rem)] leading-[1.06] tracking-[-0.02em]",
        h3: "font-serif font-normal text-[clamp(1.4rem,2.2vw,1.9rem)] leading-[1.12] tracking-[-0.015em] text-pretty",
        h4: "text-lg font-semibold leading-snug tracking-tight md:text-xl",
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
