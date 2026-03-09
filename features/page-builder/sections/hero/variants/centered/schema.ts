import { z } from "zod";
import { ActionsSchema } from "../../../shared/schema/action";

export const HeroCenteredSchema = z.object({
  badges: z.array(z.string().min(1)).optional(),
  heading: z.string().min(1),
  description: z.string().min(1),
  actions: ActionsSchema,
});

export type HeroCenteredProps = z.infer<
  typeof HeroCenteredSchema
>;
