import { defineBlock } from "@/page-builder/model/defineBlock";
import { SplitTextDividerCardsSchema } from "./schema";
import { SplitTextDividerCards } from "./ui";

export const splitTextDividerCards = defineBlock({
  type: "split",
  variant: "text-divider-cards",
  schema: SplitTextDividerCardsSchema,
  Component: SplitTextDividerCards,
  defaultFrame: {
    contentAlign: "left",
  },
});
