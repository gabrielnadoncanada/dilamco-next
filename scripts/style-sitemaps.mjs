// Injecte la feuille de style XSLT (/sitemap.xsl) dans chaque sitemap*.xml de
// public/ pour les rendre lisibles dans le navigateur. Le XML reste valide pour
// les moteurs de recherche (la PI xml-stylesheet est ignorée par les crawlers).
// À lancer en postbuild, APRÈS next-sitemap et le sitemap d'images.
import fs from "node:fs/promises";
import path from "node:path";

const PUBLIC = path.join(process.cwd(), "public");
const PI = '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>';

async function main() {
  const files = (await fs.readdir(PUBLIC)).filter(
    (f) => /^sitemap.*\.xml$/i.test(f),
  );
  let touched = 0;
  for (const file of files) {
    const fp = path.join(PUBLIC, file);
    let xml = await fs.readFile(fp, "utf8");
    if (xml.includes("xml-stylesheet")) continue; // déjà stylé
    // Insère la PI juste après la déclaration <?xml ... ?>.
    if (/^<\?xml[^>]*\?>/.test(xml)) {
      xml = xml.replace(/(^<\?xml[^>]*\?>)\s*/, `$1\n${PI}\n`);
    } else {
      xml = `${PI}\n${xml}`;
    }
    await fs.writeFile(fp, xml, "utf8");
    touched += 1;
  }
  console.log(`style-sitemaps : ${touched} fichier(s) stylé(s)`);
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
