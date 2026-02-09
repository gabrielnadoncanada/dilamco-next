import type { ProjectData } from "@/types/projects";
import {
  CORE_HREF,
  SPACE_GALLERY_HREF,
  SPACE_HREF,
} from "@/constants/projects";

export const PROJECT_CUISINE_SUR_MESURE_PLATEAU_MONT_ROYAL: ProjectData = {
  space: "cuisine",
  slug: "cuisine-sur-mesure-plateau-mont-royal",
  title: "Cuisine sur mesure, Plateau-Mont-Royal",
  metaDescription:
    "Projet de cuisine sur mesure Ã  Montréal (Plateau-Mont-Royal) : conception, fabrication et installation. Exemple concret de solution durable et finition précise.",
  summary:
    "Cuisine sur mesure réalisée Ã  Montréal : optimisation du rangement, choix de matériaux durables, et installation avec alignements propres.",
  area: "montreal",
  city: "Montréal",
  neighborhood: "Plateau-Mont-Royal",
  scope: [
    "Cadrage et validation des besoins",
    "Design et planification",
    "Fabrication sur mesure",
    "Installation et ajustements",
  ],
  constraints: [
    "Contraintes d'espace (circulation et rangements)",
    "Alignements visibles (lignes et joints)",
    "Coordination avec travaux connexes au besoin",
  ],
  solution: [
    "Optimisation des modules selon l'usage réel",
    "Choix de matériaux stables et durables",
    "Installation précise : ajustements, finitions et inspection",
  ],
  results: [
    "Rangement optimisé et circulation plus fluide",
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
