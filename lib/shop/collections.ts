// ============================================================================
// MODÈLE UNIFIÉ « COLLECTION » (proposition — pas encore branché sur les routes)
// ----------------------------------------------------------------------------
// UNE entrée = UNE collection complète : contenu (titre/desc/FAQ qui RANKE) +
// liste de produits (manuelle ET/OU règle auto). Remplace, à terme :
//   taxonomy.ts + shop.taxonomy (fr/en.json) + les dossiers .../page.tsx
//   + les vieilles /boutique/collections.
// Le xlsx (catalog-products.json) reste la SOURCE des produits ; une collection
// ne fait que pointer vers des codes (manuels) ou matcher une règle.
//
// Ajouter une collection  = 1 objet dans COLLECTIONS.
// Ajouter un produit       = 1 code dans `products` (épinglé) OU il matche `rule`.
// ============================================================================

import { products as ALL_PRODUCTS } from "./products";
import { getDescendantSlugs } from "./catalog-categories";
import { models, modelForVariantCode } from "./models";
import type { Product } from "./types";
import { BOUTIQUE_TAXON_EN } from "@/seo/i18n-path";

export type FinishKey = "blanc" | "chene";

/** Produits auto : filtre sur les attributs du catalogue (xlsx). */
export interface CollectionRule {
  /** Catégories incluses (descendants compris). Ex. ["base-cabinet","wall-cabinet"]. */
  cats?: string[];
  /** Finition verrouillée (ex. /bois → "chene"). */
  couleur?: FinishKey;
  /** Largeur verrouillée en pouces (ex. /24-pouces → 24). */
  width?: number;
}

/**
 * Contenu éditorial d'une collection POUR UNE langue. Pour les nœuds de NAV
 * (index:false), seuls `crumb` + `h1` sont requis (contenu léger) ; pour les
 * pages SEO (index:true), remplir aussi metaTitle/metaDescription/intro/faq.
 */
export interface CollectionContent {
  /** Libellé court (fil d'Ariane, nav, chips). REQUIS. */
  crumb: string;
  /** Titre H1 de la page. REQUIS. */
  h1: string;
  eyebrow?: string;
  /** <title> + base de l'OpenGraph. Repli sur h1 si absent. */
  metaTitle?: string;
  /** meta description. Le token {count} est remplacé par le nb de produits. */
  metaDescription?: string;
  /** Paragraphe d'intro sous le H1 (contenu mot-clé). */
  intro?: string;
  /** FAQ (profondeur de contenu + FAQPage JSON-LD + People Also Ask). */
  faq?: { q: string; a: string }[];
}

export interface Collection {
  /** Chemin FR complet sous /boutique (imbrication via "/"). Ex. "armoires-cuisine/bois". */
  slug: string;
  /** Chemin EN complet sous /en/shop. Ex. "kitchen-cabinets/wood". */
  enSlug: string;
  /** slug du parent (collection) ou null si racine. */
  parent: string | null;
  /** true = indexable + dans le sitemap ; false = navigable mais noindex. */
  index: boolean;
  /** true = présent dans la nav principale (topbar + footer). Piliers seulement. */
  nav?: boolean;
  /** Produits choisis à la main (épinglés EN TÊTE, dans cet ordre). Optionnel. */
  products?: string[];
  /** Produits auto par filtre. Optionnel. Se combine avec `products`. */
  rule?: CollectionRule;
  fr: CollectionContent;
  en: CollectionContent;
}

// ----------------------------------------------------------------------------
// RÉSOLUTION DES PRODUITS (manuel épinglé + règle, dédupliqué au modèle)
// ----------------------------------------------------------------------------

const CANONICAL_CODES = new Set(models.map((m) => m.id));
const dedupeToModels = (list: Product[]) =>
  list.filter((p) => CANONICAL_CODES.has(p.code));

function productHasFinish(p: Product, finish: FinishKey): boolean {
  const m = modelForVariantCode(p.code);
  return !!m && m.variants.some((v) => v.options.couleur === finish);
}

