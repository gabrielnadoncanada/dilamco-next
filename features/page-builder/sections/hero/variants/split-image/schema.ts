import { z } from "zod";
import {
  ActionsSchema,
  ImageSchema,
} from "../../../shared/schema";

export const HeroSplitImageSchema = z.object({
  /** Petit libellé au-dessus du titre (ville, service). 1 à 4 mots. */
  eyebrow: z.string().min(1).max(40).optional(),
  heading: z.string().min(1), // H1
  description: z.string().min(1),

  actions: ActionsSchema,

  badges: z.array(z.string().min(1)).optional(),

  image: ImageSchema,

  caption: z.string().optional(), // small text under image
});

export type HeroSplitImageProps = z.infer<typeof HeroSplitImageSchema>;
