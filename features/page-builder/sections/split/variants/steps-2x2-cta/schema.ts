import { z } from "zod";
import { ActionSchema } from "../../../shared/schema/action";

export const SplitSteps2x2CtaSchema = z.object({
  heading: z.string().min(1),
  description: z.string().min(1),
  steps: z
    .array(
      z.object({
        label: z.string().min(1),
        description: z.string().min(1),
      }),
    )
    .min(1)
    .max(8),
  actions: z.array(ActionSchema).min(1).max(2).optional(),
});

export type SplitSteps2x2CtaProps = z.infer<typeof SplitSteps2x2CtaSchema>;
