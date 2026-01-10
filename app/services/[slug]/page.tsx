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
import { Faq1 } from "@/components/faq1";
import { Cta12 } from "@/components/cta12";

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
      return (
        <section key={id} aria-labelledby={id}>
          <h2 id={id}>{title}</h2>
          {content.paragraphs?.map((p: string, idx: number) => (
            <p key={idx}>{p}</p>
          ))}
          {content.items && (
            <ul>
              {content.items.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
          {content.links && (
            <p>
              {content.links.map((link: any, idx: number) => (
                <span key={link.href}>
                  <a href={link.href}>{link.label}</a>
                  {idx < content.links.length - 1 ? " | " : ""}
                </span>
              ))}
            </p>
          )}
        </section>
      );

    case "list":
      return (
        <section key={id} aria-labelledby={id}>
          <h2 id={id}>{title}</h2>
          {content.intro && <p>{content.intro}</p>}
          {content.items && (
            <ul>
              {content.items.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
          {content.links && (
            <p>
              {content.links.map((link: any, idx: number) => (
                <span key={link.href}>
                  <a href={link.href}>{link.label}</a>
                  {idx < content.links.length - 1 ? " | " : ""}
                </span>
              ))}
            </p>
          )}
        </section>
      );

    case "list-with-links":
      return (
        <section key={id} aria-labelledby={id}>
          <h2 id={id}>{title}</h2>
          {content.itemsWithLinks && (
            <ul>
              {content.itemsWithLinks.map((item: any, idx: number) => (
                <li key={idx}>
                  <strong>{item.label}</strong>
                  {item.link && (
                    <>
                      <br />
                      <a href={item.link.href}>{item.link.label}</a>
                    </>
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>
      );

    case "steps":
      return (
        <section key={id} aria-labelledby={id}>
          <h2 id={id}>{title}</h2>
          {content.steps && (
            <ol>
              {content.steps.map((step: string, idx: number) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          )}
          {content.links && (
            <p>
              {content.links.map((link: any, idx: number) => (
                <span key={link.href}>
                  <a href={link.href}>{link.label}</a>
                  {idx < content.links.length - 1 ? " | " : ""}
                </span>
              ))}
            </p>
          )}
        </section>
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
        <header>
          <h1>{service.hero.h1}</h1>
          {service.hero.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
          <p>
            {service.hero.ctaLinks.map((link, idx) => (
              <span key={link.href}>
                <a href={link.href}>{link.label}</a>
                {idx < service.hero.ctaLinks.length - 1 ? " | " : ""}
              </span>
            ))}
          </p>
        </header>

        {service.sections.map((section) => renderSection(section))}

        {service.faq.length > 0 && (
          <Faq1
            aria-labelledby="faq"
            heading={`FAQ — ${service.slug}`}
            items={service.faq.map((item) => ({
              id: item.q,
              question: item.q,
              answer: item.a,
            }))}
          />
        )}

        <Cta12
          aria-labelledby="cta"
          heading="Parlez-nous de votre projet"
          description="Dites-nous votre espace (cuisine/salle de bain), votre secteur (Montréal/Laval/Rive-Sud) et votre échéance. On vous recommande un choix cohérent (matériaux + quincaillerie + installation) pour un résultat durable."
          buttons={{
            primary: {
              text: "Demander une soumission",
              url: "/contact/",
            },
          }}
        />
      </main>
    </>
  );
}
