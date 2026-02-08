import type { Metadata } from "next";
import type { ArticlePageData } from "@/components/templates/ArticlePageTemplate";
import {
  metadata as commentChoisirMetadata,
  pageData as commentChoisirPageData,
} from "@/data/guide-pages/comment-choisir-cuisine-sur-mesure";
import {
  metadata as erreursRenovationMetadata,
  pageData as erreursRenovationPageData,
} from "@/data/guide-pages/erreurs-renovation-cuisine";
import {
  metadata as etapesRenovationMetadata,
  pageData as etapesRenovationPageData,
} from "@/data/guide-pages/etapes-renovation-cuisine";

export type GuideSlug =
  | "comment-choisir-cuisine-sur-mesure"
  | "erreurs-renovation-cuisine"
  | "etapes-renovation-cuisine";

interface GuidePageDefinition {
  metadata: Metadata;
  pageData: ArticlePageData;
}

export const GUIDE_PAGES: Record<GuideSlug, GuidePageDefinition> = {
  "comment-choisir-cuisine-sur-mesure": {
    metadata: commentChoisirMetadata,
    pageData: commentChoisirPageData,
  },
  "erreurs-renovation-cuisine": {
    metadata: erreursRenovationMetadata,
    pageData: erreursRenovationPageData,
  },
  "etapes-renovation-cuisine": {
    metadata: etapesRenovationMetadata,
    pageData: etapesRenovationPageData,
  },
};

export const GUIDE_PAGE_SLUGS = Object.keys(GUIDE_PAGES) as GuideSlug[];

export function getGuidePageBySlug(slug: string) {
  return GUIDE_PAGES[slug as GuideSlug] ?? null;
}
