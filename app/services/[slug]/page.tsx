// app/services/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ActionButtons } from "@/components/ActionButtons";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { DEFAULT_CTA } from "@/constants/shared-content";
import { getServiceBySlug } from "@/data/service-pages/utils";
import type { ServiceSlug } from "@/types/service-pages";
import { renderSection } from "@/lib/render-section";
import { JsonLd } from "@/seo/JsonLd";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";

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
      {service.faq.length > 0 ? <JsonLd data={faqJsonLd(service.faq)} /> : null}

      <main id="contenu">
        <HeroSection
          heading={service.hero.h1}
          description={service.hero.intro ?? service.hero.paragraphs?.join(" ") ?? ""}
          actionsSlot={
            <ActionButtons
              className="justify-start"
              buttons={service.hero.ctaLinks.map((link) => ({
                text: link.title ?? link.label ?? "",
                href: link.href,
                variant:
                  link.href === "/contact/"
                    ? ("default" as const)
                    : ("outline" as const),
              }))}
            />
          }
        />

        {service.sections.map((section) => renderSection(section))}

        {service.faq.length > 0 ? (
          <FAQSection
            aria-labelledby="faq"
            heading={`FAQ - ${service.slug}`}
            items={service.faq.map((item) => ({
              question: item.q,
              answer: item.a,
            }))}
          />
        ) : null}

        <CTASection aria-labelledby="cta" {...DEFAULT_CTA} />
      </main>
    </>
  );
}


