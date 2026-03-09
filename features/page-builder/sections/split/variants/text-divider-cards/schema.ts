import { z } from "zod";

export const SplitTextDividerCardsSchema = z.object({
  heading: z.string().min(1),
  description: z.string().min(1),
  cards: z
    .array(
      z.object({
        title: z.string().min(1),
        description: z.string().min(1),
      }),
    )
    .min(1)
    .max(6),
  columns: z.enum(["1", "2", "3"]).optional().default("2"),
});

export type SplitTextDividerCardsProps = z.infer<
  typeof SplitTextDividerCardsSchema
>;
