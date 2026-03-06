import React from "react";
import { cn } from "@/lib/utils";
import { type SectionShellProps } from "@/components/elements/section-shell";
import { type ActionButton } from "@/components/ActionButtons";
import { Button } from "@/components/ui/button";
import Image from "@/components/elements/image";

interface AsymmetricTwoColumnsItem {
  title?: string;
  description: string;
}

interface AsymmetricTwoColumnsSectionProps extends Omit<
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
  items: AsymmetricTwoColumnsItem[];
  links?: ActionButton[];
  image: {
    src: string;
    alt: string;
  };
  cardTitle: string;
  cardDescription: string;
  surface?: "default" | "muted";
  className?: string;
}

const AsymmetricTwoColumnsSection = ({
  heading,
  intro,
  items,
  links,
  image,
  cardTitle,
  cardDescription,
  surface = "muted",
  className,
  "aria-labelledby": ariaLabelledby,
  ...props
}: AsymmetricTwoColumnsSectionProps) => {
  if (!items || items.length === 0) {
    return null;
  }

  const headingId = typeof ariaLabelledby === "string" ? ariaLabelledby : undefined;

  return (
    <section
      aria-labelledby={ariaLabelledby}
      className={cn(surface === "muted" ? "bg-muted/30" : "bg-background", className)}
      {...props}
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <h2 id={headingId} className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {heading}
            </h2>

            {typeof intro === "string" ? (
              <p className="mt-4 text-muted-foreground">{intro}</p>
            ) : intro ? (
              <div className="mt-4 text-muted-foreground">{intro}</div>
            ) : null}

            <ul className="mt-6 space-y-3 text-sm">
              {items.map((item, index) => (
                <li key={`${item.title ?? item.description}-${index}`} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" />
                  <span>
                    {item.title ? <span className="font-medium">{item.title}</span> : null}
                    {item.title ? " " : null}
                    {item.description}
                  </span>
                </li>
              ))}
            </ul>

            {links && links.length > 0 ? (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {links.map((link, index) => {
                  const { text, href, variant, icon: Icon, ...buttonProps } = link;
                  return (
                    <Button key={`${href}-${index}`} asChild variant={variant ?? "default"} {...buttonProps}>
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
              <div className="relative aspect-[4/3]">
                <Image src={image.src} alt={image.alt} fill className="object-cover" />
              </div>
              <div className="p-5">
                <p className="text-sm font-medium">{cardTitle}</p>
                <p className="mt-2 text-sm text-muted-foreground">{cardDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AsymmetricTwoColumnsSection };
