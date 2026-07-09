import type { ProjectData } from "@/types/projects";
import {
  CORE_HREF,
  SPACE_GALLERY_HREF,
  SPACE_HREF,
} from "@/constants/projects";

export const PROJECT_CUISINE_SUR_MESURE_BROSSARD: ProjectData = {
  space: "cuisine",
  slug: "cuisine-sur-mesure-brossard",
  title: "Armoires de cuisine sur mesure, Brossard",
  metaDescription:
    "Projet d'armoires de cuisine sur mesure à Brossard : cuisine bicolore (armoires hautes blanches, bas bleu marine) et comptoirs de quartz marbré. Design, fabrication et installation.",
  summary:
    "Cuisine sur mesure réalisée à Brossard : jeu bicolore entre armoires hautes blanches et bases bleu marine, comptoirs de quartz veiné et quincaillerie allongée pour un look contemporain.",
  area: "rive-sud",
  city: "Brossard",
  images: [
    {
      src: "/images/projects/cuisine-sur-mesure-brossard-1.webp",
      alt: "Cuisine sur mesure bicolore à Brossard avec armoires blanches et bases bleu marine",
    },
    {
      src: "/images/projects/cuisine-sur-mesure-brossard-2.webp",
      alt: "Armoires de cuisine bleu marine et comptoir de quartz marbré à Brossard",
    },
  ],
  scope: [
    "Cadrage et validation des besoins",
    "Design et sélection des deux teintes",
    "Fabrication sur mesure des armoires",
    "Installation et ajustements",
  ],
  constraints: [
    "Agencement en U dans un espace fermé",
    "Équilibre des deux teintes (blanc en haut, marine en bas)",
    "Intégration des électroménagers en fini noir inox",
  ],
  solution: [
    "Bases bleu marine et armoires hautes blanches pour un contraste maîtrisé",
    "Comptoirs et dosseret en quartz marbré pour unifier l'ensemble",
    "Quincaillerie allongée assortie et rangements optimisés",
  ],
  results: [
    "Cuisine bicolore actuelle et lumineuse",
    "Rangement optimisé sur trois murs",
    "Finition cohérente et lignes propres",
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
