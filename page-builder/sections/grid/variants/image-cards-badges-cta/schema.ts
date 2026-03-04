import { z } from "zod";

const ImageSchema = z.object({
  src: z.string().min(1),
  alt: z.string().min(1),
});

const ItemSchema = z.object({
  title: z.string().min(1),
  href: z.string().min(1),

  description: z.string().min(1),

  image: ImageSchema,

  badges: z.array(z.string().min(1)).max(8).optional(),

  // top-right small action in header (ex: "Voir")
  quickActionLabel: z.string().min(1).optional(),

  // footer CTA label (ex: "Découvrir cuisine")
  footerCtaLabel: z.string().min(1).optional(),
});

export const GridImageCardsBadgesCtaSchema = z.object({
  heading: z.string().min(1),
  intro: z.string().min(1).optional(),

  items: z.array(ItemSchema).min(1).max(24),
});

export type GridImageCardsBadgesCtaProps = z.infer<
  typeof GridImageCardsBadgesCtaSchema
>;
