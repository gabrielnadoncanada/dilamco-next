import { z } from "zod";
import { ActionsSchema } from "../../../shared/schema/action";

export const SplitBadgesChecklistCtaSchema = z.object({
  heading: z.string().min(1),
  intro: z.string().min(1),
  badges: z.array(z.string().min(1)).optional(),
  cardTitle: z.string().min(1),
  items: z.array(z.string().min(1)).min(1),
  // Strict system: use standardized actions
  actions: ActionsSchema,
});

export type SplitBadgesChecklistCtaProps = z.infer<
  typeof SplitBadgesChecklistCtaSchema
>;
