// app/services/[slug]/page.tsx
import type { Metadata } from "next";
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
import { TextSection } from "@/components/sections/TextSection";
import { ListSection } from "@/components/sections/ListSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { ActionButtons, type ActionButton } from "@/components/ActionButtons";

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
          items={
            content.itemsWithLinks?.map((item: any) =>
              item.link
                ? `${item.label} — ${item.link.label}`
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

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug as ServiceSlug);
  if (!service) notFound();

  // Extract service name from title (remove " | Dilamco" suffix)
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
            <ActionButtons className="justify-start" buttons={service.hero.ctaLinks.map((link) => ({
              text: link.label,
              href: link.href,
              variant: link.href === "/contact/" ? ("default" as const) : ("outline" as const),
            }))} />
          }
        />

        {service.sections.map((section: any) => renderSection(section))}

        {service.faq.length > 0 && (
          <FAQSection
            aria-labelledby="faq"
            heading={`FAQ — ${service.slug}`}
            items={service.faq.map((item) => ({
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
