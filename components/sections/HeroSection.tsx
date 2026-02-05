import React from "react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { ActionButtons, type ActionButton } from "@/components/ActionButtons";
import { Heading } from "@/components/ui/heading";
import { Wallpaper } from "../elements/wallpaper";
import clsx from "clsx";
import { Container } from "../elements/container";

interface HeroSectionProps extends React.HTMLAttributes<HTMLElement> {
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
  return (
    <section className={clsx('flex flex-col gap-16 px-2  w-full', className)} {...props}>
      <Wallpaper className="rounded-lg">
        <div className="-mx-2 sm:px-6 md:px-12 lg:px-0">
          <Container className="flex flex-col gap-16">
            <div className="flex gap-x-10 gap-y-16 max-lg:flex-col sm:gap-y-24">
              <div className="flex shrink-0 z-20 flex-col items-start gap-6 py-16 sm:py-32 lg:basis-5xl lg:py-40">
                <Heading variant="h1" className="max-w-5xl">
                  {heading}
                </Heading>
                {description && (
                  <div className="flex max-w-3xl flex-col gap-4 text-lg/8 text-white/70">
                    {typeof description === "string" ? <p>{description}</p> : description}
                  </div>
                )}
                {actionsSlot}
              </div>
              {image && (

                <div className="absolute opacity-45 z-10 inset-y-0 left-0 flex w-screen overflow-hidden *:h-full *:w-full *:object-cover *:max-w-none max-lg:rounded-t-lg lg:rounded-tl-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                  />
                </div>

              )}
            </div>
          </Container>
        </div>
      </Wallpaper >
    </section >
  );
};

export { HeroSection };
