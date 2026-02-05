"use client";

import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Container } from "../elements/container";

export interface SliderItem {
  id: string;
  title: string;
  description?: string;
  label?: string;
  href?: string;
  image?: {
    src: string;
    alt: string;
  };
  content?: React.ReactNode;
}

interface SliderSectionProps extends React.HTMLAttributes<HTMLElement> {
  heading?: string;
  description?: string;
  items: SliderItem[];
  showNavigation?: boolean;
  className?: string;
}

const SliderSection = ({
  heading,
  description,
  items,
  showNavigation = true,
  className,
  ...props
}: SliderSectionProps) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <Section className={className} {...props}>
      <Container>
        <div className="space-y-8 md:space-y-12">
          {(heading || description || showNavigation) && (
            <div className="flex items-end justify-between">
              <div>
                {heading && (
                  <Heading variant="h2">
                    {heading}
                  </Heading>
                )}
                {description && (
                  <p className="mt-2 text-muted-foreground md:text-lg">
                    {description}
                  </p>
                )}
              </div>
              {showNavigation && (
                <div className="shrink-0 gap-2 md:flex">
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => {
                      carouselApi?.scrollPrev();
                    }}
                    disabled={!canScrollPrev}
                    className="disabled:pointer-events-auto"
                  >
                    <ArrowLeft className="size-5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => {
                      carouselApi?.scrollNext();
                    }}
                    disabled={!canScrollNext}
                    className="disabled:pointer-events-auto"
                  >
                    <ArrowRight className="size-5" />
                  </Button>
                </div>
              )}
            </div>
          )}
          <div className="w-full">
            <Carousel
              setApi={setCarouselApi}
              opts={{
                breakpoints: {
                  "(max-width: 768px)": {
                    dragFree: true,
                  },
                },
              }}
            >
              <CarouselContent className="mr-[20px] 2xl:mr-[calc(50vw-700px+20px)]">
                {items.map((item) => (
                  <CarouselItem
                    key={item.id}
                    className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
                  >
                    {item.content ? (
                      <div className="rounded-xl bg-muted p-6">
                        {item.content}
                      </div>
                    ) : (
                      <a
                        href={item.href || "#"}
                        className="group flex flex-col justify-between rounded-xl bg-muted p-6"
                      >
                        <div>
                          {item.image && (
                            <div className="flex aspect-3/2 overflow-clip rounded-xl">
                              <div className="flex-1">
                                <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                                  <img
                                    src={item.image.src}
                                    alt={item.image.alt}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        {item.label && (
                          <div className="mt-6">
                            <Badge>{item.label}</Badge>
                          </div>
                        )}
                        <div className="mb-2 line-clamp-3 pt-4 text-lg font-medium break-words md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                          {item.title}
                        </div>
                        {item.description && (
                          <div className="mb-8 line-clamp-2 text-sm text-muted-foreground md:mb-12 md:text-base lg:mb-9">
                            {item.description}
                          </div>
                        )}
                        {item.href && (
                          <div className="flex items-center text-sm">
                            Read more{" "}
                            <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                          </div>
                        )}
                      </a>
                    )}
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export { SliderSection };
