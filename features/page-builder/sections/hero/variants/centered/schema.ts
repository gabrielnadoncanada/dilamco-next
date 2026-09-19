import { z } from "zod";
import {
  ActionsSchema,
  ImageSchema,
} from "@/features/page-builder/sections/shared/schema";

export const HeroCenteredSchema = z.object({
  badges: z.array(z.string().min(1)).optional(),
  heading: z.string().min(1),
  description: z.string().min(1),
  actions: ActionsSchema,
  /** Photo pleine largeur sous le texte (cadre arrondi, style NexaCargo). */
  image: ImageSchema.optional(),
  /** Légende courte en pastille sur la photo (lieu ou fait). */
  caption: z.string().min(1).optional(),
});

export type HeroCenteredProps = z.infer<
  typeof HeroCenteredSchema
>;
