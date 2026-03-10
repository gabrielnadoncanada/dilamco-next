#!/usr/bin/env tsx

import { type Dirent, promises as fs } from "node:fs";
import * as path from "node:path";
import * as process from "node:process";

const ROOT_DIR = process.cwd();
const BLOCKS_DIR = path.join(ROOT_DIR, "features", "page-builder", "sections");
const OUTPUT_DIR = path.join(
  ROOT_DIR,
  "features",
  "page-builder",
  "references",
);
const OUTPUT_FILE = path.join(OUTPUT_DIR, "block-registry.json");

const CORE_TYPES = new Set([
  "hero",
  "split",
  "grid",
  "list",
  "process",
  "comparison",
  "faq",
  "cta",
  "stats",
  "testimonial",
]);

const FORBIDDEN_NAME_PARTS = [
  "kitchen",
  "bathroom",
  "project",
  "projects",
  "service",
  "services",
  "space",
  "spaces",
  "materials",
  "pricing",
  "renovation",
  "guide",
];

const REQUIRED_VARIANT_FILES = [
  "schema.ts",
  "ui.tsx",
  "index.ts",
  "meta.json",
  "example.json",
] as const;
const META_VERSION = 1;

type BlockMeta = {
  $schemaVersion?: number;
  type: string;
  variant: string;
  title: string;
  description: string;
  propsModel: string[];
  kitchenSink: {
    group: string;
    order: number;
    viewport: "desktop" | "mobile";
  };
  tags?: string[];
  notes?: string[];
};

type RegistryVariant = {
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
    example: string;
  };
};

type RegistryType = {
  type: string;
  variants: Record<string, RegistryVariant>;
};

type BlockRegistry = {
  generatedAt: string;
  rootDir: string;
  blocksDir: string;
  types: Record<string, RegistryType>;
};

type ValidationIssue = {
  level: "error" | "warning";
  message: string;
};

async function main(): Promise<void> {
  const issues: ValidationIssue[] = [];

  const registry = await buildRegistry(issues);

  const errors = issues.filter((issue) => issue.level === "error");
  const warnings = issues.filter((issue) => issue.level === "warning");

  if (warnings.length > 0) {
    console.warn("\nWarnings:");
    for (const warning of warnings) {
      console.warn(`- ${warning.message}`);
    }
  }

  if (errors.length > 0) {
    console.error("\nValidation failed:");
    for (const error of errors) {
      console.error(`- ${error.message}`);
    }

    globalThis.process.exitCode = 1;
    return;
  }

  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await fs.writeFile(
    OUTPUT_FILE,
    JSON.stringify(registry, null, 2) + "\n",
    "utf8",
  );

  console.log(
    `Registry written to ${toPosixPath(path.relative(ROOT_DIR, OUTPUT_FILE))}`,
  );
}

async function buildRegistry(
  issues: ValidationIssue[],
): Promise<BlockRegistry> {
  const registry: BlockRegistry = {
    generatedAt: new Date().toISOString(),
    rootDir: ".",
    blocksDir: toPosixPath(path.relative(ROOT_DIR, BLOCKS_DIR)) || ".",
    types: {},
  };

  const typeEntries = await readDirSafe(
    BLOCKS_DIR,
    issues,
    "Missing blocks directory",
  );

  const IGNORED_TYPE_NAMES = new Set(["shared"]);

  for (const typeEntry of typeEntries) {
    if (!typeEntry.isDirectory()) {
      continue;
    }

    const typeName = typeEntry.name;
    if (IGNORED_TYPE_NAMES.has(typeName)) {
      continue;
    }
    validateTypeName(typeName, issues);

    const typeDir = path.join(BLOCKS_DIR, typeName);
    const variantsDir = path.join(typeDir, "variants");
    const variantEntries = await readDirSafe(
      variantsDir,
      issues,
      `Unable to read variants directory: ${relative(variantsDir)}`,
    );

    const variants: Record<string, RegistryVariant> = {};

    for (const variantEntry of variantEntries) {
      if (!variantEntry.isDirectory()) {
        continue;
      }

      const variantName = variantEntry.name;
      validateVariantName(variantName, issues);

      const variantDir = path.join(variantsDir, variantName);
      const variantResult = await loadVariant({
        typeName,
        variantName,
        variantDir,
        issues,
      });

      if (variantResult) {
        variants[variantName] = variantResult;
      }
    }

    if (Object.keys(variants).length > 0) {
      registry.types[typeName] = {
        type: typeName,
        variants,
      };
    } else {
      issues.push({
        level: "warning",
        message: `Type ${typeName} has no valid variants.`,
      });
    }
  }

  return registry;
}

