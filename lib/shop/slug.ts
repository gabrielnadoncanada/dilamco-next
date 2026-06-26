// Slugs produit mot-clé, bilingues et STABLES (= URLs permanentes).
//
// Le slug est dérivé du NOM produit localisé (déjà riche en mots-clés :
// « Armoire de cuisine du bas avec 1 tiroir et 1 porte (18") ») plutôt que du
// code SKU. On retire les mots vides, on translittère les accents et on rend la
// dimension lisible (« (18") » → « 18-pouces » / « 18-inch »). La dédup
// (unicité globale par locale) vit dans models.ts ; ici, juste la dérivation.

type SlugLocale = "fr" | "en";

// Mots vides retirés du slug (articles/prépositions sans valeur SEO). Les
// chiffres (« 1 tiroir ») sont conservés : ils portent du sens.
const STOP_FR = new Set([
  "de", "du", "des", "d", "la", "le", "les", "l", "un", "une",
  "et", "avec", "a", "au", "aux", "pour", "à",
]);
const STOP_EN = new Set([
  "the", "a", "an", "of", "with", "and", "for", "to", "in", "on",
]);

// Locutions-clés où un mot vide doit être CONSERVÉ (« salle de bain » = terme de
// tête à 10K-100K ; cohérent avec /vanites et la taxonomie). Le « de » y reste.
const PROTECT_FR: string[][] = [
  ["salle", "de", "bain"],
  ["salle", "de", "lavage"],
];

/** Translittère, minuscule, retire les mots vides (hors locutions protégées). */
function slugifyWords(s: string, stop: Set<string>, protect: string[][]): string {
  const words = s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // accents combinants
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  const keep = words.map((w) => !stop.has(w));
  // Ré-autorise les mots vides faisant partie d'une locution protégée.
  for (const phrase of protect) {
    for (let i = 0; i + phrase.length <= words.length; i += 1) {
      if (phrase.every((p, k) => words[i + k] === p)) {
        for (let k = 0; k < phrase.length; k += 1) keep[i + k] = true;
      }
    }
  }
  return words.filter((_, i) => keep[i]).join("-");
}

/**
 * Slug mot-clé d'un nom produit localisé. La présence d'un pouce (″/")
 * déclenche un suffixe d'unité lisible (`-pouces` / `-inch`) une seule fois.
 */
export function productSlug(name: string, locale: SlugLocale): string {
  const stop = locale === "en" ? STOP_EN : STOP_FR;
  const protect = locale === "en" ? [] : PROTECT_FR;
  const unit = locale === "en" ? "inch" : "pouces";
  const hadInch = /[″"]/.test(name);
  // Retire les marques de pouce, transforme les séparateurs de dimension en « x ».
  const cleaned = name.replace(/[″"]/g, "").replace(/[×*]/g, " x ");
  let slug = slugifyWords(cleaned, stop, protect);
  if (hadInch && slug) slug = `${slug}-${unit}`;
  return slug || "produit";
}
