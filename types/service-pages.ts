import type { GenericLink } from "@/types/links";

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

export type ServiceSection = {
  id: string;
  title: string;
  content: {
    type: "text" | "list" | "steps" | "list-with-links" | "related-links";
    paragraphs?: string[];
    items?: Array<string | GenericLink>;
    itemsWithLinks?: Array<{
      title?: string;
      label?: string;
      link?: GenericLink;
    }>;
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
