import Image from "next/image";
import { MapPin } from "lucide-react";

import { cn } from "@/lib/utils";

import { HeroContent } from "@/features/page-builder/sections/hero/shared/ui/HeroContent";
import type { HeroSplitImageProps } from "./schema";

/**
 * Hero « panneau + photo » (référence Construction Agency) : panneau vert de
 * marque avec le titre et les actions, photo dans un panneau arrondi à droite,
 * légende en pastille sur la photo.
 */
export function HeroSplitImage(props: HeroSplitImageProps) {
  return (
    <div className="grid gap-4 text-left xl:grid-cols-2">
      <div
        className={cn(
          "surface-blueprint flex flex-col justify-center rounded-panel p-7 text-primary-foreground sm:p-10 xl:min-h-[560px] xl:p-14",
          props.imageSide === "left" && "xl:order-2",
        )}
      >
        <HeroContent
          eyebrow={props.eyebrow}
          actions={props.actions}
          badges={props.badges}
          description={props.description}
          heading={props.heading}
          tone="inverse"
          badgeStyle="inverse"
          secondaryActionVariant="ghost-light"
        />
      </div>

      <div
        className={cn(
          "relative min-h-[300px] overflow-hidden rounded-panel bg-muted sm:min-h-[400px] xl:min-h-[560px]",
          props.imageSide === "left" && "xl:order-1",
        )}
      >
        <Image
          src={props.image.src}
          alt={props.image.alt}
          fill
          priority
          fetchPriority="high"
          className="object-cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
        {props.caption ? (
          <p className="absolute bottom-4 left-4 inline-flex max-w-[calc(100%-2rem)] items-center gap-2 rounded-full bg-white/92 px-4 py-2 text-sm font-semibold text-foreground shadow-[0_8px_24px_-12px_rgb(0_0_0/40%)] backdrop-blur sm:bottom-6 sm:left-6">
            <MapPin className="size-4 shrink-0 text-primary" strokeWidth={2.25} />
            <span className="truncate">{props.caption}</span>
          </p>
        ) : null}
      </div>
    </div>
  );
}
