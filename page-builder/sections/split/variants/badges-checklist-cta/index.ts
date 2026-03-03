import { defineBlock } from "@/page-builder/model/defineBlock";
import { SplitBadgesChecklistCtaSchema } from "./schema";
import { SplitBadgesChecklistCta } from "./ui";

export const splitBadgesChecklistCta = defineBlock({
  type: "split",
  variant: "badges-checklist-cta",
  schema: SplitBadgesChecklistCtaSchema,
  Component: SplitBadgesChecklistCta,
  defaultFrame: {
    contentAlign: "left",
  },
});
