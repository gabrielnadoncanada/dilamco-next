import { z } from "zod";

export const ActionVariantSchema = z.enum([
  "primary",
  "ghost",
  "paper",
  "ghost-light",
]);

export const ActionSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
  variant: ActionVariantSchema.optional(),
});

export const ActionsSchema = z.array(ActionSchema).min(1).max(3);

export type Action = z.infer<typeof ActionSchema>;
