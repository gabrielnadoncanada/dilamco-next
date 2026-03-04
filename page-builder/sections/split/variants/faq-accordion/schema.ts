import { z } from "zod";

export const SplitFaqAccordionSchema = z.object({
  heading: z.string().min(1),
  intro: z.string().min(1).optional(),
  items: z
    .array(
      z.object({
        q: z.string().min(1),
        a: z.string().min(1),
      }),
    )
    .min(1)
    .max(30),
});

export type SplitFaqAccordionProps = z.infer<typeof SplitFaqAccordionSchema>;
