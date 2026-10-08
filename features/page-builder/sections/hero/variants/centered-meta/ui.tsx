import Image from "next/image";

import { HeroContent } from "@/features/page-builder/sections/hero/shared/ui/HeroContent";

import type { HeroCenteredMetaProps } from "./schema";

/**
 * Hero de lecture : kicker, titre, accroche et ligne de métadonnées centrés
 * (date, durée de lecture), puis photo dans un cadre `rounded-panel`. Pas
 * d'actions : la conversion vit dans la bande CTA de fin de page.
 */
export function HeroCenteredMeta(props: HeroCenteredMetaProps) {
  return (
    <div className="py-6 sm:py-10">
      <div className="mx-auto max-w-3xl text-center">
        <HeroContent
          align="center"
          eyebrow={props.eyebrow}
          heading={props.heading}
          description={props.description}
        />
        <p className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm font-medium text-muted-foreground">
          {props.meta.map((item, index) => (
            <span key={`${item.label}-${index}`} className="inline-flex items-center gap-3">
              {index > 0 ? (
                <span aria-hidden className="size-1 rounded-full bg-border" />
              ) : null}
              {item.dateTime ? (
                <time dateTime={item.dateTime}>{item.label}</time>
              ) : (
                item.label
              )}
            </span>
          ))}
        </p>
      </div>

      {props.image ? (
        <div className="relative mx-auto mt-10 aspect-[4/3] max-w-6xl overflow-hidden rounded-panel bg-muted sm:mt-12 sm:aspect-[2/1]">
          <Image
            src={props.image.src}
            alt={props.image.alt}
            fill
            priority
            fetchPriority="high"
            className="object-cover"
            sizes="(min-width: 1152px) 1152px, 100vw"
          />
        </div>
      ) : null}
    </div>
  );
}
