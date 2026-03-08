import { createRegistry } from "./createRegistry";
import { heroDefs } from "@/page-builder/sections/hero";
import { splitDefs } from "@/page-builder/sections/split";
import { ctaDefs } from "@/page-builder/sections/cta";
import { processDefs } from "@/page-builder/sections/process";
import { gridDefs } from "@/page-builder/sections/grid";
import { comparisonDefs } from "@/page-builder/sections/comparison";
import { faqDefs } from "@/page-builder/sections/faq";

export const blockRegistry = createRegistry([
  ...heroDefs,
  ...splitDefs,
  ...ctaDefs,
  ...processDefs,
  ...gridDefs,
  ...comparisonDefs,
  ...faqDefs,
] as const);
