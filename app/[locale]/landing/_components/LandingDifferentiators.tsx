import { Factory, TreePine, UserCheck } from "lucide-react";

import { Reveal } from "./Reveal";

const differentiators = [
  {
    number: "01",
    kicker: "Supply chain",
    icon: Factory,
    title: "Une structure réelle derrière chaque projet",
    description:
      "Entrepôt à Montréal depuis plus de 20 ans, relation directe avec notre usine. Pas d'intermédiaire, pas d'aléas d'approvisionnement — un projet planifié et livré dans les délais.",
    metric: "20+",
    metricLabel: "Années d'opération",
  },
  {
    number: "02",
    kicker: "Matériaux",
    icon: TreePine,
    title: "Du bois massif, pas du panneau pressé",
    description:
      "Structures en bois massif de bouleau, fonds en contreplaqué de bouleau. Une finition qui ne s'écaille pas, des tiroirs qui ne gonflent pas, une structure conçue pour durer 20 ans et plus.",
    metric: "20 ans+",
    metricLabel: "Durabilité visée",
  },
  {
    number: "03",
    kicker: "Gestion",
    icon: UserCheck,
    title: "Un seul responsable, du design à l'installation",
    description:
      "Design, fabrication, rénovation, installation : tout est coordonné par la même équipe. Moins d'intervenants, zéro coordination de votre côté, un résultat cohérent avec ce qui a été convenu.",
    metric: "1",
    metricLabel: "Équipe, tout le projet",
  },
] as const;

export function LandingDifferentiators() {
  return (
    <section id="pourquoi" className="bg-[var(--surface-tint-bg)] py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            § 01 · Pourquoi Dilamco
          </p>
          <h2 className="font-display text-3xl font-medium tracking-[-0.02em] text-balance sm:text-4xl lg:text-5xl">
            Une structure réelle, pas une promesse marketing
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            Trois avantages concrets qui expliquent pourquoi nos projets
            tiennent dans le temps.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:mt-20 md:grid-cols-3">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.number}
                delay={index * 120}
                as="article"
                className="group relative flex flex-col bg-[var(--surface-tint-bg)] p-8 transition-colors duration-500 hover:bg-background sm:p-10"
              >
                {/* Top row: number + kicker */}
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs font-semibold tracking-[0.2em] text-foreground">
                      {item.number}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      {item.kicker}
                    </span>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:border-foreground/30">
                    <Icon className="h-4 w-4 text-foreground/70" strokeWidth={1.5} />
                  </span>
                </div>

                <h3 className="mt-8 font-display text-2xl font-medium leading-[1.2] tracking-[-0.015em] sm:text-[28px]">
                  {item.title}
                </h3>

                <p className="mt-5 flex-1 text-[15px] leading-[1.7] text-muted-foreground">
                  {item.description}
                </p>

                {/* Footer metric */}
                <div className="mt-8 flex items-baseline gap-3 border-t border-border pt-5">
                  <span className="font-display text-2xl font-medium tracking-[-0.02em] text-foreground">
                    {item.metric}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {item.metricLabel}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
