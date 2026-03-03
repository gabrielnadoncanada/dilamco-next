import { z } from "zod";

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
  actions: z
    .array(
      z.object({
        label: z.string().min(1),
        href: z.string().min(1),
        variant: z
          .enum(["outline", "secondary", "default"])
          .optional()
          .default("outline"),
      }),
    )
    .optional(),
});

export type SplitSteps2x2CtaProps = z.infer<typeof SplitSteps2x2CtaSchema>;
