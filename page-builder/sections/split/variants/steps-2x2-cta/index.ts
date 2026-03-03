import { defineBlock } from "@/page-builder/model/defineBlock";
import { SplitSteps2x2CtaSchema } from "./schema";
import { SplitSteps2x2Cta } from "./ui";

export const splitSteps2x2Cta = defineBlock({
  type: "split",
  variant: "steps-2x2-cta",
  schema: SplitSteps2x2CtaSchema,
  Component: SplitSteps2x2Cta,
  defaultFrame: {
    contentAlign: "left",
  },
});
