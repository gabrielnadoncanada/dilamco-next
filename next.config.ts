/** @type {import('next').NextConfig} */

const redirectRules = [
  // Legacy language / home pages
  // NB: pas de règle "/en" -> "/" : /en est désormais la vraie home anglaise.
  { source: "/en/home", destination: "/en" },
  { source: "/fr", destination: "/" },
  { source: "/en/accueil-english", destination: "/en" },

  // Contact / about
  { source: "/en/contact-us", destination: "/en/contact" },
  { source: "/about-us", destination: "/a-propos" },
  { source: "/en/about-us", destination: "/en/a-propos" },
  { source: "/en/about-us.aspx", destination: "/en/a-propos" },
  { source: "/fr/a-propos", destination: "/a-propos" },

  // Main projects / portfolio
  { source: "/projects", destination: "/projets" },
  { source: "/en/past-projects.aspx", destination: "/en/projets" },
  { source: "/fr/projets-accomplis.aspx", destination: "/projets" },

  // Project category: wardrobes / walk-ins
  {
    source: "/en/projects/category/wardrobes-and-walk-ins",
    destination: "/en/espaces/walk-in",
  },
  {
    source: "/en/projects/category/wardrobes-and-walk-ins/feed",
    destination: "/en/espaces/walk-in",
  },

  // Old project detail pages -> closest current hub
  {
    source: "/project/cuisine-contemporaine-laval",
    destination: "/projets",
  },
  {
    source: "/project/cuisine-lumineuse-et-fonctionnelle",
    destination: "/projets",
  },

  // Closets / cabinets
  {
    source: "/custom-cabinets-closets",
    destination: "/espaces/walk-in",
  },
  {
    source: "/en/custom-cabinets-closets",
    destination: "/en/espaces/walk-in",
  },
  {
    source: "/fr/armoires-placards-sur-mesure",
    destination: "/espaces/walk-in",
  },

  // Residential renovation generic
  {
    source: "/fr/residentiel.aspx",
    destination: "/services/renovation",
  },
  {
    source: "/residential-construction-renovation",
    destination: "/services/renovation",
  },
  {
    source: "/en/residential-construction-renovation",
    destination: "/en/services/renovation",
  },
  {
    source: "/fr/construction-renovation-residentielle",
    destination: "/services/renovation",
  },
  {
    source: "/en/residential.aspx",
    destination: "/en/services/renovation",
  },

  // Residential sub-services
  {
    source: "/residential/home-extensions",
    destination: "/services/renovation/agrandissement-de-maison",
  },
  {
    source: "/fr/residentiel/rallonges-maison",
    destination: "/services/renovation/agrandissement-de-maison",
  },
  {
    source: "/residential/flooring-installation",
    destination: "/services/renovation/plancher",
  },
  {
    source: "/en/residential/flooring-installation",
    destination: "/en/services/renovation/flooring",
  },
  {
    source: "/fr/residentiel/installation-planchers",
    destination: "/services/renovation/plancher",
  },
  {
    source: "/residential/kitchen-bathroom-renovations",
    destination: "/services/renovation/cuisine",
  },
  {
    source: "/en/residential/kitchen-bathroom-renovations",
    destination: "/en/services/renovation/kitchen",
  },
  {
    source: "/fr/residentiel/renovations-cuisine-salle-de-bain",
    destination: "/services/renovation/salle-de-bain",
  },

  // Anciennes URLs EN avec slug FR -> nouveau slug EN traduit (cuisine->kitchen…)
  {
    source: "/en/services/renovation/cuisine",
    destination: "/en/services/renovation/kitchen",
  },
  {
    source: "/en/services/renovation/salle-de-bain",
    destination: "/en/services/renovation/bathroom",
  },
  {
    source: "/en/services/renovation/plancher",
    destination: "/en/services/renovation/flooring",
  },
  {
    source: "/en/services/renovation/agrandissement-de-maison",
    destination: "/en/services/renovation/home-extension",
  },

  // Doors / windows -> no exact page in new sitemap, closest renovation hub
  {
    source: "/residential/doors-windows",
    destination: "/services/renovation",
  },
  {
    source: "/en/residential/doors-windows",
    destination: "/en/services/renovation",
  },
  {
    source: "/fr/residentiel/portes-fenetres",
    destination: "/services/renovation",
  },

  // Commercial
  {
    source: "/commercial-construction-renovation",
    destination: "/espaces/commercial",
  },
  {
    source: "/en/commercial-construction-renovation",
    destination: "/en/espaces/commercial",
  },
  {
    source: "/en/commercial.aspx",
    destination: "/en/espaces/commercial",
  },
  {
    source: "/fr/construction-renovation-commerciale",
    destination: "/espaces/commercial",
  },

  // Localized legacy path
  {
    source: "/montreal/residential-construction.aspx",
    destination: "/services/renovation",
  },

  {
    source: "/realisation/signature-bouleau/",
    destination: "/projets",
  },
  {
    source: "/realisation/blanc-urbain/",
    destination: "/projets",
  },
  {
    source: "/realisation/purete-doree/",
    destination: "/projets",
  },
  {
    source: "/realisations",
    destination: "/projets",
  },
  {
    source: "/spaces",
    destination: "/espaces/cuisine",
  },
  {
    source: "/realisation/harmonie-blanche",
    destination: "/projets",
  },
  {
    source: "/realisation/elegance-classique",
    destination: "/projets",
  },
  {
    source: "/space/salles-de-bain",
    destination: "/espaces/salle-de-bain",
  },
  {
    source: "/space/garde-robes-et-walk-ins",
    destination: "/espaces/walk-in",
  },
  // Anciennes catégories /space/* encore vues dans Search Console
  {
    source: "/space/cuisines",
    destination: "/espaces/cuisine",
  },
  {
    source: "/space/salles-de-lavage",
    destination: "/espaces/salle-de-lavage",
  },
  // Filet de sécurité : toute ancienne fiche /realisation/* -> hub projets
  // (couvre chene-moderne et tout slug non listé explicitement)
  {
    source: "/realisation/:slug*",
    destination: "/projets",
  },
  {
    source: '/wp-content/uploads/2025/09/Outlook-A-close-up.png',
    destination: '/images/Outlook-A-close-up.png',
  },
];

function expandRedirects(rules: typeof redirectRules) {
  const expanded = [];

  for (const rule of rules) {
    expanded.push({
      source: rule.source,
      destination: rule.destination,
      permanent: true,
    });

    if (rule.source !== "/" && !rule.source.endsWith("/")) {
      expanded.push({
        source: `${rule.source}/`,
        destination: rule.destination,
        permanent: true,
      });
    }
  }

  return expanded;
}

// Headers de sécurité appliqués à toutes les routes.
// NB : pas de Content-Security-Policy stricte ici (risque de casser GTM/GA/Vercel) ;
// à traiter dans une passe dédiée avec nonce. HSTS complété (includeSubDomains + preload).
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return [
      // Canonicalisation : force www.dilamco.com -> dilamco.com (non-www, https)
      // 308 permanent. Redondant avec le réglage "primary domain" de Vercel,
      // mais garde le fix dans le repo et le rend résilient si le dashboard change.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.dilamco.com" }],
        destination: "https://dilamco.com/:path*",
        permanent: true,
      },
      ...expandRedirects(redirectRules),
    ];
  },
};

const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

module.exports = withNextIntl(nextConfig);