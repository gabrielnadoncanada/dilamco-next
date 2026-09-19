import Image from "next/image";
import { MapPin } from "lucide-react";

import { AppLink as Link } from "@/components/AppLink";
import { Heading } from "@/components/elements/heading";
import { Button, ButtonArrow } from "@/components/ui/button";
import type { HeroZoneProps } from "./schema";

/**
 * Hero de zone : photo pleine largeur dans un panneau, la ville en très grand,
 * et une fiche locale (dl) qui flotte en bas à droite sur desktop et se pose
 * sous le panneau sur mobile.
 */
export function HeroZone(props: HeroZoneProps) {
  const primary = props.actions[0];
  const secondary = props.actions[1];

  const factSheet = (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-5 rounded-card bg-white/94 p-5 text-foreground shadow-[0_24px_60px_-28px_rgb(21_25_26/45%)] backdrop-blur sm:p-6">
      {props.facts.map((f) => (
        <div key={f.label} className="min-w-0">
          <dt className="text-label text-muted-foreground">{f.label}</dt>
          <dd className="mt-1.5 text-[0.9375rem] font-semibold leading-snug">{f.value}</dd>
        </div>
      ))}
    </dl>
  );

  return (
    <div className="text-left">
      <div className="relative isolate overflow-hidden rounded-panel bg-ink text-white">
        <Image
          src={props.image.src}
          alt={props.image.alt}
          fill
          priority
          fetchPriority="high"
          className="-z-20 object-cover"
          sizes="(min-width: 1440px) 1376px, 96vw"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(21_25_26/78%)_0%,rgb(21_25_26/45%)_55%,rgb(21_25_26/25%)_100%)]"
        />

        <div className="grid min-h-[520px] gap-8 p-6 sm:p-10 lg:min-h-[600px] lg:grid-cols-12 lg:items-end lg:p-14">
          <div className="lg:col-span-7">
            <p className="text-label inline-flex items-center gap-2 text-white/75">
              <MapPin className="size-3.5" strokeWidth={2.5} />
              {props.eyebrow}
            </p>
            <Heading
              as="h1"
              variant="display"
              className="mt-4 text-white [text-shadow:0_2px_24px_rgb(0_0_0/25%)]"
            >
              {props.heading}
            </Heading>
            <p className="text-lead mt-5 max-w-[44ch] text-white/88">
              {props.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="xl" variant="paper">
                <Link href={primary.href}>
                  {primary.label}
                  <ButtonArrow />
                </Link>
              </Button>
              {secondary ? (
                <Button asChild size="xl" variant="ghost-light">
                  <Link href={secondary.href}>{secondary.label}</Link>
                </Button>
              ) : null}
            </div>
          </div>

          <div className="hidden lg:col-span-5 lg:block xl:col-start-8">
            {factSheet}
          </div>
        </div>
      </div>

      <div className="-mt-6 px-3 lg:hidden">{factSheet}</div>
    </div>
  );
}
