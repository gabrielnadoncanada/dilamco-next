import { Gem, RefreshCw, Wrench } from "lucide-react";

import { Heading } from "@/components/elements/heading";

const benefits = [
  {
    number: "01",
    icon: Gem,
    title: "Vrai bois, vraie qualité",
    description:
      "Fini noyer véritable, portes pleine hauteur à fermeture amortie, quincaillerie invisible.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Monté et démonté en minutes",
    description:
      "Les pièces se verrouillent à la main. Il se démonte sans s'abîmer et se remonte aussi solide.",
  },
  {
    number: "03",
    icon: RefreshCw,
    title: "Il vous suit partout",
    description:
      "Condo, appartement, extension de cuisine : 24 po de large suffisent.",
  },
] as const;

export function PantryConcept() {
  return (
    <section id="concept" className="py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            § 01 · Le meuble qu&apos;on garde
          </p>
          <Heading as="h2" variant="h2" className="text-balance">
            Un <em>vrai</em> meuble. Pas un compromis.
          </Heading>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.number}
              className={`relative flex min-h-[280px] flex-col justify-between rounded-2xl border p-7 ${
                index === 1
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-[var(--surface-tint-bg)]"
              }`}
            >
              <div className="flex items-start justify-between">
                <p
                  className={`font-display text-5xl font-medium leading-none ${
                    index === 1 ? "text-background/15" : "text-foreground/10"
                  }`}
                >
                  {benefit.number}
                </p>
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-full border ${
                    index === 1
                      ? "border-background/25 text-background/80"
                      : "border-foreground/15 text-foreground/70"
                  }`}
                >
                  <benefit.icon className="h-4.5 w-4.5" strokeWidth={1.6} />
                </span>
              </div>
              <div className="mt-14">
                <Heading
                  as="h3"
                  variant="h3"
                  className={index === 1 ? "text-background" : undefined}
                >
                  {benefit.title}
                </Heading>
                <p
                  className={`mt-2.5 text-sm leading-6 ${
                    index === 1 ? "text-background/70" : "text-muted-foreground"
                  }`}
                >
                  {benefit.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
