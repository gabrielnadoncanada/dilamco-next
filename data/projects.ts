// data/projects.ts
import type { ProjectArea, ProjectData, ProjectSpace } from "@/types/projects";
import type { GenericLink } from "@/types/links";
import {
  CORE_HREF,
  SPACE_GALLERY_HREF,
  SPACE_HREF,
  SPACE_LABEL,
} from "@/constants/projects";
import { SITE_URL } from "@/constants/site";
import { CUISINE_PROJECTS } from "@/data/project-pages/cuisine-pages";
import { SALLE_DE_BAIN_PROJECTS } from "@/data/project-pages/salle-de-bain-pages";
import { SALLE_DE_LAVAGE_PROJECTS } from "@/data/project-pages/salle-de-lavage-pages";
import { WALK_IN_PROJECTS } from "@/data/project-pages/walk-in-pages";
import { COMMERCIAL_PROJECTS } from "@/data/project-pages/commercial-pages";
import { getPublicItems, getVisibleItem } from "@/lib/feature-collections";
// Traductions EN des projets
import { PROJECT_CUISINE_SUR_MESURE_MONTREAL_EN } from "@/data/project-pages/cuisine-pages/cuisine-sur-mesure-montreal.en";
import { PROJECT_CUISINE_SUR_MESURE_PIERREFONDS_EN } from "@/data/project-pages/cuisine-pages/cuisine-sur-mesure-pierrefonds.en";
import { PROJECT_CUISINE_SUR_MESURE_PLATEAU_MONT_ROYAL_EN } from "@/data/project-pages/cuisine-pages/cuisine-sur-mesure-plateau-mont-royal.en";
import { PROJECT_CUISINE_SUR_MESURE_RIVE_SUD_EN } from "@/data/project-pages/cuisine-pages/cuisine-sur-mesure-rive-sud.en";
import { PROJECT_VANITE_SUR_MESURE_LAVAL_EN } from "@/data/project-pages/salle-de-bain-pages/vanite-sur-mesure-laval.en";
import { PROJECT_AMENAGEMENT_SUR_MESURE_BUREAU_CENTRE_VILLE_MONTREAL_EN } from "@/data/project-pages/commercial-pages/amenagement-sur-mesure-bureau-centre-ville-montreal.en";

export type { GenericLink, ProjectArea, ProjectData, ProjectSpace };
export { CORE_HREF, SPACE_GALLERY_HREF, SPACE_HREF, SPACE_LABEL, SITE_URL };

export const PROJECTS: ProjectData[] = [
  ...CUISINE_PROJECTS,
  ...SALLE_DE_BAIN_PROJECTS,
  ...SALLE_DE_LAVAGE_PROJECTS,
  ...WALK_IN_PROJECTS,
  ...COMMERCIAL_PROJECTS,
];

export const PUBLIC_PROJECTS: ProjectData[] = getPublicItems(PROJECTS);

export const PROJECTS_BY_SPACE: Record<ProjectSpace, ProjectData[]> = {
  cuisine: PUBLIC_PROJECTS.filter((p) => p.space === "cuisine"),
  "salle-de-bain": PUBLIC_PROJECTS.filter((p) => p.space === "salle-de-bain"),
  "walk-in": PUBLIC_PROJECTS.filter((p) => p.space === "walk-in"),
  "salle-de-lavage": PUBLIC_PROJECTS.filter((p) => p.space === "salle-de-lavage"),
  commercial: PUBLIC_PROJECTS.filter((p) => p.space === "commercial"),
};

// Traductions EN des projets. Clé = `${space}/${slug}`.
const PROJECTS_EN: Record<string, ProjectData> = Object.fromEntries(
  [
    PROJECT_CUISINE_SUR_MESURE_MONTREAL_EN,
    PROJECT_CUISINE_SUR_MESURE_PIERREFONDS_EN,
    PROJECT_CUISINE_SUR_MESURE_PLATEAU_MONT_ROYAL_EN,
    PROJECT_CUISINE_SUR_MESURE_RIVE_SUD_EN,
    PROJECT_VANITE_SUR_MESURE_LAVAL_EN,
    PROJECT_AMENAGEMENT_SUR_MESURE_BUREAU_CENTRE_VILLE_MONTREAL_EN,
  ].map((p) => [`${p.space}/${p.slug}`, p]),
);

export function getProjectByParams(
  space: ProjectSpace,
  slug: string,
  locale: "fr" | "en" = "fr",
  options?: { includeDrafts?: boolean },
): ProjectData | undefined {
  const fr = PROJECTS.find((p) => p.space === space && p.slug === slug);
  const project = locale === "en" ? (PROJECTS_EN[`${space}/${slug}`] ?? fr) : fr;
  return getVisibleItem(project, options);
}

export function getProjectCanonicalUrl(
  project: ProjectData,
  locale: "fr" | "en" = "fr",
): string {
  const path =
    project.canonicalPath ?? `/projets/${project.space}/${project.slug}`;
  const prefix = locale === "en" ? "/en" : "";
  return `${SITE_URL}${prefix}${path}`;
}
