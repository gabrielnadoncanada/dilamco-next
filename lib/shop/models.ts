/**
 * Couche « modèle de variantes » de la boutique.
 *
 * Le catalogue source (`catalog-products.json`) est PLAT : un meuble offert en
 * deux finitions = deux lignes (`S8-DB12` blanc / `S8-DB12-muf` chêne), la
 * variance étant encodée dans le suffixe de code. Cette couche regroupe ces
 * lignes en `ProductModel` (l'entité SEO = 1 fiche/URL) porteurs de `Variant`
 * (prix/SKU/render propres). Tout le reste de la boutique (grille, fiche,
 * sitemap, params) doit consommer `models`, plus jamais `code.endsWith("-muf")`.
 *
 * POLITIQUE D'URL (réversible ici) :
 *   - profil + couleur   → axes IN-PAGE (sélecteurs sur la même fiche) ;
 *   - dimensions/largeur → fiches SÉPARÉES (valeur SEO « armoire 30 pouces »,
 *     pas du duplicate content). Concrètement : on regroupe par CODE DE BASE
 *     (strip `-muf`), ce qui replie les jumeaux de finition mais garde chaque
 *     largeur comme modèle distinct. Pour replier aussi les largeurs un jour,
 *     changer `modelKey()` (et retirer la largeur des fiches séparées).
 */

import { products, galleryFor } from "./products";
import { localizeProductLabel } from "./catalog-i18n";
import { productSlug } from "./slug";
import type {
  OptionAxis,
  OptionValue,
  Product,
  ProductModel,
  Variant,
} from "./types";

/** Axes rendus comme sélecteurs in-page (même URL). Renverser la politique = éditer ici. */
export const IN_PAGE_AXES = ["profil", "couleur"] as const;
export type InPageAxis = (typeof IN_PAGE_AXES)[number];

/** Code de base d'un meuble : sans le suffixe de finition `-muf`. Clé de regroupement. */
export function baseCode(code: string): string {
  return code.endsWith("-muf") ? code.slice(0, -"-muf".length) : code;
}

const COLOR_VALUE_ID: Record<string, string> = {
  "Blanc Pur": "blanc",
  "Chêne blanc": "chene",
  "Bleu marin": "bleu",
};

/** Coordonnée « couleur » d'un produit, dérivée de sa finition. */
function colourValue(p: Product): OptionValue {
  const color = p.colors[0] ?? "Blanc Pur";
  return { id: COLOR_VALUE_ID[color] ?? "blanc", label: color };
}

interface ProfilOption {
  id: string;
  label: string;
  /** Supplément de prix vs le prix catalogue de la couleur (0 par défaut). */
  priceDelta?: number;
}

/**
 * DISPONIBILITÉ DES PROFILS DE PORTE PAR COULEUR (config éditable — c'est la
 * « donnée » tant que le xlsx ne fournit pas de SKU par profil).
 *
 * Réalité actuelle : tout se vend en Shaker 1 po uniquement (le 3 po est
 * retiré de la vente depuis 2026-07 — pour le réactiver, remettre
 * `{ id: "shaker-3", label: "Shaker 3 po" }` sur les couleurs concernées ;
 * ses renders `face@shaker-3` existent toujours dans le manifest). Le profil
 * est une option par-dessus le MÊME caisson (même code catalogue / render) —
 * d'où des variantes qui partagent un `code` mais ont un `id` distinct.
 * `priceDelta` = supplément vs le prix catalogue de la couleur.
 */
const PROFIL_BY_COLOR: Record<string, ProfilOption[]> = {
  blanc: [{ id: "shaker-1", label: "Shaker 1 po" }],
  chene: [{ id: "shaker-1", label: "Shaker 1 po" }],
};
const DEFAULT_PROFILS: ProfilOption[] = [{ id: "shaker-1", label: "Shaker 1 po" }];

const PROFIL_LABEL: Record<string, string> = {
  "shaker-1": "Shaker 1 po",
  "shaker-3": "Shaker 3 po",
  slab: "Slab",
};
const COLOR_LABEL: Record<string, string> = {
  blanc: "Blanc Pur",
  chene: "Chêne blanc",
  bleu: "Bleu marin",
};
const AXIS_LABEL: Record<string, string> = {
  profil: "Profil de porte",
  couleur: "Couleur",
};

