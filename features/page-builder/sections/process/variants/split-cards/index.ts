import { defineBlock } from "@/features/page-builder/model/defineBlock";
import { SplitCardsSchema } from "./schema";
import { SplitCards } from "./ui";

export const splitCards = defineBlock({
  type: "process",
  variant: "split-cards",
  schema: SplitCardsSchema,
  Component: SplitCards,
  defaultFrame: {
    contentAlign: "left",
  },
});
