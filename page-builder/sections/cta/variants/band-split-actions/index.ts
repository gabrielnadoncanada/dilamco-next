import { defineBlock } from "@/page-builder/model/defineBlock";
import { CtaBandSplitActionsSchema } from "./schema";
import { CtaBandSplitActions } from "./ui";

export const ctaBandSplitActions = defineBlock({
  type: "cta",
  variant: "band-split-actions",
  schema: CtaBandSplitActionsSchema,
  Component: CtaBandSplitActions,
  defaultFrame: {
    container: "xl",
    paddingY: "md",
    surface: "default",
    headerAlign: "left",
    contentAlign: "left",
  },
});
