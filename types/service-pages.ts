import type { GenericLink } from "@/types/links";
import type { ContentSection } from "@/types/sections";

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

export type { GenericLink };

export type ServiceSection = ContentSection;

export type ServiceData = {
  slug: ServiceSlug;
  metadata: {
    title: string;
    description: string;
    canonical: string;
  };
  hero: {
    h1: string;
    intro?: string;
    paragraphs?: string[];
    image?: {
      src: string;
      alt: string;
    };
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
    intro?: string;
    paragraphs?: string[];
    image?: {
      src: string;
      alt: string;
    };
    ctaLinks: GenericLink[];
  };
  sections: ServiceSection[];
  faq: FAQItem[];
};
