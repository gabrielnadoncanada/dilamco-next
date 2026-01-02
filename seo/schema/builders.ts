import { SITE } from "./site";

export type JsonLd = Record<string, unknown>;

export function organizationJsonLd(): JsonLd {
  const data: JsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    legalName: SITE.legalName,
    logo: SITE.logoUrl,
    image: SITE.imageUrl,
    sameAs: SITE.sameAs,
  };

  if (SITE.telephone) data.telephone = SITE.telephone;
  if (SITE.email) data.email = SITE.email;

  return data;
}

export function localBusinessJsonLd(): JsonLd {
  const data: JsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE.url}/#localbusiness`,
    name: SITE.name,
    url: SITE.url,
    image: SITE.imageUrl,
    priceRange: "$$$", // haut de gamme
    areaServed: SITE.areasServed.map((a) => ({ "@type": "Place", name: a })),
  };

  if (SITE.telephone) data.telephone = SITE.telephone;
  if (SITE.email) data.email = SITE.email;

  // Address only if you have real address data
  const addr = SITE.address;
  const hasAddress = !!addr.streetAddress || !!addr.postalCode;
  if (hasAddress) {
    data.address = {
      "@type": "PostalAddress",
      ...addr,
    };
  }

  return data;
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; url: string }>
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function faqJsonLd(items: Array<{ q: string; a: string }>): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((x) => ({
      "@type": "Question",
      name: x.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: x.a,
      },
    })),
  };
}

export function serviceJsonLd(args: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  areaServed?: string[];
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: args.name,
    description: args.description,
    serviceType: args.serviceType,
    url: args.url,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: (args.areaServed ?? SITE.areasServed).map((a) => ({
      "@type": "Place",
      name: a,
    })),
  };
}
