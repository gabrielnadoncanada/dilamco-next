import type { Metadata } from "next";
import type { ArticlePageData } from "@/components/templates/ArticlePageTemplate";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";

export const metadata: Metadata = createPageMetadata({
  title: "Couleurs et finis",
  description:
    "Couleurs et finis pour cuisines, vanités et armoires sur mesure : choisir selon la lumière, l'usage et les matériaux.",
  path: "/materiaux/couleurs/",
  ogAlt: "Couleurs et finis - Matériaux sur mesure",
});

const faqItems = [
  { q: "Mat ou satiné?", a: "Le satiné est souvent un bon compromis entretien/rendu, surtout en cuisine." },
  { q: "Les couleurs foncées sont-elles risquées?", a: "Pas avec une bonne lumière et un fini adapté." },
  { q: "Peut-on changer la couleur plus tard?", a: "Parfois, selon le matériau et le fini choisi." },
  { q: "Comment éviter un rendu daté?", a: "Base intemporelle et accents flexibles." },
];

export const pageData: ArticlePageData = {
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux/" },
    { name: "Couleurs et finis", url: SITE.url + "/materiaux/couleurs/" },
  ],
  hero: {
    heading: "Couleurs et finis : style + durabilité",
    description:
      "La couleur influence la lumière, la perception de l'espace et l'entretien. Le bon choix dépend du matériau, de l'usage et du contexte réel.",
    actions: [
      { text: "Parler design et finis", href: "/services/design/" },
      { text: "Demander une soumission", href: "/contact/", variant: "outline" },
    ],
  },
  sections: [
    {
      type: "list",
      ariaLabelledby: "methode",
      heading: "Méthode simple pour choisir",
      intro: "Structurer les choix dès la phase design évite les erreurs de rendu.",
      links: [{ text: "Voir le service de design", href: "/services/design/", variant: "outline" }],
      items: ["Lumière.", "Volume.", "Usage et entretien.", "Type de matériau et fini."],
      variant: "bullets",
    },
    { type: "list", ariaLabelledby: "neutres", heading: "Neutres", items: ["Intemporels.", "Lumineux.", "Faciles à intégrer."], variant: "bullets" },
    { type: "list", ariaLabelledby: "fonces", heading: "Tons foncés", items: ["Impact visuel fort.", "Demandent une bonne lumière.", "Souvent excellents en accent."], variant: "bullets" },
    { type: "list", ariaLabelledby: "bois", heading: "Bois et textures", items: ["Apportent chaleur.", "Variations naturelles normales."], variant: "bullets" },
    { type: "list", ariaLabelledby: "cuisine", heading: "Choisir pour la cuisine", items: ["Gérer les contrastes.", "Coordonner comptoir/dosseret/plancher.", "Prioriser entretien en zones humides."], variant: "bullets" },
    { type: "relatedLinks", ariaLabelledby: "cuisine-link", heading: "", links: [{ label: "Voir Cuisine sur mesure", href: "/espaces/cuisine/" }], columns: 2 },
    { type: "list", ariaLabelledby: "sdb", heading: "Choisir pour la salle de bain", items: ["Humidité et nettoyage fréquent.", "Ventilation et exécution déterminantes."], variant: "bullets" },
    { type: "relatedLinks", ariaLabelledby: "sdb-link", heading: "", links: [{ label: "Voir Salle de bain & vanités", href: "/espaces/salle-de-bain/" }], columns: 2 },
    {
      type: "list",
      ariaLabelledby: "materiau",
      heading: "Couleur et matériau : impact",
      links: [
        { text: "MDF", href: "/materiaux/mdf/", variant: "outline" },
        { text: "Bois massif", href: "/materiaux/bois-massif/", variant: "outline" },
        { text: "Mélamine", href: "/materiaux/melamine/", variant: "outline" },
      ],
      items: ["MDF : homogène pour peinture.", "Bois : texture naturelle.", "Mélamine : large variété de décors."],
      variant: "bullets",
    },
    {
      type: "list",
      ariaLabelledby: "finitions",
      heading: "Finitions et entretien",
      links: [
        { text: "Voir la quincaillerie", href: "/materiaux/quincaillerie/", variant: "outline" },
        { text: "Voir l'installation", href: "/services/installation/", variant: "outline" },
      ],
      items: ["Mat : très esthétique mais parfois plus exigeant.", "Satiné : compromis solide.", "Brillant : lumineux mais marque davantage."],
      variant: "bullets",
    },
    { type: "list", ariaLabelledby: "erreurs", heading: "Erreurs fréquentes", items: ["Choisir sans considérer la lumière réelle.", "Multiplier les textures sans logique.", "Copier une inspiration sans adapter au contexte."], variant: "bullets" },
    { type: "relatedLinks", ariaLabelledby: "projets", heading: "Voir des exemples", links: [{ label: "Voir nos projets", href: "/projets/" }], columns: 2 },
  ],
  faq: { ariaLabelledby: "faq", heading: "FAQ - couleurs et finis", items: faqItems },
};
