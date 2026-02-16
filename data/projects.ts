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

export type { GenericLink, ProjectArea, ProjectData, ProjectSpace };
export { CORE_HREF, SPACE_GALLERY_HREF, SPACE_HREF, SPACE_LABEL, SITE_URL };

export const PROJECTS: ProjectData[] = [
  ...CUISINE_PROJECTS,
  ...SALLE_DE_BAIN_PROJECTS,
  ...SALLE_DE_LAVAGE_PROJECTS,
  ...WALK_IN_PROJECTS,
  ...COMMERCIAL_PROJECTS,
];

export const PROJECTS_BY_SPACE: Record<ProjectSpace, ProjectData[]> = {
  cuisine: PROJECTS.filter((p) => p.space === "cuisine"),
  "salle-de-bain": PROJECTS.filter((p) => p.space === "salle-de-bain"),
  "walk-in": PROJECTS.filter((p) => p.space === "walk-in"),
  "salle-de-lavage": PROJECTS.filter((p) => p.space === "salle-de-lavage"),
  commercial: PROJECTS.filter((p) => p.space === "commercial"),
};

export function getProjectByParams(
  space: ProjectSpace,
  slug: string,
): ProjectData | undefined {
  return PROJECTS.find((p) => p.space === space && p.slug === slug);
}

export function getProjectCanonicalUrl(project: ProjectData): string {
  const path =
    project.canonicalPath ?? `/projets/${project.space}/${project.slug}/`;
  return `${SITE_URL}${path}`;
}
