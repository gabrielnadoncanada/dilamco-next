import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import type { ActionButton } from "@/components/ActionButtons";
import type { SliderItem } from "@/components/sections/SliderSection";
import { SECTION_TYPES } from "@/constants/section-types";

export type ListEntry = { title: string; description: string } | string;

export type RelatedLink = {
  title?: string;
  label?: string;
  href: string;
  description?: string;
};

export type ContentLink = {
  href: string;
  title?: string;
  label?: string;
  text?: string;
  description?: string;
  variant?: "default" | "outline";
};

export type TextArticleSection = {
  type: typeof SECTION_TYPES.TEXT;
  ariaLabelledby: string;
  heading: string;
  paragraphs: string[];
  links?: ActionButton[];
  className?: string;
};

export type ListArticleSection = {
  type: typeof SECTION_TYPES.LIST;
  ariaLabelledby: string;
  heading: string;
  intro?: string;
  items: ListEntry[];
  links?: ActionButton[];
  variant?: "bullets" | "checkmarks" | "numbered";
  className?: string;
};

export type TableArticleSection = {
  type: typeof SECTION_TYPES.TABLE;
  ariaLabelledby: string;
  heading: string;
  description?: string;
  columns: string[];
  rows: Array<{ label?: string; title?: string; values: string[] }>;
  firstColumnLabel?: string;
  className?: string;
};

export type RelatedLinksArticleSection = {
  type: typeof SECTION_TYPES.RELATED_LINKS;
  ariaLabelledby: string;
  heading: string;
  items: RelatedLink[];
  columns?: 2 | 3;
  intro?: ReactNode;
  className?: string;
};

export type FeatureGridArticleSection = {
  type: typeof SECTION_TYPES.FEATURE_GRID;
  ariaLabelledby: string;
  heading: string;
  description?: string;
  items: Array<{
    title: string;
    description: string;
    icon?: LucideIcon;
    href?: string;
  }>;
  columns?: 2 | 3 | 4;
  className?: string;
};

export type ProofArticleSection = {
  type: typeof SECTION_TYPES.PROOF;
  ariaLabelledby: string;
  heading: string;
  description?: string;
  items: Array<{
    title: string;
    description: string;
    icon?: LucideIcon;
  }>;
  className?: string;
};

export type ProcessArticleSection = {
  type: typeof SECTION_TYPES.PROCESS;
  ariaLabelledby: string;
  heading: string;
  description?: string;
  items: Array<{
    id?: string | number;
    step?: string | number;
    title: string;
    description: string;
  }>;
  layout?: "cards" | "timeline";
  actions?: ReactNode;
  className?: string;
};

export type SliderArticleSection = {
  type: typeof SECTION_TYPES.SLIDER;
  ariaLabelledby: string;
  heading?: string;
  description?: string;
  items: SliderItem[];
  showNavigation?: boolean;
  className?: string;
};

export type CustomArticleSection = {
  type: typeof SECTION_TYPES.CUSTOM;
  node: ReactNode;
};

export type ContentArticleSection = {
  id: string;
  title: string;
  content:
    | {
        type: typeof SECTION_TYPES.TEXT;
        paragraphs?: string[];
        intro?: string;
        links?: ContentLink[];
      }
    | {
        type: typeof SECTION_TYPES.LIST;
        intro?: string;
        items: ListEntry[];
        links?: ContentLink[];
        variant?: "bullets" | "checkmarks" | "numbered";
      }
    | {
        type: typeof SECTION_TYPES.TABLE;
        description?: string;
        columns: string[];
        rows: Array<{ label?: string; title?: string; values: string[] }>;
        firstColumnLabel?: string;
      }
    | {
        type: typeof SECTION_TYPES.RELATED_LINKS;
        items: RelatedLink[];
        columns?: 2 | 3;
        intro?: ReactNode;
      }
    | {
        type: typeof SECTION_TYPES.FEATURE_GRID;
        description?: string;
        items: Array<{
          title: string;
          description: string;
          icon?: LucideIcon;
          href?: string;
        }>;
        columns?: 2 | 3 | 4;
      }
    | {
        type: typeof SECTION_TYPES.PROOF;
        description?: string;
        items: Array<{
          title: string;
          description: string;
          icon?: LucideIcon;
        }>;
      }
    | {
        type: typeof SECTION_TYPES.PROCESS;
        description?: string;
        items: Array<{
          id?: string | number;
          step?: string | number;
          title: string;
          description: string;
        }>;
        layout?: "cards" | "timeline";
        actions?: ReactNode;
      }
    | {
        type: typeof SECTION_TYPES.SLIDER;
        description?: string;
        items: SliderItem[];
        showNavigation?: boolean;
      }
    | {
        type: typeof SECTION_TYPES.CUSTOM;
        node: ReactNode;
      };
};

export type ArticlePageSection =
  | TextArticleSection
  | ListArticleSection
  | TableArticleSection
  | RelatedLinksArticleSection
  | FeatureGridArticleSection
  | ProofArticleSection
  | ProcessArticleSection
  | SliderArticleSection
  | CustomArticleSection
  | ContentArticleSection;

export interface ArticlePageData {
  breadcrumbs: Array<{ name: string; url: string }>;
  extraJsonLd?: Record<string, unknown>[];
  hero: {
    heading: string;
    description?: string | ReactNode;
    image?: { src: string; alt: string };
    actions?: ActionButton[];
    actionsSlot?: ReactNode;
  };
  sections: ContentArticleSection[];
  faq?: {
    ariaLabelledby: string;
    heading: string;
    items: Array<{ q: string; a: string }>;
  };
  cta?: {
    heading: string;
    description: string;
    actions: ActionButton[];
  };
  showCta?: boolean;
  footerSections?: ContentArticleSection[];
}
