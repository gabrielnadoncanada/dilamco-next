"use client";

import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionShell, type SectionShellProps } from "@/components/ui/section-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import type { CarouselApi } from "@/components/ui/carousel";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Divider } from "@/components/ui/divider";

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

interface SliderSectionProps extends Omit<SectionShellProps, "title" | "intro" | "children"> {
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
    <SectionShell
      className={className}
      title={heading ? <Heading variant="h2">{heading}</Heading> : undefined}
      intro={description}
      headerClassName="flex-row items-end justify-between gap-6"
      actions={showNavigation ? (
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
      ) : undefined}
      {...props}
    >
      <Divider />
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
                  <Link href={item.href || "#"} className="group">
                    <Card className="p-2 gap-0">
                      <div>
                        {item.image && (
                          <div className="flex aspect-3/2 overflow-clip rounded-sm">
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

                      <CardContent className="p-6">

                        {item.label && (
                          <div className="mt-6">
                            <Badge>{item.label}</Badge>
                          </div>
                        )}
                        <Heading variant="h3">{item.title}</Heading>
                        {item.description && (
                          <div className="line-clamp-2 text-sm text-muted-foreground md:text-base">
                            {item.description}
                          </div>
                        )}
                        {item.href && (
                          <div className="flex items-center text-sm">
                            Read more{" "}
                            <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </Link>
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </SectionShell>
  );
};

export { SliderSection };
