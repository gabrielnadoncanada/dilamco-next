// app/services/renovation/[type]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRenovationSubServiceByType } from "@/data/services/utils";
import { RENOVATION_SUB_SERVICES } from "@/data/services/renovation";
import { JsonLd } from "@/seo/JsonLd";
import { serviceJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";
import { HeroSection } from "@/components/sections/HeroSection";
import { TextSection } from "@/components/sections/TextSection";
import { ListSection } from "@/components/sections/ListSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { ActionButtons, type ActionButton } from "@/components/ActionButtons";

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

function renderSection(section: any) {
  const { id, title, content } = section;

  switch (content.type) {
    case "text":
      const textLinks: ActionButton[] | undefined = content.links?.map(
        (link: any) => ({
          text: link.label,
          href: link.href,
          variant: "outline" as const,
        })
      );

      return (
        <TextSection
          key={id}
          aria-labelledby={id}
          heading={title}
          paragraphs={content.paragraphs || []}
          links={textLinks}
        />
      );

    case "list":
      const listLinks: ActionButton[] | undefined = content.links?.map(
        (link: any) => ({
          text: link.label,
          href: link.href,
          variant: "outline" as const,
        })
      );

      return (
        <ListSection
          key={id}
          aria-labelledby={id}
          heading={title}
          intro={content.intro}
          items={content.items || []}
          links={listLinks}
          variant="bullets"
        />
      );

    case "list-with-links":
      return (
        <ListSection
          key={id}
          aria-labelledby={id}
          heading={title}
          intro={content.intro}
          items={
            content.itemsWithLinks?.map((item: any) =>
              item.link
                ? item.label === item.link.label
                  ? item.link.label
                  : `${item.label} — ${item.link.label}`
                : item.label
            ) || []
          }
          variant="bullets"
        />
      );

    case "steps":
      const stepLinks: ActionButton[] | undefined = content.links?.map(
        (link: any) => ({
          text: link.label,
          href: link.href,
          variant: "outline" as const,
        })
      );

      return (
        <ProcessSection
          key={id}
          aria-labelledby={id}
          heading={title}
          steps={
            content.steps?.map((step: string, idx: number) => ({
              step: String(idx + 1),
              title: step,
              description: "",
            })) || []
          }
          actions={
            stepLinks && stepLinks.length > 0 ? (
              <ActionButtons buttons={stepLinks} />
            ) : undefined
          }
        />
      );

    default:
      return null;
  }
}

export default async function RenovationSubServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { type } = await params;
  const subService = getRenovationSubServiceByType(type);
  if (!subService) notFound();

  // Determine CTA text based on type
  const ctaTitle =
    type === "cuisine"
      ? "Parlez-nous de votre projet de rénovation de cuisine"
      : "Parlez-nous de votre projet de rénovation de salle de bain";

  // Extract service name from title (remove " | Dilamco" suffix)
  const serviceName = subService.metadata.title.replace(" | Dilamco", "");

  const crumbs = [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services/" },
    { name: "Rénovation", url: SITE.url + "/services/renovation/" },
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
              ? "Rénovation de cuisine"
              : "Rénovation de salle de bain",
        })}
      />
      {subService.faq.length > 0 && <JsonLd data={faqJsonLd(subService.faq)} />}
      <main id="contenu">
        <HeroSection
          heading={subService.hero.h1}
          description={subService.hero.paragraphs.join(" ")}
          actionsSlot={
            <ActionButtons className="justify-start" buttons={subService.hero.ctaLinks.map((link) => ({
              text: link.label,
              href: link.href,
              variant: link.href === "/contact/" ? ("default" as const) : ("outline" as const),
            }))} />
          }
        />

        {subService.sections.map((section: any) => renderSection(section))}

        {subService.faq.length > 0 && (
          <FAQSection
            aria-labelledby="faq"
            heading={`FAQ — ${type === "cuisine"
                ? "rénovation de cuisine"
                : "rénovation de salle de bain"
              }`}
            items={subService.faq.map((item) => ({
              question: item.q,
              answer: item.a,
            }))}
          />
        )}

        <CTASection
          aria-labelledby="cta"
          heading="Parlez-nous de votre projet"
          description="Dites-nous votre espace (cuisine/salle de bain), votre secteur (Montréal/Laval/Rive-Sud) et votre échéance. On vous recommande un choix cohérent (matériaux + quincaillerie + installation) pour un résultat durable."
          actions={[
            {
              text: "Demander une soumission",
              href: "/contact/",
            },
          ]}
        />
      </main>
    </>
  );
}
