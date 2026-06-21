# Schema.org Audit — dilamco.com
**Date:** 2026-06-17
**Pages audited:** `/` (FR), `/en` (EN), `/services/renovation`, `/espaces/sous-sol`, `/projets/cuisine`
**Score: 64 / 100**

---

## Detection Summary

| Page | Blocks | Types present |
|---|---|---|
| `/` (FR) | 11 | Organization, HomeAndConstructionBusiness, BreadcrumbList, FAQPage, ImageObject x6 |
| `/en` (EN) | 11 | Organization, HomeAndConstructionBusiness, BreadcrumbList, FAQPage, ImageObject x6 |
| `/services/renovation` | 14 | Organization, HomeAndConstructionBusiness, BreadcrumbList, Service, FAQPage, ImageObject x9 |
| `/espaces/sous-sol` | 13 | Organization, HomeAndConstructionBusiness, BreadcrumbList, Service, FAQPage, ImageObject x8 |
| `/projets/cuisine` | 3 | Organization, HomeAndConstructionBusiness, BreadcrumbList |

All schema is JSON-LD (server-rendered). @context uses `https://schema.org` throughout. Format is correct.

---

## Findings

### FINDING 1 — CRITICAL: HomeAndConstructionBusiness missing `geo`, `openingHours`, and `@id`-linked `sameAs`

**Severity:** Critical
**Pages:** All pages (global via layout.tsx)
**Impact:** Google's LocalBusiness rich result and Knowledge Panel require `geo` (GeoCoordinates) to match the GMB listing. Without it, address is unverified. `openingHours` is required for the business panel hours display.

**Current state (`builders.ts` / live):**
```json
{
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://dilamco.com/#localbusiness",
  "name": "Dilamco",
  "telephone": "+1-514-820-0773",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "18625 Rue Larocque",
    "addressLocality": "Pierrefonds-Roxboro",
    "addressRegion": "QC",
    "postalCode": "H9K 1P1",
    "addressCountry": "CA"
  }
}
```

**Missing fields:** `geo`, `openingHours`, `sameAs` (sameAs is on Organization but not on LocalBusiness — Google recommends it on the LocalBusiness node too for GMB cross-referencing), `currenciesAccepted`.

**Recommended fix in `seo/schema/site.ts`:**
```ts
export const SITE = {
  // ...existing...
  geo: { latitude: 45.4537, longitude: -73.8924 },
  openingHours: ["Mo-Fr 08:00-17:00"],
} as const;
```

**Recommended fix in `seo/schema/builders.ts` — `localBusinessJsonLd()`:**
```ts
data.geo = {
  "@type": "GeoCoordinates",
  latitude: SITE.geo.latitude,
  longitude: SITE.geo.longitude,
};
data.openingHours = SITE.openingHours;
data.sameAs = SITE.sameAs; // mirror from Organization node
```

---

### FINDING 2 — CRITICAL: `Organization` missing `@id` cross-reference on `logo` (ImageObject)

**Severity:** Critical
**Pages:** All pages
**Impact:** Google requires `logo` on Organization to be an `ImageObject` (not a bare URL string) for the Knowledge Panel logo. Bare string is tolerated but not recommended — a URL string passes validation but loses the full ImageObject context.

**Current:**
```json
{
  "@type": "Organization",
  "logo": "https://dilamco.com/logo.png"
}
```

**Recommended:**
```json
{
  "@type": "Organization",
  "logo": {
    "@type": "ImageObject",
    "url": "https://dilamco.com/logo.png",
    "width": 300,
    "height": 60
  }
}
```

Add `width` and `height` in pixels to `site.ts` and expand in `organizationJsonLd()`.

---

### FINDING 3 — HIGH: `Service` schema missing `@id`, `offers`, and `hasOfferCatalog`

**Severity:** High
**Pages:** `/services/renovation`, `/espaces/sous-sol` (and all other space/service pages)
**Impact:** Service without an `@id` cannot be referenced from other nodes (e.g., a future `Offer` or `Product`). Adding `offers` with a `Offer` having `priceSpecification` or at minimum a `description` dramatically improves AI/LLM entity resolution for "how much does X cost in Montreal".

**Current (`/services/renovation` block 3):**
```json
{
  "@type": "Service",
  "name": "Rénovation clé en main",
  "serviceType": "Rénovation",
  "url": "https://dilamco.com/services/renovation",
  "provider": { "@id": "https://dilamco.com/#localbusiness" },
  "brand": { "@id": "https://dilamco.com/#organization" }
}
```

**Recommended addition:**
```json
{
  "@type": "Service",
  "@id": "https://dilamco.com/services/renovation#service",
  "name": "Rénovation clé en main",
  "serviceType": "Rénovation résidentielle",
  "url": "https://dilamco.com/services/renovation",
  "provider": { "@id": "https://dilamco.com/#localbusiness" },
  "areaServed": [ ... ],
  "offers": {
    "@type": "Offer",
    "priceCurrency": "CAD",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "description": "Prix sur devis selon la portée du projet"
    },
    "availability": "https://schema.org/InStock",
    "url": "https://dilamco.com/services/renovation"
  }
}
```

