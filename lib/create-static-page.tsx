import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";
import { ensurePageAccess } from "@/lib/page-access";
import type { Metadata } from "next";
import type { ArticlePageData } from "@/types/article-page";
import type { PageFeatures } from "@/types/page-features";

type StaticPageModule = {
  metadata: Metadata;
  pageData: ArticlePageData;
  features?: PageFeatures;
};

export function createStaticPage(mod: StaticPageModule) {
  const { metadata, pageData, features } = mod;

  async function Page() {
    await ensurePageAccess(features);
    return <ArticlePageTemplate data={pageData} />;
  }

  return { metadata, Page };
}
