import Image from "next/image";

import { AppLink as Link } from "@/components/AppLink";
import { Button, ButtonArrow } from "@/components/ui/button";
import type { HeroImageOverlayProps } from "./schema";

/**
 * Hero « photo encadrée » (référence NexaCargo) : image pleine largeur dans un
 * cadre arrondi, titre en haut à gauche, phrase courte et boutons en bas. Les
 * preuves (`proofs`) forment une rangée de chiffres sous le cadre.
 */
export function HeroImageOverlay(props: HeroImageOverlayProps) {
  const primary = props.actions[0];
  const secondary = props.actions[1];

  return (
    <div className="text-left">
      <div className="relative isolate flex min-h-[560px] flex-col justify-between overflow-hidden rounded-[1.75rem] bg-ink p-6 text-white sm:min-h-[620px] sm:p-10 lg:min-h-[min(78vh,760px)] lg:p-14">
        <Image
          src={props.image.src}
          alt={props.image.alt}
          fill
          priority
          fetchPriority="high"
          className="ken-burns -z-20 object-cover"
          sizes="(min-width: 1440px) 1376px, 96vw"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(21_25_26/58%)_0%,rgb(21_25_26/18%)_42%,rgb(21_25_26/72%)_100%)]"
        />

        <h1 className="display-heading max-w-[13ch] text-[clamp(2.375rem,1.4rem+4.2vw,5.25rem)] text-white [text-shadow:0_2px_24px_rgb(0_0_0/25%)] max-sm:max-w-none max-sm:[text-wrap:pretty]">
          {props.heading}
        </h1>

        <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-[44ch] text-base leading-relaxed text-white/88 sm:text-lg">
            {props.description}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:shrink-0">
            <Button asChild size="xl" variant="paper" className="w-full sm:w-auto">
              <Link href={primary.href}>
                {primary.label}
                <ButtonArrow />
              </Link>
            </Button>
            {secondary ? (
              <Button
                asChild
                size="xl"
                variant="ghost-light"
                className="w-full sm:w-auto"
              >
                <Link href={secondary.href}>{secondary.label}</Link>
              </Button>
            ) : null}
          </div>
        </div>
      </div>

      {props.proofs?.length ? (
        <dl className="mt-6 grid grid-cols-3 divide-x divide-border/80 rounded-2xl border border-border/80 bg-card sm:mt-8">
          {props.proofs.map((p) => (
            <div
              key={p.title}
              className="flex flex-col gap-1 px-4 py-5 sm:px-8 sm:py-6"
            >
              <dd className="font-display text-[clamp(1.75rem,1.2rem+1.8vw,3rem)] font-semibold leading-none tracking-[-0.04em] text-foreground tabular-nums">
                {p.title}
              </dd>
              <dt className="text-xs font-medium text-muted-foreground sm:text-sm">
                {p.description}
              </dt>
            </div>
          ))}
        </dl>
      ) : null}
    </div>
  );
}