---

### FINDING 4 — HIGH: BreadcrumbList on `/espaces/sous-sol` skips the `/espaces` hub level

**Severity:** High
**Pages:** `/espaces/sous-sol`
**Impact:** Google uses BreadcrumbList for SERP breadcrumb display. Jumping from position 1 (Accueil) directly to position 2 (Aménagement de sous-sol) skips the `/espaces` hub, losing the intermediate breadcrumb that would display `/espaces` in search results and reinforce the hub's authority.

**Current:**
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "position": 1, "name": "Accueil", "item": "https://dilamco.com/" },
    { "position": 2, "name": "Aménagement de sous-sol", "item": "https://dilamco.com/espaces/sous-sol" }
  ]
}
```

**Recommended:**
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://dilamco.com/" },
    { "@type": "ListItem", "position": 2, "name": "Espaces", "item": "https://dilamco.com/espaces" },
    { "@type": "ListItem", "position": 3, "name": "Aménagement de sous-sol", "item": "https://dilamco.com/espaces/sous-sol" }
  ]
}
```

Fix in the space page's breadcrumb builder call — insert `{ name: "Espaces", url: "/espaces" }` as the intermediate item.

---

### FINDING 5 — HIGH: `/projets/cuisine` (and all gallery/project pages) has no `ImageGallery` or `CollectionPage` schema

**Severity:** High
**Pages:** `/projets`, `/projets/cuisine`, `/projets/[space]/[slug]`
**Impact:** Project gallery pages have only the global Organization + LocalBusiness + BreadcrumbList blocks. They lack any `ItemList`, `CollectionPage`, or per-image `ImageObject` with rich metadata. Individual project pages (if they exist at `/projets/[space]/[slug]`) are prime candidates for `CreativeWork` or a richer `ImageObject` graph to compete for Google Images traffic.

**Recommended for `/projets/cuisine`:**
```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://dilamco.com/projets/cuisine#collection",
  "name": "Projets de cuisine sur mesure — Dilamco",
  "description": "Galerie de réalisations de cuisines sur mesure haut de gamme à Montréal et Grand Montréal.",
  "url": "https://dilamco.com/projets/cuisine",
  "about": { "@id": "https://dilamco.com/#localbusiness" },
  "inLanguage": "fr-CA"
}
```

---

### FINDING 6 — HIGH: EN home BreadcrumbList uses wrong canonical (`/` instead of `/en`)

**Severity:** High
**Pages:** `/en`
**Impact:** The EN home BreadcrumbList hardcodes `"item": "https://dilamco.com/"` for "Home" instead of `"https://dilamco.com/en"`. This sends conflicting signals to Google — the EN breadcrumb points to the FR root URL.

**Current (`/en`, block 2):**
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "position": 1, "name": "Home", "item": "https://dilamco.com/" }
  ]
}
```

**Recommended:**
```json
{
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dilamco.com/en" }
  ]
}
```

Fix the breadcrumb builder to receive the locale-aware root URL.

---

### FINDING 7 — MEDIUM: `FAQPage` present on all content pages — Info classification

**Severity:** Info (not a bug, not a removal recommendation)
**Pages:** `/` (FR+EN), `/services/renovation`, `/espaces/sous-sol`, and likely all space/service pages
**Context:** Google retired FAQ rich results for all sites on May 7, 2026. The FAQPage markup no longer generates SERP accordion features. However, FAQPage is actively used by LLMs and AI search engines (Perplexity, ChatGPT browsing, Google AI Overviews) for Q&A entity resolution. **Do not remove.**

**Note:** All FAQ entries use hedged language ("selon la portée", "peut convenir") without concrete prices or timelines. This is intentional but slightly reduces AI citation utility. No structural issues — `Question`/`Answer` types are correct.

---

### FINDING 8 — MEDIUM: No `WebSite` schema with `SearchAction` (Sitelinks Searchbox)

**Severity:** Medium
**Pages:** Home (`/`, `/en`)
**Impact:** A `WebSite` node with `SearchAction` enables the Sitelinks Searchbox in Google SERP for branded queries ("dilamco armoires"). For a local business this is secondary, but useful for brand authority.

**Recommended addition to home page only:**
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://dilamco.com/#website",
  "url": "https://dilamco.com",
  "name": "Dilamco",
  "inLanguage": "fr-CA",
  "publisher": { "@id": "https://dilamco.com/#organization" },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://dilamco.com/projets?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

---

### FINDING 9 — MEDIUM: No `Review` / `AggregateRating` on LocalBusiness or Service

**Severity:** Medium
**Pages:** All (global LocalBusiness, Service pages)
**Impact:** AggregateRating on HomeAndConstructionBusiness produces star ratings in SERP snippets — highest-value rich result for a local renovation contractor. Currently absent. Can be added only when real, verifiable review data exists (Google Business Profile count + score).

**Recommended (only if real review data is available):**
```json
{
  "@type": "HomeAndConstructionBusiness",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "37",
    "bestRating": "5",
    "worstRating": "1"
  }
}
```

Fetch count + score from Google Business Profile API or scrape GBP page. Do not hardcode without a live data source.

---

### FINDING 10 — MEDIUM: No `Product` schema for boutique (dilamco.com/boutique)

**Severity:** Medium
**Pages:** Future `/boutique` pages (e-commerce armoires en stock)
**Impact:** The boutique app (`dilamco_store`) under the same domain will benefit greatly from `Product` + `Offer` schema for Google Shopping free listings and Product rich results. Plan this before launch.

**Recommended for each product page:**
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://dilamco.com/boutique/armoires/[slug]#product",
  "name": "Nom de l'armoire",
  "description": "Description du produit",
  "brand": { "@id": "https://dilamco.com/#organization" },
  "image": "https://dilamco.com/images/boutique/[slug].webp",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "CAD",
    "price": "0.00",
    "availability": "https://schema.org/InStock",
    "url": "https://dilamco.com/boutique/armoires/[slug]",
    "seller": { "@id": "https://dilamco.com/#organization" }
  }
}
```

