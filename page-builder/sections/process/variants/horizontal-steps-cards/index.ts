import { defineBlock } from "@/page-builder/model/defineBlock";
import { ProcessHorizontalStepsCardsSchema } from "./schema";
import { ProcessHorizontalStepsCards } from "./ui";

export const processHorizontalStepsCards = defineBlock({
  type: "process",
  variant: "horizontal-steps-cards",
  schema: ProcessHorizontalStepsCardsSchema,
  Component: ProcessHorizontalStepsCards,
  defaultFrame: {
    paddingY: "md",
    surface: "default",
    headerAlign: "left",
    contentAlign: "left",
  },
});
