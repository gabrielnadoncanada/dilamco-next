// Génère public/sitemap-images.xml + public/sitemap-products.xml à partir des
// pages HTML buildées.
// - sitemap-images : chaque <img> (/images/) ou render produit (JSON-LD) associé
//   à sa page, pour Google Images.
// - sitemap-products : les fiches produit avec hreflang FR/EN CORRECTS (slug
//   traduit FR≠EN, que next-sitemap ne sait pas apparier — voir next-sitemap.config.js).
import fs from "node:fs/promises";
import path from "node:path";

const SITE = "https://dilamco.com";
const APP_DIR = path.join(process.cwd(), ".next", "server", "app");
const OUT = path.join(process.cwd(), "public", "sitemap-images.xml");
const PRODUCTS_OUT = path.join(process.cwd(), "public", "sitemap-products.xml");
const ROBOTS = path.join(process.cwd(), "public", "robots.txt");
const INDEX = path.join(process.cwd(), "public", "sitemap.xml");

const SKIP_ROUTE = (r) =>
  r.startsWith("/landing") ||
  r.startsWith("/en/landing") ||
  r.includes("_not-found") ||
  r.includes("_global-error") ||
  r.includes("opengraph-image");

async function walkHtml(dir) {
  const out = [];
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const fp = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walkHtml(fp)));
    else if (entry.isFile() && entry.name.endsWith(".html")) out.push(fp);
  }
  return out;
}

// Traduction des segments pour l'EN (synchronisé avec i18n/routing.ts).
const EN_SEGMENT = {
  espaces: "spaces",
  projets: "projects",
  boutique: "shop",
  materiaux: "materials",
  "a-propos": "about",
  processus: "process",
  "politique-de-confidentialite": "privacy-policy",
  "conditions-dutilisation": "terms-of-use",
};
const SPACE_EN = {
  cuisine: "kitchen",
  "salle-de-bain": "bathroom",
  "walk-in": "walk-in",
  "salle-de-lavage": "laundry-room",
  "sous-sol": "basement",
  commercial: "commercial",
};
const RENOVATION_EN = {
  cuisine: "kitchen",
  "salle-de-bain": "bathroom",
  plancher: "flooring",
  "agrandissement-de-maison": "home-extension",
};
const MATERIAL_EN = {
  contreplaque: "plywood",
  "bois-massif": "solid-wood",
  comparatif: "comparison",
  couleurs: "colours",
  quincaillerie: "hardware",
  mdf: "mdf",
  melamine: "melamine",
};
// Slugs de projets traduits. Clé = `${espace FR}/${slug FR}`.
const PROJECT_SLUG_EN = {
  "salle-de-bain/vanite-sur-mesure-laval": "custom-vanity-laval",
  "cuisine/cuisine-sur-mesure-montreal": "custom-kitchen-montreal",
  "cuisine/cuisine-sur-mesure-pierrefonds": "custom-kitchen-pierrefonds",
  "cuisine/cuisine-sur-mesure-plateau-mont-royal":
    "custom-kitchen-plateau-mont-royal",
  "cuisine/cuisine-sur-mesure-rive-sud": "custom-kitchen-south-shore",
  "commercial/amenagement-sur-mesure-bureau-centre-ville-montreal":
    "custom-office-downtown-montreal",
};

function fileToRoute(fp) {
  let r = fp.slice(APP_DIR.length).replace(/\\/g, "/").replace(/\.html$/, "");
  if (r.endsWith("/index")) r = r.slice(0, -"/index".length);
  // FR à la racine (on retire /fr).
  if (r === "/fr") return "/";
  if (r.startsWith("/fr/")) return r.slice(3);
  // EN : on traduit le premier segment + la valeur d'espace.
  if (r === "/en" || r === "/en/index") return "/en";
  if (r.startsWith("/en/")) {
    const segs = r.slice(4).split("/");
    const head = segs[0];
    if ((head === "espaces" || head === "projets") && segs[1]) {
      // Slug de projet (3e segment) traduit AVANT l'espace (clé = espace FR).
      if (head === "projets" && segs[2]) {
        segs[2] = PROJECT_SLUG_EN[`${segs[1]}/${segs[2]}`] ?? segs[2];
      }
      segs[1] = SPACE_EN[segs[1]] ?? segs[1];
    }
    if (head === "services" && segs[1] === "renovation" && segs[2]) {
      segs[2] = RENOVATION_EN[segs[2]] ?? segs[2];
    }
    if (head === "materiaux" && segs[1]) {
      segs[1] = MATERIAL_EN[segs[1]] ?? segs[1];
    }
    segs[0] = EN_SEGMENT[head] ?? head;
    return `/en/${segs.join("/")}`;
  }
  return r || "/";
}