function ruleProducts(rule: CollectionRule): Product[] {
  let list = ALL_PRODUCTS;
  if (rule.cats?.length) {
    const set = new Set(rule.cats.flatMap((s) => getDescendantSlugs(s)));
    list = ALL_PRODUCTS.filter((p) => set.has(p.category));
  }
  let out = dedupeToModels(list);
  if (rule.couleur) out = out.filter((p) => productHasFinish(p, rule.couleur!));
  if (rule.width != null) out = out.filter((p) => p.w === rule.width);
  return out;
}

/** Produits finaux d'une collection : manuels (ordre conservé) puis règle, dédup. */
export function collectionProducts(c: Collection): Product[] {
  const manual = (c.products ?? [])
    .map((code) => ALL_PRODUCTS.find((p) => p.code === code))
    .filter((p): p is Product => Boolean(p));
  const ruled = c.rule ? ruleProducts(c.rule) : [];
  const seen = new Set(manual.map((p) => p.code));
  return [...manual, ...ruled.filter((p) => !seen.has(p.code))];
}

// Helpers d'arborescence (nav, fil d'Ariane, generateStaticParams)
export const findCollection = (slug: string) =>
  COLLECTIONS.find((c) => c.slug === slug);
export const childrenOf = (slug: string | null) =>
  COLLECTIONS.filter((c) => c.parent === slug);
export function ancestorsOf(c: Collection): Collection[] {
  const chain: Collection[] = [];
  let cur: Collection | undefined = c;
  while (cur) {
    chain.unshift(cur);
    cur = cur.parent ? findCollection(cur.parent) : undefined;
  }
  return chain;
}

/** Contenu d'une collection pour une langue ("fr" par défaut). */
export const collectionContent = (c: Collection, locale: string) =>
  locale === "en" ? c.en : c.fr;

/** Remplit le token {count} dans une meta description / un libellé. */
export const renderCount = (text: string, count: number) =>
  text.replace("{count}", String(count));

/** Collections racines (parent === null), dans l'ordre du fichier. */
export const rootCollections = () => COLLECTIONS.filter((c) => c.parent === null);

/** Collections de la nav principale (topbar + footer) = les piliers. */
export const navCollections = () => COLLECTIONS.filter((c) => c.nav);

/** Toutes les collections indexables (pour le sitemap). */
export const indexableCollections = () => COLLECTIONS.filter((c) => c.index);

/** Pilier (collection racine indexée) qui contient une catégorie produit donnée. */
export function pillarForCategory(category: string): Collection | undefined {
  const matches = (c: Collection) => {
    if (!c.rule?.cats?.length) return false;
    const set = new Set(c.rule.cats.flatMap((s) => getDescendantSlugs(s)));
    return set.has(category);
  };
  return (
    COLLECTIONS.find((c) => c.parent === null && c.index && matches(c)) ??
    COLLECTIONS.find((c) => c.index && matches(c))
  );
}

// ============================================================================
// LES COLLECTIONS (extrait de démonstration — migration complète à suivre)
// ============================================================================

