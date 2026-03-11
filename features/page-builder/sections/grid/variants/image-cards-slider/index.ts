import { defineBlock } from "@/features/page-builder/model/defineBlock";
import { GridImageCardsSliderSchema } from "./schema";
import { GridImageCardsSlider } from "./ui";

export const gridImageCardsSlider = defineBlock({
  type: "grid",
  variant: "image-cards-slider",
  schema: GridImageCardsSliderSchema,
  Component: GridImageCardsSlider,
  defaultFrame: {
    container: "xl",
    paddingY: "md",
    surface: "default",
    headerAlign: "left",
    contentAlign: "left",
    className: "overflow-hidden",
  },
});
