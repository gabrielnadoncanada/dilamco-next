// ============================================================================
// GÉNÉRATEUR DE DESCRIPTION PRODUIT (déterministe, piloté par les specs)
// ----------------------------------------------------------------------------
// But : éviter le DUPLICATE/THIN content sur les ~143 fiches. Au lieu de 4
// textes i18n partagés, chaque modèle compose une description UNIQUE à partir
// de ses specs réelles (type, dimensions, portes/tiroirs, finitions, profils)
// + une variation de formulation SEED déterministe (donc stable au build, mais
// différente d'un produit à l'autre même de même type). Aucune IA : zéro
// hallucination, specs toujours exactes, auto-gère les nouveaux produits.
// ============================================================================

import type { ProductModel } from "./types";

type Loc = "fr" | "en";

/** Seed stable depuis le code produit → choix de formulation reproductible. */
export function seed(code: string): number {
  let s = 0;
  for (let i = 0; i < code.length; i += 1) s = (s * 31 + code.charCodeAt(i)) >>> 0;
  return s;
}
// Index robuste : tronque (les specs peuvent être des floats, ex. h = 34.5) et
// borne en positif, pour ne jamais tomber sur arr[float] / arr[négatif] = undefined.
export const pick = <T>(arr: T[], s: number): T =>
  arr[Math.abs(Math.trunc(s)) % arr.length];

/** Profil de type : noms + ouvertures + cas d'usage, par langue. */
interface TypeProfile {
  noun: string; // ex. "armoire de cuisine du bas"
  openings: string[]; // {w} = largeur en pouces
  useCases: string[];
}

