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

import type { GridLinkCardsSliderProps } from "./schema";

export function GridLinkCardsSlider(props: GridLinkCardsSliderProps) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <div>
        <div className="flex items-end justify-between gap-4">
          <div className="max-w-3xl">
            <Heading as="h2" variant="h2">{props.heading}</Heading>
            {props.intro ? (
              <p className="mt-4 text-muted-foreground">{props.intro}</p>
            ) : null}
          </div>

          <div className="mt-6 flex justify-end gap-2">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </div>

        <div className="mt-10">
          <CarouselContent>
            {props.items.map((item) => (
              <CarouselItem key={item.href} className="basis-full sm:basis-1/2 lg:basis-1/3">
                <Card className="flex h-full rounded-2xl flex-col">
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    {item.description ? (
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    ) : null}
                  </CardHeader>

                  {item.badges?.length ? (
                    <CardContent className="pt-0">
                      <div className="flex flex-wrap gap-2">
                        {item.badges.map((badge) => (
                          <Badge key={badge} variant="secondary">
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  ) : null}

                  <CardFooter className="mt-auto">
                    <Button asChild variant="ghost" block>
                      <Link href={item.href}>{item.ctaLabel ?? "Voir la page"}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </div>
    </Carousel>
  );
}
