import type { GenericLink } from "@/types/links";
import { SECTION_TYPES } from "@/constants/section-types";

export type { GenericLink } from "@/types/links";

export type ServiceSlug =
  | "design"
  | "fabrication"
  | "installation"
  | "renovation";

export type RenovationType =
  | "cuisine"
  | "salle-de-bain"
  | "plancher"
  | "agrandissement-de-maison";

export type FAQItem = {
  q: string;
  a: string;
};

type ListEntry = string | { title: string; description: string };

type RelatedLink = {
  title?: string;
  label?: string;
  href: string;
  description?: string;
};

type SectionItemWithLink = {
  title?: string;
  label?: string;
  link?: GenericLink;
};

export type ServiceSection = {
  id: string;
  title: string;
  content: {
    type:
      | typeof SECTION_TYPES.TEXT
      | typeof SECTION_TYPES.LIST
      | typeof SECTION_TYPES.STEPS
      | typeof SECTION_TYPES.LIST_WITH_LINKS
      | typeof SECTION_TYPES.RELATED_LINKS
      | typeof SECTION_TYPES.CUSTOM
      | typeof SECTION_TYPES.FAQ;
    paragraphs?: string[];
    items?: ListEntry[] | RelatedLink[] | Array<{ q: string; a: string }>;
    itemsWithLinks?: SectionItemWithLink[];
    steps?: string[];
    links?: GenericLink[];
    intro?: string;
  };
};

export type ServiceData = {
  slug: ServiceSlug;
  metadata: {
    title: string;
    description: string;
    canonical: string;
  };
  hero: {
    h1: string;
    paragraphs: string[];
    ctaLinks: GenericLink[];
    image?: {
      src: string;
      alt: string;
    };
  };
  sections: ServiceSection[];
  faq: FAQItem[];
  jsonLd: {
    name: string;
    description: string;
    serviceType: string;
  };
};

export type RenovationSubServiceData = {
  type: RenovationType;
  metadata: {
    title: string;
    description: string;
    canonical: string;
  };
  hero: {
    h1: string;
    paragraphs: string[];
    ctaLinks: GenericLink[];
  };
  sections: ServiceSection[];
  faq: FAQItem[];
};
