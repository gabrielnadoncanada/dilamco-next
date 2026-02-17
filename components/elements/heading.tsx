import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const headingVariants = cva(
  "tracking-tight text-foreground",
  {
    variants: {
      variant: {
        h1: "mb-3 text-4xl leading-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl",
        h2: "text-3xl leading-tight text-pretty sm:text-4xl lg:text-5xl",
        h3: "text-2xl leading-snug text-pretty",
        h4: "text-lg leading-snug font-semibold",
        h5: "text-base leading-snug font-semibold md:text-lg",
        h6: "text-sm leading-snug font-semibold md:text-base",
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
