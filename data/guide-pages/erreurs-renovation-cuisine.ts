import type { Metadata } from "next";
import type { ArticlePageData } from "@/types/article-page";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";
import { SECTION_TYPES } from "@/constants/section-types";
export const metadata: Metadata = createPageMetadata({
  title: "Erreurs fréquentes en rénovation de cuisine",
  description:
    "Guide : erreurs fréquentes en rénovation de cuisine (matériaux, ergonomie, coordination, installation, échéancier) et comment les éviter avant de commencer le chantier.",
  path: "/guides/erreurs-renovation-cuisine/",
  ogAlt: "Guide : Erreurs fréquentes en rénovation de cuisine",
});
const faqItems = [
  {
    q: "Quelle est l'erreur la plus coûteuse?",
    a: "Les changements tardifs. Une modification en cours de chantier peut forcer des reprises (plomberie, électricité, murs, comptoir) et créer des délais.",
  },
  {
    q: "Faut-il tout décider avant de démarrer?",
    a: "Les décisions structurantes oui : plan, contraintes techniques, électroménagers, matériaux et séquence des travaux. Plus vous décidez en amont, moins vous payez en stress et en reprises.",
  },
  {
    q: "Clé en main ou coordination personnelle?",
    a: "Si plusieurs corps de métier sont impliqués et que vous voulez réduire les imprévus, une approche clé en main peut être plus simple. Sinon, vous devrez gérer la coordination et les zones grises.",
  },
  {
    q: "Pourquoi l'installation est-elle aussi importante?",
    a: 'Parce qu\'elle conditionne les alignements, les ajustements et la finition. C\'est souvent ce qui fait la différence entre "correct" et "haut de gamme".',
  },
];
export const pageData: ArticlePageData = {
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Guides", url: SITE.url + "/guides/" },
    {
      name: "Erreurs fréquentes en rénovation de cuisine",
      url: SITE.url + "/guides/erreurs-renovation-cuisine/",
    },
  ],
  hero: {
    heading:
      "Les erreurs fréquentes en rénovation de cuisine (et comment les éviter)",
    description:
      "Une rénovation de cuisine combine plusieurs décisions et plusieurs intervenants : plan, matériaux, plomberie, électricité, installation, finitions. Beaucoup d'erreurs sont coûteuses non seulement en argent, mais aussi en délais et en stress. Ce guide vous aide à repérer les pièges les plus courants et à les éviter avant le chantier.",
    actions: [
      {
        text: "Parler de votre projet",
        href: "/contact/",
      },
      {
        text: "Voir la rénovation de cuisine",
        href: "/services/renovation/cuisine/",
        variant: "outline",
      },
    ],
  },
  sections: [
    {
      id: "planification-details",
      title: "1) Sous-estimer la planification",
      intro:
        "La cause la plus fréquente des dépassements et des délais : des décisions prises 'pendant' le chantier. Une modification tardive peut déclencher des effets en chaîne (plomberie, électricité, gypse, comptoir, installation).",
      content: {
        type: SECTION_TYPES.LIST,
        items: [
          "Plan incomplet ou non validé avant de démarrer.",
          "Choix de finis tardifs (portes, poignées, robinetterie, éclairage).",
          "Électroménagers non confirmés (dimensions, sorties, dégagements).",
        ],
        variant: "bullets",
      },
    },
    {
      id: "planification-links",
      title: "",
      content: {
        type: SECTION_TYPES.TEXT,
        paragraphs: [
          "Solution : cadrer le plan et les choix en amont via le service de design.",
        ],
        links: [
          {
            text: "Service de design",
            href: "/services/design/",
            variant: "outline",
          },
        ],
      },
    },

    {
      id: "materiaux-details",
      title: "2) Choisir les matériaux pour le look seulement",
      intro:
        "Solution : choisir les matériaux selon l'usage (humidité, impacts, entretien) et le rendu recherché. Le \"bon\" choix dépend aussi des chants, de la quincaillerie et de l'installation.",
      content: {
        type: SECTION_TYPES.LIST,
        items: [
          "Ignorer l'humidité près de l'évier et du lave-vaisselle.",
          "Choisir un matériau fragile sur des zones très sollicitées.",
          "Sous-estimer l'impact des chants et de la finition.",
        ],
        variant: "bullets",
        links: [
          {
            text: "Voir le comparatif des matériaux",
            href: "/materiaux/comparatif/",
            variant: "outline",
          },
          {
            text: "MDF",
            href: "/materiaux/mdf/",
            variant: "outline",
          },
          {
            text: "Mélamine",
            href: "/materiaux/melamine/",
            variant: "outline",
          },
          {
            text: "Contreplaqué",
            href: "/materiaux/contreplaque/",
            variant: "outline",
          },
        ],
      },
    },

    {
      id: "ergonomie-details",
      title: "3) Négliger l'ergonomie et la circulation",
      intro:
        "Une cuisine peut être superbe et pourtant inconfortable : îlot trop grand, dégagements trop serrés, portes qui se frappent, zones de travail mal placées.",
      content: {
        type: SECTION_TYPES.LIST,
        items: [
          'Îlot dimensionné "pour la photo", pas pour la circulation.',
          "Ouvrir un tiroir bloque un passage ou un électroménager.",
          "Rangement non adapté aux habitudes (vaisselle, casseroles, déchets).",
        ],
        links: [
          {
            text: "Cuisine sur mesure",
            href: "/espaces/cuisine/",
            variant: "outline",
          },
        ],
        variant: "bullets",
      },
    },
    {
      id: "technique-details",
      title: "4) Sous-estimer plomberie / électricité / ventilation",
      intro:
        "Les contraintes techniques sont souvent la source des surprises : sorties électriques mal placées, plomberie à déplacer, ventilation insuffisante, éclairage à revoir.",
      content: {
        type: SECTION_TYPES.LIST,
        items: [
          "Prises et circuits non adaptés aux électroménagers.",
          "Plomberie non alignée avec le plan (évier, lave-vaisselle).",
          "Hotte et ventilation sous-estimées (bruit, efficacité, conduits).",
        ],
        variant: "bullets",
      },
    },
    {
      id: "technique-links",
      title: "",
      content: {
        type: SECTION_TYPES.TEXT,
        paragraphs: [
          "Dans un projet plus large, une approche clé en main peut réduire les imprévus :",
        ],
        links: [
          {
            text: "Rénovation de cuisine",
            href: "/services/renovation/cuisine/",
            variant: "outline",
          },
        ],
      },
    },
    {
      id: "coordination",
      title: "5) Manque de coordination et responsabilités floues",
      content: {
        type: SECTION_TYPES.TEXT,
        paragraphs: [
          "Quand plusieurs intervenants sont impliqués, les problèmes viennent souvent des zones grises : qui coordonne, qui valide, qui est responsable si quelque chose ne fit pas?",
        ],
      },
    },
    {
      id: "coordination-details",
      title: "",
      content: {
        type: SECTION_TYPES.LIST,
        items: [
          "Calendrier qui glisse parce que les étapes ne sont pas séquencées.",
          "Reprises (gypse, peinture, plancher) à cause d'un changement de dernière minute.",
          "Responsabilités fragmentées : chacun fait sa partie, personne ne porte le résultat final.",
        ],
        variant: "bullets",
      },
    },
    {
      id: "coordination-links",
      title: "",
      content: {
        type: SECTION_TYPES.TEXT,
        paragraphs: [],
        links: [
          {
            text: "Cuisiniste vs entrepreneur général",
            href: "/comparatifs/cuisiniste-vs-entrepreneur-general/",
            variant: "outline",
          },
        ],
      },
    },
    {
      id: "installation",
      title: "6) Sous-estimer l'installation (et les ajustements)",
      content: {
        type: SECTION_TYPES.TEXT,
        paragraphs: [
          "Même une excellente fabrication peut donner un résultat moyen si l'installation est approximative : alignements, niveaux, ajustements, finitions et inspection finale.",
        ],
      },
    },
    {
      id: "installation-details",
      title: "",
      content: {
        type: SECTION_TYPES.LIST,
        items: [
          "Portes et tiroirs désalignés, jeux irréguliers.",
          "Finitions bâclées autour des murs et des caissons.",
          "Peu ou pas d'ajustements après la pose.",
        ],
        variant: "bullets",
      },
    },
    {
      id: "installation-links",
      title: "",
      content: {
        type: SECTION_TYPES.TEXT,
        paragraphs: [],
        links: [
          {
            text: "Voir l'installation",
            href: "/services/installation/",
            variant: "outline",
          },
        ],
      },
    },
    {
      id: "quincaillerie",
      title: "7) Choisir une quincaillerie inadéquate",
      content: {
        type: SECTION_TYPES.TEXT,
        paragraphs: [
          "La quincaillerie influence le confort et la longévité : charnières qui gardent leurs réglages, coulisses stables en charge, fermeture contrôlée.",
        ],
      },
    },
    {
      id: "quincaillerie-details",
      title: "",
      content: {
        type: SECTION_TYPES.LIST,
        items: [
          'Tiroirs qui frottent, prennent du jeu, ou "accrochent".',
          "Portes qui se désalignent, réglages instables.",
          "Usure prématurée sur les zones les plus utilisées.",
        ],
        variant: "bullets",
      },
    },
    {
      id: "quincaillerie-links",
      title: "",
      content: {
        type: SECTION_TYPES.TEXT,
        paragraphs: [],
        links: [
          {
            text: "Voir la quincaillerie",
            href: "/materiaux/quincaillerie/",
            variant: "outline",
          },
        ],
      },
    },
    {
      id: "echeancier",
      title: "8) Échéancier irréaliste",
      content: {
        type: SECTION_TYPES.TEXT,
        paragraphs: [
          "Les délais s'allongent quand les dépendances entre étapes ne sont pas respectées (démolition, plomberie/électricité, murs, plancher, peinture, comptoir, installation, finitions). Prévoir une marge réduit le stress et les décisions précipitées.",
        ],
      },
    },
    {
      id: "echeancier-details",
      title: "",
      content: {
        type: SECTION_TYPES.LIST,
        items: [
          "Planifier l'ordre des étapes (et les temps de séchage).",
          "Confirmer la disponibilité des matériaux et des intervenants.",
          "Éviter les changements tardifs qui cassent le calendrier.",
        ],
        variant: "bullets",
      },
    },
    {
      id: "prix",
      title: "9) Comparer uniquement sur le prix",
      content: {
        type: SECTION_TYPES.TEXT,
        paragraphs: [
          "Deux soumissions peuvent être incomparables : l'une inclut coordination, ajustements et finition; l'autre non. Les \"coûts cachés\" (reprises, délais, gestion) apparaissent souvent après coup.",
        ],
      },
    },
    {
      id: "prix-details",
      title: "",
      content: {
        type: SECTION_TYPES.LIST,
        items: [
          "Comparer la portée : qui fait quoi, et jusqu'où?",
          "Comparer l'installation : ajustements inclus? inspection finale?",
          "Comparer la coordination : responsabilités claires?",
        ],
        variant: "bullets",
      },
    },
    {
      id: "prix-links",
      title: "",
      content: {
        type: SECTION_TYPES.TEXT,
        paragraphs: [],
        links: [
          {
            text: "Cuisiniste vs entrepreneur général",
            href: "/comparatifs/cuisiniste-vs-entrepreneur-general/",
            variant: "outline",
          },
        ],
      },
    },
    {
      id: "checklist",
      title: "10) Checklist avant de démarrer",
      intro: "Avant de lancer le chantier, assurez-vous d'avoir :",
      content: {
        type: SECTION_TYPES.TEXT,
      },
    },
    {
      id: "checklist-details",
      title: "",
      content: {
        type: SECTION_TYPES.LIST,
        items: [
          "Un plan validé (dimensions, électroménagers, dégagements).",
          "Les matériaux choisis selon l'usage (humidité, entretien, durabilité).",
          "Des responsabilités claires (coordination, décisions, validation).",
          "Un échéancier réaliste et séquencé.",
          "Une installation prévue (ajustements et inspection finale inclus).",
        ],
        variant: "bullets",
      },
    },
  ],
  faq: {
    ariaLabelledby: "faq",
    heading: "FAQ - erreurs en rénovation de cuisine",
    items: faqItems,
  },
  footerSections: [
    {
      id: "liens",
      title: "Liens utiles",
      content: {
        type: SECTION_TYPES.RELATED_LINKS,
        items: [
          { title: "Comparatif des matériaux", href: "/materiaux/comparatif/" },
          { title: "Installation", href: "/services/installation/" },
          {
            title: "Rénovation de cuisine",
            href: "/services/renovation/cuisine/",
          },
          { title: "Cuisine sur mesure", href: "/espaces/cuisine/" },
          { title: "Demander une soumission", href: "/contact/" },
        ],
        columns: 2,
      },
    },
  ],
};
