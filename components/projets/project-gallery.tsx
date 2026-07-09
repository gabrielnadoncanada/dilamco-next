"use client";

import * as React from "react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

type GalleryImage = {
  src: string;
  alt: string;
};

export function ProjectGallery({
  images,
  className,
}: {
  images: GalleryImage[];
  className?: string;
}) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  if (!images.length) return null;

  // Une seule image : pas de carrousel, on garde l'image simple.
  if (images.length === 1) {
    const only = images[0];
    return (
      <div
        className={cn(
          "relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted",
          className,
        )}
      >
        <Image
          src={only.src}
          alt={only.alt}
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <Carousel
      setApi={setApi}
      opts={{ loop: true }}
      className={cn("group relative", className)}
      aria-label="Galerie du projet"
    >
      <CarouselContent className="ml-0">
        {images.map((img, i) => (
          <CarouselItem key={img.src} className="pl-0">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={i === 0}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="left-3 h-9 w-9 border border-border bg-background/80 text-foreground shadow-sm backdrop-blur transition-opacity hover:bg-background" />
      <CarouselNext className="right-3 h-9 w-9 border border-border bg-background/80 text-foreground shadow-sm backdrop-blur transition-opacity hover:bg-background" />

      {/* Pastilles + compteur */}
      <div className="pointer-events-none absolute inset-x-0 bottom-3 flex items-center justify-center gap-2">
        <div className="pointer-events-auto flex items-center gap-1.5 rounded-full bg-background/80 px-2.5 py-1.5 shadow-sm backdrop-blur">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              aria-label={`Voir l'image ${i + 1}`}
              aria-current={i === current}
              onClick={() => api?.scrollTo(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === current
                  ? "w-5 bg-foreground"
                  : "w-1.5 bg-foreground/30 hover:bg-foreground/50",
              )}
            />
          ))}
        </div>
      </div>
    </Carousel>
  );
}
