import { ArticlePageTemplate } from "@/components/templates/ArticlePageTemplate";
import { ensurePageAccess } from "@/lib/page-access";
import type { Metadata } from "next";
import type { ArticlePageData } from "@/types/article-page";
import type { PageFeatures } from "@/types/page-features";
import { validateArticlePageData } from "./section-validation";
import { JsonLd } from "@/seo/JsonLd";
import { breadcrumbJsonLd, faqJsonLd } from "@/seo/schema/builders";
import { HeroSection } from "@/components/sections/HeroSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { DEFAULT_CTA } from "@/constants/shared-content";
import { renderSection } from "./render-section";

type StaticPageModule = {
  metadata: Metadata;
  pageData: ArticlePageData;
  features?: PageFeatures;
};

export function createStaticPage(mod: StaticPageModule) {
  const { metadata, pageData, features } = mod;

  async function Page() {
    await ensurePageAccess(features);
    const validatedData = validateArticlePageData(pageData);
    return (
      <>
        <JsonLd data={breadcrumbJsonLd(validatedData.breadcrumbs)} />
        {validatedData.extraJsonLd?.map((jsonLd, index) => (
          <JsonLd key={index} data={jsonLd} />
        ))}

        <main id="contenu" className="overflow-hidden">
          {validatedData.sections.map((section) => renderSection(section))}
        </main>
      </>
    );
  }

  return { metadata, Page };
}
