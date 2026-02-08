import type { Metadata } from "next";
import type { ArticlePageData } from "@/components/templates/ArticlePageTemplate";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";

export const metadata: Metadata = createPageMetadata({
  title: "Mélamine",
  description:
    "Mélamine : avantages, limites et usages recommandés pour armoires et projets sur mesure. Comprendre quand elle est pertinente et ses précautions.",
  path: "/materiaux/melamine/",
  ogAlt: "Mélamine - Matériaux sur mesure",
});

const faqItems = [
  { q: "La mélamine est-elle bas de gamme?", a: "Pas forcément. Elle peut être pertinente selon le projet et l'usage." },
  { q: "La mélamine gonfle-t-elle?", a: "Elle peut se dégrader si l'humidité s'infiltre, surtout via les chants." },
  { q: "Mélamine ou MDF?", a: "Le MDF est souvent choisi pour peinture uniforme, la mélamine pour les finis décoratifs et un coût plus maîtrisé." },
  { q: "Est-ce recommandé en salle de bain?", a: "Selon le contexte. La ventilation et la qualité d'exécution sont critiques." },
];

export const pageData: ArticlePageData = {
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux/" },
    { name: "Mélamine", url: SITE.url + "/materiaux/melamine/" },
  ],
  hero: {
    heading: "Mélamine - usages, limites et alternatives",
    description:
      "La mélamine est populaire pour sa variété de finis et un coût souvent plus maîtrisé. Sa durabilité dépend surtout des chants, de l'usage et de l'installation.",
    actions: [
      { text: "Demander une soumission", href: "/contact/" },
      { text: "Voir le comparatif des matériaux", href: "/materiaux/comparatif/", variant: "outline" },
    ],
  },
  sections: [
    { type: "text", ariaLabelledby: "definition", heading: "C'est quoi la mélamine?", paragraphs: ["La mélamine est un panneau recouvert d'un revêtement décoratif. Le rendu dépend de la qualité des chants et de l'exécution."] },
    { type: "list", ariaLabelledby: "avantages", heading: "Avantages", items: ["Grande variété de finis.", "Entretien simple.", "Coût maîtrisé dans plusieurs projets."], variant: "bullets" },
    { type: "list", ariaLabelledby: "limites", heading: "Limites", items: ["Chants sensibles aux impacts.", "Humidité critique si infiltration.", "Réparations plus difficiles à invisibiliser."], variant: "bullets" },
    { type: "list", ariaLabelledby: "cuisine", heading: "Mélamine en cuisine", items: ["Pertinente sur certaines composantes.", "Zones d'eau à traiter avec attention."], variant: "bullets" },
    { type: "relatedLinks", ariaLabelledby: "cuisine-link", heading: "", links: [{ label: "Voir Cuisine sur mesure", href: "/espaces/cuisine/" }], columns: 2 },
    { type: "list", ariaLabelledby: "sdb", heading: "Mélamine en salle de bain", items: ["Contexte plus exigeant à cause de l'humidité.", "Combinaisons de matériaux souvent plus sûres."], variant: "bullets" },
    { type: "relatedLinks", ariaLabelledby: "sdb-link", heading: "", links: [{ label: "Voir Salle de bain & vanités", href: "/espaces/salle-de-bain/" }], columns: 2 },
    {
      type: "text",
      ariaLabelledby: "comparaisons",
      heading: "Mélamine vs MDF vs contreplaqué",
      paragraphs: ["Chaque matériau répond à une logique différente : coût/décor, finition peinte, ou stabilité structurelle."],
      links: [
        { text: "Comparatif complet", href: "/materiaux/comparatif/", variant: "outline" },
        { text: "MDF", href: "/materiaux/mdf/", variant: "outline" },
        { text: "Pourquoi le contreplaqué", href: "/materiaux/contreplaque/", variant: "outline" },
      ],
    },
    {
      type: "text",
      ariaLabelledby: "approche",
      heading: "Comment nous l'utilisons",
      paragraphs: ["Nous utilisons la mélamine de façon ciblée lorsque c'est pertinent, et proposons des alternatives quand l'usage exige plus de robustesse."],
      links: [
        { text: "Voir tous les matériaux", href: "/materiaux/", variant: "outline" },
        { text: "Voir l'installation", href: "/services/installation/", variant: "outline" },
      ],
    },
  ],
  faq: { ariaLabelledby: "faq", heading: "FAQ - mélamine", items: faqItems },
};
