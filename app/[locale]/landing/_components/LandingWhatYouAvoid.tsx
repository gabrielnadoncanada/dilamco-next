import Image from "next/image";
import { XCircle } from "lucide-react";

import { Reveal } from "./Reveal";

const avoidItems = [
  "Panneaux en mélamine qui gonflent ou s’écaillent",
  "Armoires fragiles qui perdent leur forme",
  "Vis et charnières qui se desserrent avec le temps",
  "Finitions qui s’usent trop rapidement",
] as const;

export function LandingWhatYouAvoid() {
  return (
    <section className="py-16 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 sm:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal className="flex flex-col justify-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Les compromis invisibles
          </p>
          <h2 className="font-display text-3xl font-medium tracking-[-0.02em] text-balance sm:text-4xl lg:text-5xl">
            Ce que vous évitez avec Dilamco
          </h2>
          <ul className="mt-8 space-y-4">
            {avoidItems.map((item, index) => (
              <Reveal
                as="li"
                key={item}
                delay={200 + index * 90}
                className="flex gap-3"
              >
                <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-foreground/40" />
                <span className="leading-7">{item}</span>
              </Reveal>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150} className="relative max-sm:order-first">
          <div className="relative min-h-[320px] md:min-h-[460px] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-border">
            <Image
              src="/images/contreplaque1.jpg"
              alt="Structure en contreplaqué de bouleau — qualité matérielle Dilamco"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
              aria-hidden
            />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
              <div className="rounded-2xl bg-background/95 px-4 py-3 backdrop-blur-sm ring-1 ring-border">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  À l&apos;œil
                </p>
                <p className="mt-0.5 text-sm font-semibold text-foreground">
                  Toutes identiques
                </p>
              </div>
              <div className="rounded-2xl bg-foreground/95 px-4 py-3 text-background backdrop-blur-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-background/60">
                  Dans le temps
                </p>
                <p className="mt-0.5 text-sm font-semibold text-background">
                  Tout change
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
