import { defineBlock } from "@/features/page-builder/model/defineBlock";

import { GridImageCardsMetaSchema } from "./schema";
import { GridImageCardsMeta } from "./ui";

export const gridImageCardsMeta = defineBlock({
  type: "grid",
  variant: "image-cards-meta",
  schema: GridImageCardsMetaSchema,
  Component: GridImageCardsMeta,
  defaultFrame: {
    container: "xl",
    paddingY: "lg",
    surface: "default",
    headerAlign: "left",
    contentAlign: "left",
  },
});
