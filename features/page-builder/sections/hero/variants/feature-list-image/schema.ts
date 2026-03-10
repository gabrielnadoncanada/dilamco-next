import { z } from "zod";

import { ActionsSchema } from "@/features/page-builder/sections/shared/schema/action";
import { ImageSchema } from "@/features/page-builder/sections/shared/schema/image";

const FeatureIconSchema = z.enum([
  "circle-dot",
  "blend",
  "diamond",
  "chart-no-axes-column",
]);

const FeatureSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  icon: FeatureIconSchema,
});

export const HeroFeatureListImageSchema = z.object({
  heading: z.string().min(1),
  description: z.string().min(1),
  actions: ActionsSchema,
  features: z.array(FeatureSchema).min(1).max(6),
  image: ImageSchema,
});

export type HeroFeatureListImageProps = z.infer<
  typeof HeroFeatureListImageSchema
>;
