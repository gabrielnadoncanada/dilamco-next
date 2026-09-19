import { defineBlock } from "@/features/page-builder/model/defineBlock";
import { GridPriceTilesSchema } from "./schema";
import { GridPriceTiles } from "./ui";

export const gridPriceTiles = defineBlock({
  type: "grid",
  variant: "price-tiles",
  schema: GridPriceTilesSchema,
  Component: GridPriceTiles,
  defaultFrame: {
    container: "xl",
    paddingY: "lg",
    surface: "muted",
    headerAlign: "left",
    contentAlign: "left",
  },
});
