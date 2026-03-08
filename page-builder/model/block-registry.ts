import { createRegistry } from "./createRegistry";
import { heroDefs } from "@/page-builder/sections/hero";
import { splitDefs } from "@/page-builder/sections/split";
import { ctaDefs } from "@/page-builder/sections/cta";
import { processDefs } from "@/page-builder/sections/process";
import { gridDefs } from "@/page-builder/sections/grid";
import { comparisonDefs } from "@/page-builder/sections/comparison";

export const blockRegistry = createRegistry([
  ...heroDefs,
  ...splitDefs,
  ...ctaDefs,
  ...processDefs,
  ...gridDefs,
  ...comparisonDefs,
  // ...processDefs, ...materialsDefs
] as const);
