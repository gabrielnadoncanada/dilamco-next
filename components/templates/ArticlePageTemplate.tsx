import { DEFAULT_CTA } from "@/constants/shared-content";
import { JsonLd } from "@/seo/JsonLd";
import { breadcrumbJsonLd, faqJsonLd } from "@/seo/schema/builders";
import { HeroSection } from "@/components/sections/HeroSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { renderSection } from "@/lib/render-section";
import { validateArticlePageData } from "@/lib/section-validation";
import type { ArticlePageData } from "@/types/article-page";

export function ArticlePageTemplate({ data }: { data: ArticlePageData }) {
  const validatedData = validateArticlePageData(data);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(validatedData.breadcrumbs)} />
      {validatedData.extraJsonLd?.map((jsonLd, index) => (
        <JsonLd key={index} data={jsonLd} />
      ))}
      {validatedData.faq ? <JsonLd data={faqJsonLd(validatedData.faq.items)} /> : null}

      <main id="contenu" className="overflow-hidden">
        <HeroSection {...validatedData.hero} />

        {validatedData.sections.map((section) => renderSection(section))}

        {validatedData.faq ? (
          <FAQSection
            aria-labelledby={validatedData.faq.ariaLabelledby}
            heading={validatedData.faq.heading}
            items={validatedData.faq.items.map((item) => ({
              question: item.q,
              answer: item.a,
            }))}
          />
        ) : null}

        {validatedData.showCta === false ? null : (
          <CTASection aria-labelledby="cta" {...(validatedData.cta ?? DEFAULT_CTA)} />
        )}

        {validatedData.footerSections?.map((section) => renderSection(section))}
      </main>
    </>
  );
}
