import type { Metadata } from "next";
import type {
  ArticlePageData,
  ContentArticleSection,
} from "@/types/article-page";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";
import { SECTION_TYPES } from "@/constants/section-types";

export const metadata: Metadata = createPageMetadata({
  title: "Couleurs et finis",
  description:
    "Couleurs et finis pour cuisines, vanités et armoires sur mesure : choisir selon la lumière, l'usage et les matériaux.",
  path: "/materiaux/couleurs/",
  ogAlt: "Couleurs et finis - Matériaux sur mesure",
});

const faqItems = [
  {
    q: "Mat ou satiné?",
    a: "Le satiné est souvent un bon compromis entretien/rendu, surtout en cuisine.",
  },
  {
    q: "Les couleurs foncées sont-elles risquées?",
    a: "Pas avec une bonne lumière et un fini adapté.",
  },
  {
    q: "Peut-on changer la couleur plus tard?",
    a: "Parfois, selon le matériau et le fini choisi.",
  },
  {
    q: "Comment éviter un rendu daté?",
    a: "Base intemporelle et accents flexibles.",
  },
];

const sections: ContentArticleSection[] = [
  {
    id: "methode",
    title: "Méthode simple pour choisir",
    content: {
      type: SECTION_TYPES.LIST,
      intro:
        "Structurer les choix dès la phase design évite les erreurs de rendu.",
      links: [
        { title: "Voir le service de design", href: "/services/design/" },
      ],
      items: [
        "Lumière.",
        "Volume.",
        "Usage et entretien.",
        "Type de matériau et fini.",
      ],
    },
  },
  {
    id: "neutres",
    title: "Neutres",
    content: {
      type: SECTION_TYPES.LIST,
      items: ["Intemporels.", "Lumineux.", "Faciles à intégrer."],
    },
  },
  {
    id: "fonces",
    title: "Tons foncés",
    content: {
      type: SECTION_TYPES.LIST,
      items: [
        "Impact visuel fort.",
        "Demandent une bonne lumière.",
        "Souvent excellents en accent.",
      ],
    },
  },
  {
    id: "bois",
    title: "Bois et textures",
    content: {
      type: SECTION_TYPES.LIST,
      items: ["Apportent chaleur.", "Variations naturelles normales."],
    },
  },
  {
    id: "cuisine",
    title: "Choisir pour la cuisine",
    content: {
      type: SECTION_TYPES.LIST,
      items: [
        "Gérer les contrastes.",
        "Coordonner comptoir/dosseret/plancher.",
        "Prioriser entretien en zones humides.",
      ],
    },
  },
  {
    id: "cuisine-link",
    title: "",
    content: {
      type: SECTION_TYPES.RELATED_LINKS,
      items: [{ title: "Voir Cuisine sur mesure", href: "/espaces/cuisine/" }],
      columns: 2,
    },
  },
  {
    id: "sdb",
    title: "Choisir pour la salle de bain",
    content: {
      type: SECTION_TYPES.LIST,
      items: [
        "Humidité et nettoyage fréquent.",
        "Ventilation et exécution déterminantes.",
      ],
    },
  },
  {
    id: "sdb-link",
    title: "",
    content: {
      type: SECTION_TYPES.RELATED_LINKS,
      items: [
        {
          title: "Voir Salle de bain & vanités",
          href: "/espaces/salle-de-bain/",
        },
      ],
      columns: 2,
    },
  },
  {
    id: "materiau",
    title: "Couleur et matériau : impact",
    content: {
      type: SECTION_TYPES.LIST,
      links: [
        { title: "MDF", href: "/materiaux/mdf/" },
        { title: "Bois massif", href: "/materiaux/bois-massif/" },
        { title: "Mélamine", href: "/materiaux/melamine/" },
      ],
      items: [
        "MDF : homogène pour peinture.",
        "Bois : texture naturelle.",
        "Mélamine : large variété de décors.",
      ],
    },
  },
  {
    id: "finitions",
    title: "Finitions et entretien",
    content: {
      type: SECTION_TYPES.LIST,
      links: [
        { title: "Voir la quincaillerie", href: "/materiaux/quincaillerie/" },
        { title: "Voir l'installation", href: "/services/installation/" },
      ],
      items: [
        "Mat : très esthétique mais parfois plus exigeant.",
        "Satiné : compromis solide.",
        "Brillant : lumineux mais marque davantage.",
      ],
    },
  },
  {
    id: "erreurs",
    title: "Erreurs fréquentes",
    content: {
      type: SECTION_TYPES.LIST,
      items: [
        "Choisir sans considérer la lumière réelle.",
        "Multiplier les textures sans logique.",
        "Copier une inspiration sans adapter au contexte.",
      ],
    },
  },
  {
    id: "projets",
    title: "Voir des exemples",
    content: {
      type: SECTION_TYPES.RELATED_LINKS,
      items: [{ title: "Voir nos projets", href: "/projets/" }],
      columns: 2,
    },
  },
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
      {
        text: "Demander une soumission",
        href: "/contact/",
        variant: "outline",
      },
    ],
  },
  sections: sections,
  faq: {
    ariaLabelledby: "faq",
    heading: "FAQ - couleurs et finis",
    items: faqItems,
  },
};

