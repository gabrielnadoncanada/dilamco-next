import { z } from "zod";
import { ImageSchema } from "@/features/page-builder/sections/shared/schema";

const ImageTile = z.object({
  kind: z.literal("image"),
  image: ImageSchema,
  /** Légende courte affichée en pastille (≤ 6 mots). */
  caption: z.string().min(1).max(60).optional(),
  href: z.string().min(1).optional(),
  /** Tuile large (2 colonnes) ou haute (2 rangées) sur desktop. */
  span: z.enum(["wide", "tall", "square"]).optional(),
});

const StatTile = z.object({
  kind: z.literal("stat"),
  /** Valeur courte (« 2004 », « 5,0 », « 40 000 $ »). */
  value: z.string().min(1).max(16),
  label: z.string().min(1).max(60),
});

const QuoteTile = z.object({
  kind: z.literal("quote"),
  /** ≤ 30 mots. */
  quote: z.string().min(1).max(220),
  author: z.string().min(1).max(60),
});

const TextTile = z.object({
  kind: z.literal("text"),
  title: z.string().min(1).max(60),
  /** ≤ 25 mots. */
  description: z.string().min(1).max(200),
  href: z.string().min(1).optional(),
});

/**
 * Grille bento : 4 à 7 tuiles de formats différents (photos, chiffre, citation,
 * texte) pour les pages portées par l'image (espaces, à propos, projets).
 */
export const GridBentoSchema = z.object({
  heading: z.string().min(1).optional(),
  intro: z.string().min(1).optional(),
  tiles: z
    .array(z.discriminatedUnion("kind", [ImageTile, StatTile, QuoteTile, TextTile]))
    .min(4)
    .max(7),
});

export type GridBentoProps = z.infer<typeof GridBentoSchema>;
