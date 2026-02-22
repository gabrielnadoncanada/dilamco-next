// app/services/renovation/[type]/page.tsx
import type { Metadata } from "next";
import { ActionButtons } from "@/components/ActionButtons";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { DEFAULT_CTA } from "@/constants/shared-content";
import {
  getPublicRenovationSubServiceTypes,
  getRenovationSubServiceByType,
} from "@/data/service-pages/utils";
import {
  getAccessibleEntity,
  requireAccessibleEntity,
} from "@/lib/page-access";
import { renderSection } from "@/lib/render-section";
import { validateContentSections } from "@/lib/section-validation";
import { JsonLd } from "@/seo/JsonLd";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";

type Params = { type: string };

export function generateStaticParams() {
  return getPublicRenovationSubServiceTypes().map((type) => ({ type }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { type } = await params;
  const subService = await getAccessibleEntity(
    getRenovationSubServiceByType(type, { includeDrafts: true }),
  );
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
  const subService = await requireAccessibleEntity(
    getRenovationSubServiceByType(type, { includeDrafts: true }),
  );

  const serviceName = subService.metadata.title.replace(" | Dilamco", "");
  const validatedSections = validateContentSections(subService.sections);

  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services/" },
    { name: "Rénovation", url: SITE.url + "/services/renovation/" },
    { name: serviceName, url: subService.metadata.canonical },
  ];

  const faqHeadingByType: Record<string, string> = {
    cuisine: "FAQ - rénovation de cuisine",
    "salle-de-bain": "FAQ - rénovation de salle de bain",
    plancher: "FAQ - rénovation de plancher",
    "agrandissement-de-maison": "FAQ - agrandissement de maison",
  };

  const serviceTypeByType: Record<string, string> = {
    cuisine: "Rénovation de cuisine",
    "salle-de-bain": "Rénovation de salle de bain",
    plancher: "Rénovation de plancher",
    "agrandissement-de-maison": "Agrandissement de maison",
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd
        data={serviceJsonLd({
          name: subService.metadata.title,
          description: subService.metadata.description,
          url: subService.metadata.canonical,
          serviceType: serviceTypeByType[type] ?? "Rénovation",
        })}
      />
      {subService.faq.length > 0 ? (
        <JsonLd data={faqJsonLd(subService.faq)} />
      ) : null}

      <main id="contenu">
        <HeroSection
          heading={subService.hero.h1}
          description={subService.hero.intro ?? subService.hero.paragraphs?.join(" ") ?? ""}
          actionsSlot={
            <ActionButtons
              className="justify-start"
              buttons={subService.hero.ctaLinks.map((link) => ({
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

        {validatedSections.map((section) =>
          renderSection(section, { dedupeLinkedLabel: true })
        )}

        {subService.faq.length > 0 ? (
          <FAQSection
            aria-labelledby="faq"
            heading={faqHeadingByType[type] ?? `FAQ - ${serviceName}`}
            items={subService.faq.map((item) => ({
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
