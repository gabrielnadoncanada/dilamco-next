import type { ProjectSpace } from "@/types/projects";
import type { SpaceContent } from "@/types/spaces";
import { COMMERCIAL_PROJECT_PAGE } from "@/data/project-pages/spaces/commercial";
import { CUISINE_PROJECT_PAGE } from "@/data/project-pages/spaces/cuisine";
import { SALLE_DE_BAIN_PROJECT_PAGE } from "@/data/project-pages/spaces/salle-de-bain";
import { SALLE_DE_LAVAGE_PROJECT_PAGE } from "@/data/project-pages/spaces/salle-de-lavage";
import { WALK_IN_PROJECT_PAGE } from "@/data/project-pages/spaces/walk-in";

export const PROJECT_SPACE_PAGES: Record<ProjectSpace, SpaceContent> = {
  commercial: COMMERCIAL_PROJECT_PAGE,
  cuisine: CUISINE_PROJECT_PAGE,
  "salle-de-bain": SALLE_DE_BAIN_PROJECT_PAGE,
  "salle-de-lavage": SALLE_DE_LAVAGE_PROJECT_PAGE,
  "walk-in": WALK_IN_PROJECT_PAGE,
};

export const PROJECT_SPACE_SLUGS = Object.keys(
  PROJECT_SPACE_PAGES,
) as ProjectSpace[];

export function getProjectSpacePageBySlug(space: string) {
  return PROJECT_SPACE_PAGES[space as ProjectSpace] ?? null;
}
