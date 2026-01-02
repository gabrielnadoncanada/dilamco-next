export const SITE = {
  url: "https://dilamco.com",
  name: "Dilamco",
  legalName: "Dilamco inc.",
  // TODO: remplis ces champs une fois (ou laisse vide si tu ne veux pas mentir)
  telephone: "", // ex: "+1-514-000-0000"
  email: "", // ex: "info@dilamco.com"
  logoUrl: "https://dilamco.com/logo.png", // idéalement une image publique
  imageUrl: "https://dilamco.com/og-default.jpg",
  address: {
    streetAddress: "",
    addressLocality: "Montréal",
    addressRegion: "QC",
    postalCode: "",
    addressCountry: "CA",
  },
  areasServed: ["Montréal", "Laval", "Rive-Sud", "Québec"],
  sameAs: [
    // liens sociaux si existants
    // "https://www.facebook.com/...",
    // "https://www.instagram.com/...",
  ],
} as const;
