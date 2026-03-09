import { z } from "zod";
import {
  ActionsSchema,
  ImageSchema,
} from "../../../shared/schema";

export const SplitListActionsImageCardSchema = z.object({
  heading: z.string().min(1),
  intro: z.string().min(1),

  // Bullet list with emphasized title + trailing description
  items: z
    .array(
      z.object({
        title: z.string().min(1),
        description: z.string().min(1),
      }),
    )
    .min(1)
    .max(8),

  actions: ActionsSchema,

  image: ImageSchema,

  cardTitle: z.string().min(1),
  cardDescription: z.string().min(1),
});

export type SplitListActionsImageCardProps = z.infer<
  typeof SplitListActionsImageCardSchema
>;