// Profils par catégorie catalogue (fallback par famille plus bas).
const TYPES_FR: Record<string, TypeProfile> = {
  "base-cabinet-standard": {
    noun: "armoire de cuisine du bas",
    openings: [
      "Caisson du bas de {w} pouces",
      "Armoire de cuisine du bas de {w} pouces",
      "Module bas de {w} pouces",
    ],
    useCases: [
      "Idéal comme base de plan de travail et rangement quotidien.",
      "La brique de base de votre cuisine, sous le comptoir.",
      "Pour structurer votre comptoir et ranger l'essentiel à portée de main.",
    ],
  },
  "base-cabinet-drawer": {
    noun: "caisson du bas à tiroirs",
    openings: [
      "Caisson du bas à tiroirs de {w} pouces",
      "Bloc-tiroirs du bas de {w} pouces",
      "Armoire du bas à tiroirs de {w} pouces",
    ],
    useCases: [
      "Rangement à plein accès : ustensiles, casseroles et couverts visibles d'un coup d'œil.",
      "Les tiroirs sortent entièrement pour atteindre le fond sans se pencher.",
      "Parfait près de la cuisinière pour les casseroles et la coutellerie.",
    ],
  },
  "base-cabinet-corner": {
    noun: "armoire de coin du bas",
    openings: [
      "Armoire de coin du bas de {w} pouces",
      "Caisson d'angle inférieur de {w} pouces",
      "Module de coin du bas de {w} pouces",
    ],
    useCases: [
      "Exploite l'angle de comptoir souvent perdu en rangement utile.",
      "Récupère le volume mort du coin, là où deux comptoirs se rencontrent.",
      "Transforme l'angle de la cuisine en espace de rangement accessible.",
    ],
  },
  "base-microwave-cabinet": {
    noun: "armoire du bas à micro-ondes",
    openings: [
      "Armoire du bas à niche micro-ondes de {w} pouces",
      "Caisson bas avec espace micro-ondes de {w} pouces",
    ],
    useCases: [
      "Intègre le four à micro-ondes proprement, sans encombrer le comptoir.",
      "Libère le plan de travail en logeant l'électroménager dans le caisson.",
    ],
  },
  "base-cabinet-spice-rack-pull-out": {
    noun: "armoire range-épices coulissante",
    openings: [
      "Armoire range-épices coulissante de {w} pouces",
      "Caisson étroit à range-épices de {w} pouces",
    ],
    useCases: [
      "Exploite les espaces étroits entre deux armoires en rangement à épices coulissant.",
      "Une colonne mince qui sort entièrement pour garder épices et bouteilles à portée.",
    ],
  },
  "base-cabinet-garbage-pull-out": {
    noun: "armoire à tiroir à déchets",
    openings: [
      "Armoire à tiroir à déchets de {w} pouces",
      "Caisson à poubelle coulissante de {w} pouces",
    ],
    useCases: [
      "Dissimule poubelle et bac de recyclage derrière une façade, sur tiroir coulissant.",
      "Cache les déchets dans un tiroir qui sort en douceur.",
    ],
  },
  "base-cabinet-farmhouse-sink": {
    noun: "armoire pour évier farmhouse",
    openings: [
      "Armoire du bas pour évier farmhouse de {w} pouces",
      "Caisson à façade ouverte pour évier de ferme de {w} pouces",
    ],
    useCases: [
      "Conçu pour accueillir un évier de ferme (apron) à grande façade.",
      "Façade ouverte prête à recevoir un évier tablier de style fermette.",
    ],
  },
  standard: {
    noun: "armoire murale",
    openings: [
      "Armoire murale de cuisine de {w} pouces",
      "Module mural du haut de {w} pouces",
      "Armoire de cuisine murale de {w} pouces",
    ],
    useCases: [
      "Maximise le rangement vertical au-dessus du plan de travail.",
      "Range vaisselle et provisions à hauteur des yeux, au-dessus du comptoir.",
      "Dégage le comptoir en montant le rangement sur le mur.",
    ],
  },
  corner: {
    noun: "armoire murale de coin",
    openings: [
      "Armoire murale de coin de {w} pouces",
      "Caisson d'angle mural de {w} pouces",
    ],
    useCases: [
      "Récupère l'angle haut de la cuisine, souvent inutilisé.",
      "Exploite le coin mural pour ne perdre aucun centimètre.",
    ],
  },
  microwave: {
    noun: "armoire murale à micro-ondes",
    openings: [
      "Armoire murale à niche micro-ondes de {w} pouces",
      "Caisson mural avec espace micro-ondes de {w} pouces",
    ],
    useCases: [
      "Loge le micro-ondes en hauteur, à portée mais hors du comptoir.",
      "Intègre l'électroménager dans la ligne d'armoires murales.",
    ],
  },
  "upper-refrigerator": {
    noun: "armoire au-dessus du réfrigérateur",
    openings: [
      "Armoire profonde au-dessus du réfrigérateur de {w} pouces",
      "Caisson dessus-frigo de {w} pouces",
    ],
    useCases: [
      "Récupère l'espace au-dessus du frigo pour les objets peu utilisés.",
      "Profondeur adaptée au réfrigérateur, pour ranger plats et réserves en hauteur.",
    ],
  },
  pantry: {
    noun: "garde-manger",
    openings: [
      "Garde-manger pleine hauteur de {w} pouces",
      "Armoire utilitaire pleine hauteur de {w} pouces",
      "Colonne garde-manger de {w} pouces",
    ],
    useCases: [
      "Rangement pleine hauteur pour provisions, vaisselle et électroménagers.",
      "Une colonne du sol au plafond pour maximiser le stockage.",
      "Concentre provisions et petits électros dans une seule armoire haute.",
    ],
  },
  "bathroom-base-cabinet-sink": {
    noun: "vanité de salle de bain",
    openings: [
      "Vanité de salle de bain de {w} pouces",
      "Meuble-lavabo de {w} pouces",
    ],
    useCases: [
      "Prête à recevoir un lavabo et un comptoir, format compact pour petite salle de bain.",
      "Base de salle de bain pour lavabo et comptoir, dans un format qui s'intègre partout.",
    ],
  },
  "bathroom-base-cabinet-drawer": {
    noun: "meuble de salle de bain à tiroirs",
    openings: [
      "Meuble de salle de bain à tiroirs de {w} pouces",
      "Caisson de salle de bain à tiroirs de {w} pouces",
    ],
    useCases: [
      "Tiroirs de rangement pour serviettes et accessoires de salle de bain.",
      "Du rangement d'appoint à tiroirs à côté de la vanité.",
    ],
  },
};

