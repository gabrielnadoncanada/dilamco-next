import { z } from "zod";

const ItemSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  icon: z.string().min(1),
  bullets: z.array(z.string().min(1)).min(1).max(8),
});

export const GridIconCardsBulletsSchema = z.object({
  heading: z.string().min(1),
  intro: z.string().min(1).optional(),
  columns: z.enum(["2", "3"]).optional(),
  items: z.array(ItemSchema).min(1).max(12),
});

export type GridIconCardsBulletsProps = z.infer<
  typeof GridIconCardsBulletsSchema
>;
