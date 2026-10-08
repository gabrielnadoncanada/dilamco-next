import { defineBlock } from "@/features/page-builder/model/defineBlock";

import { ProseTocAsideSchema } from "./schema";
import { ProseTocAside } from "./ui";

export const proseTocAside = defineBlock({
  type: "prose",
  variant: "toc-aside",
  schema: ProseTocAsideSchema,
  Component: ProseTocAside,
  defaultFrame: {
    container: "xl",
    paddingY: "lg",
    surface: "default",
    headerAlign: "left",
    contentAlign: "left",
  },
});
