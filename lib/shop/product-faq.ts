// ============================================================================
// GÉNÉRATEUR DE FAQ PRODUIT (déterministe, piloté par les specs)
// ----------------------------------------------------------------------------
// Même philosophie que product-description.ts : chaque fiche compose une FAQ
// UNIQUE depuis ses specs réelles (dimensions, portes/tiroirs, finitions,
// catégorie) + variation de formulation SEED déterministe. But : profondeur de
// contenu indexable par fiche (anti « Explorée, actuellement non indexée »)
// sans texte partagé entre les ~197 modèles. Aucune IA : les réponses ne
// contiennent QUE des faits déjà affirmés ailleurs sur le site (construction
// bouleau/queue d'aronde = bloc « Construction et qualité » ; entrepôt Rigaud,
// soumission 48 h = nav/home).
// ============================================================================

import type { ProductModel } from "./types";
import { localizeProductLabel } from "./catalog-i18n";
import {
  seed,
  pick,
  finishNames,
  profilNames,
  joinList,
  typeNoun,
} from "./product-description";

type Loc = "fr" | "en";

export interface FaqItem {
  q: string;
  a: string;
}

/** Familles murales (fixées au mur, pas posées au sol). */
const WALL_CATEGORIES = new Set([
  "standard",
  "corner",
  "microwave",
  "upper-refrigerator",
]);
const BASE_CATEGORIES = new Set([
  "base-cabinet-standard",
  "base-cabinet-drawer",
  "base-cabinet-corner",
  "base-microwave-cabinet",
  "base-cabinet-spice-rack-pull-out",
  "base-cabinet-garbage-pull-out",
  "base-cabinet-farmhouse-sink",
]);
const BATH_CATEGORIES = new Set([
  "bathroom-base-cabinet-sink",
  "bathroom-base-cabinet-drawer",
]);

/**
 * Genre du nom de type FR (accord de « ce/cette »). Les noms de TYPES_FR
 * commencent tous par un de ces mots ; défaut féminin (« armoire »).
 */
function isFeminineNoun(noun: string): boolean {
  const head = noun.split(" ")[0];
  return !["caisson", "garde-manger", "meuble", "module", "bloc"].includes(head);
}

function configPhraseFaq(model: ProductModel, loc: Loc): string {
  const d = model.doors ?? 0;
  const dr = model.drawers ?? 0;
  const parts: string[] = [];
  if (loc === "fr") {
    if (d > 0) parts.push(`${d} porte${d > 1 ? "s" : ""}`);
    if (dr > 0) parts.push(`${dr} tiroir${dr > 1 ? "s" : ""}`);
    return parts.length ? `, avec ${joinList(parts, "fr")}` : "";
  }
  if (d > 0) parts.push(`${d} door${d > 1 ? "s" : ""}`);
  if (dr > 0) parts.push(`${dr} drawer${dr > 1 ? "s" : ""}`);
  return parts.length ? `, with ${joinList(parts, "en")}` : "";
}

/**
 * FAQ unique d'un modèle : 4 Q/R composées des specs réelles + variation
 * déterministe (stable au build, différente d'un modèle à l'autre).
 */
