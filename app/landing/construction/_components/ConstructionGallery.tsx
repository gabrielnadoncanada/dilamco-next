import Image from "next/image";

const projects = [
  {
    src: "/images/generated/services/service-renovation-project-01.webp",
    caption: "Rénovation complète · Rive-Sud",
  },
  {
    src: "/images/generated/services/service-renovation-project-02.webp",
    caption: "Cuisine · Laval",
  },
  {
    src: "/images/generated/services/service-renovation-project-03.webp",
    caption: "Salle de bain · Montréal",
  },
  {
    src: "/images/generated/renovation/renovation-cuisine-approach-01.webp",
    caption: "Cuisine sur mesure",
  },
  {
    src: "/images/generated/renovation/renovation-extension-hero-01.webp",
    caption: "Agrandissement",
  },
  {
    src: "/images/projects/cuisine-haut-de-gamme-blanche-laval.webp",
    caption: "Cuisine haut de gamme · Laval",
  },
];

export function ConstructionGallery() {
  return (
    <section id="realisations" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl text-center">
          Des réalisations qui parlent d&apos;elles-mêmes
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <figure key={project.src}>
              <Image
                src={project.src}
                alt={project.caption}
                width={600}
                height={450}
                className="rounded-xl object-cover aspect-[4/3] w-full"
              />
              <figcaption className="mt-2 text-xs text-muted-foreground">
                {project.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
