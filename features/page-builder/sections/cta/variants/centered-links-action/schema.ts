import { z } from "zod";
import { ActionSchema } from "../../../shared/schema/action";

const LinkItemSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  href: z.string().min(1),
});

export const CtaCenteredLinksActionSchema = z.object({
  badge: z.string().min(1).optional(),
  heading: z.string().min(1),
  intro: z.string().min(1).optional(),
  links: z.array(LinkItemSchema).min(1).max(8),
  action: ActionSchema,
});

export type CtaCenteredLinksActionProps = z.infer<
  typeof CtaCenteredLinksActionSchema
>;