export const COLLECTIONS: Collection[] = [
  // ---- PILIER (index, contenu riche = RANKE, produits par règle) ------------
  {
    slug: "armoires-cuisine",
    enSlug: "kitchen-cabinets",
    parent: null,
    index: true,
    nav: true,
    rule: { cats: ["base-cabinet", "wall-cabinet"] },
    fr: {
      crumb: "Armoires de cuisine",
      eyebrow: "Catalogue en stock",
      h1: "Armoires de cuisine en stock",
      metaTitle: "Armoires de cuisine en stock — prêtes à installer",
      metaDescription:
        "{count} modules d'armoires de cuisine en stock : caissons du bas, armoires murales et garde-manger en Blanc Pur et Chêne blanc. Prix affichés, prêts à installer, livraison dans le Grand Montréal.",
      intro:
        "Composez votre cuisine module par module. Nos armoires de cuisine sont offertes en porte Shaker, finition Blanc Pur ou Chêne blanc, et tenues en stock dans notre entrepôt de Rigaud — sans délai de fabrication. Chaque prix est affiché : ajoutez vos caissons du bas, armoires murales et garde-manger au projet et obtenez une soumission ferme. Livraison et installation disponibles dans le Grand Montréal.",
      faq: [
        {
          q: "Quelle différence entre vos armoires de cuisine en stock et le sur mesure ?",
          a: "Nos armoires en stock sont des modules standards tenus dans notre entrepôt de Rigaud : prix affiché, prêts à installer, livrés en quelques jours sans délai de fabrication. Le sur mesure conçoit des armoires aux dimensions exactes de votre pièce, avec un délai plus long (environ 9 à 15 semaines).",
        },
        {
          q: "Faites-vous de la liquidation d'armoires de cuisine ?",
          a: "La boutique fonctionne en déstockage continu : des modules tenus en inventaire, à prix affiché, prêts à partir. Ajoutez vos caissons au projet et obtenez une soumission ferme, livraison et installation dans le Grand Montréal.",
        },
      ],
    },
    en: {
      crumb: "Kitchen cabinets",
      eyebrow: "In-stock catalogue",
      h1: "In-stock kitchen cabinets",
      metaTitle: "In-stock kitchen cabinets — ready to install",
      metaDescription:
        "{count} in-stock kitchen cabinet modules: base cabinets, wall cabinets and pantries in Pure White and White Oak. Prices shown, ready to install, delivery across Greater Montreal.",
      intro:
        "Build your kitchen module by module. Our kitchen cabinets come with a Shaker door in Pure White or White Oak, kept in stock at our Rigaud warehouse — no manufacturing lead time. Every price is shown: add your base cabinets, wall cabinets and pantries to the project and get a firm quote. Delivery and installation available across Greater Montreal.",
      faq: [
        {
          q: "What is the difference between your in-stock kitchen cabinets and custom?",
          a: "Our in-stock cabinets are standard modules kept in our Rigaud warehouse: price shown, ready to install, delivered in a few days. Custom cabinets are designed to the exact dimensions of your room, with a longer lead time (roughly 9 to 15 weeks).",
        },
      ],
    },
  },

  // ---- SOUS-PILIER : finition bois — chêne blanc (index, transversal) -------
  {
    slug: "armoires-cuisine/bois",
    enSlug: "kitchen-cabinets/wood",
    parent: "armoires-cuisine",
    index: true,
    rule: { cats: ["base-cabinet", "wall-cabinet"], couleur: "chene" },
    fr: {
      crumb: "Bois — chêne blanc",
      eyebrow: "Finition bois",
      h1: "Armoires de cuisine en bois — chêne blanc",
      metaTitle: "Armoires de cuisine en bois (chêne blanc)",
      metaDescription:
        "{count} modèles d'armoires de cuisine en bois, finition Chêne blanc. En stock, prêtes à installer, livraison dans le Grand Montréal.",
      intro:
        "Nos armoires de cuisine en bois adoptent une finition Chêne blanc chaleureuse, au grain authentique. Mêmes caissons robustes que la gamme Blanc Pur, offerts en porte Shaker et tenus en stock à Rigaud.",
    },
    en: {
      crumb: "Wood — white oak",
      eyebrow: "Wood finish",
      h1: "Wood kitchen cabinets — white oak",
      metaTitle: "Wood kitchen cabinets (white oak)",
      metaDescription:
        "{count} wood kitchen cabinet models in a White Oak finish. In stock, ready to install, delivery across Greater Montreal.",
      intro:
        "Our wood kitchen cabinets feature a warm White Oak finish with authentic grain. Same sturdy boxes as the Pure White range, with a Shaker door, kept in stock in Rigaud.",
    },
  },

  // ===========================================================================
  // ARMOIRES DU BAS (groupe de navigation, miroir catalogue base-cabinet)
  // ===========================================================================
  {
    slug: "armoires-cuisine/du-bas",
    enSlug: "kitchen-cabinets/base",
    parent: "armoires-cuisine",
    index: false,
    rule: { cats: ["base-cabinet"] },
    fr: {
      crumb: "Armoires du bas",
      h1: "Armoires de cuisine du bas",
      intro:
        "Les armoires du bas (caissons) forment la base de votre cuisine : plan de travail, rangement et électroménagers encastrés. Standard, à tiroirs, de coin et plus — en stock à Rigaud.",
    },
    en: { crumb: "Base cabinets", h1: "Kitchen base cabinets" },
  },
  {
    slug: "armoires-cuisine/du-bas/standard",
    enSlug: "kitchen-cabinets/base/standard",
    parent: "armoires-cuisine/du-bas",
    index: false,
    rule: { cats: ["base-cabinet-standard"] },
    fr: { crumb: "Standard", h1: "Armoires de cuisine du bas — standard" },
    en: { crumb: "Standard", h1: "Standard base cabinets" },
  },
  {
    slug: "armoires-cuisine/du-bas/tiroirs",
    enSlug: "kitchen-cabinets/base/drawers",
    parent: "armoires-cuisine/du-bas",
    index: false,
    rule: { cats: ["base-cabinet-drawer"] },
    fr: { crumb: "Tiroirs", h1: "Caissons du bas à tiroirs" },
    en: { crumb: "Drawers", h1: "Base drawer cabinets" },
  },
  {
    slug: "armoires-cuisine/du-bas/coin",
    enSlug: "kitchen-cabinets/base/corner",
    parent: "armoires-cuisine/du-bas",
    index: false,
    rule: { cats: ["base-cabinet-corner"] },
    fr: { crumb: "Coin", h1: "Armoires du bas de coin" },
    en: { crumb: "Corner", h1: "Base corner cabinets" },
  },
  {
    slug: "armoires-cuisine/du-bas/micro-ondes",
    enSlug: "kitchen-cabinets/base/microwave",
    parent: "armoires-cuisine/du-bas",
    index: false,
    rule: { cats: ["base-microwave-cabinet"] },
    fr: { crumb: "Micro-ondes", h1: "Armoires du bas à micro-ondes" },
    en: { crumb: "Microwave", h1: "Base microwave cabinets" },
  },
  {
    slug: "armoires-cuisine/du-bas/range-epices",
    enSlug: "kitchen-cabinets/base/spice-rack",
    parent: "armoires-cuisine/du-bas",
    index: false,
    rule: { cats: ["base-cabinet-spice-rack-pull-out"] },
    fr: { crumb: "Range-épices", h1: "Armoires range-épices coulissantes" },
    en: { crumb: "Spice rack", h1: "Pull-out spice rack cabinets" },
  },
  {
    slug: "armoires-cuisine/du-bas/tiroir-dechets",
    enSlug: "kitchen-cabinets/base/waste-drawer",
    parent: "armoires-cuisine/du-bas",
    index: false,
    rule: { cats: ["base-cabinet-garbage-pull-out"] },
    fr: { crumb: "Tiroir à déchets", h1: "Armoires à tiroir à déchets" },
    en: { crumb: "Waste drawer", h1: "Waste pull-out cabinets" },
  },
  {
    slug: "armoires-cuisine/du-bas/evier-farmhouse",
    enSlug: "kitchen-cabinets/base/farmhouse-sink",
    parent: "armoires-cuisine/du-bas",
    index: false,
    rule: { cats: ["base-cabinet-farmhouse-sink"] },
    fr: { crumb: "Évier farmhouse", h1: "Armoires pour évier farmhouse" },
    en: { crumb: "Farmhouse sink", h1: "Farmhouse sink base cabinets" },
  },

  // ===========================================================================
  // ARMOIRES MURALES (groupe de navigation, miroir catalogue wall-cabinet)
  // ===========================================================================
  {
    slug: "armoires-cuisine/murales",
    enSlug: "kitchen-cabinets/wall",
    parent: "armoires-cuisine",
    index: false,
    rule: { cats: ["wall-cabinet"] },
    fr: {
      crumb: "Armoires murales",
      h1: "Armoires de cuisine murales",
      intro:
        "Les armoires murales (du haut) maximisent le rangement vertical au-dessus du plan de travail. Standard, de coin, à micro-ondes ou au-dessus du réfrigérateur — en stock à Rigaud.",
    },
    en: { crumb: "Wall cabinets", h1: "Kitchen wall cabinets" },
  },
  {
    slug: "armoires-cuisine/murales/standard",
    enSlug: "kitchen-cabinets/wall/standard",
    parent: "armoires-cuisine/murales",
    index: false,
    rule: { cats: ["standard", "wall-cabinet-standard"] },
    fr: { crumb: "Standard", h1: "Armoires murales standard" },
    en: { crumb: "Standard", h1: "Standard wall cabinets" },
  },
  {
    slug: "armoires-cuisine/murales/coin",
    enSlug: "kitchen-cabinets/wall/corner",
    parent: "armoires-cuisine/murales",
    index: false,
    rule: { cats: ["corner", "wall-cabinet-corner-45deg"] },
    fr: { crumb: "Coin", h1: "Armoires murales de coin" },
    en: { crumb: "Corner", h1: "Wall corner cabinets" },
  },
  {
    slug: "armoires-cuisine/murales/micro-ondes",
    enSlug: "kitchen-cabinets/wall/microwave",
    parent: "armoires-cuisine/murales",
    index: false,
    rule: { cats: ["microwave"] },
    fr: { crumb: "Micro-ondes", h1: "Armoires murales à micro-ondes" },
    en: { crumb: "Microwave", h1: "Wall microwave cabinets" },
  },
  {
    slug: "armoires-cuisine/murales/dessus-frigo",
    enSlug: "kitchen-cabinets/wall/above-fridge",
    parent: "armoires-cuisine/murales",
    index: false,
    rule: { cats: ["upper-refrigerator"] },
    fr: { crumb: "Dessus du frigo", h1: "Armoires dessus du réfrigérateur" },
    en: { crumb: "Above the fridge", h1: "Above-fridge cabinets" },
  },

  // ---- PILIER : garde-manger (index, contenu riche + FAQ) -------------------
  {
    slug: "garde-manger",
    enSlug: "pantry",
    parent: null,
    index: true,
    nav: true,
    rule: { cats: ["utility-cabinet"] },
    fr: {
      crumb: "Garde-manger",
      eyebrow: "Rangement pleine hauteur",
      h1: "Garde-manger de cuisine",
      metaTitle: "Garde-manger de cuisine — armoires pleine hauteur",
      metaDescription:
        "{count} garde-manger et armoires utilitaires en stock : rangement pleine hauteur pour provisions et électroménagers. Blanc Pur ou Chêne blanc, livraison dans le Grand Montréal.",
      intro:
        "Le garde-manger offre un rangement pleine hauteur pour provisions, vaisselle et électroménagers. Nos armoires utilitaires sont offertes en porte Shaker, finition Blanc Pur ou Chêne blanc, et tenues en stock à Rigaud — prêtes à installer.",
      faq: [
        {
          q: "Quelle différence entre un garde-manger et une armoire de rangement de cuisine ?",
          a: "Aucune : un garde-manger est une armoire pleine hauteur dédiée au rangement, et « armoire de rangement de cuisine » désigne la même fonction. Nos garde-mangers sont des modules en stock, en Blanc Pur ou Chêne blanc, prêts à installer.",
        },
        {
          q: "Quelle hauteur fait un garde-manger ?",
          a: "Nos garde-mangers sont des armoires pleine hauteur (généralement de l'ordre de 84 à 96 pouces) pour maximiser le rangement vertical. La hauteur exacte de chaque modèle est indiquée sur sa fiche produit.",
        },
      ],
    },
    en: {
      crumb: "Pantry",
      eyebrow: "Full-height storage",
      h1: "Kitchen pantry cabinets",
      metaTitle: "Kitchen pantry cabinets — full-height storage",
      metaDescription:
        "{count} in-stock pantry and utility cabinets: full-height storage for food and appliances. Pure White or White Oak, delivery across Greater Montreal.",
      intro:
        "A pantry offers full-height storage for food, dishes and appliances. Our utility cabinets come with a Shaker door in Pure White or White Oak, kept in stock in Rigaud — ready to install.",
      faq: [
        {
          q: "What is the difference between a pantry and a kitchen storage cabinet?",
          a: "There is none: a pantry is a full-height cabinet dedicated to storage. Our pantries are in-stock modules in Pure White or White Oak, ready to install.",
        },
      ],
    },
  },

  // ---- PILIER : vanités (index, contenu riche + FAQ) ------------------------
  {
    slug: "vanites",
    enSlug: "bathroom-vanities",
    parent: null,
    index: true,
    nav: true,
    rule: { cats: ["bathroom-base-cabinet"] },
    fr: {
      crumb: "Vanités",
      eyebrow: "Salle de bain",
      h1: "Vanités de salle de bain",
      metaTitle: "Vanités de salle de bain — meubles-lavabos en stock",
      metaDescription:
        "{count} meubles de salle de bain en stock : vanités 24 et 30 pouces, finition Blanc Pur ou Chêne blanc. Prêts à installer, livraison dans le Grand Montréal.",
      intro:
        "Nos vanités de salle de bain et meubles-lavabos sont tenus en stock, en finition Blanc Pur ou Chêne blanc. Formats 24 et 30 pouces, parfaits pour une salle de bain compacte ou une salle d'eau. Prix affichés, prêts à installer.",
      faq: [
        {
          q: "Vos vanités incluent-elles le lavabo et le comptoir ?",
          a: "Nos vanités sont des meubles-lavabos prêts à recevoir un lavabo et un comptoir. Ce qui est inclus est précisé sur chaque fiche ; demandez une soumission pour un prix complet.",
        },
        {
          q: "Faites-vous de la liquidation de vanités de salle de bain ?",
          a: "Nos vanités en stock sont vendues en déstockage continu : prix affichés, prêtes à installer, livraison dans le Grand Montréal.",
        },
      ],
    },
    en: {
      crumb: "Vanities",
      eyebrow: "Bathroom",
      h1: "Bathroom vanities",
      metaTitle: "Bathroom vanities — in-stock vanity cabinets",
      metaDescription:
        "{count} in-stock bathroom cabinets: 24 and 30 inch vanities in Pure White or White Oak. Ready to install, delivery across Greater Montreal.",
      intro:
        "Our bathroom vanities and vanity cabinets are kept in stock, in a Pure White or White Oak finish. 24 and 30 inch sizes, perfect for a compact bathroom or powder room. Prices shown, ready to install.",
      faq: [
        {
          q: "Do your vanities include the sink and countertop?",
          a: "Our vanities are vanity cabinets ready to receive a sink and countertop. What is included is detailed on each product page; request a quote for a complete price.",
        },
      ],
    },
  },

  // ---- SOUS-PILIER vanités : 24 pouces (index, width verrouillée) -----------
  {
    slug: "vanites/24-pouces",
    enSlug: "bathroom-vanities/24-inch",
    parent: "vanites",
    index: true,
    rule: { cats: ["bathroom-base-cabinet"], width: 24 },
    fr: {
      crumb: "24 pouces",
      eyebrow: "Format compact",
      h1: "Vanité de salle de bain 24 pouces",
      metaTitle: "Vanité de salle de bain 24 pouces — 2 portes",
      metaDescription:
        "Vanité de salle de bain 24 pouces à 2 portes, Blanc Pur ou Chêne blanc. Format compact idéal pour une petite salle de bain. En stock, livraison dans le Grand Montréal.",
      intro:
        "La vanité de salle de bain 24 pouces à 2 portes est notre format le plus compact — idéale pour une petite salle de bain ou une salle d'eau. Offerte en Blanc Pur ou Chêne blanc, prête à recevoir un lavabo et un comptoir.",
    },
    en: {
      crumb: "24 inch",
      eyebrow: "Compact size",
      h1: "24-inch bathroom vanity",
      metaTitle: "24-inch bathroom vanity — 2 doors",
      metaDescription:
        "24-inch 2-door bathroom vanity in Pure White or White Oak. Compact size, ideal for a small bathroom. In stock, delivery across Greater Montreal.",
      intro:
        "The 24-inch 2-door bathroom vanity is our most compact size — ideal for a small bathroom or powder room. Available in Pure White or White Oak, ready for a sink and countertop.",
    },
  },

  // ---- SOUS-PILIER vanités : 30 pouces (index, width verrouillée) -----------
  {
    slug: "vanites/30-pouces",
    enSlug: "bathroom-vanities/30-inch",
    parent: "vanites",
    index: true,
    rule: { cats: ["bathroom-base-cabinet"], width: 30 },
    fr: {
      crumb: "30 pouces",
      eyebrow: "Format polyvalent",
      h1: "Vanité de salle de bain 30 pouces",
      metaTitle: "Vanité de salle de bain 30 pouces — 2 portes",
      metaDescription:
        "Vanité de salle de bain 30 pouces à 2 portes, Blanc Pur ou Chêne blanc. Format polyvalent pour salle de bain principale ou d'invités. En stock, livraison dans le Grand Montréal.",
      intro:
        "La vanité de salle de bain 30 pouces à 2 portes offre un rangement généreux dans un format qui convient à la plupart des salles de bain. Offerte en Blanc Pur ou Chêne blanc, prête à recevoir lavabo et comptoir.",
    },
    en: {
      crumb: "30 inch",
      eyebrow: "Versatile size",
      h1: "30-inch bathroom vanity",
      metaTitle: "30-inch bathroom vanity — 2 doors",
      metaDescription:
        "30-inch 2-door bathroom vanity in Pure White or White Oak. Versatile size for a main or guest bathroom. In stock, delivery across Greater Montreal.",
      intro:
        "The 30-inch 2-door bathroom vanity offers generous storage in a size that fits most bathrooms. Available in Pure White or White Oak, ready for a sink and countertop.",
    },
  },

  // ---- MARKETING (index : demande « liquidation » 1K-10K). MANUEL + RÈGLE. ----
  {
    slug: "liquidation",
    enSlug: "clearance",
    parent: null,
    index: true,
    // produits épinglés à la main (mis en avant) + auto par catégorie :
    products: ["S8-SP06", "S8-SP09"],
    rule: { cats: ["base-cabinet"] },
    fr: {
      crumb: "Liquidation",
      eyebrow: "Déstockage",
      h1: "Liquidation d'armoires de cuisine",
      metaTitle: "Liquidation armoires de cuisine — en stock, prix réduits",
      metaDescription:
        "{count} modules d'armoires de cuisine en liquidation : tenus en stock, prêts à installer, livraison dans le Grand Montréal.",
      intro:
        "Notre boutique fonctionne en déstockage continu : armoires de cuisine tenues en inventaire à Rigaud, prix affichés, prêtes à partir. L'équivalent d'une liquidation permanente.",
      faq: [
        {
          q: "La liquidation veut-elle dire fin de série ou défaut ?",
          a: "Non : ce sont des modules standards neufs, tenus en stock, vendus en déstockage continu pour libérer l'inventaire — pas des fins de série abîmées.",
        },
      ],
    },
    en: {
      crumb: "Clearance",
      eyebrow: "Stock clearance",
      h1: "Kitchen cabinet clearance",
      metaTitle: "Kitchen cabinet clearance — in stock, reduced prices",
      metaDescription:
        "{count} kitchen cabinet modules on clearance: held in stock, ready to install, delivery across Greater Montreal.",
      intro:
        "Our shop runs on continuous clearance: kitchen cabinets held in inventory in Rigaud, prices shown, ready to go — the equivalent of a permanent liquidation.",
    },
  },
];

