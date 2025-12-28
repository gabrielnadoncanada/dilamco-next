// data/projects.ts
// Single source of truth for all case studies / projects.
// Add one object per project — Next.js routes can generate pages from this list.
export const SITE_URL = "https://dilamco.com";

export type ProjectSpace =
  | "cuisine"
  | "salle-de-bain"
  | "walk-in"
  | "salle-de-lavage"
  | "commercial";

export type ProjectArea =
  | "montreal"
  | "laval"
  | "rive-sud"
  | "quebec"
  | "other";

export type MaterialLink = {
  label: string;
  href: string; // internal URL
};

export type ServiceLink = {
  label: string;
  href: string; // internal URL
};

export type ProjectData = {
  // Routing
  space: ProjectSpace; // used for /projets/[space]/...
  slug: string; // used for /projets/[space]/[slug]/
  canonicalPath?: string; // optional override; default computed from space+slug

  // SEO / Copy
  title: string; // H1 + metadata title
  metaDescription: string; // metadata description (keep it concise)
  summary: string; // 1–2 sentences at top

  // Local context (SEO local)
  area: ProjectArea; // for grouping (Montreal/Laval/Rive-Sud)
  city: string; // "Montréal", "Laval", "Brossard", etc.
  neighborhood?: string; // "Plateau-Mont-Royal", optional

  // Story (keep it simple but structured)
  scope: string[]; // what was included
  constraints: string[]; // constraints/challenges
  solution: string[]; // what you did
  results: string[]; // concrete outcomes

  // Internal linking (SEO structure)
  // REQUIRED: these must exist for every project page to avoid "dead ends".
  requiredLinks: {
    spaceHref: string; // e.g. /espaces/cuisine/
    renovationHref: string; // usually /services/renovation/ (can be same always)
    materialHref: string; // e.g. /materiaux/contreplaque/
    contactHref: string; // /contact/
  };

  // Optional but recommended links for richer internal graph
  optionalLinks?: {
    galleryHref?: string; // e.g. /projets/cuisine/
    installationHref?: string; // /services/installation/
    designHref?: string; // /services/design/
    fabricationHref?: string; // /services/fabrication/
    localHref?: string; // e.g. /montreal/cuisine-sur-mesure/ (only if pages local are active)
  };

  // Supporting links
  materials: MaterialLink[]; // list to show in "Materials" section
  services: ServiceLink[]; // list to show in "Related services" section

  // Optional media (can be empty for now)
  images?: Array<{
    src: string;
    alt: string;
  }>;
};

export const SPACE_LABEL: Record<ProjectSpace, string> = {
  cuisine: "Cuisine",
  "salle-de-bain": "Salle de bain",
  "walk-in": "Walk-in",
  "salle-de-lavage": "Salle de lavage",
  commercial: "Commercial",
};

export const SPACE_HREF: Record<ProjectSpace, string> = {
  cuisine: "/espaces/cuisine/",
  "salle-de-bain": "/espaces/salle-de-bain/",
  "walk-in": "/espaces/walk-in/",
  "salle-de-lavage": "/espaces/salle-de-lavage/",
  commercial: "/espaces/commercial/",
};

export const SPACE_GALLERY_HREF: Record<ProjectSpace, string> = {
  cuisine: "/projets/cuisine/",
  "salle-de-bain": "/projets/salle-de-bain/",
  "walk-in": "/projets/walk-in/",
  "salle-de-lavage": "/projets/salle-de-lavage/",
  commercial: "/projets/commercial/",
};

// Central “pillars” (consistent across all projects)
export const CORE_HREF = {
  renovation: "/services/renovation/",
  installation: "/services/installation/",
  design: "/services/design/",
  fabrication: "/services/fabrication/",
  materialsHub: "/materiaux/",
  plywood: "/materiaux/contreplaque/",
  materialsComparison: "/materiaux/comparatif/",
  hardware: "/materiaux/quincaillerie/",
  colors: "/materiaux/couleurs/",
  contact: "/contact/",
} as const;

