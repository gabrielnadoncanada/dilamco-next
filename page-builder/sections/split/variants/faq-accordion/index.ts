import { defineBlock } from "@/page-builder/model/defineBlock";
import { SplitFaqAccordionSchema } from "./schema";
import { SplitFaqAccordion } from "./ui";

export const splitFaqAccordion = defineBlock({
  type: "split",
  variant: "faq-accordion",
  schema: SplitFaqAccordionSchema,
  Component: SplitFaqAccordion,
  defaultFrame: {
    container: "xl",
    paddingY: "lg",
    surface: "default",
    headerAlign: "left",
    contentAlign: "left",
  },
});
