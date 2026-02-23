import React from "react";
import { SectionShell, type SectionShellProps } from "@/components/elements/section-shell";
import { ActionButtons, type ActionButton } from "@/components/ActionButtons";
import { Heading } from "@/components/elements/heading";
import { Wallpaper } from "../elements/wallpaper";
import clsx from "clsx";
import { Container } from "../elements/container";

interface HeroSectionProps extends Omit<SectionShellProps, "title" | "intro" | "actions" | "children" | "container" | "align" | "padding"> {
  heading: string;
  description?: string | React.ReactNode;
  actions?: ActionButton[];
  actionsSlot?: React.ReactNode;
  image?: {
    src: string;
    alt: string;
  };
  className?: string;
}

const HeroSection = ({
  heading,
  description,
  actions,
  actionsSlot,
  image = {
    src: "/images/hero-image.webp",
    alt: "Hero Image",
  },
  className,
  ...props
}: HeroSectionProps) => {
  const renderedActions = actionsSlot ?? (actions && actions.length > 0 ? (
    <ActionButtons className="justify-start" buttons={actions} />
  ) : null);

  return (
    <SectionShell
      className={clsx("flex flex-col gap-16 px-2 w-full", className)}
      padding="none"
      container={false}
      {...props}
    >
      <div className="overflow-hidden rounded-lg border border-border/40 relative h-[calc(100vh-4rem)] max-h-[550px] md:max-h-[750px]">
        <div className="-mx-2 sm:px-6 md:px-12 lg:px-0 h-full">
          <Container className="flex flex-col gap-16 h-full">
            <div className="flex gap-x-10 justify-center gap-y-16 max-lg:flex-col sm:gap-y-24 h-full">
              <div className="flex shrink-0 z-40 flex-col items-start gap-6 py-16 sm:py-32 lg:basis-5xl lg:py-40 justify-center">
                <Heading
                  variant="h1"
                  className="max-w-5xl text-[var(--hero-foreground)]"
                  style={{ textShadow: "var(--hero-title-shadow)" }}
                >
                  {heading}
                </Heading>
                {description && (
                  <div className="text-[var(--hero-foreground-muted)] [&>p]:line-clamp-4 text-base [&>p]:leading-relaxed [&>p]:sm:text-lg flex max-w-3xl flex-col gap-4">
                    {typeof description === "string" ? <p>{description}</p> : description}
                  </div>
                )}
                {renderedActions}
              </div>
              {image && (
                <>
                  <div className="absolute  z-10 inset-y-0 left-0 flex w-screen overflow-hidden *:h-full *:w-full *:object-cover *:max-w-none max-lg:rounded-t-lg lg:rounded-tl-lg">
                    <img
                      src={image.src}
                      alt={image.alt}
                    />
                  </div>
                  <div
                    className="absolute inset-0 z-30 bg-linear-gradient-1"
                  />
                  <div
                    className="absolute inset-0 z-30 bg-radient-gradient-1 bg-radient-gradient-1"
                  />
                </>
              )}
            </div>
          </Container>
        </div>
      </div >
    </SectionShell >
  );
};

export { HeroSection };
