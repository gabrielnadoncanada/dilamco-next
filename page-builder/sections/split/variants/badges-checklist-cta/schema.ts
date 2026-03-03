import { z } from "zod";

const ActionSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
  variant: z
    .enum(["default", "secondary", "outline", "destructive", "ghost", "link"])
    .optional(),
});

export const SplitBadgesChecklistCtaSchema = z.object({
  heading: z.string().min(1),
  intro: z.string().min(1),

  badges: z.array(z.string().min(1)).optional(),

  cardTitle: z.string().min(1),
  items: z.array(z.string().min(1)).min(1),

  // Strict system: use standardized actions
  actions: z.array(ActionSchema).min(1).max(2),
});

export type SplitBadgesChecklistCtaProps = z.infer<
  typeof SplitBadgesChecklistCtaSchema
>;
