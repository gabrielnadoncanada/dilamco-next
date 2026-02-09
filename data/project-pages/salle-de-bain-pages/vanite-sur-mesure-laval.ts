import type { ProjectData } from "@/types/projects";
import {
  CORE_HREF,
  SPACE_GALLERY_HREF,
  SPACE_HREF,
} from "@/constants/projects";

export const PROJECT_VANITE_SUR_MESURE_LAVAL: ProjectData = {
  space: "salle-de-bain",
  slug: "vanite-sur-mesure-laval",
  title: "Vanité sur mesure, Laval",
  metaDescription:
    "Projet de vanité sur mesure Ã  Laval : conception, fabrication et installation. Exemple de solution résistante Ã  l'humidité et durable.",
  summary:
    "Vanité sur mesure conÃ§ue pour un environnement humide : matériaux adaptés, quincaillerie fiable, et installation précise.",
  area: "laval",
  city: "Laval",
  scope: ["Cadrage", "Design", "Fabrication sur mesure", "Installation"],
  constraints: [
    "Humidité et entretien",
    "Rangement fonctionnel dans un espace compact",
    "Finition durable",
  ],
  solution: [
    "Configuration de rangement adaptée Ã  l'usage",
    "Choix de matériaux stables et résistants",
    "Pose avec ajustements fins et alignements propres",
  ],
  results: [
    "Rangement plus fonctionnel",
    "Résistance accrue Ã  l'humidité",
    "Finition nette et durable",
  ],
  requiredLinks: {
    spaceHref: SPACE_HREF["salle-de-bain"],
    renovationHref: CORE_HREF.renovation,
    materialHref: CORE_HREF.plywood,
    contactHref: CORE_HREF.contact,
  },
  optionalLinks: {
    galleryHref: SPACE_GALLERY_HREF["salle-de-bain"],
    installationHref: CORE_HREF.installation,
  },
  materials: [
    { title: "Pourquoi le contreplaqué", href: CORE_HREF.plywood },
    { title: "Quincaillerie", href: CORE_HREF.hardware },
    {
      title: "Comparatif des matériaux",
      href: CORE_HREF.materialsComparison,
    },
  ],
  services: [
    { title: "Design", href: CORE_HREF.design },
    { title: "Fabrication", href: CORE_HREF.fabrication },
    { title: "Installation", href: CORE_HREF.installation },
    { title: "Rénovation clé en main", href: CORE_HREF.renovation },
  ],
};
