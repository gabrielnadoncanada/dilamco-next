import Image from "next/image";

import { Heading } from "@/components/elements/heading";

const steps = [
  {
    title: "Poser la base",
    description: "Les pieds de nivellement sont déjà installés.",
  },
  {
    title: "Verrouiller les côtés",
    description:
      "Les panneaux structuraux s'alignent sur les connecteurs intégrés.",
  },
  {
    title: "Capturer le dos",
    description:
      "Le panneau arrière glisse dans des rainures et rigidifie le caisson.",
  },
  {
    title: "Clipser les portes",
    description:
      "Les charnières amovibles permettent une pose et un retrait propres.",
  },
] as const;

export function PantryAssembly() {
  return (
    <section
      id="montage"
      className="border-y bg-foreground py-16 text-background md:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-8">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-background/55">
            Assemblage repensé
          </p>
          <Heading
            as="h2"
            variant="h2"
            className="text-balance text-background [&_em]:text-background"
          >
            Moins de petites pièces. Moins de <em>frustration</em>.
          </Heading>
          <p className="mt-5 max-w-xl text-base leading-7 text-background/70">
            Quatre grandes pièces qui se verrouillent dans l&apos;ordre. Monté
            en quelques minutes, sans chercher la moindre visserie.
          </p>

          <div className="mt-10 border-t border-background/15">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="grid grid-cols-[44px_1fr] gap-4 border-b border-background/15 py-5"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-background/25 text-xs font-semibold">
                  {index + 1}
                </span>
                <div>
                  <Heading as="h3" variant="h5" className="text-background">
                    {step.title}
                  </Heading>
                  <p className="mt-1 text-sm leading-6 text-background/65">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white">
          <Image
            src="/images/landing/alto/exploded.webp"
            alt="Vue éclatée d'ALTO montrant chaque panneau"
            width={1122}
            height={1402}
            className="h-auto w-full object-cover"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>
      </div>
    </section>
  );
}
