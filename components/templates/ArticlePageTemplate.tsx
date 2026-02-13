import { DEFAULT_CTA } from "@/constants/shared-content";
import { JsonLd } from "@/seo/JsonLd";
import { breadcrumbJsonLd, faqJsonLd } from "@/seo/schema/builders";
import { HeroSection } from "@/components/sections/HeroSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { renderSection } from "@/lib/render-section";
import type { ArticlePageData } from "@/types/article-page";

export function ArticlePageTemplate({ data }: { data: ArticlePageData }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(data.breadcrumbs)} />
      {data.extraJsonLd?.map((jsonLd, index) => (
        <JsonLd key={index} data={jsonLd} />
      ))}
      {data.faq ? <JsonLd data={faqJsonLd(data.faq.items)} /> : null}

      <main id="contenu">
        <HeroSection {...data.hero} />

        {data.sections.map((section) => renderSection(section))}

        {data.faq ? (
          <FAQSection
            aria-labelledby={data.faq.ariaLabelledby}
            heading={data.faq.heading}
            items={data.faq.items.map((item) => ({
              question: item.q,
              answer: item.a,
            }))}
          />
        ) : null}

        {data.showCta === false ? null : (
          <CTASection aria-labelledby="cta" {...(data.cta ?? DEFAULT_CTA)} />
        )}

        {data.footerSections?.map((section) => renderSection(section))}
      </main>
    </>
  );
}
