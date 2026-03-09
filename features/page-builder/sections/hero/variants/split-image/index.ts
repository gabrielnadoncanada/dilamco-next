import { defineBlock } from "@/features/page-builder/model/defineBlock";
import { HeroSplitImageSchema } from "./schema";
import { HeroSplitImage } from "./ui";

export const heroSplitImage = defineBlock({
  type: "hero",
  variant: "split-image",
  schema: HeroSplitImageSchema,
  Component: HeroSplitImage,
  defaultFrame: {
    container: "xl",
    paddingY: "lg",
    surface: "default",
    headerAlign: "left",
    contentAlign: "left",
    className: "max-lg:pt-0!",
  },
});
