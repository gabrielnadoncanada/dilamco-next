import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const headingVariants = cva(
  "tracking-tight",
  {
    variants: {
      variant: {
        h1: "text-[length:var(--_typography---font-size--h1)] tracking-tight text-balance mb-[var(--_spacing---space--0-75rem)]",
        h2: "text-[2rem]/10 tracking-tight text-pretty sm:text-5xl/14  text-[var(--_typography---font-size--h1)]",
        h3: "text-2xl/10 tracking-tight",
        h4: "text-base/8 font-medium",
        h5: "text-base md:text-lg lg:text-xl",
        h6: "text-sm md:text-base lg:text-lg",
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
