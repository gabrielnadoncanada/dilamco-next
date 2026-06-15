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
};

/**
 * Convertit un chemin interne (ex. "/espaces/cuisine") en URL externe localisée.
 * FR : inchangé (racine). EN : premier segment traduit + préfixe /en.
 */
export function localizePath(path: string, locale: "fr" | "en"): string {
  if (locale === "fr") return path;
  if (!path || path === "/") return "/en";
  const segs = path.replace(/^\/+/, "").split("/");
  segs[0] = EN_SEGMENT[segs[0]] ?? segs[0];
  return `/en/${segs.join("/")}`;
}
