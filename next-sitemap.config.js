/** @type {import('next-sitemap').IConfig} */
const SITE = "https://dilamco.com";

// Retire le préfixe de locale d'un chemin de build.
// "/fr" -> { locale:"fr", slug:"/" } ; "/en/a-propos" -> { locale:"en", slug:"/a-propos" }
function splitLocale(path) {
  if (path === "/fr" || path === "/en") return { locale: path.slice(1), slug: "/" };
  const m = path.match(/^\/(fr|en)(\/.*)$/);
  if (m) return { locale: m[1], slug: m[2] };
  return { locale: "fr", slug: path };
}

// Traduction des segments pour l'EN (synchronisé avec i18n/routing.ts).
const EN_SEGMENT = {
  espaces: "spaces",
  projets: "projects",
  materiaux: "materials",
  "a-propos": "about",
  processus: "process",
  "politique-de-confidentialite": "privacy-policy",
  "conditions-dutilisation": "terms-of-use",
  boutique: "shop",
};
const SPACE_EN = {
  cuisine: "kitchen",
  "salle-de-bain": "bathroom",
  "walk-in": "walk-in",
  "salle-de-lavage": "laundry-room",
  "sous-sol": "basement",
  commercial: "commercial",
};
const RENOVATION_EN = {
  cuisine: "kitchen",
  "salle-de-bain": "bathroom",
  plancher: "flooring",
  "agrandissement-de-maison": "home-extension",
};
const MATERIAL_EN = {
  contreplaque: "plywood",
  "bois-massif": "solid-wood",
  comparatif: "comparison",
  couleurs: "colours",
  quincaillerie: "hardware",
  mdf: "mdf",
  melamine: "melamine",
};
// Collections boutique : sous-chemin FR -> EN (synchronisé avec seo/i18n-path.ts
// BOUTIQUE_TAXON_EN et lib/shop/collections.ts).
const BOUTIQUE_TAXON_EN = {
  "armoires-cuisine": "kitchen-cabinets",
  "armoires-cuisine/bois": "kitchen-cabinets/wood",
  "armoires-cuisine/du-bas": "kitchen-cabinets/base",
  "armoires-cuisine/du-bas/standard": "kitchen-cabinets/base/standard",
  "armoires-cuisine/du-bas/tiroirs": "kitchen-cabinets/base/drawers",
  "armoires-cuisine/du-bas/coin": "kitchen-cabinets/base/corner",
  "armoires-cuisine/du-bas/micro-ondes": "kitchen-cabinets/base/microwave",
  "armoires-cuisine/du-bas/range-epices": "kitchen-cabinets/base/spice-rack",
  "armoires-cuisine/du-bas/tiroir-dechets": "kitchen-cabinets/base/waste-drawer",
  "armoires-cuisine/du-bas/evier-farmhouse":
    "kitchen-cabinets/base/farmhouse-sink",
  "armoires-cuisine/murales": "kitchen-cabinets/wall",
  "armoires-cuisine/murales/standard": "kitchen-cabinets/wall/standard",
  "armoires-cuisine/murales/coin": "kitchen-cabinets/wall/corner",
  "armoires-cuisine/murales/micro-ondes": "kitchen-cabinets/wall/microwave",
  "armoires-cuisine/murales/dessus-frigo": "kitchen-cabinets/wall/above-fridge",
  "garde-manger": "pantry",
  vanites: "bathroom-vanities",
  "vanites/24-pouces": "bathroom-vanities/24-inch",
  "vanites/30-pouces": "bathroom-vanities/30-inch",
  liquidation: "clearance",
};

// Collections INDEXABLES (index:true dans lib/shop/collections.ts) : seules
// celles-ci vont au sitemap. Les autres collections (index:false, navigation)
// sont noindex et exclues. À garder synchronisé avec les `index: true`.
const INDEXABLE_COLLECTIONS = new Set([
  "armoires-cuisine",
  "armoires-cuisine/bois",
  "garde-manger",
  "vanites",
  "vanites/24-pouces",
  "vanites/30-pouces",
  "liquidation",
]);
// Slugs de projets traduits. Clé = `${espace FR}/${slug FR}`.
const PROJECT_SLUG_EN = {
  "salle-de-bain/vanite-sur-mesure-laval": "custom-vanity-laval",
  "cuisine/cuisine-sur-mesure-montreal": "custom-kitchen-montreal",
  "cuisine/cuisine-sur-mesure-pierrefonds": "custom-kitchen-pierrefonds",
  "cuisine/cuisine-sur-mesure-plateau-mont-royal":
    "custom-kitchen-plateau-mont-royal",
  "cuisine/cuisine-sur-mesure-rive-sud": "custom-kitchen-south-shore",
  "commercial/amenagement-sur-mesure-bureau-centre-ville-montreal":
    "custom-office-downtown-montreal",
};

