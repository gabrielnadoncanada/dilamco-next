// Soumet les URL du sitemap à IndexNow (Bing, Yandex, Seznam… ; Bing alimente
// ChatGPT Search et Copilot). Lancé par .github/workflows/indexnow.yml après
// chaque déploiement de production, ou à la main :
//
//   node scripts/indexnow-submit.mjs           URL modifiées depuis 3 jours
//   node scripts/indexnow-submit.mjs --all     toutes les URL du sitemap
//   node scripts/indexnow-submit.mjs --dry-run affiche sans envoyer
//
// La clé est publiée à https://dilamco.com/<clé>.txt (public/).

const SITE = "https://dilamco.com";
const KEY = "bee60e25da268d41e25219a7f7392630";
const RECENT_DAYS = 3;

const args = new Set(process.argv.slice(2));
const all = args.has("--all");
const dryRun = args.has("--dry-run");

async function fetchText(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} → HTTP ${res.status}`);
  return res.text();
}

// Pages du sitemap avec leur lastmod (l'index renvoie vers sitemap-0.xml ;
// sitemap-images.xml ne liste que des pages déjà présentes, on l'ignore).
async function sitemapEntries() {
  const index = await fetchText(`${SITE}/sitemap.xml`);
  const children = [...index.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => m[1])
    .filter((loc) => !loc.includes("sitemap-images"));
  const entries = [];
  for (const child of children) {
    const xml = await fetchText(child);
    for (const [, block] of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
      const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1];
      const lastmod = block.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1];
      if (loc) entries.push({ loc, lastmod });
    }
  }
  return entries;
}

const entries = await sitemapEntries();
const since = Date.now() - RECENT_DAYS * 24 * 60 * 60 * 1000;
const urls = entries
  .filter((e) => all || (e.lastmod && Date.parse(e.lastmod) >= since))
  .map((e) => e.loc);

console.log(`${entries.length} URL dans le sitemap, ${urls.length} à soumettre${all ? " (--all)" : ` (modifiées depuis ${RECENT_DAYS} j)`}.`);
if (urls.length === 0 || dryRun) {
  for (const url of urls) console.log(`  ${url}`);
  process.exit(0);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: new URL(SITE).host,
    key: KEY,
    keyLocation: `${SITE}/${KEY}.txt`,
    urlList: urls,
  }),
});

// 200 = reçu, 202 = reçu (clé en cours de validation). Le reste = échec.
console.log(`IndexNow → HTTP ${res.status}`);
if (res.status !== 200 && res.status !== 202) {
  console.error(await res.text());
  process.exit(1);
}