const TYPES_EN: Record<string, TypeProfile> = {
  "base-cabinet-standard": {
    noun: "kitchen base cabinet",
    openings: ["{w}-inch kitchen base cabinet", "{w}-inch base cabinet", "{w}-inch lower cabinet"],
    useCases: [
      "The everyday base for your countertop and daily storage.",
      "A building block of the kitchen, right under the counter.",
      "Structures your counter and keeps essentials within reach.",
    ],
  },
  "base-cabinet-drawer": {
    noun: "base drawer cabinet",
    openings: ["{w}-inch base drawer cabinet", "{w}-inch drawer base", "{w}-inch lower drawer cabinet"],
    useCases: [
      "Full-access storage: pots, utensils and cutlery visible at a glance.",
      "Drawers pull out fully so you reach the back without bending.",
      "Ideal near the range for pots and flatware.",
    ],
  },
  "base-cabinet-corner": {
    noun: "base corner cabinet",
    openings: ["{w}-inch base corner cabinet", "{w}-inch lower corner cabinet"],
    useCases: [
      "Turns the often-wasted counter corner into usable storage.",
      "Recovers the dead corner where two counters meet.",
    ],
  },
  "base-microwave-cabinet": {
    noun: "base microwave cabinet",
    openings: ["{w}-inch base cabinet with microwave space", "{w}-inch lower microwave cabinet"],
    useCases: [
      "Houses the microwave cleanly, keeping the counter clear.",
      "Frees up the worktop by tucking the appliance into the cabinet.",
    ],
  },
  "base-cabinet-spice-rack-pull-out": {
    noun: "pull-out spice rack cabinet",
    openings: ["{w}-inch pull-out spice rack cabinet", "{w}-inch narrow spice cabinet"],
    useCases: [
      "Uses the narrow gap between cabinets as a pull-out spice rack.",
      "A slim column that pulls out fully to keep spices and bottles handy.",
    ],
  },
  "base-cabinet-garbage-pull-out": {
    noun: "waste pull-out cabinet",
    openings: ["{w}-inch waste pull-out cabinet", "{w}-inch pull-out bin cabinet"],
    useCases: [
      "Hides trash and recycling behind a front, on a smooth pull-out.",
      "Keeps bins out of sight in a soft-pull drawer.",
    ],
  },
  "base-cabinet-farmhouse-sink": {
    noun: "farmhouse sink base cabinet",
    openings: ["{w}-inch farmhouse sink base cabinet", "{w}-inch apron-front sink base"],
    useCases: [
      "Built to fit an apron (farmhouse) sink with a large front.",
      "Open front ready for a farmhouse-style apron sink.",
    ],
  },
  standard: {
    noun: "wall cabinet",
    openings: ["{w}-inch kitchen wall cabinet", "{w}-inch upper cabinet", "{w}-inch wall cabinet"],
    useCases: [
      "Maximizes vertical storage above the worktop.",
      "Keeps dishes and food at eye level, above the counter.",
      "Clears the counter by moving storage onto the wall.",
    ],
  },
  corner: {
    noun: "wall corner cabinet",
    openings: ["{w}-inch wall corner cabinet", "{w}-inch upper corner cabinet"],
    useCases: [
      "Recovers the upper kitchen corner that usually goes unused.",
      "Uses the wall corner so no inch is wasted.",
    ],
  },
  microwave: {
    noun: "wall microwave cabinet",
    openings: ["{w}-inch wall cabinet with microwave space", "{w}-inch upper microwave cabinet"],
    useCases: [
      "Holds the microwave up high, handy but off the counter.",
      "Integrates the appliance into the line of wall cabinets.",
    ],
  },
  "upper-refrigerator": {
    noun: "above-fridge cabinet",
    openings: ["{w}-inch deep above-fridge cabinet", "{w}-inch over-fridge cabinet"],
    useCases: [
      "Recovers the space above the fridge for rarely-used items.",
      "Fridge-depth storage for trays and reserves up high.",
    ],
  },
  pantry: {
    noun: "pantry cabinet",
    openings: ["{w}-inch full-height pantry", "{w}-inch full-height utility cabinet", "{w}-inch pantry column"],
    useCases: [
      "Full-height storage for food, dishes and appliances.",
      "A floor-to-ceiling column to maximize storage.",
      "Gathers food and small appliances into one tall cabinet.",
    ],
  },
  "bathroom-base-cabinet-sink": {
    noun: "bathroom vanity",
    openings: ["{w}-inch bathroom vanity", "{w}-inch vanity cabinet"],
    useCases: [
      "Ready for a sink and countertop, compact for a small bathroom.",
      "A bathroom base for sink and counter in a size that fits anywhere.",
    ],
  },
  "bathroom-base-cabinet-drawer": {
    noun: "bathroom drawer cabinet",
    openings: ["{w}-inch bathroom drawer cabinet", "{w}-inch bathroom drawer base"],
    useCases: [
      "Drawer storage for towels and bathroom accessories.",
      "Extra drawer storage beside the vanity.",
    ],
  },
};

