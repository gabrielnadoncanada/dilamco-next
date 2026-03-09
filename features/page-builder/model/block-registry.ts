import { createRegistry } from "./createRegistry";
import { heroDefs } from "@/features/page-builder/sections/hero";
import { splitDefs } from "@/features/page-builder/sections/split";
import { ctaDefs } from "@/features/page-builder/sections/cta";
import { processDefs } from "@/features/page-builder/sections/process";
import { gridDefs } from "@/features/page-builder/sections/grid";
import { comparisonDefs } from "@/features/page-builder/sections/comparison";
import { faqDefs } from "@/features/page-builder/sections/faq";

export const blockDefinitions = [
  ...heroDefs,
  ...splitDefs,
  ...ctaDefs,
  ...processDefs,
  ...gridDefs,
  ...comparisonDefs,
  ...faqDefs,
] as const;

export const blockRegistry = createRegistry(blockDefinitions);

export type BlockDefinition = (typeof blockDefinitions)[number];

export function getBlockDefinition(
  type: string,
  variant: string,
): BlockDefinition | undefined {
  return blockDefinitions.find(
    (definition) => definition.type === type && definition.variant === variant,
  );
}
