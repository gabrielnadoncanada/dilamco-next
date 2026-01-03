/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://dilamco.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,

  exclude: [
    "/api/*",
    "/admin/*",
    "/_next/*",
    "**/opengraph-image",
    "**/opengraph-image/*",
  ],

  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
    ],
  },

  transform: async (config, path) => {
    // Exclure les images Open Graph (pas des pages HTML)
    if (path.includes("/opengraph-image")) {
      return null; // Exclure du sitemap
    }

    let priority = 0.7;
    let changefreq = "weekly";

    // Pages money (priorité maximale)
    if (path.startsWith("/espaces/")) {
      priority = 0.9;
      changefreq = "monthly";
    }
    // Services (très importantes)
    else if (path.startsWith("/services/")) {
      priority = 0.85;
      changefreq = "monthly";
    }
    // Projets (contenu riche)
    else if (path.startsWith("/projets/")) {
      priority = 0.8;
      changefreq = "weekly";
    }
    // Pages locales (SEO local)
    else if (path.startsWith("/montreal/") || path.startsWith("/laval/") || path.startsWith("/rive-sud/")) {
      priority = 0.75;
      changefreq = "monthly";
    }
    // Guides (contenu éducatif)
    else if (path.startsWith("/guides/")) {
      priority = 0.6;
      changefreq = "monthly";
    }
    // Page d'accueil
    else if (path === "/") {
      priority = 1.0;
      changefreq = "weekly";
    }
    // Pages secondaires
    else if (path.startsWith("/comparatifs/") || path.startsWith("/materiaux/")) {
      priority = 0.65;
      changefreq = "monthly";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
