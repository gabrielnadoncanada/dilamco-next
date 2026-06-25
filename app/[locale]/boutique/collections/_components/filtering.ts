import {
  products as ALL_PRODUCTS,
  productsInCategory,
} from "@/lib/shop/products";
import { getDescendantSlugs } from "@/lib/shop/catalog-categories";
import { models, modelForVariantCode } from "@/lib/shop/models";
import type { Product } from "@/lib/shop/types";

export const FINISH_VALUES = ["blanc", "chene"] as const;
export type FinishKey = (typeof FINISH_VALUES)[number];

/**
 * Codes canoniques (1 par ProductModel) : la grille affiche une carte par
 * MODÈLE, pas par variante de finition (sinon le blanc et le chêne d'un même
 * meuble apparaissent en double).
 */
const CANONICAL_CODES = new Set(models.map((m) => m.id));

/** Ne garde qu'une variante (la canonique) par meuble. */
function dedupeToModels(list: Product[]): Product[] {
  return list.filter((p) => CANONICAL_CODES.has(p.code));
}

export interface CatalogScope {
  /** Catégorie unique (pages collection héritées). */
  slug?: string;
  deep?: boolean;
  /** Taxonomie SEO : union de catégories (profondeur incluse). */
  cats?: string[];
  /** Facette couleur verrouillée par la page (ex. /armoires-cuisine/bois → "chene"). */
  couleur?: FinishKey;
  /** Facette largeur verrouillée par la page (ex. /vanites/24-pouces → 24). */
  width?: number;
  /** Codes produits choisis à la main (collections curées), épinglés en tête. */
  codes?: string[];
}

export interface FilterState {
  q: string;
  width: number | null;
  finish: FinishKey | null;
}

/** Minuscules + sans accents, pour une recherche tolérante (chene = chêne). */
export function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

/**
 * Liste de base d'une page : taxonomie (union de catégories + facettes
 * verrouillées), catégorie unique (pages collection), ou tout le catalogue.
 */
export function baseProducts(scope?: CatalogScope): Product[] {
  // 1. Produits « règle » (auto). Une collection PUREMENT manuelle (codes sans
  //    cats/slug) ne s'auto-remplit pas.
  let list: Product[];
  if (scope?.cats?.length) {
    const set = new Set(scope.cats.flatMap((s) => getDescendantSlugs(s)));
    list = ALL_PRODUCTS.filter((p) => set.has(p.category));
  } else if (scope?.slug) {
    list = productsInCategory(scope.slug, { deep: scope.deep ?? false });
  } else if (scope?.codes?.length) {
    list = [];
  } else {
    list = ALL_PRODUCTS;
  }
  let out = dedupeToModels(list);
  // Facettes verrouillées par la collection.
  if (scope?.couleur) out = out.filter((p) => productHasFinish(p, scope.couleur!));
  if (scope?.width != null) out = out.filter((p) => p.w === scope.width);

  // 2. Produits manuels épinglés EN TÊTE (collections curées), dédupliqués.
  if (scope?.codes?.length) {
    const manual = scope.codes
      .map((c) => ALL_PRODUCTS.find((p) => p.code === c))
      .filter((p): p is Product => Boolean(p));
    const seen = new Set(manual.map((p) => p.code));
    return [...manual, ...out.filter((p) => !seen.has(p.code))];
  }
  return out;
}

/** Un meuble « matche » une finition s'il EXISTE une variante de cette couleur. */
export function productHasFinish(p: Product, finish: FinishKey): boolean {
  const m = modelForVariantCode(p.code);
  if (!m) return false;
  return m.variants.some((v) => v.options.couleur === finish);
}

function matchesFinish(p: Product, finish: FinishKey | null): boolean {
  if (finish === null) return true;
  return productHasFinish(p, finish);
}

function matchesQuery(p: Product, needle: string): boolean {
  if (!needle) return true;
  return (
    normalize(p.name).includes(needle) ||
    normalize(p.code).includes(needle) ||
    normalize(p.sku ?? "").includes(needle)
  );
}

/**
 * Applique les filtres. `skip` permet le facettage à la Amazon : les
 * compteurs d'une facette sont calculés avec toutes les AUTRES facettes
 * actives, jamais avec elle-même.
 */
export function applyFilters(
  list: Product[],
  state: FilterState,
  skip?: "width" | "finish",
): Product[] {
  const needle = normalize(state.q.trim());
  return list.filter((p) => {
    if (skip !== "width" && state.width !== null && p.w !== state.width) {
      return false;
    }
    if (skip !== "finish" && !matchesFinish(p, state.finish)) return false;
    return matchesQuery(p, needle);
  });
}
