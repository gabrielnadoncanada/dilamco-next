import { z } from "zod";

const ActionSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
  variant: z
    .enum(["default", "secondary", "outline", "destructive", "ghost", "link"])
    .optional(),
});

export const SplitListActionsImageCardSchema = z.object({
  heading: z.string().min(1),
  intro: z.string().min(1),

  // Bullet list with emphasized title + trailing description
  items: z
    .array(
      z.object({
        title: z.string().min(1),
        description: z.string().min(1),
      }),
    )
    .min(1)
    .max(8),

  actions: z.array(ActionSchema).min(1).max(2),

  image: z.object({
    src: z.string().min(1),
    alt: z.string().min(1),
  }),

  cardTitle: z.string().min(1),
  cardDescription: z.string().min(1),
});

export type SplitListActionsImageCardProps = z.infer<
  typeof SplitListActionsImageCardSchema
>;
