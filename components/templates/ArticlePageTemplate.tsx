import { DEFAULT_CTA } from "@/constants/shared-content";
import { JsonLd } from "@/seo/JsonLd";
import { breadcrumbJsonLd, faqJsonLd } from "@/seo/schema/builders";
import { HeroSection } from "@/components/sections/HeroSection";
import { TextSection } from "@/components/sections/TextSection";
import { ListSection } from "@/components/sections/ListSection";
import { ComparisonTableSection } from "@/components/sections/ComparisonTableSection";
import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { FeatureGridSection } from "@/components/sections/FeatureGridSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { SliderSection } from "@/components/sections/SliderSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import type { ActionButton } from "@/components/ActionButtons";
import type {
  ArticlePageData,
  ContentArticleSection,
  ContentLink,
} from "@/types/article-page";
import { SECTION_TYPES } from "@/constants/section-types";
function toActionButtons(links?: ContentLink[]): ActionButton[] | undefined {
  return links?.map((link) => ({
    text: link.title ?? link.label ?? link.text ?? "",
    href: link.href,
    variant: "outline",
  }));
}

function renderSection(section: ContentArticleSection, index: number) {
  const { id, title, content } = section;

  switch (content.type) {
    case SECTION_TYPES.TEXT:
      return (
        <TextSection
          key={index}
          aria-labelledby={id}
          heading={title}
          paragraphs={content.paragraphs}
          links={toActionButtons(content.links)}
        />
      );
    case SECTION_TYPES.LIST:
      return (
        <ListSection
          key={index}
          aria-labelledby={id}
          heading={title}
          intro={content.intro}
          items={content.items}
          links={toActionButtons(content.links)}
          variant={content.variant ?? "bullets"}
        />
      );
    case SECTION_TYPES.TABLE:
      return (
        <ComparisonTableSection
          key={index}
          aria-labelledby={id}
          heading={title}
          description={content.description}
          columns={content.columns}
          rows={content.rows}
          firstColumnLabel={content.firstColumnLabel}
        />
      );
    case SECTION_TYPES.RELATED_LINKS:
      return (
        <RelatedLinksSection
          key={index}
          aria-labelledby={id}
          heading={title}
          items={content.items}
          columns={content.columns}
          intro={content.intro}
        />
      );
    case SECTION_TYPES.FEATURE_GRID:
      return (
        <FeatureGridSection
          key={index}
          aria-labelledby={id}
          heading={title}
          description={content.description}
          items={content.items}
          columns={content.columns}
        />
      );
    case SECTION_TYPES.PROOF:
      return (
        <ProofSection
          key={index}
          aria-labelledby={id}
          heading={title}
          description={content.description}
          items={content.items}
        />
      );
    case SECTION_TYPES.PROCESS:
      return (
        <ProcessSection
          key={index}
          aria-labelledby={id}
          heading={title}
          intro={content.description}
          items={content.items}
          layout={content.layout}
          actions={content.actions}
        />
      );
    case SECTION_TYPES.SLIDER:
      return (
        <SliderSection
          key={index}
          aria-labelledby={id}
          heading={title}
          description={content.description}
          items={content.items}
          showNavigation={content.showNavigation}
        />
      );
    case SECTION_TYPES.CUSTOM:
      return <div key={index}>{content.node}</div>;
    default:
      return null;
  }
}

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

        {data.sections.map(renderSection)}

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

        {data.footerSections?.map(renderSection)}
      </main>
    </>
  );
}
