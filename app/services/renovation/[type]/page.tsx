// app/services/renovation/[type]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRenovationSubServiceByType } from "@/data/services/utils";
import { RENOVATION_SUB_SERVICES } from "@/data/services/renovation";
import { JsonLd } from "@/seo/JsonLd";
import { serviceJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";

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
          {content.intro && <p>{content.intro}</p>}
          {content.itemsWithLinks && (
            <ul>
              {content.itemsWithLinks.map((item: any, idx: number) => (
                <li key={idx}>
                  {item.label === item.link?.label ? (
                    <a href={item.link.href}>{item.link.label}</a>
                  ) : (
                    <>
                      <strong>{item.label}</strong>
                      {item.link && (
                        <>
                          <br />
                          <a href={item.link.href}>{item.link.label}</a>
                        </>
                      )}
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
        <header>
          <h1>{subService.hero.h1}</h1>
          {subService.hero.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
          <p>
            {subService.hero.ctaLinks.map((link, idx) => (
              <span key={link.href}>
                <a href={link.href}>{link.label}</a>
                {idx < subService.hero.ctaLinks.length - 1 ? " | " : ""}
              </span>
            ))}
          </p>
        </header>

        {subService.sections.map((section) => renderSection(section))}

        {subService.faq.length > 0 && (
          <section aria-labelledby="faq">
            <h2 id="faq">
              FAQ —{" "}
              {type === "cuisine"
                ? "rénovation de cuisine"
                : "rénovation de salle de bain"}
            </h2>
            <dl>
              {subService.faq.map((item, idx) => (
                <div key={idx}>
                  <dt>{item.q}</dt>
                  <dd>{item.a}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        <section aria-labelledby="cta">
          <h2 id="cta">{ctaTitle}</h2>
          <p>
            Dites-nous votre secteur (Montréal/Laval/Rive-Sud), votre échéance
            et la portée souhaitée (partielle ou clé en main). On vous propose
            la prochaine étape la plus simple pour avancer.
          </p>
          <p>
            <a href="/contact/">Demander une soumission</a>
          </p>
        </section>
      </main>
    </>
  );
}
