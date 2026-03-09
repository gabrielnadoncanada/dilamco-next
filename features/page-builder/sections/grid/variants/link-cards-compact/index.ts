import { defineBlock } from "@/features/page-builder/model/defineBlock";
import { GridLinkCardsCompactSchema } from "./schema";
import { GridLinkCardsCompact } from "./ui";

export const gridLinkCardsCompact = defineBlock({
  type: "grid",
  variant: "link-cards-compact",
  schema: GridLinkCardsCompactSchema,
  Component: GridLinkCardsCompact,
  defaultFrame: {
    container: "xl",
    paddingY: "md",
    surface: "default",
    headerAlign: "left",
    contentAlign: "left",
  },
});