async function loadVariant(params: {
  typeName: string;
  variantName: string;
  variantDir: string;
  issues: ValidationIssue[];
}): Promise<RegistryVariant | null> {
  const { typeName, variantName, variantDir, issues } = params;

  for (const filename of REQUIRED_VARIANT_FILES) {
    const filePath = path.join(variantDir, filename);
    const exists = await fileExists(filePath);

    if (!exists) {
      issues.push({
        level: "error",
        message: `Missing ${filename} in ${relative(variantDir)}.`,
      });
    }
  }

  const metaPath = path.join(variantDir, "meta.json");
  if (!(await fileExists(metaPath))) {
    return null;
  }
  const examplePath = path.join(variantDir, "example.json");

  const meta = await readMeta(metaPath, issues);
  if (!meta) {
    return null;
  }

  validateMeta(meta, { typeName, variantName, metaPath, issues });

  const schemaPath = path.join(variantDir, "schema.ts");
  const uiPath = path.join(variantDir, "ui.tsx");
  const indexPath = path.join(variantDir, "index.ts");

  if (await fileExists(schemaPath)) {
    await validateSchemaFile(schemaPath, issues);
  }

  if (await fileExists(uiPath)) {
    await validateUiFile(uiPath, issues);
  }

  if (await fileExists(indexPath)) {
    await validateIndexFile(indexPath, issues);
  }

  return {
    title: meta.title,
    description: meta.description,
    propsModel: meta.propsModel,
    tags: meta.tags ?? [],
    notes: meta.notes ?? [],
    paths: {
      dir: relative(variantDir),
      schema: relative(schemaPath),
      ui: relative(uiPath),
      index: relative(indexPath),
      meta: relative(metaPath),
      example: relative(examplePath),
    },
  };
}

