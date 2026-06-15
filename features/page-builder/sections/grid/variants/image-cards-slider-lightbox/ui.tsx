"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

import Image from "next/image";
import { AppLink as Link } from "@/components/AppLink";

import { Heading } from "@/components/elements/heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import type { GridImageCardsSliderLightboxProps } from "./schema";
import { cn } from "@/lib/utils";

const GridImageCardsSliderLightboxModal = dynamic(
  () => import("./LightboxModal").then((mod) => mod.GridImageCardsSliderLightboxModal),
  { ssr: false },
);

export function GridImageCardsSliderLightbox(
  props: GridImageCardsSliderLightboxProps,
) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxMounted, setLightboxMounted] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const lightboxSlides = props.items.map((item) => ({
    src: item.image.src,
    alt: item.image.alt,
    thumbnail: item.image.src,
  }));

  const openLightbox = (index: number) => {
    setLightboxMounted(true);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      {lightboxMounted ? (
        <GridImageCardsSliderLightboxModal
          open={lightboxOpen}
          index={lightboxIndex}
          slides={lightboxSlides}
          onClose={() => setLightboxOpen(false)}
        />
      ) : null}

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <div>
          <div className="flex items-end justify-between gap-4">
            <div>
              <Heading as="h2" variant="h2">{props.heading}</Heading>
              {props.intro ? (
                <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{props.intro}</p>
              ) : null}
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </div>

          <div className="mt-8">
            <CarouselContent>
              {props.items.map((item, index) => {
                const footerLabel = item.footerCtaLabel ?? `Decouvrir ${item.title?.toLowerCase()}`;
                const itemKey = `${item.href ?? "no-href"}-${item.title}-${index}`;
                const href = typeof item.href === "string" && item.href.length > 0 ? item.href : null;
                const canLink = href !== null;

                return (
                  <CarouselItem key={itemKey} className="basis-full sm:basis-1/2 lg:basis-1/3">
                    <Card className={cn("flex h-full flex-col overflow-hidden", item.image ? "pt-0 pb-0" : "")}>
                      <button
                        type="button"
                        className="relative aspect-[16/10] w-full cursor-zoom-in overflow-hidden bg-muted text-left"
                        aria-label={`Voir l'image ${item.title}`}
                        onClick={() => openLightbox(index)}
                      >
                        <Image
                          src={item.image.src}
                          alt={item.image.alt}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-[1.02]"
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </button>

                      {item.title ? (
                        <CardHeader>
                          <CardTitle className="flex items-center justify-between gap-3 text-lg font-semibold leading-snug">
                            {item.title}
                          </CardTitle>
                        </CardHeader>
                      ) : null}

                      {item.description ? (
                        <CardContent>
                          <p className="text-sm text-muted-foreground">{item.description}</p>

                          {item.badges && item.badges.length > 0 ? (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {item.badges.map((badge, idx) => (
                                <Badge key={`${badge}-${idx}`} variant="secondary">
                                  {badge}
                                </Badge>
                              ))}
                            </div>
                          ) : null}
                        </CardContent>
                      ) : null}

                      {canLink ? (
                        <CardFooter className="mt-auto">
                          <Button asChild variant="outline" size="sm">
                            <Link href={href}>{footerLabel}</Link>
                          </Button>
                        </CardFooter>
                      ) : null}
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </div>
        </div>
      </Carousel>
    </>
  );
}