/** Valeurs d'un axe (couleur/profil) du modèle → libellés FR. */
function axisLabels(model: ProductModel, key: string): string[] {
  const axis = model.axes.find((a) => a.key === key);
  return axis ? axis.values.map((v) => v.label) : [];
}

const COLOR_EN: Record<string, string> = {
  "Blanc Pur": "Pure White",
  "Chêne blanc": "White Oak",
  "Bleu marin": "Navy Blue",
};

/** Finitions (couleurs), localisées. */
export function finishNames(model: ProductModel, loc: Loc): string[] {
  const labels = axisLabels(model, "couleur");
  return loc === "fr" ? labels : labels.map((l) => COLOR_EN[l] ?? l);
}
/** Profils de porte, localisés (« Shaker 1 po » → « Shaker 1" » en EN). */
export function profilNames(model: ProductModel, loc: Loc): string[] {
  const labels = axisLabels(model, "profil");
  return loc === "fr" ? labels : labels.map((l) => l.replace(/\s*po\b/, '"'));
}

/** Liste en français : ["A","B","C"] → "A, B ou C". */
export function joinList(items: string[], loc: Loc): string {
  if (items.length <= 1) return items[0] ?? "";
  const last = items[items.length - 1];
  const head = items.slice(0, -1).join(", ");
  return `${head} ${loc === "fr" ? "ou" : "or"} ${last}`;
}

function configPhrase(model: ProductModel, loc: Loc): string {
  const d = model.doors ?? 0;
  const dr = model.drawers ?? 0;
  const parts: string[] = [];
  if (loc === "fr") {
    if (d > 0) parts.push(`${d} porte${d > 1 ? "s" : ""}`);
    if (dr > 0) parts.push(`${dr} tiroir${dr > 1 ? "s" : ""}`);
    return parts.length ? ` à ${joinList(parts, "fr")}` : "";
  }
  if (d > 0) parts.push(`${d} door${d > 1 ? "s" : ""}`);
  if (dr > 0) parts.push(`${dr} drawer${dr > 1 ? "s" : ""}`);
  return parts.length ? ` with ${joinList(parts, "en")}` : "";
}

