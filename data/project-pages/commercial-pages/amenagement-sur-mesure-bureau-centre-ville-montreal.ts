import type { ProjectData } from "@/types/projects";
import {
  CORE_HREF,
  SPACE_GALLERY_HREF,
  SPACE_HREF,
} from "@/constants/projects";

export const PROJECT_AMENAGEMENT_SUR_MESURE_BUREAU_CENTRE_VILLE_MONTREAL: ProjectData =
  {
    space: "commercial",
    slug: "amenagement-sur-mesure-bureau-centre-ville-montreal",
    title: "Aménagement sur mesure, bureau (Centre-ville de Montréal)",
    metaDescription:
      "Projet commercial sur mesure : aménagement de bureau à Montréal. Usage intensif, durabilité, coordination et installation précise.",
    summary:
      "Aménagement commercial conçu pour usage intensif : modules robustes, choix de quincaillerie, et finition propre en zone visible.",
    area: "montreal",
    city: "Montréal",
    neighborhood: "Centre-ville",
    images: [
      {
        src: "/images/generated/spaces/space-commercial-hero-01.webp",
        alt: "Aménagement de bureau sur mesure au centre-ville de Montréal",
      },
    ],
    scope: [
      "Cadrage du mandat (usage, contraintes, échéance)",
      "Planification et validation des dimensions",
      "Fabrication sur mesure",
      "Installation et ajustements",
    ],
    constraints: [
      "Échéancier serré",
      "Accès limité (fenêtres de travail)",
      "Usage intensif et entretien fréquent",
    ],
    solution: [
      "Modules robustes adaptés aux cycles élevés",
      "Choix de quincaillerie cohérent avec l'usage",
      "Installation avec alignements et finitions propres",
    ],
    results: [
      "Rangement optimisé et circulation améliorée",
      "Durabilité accrue (usage intensif)",
      "Finition cohérente en zone publique",
    ],
    requiredLinks: {
      spaceHref: SPACE_HREF.commercial,
      renovationHref: CORE_HREF.renovation,
      materialHref: CORE_HREF.hardware, // commercial: hardware is often the strongest sales angle
      contactHref: CORE_HREF.contact,
    },
    optionalLinks: {
      galleryHref: SPACE_GALLERY_HREF.commercial,
      installationHref: CORE_HREF.installation,
    },
    materials: [
      { title: "Quincaillerie", href: CORE_HREF.hardware },
      {
        title: "Comparatif des matériaux",
        href: CORE_HREF.materialsComparison,
      },
      { title: "Pourquoi le contreplaqué", href: CORE_HREF.plywood },
    ],
    services: [
      { title: "Design", href: CORE_HREF.design },
      { title: "Fabrication", href: CORE_HREF.fabrication },
      { title: "Installation", href: CORE_HREF.installation },
      {
        title: "Rénovation clé en main (coordination)",
        href: CORE_HREF.renovation,
      },
    ],
  };