// FR à la racine (jamais /fr), EN sous /en avec segments + valeur d'espace traduits.
function localizedUrl(slug, locale) {
  if (locale !== "en") return `${SITE}${slug === "/" ? "" : slug}`;
  if (slug === "/") return `${SITE}/en`;
  const segs = slug.replace(/^\/+/, "").split("/");
  const head = segs[0];
  // Taxonomie boutique : sous-chemin FR -> EN (armoires-cuisine -> kitchen-cabinets).
  if (head === "boutique" && segs.length > 1) {
    const sub = segs.slice(1).join("/");
    if (BOUTIQUE_TAXON_EN[sub]) return `${SITE}/en/shop/${BOUTIQUE_TAXON_EN[sub]}`;
  }
  if ((head === "espaces" || head === "projets") && segs[1]) {
    // Slug de projet (3e segment) traduit AVANT l'espace (clé = espace FR).
    if (head === "projets" && segs[2]) {
      segs[2] = PROJECT_SLUG_EN[`${segs[1]}/${segs[2]}`] ?? segs[2];
    }
    segs[1] = SPACE_EN[segs[1]] ?? segs[1];
  }
  if (head === "services" && segs[1] === "renovation" && segs[2]) {
    segs[2] = RENOVATION_EN[segs[2]] ?? segs[2];
  }
  if (head === "materiaux" && segs[1]) {
    segs[1] = MATERIAL_EN[segs[1]] ?? segs[1];
  }
  segs[0] = EN_SEGMENT[head] ?? head;
  return `${SITE}/en/${segs.join("/")}`;
}

module.exports = {
  siteUrl: SITE,
  generateRobotsTxt: true,
  sitemapSize: 7000,

  exclude: [
    "/api/*",
    "/admin/*",
    "*/landing",
    "*/landing/*",
    "/_next/*",
    "/page-builder",
    "**/opengraph-image",
    "**/opengraph-image/*",
  ],

  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },

  transform: async (config, path) => {
    if (
      path.includes("/opengraph-image") ||
      path.includes("/api/") ||
      path.includes("/admin/") ||
      path.startsWith("/_next/")
    ) {
      return null;
    }

    const { locale, slug } = splitLocale(path);

    // Fiches produit : slug mot-clé TRADUIT (FR≠EN) que next-sitemap ne sait pas
    // apparier (il échange la locale en gardant le slug → hreflang croisés faux).
    // Émises séparément avec hreflang corrects par scripts/generate-image-sitemap.mjs.
    if (slug.startsWith("/boutique/produit/")) return null;

    // Landings : noindex, hors sitemap (toutes locales).
    if (slug === "/landing" || slug.startsWith("/landing/")) return null;

    // Ancienne structure boutique (/collections/*) supprimée : défensif si une
    // vieille URL traîne. noindex + hors sitemap.
    if (
      slug === "/boutique/collections" ||
      slug.startsWith("/boutique/collections/")
    ) {
      return null;
    }

    // Collections de NAVIGATION (index:false) : noindex, hors sitemap. Une
    // sous-page boutique qui est une collection mais pas indexable est exclue.
    if (slug.startsWith("/boutique/")) {
      const sub = slug.replace(/^\/boutique\//, "");
      if (BOUTIQUE_TAXON_EN[sub] && !INDEXABLE_COLLECTIONS.has(sub)) return null;
    }

    let priority = 0.7;
    let changefreq = "weekly";
    if (slug === "/") {
      priority = 1.0;
    } else if (slug.startsWith("/espaces/")) {
      priority = 0.9;
      changefreq = "monthly";
    } else if (slug === "/espaces") {
      priority = 0.8;
    } else if (slug.startsWith("/services/")) {
      priority = 0.85;
      changefreq = "monthly";
    } else if (slug === "/services") {
      priority = 0.8;
    } else if (slug === "/projets") {
      priority = 0.75;
    } else if (slug.startsWith("/projets/")) {
      priority = 0.7;
      changefreq = "monthly";
    } else if (slug.startsWith("/materiaux/")) {
      priority = 0.65;
      changefreq = "monthly";
    } else if (slug === "/materiaux") {
      priority = 0.7;
    }

    // EN = secondaire : légère décote de priorité.
    if (locale === "en") priority = Math.max(0.3, priority - 0.1);

    return {
      loc: localizedUrl(slug, locale),
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        {
          href: localizedUrl(slug, "fr"),
          hreflang: "fr-CA",
          hrefIsAbsolute: true,
        },
        {
          href: localizedUrl(slug, "en"),
          hreflang: "en-CA",
          hrefIsAbsolute: true,
        },
        {
          href: localizedUrl(slug, "fr"),
          hreflang: "x-default",
          hrefIsAbsolute: true,
        },
      ],
    };
  },
};
