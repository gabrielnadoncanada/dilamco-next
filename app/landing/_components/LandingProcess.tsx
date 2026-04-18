import { MessagesSquare, Ruler, Hammer, KeyRound } from "lucide-react";

import { Reveal } from "./Reveal";

const processSteps = [
  {
    step: "01",
    duration: "Semaine 1",
    title: "Consultation",
    description:
      "Nous clarifions votre projet, vos priorités, votre budget et votre échéancier.",
    icon: MessagesSquare,
  },
  {
    step: "02",
    duration: "Semaines 2–4",
    title: "Conception & sélection",
    description:
      "Nous définissons la configuration, les matériaux et les finitions adaptés à votre espace.",
    icon: Ruler,
  },
  {
    step: "03",
    duration: "Semaines 5–10",
    title: "Fabrication",
    description:
      "Votre cuisine est fabriquée sur mesure selon des standards précis et contrôlés.",
    icon: Hammer,
  },
  {
    step: "04",
    duration: "Semaine finale",
    title: "Installation",
    description:
      "Nous réalisons les travaux nécessaires, installons votre cuisine et validons le résultat final.",
    icon: KeyRound,
  },
] as const;

export function LandingProcess() {
  return (
    <section id="processus" className="bg-[var(--surface-tint-bg)] py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            § 04 · Processus
          </p>
          <h2 className="font-display text-3xl font-medium tracking-[-0.02em] text-balance sm:text-4xl lg:text-5xl">
            De la première conversation à l&apos;installation
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            Un processus clair et structuré pour un résultat sans mauvaises
            surprises.
          </p>
        </Reveal>

        <div className="relative mx-auto mt-16 max-w-6xl">
          {/* Horizontal progress line — desktop */}
          <div
            className="absolute left-8 right-8 top-8 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block"
            aria-hidden
          />

          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal
                  key={step.step}
                  delay={index * 120}
                  as="li"
                  className="group relative"
                >
                  {/* Icon bubble */}
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-border bg-background shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md">
                    <Icon className="h-5 w-5 text-foreground/70" strokeWidth={1.5} />
                  </div>

                  {/* Step number + duration */}
                  <div className="mt-6 flex items-baseline gap-3">
                    <span className="font-mono text-xs font-semibold tracking-[0.1em] text-foreground">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {step.duration}
                    </span>
                  </div>

                  <h3 className="mt-2 font-display text-xl font-medium tracking-[-0.01em] text-foreground">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>
                </Reveal>
              );
            })}
          </ol>

          <p className="mt-14 text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Délais indicatifs · Ajustés selon l&apos;ampleur du projet
          </p>
        </div>
      </div>
    </section>
  );
}
