// app/services/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, type ServiceSlug } from "@/data/services";
import { JsonLd } from "@/seo/JsonLd";
import { serviceJsonLd, faqJsonLd } from "@/seo/schema/builders";
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
  const service = getServiceBySlug(slug);
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
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
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
          <section aria-labelledby="faq">
            <h2 id="faq">FAQ — {service.slug}</h2>
            <dl>
              {service.faq.map((item, idx) => (
                <div key={idx}>
                  <dt>{item.q}</dt>
                  <dd>{item.a}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        <section aria-labelledby="cta">
          <h2 id="cta">Parlez-nous de votre projet</h2>
          <p>
            Dites-nous votre espace, votre secteur (Montréal/Laval/Rive-Sud) et
            vos priorités. On vous propose la prochaine étape la plus simple pour
            avancer.
          </p>
          <p>
            <a href="/contact/">Demander une soumission</a>
          </p>
        </section>
      </main>
    </>
  );
}
