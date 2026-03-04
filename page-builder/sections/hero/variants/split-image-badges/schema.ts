import { z } from "zod";

const ActionSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
  variant: z
    .enum(["default", "secondary", "outline", "destructive", "ghost", "link"])
    .optional(),
});

export const HeroSplitImageBadgesSchema = z.object({
  eyebrow: z.string().min(1).optional(), // "Dilamco — Espaces"
  heading: z.string().min(1), // H1
  description: z.string().min(1),

  actions: z.array(ActionSchema).min(1).max(2),

  badges: z.array(z.string().min(1)).optional(),

  image: z.object({
    src: z.string().min(1),
    alt: z.string().min(1),
  }),

  caption: z.string().optional(), // small text under image
});

export type HeroSplitImageBadgesProps = z.infer<
  typeof HeroSplitImageBadgesSchema
>;
