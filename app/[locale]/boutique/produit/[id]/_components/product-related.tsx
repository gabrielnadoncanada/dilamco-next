"use client";

import { useTranslations } from "next-intl";
import { PCard } from "@/components/shop/pcard";
import { Headline } from "@/components/shop/ds";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Product } from "@/lib/shop/types";

export function ProductRelated({ products }: { products: Product[] }) {
  const t = useTranslations("shop.product");
  if (products.length === 0) return null;

  return (
    <div className="mt-[100px] border-t border-border pt-14">
      <Headline level="title" as="h2" className="mb-8">
        {t("related.title")}
      </Headline>

      <Carousel
        opts={{ align: "start", slidesToScroll: "auto", containScroll: "trimSnaps" }}
        className="group/related relative"
      >
        <CarouselContent className="-ml-6 max-[700px]:-ml-3">
          {products.map((p) => (
            <CarouselItem
              key={p.id}
              className="pl-6 basis-1/4 max-[1100px]:basis-1/2 max-[700px]:basis-1/2 max-[700px]:pl-3 max-[380px]:basis-full"
            >
              <PCard product={p} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden opacity-0 transition-opacity group-hover/related:opacity-100 md:block">
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </div>
      </Carousel>
    </div>
  );
}
