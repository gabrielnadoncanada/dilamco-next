import type { z, ZodType } from "zod";

export type Align = "left" | "center";
export type ContainerSize = "full" | "xl" | "2xl";
export type Surface = "default" | "muted";
export type PaddingY = "sm" | "md" | "lg";
export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type FrameOptions = {
  headerAlign?: Align;
  contentAlign?: Align;
  container?: ContainerSize;
  surface?: Surface;
  paddingY?: PaddingY;
  titleAs?: HeadingLevel;
  titleVariant?: HeadingLevel;
};

export type BlockContent<
  TType extends string = string,
  TVariant extends string = string,
> = {
  type: TType;
  variant: TVariant;
  props: unknown; // runtime validated by schema
};

export type Block<
  TType extends string = string,
  TVariant extends string = string,
> = {
  id: string;
  title?: string;
  intro?: string;
  frame?: FrameOptions;
  content: BlockContent<TType, TVariant>;
};

// ---- Registry types ----

export type BlockKey<
  TType extends string,
  TVariant extends string,
> = `${TType}.${TVariant}`;

export type BlockDef<
  TType extends string,
  TVariant extends string,
  TSchema extends ZodType<any>,
> = {
  key: BlockKey<TType, TVariant>;
  type: TType;
  variant: TVariant;
  schema: TSchema;
  Component: React.ComponentType<z.infer<TSchema>>;
  defaultFrame?: FrameOptions;
  // optional legacy adapter later
  adapt?: (legacy: unknown) => unknown;
};

export type AnyBlockDef = BlockDef<string, string, ZodType<any>>;

// Runtime registry is heterogeneous by nature; we store AnyBlockDef by key.
export type Registry = Record<string, AnyBlockDef>;
