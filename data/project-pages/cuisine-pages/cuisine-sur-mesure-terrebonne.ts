import type { ProjectData } from "@/types/projects";
import {
  CORE_HREF,
  SPACE_GALLERY_HREF,
  SPACE_HREF,
} from "@/constants/projects";

export const PROJECT_CUISINE_SUR_MESURE_TERREBONNE: ProjectData = {
  space: "cuisine",
  slug: "cuisine-sur-mesure-terrebonne",
  title: "Armoires de cuisine sur mesure, Terrebonne",
  metaDescription:
    "Projet d'armoires de cuisine sur mesure à Terrebonne : cuisine moderne minimaliste en fini blanc lustré sans poignées et comptoirs de quartz calacatta. Design, fabrication et installation.",
  summary:
    "Cuisine sur mesure réalisée à Terrebonne : armoires modernes en fini blanc lustré sans poignées, dosseret et comptoirs de quartz calacatta pleine hauteur, pour un look épuré et haut de gamme.",
  area: "other",
  city: "Terrebonne",
  images: [
    {
      src: "/images/projects/cuisine-sur-mesure-terrebonne-1.webp",
      alt: "Cuisine sur mesure moderne à Terrebonne en fini blanc lustré et comptoir de quartz calacatta",
    },
    {
      src: "/images/projects/cuisine-sur-mesure-terrebonne-2.webp",
      alt: "Armoires de cuisine blanches sans poignées et îlot de quartz à Terrebonne",
    },
  ],
  scope: [
    "Cadrage et validation des besoins",
    "Design moderne et planification",
    "Fabrication sur mesure des armoires et de l'îlot",
    "Installation et ajustements",
  ],
  constraints: [
    "Fini blanc lustré exigeant sur les alignements et les joints",
    "Portes sans poignées (ouverture par gorge)",
    "Dosseret de quartz pleine hauteur à raccorder aux comptoirs",
  ],
  solution: [
    "Armoires en fini blanc lustré sans poignées pour un look épuré",
    "Comptoirs et dosseret en quartz calacatta assortis",
    "Îlot central lustré offrant plan de travail et rangement",
  ],
  results: [
    "Cuisine moderne minimaliste et haut de gamme",
    "Surfaces faciles d'entretien et lignes continues",
    "Rangement optimisé et finition impeccable",
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
