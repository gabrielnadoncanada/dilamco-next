import { defineBlock } from "@/features/page-builder/model/defineBlock";
import { GridImageCardsSliderLightboxSchema } from "./schema";
import { GridImageCardsSliderLightbox } from "./ui";

export const gridImageCardsSliderLightbox = defineBlock({
  type: "grid",
  variant: "image-cards-slider-lightbox",
  schema: GridImageCardsSliderLightboxSchema,
  Component: GridImageCardsSliderLightbox,
  defaultFrame: {
    container: "xl",
    paddingY: "md",
    surface: "default",
    headerAlign: "left",
    contentAlign: "left",
    className: "overflow-hidden",
  },
});
