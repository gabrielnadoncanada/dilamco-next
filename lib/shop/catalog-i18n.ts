/**
 * Couche de traduction EN du catalogue. Les données (catalog-*.json) sont
 * générées depuis catalog.xlsx en français uniquement ; on traduit donc à
 * l'affichage via des glossaires. Les noms produit étant gabarités
 * (« Base ... (12") »), on traduit la BASE et on conserve la dimension entre
 * parenthèses. Les libellés inconnus (codes bruts type « WBCT2436 ») passent
 * inchangés.
 *
 * NE PAS éditer les .json (écrasés par `npm run sync:catalog`). Toute nouvelle
 * chaîne affichée se traduit ici.
 */

export type ShopLocale = "fr" | "en";

/** Bases de noms/shortNames produit (FR -> EN), sans la dimension finale. */
const PRODUCT_BASE_EN: Record<string, string> = {
  "1 porte": "1 door",
  "2 portes": "2 doors",
  "1 tiroir et 1 porte": "1 drawer and 1 door",
  "2 tiroirs": "2 drawers",
  "3 tiroirs": "3 drawers",
  "Armoire de cuisine du bas avec 1 porte":
    "Base kitchen cabinet with 1 door",
  "Armoire de cuisine du bas avec 1 tiroir et 1 porte":
    "Base kitchen cabinet with 1 drawer and 1 door",
  "Armoire de cuisine du bas avec 2 portes":
    "Base kitchen cabinet with 2 doors",
  "Armoire de cuisine du bas avec 2 tiroirs":
    "Base kitchen cabinet with 2 drawers",
  "Armoire de cuisine du bas avec 3 tiroirs":
    "Base kitchen cabinet with 3 drawers",
  "Armoire de cuisine du bas avec espace micro-ondes et 1 tiroir":
    "Base kitchen cabinet with microwave space and 1 drawer",
  "Armoire de cuisine du bas avec range-épices coulissant":
    "Base kitchen cabinet with pull-out spice rack",
  "Armoire de cuisine du bas avec tiroir à déchets coulissant":
    "Base kitchen cabinet with pull-out waste bin",
  "Armoire de cuisine du bas coin 90º": "Base kitchen corner cabinet 90º",
  "Armoire de cuisine du bas coin mort": "Base kitchen blind-corner cabinet",
  "Armoire de cuisine du bas pour évier farmhouse":
    "Base kitchen cabinet for farmhouse sink",
  "Armoire de cuisine du haut avec espace micro-ondes et 2 portes":
    "Wall kitchen cabinet with microwave space and 2 doors",
  "Armoire de cuisine du haut coin 45º": "Wall kitchen corner cabinet 45º",
  "Armoire de cuisine du haut coin mort": "Wall kitchen blind-corner cabinet",
  "Armoire de cuisine du haut à 1 porte": "Wall kitchen cabinet with 1 door",
  "Armoire de cuisine du haut à 2 portes": "Wall kitchen cabinet with 2 doors",
  "Armoire de cuisine du haut à 2 portes pour dessus de réfrigérateur":
    "Wall kitchen cabinet with 2 doors for above-fridge",
  "Armoire de cuisine garde-manger": "Pantry kitchen cabinet",
  "Armoire de salle de bain avec 3 tiroirs": "Bathroom cabinet with 3 drawers",
  "Coin 45º": "45º corner",
  "Coin 90º": "90º corner",
  "Coin mort": "Blind corner",
  "Coup-de-pied": "Toe kick",
  "Dessus de réfrigérateur": "Above-fridge",
  "Fausse porte - Bas": "Dummy door - Base",
  "Fausse porte - Garde-manger": "Dummy door - Pantry",
  "Fausse porte - Haut": "Dummy door - Wall",
  "Fausse porte pour armoire de cuisine du bas":
    "Dummy door for base kitchen cabinet",
  "Fausse porte pour armoire de cuisine du haut":
    "Dummy door for wall kitchen cabinet",
  "Fausse porte pour garde-manger": "Dummy door for pantry",
  "Filler pleine hauteur": "Full-height filler",
  "Filler pleine hauteur pour armoire de cuisine":
    "Full-height filler for kitchen cabinet",
  "Garde-manger": "Pantry",
  "Lave-vaisselle": "Dishwasher",
  "Micro-ondes": "Microwave",
  "Moulure de coin extérieur": "Outside corner molding",
  "Moulure de couronne": "Crown molding",
  "Moulure de couronne pour armoires de cuisine":
    "Crown molding for kitchen cabinets",
  "Panneau - Haut": "Panel - Wall",
  "Panneau arrière d'îlot": "Island back panel",
  "Panneau de côté d'îlot": "Island side panel",
  "Panneau latéral pour lave-vaisselle": "Side panel for dishwasher",
  "Panneau latéral pour réfrigérateur": "Side panel for fridge",
  "Panneau pour armoires de cuisine du haut": "Panel for wall kitchen cabinets",
  "Poubelle en plastique": "Plastic bin",
  "Range-épices coulissant": "Pull-out spice rack",
  Réfrigérateur: "Refrigerator",
  "Tiroir coulissant": "Pull-out drawer",
  "Tiroir à déchets coulissant": "Pull-out waste bin",
  Vanité: "Vanity",
  "Vanité de salle de bain à 2 portes": "Bathroom vanity with 2 doors",
  "Évier farmhouse": "Farmhouse sink",
};

