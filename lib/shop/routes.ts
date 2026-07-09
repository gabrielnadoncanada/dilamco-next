// Toute la boutique vit sous /boutique dans l'app dilamco-next (même domaine).
const BASE = "/boutique";

export const routes = {
  home: BASE,
  collections: `${BASE}/collections`,
  /** Entrée principale du catalogue (pilier taxonomie « Armoires de cuisine »). */
  catalogue: `${BASE}/armoires-cuisine`,
  collection: (slug: string) => `${BASE}/collections/${slug}`,
  subcollection: (slug: string, sub: string) =>
    `${BASE}/collections/${slug}/${sub}`,
  finishes: `${BASE}/finitions`,
  returns: `${BASE}/conditions-de-retour`,
  quote: `${BASE}/soumission`,
  configurator: `${BASE}/configurateur`,
  package: (slug: string) => `${BASE}/forfait/${slug}`,
  product: (id: string) => `${BASE}/produit/${encodeURIComponent(id)}`,
} as const;

/**
 * Helpers historiques — repointés vers la TAXONOMIE (les /collections/* sont
 * noindex + hors sitemap ; ne plus y envoyer de liens internes = culs-de-sac).
 */
export const collectionsFilter = {
  family: (_value: string) => routes.catalogue,
  color: (_value: string) => routes.catalogue,
  corner: `${BASE}/armoires-cuisine/coin`,
} as const;

export const pathPrefixes = {
  product: `${BASE}/produit`,
} as const;
