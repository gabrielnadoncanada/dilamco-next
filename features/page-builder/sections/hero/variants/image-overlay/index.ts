import { defineBlock } from "@/features/page-builder/model/defineBlock";
import { HeroImageOverlaySchema } from "./schema";
import { HeroImageOverlay } from "./ui";

export const heroImageOverlay = defineBlock({
  type: "hero",
  variant: "image-overlay",
  schema: HeroImageOverlaySchema,
  Component: HeroImageOverlay,
  defaultFrame: {
    container: "xl",
    paddingY: "hero",
    surface: "default",
    headerAlign: "left",
    contentAlign: "left",
  },
});
