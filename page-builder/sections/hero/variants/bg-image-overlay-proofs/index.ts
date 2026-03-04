import { defineBlock } from "@/page-builder/model/defineBlock";
import { HeroBgImageOverlayProofsSchema } from "./schema";
import { HeroBgImageOverlayProofs } from "./ui";

export const heroBgImageOverlayProofs = defineBlock({
  type: "hero",
  variant: "bg-image-overlay-proofs",
  schema: HeroBgImageOverlayProofsSchema,
  Component: HeroBgImageOverlayProofs,
  defaultFrame: {
    container: "2xl",
    paddingY: "hero",
    surface: "default",
    headerAlign: "left",
    contentAlign: "left",
  },
});
