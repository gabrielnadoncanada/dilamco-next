// data/spaces.ts
import type { ProjectSpace } from "@/types/projects";
import type { SpaceContent } from "@/types/spaces";
import { PROJECT_SPACE_PAGES } from "@/data/project-pages/spaces";

export type { SpaceContent, SpaceSection } from "@/types/spaces";
export type { GenericLink } from "@/types/links";

export const SPACE_CONTENT: Record<ProjectSpace, SpaceContent> = PROJECT_SPACE_PAGES;

