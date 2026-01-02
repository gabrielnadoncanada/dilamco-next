// data/services/types.ts
// Type definitions for services

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

export type ServiceLink = {
  label: string;
  href: string;
};

export type FAQItem = {
  q: string;
  a: string;
};

export type ServiceSection = {
  id: string;
  title: string;
  content: {
    type: "text" | "list" | "steps" | "list-with-links";
    paragraphs?: string[];
    items?: string[];
    itemsWithLinks?: Array<{
      label: string;
      link?: ServiceLink;
    }>;
    steps?: string[];
    links?: ServiceLink[];
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
    ctaLinks: ServiceLink[];
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
    ctaLinks: ServiceLink[];
  };
  sections: ServiceSection[];
  faq: FAQItem[];
};
