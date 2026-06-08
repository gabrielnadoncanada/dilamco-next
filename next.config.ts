/** @type {import('next').NextConfig} */

const redirectRules = [
  // Legacy language / home pages
  { source: "/en/home", destination: "/" },
  { source: "/en", destination: "/" },
  { source: "/fr", destination: "/" },
  { source: "/en/accueil-english", destination: "/" },

  // Contact / about
  { source: "/en/contact-us", destination: "/contact" },
  { source: "/about-us", destination: "/a-propos" },
  { source: "/en/about-us", destination: "/a-propos" },
  { source: "/en/about-us.aspx", destination: "/a-propos" },
  { source: "/fr/a-propos", destination: "/a-propos" },

  // Main projects / portfolio
  { source: "/projects", destination: "/projets" },
  { source: "/en/past-projects.aspx", destination: "/projets" },
  { source: "/fr/projets-accomplis.aspx", destination: "/projets" },

  // Project category: wardrobes / walk-ins
  {
    source: "/en/projects/category/wardrobes-and-walk-ins",
    destination: "/espaces/walk-in",
  },
  {
    source: "/en/projects/category/wardrobes-and-walk-ins/feed",
    destination: "/espaces/walk-in",
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
    destination: "/espaces/walk-in",
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
    destination: "/services/renovation",
  },
  {
    source: "/fr/construction-renovation-residentielle",
    destination: "/services/renovation",
  },
  {
    source: "/en/residential.aspx",
    destination: "/services/renovation",
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
    destination: "/services/renovation/plancher",
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
    destination: "/services/renovation/cuisine",
  },
  {
    source: "/fr/residentiel/renovations-cuisine-salle-de-bain",
    destination: "/services/renovation/salle-de-bain",
  },

  // Doors / windows -> no exact page in new sitemap, closest renovation hub
  {
    source: "/residential/doors-windows",
    destination: "/services/renovation",
  },
  {
    source: "/en/residential/doors-windows",
    destination: "/services/renovation",
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
    destination: "/espaces/commercial",
  },
  {
    source: "/en/commercial.aspx",
    destination: "/espaces/commercial",
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

const nextConfig = {
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

module.exports = nextConfig;