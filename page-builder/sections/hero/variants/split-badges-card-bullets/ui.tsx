import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import type { HeroSplitBadgesCardBulletsProps } from "./schema";
import Image from "@/components/elements/image";
import { Heading } from "@/components/elements/heading";

export function HeroSplitBadgesCardBullets(props: HeroSplitBadgesCardBulletsProps) {
  const primary = props.actions[0];
  const secondary = props.actions[1];

  return (
    <>

      <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:py-20 bg-transparent">
        {/* Left */}
        <div className="lg:col-[1/7] xl:col-[1/8] py-16 lg:py-0 max-lg:-mx-4 max-lg:relative max-lg:px-4">
          {/* Background */}
          <div className="absolute inset-0 z-[-1]" >
            <Image
              src={props.image.src}
              alt={props.image.alt}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            {
              props.overlay === "dark-gradient" ? (
                <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/70" />
              ) : null
            }
          </div >
          {props.badges?.length ? (
            <div className="flex flex-wrap items-center gap-2">
              {props.badges.map((b) => (
                <Badge key={b} variant="secondary">
                  {b}
                </Badge>
              ))}
            </div>
          ) : null}

          <Heading as="h1" variant="h1" className="mt-6 text-white">
            {props.heading}
          </Heading>

          <p className="mt-5 text-base text-white/90 sm:text-lg">
            {props.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant={primary.variant ?? "default"}>
              <Link href={primary.href}>{primary.label}</Link>
            </Button>

            {secondary ? (
              <Button asChild size="lg" variant={secondary.variant ?? "outline"}>
                <Link href={secondary.href}>{secondary.label}</Link>
              </Button>
            ) : null}
          </div>

          {props.note ? (
            <p className="mt-5 text-sm text-white/90">{props.note}</p>
          ) : null}
        </div>

        {/* Right */}
        <div className="lg:col-[8/13] xl:col-[9/13] max-lg:pb-10">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg leading-snug">{props.card.title}</CardTitle>
              {props.card.description ? (
                <CardDescription className="text-sm leading-relaxed">
                  {props.card.description}
                </CardDescription>
              ) : null}
            </CardHeader>

            <CardContent className="space-y-4 text-sm">
              {props.card.items.map((it) => (
                <div key={it.title} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-foreground/60" />
                  <p>
                    <span className="font-medium">{it.title}</span>: {it.description}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}