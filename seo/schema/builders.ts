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

  // Avis : aggregateRating + reviews affichés sur le site (cf. GoogleReviews).
  // NB : Google ne génère pas d'étoiles SERP pour les LocalBusiness self-serving,
  // mais le markup aide la résolution d'entité et la citation par les IA.
  if (SITE.reviews && SITE.reviews.reviewCount > 0) {
    data.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: SITE.reviews.ratingValue,
      reviewCount: SITE.reviews.reviewCount,
      bestRating: 5,
      worstRating: 1,
    };
    data.review = SITE.reviews.items.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      datePublished: r.datePublished,
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: r.body,
    }));
  }

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

/**
 * Product + Offer pour les fiches boutique (modules d'armoire en stock).
 * Prix en CAD ; dimensions exprimées en pouces (unitCode INH).
 * `brand`/`seller` référencent les entités Organization/LocalBusiness du site.
 */
export function productJsonLd(args: {
  name: string;
  description?: string;
  sku?: string;
  category?: string;
  image: string | string[];
  price: number;
  availability: boolean;
  url: string;
  width?: number;
  height?: number;
  depth?: number;
  /**
   * Variantes vendables (profil/couleur), chacune son prix/SKU. Rend un
   * tableau d'`Offer` au lieu d'une offre unique — modélise le « 1 Product,
   * N Offers » au lieu de deux fiches qui se cannibalisent.
   */
  offers?: Array<{
    price: number;
    sku?: string;
    availability: boolean;
    url?: string;
    name?: string;
  }>;
  /** Date ISO jusqu'à laquelle le prix est valide (rich results / free listings). */
  priceValidUntil?: string;
  /** Attributs structurés (PropertyValue) : portes, tiroirs, couleurs, moulure… */
  additionalProperties?: Array<{ name: string; value: string }>;
}): JsonLd {
  const images = (Array.isArray(args.image) ? args.image : [args.image])
    .filter(Boolean)
    .map((src) => (src.startsWith("http") ? src : `${SITE.url}${src}`));

  const data: JsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${args.url}#product`,
    name: args.name,
    image: images,
    url: args.url,
    brand: { "@type": "Organization", "@id": ORG_ID },
  };

  if (args.description) data.description = args.description;
  if (args.sku) data.sku = args.sku;
  if (args.category) data.category = args.category;

  const dim = (v?: number) =>
    typeof v === "number" && v > 0
      ? { "@type": "QuantitativeValue", value: v, unitCode: "INH" }
      : undefined;
  const width = dim(args.width);
  const height = dim(args.height);
  const depth = dim(args.depth);
  if (width) data.width = width;
  if (height) data.height = height;
  if (depth) data.depth = depth;

  const toOffer = (o: {
    price: number;
    sku?: string;
    availability: boolean;
    url?: string;
    name?: string;
  }): JsonLd => {
    const offer: JsonLd = {
      "@type": "Offer",
      price: o.price,
      priceCurrency: "CAD",
      availability: o.availability
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      // En stock = produit neuf (différenciateur vs reconditionné).
      itemCondition: "https://schema.org/NewCondition",
      url: o.url ?? args.url,
      seller: { "@id": LOCALBUSINESS_ID },
      businessFunction: "http://purl.org/goodrelations/v1#Sell",
    };
    if (o.sku) offer.sku = o.sku;
    if (o.name) offer.name = o.name;
    if (args.priceValidUntil) offer.priceValidUntil = args.priceValidUntil;
    return offer;
  };

  // 1 Product, N Offers : une offre par variante (prix/SKU propres). Repli sur
  // l'offre unique si aucune variante explicite n'est fournie.
  const offerList = (args.offers ?? []).filter((o) => o.price > 0);
  if (offerList.length > 1) {
    data.offers = offerList.map(toOffer);
  } else if (offerList.length === 1) {
    data.offers = toOffer(offerList[0]);
  } else if (args.price > 0) {
    data.offers = toOffer({
      price: args.price,
      sku: args.sku,
      availability: args.availability,
      url: args.url,
    });
  }

  // Attributs structurés (dimensions lisibles, portes, tiroirs, couleurs, moulure)
  // — enrichit le Product pour les rich results et les AI Overviews.
  const props = (args.additionalProperties ?? []).filter(
    (p) => p.name && p.value,
  );
  if (props.length) {
    data.additionalProperty = props.map((p) => ({
      "@type": "PropertyValue",
      name: p.name,
      value: p.value,
    }));
  }

  return data;
}

/**
 * ItemList pour les pages collection/taxonomie : liste ordonnée des fiches
 * produit. Signale à Google la structure de catégorie (et nourrit les carrousels
 * de produits / AI Overviews). `items` = URLs absolues des fiches.
 */
export function itemListJsonLd(args: {
  name: string;
  url: string;
  items: Array<{ url: string; name: string }>;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${args.url}#itemlist`,
    name: args.name,
    numberOfItems: args.items.length,
    itemListElement: args.items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: it.url,
      name: it.name,
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
