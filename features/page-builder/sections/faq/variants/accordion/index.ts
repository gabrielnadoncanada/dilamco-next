import { defineBlock } from "@/features/page-builder/model/defineBlock";
import { AccordionSchema } from "./schema";
import { Accordion } from "./ui";

export const accordion = defineBlock({
  type: "faq",
  variant: "accordion",
  schema: AccordionSchema,
  Component: Accordion,
  defaultFrame: {
    container: "xl",
    paddingY: "lg",
    surface: "default",
    headerAlign: "left",
    contentAlign: "left",
  },
  getStructuredData: (props) => [
    {
      type: "faq",
      items: props.items,
    },
  ],
});
