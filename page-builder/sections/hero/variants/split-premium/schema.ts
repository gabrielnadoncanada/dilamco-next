import { z } from "zod";

export const HeroSplitPremiumSchema = z.object({
  heading: z.string().min(1),
  description: z.string().optional(),
  badges: z.array(z.string().min(1)).optional(),
  actions: z
    .array(
      z.object({
        label: z.string().min(1),
        href: z.string().min(1),
        variant: z.enum(["primary", "secondary", "outline"]).optional(),
      }),
    )
    .optional(),
  proofs: z
    .array(
      z.object({
        title: z.string().min(1),
        description: z.string().min(1),
      }),
    )
    .optional(),
  image: z
    .object({
      src: z.string().min(1),
      alt: z.string().min(1),
      priority: z.boolean().optional(),
    })
    .optional(),
});
export type HeroSplitPremiumProps = z.infer<typeof HeroSplitPremiumSchema>;
