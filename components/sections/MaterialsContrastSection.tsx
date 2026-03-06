import React from "react";
import { cn } from "@/lib/utils";
import { type SectionShellProps } from "@/components/elements/section-shell";
import { type ActionButton } from "@/components/ActionButtons";
import Image from "@/components/elements/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MaterialsContrastCard {
  title: string;
  description: string;
  fullWidth?: boolean;
}

interface MaterialsContrastCompareRow {
  label: string;
  value: string;
}

interface MaterialsContrastSectionProps extends Omit<
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
  cards: MaterialsContrastCard[];
  links?: ActionButton[];
  image: {
    src: string;
    alt: string;
  };
  imageCardTitle: string;
  imageCardDescription: string;
  compareTitle?: string;
  compareRows?: MaterialsContrastCompareRow[];
  surface?: "default" | "muted";
  className?: string;
}

const MaterialsContrastSection = ({
  heading,
  intro,
  cards,
  links,
  image,
  imageCardTitle,
  imageCardDescription,
  compareTitle,
  compareRows,
  surface = "muted",
  className,
  "aria-labelledby": ariaLabelledby,
  ...props
}: MaterialsContrastSectionProps) => {
  const headingId = typeof ariaLabelledby === "string" ? ariaLabelledby : undefined;

  return (
    <section
      aria-labelledby={ariaLabelledby}
      className={cn(surface === "muted" ? "bg-muted/40" : "bg-background", className)}
      {...props}
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6">
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
                <Card key={`${card.title}-${index}`} className={card.fullWidth ? "sm:col-span-2" : undefined}>
                  <CardHeader>
                    <CardTitle className="text-base">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">{card.description}</CardContent>
                </Card>
              ))}
            </div>

            {links && links.length > 0 ? (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {links.map((link, index) => {
                  const { text, href, variant, icon: Icon, ...buttonProps } = link;
                  return (
                    <Button key={`${href}-${index}`} asChild variant={variant ?? "outline"} {...buttonProps}>
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

          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-xl border bg-background">
              <div className="relative aspect-[16/10]">
                <Image src={image.src} alt={image.alt} fill className="object-cover" />
              </div>
              <div className="p-5">
                <p className="text-sm font-medium">{imageCardTitle}</p>
                <p className="mt-2 text-sm text-muted-foreground">{imageCardDescription}</p>
              </div>
            </div>

            {compareRows && compareRows.length > 0 ? (
              <Card className="mt-4">
                {compareTitle ? (
                  <CardHeader>
                    <CardTitle className="text-base">{compareTitle}</CardTitle>
                  </CardHeader>
                ) : null}
                <CardContent className="grid gap-3 text-sm">
                  {compareRows.map((row, index) => (
                    <div key={`${row.label}-${index}`} className="flex items-center justify-between gap-3">
                      <span className="text-muted-foreground">{row.label}</span>
                      <span className="text-right font-medium">{row.value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export { MaterialsContrastSection };
