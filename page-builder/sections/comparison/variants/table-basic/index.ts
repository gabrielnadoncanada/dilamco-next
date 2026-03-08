import { defineBlock } from "@/page-builder/model/defineBlock";
import { ComparisonTableBasicSchema } from "./schema";
import { ComparisonTableBasic } from "./ui";

export const comparisonTableBasic = defineBlock({
  type: "comparison",
  variant: "table-basic",
  schema: ComparisonTableBasicSchema,
  Component: ComparisonTableBasic,
  defaultFrame: {
    container: "2xl",
    paddingY: "lg",
    surface: "muted",
    headerAlign: "center",
    contentAlign: "left",
  },
});
