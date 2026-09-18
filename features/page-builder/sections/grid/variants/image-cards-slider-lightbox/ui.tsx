"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

import Image from "next/image";
import { AppLink as Link } from "@/components/AppLink";

import { ArrowUpRight } from "lucide-react";

import { Heading } from "@/components/elements/heading";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import type { GridImageCardsSliderLightboxProps } from "./schema";

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

      <Carousel opts={{ align: "start" }} className="w-full text-left">
        <div className="flex items-end justify-between gap-4">
          <div className="max-w-2xl">
            <Heading as="h2" variant="h2">
              {props.heading}
            </Heading>
            {props.intro ? (
              <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {props.intro}
              </p>
            ) : null}
          </div>
          <div className="hidden shrink-0 gap-2 sm:flex">
            <CarouselPrevious className="static size-11 translate-y-0 rounded-full border-border/80 bg-background hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="static size-11 translate-y-0 rounded-full border-border/80 bg-background hover:bg-primary hover:text-primary-foreground" />
          </div>
        </div>

        <div className="mt-8 sm:mt-10">
          <CarouselContent className="-ml-4">
            {props.items.map((item, index) => {
              const itemKey = `${item.href ?? "no-href"}-${item.title}-${index}`;
              const href =
                typeof item.href === "string" && item.href.length > 0
                  ? item.href
                  : null;
              const footerLabel = item.footerCtaLabel ?? item.title ?? "Voir";

              return (
                <CarouselItem
                  key={itemKey}
                  className="basis-[86%] pl-4 sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="group flex h-full flex-col">
                    <button
                      type="button"
                      className="relative aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-2xl bg-muted text-left outline-none focus-visible:ring-[3px] focus-visible:ring-ring/40"
                      aria-label={`Voir l'image ${item.title ?? ""}`}
                      onClick={() => openLightbox(index)}
                    >
                      <Image
                        src={item.image.src}
                        alt={item.image.alt}
                        fill
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      />
                      {item.badges && item.badges.length > 0 ? (
                        <span className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                          {item.badges.slice(0, 2).map((badge, idx) => (
                            <Badge
                              key={`${badge}-${idx}`}
                              className="bg-white/92 text-foreground backdrop-blur"
                            >
                              {badge}
                            </Badge>
                          ))}
                        </span>
                      ) : null}
                    </button>

                    <div className="flex items-start justify-between gap-3 pt-4">
                      <div className="min-w-0">
                        {item.title ? (
                          <h3 className="font-display text-xl font-semibold leading-tight tracking-[-0.02em] text-foreground">
                            {item.title}
                          </h3>
                        ) : null}
                        {item.description ? (
                          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                            {item.description}
                          </p>
                        ) : null}
                      </div>
                      {href ? (
                        <Link
                          href={href}
                          aria-label={footerLabel}
                          className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full border border-border/80 text-foreground transition-colors duration-200 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          <ArrowUpRight className="size-4" strokeWidth={2.25} />
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </div>
      </Carousel>
    </>
  );
}
