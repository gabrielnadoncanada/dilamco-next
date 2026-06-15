import { Reveal } from "./Reveal";

const testimonials = [
  {
    quote:
      "Très impressionnés par la qualité de finition et la gestion du projet. Tout a été plus clair que ce qu'on avait connu auparavant.",
    author: "Marie-Hélène L.",
    initial: "M",
    location: "Outremont",
    project: "Rénovation cuisine",
  },
  {
    quote:
      "Le processus a été structuré du début à la fin. On sent qu'il y a une vraie maîtrise du projet.",
    author: "Jean-François P.",
    initial: "J",
    location: "Laval",
    project: "Cuisine sur mesure",
  },
  {
    quote:
      "Les matériaux, la coordination et le résultat final justifient complètement le positionnement haut de gamme.",
    author: "Sophie & Marc T.",
    initial: "S",
    location: "Brossard",
    project: "Construction neuve",
  },
] as const;

export function LandingTestimonials() {
  return (
    <section className="bg-[var(--surface-tint-bg)] py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            § 05 · Témoignages
          </p>
          <h2 className="font-display text-3xl font-medium tracking-[-0.02em] text-balance sm:text-4xl lg:text-5xl">
            Ce que nos clients retiennent
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal
              key={item.quote}
              delay={index * 120}
              as="figure"
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-background p-8 shadow-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-foreground/25 hover:shadow-md sm:p-10"
            >
              <span
                className="pointer-events-none absolute -top-2 left-6 select-none font-display text-[7rem] leading-none text-foreground/10 transition-colors duration-500 group-hover:text-foreground/15"
                aria-hidden
              >
                &ldquo;
              </span>

              <blockquote className="relative font-display text-lg font-normal leading-[1.65] tracking-[-0.005em] text-foreground sm:text-xl">
                {item.quote}
              </blockquote>

              <figcaption className="relative mt-8 flex items-center gap-3 border-t border-border pt-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-foreground/[0.06] text-[11px] font-semibold text-foreground/60">
                  {item.initial}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-foreground">
                    {item.author} — {item.location}
                  </p>
                  <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {item.project}
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
