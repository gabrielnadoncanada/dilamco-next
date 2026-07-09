import productsData from "./catalog-products.json";
import categoriesData from "./catalog-categories.json";
import renderManifest from "./render-manifest.json";
import { getDescendantSlugs } from "./catalog-categories";
import type { ColorName, Family, Product, ProductGalleryEntry } from "./types";

interface RawProduct {
  code: string;
  name: string;
  shortName?: string;
  externalCode?: string;
  sku?: string;
  finish?: string;
  price: number;
  category: string;
  partType?: string;
  w?: number;
  h?: number;
  d?: number;
  doors?: number;
  drawers?: number;
  visible: boolean;
}

interface RawCategory {
  slug: string;
  parent: string | null;
  name: { fr: string | null; en: string | null };
}

const rawCategories = (categoriesData as { categories: RawCategory[] })
  .categories;
const categoryBySlug = new Map<string, RawCategory>(
  rawCategories.map((c) => [c.slug, c]),
);

const familyBySlugCache = new Map<string, Family>();

function familyFromCategory(slug: string): Family {
  const cached = familyBySlugCache.get(slug);
  if (cached) return cached;

  let cursor: string | null = slug;
  const seen = new Set<string>();
  while (cursor && !seen.has(cursor)) {
    seen.add(cursor);
    const node = categoryBySlug.get(cursor);
    if (!node) break;
    if (node.parent === null) {
      const family = (node.name.fr ?? node.slug) as Family;
      familyBySlugCache.set(slug, family);
      return family;
    }
    cursor = node.parent;
  }

  const fallback = slug as Family;
  familyBySlugCache.set(slug, fallback);
  return fallback;
}

const KNOWN_COLORS: ColorName[] = [
  "Blanc Pur",
  "Chêne blanc",
  "Bleu marin",
  "Navi",
];

function colorsFor(p: RawProduct): ColorName[] {
  if (p.finish && KNOWN_COLORS.includes(p.finish as ColorName)) {
    return [p.finish as ColorName];
  }
  return p.code.endsWith("-muf") ? ["Chêne blanc"] : ["Blanc Pur"];
}

const raw = (productsData as { products: RawProduct[] }).products;

/** Vrai si le nom du catalogue est un code technique (ex. « W0930 », « WP129327 »). */
function isTechnicalName(name: string): boolean {
  return /^[A-Z]{1,4}[0-9]/.test(name);
}

/**
 * Noms d'affichage FR pour les 122 produits dont catalog.xlsx ne fournit
 * qu'un code technique. Le nom long sert de titre de fiche ; le court, de
 * titre de carte. Les largeurs sœurs partagent le même nom long (le
 * regroupement de variantes s'appuie dessus).
 */
function deriveNames(p: RawProduct): { name: string; shortName?: string } {
  if (!isTechnicalName(p.name)) return { name: p.name, shortName: p.shortName };

  const w = p.w ?? 0;
  const h = p.h ?? 0;
  const dims = `${w}″ × ${h}″`;
  const isDoor = p.code.includes("-Door");

  switch (p.category) {
    case "wall-cabinet-standard": {
      if (isDoor) {
        return {
          name: `Porte de remplacement pour armoire murale ${dims}`,
          shortName: `Porte murale ${dims}`,
        };
      }
      const doors = (p.doors ?? 1) >= 2 ? "2 portes" : "1 porte";
      return {
        name: `Armoire murale ${doors} · ${h} po de haut`,
        shortName: `Murale ${doors} (${dims})`,
      };
    }
    case "wall-cabinet-microwave":
      return {
        name: `Armoire murale pour micro-ondes · ${h} po de haut`,
        shortName: `Micro-ondes (${dims})`,
      };
    case "wall-cabinet-corner-45deg":
      if (isDoor) {
        return {
          name: `Porte de remplacement pour armoire de coin 45° ${dims}`,
          shortName: `Porte coin 45° ${dims}`,
        };
      }
      return {
        name: `Armoire murale de coin 45° · ${h} po de haut`,
        shortName: `Coin mural 45° (${dims})`,
      };
    case "utility-cabinet-pantry":
      return {
        name: `Garde-manger 2 portes · ${h} po de haut`,
        shortName: `Garde-manger (${dims})`,
      };
    case "fillers-base-wall-tall-filler":
      return {
        name: `Filler ${w}″ × ${h}″`,
        shortName: `Filler ${dims}`,
      };
    case "dummy-door-base-end":
      return {
        name: `Fausse porte d'extrémité ${dims}`,
        shortName: `Fausse porte ${dims}`,
      };
    case "moldings-outside-corner-molding":
      return {
        name: `Moulure de coin extérieur ${w} po`,
        shortName: `Moulure de coin ${w} po`,
      };
    case "panel-refrigerator-return-panel":
      return {
        name: `Panneau de retour réfrigérateur ${h} po`,
        shortName: `Panneau réfrigérateur ${h} po`,
      };
    case "toe-kick":
      return {
        name: `Plinthe (toe kick) ${h} po`,
        shortName: `Plinthe ${h} po`,
      };
    default:
      return { name: p.name, shortName: p.shortName };
  }
}

