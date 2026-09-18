// Compte les mots de PROSE (chaînes de caractères) d'un fichier de données
// page-builder, en ignorant les URL, chemins d'images, clés et commentaires.
// Usage : node scripts/copy-wordcount.mjs data/page-builder/zone-pages/*.ts
import { readFileSync } from "node:fs";

const files = process.argv.slice(2);
if (files.length === 0) {
  console.error("Usage: node scripts/copy-wordcount.mjs <fichiers...>");
  process.exit(1);
}

const STRING_RE = /"((?:[^"\\]|\\.)*)"|'((?:[^'\\]|\\.)*)'/g;

function isProse(s) {
  if (s.length < 3) return false;
  if (s.startsWith("/") || s.startsWith("http")) return false;
  if (/\.(webp|png|jpg|jpeg|svg)$/i.test(s)) return false;
  if (/^[a-z0-9-]+$/.test(s)) return false; // slugs, enums (primary, ghost, 2…)
  if (/^[A-Z_]+$/.test(s)) return false;
  return true;
}

let total = 0;
for (const file of files) {
  const src = readFileSync(file, "utf8")
    // retire les commentaires // et /* */
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/^\s*\/\/.*$/gm, "");
  let words = 0;
  for (const m of src.matchAll(STRING_RE)) {
    const s = m[1] ?? m[2] ?? "";
    if (!isProse(s)) continue;
    words += s.trim().split(/\s+/).filter(Boolean).length;
  }
  total += words;
  console.log(String(words).padStart(6), file);
}
if (files.length > 1) console.log(String(total).padStart(6), "TOTAL");
