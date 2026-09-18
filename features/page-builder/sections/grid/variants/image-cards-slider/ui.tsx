import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { AppLink as Link } from "@/components/AppLink";

import { Heading } from "@/components/elements/heading";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import type { GridImageCardsSliderProps } from "./schema";
import { cn } from "@/lib/utils";

/**
 * Carrousel de cartes photo (services, projets) : image 4/3 arrondie avec
 * pastilles, titre, une ligne de description et un lien fléché. Toute la carte
 * est cliquable quand elle a un `href`.
 */
export function GridImageCardsSlider({
  hasNavigation = true,
  itemClass,
  ...props
}: GridImageCardsSliderProps) {
  return (
    <Carousel opts={{ align: "start" }} className="w-full text-left">
      <div className="flex items-end justify-between gap-4">
        <div className="max-w-2xl">
          {props.heading ? (
            <Heading as="h2" variant="h2">
              {props.heading}
            </Heading>
          ) : null}
          {props.intro ? (
            <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {props.intro}
            </p>
          ) : null}
        </div>
        {hasNavigation ? (
          <div className="hidden shrink-0 gap-2 sm:flex">
            <CarouselPrevious className="static size-11 translate-y-0 rounded-full border-border/80 bg-background hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="static size-11 translate-y-0 rounded-full border-border/80 bg-background hover:bg-primary hover:text-primary-foreground" />
          </div>
        ) : null}
      </div>

      <div className="mt-8 sm:mt-10">
        <CarouselContent className="-ml-4">
          {props.items.map((item, index) => {
            const itemKey = `${item.href ?? "no-href"}-${item.title}-${index}`;
            const href =
              typeof item.href === "string" && item.href.length > 0
                ? item.href
                : null;
            const label = item.footerCtaLabel ?? item.quickActionLabel;

            const body = (
              <>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  {item.badges && item.badges.length > 0 ? (
                    <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                      {item.badges.slice(0, 2).map((badge, idx) => (
                        <Badge
                          key={`${badge}-${idx}`}
                          className="bg-white/92 text-foreground backdrop-blur"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  ) : null}
                </div>

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
                    <span
                      aria-hidden
                      className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full border border-border/80 text-foreground transition-colors duration-200 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
                    >
                      <ArrowUpRight className="size-4" strokeWidth={2.25} />
                    </span>
                  ) : null}
                </div>
                {href && label ? (
                  <span className="sr-only">{label}</span>
                ) : null}
              </>
            );

            return (
              <CarouselItem
                key={itemKey}
                className={cn(
                  "basis-[86%] pl-4 sm:basis-1/2 lg:basis-1/3",
                  itemClass,
                )}
              >
                {href ? (
                  <Link
                    href={href}
                    className="group block h-full rounded-2xl outline-none focus-visible:ring-[3px] focus-visible:ring-ring/40"
                  >
                    {body}
                  </Link>
                ) : (
                  <div className="group h-full">{body}</div>
                )}
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </div>
    </Carousel>
  );
}
