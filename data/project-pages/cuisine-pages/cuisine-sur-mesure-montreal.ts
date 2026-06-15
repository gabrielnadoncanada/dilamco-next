import type { ProjectData } from "@/types/projects";
import {
  CORE_HREF,
  SPACE_GALLERY_HREF,
  SPACE_HREF,
} from "@/constants/projects";

export const PROJECT_CUISINE_SUR_MESURE_MONTREAL: ProjectData = {
  space: "cuisine",
  slug: "cuisine-sur-mesure-montreal",
  title: "Cuisine sur mesure, Montréal",
  metaDescription:
    "Projet de cuisine sur mesure à Montréal : conception, fabrication et installation. Exemple de solution durable avec rangement optimisé et finition précise.",
  summary:
    "Cuisine sur mesure réalisée à Montréal : optimisation du rangement, choix de matériaux durables et installation avec alignements propres.",
  area: "montreal",
  city: "Montréal",
  images: [
    {
      src: "/images/projects/cuisine-haut-de-gamme-blanche-laval.webp",
      alt: "Cuisine sur mesure haut de gamme à Montréal",
    },
  ],
  scope: [
    "Cadrage et validation des besoins",
    "Design et planification",
    "Fabrication sur mesure",
    "Installation et ajustements",
  ],
  constraints: [
    "Contraintes d'espace et circulation",
    "Murs/planchers parfois irréguliers (ajustements sur place)",
    "Intégration des électroménagers et dégagements",
  ],
  solution: [
    "Configuration optimisée selon l'usage réel (zones de travail et rangement)",
    "Choix de matériaux stables et quincaillerie fiable",
    "Installation précise : alignements, niveaux, finitions et inspection finale",
  ],
  results: [
    "Rangement plus fonctionnel et circulation plus fluide",
    "Finition cohérente et lignes propres",
    "Durabilité accrue via matériaux + quincaillerie + pose",
  ],
  requiredLinks: {
    spaceHref: SPACE_HREF.cuisine,
    renovationHref: CORE_HREF.renovation,
    materialHref: CORE_HREF.plywood,
    contactHref: CORE_HREF.contact,
  },
  optionalLinks: {
    galleryHref: SPACE_GALLERY_HREF.cuisine,
    installationHref: CORE_HREF.installation,
    designHref: CORE_HREF.design,
    fabricationHref: CORE_HREF.fabrication,
  },
  materials: [
    { title: "Pourquoi le contreplaqué", href: CORE_HREF.plywood },
    {
      title: "Comparatif des matériaux",
      href: CORE_HREF.materialsComparison,
    },
    { title: "Quincaillerie", href: CORE_HREF.hardware },
    { title: "Couleurs et finis", href: CORE_HREF.colors },
  ],
  services: [
    { title: "Design", href: CORE_HREF.design },
    { title: "Fabrication", href: CORE_HREF.fabrication },
    { title: "Installation", href: CORE_HREF.installation },
    { title: "Rénovation clé en main", href: CORE_HREF.renovation },
  ],
};