/** Noms de catégories (FR -> EN). Couvre name.fr et les overrides d'affichage. */
export const CATEGORY_EN: Record<string, string> = {
  Accessoires: "Accessories",
  "Armoire de salle de bain": "Bathroom cabinet",
  "Armoire du bas": "Base cabinet",
  "Armoire murale": "Wall cabinet",
  "Armoire utilitaire": "Utility cabinet",
  "Charnière style américain": "American-style hinge",
  Coin: "Corner",
  "Coin aveugle gauche": "Left blind corner",
  "Coin aveugle mural": "Wall blind corner",
  "Coin aveugle mural haut": "Tall wall blind corner",
  "Côté dessous tiroir": "Under-drawer side",
  "Dessus du réfrigérateur": "Above the fridge",
  "Fausse porte": "Dummy door",
  "Fausse porte murale": "Wall dummy door",
  "Fausse porte murale/garde-manger": "Wall / pantry dummy door",
  "Fillers bas/mural/haut": "Base / wall / tall fillers",
  "Fillers, panneaux & moulures": "Fillers, panels & moldings",
  Four: "Oven",
  "Garde-manger": "Pantry",
  "Micro-ondes": "Microwave",
  Moulures: "Moldings",
  "Panneau arrière d'îlot": "Island back panel",
  "Panneau d'extrémité mural": "Wall end panel",
  "Panneau de côté d'îlot": "Island side panel",
  "Panneau latéral pour électros": "Appliance side panel",
  Panneaux: "Panels",
  Poubelle: "Waste bin",
  "Range-épices coulissant": "Pull-out spice rack",
  Standard: "Standard",
  "Standard coulissant": "Standard pull-out",
  Tiroir: "Drawer",
  "Tiroir coulissant": "Pull-out drawer",
  "Tiroir à déchets": "Waste drawer",
  Évier: "Sink",
  "Évier farmhouse": "Farmhouse sink",
};

/** Couleurs (ColorName) FR -> EN. */
const COLOR_EN: Record<string, string> = {
  "Blanc Pur": "Pure White",
  "Chêne blanc": "White Oak",
  "Bleu marin": "Navy Blue",
};

/** Finis (data `finish`) FR -> EN. */
const FINISH_EN: Record<string, string> = {
  Blanc: "White",
  "Chêne blanc": "White Oak",
};

/** Moulures (Molding) FR -> EN. */
const MOLDING_EN: Record<string, string> = {
  "1 po": "1 in",
  "3 po": "3 in",
};

/**
 * Traduit un libellé produit (name ou shortName) : isole la dimension finale
 * `(…)`, traduit la base, recolle la dimension. Inchangé si base inconnue.
 */
export function localizeProductLabel(s: string, locale: ShopLocale): string {
  if (locale === "fr" || !s) return s;
  const m = s.match(/^(.*?)(\s*\([^)]*\))\s*$/);
  const base = (m ? m[1] : s).trim();
  const suffix = m ? m[2] : "";
  const en = PRODUCT_BASE_EN[base];
  return en ? `${en}${suffix}` : s;
}

export function localizeColor(c: string, locale: ShopLocale): string {
  return locale === "en" ? (COLOR_EN[c] ?? c) : c;
}

/** Famille produit (= nom de catégorie top-parent) FR -> EN. */
export function localizeFamily(f: string, locale: ShopLocale): string {
  return locale === "en" ? (CATEGORY_EN[f] ?? f) : f;
}

export function localizeFinish(f: string, locale: ShopLocale): string {
  return locale === "en" ? (FINISH_EN[f] ?? f) : f;
}

export function localizeMolding(m: string, locale: ShopLocale): string {
  return locale === "en" ? (MOLDING_EN[m] ?? m) : m;
}

/** Unité de dimension : « po » (FR) / « in » (EN). */
export function dimUnit(locale: ShopLocale): string {
  return locale === "en" ? "in" : "po";
}

const CORNER_EN: Record<string, string> = {
  Non: "No",
  "Coin 45 degres": "45° corner",
  "Coin 90 degres": "90° corner",
};

export function localizeCorner(c: string, locale: ShopLocale): string {
  return locale === "en" ? (CORNER_EN[c] ?? c) : c;
}

/** Plafond « 8 pi » -> « 8 ft » en anglais (pi = pieds). */
export function localizeCeiling(c: string, locale: ShopLocale): string {
  if (locale !== "en" || !c) return c;
  return c.replace(/\bpi\b/g, "ft");
}
