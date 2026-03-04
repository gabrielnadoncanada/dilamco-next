import { z } from "zod";

const ActionSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
  variant: z
    .enum(["default", "secondary", "outline", "destructive", "ghost", "link"])
    .optional(),
});

export const CtaBandSplitActionsSchema = z.object({
  heading: z.string().min(1),
  intro: z.string().min(1),

  actions: z.array(ActionSchema).min(1).max(2),
  note: z.string().optional(),
});

export type CtaBandSplitActionsProps = z.infer<
  typeof CtaBandSplitActionsSchema
>;
