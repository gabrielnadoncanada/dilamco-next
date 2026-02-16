"use client";

import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, BluetoothIcon, PlusIcon } from "lucide-react";
import { SectionShell, type SectionShellProps } from "@/components/elements/section-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/elements/heading";
import type { CarouselApi } from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Divider } from "@/components/elements/divider";
import { AlertDialog } from "@/components/ui/alert-dialog";
import { AlertDialogAction, AlertDialogMedia, AlertDialogTitle, AlertDialogHeader, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogDescription, AlertDialogTrigger } from "../ui/alert-dialog";

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
                className="max-w-[320px] pl-[20px] lg:max-w-[400px]"
              >
                {item.content ? (
                  <div className="rounded-xl bg-muted p-6">
                    {item.content}
                  </div>
                ) : (
                  <Link href={item.href || "#"} className="group">
                    <Card className="relative w-full max-w-sm overflow-hidden pt-0">
                      {item.image && (
                        <>
                          <div className="bg-primary absolute inset-0 z-30 aspect-square opacity-50 mix-blend-color" />
                          <img
                            src={item.image.src}
                            alt={item.image.alt}
                            className="relative z-20 aspect-square w-full object-cover brightness-60 grayscale"
                          />
                        </>
                      )}
                      <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter v-if={item.href}>
                        <Button asChild>
                          <Link href={item.href || "#"}>
                            En savoir plus
                            <ArrowRight data-icon="inline-start" />
                          </Link>
                        </Button>
                      </CardFooter>
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
