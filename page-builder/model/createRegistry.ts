import type { AnyBlockDef, Registry } from "./block-types";

export function createRegistry<const T extends readonly AnyBlockDef[]>(
  defs: T,
) {
  const registry: Registry = {};
  for (const d of defs) registry[d.key] = d;
  return registry as Registry;
}
