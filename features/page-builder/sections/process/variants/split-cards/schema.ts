import { z } from "zod";
import { ActionSchema } from "../../../shared/schema/action";

export const SplitCardsSchema = z.object({
  heading: z.string().min(1),
  description: z.string().min(1),
  steps: z
    .array(
      z.object({
        number: z.string().min(1), // "1", "2"...
        title: z.string().min(1),
        description: z.string().min(1),
      }),
    )
    .min(1)
    .max(8),
  actions: z.array(ActionSchema).min(1).max(2).optional(),
});

export type SplitCardsProps = z.infer<typeof SplitCardsSchema>;
