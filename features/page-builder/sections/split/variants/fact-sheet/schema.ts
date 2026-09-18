import { z } from "zod";
import { ImageSchema } from "@/features/page-builder/sections/shared/schema";

const RowSchema = z.object({
  /** Étiquette (« Durée », « Permis », « Population »). 1–3 mots. */
  label: z.string().min(1).max(40),
  /** Valeur ≤ 14 mots. */
  value: z.string().min(1).max(160),
});

/**
 * Fiche technique : titre + intro à gauche, tableau de faits (label → valeur)
 * à droite, photo optionnelle sous le titre. Sert aux pages zones (« Ce qu'on
 * sait de Kirkland ») et services (« En bref »). Le lecteur scanne, ne lit pas.
 */
export const SplitFactSheetSchema = z.object({
  heading: z.string().min(1),
  intro: z.string().min(1).optional(),
  rows: z.array(RowSchema).min(3).max(8),
  image: ImageSchema.optional(),
  /** Note de bas de fiche (source, réserve). ≤ 20 mots. */
  note: z.string().min(1).max(200).optional(),
});

export type SplitFactSheetProps = z.infer<typeof SplitFactSheetSchema>;
