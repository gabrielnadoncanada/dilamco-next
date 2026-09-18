import Image from "next/image";
import { AppLink as Link } from "@/components/AppLink";

import { Heading } from "@/components/elements/heading";
import { Badge } from "@/components/ui/badge";
import { ArrowPill } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  SectionHeader,
  sectionBodyClassName,
} from "@/features/page-builder/sections/shared/ui/SectionHeader";

import type { GridImageCardsSliderProps } from "./schema";
import { cn } from "@/lib/utils";

const navButtonClassName =
  "static size-11 translate-y-0 rounded-full border-border/80 bg-background text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground";

/**
 * Carrousel de cartes photo (services, projets) : image 4/3 arrondie avec
 * pastilles, titre de carte, une ligne de description et une flèche. Toute la
 * carte est cliquable quand elle a un `href`.
 */
export function GridImageCardsSlider({
  hasNavigation = true,
  itemClass,
  ...props
}: GridImageCardsSliderProps) {
  return (
    <Carousel opts={{ align: "start" }} className="w-full text-left">
      <SectionHeader
        heading={props.heading}
        intro={props.intro}
        aside={
          hasNavigation ? (
            <div className="hidden gap-2 sm:flex">
              <CarouselPrevious className={navButtonClassName} />
              <CarouselNext className={navButtonClassName} />
            </div>
          ) : null
        }
      />

      <div className={cn(props.heading || props.intro ? sectionBodyClassName : "")}>
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
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card bg-muted">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    className="transition-media object-cover group-hover:scale-[1.04]"
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

                <div className="flex items-start justify-between gap-4 pt-4">
                  <div className="min-w-0">
                    {item.title ? (
                      <Heading as="h3" variant="card">
                        {item.title}
                      </Heading>
                    ) : null}
                    {item.description ? (
                      <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    ) : null}
                  </div>
                  {href ? <ArrowPill className="border border-border/80 bg-transparent" /> : null}
                </div>
                {href && label ? <span className="sr-only">{label}</span> : null}
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
                  <Link href={href} className="group block h-full rounded-card focus-ring">
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
