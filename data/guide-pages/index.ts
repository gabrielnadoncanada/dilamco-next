import type { GuideSlug } from "@/types/page-slugs";
import type { ArticlePageDefinition } from "@/types/page-definitions";
import { createCollection } from "@/lib/create-collection";
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

const collection = createCollection<GuideSlug, ArticlePageDefinition>({
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
});

export const PUBLIC_GUIDE_PAGE_SLUGS = collection.publicSlugs;
export const getGuidePageBySlug = collection.getBySlug;
