import type { ComponentType } from "react";

import rawBlockRegistry from "@/features/page-builder/references/block-registry.json";
import { getBlockDefinition } from "@/features/page-builder/model/block-registry";
import { loadExampleProps, readExamplePropsFile } from "./load-example-props";

type RegistryVariantEntry = {
  title: string;
  description: string;
  propsModel: string[];
  tags: string[];
  notes: string[];
  paths: {
    dir: string;
    schema: string;
    ui: string;
    index: string;
    meta: string;
    example?: string;
  };
};

type RegistryTypeEntry = {
  type: string;
  variants: Record<string, RegistryVariantEntry>;
};

type Registry = {
  generatedAt: string;
  rootDir: string;
  blocksDir: string;
  types: Record<string, RegistryTypeEntry>;
};

const blockRegistry = rawBlockRegistry as Registry;

export type KitchensinkVariantItem = {
  type: string;
  variant: string;
  title: string;
  description: string;
  propsModel: string[];
  component: ComponentType<Record<string, unknown>> | null;
  tags: string[];
  notes: string[];
  paths: RegistryVariantEntry["paths"];
  props: Record<string, unknown> | null;
  exampleSource: string | null;
  validation: {
    success: boolean;
    error: string | null;
  };
};

export type KitchensinkTypeGroup = {
  type: string;
  items: KitchensinkVariantItem[];
};

export async function getKitchensinkData(): Promise<KitchensinkTypeGroup[]> {
  const groups: KitchensinkTypeGroup[] = [];

  for (const typeEntry of Object.values(blockRegistry.types)) {
    const items: KitchensinkVariantItem[] = [];

    for (const [variantName, variantEntry] of Object.entries(
      typeEntry.variants,
    )) {
      const item = await buildKitchensinkVariantItem({
        type: typeEntry.type,
        variant: variantName,
        variantEntry,
      });

      items.push(item);
    }

    groups.push({
      type: typeEntry.type,
      items: items.sort((a, b) => a.variant.localeCompare(b.variant)),
    });
  }

  return groups.sort((a, b) => a.type.localeCompare(b.type));
}

async function buildKitchensinkVariantItem(params: {
  type: string;
  variant: string;
  variantEntry: RegistryVariantEntry;
}): Promise<KitchensinkVariantItem> {
  const { type, variant, variantEntry } = params;

  const definition = getBlockDefinition(type, variant);

  if (!definition) {
    return {
      type,
      variant,
      title: variantEntry.title,
      description: variantEntry.description,
      propsModel: variantEntry.propsModel,
      component: null,
      tags: variantEntry.tags,
      notes: variantEntry.notes,
      paths: variantEntry.paths,
      props: null,
      exampleSource: null,
      validation: {
        success: false,
        error: `Missing runtime block definition for "${type}/${variant}".`,
      },
    };
  }

  if (!variantEntry.paths.example) {
    return {
      type,
      variant,
      title: variantEntry.title,
      description: variantEntry.description,
      propsModel: variantEntry.propsModel,
      component: definition.Component as ComponentType<Record<string, unknown>>,
      tags: variantEntry.tags,
      notes: variantEntry.notes,
      paths: variantEntry.paths,
      props: null,
      exampleSource: null,
      validation: {
        success: false,
        error: `Missing example.json path for "${type}/${variant}".`,
      },
    };
  }

  try {
    const exampleSource = await readExamplePropsFile(variantEntry.paths.example);
    const props = await loadExampleProps(variantEntry.paths.example, definition.schema);

    return {
      type,
      variant,
      title: variantEntry.title,
      description: variantEntry.description,
      propsModel: variantEntry.propsModel,
      component: definition.Component as ComponentType<Record<string, unknown>>,
      tags: variantEntry.tags,
      notes: variantEntry.notes,
      paths: variantEntry.paths,
      props: props as Record<string, unknown>,
      exampleSource,
      validation: {
        success: true,
        error: null,
      },
    };
  } catch (error) {
    return {
      type,
      variant,
      title: variantEntry.title,
      description: variantEntry.description,
      propsModel: variantEntry.propsModel,
      component: definition.Component as ComponentType<Record<string, unknown>>,
      tags: variantEntry.tags,
      notes: variantEntry.notes,
      paths: variantEntry.paths,
      props: null,
      exampleSource: null,
      validation: {
        success: false,
        error: toErrorMessage(error),
      },
    };
  }
}

function toErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}
