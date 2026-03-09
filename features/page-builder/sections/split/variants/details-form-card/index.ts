import { defineBlock } from "@/features/page-builder/model/defineBlock";
import { SplitDetailsFormCardSchema } from "./schema";
import { SplitDetailsFormCard } from "./ui";

export const splitDetailsFormCard = defineBlock({
  type: "split",
  variant: "details-form-card",
  schema: SplitDetailsFormCardSchema,
  Component: SplitDetailsFormCard,
  defaultFrame: {
    paddingY: "md",
    surface: "default",
    headerAlign: "left",
    contentAlign: "left",
  },
});
