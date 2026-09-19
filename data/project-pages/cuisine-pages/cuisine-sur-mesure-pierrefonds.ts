import type { ProjectData } from "@/types/projects";
import {
  CORE_HREF,
  SPACE_GALLERY_HREF,
  SPACE_HREF,
} from "@/constants/projects";

export const PROJECT_CUISINE_SUR_MESURE_PIERREFONDS: ProjectData = {
  space: "cuisine",
  slug: "cuisine-sur-mesure-pierrefonds",
  title: "Armoires de cuisine sur mesure, Pierrefonds",
  metaDescription:
    "Projet d'armoires de cuisine sur mesure à Pierrefonds (Ouest-de-l'Île) : conception, fabrication et installation. Exemple concret de cuisine durable et bien exécutée.",
  summary:
    "Armoires de cuisine sur mesure réalisées dans l'Ouest-de-l'Île : rangement optimisé, matériaux durables et installation soignée, par une équipe basée à Pierrefonds-Roxboro.",
  area: "montreal",
  city: "Montréal",
  neighborhood: "Pierrefonds-Roxboro",
  images: [
    {
      src: "/images/projects/cuisine-sur-mesure-pierrefonds.webp",
      alt: "Armoires de cuisine sur mesure à Pierrefonds, Ouest-de-l'Île",
    },
  ],
  scope: [],
  constraints: [],
  solution: [
    "Bois massif et contreplaqué de bouleau pour la durabilité",
  ],
  results: [],
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
    { title: "Comparatif des matériaux", href: CORE_HREF.materialsComparison },
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
