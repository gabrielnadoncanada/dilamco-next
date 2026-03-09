import { defineBlock } from "@/features/page-builder/model/defineBlock";
import { GridIconCardsBulletsSchema } from "./schema";
import { GridIconCardsBullets } from "./ui";

export const gridIconCardsBullets = defineBlock({
  type: "grid",
  variant: "icon-cards-bullets",
  schema: GridIconCardsBulletsSchema,
  Component: GridIconCardsBullets,
  defaultFrame: {
    container: "xl",
    paddingY: "lg",
    surface: "muted",
    headerAlign: "center",
    contentAlign: "left",
  },
});
