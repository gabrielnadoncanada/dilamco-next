import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import sharp from "sharp";

const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".gif", ".avif", ".tif", ".tiff"]);
const DATA_FILE_EXTENSIONS = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs"]);

function parseArgs(argv) {
  let dryRun = false;
  let force = false;
  let deleteSource = false;

  for (const arg of argv) {
    if (arg === "--dry-run") dryRun = true;
    else if (arg === "--force") force = true;
    else if (arg === "--delete-source") deleteSource = true;
  }

  return { dryRun, force, deleteSource };
}

async function walkFiles(dirPath, predicate) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walkFiles(fullPath, predicate)));
      continue;
    }

    if (entry.isFile() && predicate(fullPath)) {
      files.push(fullPath);
    }
  }

  return files;
}

function isConvertibleImage(filePath) {
  return IMAGE_EXTENSIONS.has(path.extname(filePath).toLowerCase());
}

function isDataFile(filePath) {
  return DATA_FILE_EXTENSIONS.has(path.extname(filePath).toLowerCase());
}

function toPublicRoute(filePath) {
  const publicDir = path.join(process.cwd(), "public");
  const relativePath = path.relative(publicDir, filePath);
  if (relativePath.startsWith("..")) {
    throw new Error(`File is not inside public/: ${filePath}`);
  }

  return `/${relativePath.split(path.sep).join("/")}`;
}

async function ensureFileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function convertImage(sourcePath, targetPath, force) {
  if (!force && (await ensureFileExists(targetPath))) {
    return "skipped";
  }

  await sharp(sourcePath).webp({ quality: 82 }).toFile(targetPath);
  return "converted";
}

function buildReplacementMap(imageFiles) {
  const replacements = new Map();

  for (const imagePath of imageFiles) {
    const parsed = path.parse(imagePath);
    const webpPath = path.join(parsed.dir, `${parsed.name}.webp`);
    replacements.set(toPublicRoute(imagePath), toPublicRoute(webpPath));
  }

  return replacements;
}

async function updateDataFile(filePath, replacements, dryRun) {
  const original = await fs.readFile(filePath, "utf8");
  let next = original;
  let replacedCount = 0;

  for (const [currentPath, webpPath] of replacements) {
    if (!next.includes(currentPath)) continue;

    const occurrences = next.split(currentPath).length - 1;
    next = next.split(currentPath).join(webpPath);
    replacedCount += occurrences;
  }

  if (replacedCount === 0) {
    return 0;
  }

  if (!dryRun) {
    await fs.writeFile(filePath, next);
  }

  return replacedCount;
}

async function maybeDeleteSource(sourcePath, targetPath, enabled, dryRun) {
  if (!enabled) return false;
  if (!(await ensureFileExists(targetPath))) return false;
  if (dryRun) return true;

  await fs.unlink(sourcePath);
  return true;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const publicImagesDir = path.join(process.cwd(), "public", "images");
  const dataDir = path.join(process.cwd(), "data");

  const imageFiles = await walkFiles(publicImagesDir, isConvertibleImage);
  const replacements = buildReplacementMap(imageFiles);

  let converted = 0;
  let skipped = 0;
  let deleted = 0;

  for (const imagePath of imageFiles) {
    const parsed = path.parse(imagePath);
    const webpPath = path.join(parsed.dir, `${parsed.name}.webp`);
    const result = await convertImage(imagePath, webpPath, args.force);

    if (result === "converted") converted += 1;
    else skipped += 1;

    console.log(`${result}\t${toPublicRoute(imagePath)} -> ${toPublicRoute(webpPath)}`);

    if (await maybeDeleteSource(imagePath, webpPath, args.deleteSource, args.dryRun)) {
      deleted += 1;
      console.log(`delete\t${toPublicRoute(imagePath)}`);
    }
  }

  const dataFiles = await walkFiles(dataDir, isDataFile);
  let changedFiles = 0;
  let updatedReferences = 0;

  for (const filePath of dataFiles) {
    const replacedCount = await updateDataFile(filePath, replacements, args.dryRun);
    if (replacedCount === 0) continue;

    changedFiles += 1;
    updatedReferences += replacedCount;
    console.log(`patch\t${path.relative(process.cwd(), filePath)}\t${replacedCount}`);
  }

  console.log("");
  console.log(`Images converted: ${converted}`);
  console.log(`Images skipped: ${skipped}`);
  console.log(`Source images deleted: ${deleted}`);
  console.log(`Data files updated: ${changedFiles}`);
  console.log(`Image references updated: ${updatedReferences}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
