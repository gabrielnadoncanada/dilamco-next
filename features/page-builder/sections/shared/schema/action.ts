import { z } from "zod";

export const ActionVariantSchema = z.enum([
  "default",
  "secondary",
  "outline",
  "destructive",
  "ghost",
  "link",
]);

export const ActionSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
  variant: ActionVariantSchema.optional(),
});

export const ActionsSchema = z.array(ActionSchema).min(1).max(2);

export type Action = z.infer<typeof ActionSchema>;
