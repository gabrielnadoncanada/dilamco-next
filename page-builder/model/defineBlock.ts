import type { ZodType } from "zod";
import type { BlockDef, BlockKey, FrameOptions } from "./block-types";

export function defineBlock<
  TType extends string,
  TVariant extends string,
  TSchema extends ZodType<any>,
>(args: {
  type: TType;
  variant: TVariant;
  schema: TSchema;
  Component: React.ComponentType<import("zod").z.infer<TSchema>>;
  defaultFrame?: FrameOptions;
  adapt?: (legacy: unknown) => unknown;
}): BlockDef<TType, TVariant, TSchema> {
  const key = `${args.type}.${args.variant}` as BlockKey<TType, TVariant>;
  return { ...args, key };
}
