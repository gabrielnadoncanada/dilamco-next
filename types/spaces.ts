import type { ProjectSpace } from "@/types/projects";
import type { GenericLink } from "@/types/links";
import type { ContentSection } from "@/types/sections";
import type { PageFeatures } from "@/types/page-features";

export type SpaceSection = ContentSection;

export type SpaceContent = {
  space: ProjectSpace;
  features?: PageFeatures;
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
