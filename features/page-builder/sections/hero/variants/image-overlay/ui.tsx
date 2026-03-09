import Image from "@/components/elements/image";

import { Card, CardContent } from "@/components/ui/card";
import { HeroContent } from "@/features/page-builder/sections/hero/shared/ui/HeroContent";
import type { HeroImageOverlayProps } from "./schema";

export function HeroImageOverlay(props: HeroImageOverlayProps) {
  return (
    <>
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={props.image.src}
          alt={props.image.alt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {props.overlay === "dark-gradient" ? (
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/70" />
        ) : null}
      </div>

      {/* Content */}
      <div className="relative">
        <div className="max-w-2xl">
          <HeroContent
            actions={props.actions}
            badges={props.badges}
            description={props.description}
            fillActionsOnMobile
            heading={props.heading}
            secondaryActionVariant="secondary"
            tone="inverse"
          />

          {props.proofs?.length ? (
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {props.proofs.map((p) => (
                <Card
                  key={p.title}
                  className="border-white/15 bg-white/5 text-white backdrop-blur-md"
                >
                  <CardContent className="p-4">
                    <p className="text-sm font-medium">{p.title}</p>
                    <p className="mt-1 text-xs text-white/80">{p.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
