import {
  Droplets,
  Wrench,
  PackageOpen,
  Layers,
  TrendingUp,
  Armchair,
} from "lucide-react";

import { Reveal } from "./Reveal";

const signals = [
  {
    icon: PackageOpen,
    label: "Tiroirs qui faiblissent",
    detail: "Perdent leur fermeté et leur alignement après quelques années.",
  },
  {
    icon: Wrench,
    label: "Quincaillerie précoce",
    detail: "Charnières, glissières et mécanismes qui s'usent trop vite.",
  },
  {
    icon: Droplets,
    label: "Matériaux sensibles",
    detail: "Gonflement au contact de l'humidité — panneaux, jonctions, bas de caisson.",
  },
  {
    icon: Layers,
    label: "Structure fragile",
    detail: "Compromis invisibles dans l'âme du meuble, invisibles à l'œil nu.",
  },
  {
    icon: TrendingUp,
    label: "Budget qui dérive",
    detail: "Coûts additionnels qui apparaissent une fois le chantier lancé.",
  },
  {
    icon: Armchair,
    label: "Usage contraint",
    detail: "Petits inconforts quotidiens qui s'accumulent au fil des années.",
  },
] as const;

export function LandingQualification() {
  return (
    <section className="bg-[var(--surface-tint-bg)] py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Ce qui ne se voit pas à la soumission
          </p>
          <h2 className="font-display text-3xl font-medium tracking-[-0.02em] text-balance sm:text-4xl lg:text-5xl">
            Ce que plusieurs propriétaires découvrent trop tard
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            Toutes les cuisines ne se valent pas, même si elles se ressemblent
            au départ. La différence se joue dans des détails qui
            n&apos;apparaissent qu&apos;après plusieurs années.
          </p>
        </Reveal>

        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 border-y border-border sm:grid-cols-2 lg:grid-cols-3">
            {signals.map((signal, index) => {
              const Icon = signal.icon;
              const isTopRowOnDesktop = index < 3;
              const isTopRowOnTablet = index < 2;
              return (
                <Reveal
                  key={signal.label}
                  delay={(index % 3) * 100}
                  className={[
                    "group relative px-6 py-8 sm:px-8 sm:py-10",
                    // vertical dividers
                    "sm:[&:nth-child(2n)]:border-l sm:[&:nth-child(2n)]:border-border",
                    "lg:[&:nth-child(3n+2)]:border-l lg:[&:nth-child(3n+2)]:border-border",
                    "lg:[&:nth-child(3n)]:border-l lg:[&:nth-child(3n)]:border-border",
                    // horizontal dividers between rows
                    !isTopRowOnTablet ? "sm:border-t sm:border-border" : "",
                    !isTopRowOnDesktop ? "lg:border-t lg:border-border" : "",
                    index !== 0 ? "border-t border-border sm:border-t-0" : "",
                  ].join(" ")}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground/5 ring-1 ring-border transition-colors duration-300 group-hover:bg-foreground/10">
                      <Icon className="h-4 w-4 text-foreground/70" strokeWidth={1.6} />
                    </span>
                    <h3 className="text-base font-semibold tracking-tight text-foreground">
                      {signal.label}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {signal.detail}
                  </p>
                </Reveal>
              );
            })}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-6 text-muted-foreground">
            Ces différences ne sont pas toujours visibles avant de signer. C&apos;est
            précisément là que se joue la valeur d&apos;un projet sur 20 ans.
          </p>
        </div>
      </div>
    </section>
  );
}
