import type { ComponentProps, HTMLAttributes } from "react";
import { Slot } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

// Boutons en pilule (refonte 2026-09). Casse de phrase, graisse 600, flèche
// optionnelle via <ButtonArrow /> qui glisse au survol.
const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2 rounded-full border border-transparent font-semibold leading-none whitespace-nowrap transition-[background-color,color,border-color,transform,box-shadow] duration-200 ease-out cursor-pointer select-none outline-none focus-visible:ring-[3px] focus-visible:ring-ring/40 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] [&_svg]:size-[1.1em] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-primary-deep shadow-[0_1px_0_rgb(0_0_0/6%),0_8px_20px_-12px_rgb(37_59_47/60%)]",
        ghost:
          "bg-transparent border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground hover:text-background",
        paper:
          "bg-background text-foreground hover:bg-primary-soft",
        "ghost-light":
          "bg-white/12 border-white/50 text-white backdrop-blur-sm hover:bg-white hover:text-foreground hover:border-white",
        soft: "bg-primary-soft text-primary hover:bg-primary hover:text-primary-foreground",
        link: "bg-transparent px-0 text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6 text-[0.9375rem]",
        small: "h-10 px-4.5 text-sm",
        xl: "h-14 px-7 text-base",
        icon: "size-11 p-0",
        "icon-xs": "size-6 p-0 [&_svg]:size-3.5",
      },
      block: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      block: false,
    },
  },
);

interface ButtonProps
  extends ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function Button({
  className,
  variant,
  size,
  block,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, block, className }))}
      {...props}
    />
  );
}

function ButtonArrow({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
        className,
      )}
      {...props}
    >
      <ArrowUpRight strokeWidth={2.25} />
    </span>
  );
}

export { Button, ButtonArrow, buttonVariants };
