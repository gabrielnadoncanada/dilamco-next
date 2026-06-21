// Source unique de vérité pour la traduction des segments d'URL (FR interne -> EN externe).
// Doit rester synchronisée avec les pathnames de i18n/routing.ts.
// Seul le PREMIER segment se traduit ; les valeurs dynamiques (cuisine, slug…) passent.
const EN_SEGMENT: Record<string, string> = {
  espaces: "spaces",
  projets: "projects",
  materiaux: "materials",
  "a-propos": "about",
  processus: "process",
  "politique-de-confidentialite": "privacy-policy",
  "conditions-dutilisation": "terms-of-use",
  boutique: "shop",
};

// Valeurs d'espace traduites (interne FR -> externe EN). Enum borné (6).
export const SPACE_EN: Record<string, string> = {
  cuisine: "kitchen",
  "salle-de-bain": "bathroom",
  "walk-in": "walk-in",
  "salle-de-lavage": "laundry-room",
  "sous-sol": "basement",
  commercial: "commercial",
};

// Valeurs de type de rénovation traduites (interne FR -> externe EN). Enum borné (4).
export const RENOVATION_EN: Record<string, string> = {
  cuisine: "kitchen",
  "salle-de-bain": "bathroom",
  plancher: "flooring",
  "agrandissement-de-maison": "home-extension",
};

// Valeurs de slug matériau traduites (interne FR -> externe EN). Enum borné (7).
export const MATERIAL_EN: Record<string, string> = {
  contreplaque: "plywood",
  "bois-massif": "solid-wood",
  comparatif: "comparison",
  couleurs: "colours",
  quincaillerie: "hardware",
  mdf: "mdf",
  melamine: "melamine",
};

// Slugs de projets traduits. Clé = `${espace FR}/${slug FR}` (le slug interne
// reste FR ; seule l'URL EN est traduite). Enum borné (1 par projet publié).
export const PROJECT_SLUG_EN: Record<string, string> = {
  "salle-de-bain/vanite-sur-mesure-laval": "custom-vanity-laval",
  "cuisine/cuisine-sur-mesure-montreal": "custom-kitchen-montreal",
  "cuisine/cuisine-sur-mesure-pierrefonds": "custom-kitchen-pierrefonds",
  "cuisine/cuisine-sur-mesure-plateau-mont-royal":
    "custom-kitchen-plateau-mont-royal",
  "cuisine/cuisine-sur-mesure-rive-sud": "custom-kitchen-south-shore",
  "commercial/amenagement-sur-mesure-bureau-centre-ville-montreal":
    "custom-office-downtown-montreal",
};

// Les espaces apparaissent comme 2e segment sous /espaces et /projets.
const SPACE_PARENTS = new Set(["espaces", "projets"]);

/**
 * Convertit un chemin interne (ex. "/espaces/cuisine") en URL externe localisée.
 * FR : inchangé (racine). EN : premier segment traduit + préfixe /en.
 */
export function localizePath(path: string, locale: "fr" | "en"): string {
  if (locale === "fr") return path;
  if (!path || path === "/") return "/en";
  const segs = path.replace(/^\/+/, "").split("/");
  const head = segs[0];
  // Traduit le slug de projet (3e segment) sous /projets — AVANT l'espace,
  // car la clé utilise l'espace FR (segs[1] encore non traduit).
  if (head === "projets" && segs[1] && segs[2]) {
    segs[2] = PROJECT_SLUG_EN[`${segs[1]}/${segs[2]}`] ?? segs[2];
  }
  // Traduit la valeur d'espace (2e segment) sous /espaces et /projets.
  if (SPACE_PARENTS.has(head) && segs[1]) {
    segs[1] = SPACE_EN[segs[1]] ?? segs[1];
  }
  // Traduit le type de rénovation (3e segment) sous /services/renovation.
  if (head === "services" && segs[1] === "renovation" && segs[2]) {
    segs[2] = RENOVATION_EN[segs[2]] ?? segs[2];
  }
  // Traduit le slug matériau (2e segment) sous /materiaux.
  if (head === "materiaux" && segs[1]) {
    segs[1] = MATERIAL_EN[segs[1]] ?? segs[1];
  }
  segs[0] = EN_SEGMENT[head] ?? head;
  return `/en/${segs.join("/")}`;
}
