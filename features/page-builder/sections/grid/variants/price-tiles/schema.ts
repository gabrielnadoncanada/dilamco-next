import { z } from "zod";
import { ActionSchema } from "@/features/page-builder/sections/shared/schema/action";

const TileSchema = z.object({
  /** Nom de la formule (« Salle de bain », « Cuisine complète »). */
  title: z.string().min(1).max(50),
  /** Fourchette ou « À partir de » (« 35 000 $ à 50 000 $ »). */
  price: z.string().min(1).max(40),
  /** Précision courte (« selon la portée et les matériaux »). */
  hint: z.string().min(1).max(90).optional(),
  /** 3 à 5 inclusions ≤ 8 mots. */
  includes: z.array(z.string().min(1).max(80)).min(2).max(5),
  featured: z.boolean().optional(),
});

/**
 * Tuiles de prix indicatifs (2 à 3). Toujours accompagnées d'une note : le
 * prix ferme est fixé dans la soumission après relevé.
 */
export const GridPriceTilesSchema = z.object({
  heading: z.string().min(1),
  intro: z.string().min(1).optional(),
  tiles: z.array(TileSchema).min(2).max(3),
  note: z.string().min(1).max(200),
  action: ActionSchema.optional(),
});

export type GridPriceTilesProps = z.infer<typeof GridPriceTilesSchema>;