/** Étend une ligne couleur du catalogue en ses variantes profil (config). */
function expandVariants(group: Product[]): Variant[] {
  const out: Variant[] = [];
  for (const p of group) {
    const colour = colourValue(p).id;
    const profils = PROFIL_BY_COLOR[colour] ?? DEFAULT_PROFILS;
    for (const pr of profils) {
      out.push({
        id: `${p.code}__${pr.id}`,
        code: p.code,
        sku: p.sku,
        options: { profil: pr.id, couleur: colour },
        price: p.price + (pr.priceDelta ?? 0),
        colors: p.colors,
        // Galerie PROPRE au profil : shaker-3 pointe sur son rendu dédié
        // (`face@shaker-3`), shaker-1 sur la `face`. Repli sur la face par défaut
        // si le rendu du profil n'existe pas encore.
        gallery: galleryFor(p.code, pr.id) ?? p.gallery,
        w: p.w,
        h: p.h,
        d: p.d,
        available: p.visible && p.price > 0,
      });
    }
  }
  return out;
}

/** Construit les axes à partir des valeurs d'options réellement présentes. */
function axesFromVariants(variants: Variant[]): OptionAxis[] {
  const labelsByAxis: Record<string, Record<string, string>> = {
    profil: PROFIL_LABEL,
    couleur: COLOR_LABEL,
  };
  const axes: OptionAxis[] = [];
  for (const key of IN_PAGE_AXES) {
    const ids: string[] = [];
    for (const v of variants) {
      const id = v.options[key];
      if (id && !ids.includes(id)) ids.push(id);
    }
    if (ids.length === 0) continue;
    const labels = labelsByAxis[key] ?? {};
    const values: OptionValue[] = ids.map((id) => ({
      id,
      label: labels[id] ?? id,
    }));
    axes.push({ key, label: AXIS_LABEL[key] ?? key, values });
  }
  return axes;
}

