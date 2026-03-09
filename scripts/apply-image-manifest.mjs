import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

import imageManifest from "../data/image-generation-manifest.mjs";

function parseArgs(argv) {
  const ids = new Set();
  let dryRun = false;

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--dry-run") dryRun = true;
    else if (arg.startsWith("--id=")) ids.add(arg.slice("--id=".length));
    else if (arg === "--id" && argv[i + 1]) {
      ids.add(argv[i + 1]);
      i += 1;
    }
  }

  return { ids, dryRun };
}

function selectItems(items, ids) {
  if (ids.size === 0) return items;
  return items.filter((item) => ids.has(item.id));
}

function replaceNth(haystack, needle, replacement, occurrence) {
  let fromIndex = 0;
  let seen = 0;

  while (fromIndex <= haystack.length) {
    const index = haystack.indexOf(needle, fromIndex);
    if (index === -1) {
      return { changed: false, value: haystack };
    }

    seen += 1;
    if (seen === occurrence) {
      return {
        changed: true,
        value: `${haystack.slice(0, index)}${replacement}${haystack.slice(index + needle.length)}`,
      };
    }

    fromIndex = index + needle.length;
  }

  return { changed: false, value: haystack };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const items = selectItems(imageManifest, args.ids);
  const operationsByFile = new Map();

  for (const item of items) {
    for (const target of item.targets) {
      const filePath = path.join(process.cwd(), target.file);
      if (!operationsByFile.has(filePath)) {
        operationsByFile.set(filePath, []);
      }
      operationsByFile.get(filePath).push({ item, target });
    }
  }

  const fileUpdates = new Map();

  for (const [filePath, operations] of operationsByFile) {
    let current = await fs.readFile(filePath, "utf8");

    operations.sort((a, b) => {
      if (a.target.currentSrc === b.target.currentSrc) {
        return (b.target.occurrence ?? 1) - (a.target.occurrence ?? 1);
      }
      return a.target.currentSrc.localeCompare(b.target.currentSrc);
    });

    for (const { item, target } of operations) {
      const needle = `src: "${target.currentSrc}"`;
      const replacement = `src: "${item.output}"`;
      const occurrence = target.occurrence ?? 1;

      const result = replaceNth(current, needle, replacement, occurrence);
      if (!result.changed) {
        throw new Error(
          `Could not replace occurrence ${occurrence} of ${target.currentSrc} in ${target.file} for manifest item ${item.id}.`,
        );
      }

      current = result.value;
      console.log(`patch\t${item.id}\t${target.file}\t${target.currentSrc} -> ${item.output}`);
    }

    fileUpdates.set(filePath, current);
  }

  if (args.dryRun) return;

  for (const [filePath, content] of fileUpdates) {
    await fs.writeFile(filePath, content);
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
