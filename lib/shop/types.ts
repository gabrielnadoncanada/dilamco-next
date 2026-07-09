export type ColorName = "Blanc Pur" | "Chêne blanc" | "Bleu marin" | "Navi";
export type Molding = "1 po" | "3 po";
export type Ceiling = "8 pi" | "9 pi" | string;
export type Corner = "Non" | "Coin 45 degres" | "Coin 90 degres" | string;

export type Family =
  | "Armoire murale"
  | "Armoire de bas"
  | "Garde-manger"
  | "Armoire au-dessus du réfrigérateur"
  | "Armoire murale de coin"
  | "Armoire de bas de coin"
  | "Garde-manger de coin"
  | string;

/** Une entrée galerie : chemin uniquement ou objet avec libellé optionnel. */
export type ProductGalleryEntry = string | { src: string; label?: string };

export interface Product {
  /** Alias historique de `code` — gardé pour rétrocompatibilité des composants. */
  id: string;
  /** Code produit canonique (Yihai), source: catalog-products.json. */
  code: string;
  name: string;
  /** Nom court FR (ex. « Coin mort (42") »), si renseigné dans catalog.xlsx. */
  shortName?: string;
  /** SKU public (external_code + suffixe finition), si renseigné dans catalog.xlsx. */
  sku?: string;
  /** Famille FR dérivée du top-parent de `category` via catalog-categories.json. */
  family: Family;
  /** Slug catégorie complet (ex. "base-cabinet-standard"). */
  category: string;
  /** Partie d'un cabinet complet (ex. "complete-cabinet"). Optionnel. */
  partType?: string;
  cat?: string;
  w: number;
  d: number;
  h: number;
  ceiling?: Ceiling;
  corner?: Corner;
  doors: number;
  drawers?: number;
  colors: ColorName[];
  moldings: Molding[];
  price: number;
  /** false si l'auteur Excel n'a pas marqué la ligne comme "certaine" avec prix. */
  visible: boolean;
  /** Si défini et non vide, chemins pour la galerie produit ; sinon le placeholder neutre « image à venir » (`placeholder.webp`). */
  gallery?: ProductGalleryEntry[];
}

/* ------------------------------------------------------------------ *
 * Modèle de variantes (multi-axes) — voir lib/shop/models.ts.
 *
 * Un `ProductModel` est l'entité SEO : 1 fiche = 1 URL = 1 entrée sitemap.
 * Il ne porte AUCUN prix. Toute la variance vendable (prix, SKU, render)
 * vit sur le `Variant`. Les axes (`OptionAxis`) sont de la donnée, pas du
 * code : ajouter un profil/une couleur = ajouter des valeurs + variantes,
 * sans toucher aux composants.
 * ------------------------------------------------------------------ */

/** Une valeur possible d'un axe (ex. profil « slab », couleur « chene »). */
export interface OptionValue {
  /** Clé machine stable (sert d'URL/état, jamais affichée telle quelle). */
  id: string;
  /** Libellé FR ; localisé à l'affichage (voir catalog-i18n). */
  label: string;
}

/** Un axe de variation in-page (ex. « Profil de porte », « Couleur »). */
export interface OptionAxis {
  key: string;
  label: string;
  values: OptionValue[];
}

/** Une combinaison concrète vendable. Prix + SKU + render sont ICI. */
export interface Variant {
  /** Identifiant UNIQUE de la variante (`code__profil`) — une couleur peut
   *  exister en plusieurs profils qui partagent le même code catalogue. */
  id: string;
  /** Code catalogue réel (ex. « S8-DB12-muf ») — porte le SKU, le render, le panier. */
  code: string;
  sku?: string;
  /** Coordonnées dans la matrice d'axes : { profil: "shaker-1", couleur: "chene" }. */
  options: Record<string, string>;
  /** PRIX SPÉCIFIQUE À LA VARIANTE (le chêne ≠ le blanc ; +éventuel supplément profil). */
  price: number;
  /** Couleurs (conservé pour panier/photo). */
  colors: ColorName[];
  gallery?: ProductGalleryEntry[];
  w: number;
  h: number;
  d: number;
  available: boolean;
}

/** Entité SEO (1 fiche/URL). Aucun prix propre — voir `fromPrice` (min variantes). */
export interface ProductModel {
  /** Clé INTERNE stable = code catalogue (SKU) de la variante par défaut. Sert
   *  d'index (findModel), de seed de description et de panier — JAMAIS d'URL. */
  id: string;
  /** Slug d'URL mot-clé FR (`/boutique/produit/<slug>`). Unique, stable. */
  slug: string;
  /** Slug d'URL mot-clé EN (`/en/shop/produit/<slugEn>`). Unique, stable. */
  slugEn: string;
  name: string;
  shortName?: string;
  family: Family;
  category: string;
  w: number;
  h: number;
  d: number;
  doors: number;
  drawers?: number;
  /** Axes qui varient réellement pour CE modèle (≥2 valeurs ⇒ sélecteur affiché). */
  axes: OptionAxis[];
  /** Liste explicite des combos qui existent (catalogue creux, pas de produit cartésien). */
  variants: Variant[];
  /** Id de la variante par défaut (couleur canonique + profil de base). */
  defaultVariantId: string;
  /** Prix « à partir de » = min des prix variantes. */
  fromPrice: number;
}

export interface CartItem {
  key: string;
  productId: string;
  name: string;
  family: Family;
  price: number;
  w: number;
  h: number;
  d: number;
  color: ColorName;
  molding: Molding;
  qty: number;
}

export interface Tweaks {
  theme: "default" | "warm" | "ink";
  density: "comfy" | "dense";
  showPrices: boolean;
  serif: string;
  sans: string;
}
