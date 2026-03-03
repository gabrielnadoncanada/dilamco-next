import { defineBlock } from "@/page-builder/model/defineBlock";
import { HeroSplitPremiumSchema } from "./schema";
import { HeroSplitPremium } from "./ui";

export const heroSplitPremium = defineBlock({
  type: "hero",
  variant: "split-premium",
  schema: HeroSplitPremiumSchema,
  Component: HeroSplitPremium,
});
