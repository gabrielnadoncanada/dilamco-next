/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://dilamco.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,

  exclude: [
    "/api/*",
    "/admin/*",
    "/landing",
    "/landing/*",
    "/_next/*",
    "/page-builder",
    "**/opengraph-image",
    "**/opengraph-image/*",
  ],

  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
    ],
  },

  transform: async (config, path) => {
    if (
      path.includes("/opengraph-image") ||
      path.startsWith("/api/") ||
      path.startsWith("/admin/") ||
      path.startsWith("/_next/") ||
      path === "/landing" ||
      path.startsWith("/landing/")
    ) {
      return null;
    }

    let priority = 0.7;
    let changefreq = "weekly";

    if (path === "/") {
      priority = 1.0;
      changefreq = "weekly";
    } else if (path.startsWith("/espaces/")) {
      priority = 0.9;
      changefreq = "monthly";
    } else if (path === "/espaces") {
      priority = 0.8;
      changefreq = "weekly";
    } else if (path.startsWith("/services/")) {
      priority = 0.85;
      changefreq = "monthly";
    } else if (path === "/services") {
      priority = 0.8;
      changefreq = "weekly";
    } else if (path === "/projets") {
      priority = 0.75;
      changefreq = "weekly";
    } else if (path === "/guides") {
      priority = 0.7;
      changefreq = "weekly";
    } else if (path.startsWith("/materiaux/")) {
      priority = 0.65;
      changefreq = "monthly";
    } else if (path === "/materiaux") {
      priority = 0.7;
      changefreq = "weekly";
    } else if (path === "/contact" || path === "/a-propos" || path === "/processus") {
      priority = 0.7;
      changefreq = "weekly";
    }

    return {
      loc: path,
      changefreq,
      priority,
    };
  },
};