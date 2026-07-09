import type { ProjectData } from "@/types/projects";
import {
  CORE_HREF,
  SPACE_GALLERY_HREF,
  SPACE_HREF,
} from "@/constants/projects";

export const PROJECT_CUISINE_SUR_MESURE_LAVAL: ProjectData = {
  space: "cuisine",
  slug: "cuisine-sur-mesure-laval",
  title: "Armoires de cuisine sur mesure, Laval",
  metaDescription:
    "Projet d'armoires de cuisine sur mesure à Laval : armoires blanches, îlot en placage de bois clair et comptoirs de quartz marbré. Conception, fabrication et installation.",
  summary:
    "Cuisine sur mesure réalisée à Laval : armoires blanches à panneau shaker, îlot habillé de bois clair et comptoirs de quartz veiné, pour une pièce lumineuse et fonctionnelle.",
  area: "laval",
  city: "Laval",
  images: [
    {
      src: "/images/projects/cuisine-sur-mesure-laval-1.webp",
      alt: "Cuisine sur mesure à Laval avec îlot en bois clair et comptoir de quartz marbré",
    },
    {
      src: "/images/projects/cuisine-sur-mesure-laval-2.webp",
      alt: "Armoires de cuisine blanches sur mesure à Laval avec dosseret de quartz",
    },
    {
      src: "/images/projects/cuisine-sur-mesure-laval-3.webp",
      alt: "Îlot de cuisine en placage de bois clair et quartz veiné à Laval",
    },
  ],
  scope: [
    "Cadrage et validation des besoins",
    "Design et planification 3D",
    "Fabrication sur mesure des armoires et de l'îlot",
    "Installation et ajustements",
  ],
  constraints: [
    "Îlot central de grande dimension à intégrer",
    "Harmonie entre armoires blanches et placage de bois clair",
    "Alignements visibles (lignes, joints et dosseret pleine hauteur)",
  ],
  solution: [
    "Îlot habillé de placage de bois clair pour réchauffer l'ensemble blanc",
    "Comptoirs et dosseret en quartz marbré assortis",
    "Garde-manger à portes vitrées et rangements pleine hauteur",
  ],
  results: [
    "Espace de travail généreux autour de l'îlot",
    "Contraste bois/blanc chaleureux et intemporel",
    "Rangement optimisé et finition cohérente",
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
