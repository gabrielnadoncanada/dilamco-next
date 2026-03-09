import { defineBlock } from "@/features/page-builder/model/defineBlock";
import { GridImageCardsBadgesCtaSchema } from "./schema";
import { GridImageCardsBadgesCta } from "./ui";

export const gridImageCardsBadgesCta = defineBlock({
  type: "grid",
  variant: "image-cards-badges-cta",
  schema: GridImageCardsBadgesCtaSchema,
  Component: GridImageCardsBadgesCta,
  defaultFrame: {
    container: "xl",
    paddingY: "md",
    surface: "default",
    headerAlign: "left",
    contentAlign: "left",
  },
});
