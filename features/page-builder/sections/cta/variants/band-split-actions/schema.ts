import { z } from "zod";
import { ActionsSchema } from "../../../shared/schema/action";

export const CtaBandSplitActionsSchema = z.object({
  heading: z.string().min(1),
  intro: z.string().min(1),

  actions: ActionsSchema,
  note: z.string().optional(),
});

export type CtaBandSplitActionsProps = z.infer<
  typeof CtaBandSplitActionsSchema
>;
