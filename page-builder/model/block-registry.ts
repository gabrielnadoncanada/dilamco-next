import { createRegistry } from "./createRegistry";
import { heroDefs } from "@/page-builder/sections/hero";
import { splitDefs } from "@/page-builder/sections/split";

export const blockRegistry = createRegistry([
  ...heroDefs,
  ...splitDefs,

  // ...processDefs, ...materialsDefs
] as const);
