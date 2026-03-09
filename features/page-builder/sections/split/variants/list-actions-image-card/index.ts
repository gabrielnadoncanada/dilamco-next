import { defineBlock } from "@/features/page-builder/model/defineBlock";
import { SplitListActionsImageCardSchema } from "./schema";
import { SplitListActionsImageCard } from "./ui";

export const splitListActionsImageCard = defineBlock({
  type: "split",
  variant: "list-actions-image-card",
  schema: SplitListActionsImageCardSchema,
  Component: SplitListActionsImageCard,
  defaultFrame: {
    paddingY: "md",
    surface: "muted",
    headerAlign: "left",
    contentAlign: "left",
  },
});
