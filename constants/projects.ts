import type { ProjectSpace } from "@/types/projects";

export const SPACE_LABEL: Record<ProjectSpace, string> = {
  cuisine: "Cuisine",
  "salle-de-bain": "Salle de bain",
  "walk-in": "Walk-in",
  "salle-de-lavage": "Salle de lavage",
  commercial: "Commercial",
};

export const SPACE_HREF: Record<ProjectSpace, string> = {
  cuisine: "/espaces/cuisine",
  "salle-de-bain": "/espaces/salle-de-bain",
  "walk-in": "/espaces/walk-in",
  "salle-de-lavage": "/espaces/salle-de-lavage",
  commercial: "/espaces/commercial",
};

export const SPACE_GALLERY_HREF: Record<ProjectSpace, string> = {
  cuisine: "/projets/cuisine",
  "salle-de-bain": "/projets/salle-de-bain",
  "walk-in": "/projets/walk-in",
  "salle-de-lavage": "/projets/salle-de-lavage",
  commercial: "/projets/commercial",
};

export const CORE_HREF = {
  renovation: "/services/renovation",
  installation: "/services/installation",
  design: "/services/design",
  fabrication: "/services/fabrication",
  materialsHub: "/materiaux",
  plywood: "/materiaux/contreplaque",
  materialsComparison: "/materiaux/comparatif",
  hardware: "/materiaux/quincaillerie",
  colors: "/materiaux/couleurs",
  contact: "/contact",
} as const;
