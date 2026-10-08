import { z } from "zod";
import { ImageSchema } from "@/features/page-builder/sections/shared/schema";

const MetaItemSchema = z.object({
  label: z.string().min(1),
  /** Date ISO (YYYY-MM-DD) : rend l'élément en `<time dateTime>`. */
  dateTime: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
});

export const HeroCenteredMetaSchema = z.object({
  eyebrow: z.string().min(1).optional(),
  heading: z.string().min(1),
  description: z.string().min(1),
  /** Ligne de métadonnées sous l'accroche (date, durée de lecture…). */
  meta: z.array(MetaItemSchema).min(1).max(4),
  image: ImageSchema.optional(),
});

export type HeroCenteredMetaProps = z.infer<typeof HeroCenteredMetaSchema>;