// Garde-fou build-time : la map EN légère (routing/edge/sitemap) DOIT couvrir
// chaque collection. Évite une URL EN cassée si on ajoute une collection sans
// mettre à jour BOUTIQUE_TAXON_EN. Placé APRÈS COLLECTIONS (sinon TDZ).
if (process.env.NODE_ENV !== "production") {
  for (const c of COLLECTIONS) {
    if (BOUTIQUE_TAXON_EN[c.slug] !== c.enSlug) {
      throw new Error(
        `[collections] BOUTIQUE_TAXON_EN désynchronisé pour "${c.slug}" : attendu "${c.enSlug}", trouvé "${BOUTIQUE_TAXON_EN[c.slug] ?? "absent"}". Mets à jour seo/i18n-path.ts + next-sitemap.config.js.`,
      );
    }
  }

  // Garde-fou de COMPLÉTUDE : toute catégorie catalogue avec des produits
  // visibles DOIT être couverte par au moins une collection — sinon ces produits
  // seraient inaccessibles depuis la navigation. Lève en dev si on en oublie une.
  const reach = new Set<string>();
  for (const c of COLLECTIONS)
    for (const p of collectionProducts(c)) reach.add(p.code);
  const uncovered = new Set<string>();
  for (const p of ALL_PRODUCTS) {
    if (p.visible && CANONICAL_CODES.has(p.code) && !reach.has(p.code)) {
      uncovered.add(p.category);
    }
  }
  if (uncovered.size) {
    throw new Error(
      `[collections] Catégories visibles SANS collection (produits inaccessibles via la nav) : ${[...uncovered].join(", ")}. Ajoute une collection avec une rule.cats correspondante.`,
    );
  }
}
