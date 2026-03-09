import { z } from "zod";

const ItemSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1).optional(),
  href: z.string().min(1),
  badges: z.array(z.string().min(1)).max(6).optional(),
  ctaLabel: z.string().min(1).optional(),
});

export const GridLinkCardsSliderSchema = z.object({
  heading: z.string().min(1),
  intro: z.string().min(1).optional(),
  items: z.array(ItemSchema).min(1).max(12),
});

export type GridLinkCardsSliderProps = z.infer<typeof GridLinkCardsSliderSchema>;
