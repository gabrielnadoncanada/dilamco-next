import { defineBlock } from "@/features/page-builder/model/defineBlock";
import { HeroZoneSchema } from "./schema";
import { HeroZone } from "./ui";

export const heroZone = defineBlock({
  type: "hero",
  variant: "zone",
  schema: HeroZoneSchema,
  Component: HeroZone,
  defaultFrame: {
    container: "xl",
    paddingY: "lg",
    surface: "default",
    headerAlign: "left",
    contentAlign: "left",
  },
});