/** Discriminant stable (issu du SKU) pour départager deux slugs identiques. */
function skuKey(code: string): string {
  return code.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

/** Garantit l'unicité d'un slug dans sa locale ; collision → suffixe SKU stable. */
function uniqueSlug(base: string, seen: Set<string>, key: string): string {
  if (!seen.has(base)) {
    seen.add(base);
    return base;
  }
  let candidate = `${base}-${key}`;
  let i = 2;
  while (seen.has(candidate)) candidate = `${base}-${key}-${i++}`;
  seen.add(candidate);
  return candidate;
}

/** Regroupe les produits plats en modèles (1 par code de base). */
function buildModels(list: Product[]): ProductModel[] {
  const groups = new Map<string, Product[]>();
  for (const p of list) {
    const key = baseCode(p.code);
    const g = groups.get(key);
    if (g) g.push(p);
    else groups.set(key, [p]);
  }

  const models: ProductModel[] = [];
  // Unicité des slugs par locale (URLs permanentes) ; ordre de groupes stable.
  const seenFr = new Set<string>();
  const seenEn = new Set<string>();
  for (const [key, group] of groups) {
    // Variante par défaut = le code non-muf (la fiche canonique) s'il existe,
    // sinon l'unique membre (produit vendu seulement en chêne).
    const primary = group.find((p) => p.code === key) ?? group[0];
    // Couleur canonique (blanc) d'abord, puis chêne : ordre d'affichage stable.
    const ordered = [...group].sort(
      (a, b) =>
        (a.code.endsWith("-muf") ? 1 : 0) - (b.code.endsWith("-muf") ? 1 : 0),
    );
    const variants = expandVariants(ordered);

    const key2 = skuKey(primary.code);
    const slug = uniqueSlug(productSlug(primary.name, "fr"), seenFr, key2);
    const slugEn = uniqueSlug(
      productSlug(localizeProductLabel(primary.name, "en"), "en"),
      seenEn,
      key2,
    );

    models.push({
      id: primary.code,
      slug,
      slugEn,
      name: primary.name,
      shortName: primary.shortName,
      family: primary.family,
      category: primary.category,
      w: primary.w,
      h: primary.h,
      d: primary.d,
      doors: primary.doors,
      drawers: primary.drawers,
      axes: axesFromVariants(variants),
      variants,
      // Variante par défaut = couleur canonique + shaker 1 po (toujours présent).
      defaultVariantId: `${primary.code}__shaker-1`,
      fromPrice: Math.min(...variants.map((v) => v.price)),
    });
  }
  return models;
}

export const models: ProductModel[] = buildModels(products);

const modelById = new Map<string, ProductModel>(models.map((m) => [m.id, m]));
/** Index code-de-variante → modèle (pour résoudre une vieille URL `-muf`). */
const modelByVariantCode = new Map<string, ProductModel>();
for (const m of models) {
  for (const v of m.variants) modelByVariantCode.set(v.code, m);
}
/** Index slug (FR + EN) → modèle (résolution d'URL canonique bilingue). */
const modelBySlug = new Map<string, ProductModel>();
for (const m of models) {
  modelBySlug.set(m.slug, m);
  modelBySlug.set(m.slugEn, m);
}

/** Modèle par sa clé INTERNE (code SKU). Ne pas utiliser pour résoudre une URL. */
export function findModel(id: string): ProductModel | undefined {
  return modelById.get(id);
}

/** Modèle par son slug d'URL (FR ou EN). */
export function findModelBySlug(slug: string): ProductModel | undefined {
  return modelBySlug.get(slug);
}

/** Slug d'URL localisé d'un modèle. */
export function modelSlug(m: ProductModel, locale: "fr" | "en"): string {
  return locale === "en" ? m.slugEn : m.slug;
}

/** Slug d'URL localisé pour un code catalogue (variante ou base). Repli : le code. */
export function slugForCode(code: string, locale: "fr" | "en"): string {
  const m = modelByVariantCode.get(code) ?? modelById.get(baseCode(code));
  return m ? modelSlug(m, locale) : code;
}

/** Modèle contenant un code de variante donné (sert aux redirections d'anciennes URLs). */
export function modelForVariantCode(code: string): ProductModel | undefined {
  return modelByVariantCode.get(code) ?? modelById.get(baseCode(code));
}

/** Variante d'un modèle par son id unique, ou la variante par défaut. */
export function variantById(m: ProductModel, id?: string): Variant {
  const byId = id ? m.variants.find((v) => v.id === id) : undefined;
  return (
    byId ??
    m.variants.find((v) => v.id === m.defaultVariantId) ??
    m.variants[0]
  );
}

/**
 * Résout une sélection d'axes (ex. { couleur: "chene" }) vers la variante
 * existante la plus proche. Le catalogue étant creux (toutes les combinaisons
 * n'existent pas), on score par nombre d'axes satisfaits.
 */
export function resolveVariant(
  m: ProductModel,
  selection: Record<string, string>,
): Variant {
  let best = m.variants[0];
  let bestScore = -1;
  for (const v of m.variants) {
    let score = 0;
    for (const [k, val] of Object.entries(selection)) {
      if (v.options[k] === val) score++;
    }
    if (score > bestScore) {
      bestScore = score;
      best = v;
    }
  }
  return best;
}

/**
 * Sélection interdépendante (catalogue creux). On clique la valeur `valueId`
 * sur l'axe `axisKey` : on GARANTIT que la variante retournée a bien cette
 * valeur, puis on « snap » les AUTRES axes vers la combinaison existante la
 * plus proche de la sélection courante. C'est ce qui rend les sélecteurs
 * dynamiques : changer la couleur peut changer le profil disponible, et
 * inversement, sans jamais retomber sur un prix/render fantôme.
 */
export function selectAxisValue(
  m: ProductModel,
  current: Record<string, string>,
  axisKey: string,
  valueId: string,
): Variant {
  const candidates = m.variants.filter((v) => v.options[axisKey] === valueId);
  if (candidates.length === 0) return variantById(m, m.defaultVariantId);
  let best = candidates[0];
  let bestScore = -1;
  for (const v of candidates) {
    let score = 0;
    for (const [k, val] of Object.entries(current)) {
      if (k !== axisKey && v.options[k] === val) score++;
    }
    if (score > bestScore) {
      bestScore = score;
      best = v;
    }
  }
  return best;
}

/**
 * Vrai si la valeur `valueId` de l'axe `axisKey` coexiste avec la sélection
 * courante des AUTRES axes (= une variante réelle existe pour cette combinaison).
 * Permet d'afficher dynamiquement ce qui est disponible « ensemble ».
 */
export function isAxisValueAvailable(
  m: ProductModel,
  current: Record<string, string>,
  axisKey: string,
  valueId: string,
): boolean {
  return m.variants.some(
    (v) =>
      v.options[axisKey] === valueId &&
      Object.entries(current).every(
        ([k, val]) => k === axisKey || v.options[k] === val,
      ),
  );
}

/** Codes catalogue `-muf` à rediriger (301) vers le slug du modèle, ≠ du slug. */
export function redirectableVariantCodes(): Array<{ from: string; to: string }> {
  const out: Array<{ from: string; to: string }> = [];
  for (const m of models) {
    const seen = new Set<string>();
    for (const v of m.variants) {
      if (v.code === m.id || seen.has(v.code)) continue;
      seen.add(v.code);
      out.push({ from: v.code, to: m.id });
    }
  }
  return out;
}
