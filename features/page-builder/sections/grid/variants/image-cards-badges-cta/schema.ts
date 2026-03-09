import { z } from "zod";
import { ImageSchema } from "@/features/page-builder/sections/shared/schema/image";

const ItemSchema = z.object({
  title: z.string().min(1),
  href: z.string().min(1),
  description: z.string().min(1),
  image: ImageSchema,
  badges: z.array(z.string().min(1)).max(8).optional(),
  quickActionLabel: z.string().min(1).optional(),
  footerCtaLabel: z.string().min(1).optional(),
});

export const GridImageCardsBadgesCtaSchema = z.object({
  heading: z.string().min(1),
  intro: z.string().min(1).optional(),
  ctaLabel: z.string().min(1).optional(),
  ctaHref: z.string().min(1).optional(),
  items: z.array(ItemSchema).min(1).max(24),
});

export type GridImageCardsBadgesCtaProps = z.infer<
  typeof GridImageCardsBadgesCtaSchema
>;
