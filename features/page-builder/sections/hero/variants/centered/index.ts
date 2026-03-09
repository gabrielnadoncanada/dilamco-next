import { defineBlock } from "@/features/page-builder/model/defineBlock";

import { HeroCenteredSchema } from "./schema";
import { HeroCentered } from "./ui";

export const heroCentered = defineBlock({
  type: "hero",
  variant: "centered",
  schema: HeroCenteredSchema,
  Component: HeroCentered,
  defaultFrame: {
    container: "2xl",
    paddingY: "lg",
    surface: "default",
    headerAlign: "center",
    contentAlign: "center",
  },
});
