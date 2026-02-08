import type { ReactNode } from "react";
import { DEFAULT_CTA } from "@/data/shared-content";
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
import { SliderSection, type SliderItem } from "@/components/sections/SliderSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import type { ActionButton } from "@/components/ActionButtons";
import type { LucideIcon } from "lucide-react";

type ListEntry = { title: string; description: string } | string;
type RelatedLink = { label: string; href: string; description?: string };

type TextArticleSection = {
  type: "text";
  ariaLabelledby: string;
  heading: string;
  paragraphs: string[];
  links?: ActionButton[];
  className?: string;
};

type ListArticleSection = {
  type: "list";
  ariaLabelledby: string;
  heading: string;
  intro?: string;
  items: ListEntry[];
  links?: ActionButton[];
  variant?: "bullets" | "checkmarks" | "numbered";
  className?: string;
};

type TableArticleSection = {
  type: "table";
  ariaLabelledby: string;
  heading: string;
  description?: string;
  columns: string[];
  rows: Array<{ label: string; values: string[] }>;
  firstColumnLabel?: string;
  className?: string;
};

type RelatedLinksArticleSection = {
  type: "relatedLinks";
  ariaLabelledby: string;
  heading: string;
  links: RelatedLink[];
  columns?: 2 | 3;
  intro?: ReactNode;
  className?: string;
};

type FeatureGridArticleSection = {
  type: "featureGrid";
  ariaLabelledby: string;
  heading: string;
  description?: string;
  features: Array<{
    title: string;
    description: string;
    icon?: LucideIcon;
    href?: string;
  }>;
  columns?: 2 | 3 | 4;
  className?: string;
};

type ProofArticleSection = {
  type: "proof";
  ariaLabelledby: string;
  heading: string;
  description?: string;
  items: Array<{
    title: string;
    description: string;
    icon?: LucideIcon;
  }>;
  className?: string;
};

type ProcessArticleSection = {
  type: "process";
  ariaLabelledby: string;
  heading: string;
  description?: string;
  steps: Array<{
    id?: string | number;
    step?: string | number;
    title: string;
    description: string;
  }>;
  layout?: "cards" | "timeline";
  actions?: ReactNode;
  className?: string;
};

type SliderArticleSection = {
  type: "slider";
  ariaLabelledby: string;
  heading?: string;
  description?: string;
  items: SliderItem[];
  showNavigation?: boolean;
  className?: string;
};

type CustomArticleSection = {
  type: "custom";
  node: ReactNode;
};

export type ArticlePageSection =
  | TextArticleSection
  | ListArticleSection
  | TableArticleSection
  | RelatedLinksArticleSection
  | FeatureGridArticleSection
  | ProofArticleSection
  | ProcessArticleSection
  | SliderArticleSection
  | CustomArticleSection;

export interface ArticlePageData {
  breadcrumbs: Array<{ name: string; url: string }>;
  extraJsonLd?: Record<string, unknown>[];
  hero: {
    heading: string;
    description?: string | ReactNode;
    image?: { src: string; alt: string };
    actions?: ActionButton[];
    actionsSlot?: ReactNode;
  };
  sections: ArticlePageSection[];
  faq?: {
    ariaLabelledby: string;
    heading: string;
    items: Array<{ q: string; a: string }>;
  };
  cta?: {
    heading: string;
    description: string;
    actions: ActionButton[];
  };
  showCta?: boolean;
  footerSections?: ArticlePageSection[];
}

function renderSection(section: ArticlePageSection, index: number) {
  switch (section.type) {
    case "text":
      return (
        <TextSection
          key={index}
          aria-labelledby={section.ariaLabelledby}
          heading={section.heading}
          paragraphs={section.paragraphs}
          links={section.links}
          className={section.className}
        />
      );
    case "list":
      return (
        <ListSection
          key={index}
          aria-labelledby={section.ariaLabelledby}
          heading={section.heading}
          intro={section.intro}
          items={section.items}
          links={section.links}
          variant={section.variant}
          className={section.className}
        />
      );
    case "table":
      return (
        <ComparisonTableSection
          key={index}
          aria-labelledby={section.ariaLabelledby}
          heading={section.heading}
          description={section.description}
          columns={section.columns}
          rows={section.rows}
          firstColumnLabel={section.firstColumnLabel}
          className={section.className}
        />
      );
    case "relatedLinks":
      return (
        <RelatedLinksSection
          key={index}
          aria-labelledby={section.ariaLabelledby}
          heading={section.heading}
          links={section.links}
          columns={section.columns}
          intro={section.intro}
          className={section.className}
        />
      );
    case "featureGrid":
      return (
        <FeatureGridSection
          key={index}
          aria-labelledby={section.ariaLabelledby}
          heading={section.heading}
          description={section.description}
          features={section.features}
          columns={section.columns}
          className={section.className}
        />
      );
    case "proof":
      return (
        <ProofSection
          key={index}
          aria-labelledby={section.ariaLabelledby}
          heading={section.heading}
          description={section.description}
          items={section.items}
          className={section.className}
        />
      );
    case "process":
      return (
        <ProcessSection
          key={index}
          aria-labelledby={section.ariaLabelledby}
          heading={section.heading}
          description={section.description}
          steps={section.steps}
          layout={section.layout}
          actions={section.actions}
          className={section.className}
        />
      );
    case "slider":
      return (
        <SliderSection
          key={index}
          aria-labelledby={section.ariaLabelledby}
          heading={section.heading}
          description={section.description}
          items={section.items}
          showNavigation={section.showNavigation}
          className={section.className}
        />
      );
    case "custom":
      return <div key={index}>{section.node}</div>;
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
