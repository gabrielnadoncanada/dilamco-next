import type { ProjectData } from "@/types/projects";
import {
  CORE_HREF,
  SPACE_GALLERY_HREF,
  SPACE_HREF,
} from "@/constants/projects";

export const PROJECT_CUISINE_SUR_MESURE_REPENTIGNY: ProjectData = {
  space: "cuisine",
  slug: "cuisine-sur-mesure-repentigny",
  title: "Armoires de cuisine sur mesure, Repentigny",
  metaDescription:
    "Projet d'armoires de cuisine sur mesure à Repentigny : cuisine blanche classique à panneaux relevés, moulures couronnées et comptoirs de quartz. Conception, fabrication et installation.",
  summary:
    "Cuisine sur mesure réalisée à Repentigny : armoires blanches à panneaux relevés, moulures couronnées et îlot central, avec dosseret de céramique et comptoirs de quartz veiné.",
  area: "other",
  city: "Repentigny",
  images: [
    {
      src: "/images/projects/cuisine-sur-mesure-repentigny-1.webp",
      alt: "Cuisine sur mesure blanche classique à Repentigny avec îlot et moulures",
    },
    {
      src: "/images/projects/cuisine-sur-mesure-repentigny-2.webp",
      alt: "Armoires de cuisine blanches à panneaux relevés et dosseret de céramique à Repentigny",
    },
  ],
  scope: [
    "Cadrage et validation des besoins",
    "Design classique et planification",
    "Fabrication sur mesure des armoires et de l'îlot",
    "Installation et ajustements",
  ],
  constraints: [
    "Style classique à panneaux relevés et moulures couronnées",
    "Intégration d'un îlot central avec évier",
    "Alignements visibles sur grand mur d'armoires",
  ],
  solution: [
    "Armoires blanches à panneaux relevés avec moulures de couronnement",
    "Îlot central assorti offrant rangement et plan de travail",
    "Dosseret de céramique allongée et comptoirs de quartz veiné",
  ],
  results: [
    "Cuisine classique intemporelle et lumineuse",
    "Îlot fonctionnel au cœur de la pièce",
    "Rangement optimisé et finition soignée",
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
