/**
 * Synchronise le catalogue depuis catalog.xlsx (source de vérité, racine du repo)
 * vers lib/shop/catalog-products.json et lib/shop/catalog-categories.json.
 *
 * Rapatrié depuis dilamco_store/scripts/sync-catalog.mjs : la racine dilamco-next
 * consomme lib/shop/catalog-*.json, donc le script doit écrire ici directement
 * (fini la copie manuelle store -> racine).
 *
 * Usage : pnpm run sync:catalog   (ou : node scripts/sync-catalog.mjs)
 * Option : --out=<dir> pour écrire ailleurs (dry-run/diff sans écraser).
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as XLSX from "xlsx";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const XLSX_PATH = path.join(root, "catalog.xlsx");

// --out=<dir> permet un dry-run (ex. --out=tmp/catalog-dryrun) sans toucher lib/shop.
const outArg = process.argv.find((a) => a.startsWith("--out="));
const OUT_DIR = outArg
  ? path.resolve(root, outArg.slice("--out=".length))
  : path.join(root, "lib", "shop");
mkdirSync(OUT_DIR, { recursive: true });
const PRODUCTS_OUT = path.join(OUT_DIR, "catalog-products.json");
const CATEGORIES_OUT = path.join(OUT_DIR, "catalog-categories.json");
// Libellés FR -> EN (colonnes *_en du xlsx). Fichier compact consommé par
// catalog-i18n.ts comme source primaire de traduction (glossaire = fallback).
const LABELS_OUT = path.join(OUT_DIR, "catalog-labels-en.json");

const warnings = [];
const warn = (msg) => warnings.push(msg);

const slugify = (s) =>
  String(s)
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const clean = (v) => {
  if (v === null || v === undefined) return undefined;
  const s = String(v).trim();
  return s === "" ? undefined : s;
};
const num = (v) => (typeof v === "number" ? v : undefined);
// Prix de vente arrondi au cent (les colonnes calculées du xlsx ont de nombreuses décimales).
const money = (v) => (typeof v === "number" ? Math.round(v * 100) / 100 : undefined);

const wb = XLSX.read(readFileSync(XLSX_PATH));

/**
 * Lit une feuille en normalisant les en-têtes : les colonnes du xlsx contiennent
 * des espaces parasites (ex. " full_name", " Price (cad) "). On retrim chaque clé.
 */
const readSheet = (name) =>
  XLSX.utils.sheet_to_json(wb.Sheets[name], { defval: null }).map((row) => {
    const out = {};
    for (const [k, v] of Object.entries(row)) out[k.trim()] = v;
    return out;
  });

// ---------------------------------------------------------------------------
// Categories
// ---------------------------------------------------------------------------
// Clé interne = slug_en (ce que la colonne `parent` référence). slug_fr = slug d'URL FR.
const catRows = readSheet("Categories").filter((r) => clean(r.slug_en));

const catBySlug = new Map();
for (const r of catRows) {
  const slug = clean(r.slug_en);
  if (catBySlug.has(slug)) warn(`Categories: slug_en en double "${slug}" (dernière ligne gagnante)`);
  catBySlug.set(slug, {
    slug,
    parent: clean(r.parent) ?? null,
    nameFr: clean(r.name_fr) ?? slug,
    nameEn: clean(r.name_en) ?? null,
    slugFr: clean(r.slug_fr) ?? null,
  });
}

// ---------------------------------------------------------------------------
// Products
// ---------------------------------------------------------------------------
const prodRows = readSheet("Products").filter((r) => clean(r.internal_code));

const seen = new Set();
const products = [];
// Libellés FR -> EN, indexés sur le nom FR tel qu'il apparaît dans le JSON.
const labelProducts = {};
let brokenSkus = 0;
for (const r of prodRows) {
  const code = clean(r.internal_code);
  if (seen.has(code)) {
    warn(`Products: internal_code en double "${code}" — ligne ignorée`);
    continue;
  }
  seen.add(code);

  const category = clean(r.sub_category);
  if (!category) warn(`Products: ${code} sans sub_category`);
  const fullName = clean(r.full_name);
  const subCatFr = clean(r.sub_category_fr);
  if (subCatFr?.startsWith("⚠")) warn(`Products: ${code} — sub_category_fr en erreur dans Excel ("${subCatFr}")`);

  // Prix de vente client = colonne « Price (cad) » (prix Dilamco calculé),
  // à ne pas confondre avec « Retail Price Yihai (cad) » (tarif fournisseur).
  const priceRaw = r["Price (cad)"];
  const p = {
    code,
    name: fullName ?? clean(r.name) ?? code,
    shortName: clean(r.short_name),
    externalCode: clean(r.external_code),
    sku: clean(r.SKU),
    finish: clean(r.finish),
    price: money(priceRaw) ?? 0,
    category: category ?? "uncategorized",
    partType: clean(r.partType),
    w: num(r.w),
    h: num(r.h),
    d: num(r.d),
    doors: num(r.doors),
    drawers: num(r.drawers),
    visible: r.visible === true,
  };
  if (p.price <= 0 && p.visible) warn(`Products: ${code} visible sans prix valide (${priceRaw})`);

  // Drapeaux de contrôle (feuille Products) — n'affectent pas le filtrage mais à surveiller.
  const question = clean(r.question);
  if (question && /price/i.test(question)) {
    warn(`Products: ${code} — prix incertain (question Excel: "${question}")`);
  }
  if (p.visible && r["Should Ignore"] === true) {
    warn(`Products: ${code} — marqué "Should Ignore" mais visible==true (conflit à trancher)`);
  }
  if (p.sku?.startsWith("-")) {
    // SKU Excel = external_code + suffixe finition ; sans external_code il est inutilisable
    brokenSkus++;
    delete p.sku;
  }
  // Retire les clés undefined pour un JSON propre
  for (const k of Object.keys(p)) if (p[k] === undefined) delete p[k];
  products.push(p);

  // Traductions EN (colonnes full_name_en / short_name_en) — indexées sur le
  // libellé FR effectif du produit, pour que catalog-i18n.ts les retrouve.
  const fullEn = clean(r.full_name_en);
  const shortEn = clean(r.short_name_en);
  if (fullEn && p.name) labelProducts[p.name] = fullEn;
  if (shortEn && p.shortName) labelProducts[p.shortName] = shortEn;
}

