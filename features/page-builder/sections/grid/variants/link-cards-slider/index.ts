import { defineBlock } from "@/features/page-builder/model/defineBlock";
import { GridLinkCardsSliderSchema } from "./schema";
import { GridLinkCardsSlider } from "./ui";

export const gridLinkCardsSlider = defineBlock({
  type: "grid",
  variant: "link-cards-slider",
  schema: GridLinkCardsSliderSchema,
  Component: GridLinkCardsSlider,
  defaultFrame: {
    container: "xl",
    paddingY: "md",
    surface: "default",
    headerAlign: "left",
    contentAlign: "left",
  },
});
