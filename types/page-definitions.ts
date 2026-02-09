import type { Metadata } from "next";
import type { ArticlePageData } from "@/types/article-page";
import type { SpacePageData } from "@/types/space-page";

export interface MaterialPageDefinition {
  metadata: Metadata;
  pageData: ArticlePageData;
}

export interface ComparatifPageDefinition {
  metadata: Metadata;
  pageData: ArticlePageData;
}

export interface GuidePageDefinition {
  metadata: Metadata;
  pageData: ArticlePageData;
}

export interface SpacePageDefinition {
  metadata: Metadata;
  pageData: SpacePageData;
}
