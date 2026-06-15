import type { ProjectData } from "@/types/projects";
import {
  CORE_HREF,
  SPACE_GALLERY_HREF,
  SPACE_HREF,
} from "@/constants/projects";

export const PROJECT_CUISINE_SUR_MESURE_RIVE_SUD: ProjectData = {
  space: "cuisine",
  slug: "cuisine-sur-mesure-rive-sud",
  title: "Cuisine sur mesure, Rive-Sud",
  metaDescription:
    "Projet de cuisine sur mesure sur la Rive-Sud : conception, fabrication et installation. Exemple concret de solution durable, intégrée et bien exécutée.",
  summary:
    "Cuisine sur mesure réalisée sur la Rive-Sud : rangement optimisé, intégration propre et installation avec finitions soignées.",
  area: "rive-sud",
  city: "Rive-Sud",
  images: [
    {
      src: "/images/projects/cuisine-blanche-sur-mesure-brossard.webp",
      alt: "Cuisine sur mesure blanche à Brossard, Rive-Sud",
    },
    {
      src: "/images/generated/spaces/space-cuisine-project-02.webp",
      alt: "Cuisine sur mesure sur la Rive-Sud — rangement optimisé",
    },
    {
      src: "/images/generated/spaces/space-cuisine-project-03.webp",
      alt: "Cuisine sur mesure sur la Rive-Sud — finition soignée",
    },
  ],
  scope: [
    "Cadrage et validation des besoins",
    "Design et planification",
    "Fabrication sur mesure",
    "Installation et ajustements",
  ],
  constraints: [
    "Contraintes d'implantation (ouvertures, circulation, îlot)",
    "Transitions et alignements visibles (joints, lignes, finitions)",
    "Coordination avec travaux connexes au besoin",
  ],
  solution: [
    "Optimisation du rangement et des zones de travail selon l'espace",
    "Matériaux stables et choix cohérents avec l'usage",
    "Installation ajustée sur place : alignements, transitions et inspection finale",
  ],
  results: [
    "Espace plus fonctionnel au quotidien",
    "Finition cohérente et durable",
    "Intégration propre avec l'existant",
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
