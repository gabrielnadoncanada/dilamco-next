import { defineBlock } from "@/features/page-builder/model/defineBlock";

import { HeroFeatureListImageSchema } from "./schema";
import { HeroFeatureListImage } from "./ui";

export const heroFeatureListImage = defineBlock({
  type: "hero",
  variant: "feature-list-image",
  schema: HeroFeatureListImageSchema,
  Component: HeroFeatureListImage,
  defaultFrame: {
    container: "xl",
    paddingY: "hero",
    surface: "default",
    headerAlign: "left",
    contentAlign: "left",
  },
});
