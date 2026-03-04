import { z } from "zod";

const ActionSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
  variant: z
    .enum(["default", "secondary", "outline", "destructive", "ghost", "link"])
    .optional(),
});

const CardItemSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
});

export const HeroSplitBadgesCardBulletsSchema = z.object({
  badges: z.array(z.string().min(1)).optional(),

  heading: z.string().min(1), // H1
  description: z.string().min(1),

  image: z.object({
    src: z.string().min(1),
    alt: z.string().min(1),
  }),

  actions: z.array(ActionSchema).min(1).max(2),

  note: z.string().min(1).optional(),

  card: z.object({
    title: z.string().min(1),
    description: z.string().min(1).optional(),
    items: z.array(CardItemSchema).min(1).max(8),
  }),

  overlay: z.enum(["dark-gradient"]).default("dark-gradient"),
});

export type HeroSplitBadgesCardBulletsProps = z.infer<
  typeof HeroSplitBadgesCardBulletsSchema
>;