async function validateSchemaFile(
  filePath: string,
  issues: ValidationIssue[],
): Promise<void> {
  const content = await fs.readFile(filePath, "utf8");

  if (!/from\s+["']zod["']/.test(content)) {
    issues.push({
      level: "error",
      message: `schema.ts must import zod in ${relative(filePath)}.`,
    });
  }

  if (!/z\.(object|strictObject)\s*\(/.test(content)) {
    issues.push({
      level: "error",
      message: `schema.ts must define a Zod object schema in ${relative(filePath)}.`,
    });
  }

  if (!/z\.infer\s*</.test(content)) {
    issues.push({
      level: "error",
      message: `schema.ts must export a Props type inferred from Zod in ${relative(filePath)}.`,
    });
  }

  if (/ReactNode/.test(content)) {
    issues.push({
      level: "error",
      message: `ReactNode is forbidden in ${relative(filePath)}.`,
    });
  }

  if (/className\s*[:?]/.test(content)) {
    issues.push({
      level: "error",
      message: `className is forbidden in ${relative(filePath)}.`,
    });
  }
}

async function validateUiFile(
  filePath: string,
  issues: ValidationIssue[],
): Promise<void> {
  const content = await fs.readFile(filePath, "utf8");

  const shellPatterns = [
    /<section\b/i,
    /container-(xs|sm|md|lg|xl|2xl|7xl)/i,
    /max-w-(xs|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl)/i,
    /py-(\d+|px)/i,
    /pt-(\d+|px)/i,
    /pb-(\d+|px)/i,
  ];

  for (const pattern of shellPatterns) {
    if (pattern.test(content)) {
      issues.push({
        level: "warning",
        message: `ui.tsx may contain outer shell concerns in ${relative(filePath)}. Review BlockFrame ownership.`,
      });
      break;
    }
  }
}

async function validateIndexFile(
  filePath: string,
  issues: ValidationIssue[],
): Promise<void> {
  const content = await fs.readFile(filePath, "utf8");

  if (!/schema/i.test(content)) {
    issues.push({
      level: "warning",
      message: `index.ts does not appear to reference schema in ${relative(filePath)}.`,
    });
  }

  if (!/variant/i.test(content) || !/type/i.test(content)) {
    issues.push({
      level: "warning",
      message: `index.ts should expose type and variant in ${relative(filePath)}.`,
    });
  }
}

function validateTypeName(typeName: string, issues: ValidationIssue[]): void {
  if (!isKebabCase(typeName)) {
    issues.push({
      level: "error",
      message: `Invalid type name \"${typeName}\". Use lowercase kebab-case only.`,
    });
  }

  if (containsForbiddenNamePart(typeName)) {
    issues.push({
      level: "error",
      message: `Invalid type name \"${typeName}\". Type names must be structural, not domain-specific.`,
    });
  }

  if (!CORE_TYPES.has(typeName)) {
    issues.push({
      level: "warning",
      message: `Type \"${typeName}\" is not in the core taxonomy. Confirm it is structurally justified.`,
    });
  }
}

function validateVariantName(
  variantName: string,
  issues: ValidationIssue[],
): void {
  if (!isKebabCase(variantName)) {
    issues.push({
      level: "error",
      message: `Invalid variant name \"${variantName}\". Use lowercase kebab-case only.`,
    });
  }

  if (containsForbiddenNamePart(variantName)) {
    issues.push({
      level: "error",
      message: `Invalid variant name \"${variantName}\". Variant names must be UI-only, not domain-specific.`,
    });
  }
}

function validateMeta(
  meta: BlockMeta,
  params: {
    typeName: string;
    variantName: string;
    metaPath: string;
    issues: ValidationIssue[];
  },
): void {
  const { typeName, variantName, metaPath, issues } = params;

  if (
    meta.$schemaVersion !== undefined &&
    meta.$schemaVersion !== META_VERSION
  ) {
    issues.push({
      level: "warning",
      message: `Unexpected $schemaVersion in ${relative(metaPath)}. Expected ${META_VERSION}.`,
    });
  }

  if (meta.type !== typeName) {
    issues.push({
      level: "error",
      message: `meta.json type mismatch in ${relative(metaPath)}. Expected \"${typeName}\" but got \"${meta.type}\".`,
    });
  }

  if (meta.variant !== variantName) {
    issues.push({
      level: "error",
      message: `meta.json variant mismatch in ${relative(metaPath)}. Expected \"${variantName}\" but got \"${meta.variant}\".`,
    });
  }

  if (!meta.title || !meta.title.trim()) {
    issues.push({
      level: "error",
      message: `meta.json title is required in ${relative(metaPath)}.`,
    });
  }

  if (!meta.description || !meta.description.trim()) {
    issues.push({
      level: "error",
      message: `meta.json description is required in ${relative(metaPath)}.`,
    });
  }

  if (!Array.isArray(meta.propsModel) || meta.propsModel.length === 0) {
    issues.push({
      level: "error",
      message: `meta.json propsModel must be a non-empty array in ${relative(metaPath)}.`,
    });
  }

  if (Array.isArray(meta.propsModel)) {
    for (const entry of meta.propsModel) {
      if (typeof entry !== "string" || !entry.trim()) {
        issues.push({
          level: "error",
          message: `meta.json propsModel entries must be non-empty strings in ${relative(metaPath)}.`,
        });
        break;
      }
    }
  }

  if (!isRecord(meta.kitchenSink)) {
    issues.push({
      level: "error",
      message: `meta.json kitchenSink is required in ${relative(metaPath)}.`,
    });
  } else {
    if (
      typeof meta.kitchenSink.group !== "string" ||
      !meta.kitchenSink.group.trim()
    ) {
      issues.push({
        level: "error",
        message: `meta.json kitchenSink.group must be a non-empty string in ${relative(metaPath)}.`,
      });
    }

    if (
      typeof meta.kitchenSink.order !== "number" ||
      !Number.isFinite(meta.kitchenSink.order)
    ) {
      issues.push({
        level: "error",
        message: `meta.json kitchenSink.order must be a finite number in ${relative(metaPath)}.`,
      });
    }

    if (
      meta.kitchenSink.viewport !== "desktop" &&
      meta.kitchenSink.viewport !== "mobile"
    ) {
      issues.push({
        level: "error",
        message: `meta.json kitchenSink.viewport must be "desktop" or "mobile" in ${relative(metaPath)}.`,
      });
    }
  }

  if (containsForbiddenNamePart(meta.type)) {
    issues.push({
      level: "error",
      message: `meta.json type is domain-specific in ${relative(metaPath)}.`,
    });
  }

  if (containsForbiddenNamePart(meta.variant)) {
    issues.push({
      level: "error",
      message: `meta.json variant is domain-specific in ${relative(metaPath)}.`,
    });
  }
}

async function readMeta(
  filePath: string,
  issues: ValidationIssue[],
): Promise<BlockMeta | null> {
  try {
    const raw = await fs.readFile(filePath, "utf8");
    const parsed = JSON.parse(raw) as unknown;

    if (!isRecord(parsed)) {
      issues.push({
        level: "error",
        message: `meta.json must contain an object in ${relative(filePath)}.`,
      });
      return null;
    }

    return parsed as BlockMeta;
  } catch (error) {
    issues.push({
      level: "error",
      message: `Invalid JSON in ${relative(filePath)}: ${toErrorMessage(error)}`,
    });
    return null;
  }
}

async function readDirSafe(
  dirPath: string,
  issues: ValidationIssue[],
  errorMessage: string,
): Promise<Dirent<string>[]> {
  try {
    return await fs.readdir(dirPath, { withFileTypes: true });
  } catch (error) {
    issues.push({
      level: "error",
      message: `${errorMessage}: ${toErrorMessage(error)}`,
    });
    return [];
  }
}

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

function isKebabCase(value: string): boolean {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
}

function containsForbiddenNamePart(value: string): boolean {
  return FORBIDDEN_NAME_PARTS.some((part) => value.includes(part));
}

function relative(filePath: string): string {
  return toPosixPath(path.relative(ROOT_DIR, filePath));
}

function toPosixPath(value: string): string {
  return value.split(path.sep).join("/");
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function toErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

void main();
