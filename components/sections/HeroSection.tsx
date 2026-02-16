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
  image,
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
      <Wallpaper className="rounded-t-lg">
        <div className="-mx-2 sm:px-6 md:px-12 lg:px-0">
          <Container className="flex flex-col gap-16">
            <div className="flex gap-x-10 gap-y-16 max-lg:flex-col sm:gap-y-24">
              <div className="flex shrink-0 z-20 flex-col items-start gap-6 py-16 sm:py-32 lg:basis-5xl lg:py-40">
                <Heading variant="h1" className="max-w-5xl  text-white">
                  {heading}
                </Heading>
                {description && (
                  <div className="flex max-w-3xl flex-col gap-4 text-lg/8 text-white/100">
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
                  <div className="bg-primary absolute inset-0 z-30 aspect-video opacity-50 mix-blend-color"></div>
                </>
              )}
            </div>
          </Container>
        </div>
      </Wallpaper >
    </SectionShell >
  );
};

export { HeroSection };
