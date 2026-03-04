import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { HeroSplitImageBadgesProps } from "./schema";
import { Heading } from "@/components/elements/heading";

export function HeroSplitImageBadges(props: HeroSplitImageBadgesProps) {
  const primary = props.actions[0];
  const secondary = props.actions[1];

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
      {/* Left */}
      <div className="lg:col-span-7">
        {props.eyebrow ? (
          <p className="text-sm text-muted-foreground">{props.eyebrow}</p>
        ) : null}

        <Heading as="h1" variant="h1">{props.heading}</Heading>

        <p className="mt-4 max-w-2xl text-muted-foreground">
          {props.description}
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" variant={primary.variant ?? "default"}>
            <Link href={primary.href}>{primary.label}</Link>
          </Button>

          {secondary ? (
            <Button asChild size="lg" variant={secondary.variant ?? "outline"}>
              <Link href={secondary.href}>{secondary.label}</Link>
            </Button>
          ) : null}
        </div>

        {props.badges?.length ? (
          <div className="mt-6 flex flex-wrap gap-2">
            {props.badges.map((b) => (
              <Badge key={b} variant="secondary">
                {b}
              </Badge>
            ))}
          </div>
        ) : null}
      </div>

      {/* Right */}
      <div className="lg:col-span-5">
        <div className="relative overflow-hidden rounded-xl border bg-muted/30">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={props.image.src}
              alt={props.image.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
              priority
            />
          </div>
        </div>

        {props.caption ? (
          <p className="mt-3 text-xs text-muted-foreground">{props.caption}</p>
        ) : null}
      </div>
    </div>
  );
}