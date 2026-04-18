import Image from "next/image";

import { Reveal } from "./Reveal";

const macroShots = [
  {
    src: "/images/generated/materials/material-solid-wood-finish-detail-01.webp",
    label: "Bois massif de bouleau",
    spec: "Densité · 670 kg/m³",
    caption:
      "Grain fermé, stabilité dimensionnelle supérieure. Tient la vis, absorbe les chocs sans se marquer.",
    ratio: "aspect-[4/5]",
  },
  {
    src: "/images/generated/materials/material-plywood-detail-01.webp",
    label: "Contreplaqué de bouleau",
    spec: "9 plis croisés · 19 mm",
    caption:
      "Fond et panneaux en contreplaqué véritable, pas de panneaux pressés qui gonflent à l'humidité.",
    ratio: "aspect-[4/5]",
  },
  {
    src: "/images/generated/materials/material-hardware-detail-01.webp",
    label: "Quincaillerie Blum",
    spec: "Garantie à vie · Made in Austria",
    caption:
      "Charnières et coulisses amorties haut de gamme. Les mêmes qui équipent les cuisines européennes depuis 70 ans.",
    ratio: "aspect-[4/5]",
  },
] as const;

export function LandingMaterials() {
  return (
    <section id="materiaux" className="bg-[var(--surface-tint-bg)] py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            § 02 · Matériaux
          </p>
          <h2 className="font-display text-3xl font-medium tracking-[-0.02em] text-balance sm:text-4xl lg:text-5xl">
            Ce qui fait qu&apos;une cuisine traverse vingt ans
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            Les détails qui ne se voient pas à la soumission sont souvent ceux
            qui décident de la durée de vie d&apos;une cuisine.
          </p>
        </Reveal>

        {/* Mobile: horizontal snap carousel */}
        <ul className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 -mx-4 md:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {macroShots.map((shot, index) => (
            <li key={shot.label} className="snap-center shrink-0 w-[82vw]">
              <figure className="flex flex-col">
                <div
                  className={`relative ${shot.ratio} overflow-hidden bg-foreground/5`}
                >
                  <Image
                    src={shot.src}
                    alt={shot.label}
                    fill
                    className="object-cover"
                    sizes="85vw"
                  />
                </div>
                <figcaption className="mt-5 flex items-baseline gap-3">
                  <span className="font-mono text-[11px] font-semibold tracking-[0.2em] text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      {shot.spec}
                    </p>
                    <p className="mt-1 font-display text-lg font-medium tracking-[-0.01em] text-foreground">
                      {shot.label}
                    </p>
                    <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                      {shot.caption}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <p className="mt-4 flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground md:hidden">
          <span className="h-px w-6 bg-border" aria-hidden />
          Glisser pour voir
          <span className="h-px w-6 bg-border" aria-hidden />
        </p>

        {/* Desktop: 3-col grid */}
        <div className="mt-16 hidden gap-10 md:grid md:grid-cols-3 md:gap-6 lg:gap-10">
          {macroShots.map((shot, index) => (
            <Reveal
              key={shot.label}
              delay={index * 120}
              as="figure"
              className="group flex flex-col"
            >
              <div
                className={`relative ${shot.ratio} overflow-hidden bg-foreground/5`}
              >
                <Image
                  src={shot.src}
                  alt={shot.label}
                  fill
                  className="object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
                  sizes="33vw"
                />
              </div>

              <figcaption className="mt-6 flex items-baseline gap-4">
                <span className="font-mono text-xs font-semibold tracking-[0.2em] text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {shot.spec}
                  </p>
                  <p className="mt-1 font-display text-xl font-medium tracking-[-0.01em] text-foreground">
                    {shot.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {shot.caption}
                  </p>
                </div>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
