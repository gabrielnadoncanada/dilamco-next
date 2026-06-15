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

// FR à la racine (jamais /fr), EN sous /en.
function localizedUrl(slug, locale) {
  if (locale === "en") return `${SITE}/en${slug === "/" ? "" : slug}`;
  return `${SITE}${slug === "/" ? "" : slug}`;
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

    // Landings : noindex, hors sitemap (toutes locales).
    if (slug === "/landing" || slug.startsWith("/landing/")) return null;

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
