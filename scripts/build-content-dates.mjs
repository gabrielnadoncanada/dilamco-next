// Génère lib/seo/content-dates.json : { "<metadata.path>": "YYYY-MM-DD" }
// La date = dernier commit git touchant le(s) fichier(s) de contenu déclarant ce
// path (max entre FR et EN). Sert au signal de fraîcheur (dateModified + affichage
// « Mis à jour le… »). Régénéré à chaque build (cf. script "build").
//
// Robuste : si git est indisponible ou un fichier n'a pas d'historique, le path
// est simplement omis (aucune date affichée) — jamais de date inventée.

import { execSync } from "node:child_process";
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const CONTENT_DIR = join(ROOT, "data", "page-builder");
const OUT = join(ROOT, "lib", "seo", "content-dates.json");

function listTsFiles(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listTsFiles(full));
    else if (entry.name.endsWith(".ts")) out.push(full);
  }
  return out;
}

function extractPath(fileContent) {
  const m = fileContent.match(/path:\s*"(\/[^"]*)"/);
  return m ? m[1] : null;
}

function gitDate(file) {
  try {
    const rel = relative(ROOT, file).split("\\").join("/");
    const out = execSync(`git log -1 --format=%cs -- "${rel}"`, {
      cwd: ROOT,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    return /^\d{4}-\d{2}-\d{2}$/.test(out) ? out : null;
  } catch {
    return null;
  }
}

const dates = {};
let scanned = 0;

for (const file of listTsFiles(CONTENT_DIR)) {
  const content = readFileSync(file, "utf8");
  const path = extractPath(content);
  if (!path) continue;
  const date = gitDate(file);
  if (!date) continue;
  scanned++;
  // Max (le plus récent) entre les fichiers FR/EN partageant le même path.
  if (!dates[path] || date > dates[path]) dates[path] = date;
}

const sorted = Object.fromEntries(
  Object.entries(dates).sort(([a], [b]) => a.localeCompare(b)),
);

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, JSON.stringify(sorted, null, 2) + "\n");
console.log(
  `[content-dates] ${Object.keys(sorted).length} paths datés (${scanned} fichiers) → ${relative(ROOT, OUT)}`,
);
