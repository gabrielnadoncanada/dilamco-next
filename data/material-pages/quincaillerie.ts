import type { Metadata } from "next";
import type { ArticlePageData } from "@/components/templates/ArticlePageTemplate";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";

export const metadata: Metadata = createPageMetadata({
  title: "Quincaillerie",
  description:
    "Quincaillerie d'armoires : charnières, coulisses et mécanismes. Comprendre l'impact sur le confort, les réglages et la durabilité.",
  path: "/materiaux/quincaillerie/",
  ogAlt: "Quincaillerie - Matériaux sur mesure",
});

const faqItems = [
  { q: "Le soft-close est-il utile?", a: "Oui, si le système est fiable et bien installé : confort, moins de chocs et meilleure longévité." },
  { q: "La quincaillerie influence-t-elle la durée de vie?", a: "Oui. Ce sont les pièces qui bougent et s'usent." },
  { q: "Peut-on remplacer plus tard?", a: "Parfois, mais c'est préférable de choisir correctement dès le départ." },
  { q: "Pourquoi l'installation compte autant?", a: "Parce que l'alignement et les ajustements déterminent le fonctionnement réel." },
];

export const pageData: ArticlePageData = {
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux/" },
    { name: "Quincaillerie", url: SITE.url + "/materiaux/quincaillerie/" },
  ],
  hero: {
    heading: "Quincaillerie, confort, précision et durabilité",
    description:
      "Charnières, coulisses et mécanismes sont souvent le facteur principal de l'expérience quotidienne. Une bonne quincaillerie bien installée améliore fortement la longévité et le ressenti haut de gamme.",
    actions: [
      { text: "Demander une soumission", href: "/contact/" },
      { text: "Voir tous les matériaux", href: "/materiaux/", variant: "outline" },
    ],
  },
  sections: [
    { type: "list", ariaLabelledby: "pourquoi", heading: "Pourquoi c'est critique", items: ["Usage intensif sur des milliers de cycles.", "Réglages et alignements durables.", "Perception de qualité quotidienne."], variant: "bullets" },
    { type: "list", ariaLabelledby: "charnieres", heading: "Charnières", items: ["Ajustabilité fine.", "Soft-close pour confort et protection."], variant: "bullets" },
    { type: "list", ariaLabelledby: "coulisses", heading: "Coulisses de tiroirs", items: ["Extension utile.", "Capacité de charge.", "Stabilité en usage."], variant: "bullets" },
    { type: "list", ariaLabelledby: "mecanismes", heading: "Mécanismes et accessoires", items: ["Solutions d'angle.", "Rangements spécialisés."], variant: "bullets" },
    { type: "list", ariaLabelledby: "qualite", heading: "Ce qu'une bonne quincaillerie change", items: ["Confort.", "Durabilité.", "Moins d'entretien."], variant: "bullets" },
    { type: "list", ariaLabelledby: "risques", heading: "Risques d'une quincaillerie faible", items: ["Désalignements.", "Jeu et frottements.", "Usure prématurée."], variant: "bullets" },
    { type: "list", ariaLabelledby: "cuisine", heading: "Cuisine", items: ["Cycles élevés.", "Charges importantes.", "Coulisses stables essentielles."], variant: "bullets" },
    { type: "relatedLinks", ariaLabelledby: "cuisine-link", heading: "", links: [{ label: "Voir Cuisine sur mesure", href: "/espaces/cuisine/" }], columns: 2 },
    { type: "list", ariaLabelledby: "sdb", heading: "Salle de bain", items: ["Humidité plus exigeante.", "Exécution et réglages précis."], variant: "bullets" },
    { type: "relatedLinks", ariaLabelledby: "sdb-link", heading: "", links: [{ label: "Voir Salle de bain & vanités", href: "/espaces/salle-de-bain/" }], columns: 2 },
    {
      type: "text",
      ariaLabelledby: "systeme",
      heading: "Matériaux + quincaillerie = système",
      paragraphs: ["Le résultat final dépend de l'ensemble : structure, chants, quincaillerie, installation."],
      links: [
        { text: "Pourquoi le contreplaqué", href: "/materiaux/contreplaque/", variant: "outline" },
        { text: "MDF", href: "/materiaux/mdf/", variant: "outline" },
        { text: "Mélamine", href: "/materiaux/melamine/", variant: "outline" },
      ],
    },
    {
      type: "list",
      ariaLabelledby: "choix",
      heading: "Comment nous la choisissons",
      items: ["Usage et charges.", "Contexte d'humidité.", "Stabilité des réglages.", "Qualité d'installation."],
      links: [
        { text: "Voir l'installation", href: "/services/installation/", variant: "outline" },
        { text: "Voir le design", href: "/services/design/", variant: "outline" },
      ],
      variant: "bullets",
    },
  ],
  faq: { ariaLabelledby: "faq", heading: "FAQ - quincaillerie", items: faqItems },
};
