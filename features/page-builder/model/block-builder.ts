import type { Block } from "./block-types";

export function block<TType extends string, TVariant extends string>(
  b: Block<TType, TVariant>,
) {
  return b;
}
