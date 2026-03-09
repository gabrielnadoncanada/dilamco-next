import { z } from "zod";
import {
  ActionsSchema,
  ImageSchema,
} from "../../../shared/schema";

export const HeroSplitImageSchema = z.object({
  heading: z.string().min(1), // H1
  description: z.string().min(1),

  actions: ActionsSchema,

  badges: z.array(z.string().min(1)).optional(),

  image: ImageSchema,

  caption: z.string().optional(), // small text under image
});

export type HeroSplitImageProps = z.infer<typeof HeroSplitImageSchema>;
