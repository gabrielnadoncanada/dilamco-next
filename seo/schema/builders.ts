import { SITE } from "./site";

export type JsonLd = Record<string, unknown>;

const ORG_ID = `${SITE.url}/#organization`;
const LOCALBUSINESS_ID = `${SITE.url}/#localbusiness`;

/**
 * JSON-LD ImageObject pour le SEO Google Images. `src` doit être un chemin
 * absolu de l'app (ex. "/images/...") — converti en URL absolue.
 */
export function imageObjectJsonLd(args: {
  src: string;
  caption?: string;
  pageUrl?: string;
  representativeOfPage?: boolean;
}): JsonLd {
  const contentUrl = args.src.startsWith("http")
    ? args.src
    : `${SITE.url}${args.src}`;
  const data: JsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl,
    url: contentUrl,
    creator: { "@type": "Organization", "@id": ORG_ID },
    creditText: SITE.name,
  };
  if (args.caption) {
    data.caption = args.caption;
    data.name = args.caption;
    data.description = args.caption;
  }
  if (args.pageUrl) data.isPartOf = args.pageUrl;
  if (args.representativeOfPage) data.representativeOfPage = true;
  return data;
}

export function organizationJsonLd(): JsonLd {
  const data: JsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
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
    "@id": LOCALBUSINESS_ID,
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

    // ✅ provider = entité locale (LocalBusiness)
    provider: { "@id": LOCALBUSINESS_ID },

    // ✅ brand = entité corporate (Organization)
    brand: { "@id": ORG_ID },

    areaServed: (args.areaServed ?? SITE.areasServed).map((a) => ({
      "@type": "Place",
      name: a,
    })),
  };
}
