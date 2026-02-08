// app/services/[slug]/page.tsx
import type { Metadata } from "next";
import { DEFAULT_CTA } from "@/data/shared-content";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services/utils";
import type { ServiceSlug } from "@/data/services/types";
import { JsonLd } from "@/seo/JsonLd";
import {
  serviceJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
} from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";
import { HeroSection } from "@/components/sections/HeroSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { ActionButtons } from "@/components/ActionButtons";
import { renderSection } from "@/lib/render-section";

type Params = { slug: string };

export function generateStaticParams() {
  return [
    { slug: "design" },
    { slug: "fabrication" },
    { slug: "installation" },
    { slug: "renovation" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug as ServiceSlug);
  if (!service) return {};

  return {
    title: service.metadata.title,
    description: service.metadata.description,
    alternates: { canonical: service.metadata.canonical },

    openGraph: {
      type: "website",
      url: service.metadata.canonical,
      title: service.metadata.title,
      description: service.metadata.description,
      images: [
        {
          url: `/services/${service.slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: service.metadata.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: service.metadata.title,
      description: service.metadata.description,
      images: [`/services/${service.slug}/opengraph-image`],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug as ServiceSlug);
  if (!service) notFound();

  const serviceName = service.metadata.title.replace(" | Dilamco", "");

  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services/" },
    { name: serviceName, url: service.metadata.canonical },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd
        data={serviceJsonLd({
          name: service.jsonLd.name,
          description: service.jsonLd.description,
          url: service.metadata.canonical,
          serviceType: service.jsonLd.serviceType,
        })}
      />
      {service.faq.length > 0 && <JsonLd data={faqJsonLd(service.faq)} />}
      <main id="contenu">
        <HeroSection
          heading={service.hero.h1}
          description={service.hero.paragraphs.join(" ")}
          actionsSlot={
            <ActionButtons
              className="justify-start"
              buttons={service.hero.ctaLinks.map((link) => ({
                text: link.label,
                href: link.href,
                variant:
                  link.href === "/contact/"
                    ? ("default" as const)
                    : ("outline" as const),
              }))}
            />
          }
        />

        {service.sections.map((section: any) =>
          renderSection({
            id: section.id,
            title: section.title,
            type: section.content.type,
            paragraphs: section.content.paragraphs,
            intro: section.content.intro,
            items: section.content.items,
            itemsWithLinks: section.content.itemsWithLinks,
            steps: section.content.steps,
            links: section.content.links,
          })
        )}

        {service.faq.length > 0 && (
          <FAQSection
            aria-labelledby="faq"
            heading={`FAQ â€” ${service.slug}`}
            items={service.faq.map((item) => ({
              question: item.q,
              answer: item.a,
            }))}
          />
        )}

        <CTASection aria-labelledby="cta" {...DEFAULT_CTA} />
      </main>
    </>
  );
}
