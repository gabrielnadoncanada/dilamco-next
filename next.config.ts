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

  // Récupération de backlinks — anciennes pages .aspx encore liées mais en 404.
  // Audit backlinks DataForSEO 2026-06-28 : ~68 backlinks pointaient vers ces
  // pages mortes (le jus de lien était perdu). 301 vers la page existante la
  // plus pertinente. (/fr/residentiel.aspx, /en/about-us.aspx, /en/residential
  // .aspx, /en/commercial.aspx sont déjà couverts plus bas/ailleurs.)
  { source: "/en/contact.aspx", destination: "/en/contact" },
  { source: "/fr/nous-joindre.aspx", destination: "/contact" },
  { source: "/en/faqs.aspx", destination: "/en/contact" },
  { source: "/fr/faqs.aspx", destination: "/contact" },
  { source: "/en/news.aspx", destination: "/en" },
  { source: "/fr/disaster-recovery.aspx", destination: "/services/renovation" },
  { source: "/fr/commercial.aspx", destination: "/espaces/commercial" },

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

  // Anciennes URLs EN matériaux avec slug FR -> nouveau slug EN traduit
  // (contreplaque->plywood…). mdf et melamine inchangés (pas de redirect).
  {
    source: "/en/materials/contreplaque",
    destination: "/en/materials/plywood",
  },
  {
    source: "/en/materials/bois-massif",
    destination: "/en/materials/solid-wood",
  },
  {
    source: "/en/materials/comparatif",
    destination: "/en/materials/comparison",
  },
  {
    source: "/en/materials/couleurs",
    destination: "/en/materials/colours",
  },
  {
    source: "/en/materials/quincaillerie",
    destination: "/en/materials/hardware",
  },

  // Anciennes URLs EN projets avec slug FR -> nouveau slug EN traduit.
  {
    source: "/en/projects/bathroom/vanite-sur-mesure-laval",
    destination: "/en/projects/bathroom/custom-vanity-laval",
  },
  {
    source: "/en/projects/kitchen/cuisine-sur-mesure-montreal",
    destination: "/en/projects/kitchen/custom-kitchen-montreal",
  },
  {
    source: "/en/projects/kitchen/cuisine-sur-mesure-pierrefonds",
    destination: "/en/projects/kitchen/custom-kitchen-pierrefonds",
  },
  {
    source: "/en/projects/kitchen/cuisine-sur-mesure-plateau-mont-royal",
    destination: "/en/projects/kitchen/custom-kitchen-plateau-mont-royal",
  },
  {
    source: "/en/projects/kitchen/cuisine-sur-mesure-rive-sud",
    destination: "/en/projects/kitchen/custom-kitchen-south-shore",
  },
  {
    source:
      "/en/projects/commercial/amenagement-sur-mesure-bureau-centre-ville-montreal",
    destination: "/en/projects/commercial/custom-office-downtown-montreal",
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
  // Anciennes pages boutique /collections (supprimées : remplacées par les
  // collections unifiées /armoires-cuisine, /vanites…) -> pilier cuisine.
  {
    source: "/boutique/collections",
    destination: "/boutique/armoires-cuisine",
  },
  {
    source: "/boutique/collections/:slug*",
    destination: "/boutique/armoires-cuisine",
  },
  {
    source: "/en/shop/collections",
    destination: "/en/shop/kitchen-cabinets",
  },
  {
    source: "/en/shop/collections/:slug*",
    destination: "/en/shop/kitchen-cabinets",
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
  images: {
    // BYPASS de l'Image Optimization Vercel (quota payant → 402
    // OPTIMIZED_IMAGE_REQUEST_PAYMENT_REQUIRED qui cassait toutes les images).
    // `next/image` sert désormais les fichiers tels quels (déjà en WebP). Les
    // options ci-dessous (formats/cache/patterns) deviennent inertes tant que
    // `unoptimized` est vrai ; gardées pour réactivation si on change de loader.
    unoptimized: true,
    // AVIF d'abord (≈20-30 % plus léger que WebP), WebP en repli — le
    // navigateur ne reçoit jamais le PNG/JPG source.
    formats: ["image/avif", "image/webp"],
    // Les renders catalogue sont immuables (régénérés sous le même nom
    // seulement si le produit change) : cache CDN/navigateur 1 an.
    minimumCacheTTL: 31536000,
    // Next 16 refuse par défaut les images locales avec query string. Les
    // renders catalogue portent un cache-buster `?v=<hash>` (voir
    // lib/shop/render-manifest.json) : on autorise explicitement ces chemins
    // locaux, query comprise.
    localPatterns: [
      { pathname: "/assets/**", search: "" },
      { pathname: "/assets/products/renders/**" },
      { pathname: "/images/**" },
    ],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
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
      // Site frère retiré : entrepreneurgeneralmontreal.com fondu dans dilamco.
      // Audit backlinks 2026-06-28 : il portait 146 liens de navigation sitewide
      // (concentration anormale) sans valeur propre (36 backlinks, spam score 50).
      // Tout le domaine -> home dilamco (301). S'active dès que le domaine (apex +
      // www) est rattaché au projet dilamco-next sur Vercel — le DNS pointe déjà
      // vers Vercel, donc aucune modif DNS requise. Pas de :path* : on envoie tout
      // vers la home pour éviter de créer des 404 (les chemins ne correspondent pas).
      {
        source: "/:path*",
        has: [{ type: "host", value: "entrepreneurgeneralmontreal.com" }],
        destination: "https://dilamco.com/",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.entrepreneurgeneralmontreal.com" }],
        destination: "https://dilamco.com/",
        permanent: true,
      },
      ...expandRedirects(redirectRules),
    ];
  },
};

const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

module.exports = withNextIntl(nextConfig);