if (brokenSkus) {
  warn(
    `Products: ${brokenSkus} SKU incomplets (external_code manquant dans catalog.xlsx) — omis du JSON`,
  );
}

// Catégories référencées par des produits mais absentes de la feuille Categories :
// on les crée (parent = plus long préfixe existant) pour ne pas orpheliner les produits.
const referenced = new Set(products.map((p) => p.category));
for (const slug of referenced) {
  if (catBySlug.has(slug)) continue;
  let parent = null;
  for (const existing of catBySlug.keys()) {
    if (slug.startsWith(existing + "-") && (!parent || existing.length > parent.length)) {
      parent = existing;
    }
  }
  catBySlug.set(slug, { slug, parent, nameFr: slug, autoAdded: true });
  warn(
    `Categories: "${slug}" référencée par des produits mais absente de la feuille Categories — ` +
      `ajoutée automatiquement (parent: ${parent ?? "aucun"}). À corriger dans catalog.xlsx.`,
  );
}

// Parents inconnus → la catégorie devient inatteignable depuis la racine
for (const c of catBySlug.values()) {
  if (c.parent && !catBySlug.has(c.parent)) {
    warn(`Categories: "${c.slug}" a un parent inconnu "${c.parent}" — gardée telle quelle (invisible en nav)`);
  }
}

// path (chaîne d'ancêtres) + slugFr, avec garde anti-cycle
function pathOf(slug) {
  const out = [];
  let cur = slug;
  const visited = new Set();
  while (cur && catBySlug.has(cur) && !visited.has(cur)) {
    visited.add(cur);
    out.unshift(cur);
    cur = catBySlug.get(cur).parent;
  }
  return out;
}

const categories = [...catBySlug.values()].map((c) => {
  const p = pathOf(c.slug);
  return {
    slug: c.slug,
    parent: c.parent,
    name: { fr: c.nameFr, en: c.nameEn ?? null },
    // slug_fr explicite (colonne xlsx) ; fallback : chemin des noms FR slugifiés.
    slugFr: c.slugFr ?? p.map((s) => slugify(catBySlug.get(s).nameFr)).join("-"),
    path: p,
  };
});

// Libellés de familles/catégories FR -> EN (nom FR -> nom EN).
const labelFamilies = {};
for (const c of catBySlug.values()) {
  if (c.nameEn) labelFamilies[c.nameFr] = c.nameEn;
}

// ---------------------------------------------------------------------------
// Écriture
// ---------------------------------------------------------------------------
writeFileSync(
  PRODUCTS_OUT,
  JSON.stringify({ source: "catalog.xlsx (feuille Products)", products }, null, 2) + "\n",
);
writeFileSync(
  CATEGORIES_OUT,
  JSON.stringify({ source: "catalog.xlsx (feuille Categories)", categories }, null, 2) + "\n",
);
writeFileSync(
  LABELS_OUT,
  JSON.stringify(
    { source: "catalog.xlsx (colonnes *_en)", products: labelProducts, families: labelFamilies },
    null,
    2,
  ) + "\n",
);

const visible = products.filter((p) => p.visible).length;
console.log(`✔ ${products.length} produits (${visible} visibles) → ${path.relative(root, PRODUCTS_OUT)}`);
console.log(`✔ ${categories.length} catégories → ${path.relative(root, CATEGORIES_OUT)}`);
console.log(
  `✔ ${Object.keys(labelProducts).length} libellés produits + ${Object.keys(labelFamilies).length} familles EN → ${path.relative(root, LABELS_OUT)}`,
);
if (warnings.length) {
  console.log(`\n⚠ ${warnings.length} avertissement(s) :`);
  for (const w of warnings) console.log(`  - ${w}`);
}
