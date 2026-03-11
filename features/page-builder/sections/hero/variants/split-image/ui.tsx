import Image from "next/image";

import { HeroContent } from "@/features/page-builder/sections/hero/shared/ui/HeroContent";
import type { HeroSplitImageProps } from "./schema";

export function HeroSplitImage(props: HeroSplitImageProps) {
  return (
    <div className="grid gap-y-8 lg:grid-cols-12 lg:items-center">
      {/* Left */}
      <div className="lg:col-span-5">
        <HeroContent
          actions={props.actions}
          badges={props.badges}
          description={props.description}
          heading={props.heading}
        />
      </div>

      {/* Right */}
      <div className="lg:col-[7/13]  max-lg:order-[-1]">
        <div className="relative overflow-hidden rounded-xl border bg-muted/30">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={props.image.src}
              alt={props.image.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
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
