// app/services/renovation/[type]/page.tsx
import type { Metadata } from "next";
import { DEFAULT_CTA } from "@/data/shared-content";
import { notFound } from "next/navigation";
import { getRenovationSubServiceByType } from "@/data/services/utils";
import { RENOVATION_SUB_SERVICES } from "@/data/services/renovation";
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

type Params = { type: string };

export function generateStaticParams() {
  return Object.keys(RENOVATION_SUB_SERVICES).map((type) => ({ type }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { type } = await params;
  const subService = getRenovationSubServiceByType(type);
  if (!subService) return {};

  return {
    title: subService.metadata.title,
    description: subService.metadata.description,
    alternates: { canonical: subService.metadata.canonical },

    openGraph: {
      type: "website",
      url: subService.metadata.canonical,
      title: subService.metadata.title,
      description: subService.metadata.description,
      siteName: "Dilamco",
      locale: "fr_CA",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: subService.metadata.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: subService.metadata.title,
      description: subService.metadata.description,
    },
  };
}

export default async function RenovationSubServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { type } = await params;
  const subService = getRenovationSubServiceByType(type);
  if (!subService) notFound();

  const serviceName = subService.metadata.title.replace(" | Dilamco", "");

  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services/" },
    { name: "RÃ©novation", url: SITE.url + "/services/renovation/" },
    { name: serviceName, url: subService.metadata.canonical },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd
        data={serviceJsonLd({
          name: subService.metadata.title,
          description: subService.metadata.description,
          url: subService.metadata.canonical,
          serviceType:
            type === "cuisine"
              ? "RÃ©novation de cuisine"
              : "RÃ©novation de salle de bain",
        })}
      />
      {subService.faq.length > 0 && <JsonLd data={faqJsonLd(subService.faq)} />}
      <main id="contenu">
        <HeroSection
          heading={subService.hero.h1}
          description={subService.hero.paragraphs.join(" ")}
          actionsSlot={
            <ActionButtons
              className="justify-start"
              buttons={subService.hero.ctaLinks.map((link) => ({
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

        {subService.sections.map((section: any) =>
          renderSection(
            {
              id: section.id,
              title: section.title,
              type: section.content.type,
              paragraphs: section.content.paragraphs,
              intro: section.content.intro,
              items: section.content.items,
              itemsWithLinks: section.content.itemsWithLinks,
              steps: section.content.steps,
              links: section.content.links,
            },
            { dedupeLinkedLabel: true }
          )
        )}

        {subService.faq.length > 0 && (
          <FAQSection
            aria-labelledby="faq"
            heading={`FAQ â€” ${
              type === "cuisine"
                ? "rÃ©novation de cuisine"
                : "rÃ©novation de salle de bain"
            }`}
            items={subService.faq.map((item) => ({
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