/** Rendus Blender (généré par .claude/skills/render-3d/pipeline). Une entrée = un
 *  code → ses vues. La vue `face` est le rendu shaker-1 (défaut) ; les profils de
 *  porte alternatifs vivent sur `face@<profil>` (ex. `face@shaker-3`). */
type RenderViews = Record<string, string | undefined>;
const rendersByCode = (
  renderManifest as { products: Record<string, RenderViews> }
).products;

/** Clé de vue manifest pour un profil de porte (défaut shaker-1 = `face`). */
function viewKeyForProfil(profil?: string): string {
  return profil && profil !== "shaker-1" ? `face@${profil}` : "face";
}

/** Finis qui vivent comme une VUE du manifest sur le code blanc (pas un code
 *  catalogue dédié comme le chêne `-muf`). Le rendu navi de S8-DB24 est la vue
 *  `face@navi` de l'entrée S8-DB24. */
const VIEW_BASED_FINISHES = new Set(["navi"]);

/** Retire le préfixe fournisseur (`F9-`, `S8-`, …) : le rendu d'un meuble est le même
 *  quel que soit le fournisseur, et le manifeste reste indexé sur l'ancien préfixe. */
const stripVendorPrefix = (code: string) => code.replace(/^[A-Z]\d+-/, "");

const rendersBySuffix = new Map<string, RenderViews>();
for (const [k, v] of Object.entries(rendersByCode)) {
  rendersBySuffix.set(stripVendorPrefix(k), v);
}

/** Galerie d'un code pour un profil de porte donné. Le profil sélectionne la vue
 *  `face@<profil>` ; si elle n'existe pas (rendu pas encore généré), on retombe
 *  proprement sur la `face` shaker-1. Un FINI à base de vue (`couleur: "navi"`)
 *  sélectionne `face@<fini>` SANS repli sur la face blanche : mieux vaut le
 *  placeholder qu'une image de la mauvaise couleur. */
export function galleryFor(
  code: string,
  profil?: string,
  couleur?: string,
): ProductGalleryEntry[] | undefined {
  const render = rendersByCode[code] ?? rendersBySuffix.get(stripVendorPrefix(code));
  if (!render) return undefined;
  const face =
    couleur && VIEW_BASED_FINISHES.has(couleur)
      ? render[`face@${couleur}`]
      : render[viewKeyForProfil(profil)] ?? render.face;
  if (!face) return undefined;
  const entries: ProductGalleryEntry[] = [{ src: face, label: "Produit" }];
  if (render.technique) {
    entries.push({ src: render.technique, label: "Dessin technique" });
  }
  return entries;
}

/**
 * Catégories désactivées de la boutique (non vendues en ligne pour l'instant) :
 * accessoires, charnières, fillers/panneaux/moulures, panneaux d'extrémité
 * muraux. Traitées comme `visible: false` — exclues de la grille, des fiches,
 * du sitemap, des params et de la nav. Réactiver = retirer le slug ici.
 */