export function productFaq(model: ProductModel, loc: Loc): FaqItem[] {
  const s = seed(model.id);
  const name = localizeProductLabel(model.name, loc);
  const noun = typeNoun(model.category, loc);
  const finishes = finishNames(model, loc);
  const profils = profilNames(model, loc);
  const cfg = configPhraseFaq(model, loc);
  const isWall = WALL_CATEGORIES.has(model.category);
  const isBase = BASE_CATEGORIES.has(model.category);
  const isBath = BATH_CATEGORIES.has(model.category);
  const isPantry = model.category === "pantry";
  const dr = model.drawers ?? 0;
  // Décorrèle les variations entre largeurs voisines (voir product-description).
  const wv = Math.floor(model.w / 3) + model.doors + dr;
  // Déterminant FR accordé au genre du nom de type (« cette armoire », « ce caisson »).
  const fem = isFeminineNoun(noun);
  const det = fem ? "cette" : "ce";
  const Det = fem ? "Cette" : "Ce";

  if (loc === "fr") {
    const items: FaqItem[] = [];

    // 1) Dimensions + configuration (specs exactes → réponse unique).
    items.push({
      q: pick(
        [
          `Quelles sont les dimensions exactes du modèle ${name} ?`,
          `Quel format fait le modèle ${name} ?`,
          `Quelles dimensions pour ${det} ${noun} de ${model.w} pouces ?`,
        ],
        s + wv,
      ),
      a: `${Det} ${noun} mesure ${model.w} po de largeur, ${model.h} po de hauteur et ${model.d} po de profondeur${cfg}. ${pick(
        [
          "Les dimensions exactes figurent aussi dans le dessin technique de la galerie.",
          "Un dessin technique coté est disponible dans la galerie de la fiche.",
          "Vérifiez l'ouverture disponible chez vous avant de commander.",
        ],
        s + wv + 1,
      )}`,
    });

    // 2) Finitions / profils de porte (axes réels du modèle).
    if (finishes.length || profils.length) {
      const bits: string[] = [];
      if (finishes.length) bits.push(`en finition ${joinList(finishes, "fr")}`);
      if (profils.length) bits.push(`avec porte ${joinList(profils, "fr")}`);
      items.push({
        q: pick(
          [
            `En quelles finitions le modèle ${name} est-il offert ?`,
            `Quelles couleurs sont disponibles pour ${det} ${noun} ?`,
          ],
          s + wv + 2,
        ),
        a: `Ce modèle est offert ${bits.join(", ")}. ${pick(
          [
            "Chaque combinaison a son prix et son numéro de produit propres, affichés en sélectionnant les options sur la fiche.",
            "Le prix exact s'affiche sur la fiche selon la combinaison choisie.",
          ],
          s + wv + 3,
        )}`,
      });
    }

    // 3) Construction (faits du bloc « Construction et qualité »).
    items.push({
      q: pick(
        [
          `Comment le modèle ${name} est-il construit ?`,
          `Quels matériaux composent le modèle ${name} ?`,
        ],
        s + wv + 4,
      ),
      a: `${pick(
        [
          "Caisson stable et rigide à l'intérieur propre, avec assemblages précis",
          "Structure rigide aux assemblages précis, intérieur fini proprement",
        ],
        s + wv + 5,
      )}${
        dr > 0
          ? ", et tiroirs en bois massif de bouleau assemblés en queue d'aronde"
          : ""
      }. ${
        isWall
          ? "Le caisson mural se fixe solidement au mur, dans les montants."
          : "Les tablettes intérieures sont ajustables selon vos besoins."
      }`,
    });

    // 4) Question d'usage propre à la catégorie.
    if (isBase) {
      items.push({
        q: `Peut-on installer un comptoir sur ce caisson de ${model.w} pouces ?`,
        a: `Oui : à ${model.h} po de hauteur, ce caisson du bas est conçu pour recevoir un comptoir standard. Sa profondeur de ${model.d} po correspond aux plans de travail courants de cuisine.`,
      });
    } else if (isWall) {
      items.push({
        q: `À quelle hauteur installer cette ${noun.includes("armoire") ? noun : "armoire murale"} ?`,
        a: `On installe généralement les armoires murales à environ 18 po au-dessus du comptoir. Avec ses ${model.h} po de hauteur et ${model.d} po de profondeur, vérifiez le dégagement au plafond avant l'installation.`,
      });
    } else if (isPantry) {
      items.push({
        q: `Le modèle ${name} est-il pleine hauteur ?`,
        a: `Oui : cette colonne fait ${model.h} po de hauteur sur ${model.w} po de largeur — un rangement du sol vers le plafond pour provisions, vaisselle ou petits électroménagers.`,
      });
    } else if (isBath) {
      items.push({
        q: `Ce meuble convient-il à une petite salle de bain ?`,
        a: `Avec ${model.w} po de largeur et ${model.d} po de profondeur, ce format s'intègre dans la plupart des salles de bain${model.category === "bathroom-base-cabinet-sink" ? " et est prêt à recevoir un lavabo et un comptoir" : ""}.`,
      });
    }

    // 5) Stock / livraison (faits nav + home, paramétrés par le nom).
    items.push({
      q: pick(
        [
          `Le modèle ${name} est-il en stock ? Quels sont les délais ?`,
          `Quel est le délai de livraison pour ${det} ${noun} ?`,
        ],
        s + wv + 6,
      ),
      a: `${pick(
        [
          "Ce modèle est tenu en stock à notre entrepôt de Rigaud — pas de délai de fabrication.",
          "Il est en inventaire à notre entrepôt de Rigaud, donc aucun délai de production.",
        ],
        s + wv + 7,
      )} Livraison et installation offertes dans le Grand Montréal, et soumission ferme sous 48 h sur votre sélection.`,
    });

    return items;
  }

  // --- EN ---
  const items: FaqItem[] = [];

  items.push({
    q: pick(
      [
        `What are the exact dimensions of the ${name}?`,
        `What size is the ${name}?`,
        `What are the dimensions of this ${model.w}-inch ${noun}?`,
      ],
      s + wv,
    ),
    a: `This ${noun} measures ${model.w}″ wide, ${model.h}″ high and ${model.d}″ deep${cfg}. ${pick(
      [
        "Exact dimensions also appear on the technical drawing in the gallery.",
        "A dimensioned technical drawing is available in the product gallery.",
        "Check your available opening before ordering.",
      ],
      s + wv + 1,
    )}`,
  });

  if (finishes.length || profils.length) {
    const bits: string[] = [];
    if (finishes.length) bits.push(`in ${joinList(finishes, "en")}`);
    if (profils.length) bits.push(`with ${joinList(profils, "en")} doors`);
    items.push({
      q: pick(
        [
          `What finishes is the ${name} available in?`,
          `What colours are available for this ${noun}?`,
        ],
        s + wv + 2,
      ),
      a: `This model is available ${bits.join(", ")}. ${pick(
        [
          "Each combination has its own price and product number, shown as you select options on the page.",
          "The exact price updates on the page based on the combination you choose.",
        ],
        s + wv + 3,
      )}`,
    });
  }

  items.push({
    q: pick(
      [
        `How is this ${noun} built?`,
        `What materials is the ${name} made of?`,
      ],
      s + wv + 4,
    ),
    a: `${pick(
      [
        "A stable, rigid box with a clean interior and precise joinery",
        "Rigid construction with precise joinery and a cleanly finished interior",
      ],
      s + wv + 5,
    )}${
      dr > 0 ? ", with solid birch drawers assembled with dovetail joints" : ""
    }. ${
      isWall
        ? "The wall cabinet anchors securely into the wall studs."
        : "Interior shelves are adjustable to suit your needs."
    }`,
  });

  if (isBase) {
    items.push({
      q: `Can I install a countertop on this ${noun}?`,
      a: `Yes: at ${model.h}″ high, this base cabinet is designed to receive a standard countertop. Its ${model.d}″ depth matches common kitchen worktops.`,
    });
  } else if (isWall) {
    items.push({
      q: `At what height should this wall cabinet be installed?`,
      a: `Wall cabinets are typically installed about 18″ above the countertop. At ${model.h}″ high and ${model.d}″ deep, check your ceiling clearance before installing.`,
    });
  } else if (isPantry) {
    items.push({
      q: `Is the ${name} a full-height cabinet?`,
      a: `Yes: this column stands ${model.h}″ tall by ${model.w}″ wide — floor-to-ceiling storage for food, dishes or small appliances.`,
    });
  } else if (isBath) {
    items.push({
      q: `Does this cabinet fit a small bathroom?`,
      a: `At ${model.w}″ wide and ${model.d}″ deep, this size fits most bathrooms${model.category === "bathroom-base-cabinet-sink" ? " and is ready to receive a sink and countertop" : ""}.`,
    });
  }

  items.push({
    q: pick(
      [
        `Is the ${name} in stock? What is the lead time?`,
        `What is the delivery time for this ${noun}?`,
      ],
      s + wv + 6,
    ),
    a: `${pick(
      [
        "This model is held in stock at our Rigaud warehouse — no fabrication delay.",
        "It is in inventory at our Rigaud warehouse, so there is no production wait.",
      ],
      s + wv + 7,
    )} Delivery and installation are available across Greater Montreal, with a firm quote within 48 hours on your selection.`,
  });

  return items;
}
