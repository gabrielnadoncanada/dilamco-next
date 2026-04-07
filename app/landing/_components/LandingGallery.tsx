import Image from "next/image";

const galleryImages = [
  {
    src: "/images/projects/chene-moderne.webp",
    title: "Cuisine chêne moderne, Montréal",
    alt: "Cuisine moderne en chêne sur mesure à Montréal",
  },
  // {
  //   src: "/images/projects/Signature-Bouleau.webp",
  //   title: "Cuisine sur mesure, Brossard",
  //   alt: "Cuisine blanche sur mesure haut de gamme livrée à Brossard",
  // },
  {
    src: "/images/projects/cuisine-haut-de-gamme-blanche-laval-1.webp",
    title: "Cuisine haut de gamme, Laval",
    alt: "Cuisine blanche haut de gamme sur mesure réalisée à Laval",
  },
  {
    src: "/images/projects/project11.webp",
    title: "Réalisation sur mesure, Rive-Sud",
    alt: "Projet cuisine sur mesure haut de gamme sur la Rive-Sud",
  },
] as const;

export function LandingGallery() {
  return (
    <section id="realisations" className="border-y py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Nos réalisations
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Cuisines sur mesure, signé Dilamco
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
            Des projets conçus pour durer et adaptés à chaque espace.
          </p>
        </div>

        <div className="mt-14 grid gap-3  lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden rounded-2xl ring-1 ring-border transition-all duration-500 hover:ring-foreground/20 ${
                index === 0
                  ? "sm:col-span-1 min-h-[420px]"
                  : index === 3
                    ? "sm:col-span-1 lg:col-span-1 min-h-[300px]"
                    : "min-h-[300px]"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes={
                  index === 0
                    ? "(max-width: 768px) 100vw, 66vw"
                    : "(max-width: 768px) 100vw, 33vw"
                }
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity duration-500 group-hover:from-black/60" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-sm font-medium text-white">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
