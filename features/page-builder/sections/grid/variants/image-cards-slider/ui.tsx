import Image from "next/image";
import { AppLink as Link } from "@/components/AppLink";

import { Heading } from "@/components/elements/heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import type { GridImageCardsSliderProps } from "./schema";
import { cn } from "@/lib/utils";

export function GridImageCardsSlider({
  hasNavigation = true,
  itemClass,
  ...props
}: GridImageCardsSliderProps) {

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <div>
        <div className="flex items-end justify-between gap-4">
          <div>
            <Heading as="h2" variant="h2">
              {props.heading}
            </Heading>
            {props.intro ? (
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                {props.intro}
              </p>
            ) : null}
          </div>
          {hasNavigation ? (
            <div className="mt-6 flex justify-end gap-2">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          ) : null}
        </div>

        <div className="mt-8">
          <CarouselContent>
            {props.items.map((item, index) => {
              const footerLabel =
                item.footerCtaLabel ?? `Decouvrir ${item.title?.toLowerCase()}`;
              const itemKey = `${item.href ?? "no-href"}-${item.title}-${index}`;
              const href =
                typeof item.href === "string" && item.href.length > 0
                  ? item.href
                  : null;
              const canLink = href !== null;

              return (
                <CarouselItem
                  key={itemKey}
                  className={cn(
                    "basis-full sm:basis-1/2 lg:basis-1/3",
                    itemClass,
                  )}
                >
                  <Card
                    className={cn(
                      "flex h-full flex-col overflow-hidden",
                      item.image ? "pt-0" : "",
                    )}
                  >
                    {canLink ? (
                      <Link
                        href={href}
                        aria-label={`Voir ${item.title}`}
                        className="relative aspect-[16/10] w-full overflow-hidden bg-muted"
                      >
                        <Image
                          src={item.image.src}
                          alt={item.image.alt}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-[1.02]"
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </Link>
                    ) : (
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                        <Image
                          src={item.image.src}
                          alt={item.image.alt}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                      </div>
                    )}

                    {item.title ? (
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between gap-3 text-lg leading-snug">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                    ) : null}

                    {item.description ? (
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>

                        {item.badges && item.badges.length > 0 ? (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {item.badges.map((badge, idx) => (
                              <Badge
                                key={`${badge}-${idx}`}
                                variant="secondary"
                              >
                                {badge}
                              </Badge>
                            ))}
                          </div>
                        ) : null}
                      </CardContent>
                    ) : null}

                    {canLink ? (
                      <CardFooter className="mt-auto">
                        <Button asChild variant="ghost" size="small">
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
  );
}
