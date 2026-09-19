import Image from "next/image";

import { HeroContent } from "@/features/page-builder/sections/hero/shared/ui/HeroContent";

import type { HeroCenteredProps } from "./schema";

export function HeroCentered(props: HeroCenteredProps) {
  return (
    <div className="py-8 sm:py-12">
      <div className="mx-auto max-w-3xl text-center">
        <HeroContent
          actions={props.actions}
          align="center"
          badgeStyle="secondary"
          badges={props.badges}
          description={props.description}
          heading={props.heading}
        />
      </div>

      {props.image ? (
        <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-panel bg-muted sm:mt-14 sm:aspect-[16/9] xl:aspect-[21/9]">
          <Image
            src={props.image.src}
            alt={props.image.alt}
            fill
            priority
            fetchPriority="high"
            className="object-cover"
            sizes="(min-width: 1536px) 1536px, 100vw"
          />
          {props.caption ? (
            <p className="absolute bottom-4 left-4 max-w-[calc(100%-2rem)] truncate rounded-full bg-white/92 px-4 py-2 text-sm font-semibold text-foreground shadow-[0_8px_24px_-12px_rgb(0_0_0/40%)] backdrop-blur sm:bottom-6 sm:left-6">
              {props.caption}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
