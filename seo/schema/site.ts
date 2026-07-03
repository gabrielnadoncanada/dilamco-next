export const SITE = {
  url: "https://dilamco.com",
  name: "Dilamco",
  legalName: "Dilamco inc.",
  telephone: "+1-514-820-0773",
  email: "info@dilamco.com",
  logoUrl: "https://dilamco.com/logo.png",
  imageUrl: "https://dilamco.com/og-default.jpg",
  address: {
    streetAddress: "18625 Rue Larocque",
    addressLocality: "Pierrefonds-Roxboro",
    addressRegion: "QC",
    postalCode: "H9K 1P1",
    addressCountry: "CA",
  },
  // Coordonnées de l'adresse d'affaires (cohérentes avec le GBP / sameAs Google Maps).
  // NB : showroom à Dorval, entrepôt à Rigaud — pas d'atelier de fabrication local.
  geo: {
    latitude: 45.4536963,
    longitude: -73.892443,
  },
  // Heures d'ouverture (sur rendez-vous). Format Schema.org dayOfWeek.
  openingHours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  // URL de la fiche Google Maps (pour hasMap).
  mapUrl:
    "https://www.google.com/maps/place/Dilamco+Construction/@45.4536963,-73.892443,624m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4cc93ba3f4382f91:0x1045c40def446823!8m2!3d45.4536963!4d-73.892443!16s%2Fg%2F11ghnfzc26",
  // Dimensions du logo (pour ImageObject dans le schema).
  logo: {
    url: "https://dilamco.com/logo.png",
    width: 512,
    height: 512,
  },
  areasServed: [
    "Montréal",
    "Pierrefonds-Roxboro",
    "Ouest-de-l'Île",
    "Laval",
    "Rive-Nord",
    "Rive-Sud",
  ],
  sameAs: [
    "https://www.google.com/maps/place/Dilamco+Construction/@45.4536963,-73.892443,624m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4cc93ba3f4382f91:0x1045c40def446823!8m2!3d45.4536963!4d-73.892443!16s%2Fg%2F11ghnfzc26",
    "https://www.facebook.com/dilamco",
    "https://www.linkedin.com/company/dilamco-inc-/",
  ],
  // Avis Google réels (fiche GBP Dilamco). Lien public vers la fiche.
  googleReviewsUrl: "https://www.google.com/maps?cid=1172558842127738915",
  reviews: {
    ratingValue: 5,
    reviewCount: 11,
    // Avis avec texte affichés sur le site (extraits de la fiche Google).
    items: [
      {
        author: "Mélina Desbiens",
        rating: 5,
        datePublished: "2025-12-15",
        body: "Excellent contracteur. Ils ont fait mes planchers et autres projets et nous sommes très satisfaites. Je recommande 100%.",
      },
      {
        author: "Jean-Philippe Hébert",
        rating: 5,
        datePublished: "2026-03-15",
        body: "L'expérience client au cœur des services de Dilamco Construction !",
      },
    ],
  },
} as const;
