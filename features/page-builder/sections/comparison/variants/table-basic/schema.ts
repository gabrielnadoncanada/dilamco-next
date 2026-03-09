import { z } from "zod";

const ComparisonRowSchema = z.object({
  label: z.string().min(1),
  values: z.array(z.string().min(1)).length(2),
});

export const ComparisonTableBasicSchema = z.object({
  heading: z.string().min(1),
  intro: z.string().min(1).optional(),
  columns: z.tuple([z.string().min(1), z.string().min(1)]),
  rows: z.array(ComparisonRowSchema).min(1).max(24),
});

export type ComparisonTableBasicProps = z.infer<
  typeof ComparisonTableBasicSchema
>;
