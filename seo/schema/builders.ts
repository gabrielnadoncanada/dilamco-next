import { SITE } from "./site";

export type JsonLd = Record<string, unknown>;

const ORG_ID = `${SITE.url}/#organization`;
const LOCALBUSINESS_ID = `${SITE.url}/#localbusiness`;

const BCP47 = { fr: "fr-CA", en: "en-CA" } as const;
type SchemaLocale = keyof typeof BCP47;

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
  const ext = contentUrl.split("?")[0].split(".").pop()?.toLowerCase();
  const encodingFormat =
    ext === "webp"
      ? "image/webp"
      : ext === "avif"
        ? "image/avif"
        : ext === "png"
          ? "image/png"
          : ext === "jpg" || ext === "jpeg"
            ? "image/jpeg"
            : undefined;
  const data: JsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl,
    url: contentUrl,
    creator: { "@type": "Organization", "@id": ORG_ID },
    creditText: SITE.name,
  };
  if (encodingFormat) data.encodingFormat = encodingFormat;
  if (args.caption) {
    data.caption = args.caption;
    data.name = args.caption;
    data.description = args.caption;
  }
  if (args.pageUrl) data.isPartOf = args.pageUrl;
  if (args.representativeOfPage) data.representativeOfPage = true;
  return data;
}

export function organizationJsonLd(locale?: SchemaLocale): JsonLd {
  const data: JsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.name,
    url: SITE.url,
    legalName: SITE.legalName,
    // Logo en ImageObject (avec dimensions) recommandé pour le Knowledge Panel.
    logo: {
      "@type": "ImageObject",
      url: SITE.logo.url,
      width: SITE.logo.width,
      height: SITE.logo.height,
    },
    image: SITE.imageUrl,
    sameAs: SITE.sameAs,
  };

  if (locale) data.inLanguage = BCP47[locale];
  if (SITE.telephone) data.telephone = SITE.telephone;
  if (SITE.email) data.email = SITE.email;

  return data;
}

export function localBusinessJsonLd(locale?: SchemaLocale): JsonLd {
  const data: JsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": LOCALBUSINESS_ID,
    name: SITE.name,
    url: SITE.url,
    image: SITE.imageUrl,
    logo: SITE.logo.url,
    priceRange: "$$$", // haut de gamme
    areaServed: SITE.areasServed.map((a) => ({ "@type": "Place", name: a })),
    // sameAs dupliqué sur le LocalBusiness (Google recommande le cross-référencement GBP).
    sameAs: SITE.sameAs,
    // Coordonnées géo : requis pour le Local Pack / Knowledge Panel.
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    hasMap: SITE.mapUrl,
    // Heures d'ouverture structurées.
    openingHoursSpecification: SITE.openingHours.map((o) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: o.days,
      opens: o.opens,
      closes: o.closes,
    })),
  };

  if (locale) data.inLanguage = BCP47[locale];

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
    // ✅ @id pour pouvoir référencer ce Service depuis d'autres nœuds.
    "@id": `${args.url}#service`,
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

    // ✅ offers : signal de devis sur mesure (pas de prix fixe ; sur soumission).
    offers: {
      "@type": "Offer",
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
      url: args.url,
      businessFunction: "http://purl.org/goodrelations/v1#Sell",
    },
  };
}

/**
 * WebSite + SearchAction (Sitelinks Searchbox) — renforce l'entité de marque
 * sur les requêtes "dilamco". Une seule instance, à rendre sur la home.
 */
export function websiteJsonLd(locale?: SchemaLocale): JsonLd {
  const data: JsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    publisher: { "@id": ORG_ID },
  };
  if (locale) data.inLanguage = BCP47[locale];
  return data;
}
