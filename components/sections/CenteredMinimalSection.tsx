import React from "react";
import { cn } from "@/lib/utils";
import { type SectionShellProps } from "@/components/elements/section-shell";
import { type ActionButton } from "@/components/ActionButtons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CenteredMinimalCard {
  title: string;
  description: string;
}

interface CenteredMinimalSectionProps extends Omit<
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
  intro?: React.ReactNode;
  cards: CenteredMinimalCard[];
  links?: ActionButton[];
  className?: string;
}

const CenteredMinimalSection = ({
  heading,
  intro,
  cards,
  links,
  className,
  "aria-labelledby": ariaLabelledby,
  ...props
}: CenteredMinimalSectionProps) => {
  if (!cards || cards.length === 0) {
    return null;
  }

  const headingId = typeof ariaLabelledby === "string" ? ariaLabelledby : undefined;

  return (
    <section
      aria-labelledby={ariaLabelledby}
      className={cn("border-y bg-background", className)}
      {...props}
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id={headingId} className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {heading}
          </h2>

          {typeof intro === "string" ? (
            <p className="mt-4 text-muted-foreground">{intro}</p>
          ) : intro ? (
            <div className="mt-4 text-muted-foreground">{intro}</div>
          ) : null}

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {cards.map((card, index) => (
              <Card key={`${card.title}-${index}`}>
                <CardHeader>
                  <CardTitle className="text-base">{card.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">{card.description}</CardContent>
              </Card>
            ))}
          </div>

          {links && links.length > 0 ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              {links.map((link, index) => {
                const { text, href, variant, icon: Icon, ...buttonProps } = link;
                return (
                  <Button key={`${href}-${index}`} asChild size="lg" variant={variant ?? "default"} {...buttonProps}>
                    <a href={href}>
                      {text}
                      {Icon ? <Icon className="size-4" /> : null}
                    </a>
                  </Button>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export { CenteredMinimalSection };
