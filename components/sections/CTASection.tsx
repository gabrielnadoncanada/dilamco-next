import React from "react";
import { cn } from "@/lib/utils";
import { type SectionShellProps, type SectionSurface } from "@/components/elements/section-shell";
import { type ActionButton } from "@/components/ActionButtons";
import { Button } from "@/components/ui/button";

interface CTASectionProps extends Omit<
  SectionShellProps,
  | "title"
  | "intro"
  | "actions"
  | "children"
  | "surface"
  | "padding"
  | "container"
  | "eyebrow"
  | "align"
  | "contentClassName"
  | "headerClassName"
  | "bodyClassName"
> {
  heading: string;
  description: string;
  actions: ActionButton[];
  variant?: SectionSurface;
  helperText?: string;
  className?: string;
}

const CTASection = ({
  heading,
  description,
  actions,
  variant = "default",
  helperText = "Réponse généralement sous 24–48 h. Sans engagement.",
  className,
  "aria-labelledby": ariaLabelledby,
  ...props
}: CTASectionProps) => {
  const headingId = typeof ariaLabelledby === "string" ? ariaLabelledby : undefined;
  const isDarkSurface = variant === "default";

  const sectionClassName =
    variant === "default"
      ? "bg-foreground text-background"
      : variant === "muted"
        ? "bg-muted text-foreground"
        : "bg-accent text-accent-foreground";

  return (
    <section
      aria-labelledby={ariaLabelledby}
      className={cn(sectionClassName, className)}
      {...props}
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <h2 id={headingId} className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {heading}
            </h2>
            <p className={cn("mt-3", isDarkSurface ? "text-background/80" : "text-foreground/80")}>
              {description}
            </p>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {actions.map((action, index) => {
                const { text, href, variant: actionVariant, icon: Icon, ...buttonProps } = action;
                const resolvedVariant = actionVariant ?? (isDarkSurface ? "secondary" : "default");

                return (
                  <Button
                    key={`${href}-${index}`}
                    asChild
                    size="lg"
                    variant={resolvedVariant}
                    className="w-full lg:w-auto"
                    {...buttonProps}
                  >
                    <a href={href}>
                      {text}
                      {Icon ? <Icon className="size-4" /> : null}
                    </a>
                  </Button>
                );
              })}
            </div>

            {helperText ? (
              <p className={cn("mt-3 text-xs", isDarkSurface ? "text-background/70" : "text-foreground/70")}>
                {helperText}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export { CTASection };
