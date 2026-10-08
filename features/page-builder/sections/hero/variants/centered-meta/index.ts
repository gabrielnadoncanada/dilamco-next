import { defineBlock } from "@/features/page-builder/model/defineBlock";

import { HeroCenteredMetaSchema } from "./schema";
import { HeroCenteredMeta } from "./ui";

export const heroCenteredMeta = defineBlock({
  type: "hero",
  variant: "centered-meta",
  schema: HeroCenteredMetaSchema,
  Component: HeroCenteredMeta,
  defaultFrame: {
    container: "2xl",
    paddingY: "lg",
    surface: "default",
    headerAlign: "center",
    contentAlign: "center",
  },
});
