import Image from "next/image";
import { Check } from "lucide-react";

import { Heading } from "@/components/elements/heading";

const features = [
  {
    title: "Cinq tablettes pleine largeur",
    description:
      "Une tablette structurelle et quatre tablettes repositionnables.",
  },
  {
    title: "Portes à fermeture amortie",
    description: "Une fermeture silencieuse et une quincaillerie dissimulée.",
  },
  {
    title: "Dos structurel capturé",
    description: "Il participe à la rigidité sans clous visibles à l'arrière.",
  },
  {
    title: "Patins de nivellement",
    description: "Le meuble demeure stable même sur un plancher imparfait.",
  },
] as const;

export function PantryInterior() {
  return (
    <section id="details" className="py-16 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
          <Image
            src="/images/landing/alto/open.webp"
            alt="Intérieur d'ALTO avec ses cinq tablettes"
            width={1122}
            height={1402}
            className="h-auto w-full object-cover"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            À l&apos;intérieur
          </p>
          <Heading as="h2" variant="h2" className="text-balance">
            Simple, ajustable et réellement <em>utile</em>.
          </Heading>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
            Cinq tablettes pleine largeur : fini les armoires qui débordent et
            le comptoir encombré.
          </p>

          <div className="mt-9 border-t border-border">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="grid grid-cols-[38px_1fr] gap-4 border-b border-border py-5"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--surface-tint-bg)] text-primary">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.4} />
                </span>
                <div>
                  <Heading as="h3" variant="h5">
                    {feature.title}
                  </Heading>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