export const DEACTIVATED_TOP_CATEGORIES = [
  "accessories",
  "american-style-hinge",
  "fillers-panels-moldings",
  "wall-end-panel",
] as const;
const deactivatedCategorySlugs = new Set(
  DEACTIVATED_TOP_CATEGORIES.flatMap((slug) => getDescendantSlugs(slug)),
);

/** Vrai si la catégorie (ou un ancêtre) n'est pas désactivée. */
export function isActiveCategory(slug: string): boolean {
  return !deactivatedCategorySlugs.has(slug);
}

export const products: Product[] = raw
  .filter((p) => p.visible && isActiveCategory(p.category))
  .map<Product>((p) => ({
    id: p.code,
    code: p.code,
    ...deriveNames(p),
    sku: p.sku,
    price: p.price,
    category: p.category,
    partType: p.partType,
    visible: p.visible,
    family: familyFromCategory(p.category),
    w: p.w ?? 0,
    h: p.h ?? 0,
    d: p.d ?? 0,
    doors: p.doors ?? 0,
    drawers: p.drawers,
    colors: colorsFor(p),
    moldings: ["1 po"],
    gallery: galleryFor(p.code),
  }));

const productsByCode = new Map<string, Product>(
  products.map((p) => [p.code, p]),
);

export function findProduct(id: string): Product | undefined {
  return productsByCode.get(id);
}

const FLAT_PART_PREFIXES = [
  "fillers",
  "dummy-door",
  "panel",
  "toe-kick",
  "moldings",
];

/** Pièce plate (filler, panneau, moulure, fausse porte…) — pas un caisson. */
export function isFlatPart(p: Product): boolean {
  return FLAT_PART_PREFIXES.some((prefix) => p.category.startsWith(prefix));
}

/** Porte de remplacement vendue seule (codes « …-Door »). */
export function isDoorPanel(p: Product): boolean {
  return p.code.includes("-Door");
}

/** SKU jumeau dans l'autre finition (F9-B12 ↔ F9-B12-muf), s'il existe. */
export function finishSibling(p: Product): Product | undefined {
  const other = p.code.endsWith("-muf")
    ? p.code.slice(0, -"-muf".length)
    : `${p.code}-muf`;
  return productsByCode.get(other);
}

/**
 * Largeurs sœurs : même module (nom + catégorie) dans la même finition,
 * triées par largeur croissante. Inclut le produit lui-même.
 */
export function widthSiblings(p: Product): Product[] {
  const isMuf = p.code.endsWith("-muf");
  const siblings = products.filter(
    (q) =>
      q.name === p.name &&
      q.category === p.category &&
      q.code.endsWith("-muf") === isMuf,
  );
  return siblings.sort((a, b) => (a.w || 0) - (b.w || 0));
}

export function productsInCategory(
  slug: string,
  opts: { deep?: boolean } = {},
): Product[] {
  if (!opts.deep) {
    return products.filter((p) => p.category === slug);
  }
  const slugs = new Set(getDescendantSlugs(slug));
  return products.filter((p) => slugs.has(p.category));
}

const hasVisibleCache = new Map<string, boolean>();
const visibleCategorySlugs = new Set(products.map((p) => p.category));

/** Vrai si la catégorie ou un de ses descendants contient au moins un produit visible. */
export function hasVisibleProducts(slug: string): boolean {
  const cached = hasVisibleCache.get(slug);
  if (cached !== undefined) return cached;
  const result = getDescendantSlugs(slug).some((s) =>
    visibleCategorySlugs.has(s),
  );
  hasVisibleCache.set(slug, result);
  return result;
}

export function swatchSlug(c: string): "blanc" | "chene" | "bleu" | "navi" {
  if (c === "Blanc Pur") return "blanc";
  if (c === "Chêne blanc") return "chene";
  if (c === "Navi") return "navi";
  return "bleu";
}
