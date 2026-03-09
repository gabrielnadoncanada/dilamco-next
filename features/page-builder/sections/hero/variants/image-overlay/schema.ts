import { z } from "zod";
import {
  ActionsSchema,
  ImageSchema,
} from "@/features/page-builder/sections/shared/schema";

const ProofSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
});

export const HeroImageOverlaySchema = z.object({
  heading: z.string().min(1),
  description: z.string().min(1),

  badges: z.array(z.string().min(1)).optional(),
  actions: ActionsSchema,

  image: ImageSchema,

  /**
   * Keep it strict: only known overlay styles.
   * If you later add more, extend enum.
   */
  overlay: z.enum(["dark-gradient"]).default("dark-gradient"),

  proofs: z.array(ProofSchema).min(0).max(3).optional(),
});

export type HeroImageOverlayProps = z.infer<typeof HeroImageOverlaySchema>;
