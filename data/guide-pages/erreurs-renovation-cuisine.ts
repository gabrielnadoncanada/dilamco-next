import type { Metadata } from "next";
import type { ArticlePageData } from "@/components/templates/ArticlePageTemplate";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";

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
    a: "Parce qu'elle conditionne les alignements, les ajustements et la finition. C'est souvent ce qui fait la différence entre \"correct\" et \"haut de gamme\".",
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
    heading: "Les erreurs fréquentes en rénovation de cuisine (et comment les éviter)",
    description:
      "Une rénovation de cuisine combine plusieurs décisions et plusieurs intervenants : plan, matériaux, plomberie, électricité, installation, finitions. Beaucoup d'erreurs coûtent cher non seulement en argent, mais aussi en délais et en stress. Ce guide vous aide à repérer les pièges les plus courants et à les éviter avant le chantier.",
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
      type: "text",
      ariaLabelledby: "planification",
      heading: "1) Sous-estimer la planification",
      paragraphs: [
        "La cause la plus fréquente des dépassements et des délais : des décisions prises \"pendant\" le chantier. Une modification tardive peut déclencher des effets en chaîne (plomberie, électricité, gypse, comptoir, installation).",
      ],
    },
    {
      type: "list",
      ariaLabelledby: "planification-details",
      heading: "",
      items: [
        "Plan incomplet ou non validé avant de démarrer.",
        "Choix de finis tardifs (portes, poignées, robinetterie, éclairage).",
        "Électroménagers non confirmés (dimensions, sorties, dégagements).",
      ],
      variant: "bullets",
    },
    {
      type: "text",
      ariaLabelledby: "planification-links",
      heading: "",
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
    {
      type: "text",
      ariaLabelledby: "materiaux",
      heading: "2) Choisir les matériaux pour le look seulement",
      paragraphs: [
        "Un matériau peut être beau et pourtant mal adapté à l'usage (humidité, impacts, entretien). Le point critique est souvent la protection des chants et la cohérence du système (matériau + quincaillerie + installation).",
      ],
    },
    {
      type: "list",
      ariaLabelledby: "materiaux-details",
      heading: "",
      items: [
        "Ignorer l'humidité près de l'évier et du lave-vaisselle.",
        "Choisir un matériau fragile sur des zones très sollicitées.",
        "Sous-estimer l'impact des chants et de la finition.",
      ],
      variant: "bullets",
    },
    {
      type: "text",
      ariaLabelledby: "materiaux-links",
      heading: "",
      paragraphs: [],
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
    {
      type: "text",
      ariaLabelledby: "ergonomie",
      heading: "3) Négliger l'ergonomie et la circulation",
      paragraphs: [
        "Une cuisine peut être superbe et pourtant inconfortable : îlot trop grand, dégagements trop serrés, portes qui se frappent, zones de travail mal placées.",
      ],
    },
    {
      type: "list",
      ariaLabelledby: "ergonomie-details",
      heading: "",
      items: [
        "Îlot dimensionné \"pour la photo\", pas pour la circulation.",
        "Ouvrir un tiroir bloque un passage ou un électroménager.",
        "Rangement non adapté aux habitudes (vaisselle, casseroles, déchets).",
      ],
      variant: "bullets",
    },
    {
      type: "text",
      ariaLabelledby: "ergonomie-links",
      heading: "",
      paragraphs: [],
      links: [
        {
          text: "Cuisine sur mesure",
          href: "/espaces/cuisine/",
          variant: "outline",
        },
      ],
    },
    {
      type: "text",
      ariaLabelledby: "technique",
      heading: "4) Sous-estimer plomberie / électricité / ventilation",
      paragraphs: [
        "Les contraintes techniques sont souvent la source des surprises : sorties électriques mal placées, plomberie à déplacer, ventilation insuffisante, éclairage à revoir.",
      ],
    },
    {
      type: "list",
      ariaLabelledby: "technique-details",
      heading: "",
      items: [
        "Prises et circuits non adaptés aux électroménagers.",
        "Plomberie non alignée avec le plan (évier, lave-vaisselle).",
        "Hotte et ventilation sous-estimées (bruit, efficacité, conduits).",
      ],
      variant: "bullets",
    },
    {
      type: "text",
      ariaLabelledby: "technique-links",
      heading: "",
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
    {
      type: "text",
      ariaLabelledby: "coordination",
      heading: "5) Manque de coordination et responsabilités floues",
      paragraphs: [
        "Quand plusieurs intervenants sont impliqués, les problèmes viennent souvent des zones grises : qui coordonne, qui valide, qui est responsable si quelque chose ne fit pas?",
      ],
    },
    {
      type: "list",
      ariaLabelledby: "coordination-details",
      heading: "",
      items: [
        "Calendrier qui glisse parce que les étapes ne sont pas séquencées.",
        "Reprises (gypse, peinture, plancher) à cause d'un changement de dernière minute.",
        "Responsabilités fragmentées : chacun fait sa partie, personne ne porte le résultat final.",
      ],
      variant: "bullets",
    },
    {
      type: "text",
      ariaLabelledby: "coordination-links",
      heading: "",
      paragraphs: [],
      links: [
        {
          text: "Cuisiniste vs entrepreneur général",
          href: "/comparatifs/cuisiniste-vs-entrepreneur-general/",
          variant: "outline",
        },
      ],
    },
    {
      type: "text",
      ariaLabelledby: "installation",
      heading: "6) Sous-estimer l'installation (et les ajustements)",
      paragraphs: [
        "Même une excellente fabrication peut donner un résultat moyen si l'installation est approximative : alignements, niveaux, ajustements, finitions et inspection finale.",
      ],
    },
    {
      type: "list",
      ariaLabelledby: "installation-details",
      heading: "",
      items: [
        "Portes et tiroirs désalignés, jeux irréguliers.",
        "Finitions bâclées autour des murs et des caissons.",
        "Peu ou pas d'ajustements après la pose.",
      ],
      variant: "bullets",
    },
    {
      type: "text",
      ariaLabelledby: "installation-links",
      heading: "",
      paragraphs: [],
      links: [
        {
          text: "Voir l'installation",
          href: "/services/installation/",
          variant: "outline",
        },
      ],
    },
    {
      type: "text",
      ariaLabelledby: "quincaillerie",
      heading: "7) Choisir une quincaillerie inadéquate",
      paragraphs: [
        "La quincaillerie influence le confort et la longévité : charnières qui gardent leurs réglages, coulisses stables en charge, fermeture contrôlée.",
      ],
    },
    {
      type: "list",
      ariaLabelledby: "quincaillerie-details",
      heading: "",
      items: [
        "Tiroirs qui frottent, prennent du jeu, ou \"accrochent\".",
        "Portes qui se désalignent, réglages instables.",
        "Usure prématurée sur les zones les plus utilisées.",
      ],
      variant: "bullets",
    },
    {
      type: "text",
      ariaLabelledby: "quincaillerie-links",
      heading: "",
      paragraphs: [],
      links: [
        {
          text: "Voir la quincaillerie",
          href: "/materiaux/quincaillerie/",
          variant: "outline",
        },
      ],
    },
    {
      type: "text",
      ariaLabelledby: "echeancier",
      heading: "8) Échéancier irréaliste",
      paragraphs: [
        "Les délais s'allongent quand les dépendances entre étapes ne sont pas respectées (démolition, plomberie/électricité, murs, plancher, peinture, comptoir, installation, finitions). Prévoir une marge réduit le stress et les décisions précipitées.",
      ],
    },
    {
      type: "list",
      ariaLabelledby: "echeancier-details",
      heading: "",
      items: [
        "Planifier l'ordre des étapes (et les temps de séchage).",
        "Confirmer la disponibilité des matériaux et des intervenants.",
        "Éviter les changements tardifs qui cassent le calendrier.",
      ],
      variant: "bullets",
    },
    {
      type: "text",
      ariaLabelledby: "prix",
      heading: "9) Comparer uniquement sur le prix",
      paragraphs: [
        "Deux soumissions peuvent être incomparables : l'une inclut coordination, ajustements et finition; l'autre non. Les \"coûts cachés\" (reprises, délais, gestion) apparaissent souvent après coup.",
      ],
    },
    {
      type: "list",
      ariaLabelledby: "prix-details",
      heading: "",
      items: [
        "Comparer la portée : qui fait quoi, et jusqu'où?",
        "Comparer l'installation : ajustements inclus? inspection finale?",
        "Comparer la coordination : responsabilités claires?",
      ],
      variant: "bullets",
    },
    {
      type: "text",
      ariaLabelledby: "prix-links",
      heading: "",
      paragraphs: [],
      links: [
        {
          text: "Cuisiniste vs entrepreneur général",
          href: "/comparatifs/cuisiniste-vs-entrepreneur-general/",
          variant: "outline",
        },
      ],
    },
    {
      type: "text",
      ariaLabelledby: "checklist",
      heading: "10) Checklist avant de démarrer",
      paragraphs: [
        "Avant de lancer le chantier, assurez-vous d'avoir :",
      ],
    },
    {
      type: "list",
      ariaLabelledby: "checklist-details",
      heading: "",
      items: [
        "Un plan validé (dimensions, électroménagers, dégagements).",
        "Les matériaux choisis selon l'usage (humidité, entretien, durabilité).",
        "Des responsabilités claires (coordination, décisions, validation).",
        "Un échéancier réaliste et séquencé.",
        "Une installation prévue (ajustements et inspection finale inclus).",
      ],
      variant: "bullets",
    },
  ],
  faq: {
    ariaLabelledby: "faq",
    heading: "FAQ - erreurs en rénovation de cuisine",
    items: faqItems,
  },
  footerSections: [
    {
      type: "relatedLinks",
      ariaLabelledby: "liens",
      heading: "Liens utiles",
      links: [
        { label: "Comparatif des matériaux", href: "/materiaux/comparatif/" },
        { label: "Installation", href: "/services/installation/" },
        { label: "Rénovation de cuisine", href: "/services/renovation/cuisine/" },
        { label: "Cuisine sur mesure", href: "/espaces/cuisine/" },
        { label: "Demander une soumission", href: "/contact/" },
      ],
      columns: 2,
    },
  ],
};
