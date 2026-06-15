import Image from "next/image";
import { AppLink as Link } from "@/components/AppLink";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import type { GridImageCardsBadgesCtaProps } from "./schema";
import { Heading } from "@/components/elements/heading";

export function GridImageCardsBadgesCta(props: GridImageCardsBadgesCtaProps) {
  return (
    <div>
      <div className="flex items-end justify-between gap-4">
        <div>
          <Heading as="h2" variant="h2">{props.heading}</Heading>
          {props.intro ? (
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{props.intro}</p>
          ) : null}
        </div>
        {props.ctaLabel && props.ctaHref ? (
          <Button asChild variant="outline" size="sm">
            <Link href={props.ctaHref}>{props.ctaLabel}</Link>
          </Button>
        ) : null}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {props.items.map((item) => {
          const quickLabel = item.quickActionLabel ?? null;
          const footerLabel = item.footerCtaLabel ?? `Découvrir ${item.title.toLowerCase()}`;

          return (
            <Card key={item.href} className="flex flex-col overflow-hidden">
              <div className="relative aspect-[16/10] w-full bg-muted">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>

              <CardHeader>
                <CardTitle className="flex items-center justify-between gap-3 text-lg font-semibold leading-snug">
                  <span>{item.title}</span>
                  {quickLabel ? (
                    <Button asChild variant="ghost" size="sm">
                      <Link href={item.href}>{quickLabel}</Link>
                    </Button>
                  ) : null}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground">{item.description}</p>

                {item.badges && item.badges.length > 0 ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.badges.map((b, idx) => (
                      <Badge key={`${b}-${idx}`} variant="secondary">
                        {b}
                      </Badge>
                    ))}
                  </div>
                ) : null}
              </CardContent>

              <CardFooter className="mt-auto bg-muted/50">
                <Button asChild variant="outline" size="sm">
                  <Link href={item.href}>{footerLabel}</Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}