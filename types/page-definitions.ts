import type { Metadata } from "next";
import type { ArticlePageData } from "@/types/article-page";
import type { SpacePageData } from "@/types/space-page";
import type { PageFeatures } from "@/types/page-features";

export interface MaterialPageDefinition {
  metadata: Metadata;
  pageData: ArticlePageData;
  features?: PageFeatures;
}

export interface ComparatifPageDefinition {
  metadata: Metadata;
  pageData: ArticlePageData;
  features?: PageFeatures;
}

export interface GuidePageDefinition {
  metadata: Metadata;
  pageData: ArticlePageData;
  features?: PageFeatures;
}

export interface SpacePageDefinition {
  metadata: Metadata;
  pageData: SpacePageData;
  features?: PageFeatures;
}