---

### FINDING 11 — LOW: `ImageObject` blocks missing `encodingFormat`, `width`, `height`

**Severity:** Low
**Pages:** All pages (many ImageObject blocks)
**Impact:** Google Images can use `encodingFormat` ("image/webp"), `width`, and `height` for better indexing signals. All current ImageObject blocks have `contentUrl`, `url`, `creator`, `caption`, `name`, `description`, `isPartOf` — which is good — but lack dimensions and MIME type.

**Recommended addition to `imageObjectJsonLd()` in builders.ts:**
```ts
export function imageObjectJsonLd(args: {
  src: string;
  caption?: string;
  pageUrl?: string;
  representativeOfPage?: boolean;
  width?: number;
  height?: number;
}) {
  // ...existing code...
  if (args.width) data.width = args.width;
  if (args.height) data.height = args.height;
  data.encodingFormat = "image/webp"; // since all images are .webp
}
```

---

### FINDING 12 — LOW: `areaServed` uses `Place` with bare `name` strings; prefer `City` + `AdministrativeArea`

**Severity:** Low
**Pages:** All (global)
**Impact:** Using `{"@type": "Place", "name": "Montréal"}` is valid but less specific than using `City` or `AdministrativeArea` with `sameAs` linked to Wikidata/GeoNames. This primarily affects AI/LLM entity resolution.

**Recommended (optional improvement for top-priority cities):**
```json
"areaServed": [
  {
    "@type": "City",
    "name": "Montréal",
    "sameAs": "https://www.wikidata.org/wiki/Q340"
  },
  {
    "@type": "City",
    "name": "Laval",
    "sameAs": "https://www.wikidata.org/wiki/Q209316"
  }
]
```

---

## Score Breakdown

| Category | Max | Score | Notes |
|---|---|---|---|
| Schema presence & coverage | 25 | 16 | Good base types; projets pages sparse; boutique missing |
| Technical validity (JSON-LD, @context, @type) | 20 | 19 | All parse cleanly; logo as bare string -1 |
| Required fields (LocalBusiness) | 20 | 10 | Missing: geo, openingHours, sameAs on LB node |
| Rich result eligibility | 20 | 12 | Breadcrumb OK; Service OK; no AggregateRating; BreadcrumbList gap on espaces |
| Bilingual / EN parity | 15 | 7 | EN schema present but EN breadcrumb root URL bug |
| **TOTAL** | **100** | **64** | |

---

## Priority Fix Order

1. **[Critical]** Add `geo` + `openingHours` + `sameAs` to `localBusinessJsonLd()` — 1 file change, site-wide impact
2. **[Critical]** Expand `logo` to full `ImageObject` in `organizationJsonLd()`
3. **[High]** Fix EN BreadcrumbList root URL (`/en` not `/`)
4. **[High]** Add `/espaces` intermediate crumb in space page breadcrumbs
5. **[High]** Add `@id` to all `Service` blocks + add `offers` stub
6. **[High]** Add `CollectionPage` schema to `/projets/[space]` pages
7. **[Medium]** Add `WebSite` + `SearchAction` on home pages
8. **[Medium]** Add `AggregateRating` once real GBP data is available
9. **[Medium]** Plan `Product` schema for boutique launch
10. **[Low]** Add `width`/`height`/`encodingFormat` to ImageObject builder
