import {
  Bath,
  Building2,
  Check,
  ChefHat,
  ClipboardCheck,
  Clock,
  DoorOpen,
  Droplets,
  FileCheck,
  Hammer,
  HardHat,
  Layers,
  MapPin,
  Package2,
  Ruler,
  ShieldCheck,
  SlidersHorizontal,
  Sofa,
  Wrench,
} from "lucide-react";

import { Heading } from "@/components/elements/heading";

import type { GridIconCardsBulletsProps } from "./schema";

const iconMap = {
  doorOpen: DoorOpen,
  slidersHorizontal: SlidersHorizontal,
  package2: Package2,
  wrench: Wrench,
  hardHat: HardHat,
  hammer: Hammer,
  building2: Building2,
  layers: Layers,
  droplets: Droplets,
  mapPin: MapPin,
  shieldCheck: ShieldCheck,
  fileCheck: FileCheck,
  clipboardCheck: ClipboardCheck,
  clock: Clock,
  ruler: Ruler,
  bath: Bath,
  chefHat: ChefHat,
  sofa: Sofa,
} as const;

function resolveIcon(icon: string) {
  return iconMap[icon as keyof typeof iconMap] ?? Package2;
}

/**
 * Grille de points forts : icône dans une pastille verte, titre, une ligne,
 * puis 2 à 3 puces courtes. Fond teinté, pas de bordure.
 */
export function GridIconCardsBullets(props: GridIconCardsBulletsProps) {
  const gridCols =
    props.columns === "3" ? "lg:grid-cols-3" : "lg:grid-cols-2";

  return (
    <div className="text-left">
      <div className="max-w-2xl">
        <Heading as="h2" variant="h2">
          {props.heading}
        </Heading>
        {props.intro ? (
          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {props.intro}
          </p>
        ) : null}
      </div>

      <div className={`mt-10 grid gap-4 sm:grid-cols-2 ${gridCols}`}>
        {props.items.map((item) => {
          const Icon = resolveIcon(item.icon);

          return (
            <article
              key={item.title}
              className="flex flex-col rounded-2xl bg-primary-soft/60 p-6 sm:p-7"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Icon className="size-5" strokeWidth={2} />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold leading-tight tracking-[-0.02em] text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <ul className="mt-4 space-y-2 border-t border-primary/10 pt-4">
                {item.bullets.slice(0, 4).map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 text-sm text-foreground/85"
                  >
                    <Check
                      className="mt-1 size-3.5 shrink-0 text-primary"
                      strokeWidth={3}
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </div>
  );
}
