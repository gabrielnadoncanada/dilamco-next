import { defineBlock } from "@/page-builder/model/defineBlock";
import { HeroSplitBadgesCardBulletsSchema } from "./schema";
import { HeroSplitBadgesCardBullets } from "./ui";

export const heroSplitBadgesCardBullets = defineBlock({
  type: "hero",
  variant: "split-badges-card-bullets",
  schema: HeroSplitBadgesCardBulletsSchema,
  Component: HeroSplitBadgesCardBullets,
  defaultFrame: {
    container: "xl",
    paddingY: "none",
    surface: "default",
    headerAlign: "left",
    contentAlign: "left",
    divider: "bottom",
  },
});
