import { defineBlock } from "@/page-builder/model/defineBlock";
import { HeroSplitImageBadgesSchema } from "./schema";
import { HeroSplitImageBadges } from "./ui";

export const heroSplitImageBadges = defineBlock({
  type: "hero",
  variant: "split-image-badges",
  schema: HeroSplitImageBadgesSchema,
  Component: HeroSplitImageBadges,
  defaultFrame: {
    container: "xl",
    paddingY: "lg",
    surface: "default",
    headerAlign: "left",
    contentAlign: "left",
  },
});
