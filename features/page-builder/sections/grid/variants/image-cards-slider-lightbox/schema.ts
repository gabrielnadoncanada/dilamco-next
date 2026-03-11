import { z } from "zod";
import { ImageSchema } from "../../../shared/schema/image";

const ItemSchema = z.object({
  title: z.string().min(1).optional(),
  href: z.string().min(1).nullable().optional(),
  description: z.string().min(1).optional(),
  image: ImageSchema,
  badges: z.array(z.string().min(1)).max(8).optional(),
  quickActionLabel: z.string().min(1).optional(),
  footerCtaLabel: z.string().min(1).optional(),
});

export const GridImageCardsSliderLightboxSchema = z.object({
  heading: z.string().min(1).optional(),
  intro: z.string().min(1).optional(),
  items: z.array(ItemSchema).min(1).max(24),
});

export type GridImageCardsSliderLightboxProps = z.infer<
  typeof GridImageCardsSliderLightboxSchema
>;
