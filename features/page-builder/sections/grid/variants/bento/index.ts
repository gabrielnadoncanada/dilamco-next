import { defineBlock } from "@/features/page-builder/model/defineBlock";
import { GridBentoSchema } from "./schema";
import { GridBento } from "./ui";

export const gridBento = defineBlock({
  type: "grid",
  variant: "bento",
  schema: GridBentoSchema,
  Component: GridBento,
  defaultFrame: {
    container: "xl",
    paddingY: "lg",
    surface: "default",
    headerAlign: "left",
    contentAlign: "left",
  },
});
