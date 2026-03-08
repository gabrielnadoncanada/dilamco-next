import { z } from "zod";

const ActionSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
  variant: z
    .enum(["default", "secondary", "outline", "destructive", "ghost", "link"])
    .optional(),
});

export const HeroCenteredBadgeActionsSchema = z.object({
  badge: z.string().min(1).optional(),
  heading: z.string().min(1),
  description: z.string().min(1),
  actions: z.array(ActionSchema).min(1).max(2),
});

export type HeroCenteredBadgeActionsProps = z.infer<
  typeof HeroCenteredBadgeActionsSchema
>;