// ---- Projects list ----
// Add new projects here. Keep slugs consistent (kebab-case).
export const PROJECTS: ProjectData[] = [
  {
    space: "cuisine",
    slug: "cuisine-sur-mesure-plateau-mont-royal",
    title: "Cuisine sur mesure — Plateau-Mont-Royal",
    metaDescription:
      "Projet de cuisine sur mesure à Montréal (Plateau-Mont-Royal) : conception, fabrication et installation. Exemple concret de solution durable et finition précise.",
    summary:
      "Cuisine sur mesure réalisée à Montréal : optimisation du rangement, choix de matériaux durables, et installation avec alignements propres.",
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
      "Contraintes d’espace (circulation et rangements)",
      "Alignements visibles (lignes et joints)",
      "Coordination avec travaux connexes au besoin",
    ],
    solution: [
      "Optimisation des modules selon l’usage réel",
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
      localHref: "/montreal/cuisine-sur-mesure/",
    },
    materials: [
      { label: "Pourquoi le contreplaqué", href: CORE_HREF.plywood },
      {
        label: "Comparatif des matériaux",
        href: CORE_HREF.materialsComparison,
      },
      { label: "Quincaillerie", href: CORE_HREF.hardware },
      { label: "Couleurs et finis", href: CORE_HREF.colors },
    ],
    services: [
      { label: "Design", href: CORE_HREF.design },
      { label: "Fabrication", href: CORE_HREF.fabrication },
      { label: "Installation", href: CORE_HREF.installation },
      { label: "Rénovation clé en main", href: CORE_HREF.renovation },
    ],
  },

  {
    space: "salle-de-bain",
    slug: "vanite-sur-mesure-laval",
    title: "Vanité sur mesure — Laval",
    metaDescription:
      "Projet de vanité sur mesure à Laval : conception, fabrication et installation. Exemple de solution résistante à l’humidité et durable.",
    summary:
      "Vanité sur mesure conçue pour un environnement humide : matériaux adaptés, quincaillerie fiable, et installation précise.",
    area: "laval",
    city: "Laval",
    scope: ["Cadrage", "Design", "Fabrication sur mesure", "Installation"],
    constraints: [
      "Humidité et entretien",
      "Rangement fonctionnel dans un espace compact",
      "Finition durable",
    ],
    solution: [
      "Configuration de rangement adaptée à l’usage",
      "Choix de matériaux stables et résistants",
      "Pose avec ajustements fins et alignements propres",
    ],
    results: [
      "Rangement plus fonctionnel",
      "Résistance accrue à l’humidité",
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
      localHref: "/laval/vanite-sur-mesure/",
    },
    materials: [
      { label: "Pourquoi le contreplaqué", href: CORE_HREF.plywood },
      { label: "Quincaillerie", href: CORE_HREF.hardware },
      {
        label: "Comparatif des matériaux",
        href: CORE_HREF.materialsComparison,
      },
    ],
    services: [
      { label: "Design", href: CORE_HREF.design },
      { label: "Fabrication", href: CORE_HREF.fabrication },
      { label: "Installation", href: CORE_HREF.installation },
      { label: "Rénovation clé en main", href: CORE_HREF.renovation },
    ],
  },

  {
    space: "commercial",
    slug: "amenagement-sur-mesure-bureau-centre-ville-montreal",
    title: "Aménagement sur mesure — bureau (Centre-ville de Montréal)",
    metaDescription:
      "Projet commercial sur mesure : aménagement de bureau à Montréal. Usage intensif, durabilité, coordination et installation précise.",
    summary:
      "Aménagement commercial conçu pour usage intensif : modules robustes, choix de quincaillerie, et finition propre en zone visible.",
    area: "montreal",
    city: "Montréal",
    neighborhood: "Centre-ville",
    scope: [
      "Cadrage du mandat (usage, contraintes, échéance)",
      "Planification et validation des dimensions",
      "Fabrication sur mesure",
      "Installation et ajustements",
    ],
    constraints: [
      "Échéancier serré",
      "Accès limité (fenêtres de travail)",
      "Usage intensif et entretien fréquent",
    ],
    solution: [
      "Modules robustes adaptés aux cycles élevés",
      "Choix de quincaillerie cohérent avec l’usage",
      "Installation avec alignements et finitions propres",
    ],
    results: [
      "Rangement optimisé et circulation améliorée",
      "Durabilité accrue (usage intensif)",
      "Finition cohérente en zone publique",
    ],
    requiredLinks: {
      spaceHref: SPACE_HREF.commercial,
      renovationHref: CORE_HREF.renovation,
      materialHref: CORE_HREF.hardware, // commercial: hardware is often the strongest sales angle
      contactHref: CORE_HREF.contact,
    },
    optionalLinks: {
      galleryHref: SPACE_GALLERY_HREF.commercial,
      installationHref: CORE_HREF.installation,
    },
    materials: [
      { label: "Quincaillerie", href: CORE_HREF.hardware },
      {
        label: "Comparatif des matériaux",
        href: CORE_HREF.materialsComparison,
      },
      { label: "Pourquoi le contreplaqué", href: CORE_HREF.plywood },
    ],
    services: [
      { label: "Design", href: CORE_HREF.design },
      { label: "Fabrication", href: CORE_HREF.fabrication },
      { label: "Installation", href: CORE_HREF.installation },
      {
        label: "Rénovation clé en main (coordination)",
        href: CORE_HREF.renovation,
      },
    ],
  },
];

// Helper indexes (optional convenience)
export const PROJECTS_BY_SPACE: Record<ProjectSpace, ProjectData[]> = {
  cuisine: PROJECTS.filter((p) => p.space === "cuisine"),
  "salle-de-bain": PROJECTS.filter((p) => p.space === "salle-de-bain"),
  "walk-in": PROJECTS.filter((p) => p.space === "walk-in"),
  "salle-de-lavage": PROJECTS.filter((p) => p.space === "salle-de-lavage"),
  commercial: PROJECTS.filter((p) => p.space === "commercial"),
};

export function getProjectByParams(
  space: ProjectSpace,
  slug: string
): ProjectData | undefined {
  return PROJECTS.find((p) => p.space === space && p.slug === slug);
}

export function getProjectCanonicalUrl(project: ProjectData): string {
  const path =
    project.canonicalPath ?? `/projets/${project.space}/${project.slug}/`;
  return `${SITE_URL}${path}`;
}
