import { describe, expect, it } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

// Garde-fou contenu dupliqué : une chaîne de prose d'au moins MIN_LEN
// caractères ne doit apparaître que dans UNE page (FR) / UNE page (EN).
// Les pages zones, services et espaces doivent porter un texte propre —
// sinon Google les considère comme des quasi-doublons et n'en indexe qu'une.
const ROOT = join(process.cwd(), "data", "page-builder");
const MIN_LEN = 60;
// Formules institutionnelles tolérées partout (licence, bande CTA…).
const ALLOW = [/^Licence RBQ 8306-0806-27/i, /^RBQ licence 8306-0806-27/i];

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith(".ts") && !name.endsWith("index.ts") ? [p] : [];
  });
}

const STRING_RE = /"((?:[^"\\]|\\.)*)"/g;

function proseStrings(file: string): string[] {
  const src = readFileSync(file, "utf8")
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/^\s*\/\/.*$/gm, "");
  const out: string[] = [];
  for (const m of src.matchAll(STRING_RE)) {
    const s = m[1].trim();
    if (s.length < MIN_LEN) continue;
    if (s.startsWith("/") || s.startsWith("http")) continue;
    if (ALLOW.some((re) => re.test(s))) continue;
    out.push(s);
  }
  return out;
}

describe("contenu dupliqué entre pages", () => {
  const files = walk(ROOT);
  const byLocale: Record<"fr" | "en", Map<string, Set<string>>> = {
    fr: new Map(),
    en: new Map(),
  };
  for (const f of files) {
    const locale = f.endsWith(".en.ts") ? "en" : "fr";
    const rel = relative(ROOT, f);
    for (const s of new Set(proseStrings(f))) {
      const set = byLocale[locale].get(s) ?? new Set<string>();
      set.add(rel);
      byLocale[locale].set(s, set);
    }
  }

  for (const locale of ["fr", "en"] as const) {
    it(`aucun paragraphe (≥ ${MIN_LEN} c.) partagé par plusieurs pages [${locale}]`, () => {
      const dups = [...byLocale[locale].entries()]
        .filter(([, pages]) => pages.size > 1)
        .map(([s, pages]) => `« ${s.slice(0, 70)}… » → ${[...pages].join(", ")}`);
      expect(dups, dups.join("\n")).toEqual([]);
    });
  }
});
