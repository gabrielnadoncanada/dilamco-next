import { z } from "zod";
import { ActionsSchema } from "../../../shared/schema/action";

export const CtaBandSplitActionsSchema = z.object({
  heading: z.string().min(1),
  /** Facultative : n'existe que si elle ajoute un fait que le bouton ne dit pas. */
  intro: z.string().min(1).optional(),

  actions: ActionsSchema,
  note: z.string().optional(),
});

export type CtaBandSplitActionsProps = z.infer<
  typeof CtaBandSplitActionsSchema
>;
