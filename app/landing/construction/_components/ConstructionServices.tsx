import Image from "next/image";

const services = [
  {
    title: "Rénovation cuisine & salle de bain",
    description: "Espaces repensés, finitions impeccables, durables.",
    src: "/images/generated/renovation/renovation-cuisine-hero-01.webp",
    alt: "Rénovation de cuisine et salle de bain",
  },
  {
    title: "Rallonges & agrandissements",
    description: "Plus d'espace, intégré proprement à votre maison.",
    src: "/images/generated/renovation/renovation-extension-approach-01.webp",
    alt: "Rallonge et agrandissement résidentiel",
  },
  {
    title: "Portes, fenêtres & planchers",
    description: "Mise à niveau qui améliore confort et valeur.",
    src: "/images/generated/renovation/renovation-plancher-hero-01.webp",
    alt: "Installation de portes, fenêtres et planchers",
  },
  {
    title: "Récupération après sinistre",
    description: "Dégâts d'eau ou feu : intervention rapide, remise à neuf.",
    src: "/images/generated/renovation/renovation-bath-hero-01.webp",
    alt: "Récupération après sinistre — dégâts d'eau ou incendie",
  },
] as const;

export function ConstructionServices() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl font-medium tracking-tight sm:text-4xl">
          Tout ce dont votre projet a besoin, sous un même toit.
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={service.src}
                  alt={service.alt}
                  width={400}
                  height={300}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-display font-medium text-foreground">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Aussi : projets commerciaux (bureaux, commerces, entrepôts).
        </p>
      </div>
    </section>
  );
}
