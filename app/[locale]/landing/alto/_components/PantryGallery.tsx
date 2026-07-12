"use client";

import Image from "next/image";

import { Heading } from "@/components/elements/heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const views = [
  {
    key: "closed",
    label: "Fermé",
    src: "/images/landing/garde-manger/closed.webp",
    alt: "Garde-manger Dilamco fermé, fini noyer",
    fit: "contain",
  },
  {
    key: "open",
    label: "Ouvert",
    src: "/images/landing/garde-manger/open.webp",
    alt: "Garde-manger Dilamco ouvert montrant les cinq tablettes",
    fit: "contain",
  },
  {
    key: "exploded",
    label: "Assemblage",
    src: "/images/landing/garde-manger/exploded.webp",
    alt: "Garde-manger Dilamco en vue éclatée",
    fit: "contain",
  },
  {
    key: "lifestyle",
    label: "En situation",
    src: "/images/landing/garde-manger/lifestyle.webp",
    alt: "Garde-manger Dilamco dans une cuisine",
    fit: "cover",
  },
] as const;

export function PantryGallery() {
  return (
    <section className="pb-16 md:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-[1fr_0.8fr] md:items-end md:gap-12">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              § 07 · Voir le produit
            </p>
            <Heading as="h2" variant="h2" className="text-balance">
              Un seul meuble. Tous ses <em>angles</em>.
            </Heading>
          </div>
          <p className="max-w-md text-base leading-7 text-muted-foreground md:mb-1 md:justify-self-end">
            Voyez exactement ce que vous recevez avant d&apos;acheter.
          </p>
        </div>

        <Carousel opts={{ loop: true }} className="mt-12">
          <CarouselContent>
            {views.map((view, index) => (
              <CarouselItem key={view.key}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#f3f3f1] sm:aspect-[4/3] lg:aspect-[16/10]">
                  <Image
                    src={view.src}
                    alt={view.alt}
                    fill
                    className={
                      view.fit === "cover" ? "object-cover" : "object-contain"
                    }
                    sizes="(max-width: 1280px) 100vw, 1216px"
                    priority={index === 0}
                  />
                  <span className="absolute bottom-4 left-4 z-10 inline-flex items-center gap-2 bg-foreground/85 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-background backdrop-blur-sm sm:bottom-6 sm:left-6">
                    <span className="text-background/60">
                      {index + 1} / {views.length}
                    </span>
                    {view.label}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            variant="paper"
            size="icon"
            className="left-4 border border-border shadow-md sm:left-6 [&_svg]:size-4"
          />
          <CarouselNext
            variant="paper"
            size="icon"
            className="right-4 border border-border shadow-md sm:right-6 [&_svg]:size-4"
          />
        </Carousel>
      </div>
    </section>
  );
}