const CLOSES_FR = [
  "En stock à notre entrepôt de Rigaud, livraison et installation dans le Grand Montréal.",
  "Tenu en stock à Rigaud, prêt à partir — livraison et installation dans le Grand Montréal.",
  "Disponible en stock, livré et installé dans le Grand Montréal.",
];
const CLOSES_EN = [
  "In stock at our Rigaud warehouse, with delivery and installation across Greater Montreal.",
  "Held in stock in Rigaud, ready to go — delivery and installation across Greater Montreal.",
  "Available in stock, delivered and installed across Greater Montreal.",
];

/**
 * Description UNIQUE d'un modèle, composée de ses specs réelles + variation
 * déterministe. 3-4 phrases : ouverture (type + dims) + config + finitions/profils
 * + cas d'usage + en-stock/livraison.
 */
export function productDescription(model: ProductModel, loc: Loc): string {
  const types = loc === "fr" ? TYPES_FR : TYPES_EN;
  const profile = types[model.category];
  const s = seed(model.id);

  const dims = `${model.w} × ${model.h} × ${model.d} ${loc === "fr" ? "po" : "in"}`;
  const finishes = finishNames(model, loc);
  const profils = profilNames(model, loc);

  // Repli générique si la catégorie n'a pas de profil dédié.
  if (!profile) {
    const noun = loc === "fr" ? "armoire en stock" : "in-stock cabinet";
    const fin =
      finishes.length > 0
        ? loc === "fr"
          ? ` Disponible en ${joinList(finishes, "fr")}.`
          : ` Available in ${joinList(finishes, "en")}.`
        : "";
    return loc === "fr"
      ? `${noun.charAt(0).toUpperCase() + noun.slice(1)} de ${dims}.${fin} ${pick(CLOSES_FR, s)}`
      : `${dims} ${noun}.${fin} ${pick(CLOSES_EN, s)}`;
  }

  // Variations déterministes. Les largeurs étant des MULTIPLES DE 3 (9, 12, 15…),
  // `w % 3` vaut toujours 0 → on dérive plutôt de `floor(w/3)` (= 3, 4, 5…),
  // valeurs consécutives qui garantissent des formulations distinctes entre
  // largeurs voisines (FB09 ≠ FB12 ≠ FB15). +0/+1/+2 décorrèlent les 3 axes.
  const dr = model.drawers ?? 0;
  const wv = Math.floor(model.w / 3) + model.doors + dr;
  const opening = pick(profile.openings, s + wv).replace("{w}", String(model.w));
  const cfg = configPhrase(model, loc);
  const useCase = pick(profile.useCases, s + wv + 1);
  const close = pick(loc === "fr" ? CLOSES_FR : CLOSES_EN, s + wv + 2);

  // Finitions + profils de porte. « Disponible » (FR) est invariable en genre →
  // pas de souci d'accord avec « caisson » (m.) vs « armoire/vanité » (f.).
  let finishPhrase = "";
  if (loc === "fr") {
    const bits: string[] = [];
    if (finishes.length) bits.push(`finition ${joinList(finishes, "fr")}`);
    if (profils.length) bits.push(`porte ${joinList(profils, "fr")}`);
    if (bits.length) finishPhrase = ` Disponible en ${bits.join(", ")}.`;
  } else {
    const parts: string[] = [];
    if (finishes.length) parts.push(`in ${joinList(finishes, "en")}`);
    if (profils.length) parts.push(`with ${joinList(profils, "en")} doors`);
    if (parts.length) finishPhrase = ` Available ${parts.join(", ")}.`;
  }

  // Phrase 1 : ouverture + config + dimensions.
  const sentence1 =
    loc === "fr"
      ? `${opening}${cfg}, dimensions ${dims}.`
      : `${opening}${cfg}, ${dims}.`;

  return `${sentence1}${finishPhrase} ${useCase} ${close}`;
}

/** Nom générique du type de caisson (ex. « armoire murale »), pour la FAQ produit. */
export function typeNoun(category: string, loc: Loc): string {
  const types = loc === "fr" ? TYPES_FR : TYPES_EN;
  return (
    types[category]?.noun ?? (loc === "fr" ? "armoire en stock" : "in-stock cabinet")
  );
}
