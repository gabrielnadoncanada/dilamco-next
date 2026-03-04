import { defineBlock } from "@/page-builder/model/defineBlock";
import { SplitListActionsImageCardSchema } from "./schema";
import { SplitListActionsImageCard } from "./ui";

export const splitListActionsImageCard = defineBlock({
  type: "split",
  variant: "list-actions-image-card",
  schema: SplitListActionsImageCardSchema,
  Component: SplitListActionsImageCard,
  defaultFrame: {
    container: "2xl",
    paddingY: "md",
    surface: "muted",
    headerAlign: "left",
    contentAlign: "left",
  },
});
