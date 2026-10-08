import { z } from "zod";
import { ImageSchema } from "@/features/page-builder/sections/shared/schema/image";

const ItemSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  href: z.string().min(1),
  image: ImageSchema,
  /** Ligne courte au-dessus du titre (catégorie, date). */
  meta: z.array(z.string().min(1)).max(3).optional(),
});

export const GridImageCardsMetaSchema = z.object({
  heading: z.string().min(1),
  items: z.array(ItemSchema).min(1).max(48),
});

export type GridImageCardsMetaProps = z.infer<typeof GridImageCardsMetaSchema>;
