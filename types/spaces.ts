import type { ProjectSpace } from "@/types/projects";
import type { GenericLink } from "@/types/links";
import { SECTION_TYPES } from "@/constants/section-types";

export type SpaceSection = {
  id: string;
  title: string;
  content:
    | {
        type: typeof SECTION_TYPES.TEXT;
        intro?: string;
        paragraphs?: string[];
        links?: GenericLink[];
      }
    | {
        type: typeof SECTION_TYPES.LIST;
        intro?: string;
        items: string[];
        links?: GenericLink[];
      }
    | {
        type: typeof SECTION_TYPES.STEPS;
        intro?: string;
        steps: string[];
        links?: GenericLink[];
      }
    | {
        type: typeof SECTION_TYPES.FAQ;
        intro?: string;
        items: Array<{ q: string; a: string }>;
      };
};

export type SpaceContent = {
  space: ProjectSpace;
  metadata: {
    title: string;
    description: string;
    canonical: string;
  };
  hero: {
    h1: string;
    intro?: string;
    paragraphs?: string[];
    ctaLinks: GenericLink[];
  };
  sections: SpaceSection[];
  footerLinks: GenericLink[];
};
