import type { GenericLink } from "@/types/links";
import type { PageFeatures } from "@/types/page-features";

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

export type ProjectData = {
  space: ProjectSpace;
  slug: string;
  features?: PageFeatures;
  canonicalPath?: string;
  title: string;
  metaDescription: string;
  summary: string;
  area: ProjectArea;
  city: string;
  neighborhood?: string;
  scope: string[];
  constraints: string[];
  solution: string[];
  results: string[];
  requiredLinks: {
    spaceHref: string;
    renovationHref: string;
    materialHref: string;
    contactHref: string;
  };
  optionalLinks?: {
    galleryHref?: string;
    installationHref?: string;
    designHref?: string;
    fabricationHref?: string;
  };
  materials: GenericLink[];
  services: GenericLink[];
  images?: Array<{
    src: string;
    alt: string;
  }>;
};
