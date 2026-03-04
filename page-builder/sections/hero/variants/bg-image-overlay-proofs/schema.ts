import { z } from "zod";

const ActionSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
  variant: z
    .enum(["default", "secondary", "outline", "destructive", "ghost", "link"])
    .optional(),
});

const ProofSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
});

export const HeroBgImageOverlayProofsSchema = z.object({
  heading: z.string().min(1),
  description: z.string().min(1),

  badges: z.array(z.string().min(1)).optional(),
  actions: z.array(ActionSchema).min(1).max(2),

  image: z.object({
    src: z.string().min(1),
    alt: z.string().min(1),
  }),

  /**
   * Keep it strict: only known overlay styles.
   * If you later add more, extend enum.
   */
  overlay: z.enum(["dark-gradient"]).default("dark-gradient"),

  proofs: z.array(ProofSchema).min(0).max(3).optional(),
});

export type HeroBgImageOverlayProofsProps = z.infer<
  typeof HeroBgImageOverlayProofsSchema
>;
