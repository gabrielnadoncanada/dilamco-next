import { defineBlock } from "@/features/page-builder/model/defineBlock";
import { SplitFactSheetSchema } from "./schema";
import { SplitFactSheet } from "./ui";

export const splitFactSheet = defineBlock({
  type: "split",
  variant: "fact-sheet",
  schema: SplitFactSheetSchema,
  Component: SplitFactSheet,
  defaultFrame: {
    container: "xl",
    paddingY: "lg",
    surface: "default",
    headerAlign: "left",
    contentAlign: "left",
  },
});
