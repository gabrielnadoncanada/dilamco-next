import { z } from "zod";

export const ProcessHorizontalStepsCardsSchema = z.object({
  heading: z.string().min(1),
  intro: z.string().min(1).optional(),

  steps: z
    .array(
      z.object({
        number: z.string().min(1), // "1", "2"...
        title: z.string().min(1),
        description: z.string().min(1),
      }),
    )
    .min(2)
    .max(8),
});

export type ProcessHorizontalStepsCardsProps = z.infer<
  typeof ProcessHorizontalStepsCardsSchema
>;
