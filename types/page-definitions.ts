import type { Metadata } from "next";
import type { ArticlePageData } from "@/types/article-page";
import type { PageFeatures } from "@/types/page-features";

export interface ArticlePageDefinition {
  metadata: Metadata;
  pageData: ArticlePageData;
  features?: PageFeatures;
}