// Extrait toutes les images /images/... d'un <img ...> avec son alt.
function extractImages(html) {
  const imgs = [];
  const seen = new Set();
  const imgTagRe = /<img\b[^>]*>/gi;
  let m;
  while ((m = imgTagRe.exec(html))) {
    const tag = m[0];
    const altMatch = tag.match(/\balt="([^"]*)"/i);
    const alt = altMatch ? altMatch[1] : "";
    // récupère le premier /images/... (depuis src, srcSet, url=…)
    const urlMatch =
      tag.match(/url=([^&"'\s]*%2Fimages%2F[^&"'\s]*)/i) ||
      tag.match(/(\/images\/[^"'\s)]+)/i);
    if (!urlMatch) continue;
    let raw = urlMatch[1];
    if (raw.includes("%2F") || raw.includes("%2f")) raw = decodeURIComponent(raw);
    const idx = raw.indexOf("/images/");
    if (idx === -1) continue;
    let imgPath = raw.slice(idx).split("?")[0];
    // Exclure logos / icônes / svg : non pertinents pour Google Images.
    if (/\.svg$/i.test(imgPath) || /\/(logo|icon|favicon)/i.test(imgPath)) continue;
    if (seen.has(imgPath)) continue;
    seen.add(imgPath);
    imgs.push({ imgPath, alt });
  }
  return imgs;
}

// Fiches produit : l'<img> de la galerie est rendu côté client (absent du HTML
// statique), mais le JSON-LD Product rendu au build porte l'URL canonique
// (slug localisé), l'image render (absolue) et le nom descriptif. C'est la
// source de vérité du SEO image produit. Le placeholder est écarté.
function extractProductLdImages(html) {
  const out = [];
  const re = /<script type="application\/ld\+json">(.*?)<\/script>/gs;
  let m;
  while ((m = re.exec(html))) {
    let parsed;
    try {
      parsed = JSON.parse(m[1]);
    } catch {
      continue;
    }
    const nodes = Array.isArray(parsed)
      ? parsed
      : Array.isArray(parsed["@graph"])
        ? parsed["@graph"]
        : [parsed];
    for (const n of nodes) {
      if (!n || n["@type"] !== "Product" || !n.url) continue;
      const raw = Array.isArray(n.image) ? n.image : [n.image];
      const images = [...new Set(raw.filter(Boolean))].filter(
        (u) => !/placeholder/i.test(u),
      );
      if (!images.length) continue;
      out.push({ loc: n.url, name: typeof n.name === "string" ? n.name : "", images });
    }
  }
  return out;
}

// Alternates hreflang (rendus corrects par les métadonnées de la page) +
// canonical. Sert à émettre les fiches produit avec un slug FR/EN apparié.
function extractHreflang(html) {
  const canonical = (html.match(/<link rel="canonical" href="([^"]+)"/i) || [])[1];
  const alts = [];
  const re = /<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/gi;
  let m;
  while ((m = re.exec(html))) alts.push({ lang: m[1], href: m[2] });
  return { canonical, alts };
}

const xmlEscape = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

async function main() {
  const files = await walkHtml(APP_DIR);
  const byRoute = new Map();
  const productUrls = []; // { loc, name, images[] } issus du JSON-LD des fiches
  const productPages = []; // { loc, alts[] } pour sitemap-products (FR uniquement)
  for (const fp of files) {
    const route = fileToRoute(fp);
    if (SKIP_ROUTE(route)) continue;
    const html = await fs.readFile(fp, "utf8");
    const fpUnix = fp.replace(/\\/g, "/");
    // Fiche produit : image + nom canoniques via JSON-LD (galerie rendue client).
    if (fpUnix.includes("/boutique/produit/")) {
      productUrls.push(...extractProductLdImages(html));
      // Page produit dans sitemap-products : 1 entrée par produit (côté FR, qui
      // porte la paire hreflang complète FR↔EN).
      if (fpUnix.includes("/fr/boutique/produit/")) {
        const { canonical, alts } = extractHreflang(html);
        if (canonical) productPages.push({ loc: canonical, alts });
      }
      continue;
    }
    const imgs = extractImages(html);
    if (!imgs.length) continue;
    byRoute.set(route, imgs);
  }

  const routes = [...byRoute.keys()].sort();
  let totalImgs = 0;
  const urls = routes
    .map((route) => {
      const imgs = byRoute.get(route);
      totalImgs += imgs.length;
      const images = imgs
        .map(
          (i) =>
            `    <image:image>\n      <image:loc>${SITE}${xmlEscape(i.imgPath)}</image:loc>` +
            (i.alt ? `\n      <image:caption>${xmlEscape(i.alt)}</image:caption>\n      <image:title>${xmlEscape(i.alt)}</image:title>` : "") +
            `\n    </image:image>`,
        )
        .join("\n");
      return `  <url>\n    <loc>${SITE}${route === "/" ? "/" : route}</loc>\n${images}\n  </url>`;
    })
    .join("\n");

  // Fiches produit (loc + images déjà absolues via JSON-LD, caption = nom produit).
  const productXml = productUrls
    .sort((a, b) => a.loc.localeCompare(b.loc))
    .map((p) => {
      totalImgs += p.images.length;
      const images = p.images
        .map(
          (img) =>
            `    <image:image>\n      <image:loc>${xmlEscape(img)}</image:loc>` +
            (p.name
              ? `\n      <image:caption>${xmlEscape(p.name)}</image:caption>\n      <image:title>${xmlEscape(p.name)}</image:title>`
              : "") +
            `\n    </image:image>`,
        )
        .join("\n");
      return `  <url>\n    <loc>${xmlEscape(p.loc)}</loc>\n${images}\n  </url>`;
    })
    .join("\n");

  const body = [urls, productXml].filter(Boolean).join("\n");

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n` +
    `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n` +
    `${body}\n</urlset>\n`;

  await fs.writeFile(OUT, xml, "utf8");

  // sitemap-products.xml : 1 <url> par fiche, hreflang FR/EN appariés (lus du HTML).
  const productPagesXml = productPages
    .sort((a, b) => a.loc.localeCompare(b.loc))
    .map((p) => {
      const links = p.alts
        .map(
          (a) =>
            `    <xhtml:link rel="alternate" hreflang="${xmlEscape(a.lang)}" href="${xmlEscape(a.href)}"/>`,
        )
        .join("\n");
      return `  <url>\n    <loc>${xmlEscape(p.loc)}</loc>${links ? `\n${links}` : ""}\n  </url>`;
    })
    .join("\n");
  const productsXml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n` +
    `        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
    `${productPagesXml}\n</urlset>\n`;
  await fs.writeFile(PRODUCTS_OUT, productsXml, "utf8");

  const extraSitemaps = ["sitemap-images.xml", "sitemap-products.xml"];

  // Référence les sitemaps additionnels dans robots.txt (si absents).
  try {
    let robots = await fs.readFile(ROBOTS, "utf8");
    let changed = false;
    for (const name of extraSitemaps) {
      if (!robots.includes(name)) {
        robots = robots.trimEnd() + `\nSitemap: ${SITE}/${name}\n`;
        changed = true;
      }
    }
    if (changed) await fs.writeFile(ROBOTS, robots, "utf8");
  } catch {
    // robots.txt absent : ignoré
  }

  // Référence les sitemaps additionnels dans l'index sitemap.xml (si absents) :
  // double découverte (index + robots). next-sitemap régénère l'index à chaque
  // build, d'où ré-injection systématique.
  try {
    let index = await fs.readFile(INDEX, "utf8");
    let changed = false;
    for (const name of extraSitemaps) {
      if (!index.includes(name)) {
        index = index.replace(
          "</sitemapindex>",
          `<sitemap><loc>${SITE}/${name}</loc></sitemap>\n</sitemapindex>`,
        );
        changed = true;
      }
    }
    if (changed) await fs.writeFile(INDEX, index, "utf8");
  } catch {
    // sitemap.xml absent : ignoré
  }

  console.log(
    `sitemap-images.xml : ${routes.length} pages éditoriales + ${productUrls.length} fiches produit, ${totalImgs} images`,
  );
  console.log(`sitemap-products.xml : ${productPages.length} fiches produit (hreflang FR/EN)`);
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
