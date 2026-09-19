import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Échelle de titres du site (refonte 2026-09), une seule source : les tokens
// --title-1 … --title-5 de globals.css. Bricolage Grotesque 600, interlettrage
// serré. `<em>` met un mot en vert primaire, sans italique.
//
//   display → hero plein cadre (title-1)
//   h1      → titre de page (title-2)
//   h2      → titre de section (title-3)
//   h3      → sous-titre (title-4)
//   card    → titre de carte / d'item (title-5)
//   h5, h6  → labels en Plus Jakarta Sans
//
// Ne jamais passer une taille de texte via className : tailwind-merge
// supprimerait le line-height (groupe font-size ↔ leading).
const headingVariants = cva(
  "text-foreground text-balance [&_em]:not-italic [&_em]:text-primary",
  {
    variants: {
      variant: {
        display:
          "font-display font-semibold text-[length:var(--title-1)] leading-[1.0] tracking-[-0.035em]",
        h1: "font-display font-semibold text-[length:var(--title-2)] leading-[1.02] tracking-[-0.03em]",
        h2: "font-display font-semibold text-[length:var(--title-3)] leading-[1.06] tracking-[-0.028em]",
        h3: "font-display font-semibold text-[length:var(--title-4)] leading-[1.15] tracking-[-0.02em]",
        card: "font-display font-semibold text-[length:var(--title-5)] leading-[1.25] tracking-[-0.015em]",
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
type HeadingVariant = NonNullable<VariantProps<typeof headingVariants>["variant"]>

const ELEMENT_FOR_VARIANT: Record<HeadingVariant, HeadingElement> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  card: "h3",
  h5: "h5",
  h6: "h6",
}

const VARIANT_FOR_ELEMENT: Partial<Record<HeadingElement, HeadingVariant>> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "card",
  h5: "h5",
  h6: "h6",
}

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
  VariantProps<typeof headingVariants> {
  as?: HeadingElement
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, as, variant, ...props }, ref) => {
    const styleVariant: HeadingVariant =
      variant ?? (as ? VARIANT_FOR_ELEMENT[as] ?? "h1" : "h1")
    const Component: HeadingElement = as ?? ELEMENT_FOR_VARIANT[styleVariant]

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
