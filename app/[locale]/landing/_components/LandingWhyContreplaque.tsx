import Image from "next/image";

const specs = [
  {
    label: "Structure",
    value: "Bois massif de bouleau",
    detail: "Grain dense, résistance supérieure aux chocs et aux déformations.",
  },
  {
    label: "Fond & panneaux",
    value: "Contreplaqué de bouleau",
    detail: "Stabilité dimensionnelle, meilleure tenue des vis et charnières.",
  },
  {
    label: "Tenue dans le temps",
    value: "Conçu pour 20 ans+",
    detail: "Résiste à l'humidité et à l'usage quotidien d'une résidence principale.",
  },
] as const;

export function LandingWhyContreplaque() {
  return (
    <section className="py-16 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-20 lg:px-8">
        <div className="relative max-lg:order-first">
          <div className="relative min-h-[360px] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-border lg:min-h-[560px]">
            <Image
              src="/images/contreplaque2.jpg"
              alt="Contreplaqué de bouleau — matériau durable utilisé par Dilamco"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"
              aria-hidden
            />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl bg-background/95 px-4 py-3 backdrop-blur-sm ring-1 ring-border">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Matériau
                </p>
                <p className="mt-0.5 text-sm font-semibold text-foreground">
                  Contreplaqué de bouleau
                </p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Conçu pour durer
                </p>
                <p className="mt-0.5 text-sm font-semibold text-foreground">
                  20 ans et plus
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            La matière compte
          </p>
          <h2 className="font-display text-3xl font-medium tracking-[-0.02em] text-balance sm:text-4xl lg:text-5xl">
            La différence est dans la structure, pas dans la façade
          </h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            La mélamine et les panneaux de particules gonflent, s&apos;écaillent
            et perdent leur forme. Le bois massif et le contreplaqué de bouleau
            traversent les années.
          </p>

          <dl className="mt-10 divide-y divide-border border-y border-border">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-[180px_1fr] sm:gap-6"
              >
                <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {spec.label}
                </dt>
                <dd>
                  <p className="text-base font-semibold text-foreground">
                    {spec.value}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {spec.detail}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
