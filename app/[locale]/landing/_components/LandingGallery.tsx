"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import { Reveal } from "./Reveal";

const galleryImages = [
  {
    src: "/images/projects/cuisine-haut-de-gamme-blanche-laval.webp",
    title: "Résidence Laval",
    type: "Rénovation complète",
    detail: "Cuisine ouverte · îlot central",
  },
  {
    src: "/images/projects/Signature-Bouleau.webp",
    title: "Signature Bouleau",
    type: "Sur mesure · Montréal",
    detail: "Intégration complète · assises sur mesure",
  },
  {
    src: "/images/projects/chene-moderne.webp",
    title: "Chêne moderne",
    type: "Sur mesure · Montréal",
    detail: "Façades bois · appareillages intégrés",
  },
  {
    src: "/images/projects/cuisine-blanche-sur-mesure-brossard.webp",
    title: "Résidence Brossard",
    type: "Construction neuve",
    detail: "Linéaire clair · ouverture sur cour",
  },
  {
    src: "/images/projects/project11.webp",
    title: "Résidence Rive-Sud",
    type: "Rénovation",
    detail: "Espace semi-ouvert · îlot péninsule",
  },
  {
    src: "/images/projects/cuisine-haut-de-gamme-blanche-laval-1.webp",
    title: "Résidence Laval II",
    type: "Rénovation",
    detail: "Dosseret céramique · rangement mural",
  },
] as const;

export function LandingGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);
  const next = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? null : (i + 1) % galleryImages.length,
      ),
    [],
  );
  const prev = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length,
      ),
    [],
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close, next, prev]);

  const activeProject = activeIndex !== null ? galleryImages[activeIndex] : null;

  return (
    <section id="realisations" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              § 03 · Réalisations
            </p>
            <h2 className="font-display text-3xl font-medium tracking-[-0.02em] text-balance sm:text-4xl lg:text-5xl">
              Une sélection de projets récents
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground md:text-right">
            Chaque projet est pensé pour durer. Finitions, matériaux et
            proportions ajustés à l&apos;espace et au quotidien de nos clients.
          </p>
        </Reveal>

        {/* Mobile: horizontal snap carousel */}
        <ul className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 -mx-4 sm:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {galleryImages.map((project, index) => (
            <li
              key={project.src}
              className="snap-center shrink-0 w-[82vw]"
            >
              <figure>
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="relative block aspect-[4/5] w-full overflow-hidden bg-foreground/5"
                  aria-label={`Ouvrir ${project.title}`}
                >
                  <Image
                    src={project.src}
                    alt={`${project.title} — ${project.type}`}
                    fill
                    className="object-cover"
                    sizes="85vw"
                  />
                </button>
                <figcaption className="mt-4 flex items-baseline gap-3">
                  <span className="font-mono text-[11px] font-semibold tracking-[0.18em] text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {project.type}
                    </p>
                    <p className="mt-1 font-display text-lg font-medium tracking-[-0.01em] text-foreground">
                      {project.title}
                    </p>
                    <p className="mt-0.5 text-sm leading-5 text-muted-foreground">
                      {project.detail}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <p className="mt-4 flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:hidden">
          <span className="h-px w-6 bg-border" aria-hidden />
          Glisser pour voir
          <span className="h-px w-6 bg-border" aria-hidden />
        </p>

        {/* Desktop: 3-col grid */}
        <ul className="mt-16 hidden grid-cols-2 gap-x-10 gap-y-16 sm:grid lg:grid-cols-3 lg:gap-x-8">
          {galleryImages.map((project, index) => (
            <Reveal
              key={project.src}
              delay={(index % 3) * 100}
              as="li"
              className="group"
            >
              <figure>
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="relative block aspect-[4/5] w-full overflow-hidden bg-foreground/5 cursor-zoom-in"
                  aria-label={`Ouvrir ${project.title}`}
                >
                  <Image
                    src={project.src}
                    alt={`${project.title} — ${project.type}`}
                    fill
                    className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.035]"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
                </button>

                <figcaption className="mt-5 flex items-baseline gap-4">
                  <span className="font-mono text-xs font-semibold tracking-[0.18em] text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {project.type}
                    </p>
                    <p className="mt-1 font-display text-lg font-medium tracking-[-0.01em] text-foreground">
                      {project.title}
                    </p>
                    <p className="mt-1 text-sm leading-5 text-muted-foreground">
                      {project.detail}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>

      {isOpen && activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeProject.title}
          className="fixed inset-0 z-[60] flex flex-col bg-black/92 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={close}
        >
          <div className="flex items-center justify-between px-4 py-4 text-white/80 sm:px-6">
            <span className="font-mono text-xs tracking-[0.22em]">
              {String(activeIndex! + 1).padStart(2, "0")} / {String(galleryImages.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={close}
              aria-label="Fermer"
              className="rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" strokeWidth={1.8} />
            </button>
          </div>

          <div
            className="relative flex-1"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={activeProject.src}
              src={activeProject.src}
              alt={activeProject.title}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />

            <button
              type="button"
              onClick={prev}
              aria-label="Précédent"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 sm:left-6"
            >
              <ChevronLeft className="h-6 w-6" strokeWidth={1.6} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Suivant"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 sm:right-6"
            >
              <ChevronRight className="h-6 w-6" strokeWidth={1.6} />
            </button>
          </div>

          <div className="flex items-baseline gap-4 px-6 py-5 text-white">
            <span className="font-mono text-xs font-semibold tracking-[0.2em] text-white/60">
              {String(activeIndex! + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                {activeProject.type}
              </p>
              <p className="mt-1 font-display text-xl font-medium tracking-[-0.01em]">
                {activeProject.title}
              </p>
              <p className="mt-1 text-sm text-white/70">{activeProject.detail}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
