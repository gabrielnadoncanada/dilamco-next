import React from "react";
import { cn } from "@/lib/utils";
import { type SectionShellProps } from "@/components/elements/section-shell";
import { type ActionButton } from "@/components/ActionButtons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface IntroductionValueSectionProps extends Omit<
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
  badges?: string[];
  cardTitle: string;
  cardItems: string[];
  cardAction?: ActionButton;
  className?: string;
}

const IntroductionValueSection = ({
  heading,
  intro,
  badges,
  cardTitle,
  cardItems,
  cardAction,
  className,
  "aria-labelledby": ariaLabelledby,
  ...props
}: IntroductionValueSectionProps) => {
  const headingId = typeof ariaLabelledby === "string" ? ariaLabelledby : undefined;

  return (
    <section
      aria-labelledby={ariaLabelledby}
      className={cn("mx-auto max-w-7xl px-4 py-14 sm:py-16", className)}
      {...props}
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-7">
          <h2 id={headingId} className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {heading}
          </h2>
          {typeof intro === "string" ? (
            <p className="mt-4 text-muted-foreground">{intro}</p>
          ) : intro ? (
            <div className="mt-4 text-muted-foreground">{intro}</div>
          ) : null}

          {badges && badges.length > 0 ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {badges.map((badge, index) => (
                <Badge key={`${badge}-${index}`} variant="secondary">
                  {badge}
                </Badge>
              ))}
            </div>
          ) : null}
        </div>

        <div className="lg:col-span-5">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">{cardTitle}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <ul className="list-disc list-inside space-y-2">
                {cardItems.map((item, index) => (
                  <li key={`${item}-${index}`}>{item}</li>
                ))}
              </ul>

            </CardContent>
            {cardAction ? (
              <>
                <CardFooter>
                  <Button asChild className="w-full" variant={cardAction.variant ?? "default"}>
                    <a href={cardAction.href}>{cardAction.text}</a>
                  </Button>
                </CardFooter>
              </>
            ) : null}
          </Card>
        </div>
      </div>
    </section>
  );
};

export { IntroductionValueSection };
