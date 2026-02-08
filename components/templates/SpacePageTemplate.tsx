import type { ReactNode } from "react";
import { DEFAULT_CTA } from "@/data/shared-content";
import { JsonLd } from "@/seo/JsonLd";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
} from "@/seo/schema/builders";
import { HeroSection } from "@/components/sections/HeroSection";
import { ListSection } from "@/components/sections/ListSection";
import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import {
  FeatureImageText,
  type FeatureImageTextItem,
} from "@/components/sections/FeatureImageText";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import type { ActionButton } from "@/components/ActionButtons";

type ListEntry = { title: string; description: string } | string;
type RelatedLink = { label: string; href: string; description?: string };
type ServiceData = Parameters<typeof serviceJsonLd>[0];
type FAQData = { q: string; a: string };

interface SpacePageData {
  breadcrumbs: Array<{ name: string; url: string }>;
  service: ServiceData;
  hero: {
    heading: string;
    description?: string | ReactNode;
    image?: { src: string; alt: string };
    actionsSlot?: ReactNode;
  };
  audience: {
    ariaLabelledby: string;
    heading: string;
    intro?: string;
    items: ListEntry[];
    variant?: "bullets" | "checkmarks" | "numbered";
  };
  includedLinks: {
    ariaLabelledby: string;
    heading: string;
    links: RelatedLink[];
    columns?: 2 | 3;
  };
  featureImageTextItems: FeatureImageTextItem[];
  projectLinks: {
    ariaLabelledby: string;
    heading: string;
    links: RelatedLink[];
    columns?: 2 | 3;
  };
  faq: {
    ariaLabelledby: string;
    heading: string;
    items: FAQData[];
  };
  usefulLinks: {
    ariaLabelledby: string;
    heading: string;
    links: RelatedLink[];
    columns?: 2 | 3;
  };
  cta?: {
    heading: string;
    description: string;
    actions: ActionButton[];
  };
}

export function SpacePageTemplate({ data }: { data: SpacePageData }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(data.breadcrumbs)} />
      <JsonLd data={serviceJsonLd(data.service)} />
      <JsonLd data={faqJsonLd(data.faq.items)} />

      <main id="contenu">
        <HeroSection {...data.hero} />

        <ListSection
          aria-labelledby={data.audience.ariaLabelledby}
          heading={data.audience.heading}
          intro={data.audience.intro}
          items={data.audience.items}
          variant={data.audience.variant ?? "checkmarks"}
        />

        <RelatedLinksSection
          aria-labelledby={data.includedLinks.ariaLabelledby}
          heading={data.includedLinks.heading}
          links={data.includedLinks.links}
          columns={data.includedLinks.columns ?? 2}
        />

        <FeatureImageText items={data.featureImageTextItems} />

        <RelatedLinksSection
          aria-labelledby={data.projectLinks.ariaLabelledby}
          heading={data.projectLinks.heading}
          links={data.projectLinks.links}
          columns={data.projectLinks.columns ?? 2}
        />

        <FAQSection
          aria-labelledby={data.faq.ariaLabelledby}
          heading={data.faq.heading}
          items={data.faq.items.map((item) => ({
            question: item.q,
            answer: item.a,
          }))}
        />

        <RelatedLinksSection
          aria-labelledby={data.usefulLinks.ariaLabelledby}
          heading={data.usefulLinks.heading}
          links={data.usefulLinks.links}
          columns={data.usefulLinks.columns ?? 3}
        />

        <CTASection aria-labelledby="cta" {...(data.cta ?? DEFAULT_CTA)} />
      </main>
    </>
  );
}
