import React from "react";
import { cn } from "@/lib/utils";
import { type SectionShellProps } from "@/components/elements/section-shell";
import { Image } from "@/components/elements/image";
import { Button } from "@/components/ui/button";

interface ProjectsImmersiveItem {
  title: string;
  location: string;
  href: string;
  image: {
    src: string;
    alt: string;
  };
}

interface ProjectsImmersiveSectionProps extends Omit<
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
  items: ProjectsImmersiveItem[];
  cta?: {
    text: string;
    href: string;
    variant?: "default" | "outline";
  };
  className?: string;
}

const ProjectsImmersiveSection = ({
  heading,
  intro,
  items,
  cta,
  className,
  "aria-labelledby": ariaLabelledby,
  ...props
}: ProjectsImmersiveSectionProps) => {
  const headingId = typeof ariaLabelledby === "string" ? ariaLabelledby : undefined;

  return (
    <section
      aria-labelledby={ariaLabelledby}
      className={cn("mx-auto max-w-7xl px-4 py-14 sm:py-16", className)}
      {...props}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 id={headingId} className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {heading}
          </h2>
          {typeof intro === "string" ? (
            <p className="mt-2 max-w-2xl text-muted-foreground">{intro}</p>
          ) : intro ? (
            <div className="mt-2 max-w-2xl text-muted-foreground">{intro}</div>
          ) : null}
        </div>

        {cta ? (
          <Button variant={cta.variant ?? "outline"} asChild>
            <a href={cta.href}>{cta.text}</a>
          </Button>
        ) : null}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <a
            key={`${item.href}-${index}`}
            href={item.href}
            className="group relative overflow-hidden rounded-xl border bg-background"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="text-xs text-white/85">{item.location}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export { ProjectsImmersiveSection };
