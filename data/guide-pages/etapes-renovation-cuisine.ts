import type { Metadata } from "next";
import type { ArticlePageData } from "@/components/templates/ArticlePageTemplate";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";

export const metadata: Metadata = createPageMetadata({
  title: "Étapes d'une rénovation de cuisine",
  description:
    "Guide : étapes d'une rénovation de cuisine, du cadrage au design, aux travaux techniques, à l'installation et aux finitions. Comprendre le bon ordre des étapes avant de démarrer.",
  path: "/guides/etapes-renovation-cuisine/",
  ogAlt: "Guide : Étapes d'une rénovation de cuisine",
});

const faqItems = [
  {
    q: "Peut-on sauter certaines étapes?",
    a: "On peut adapter la portée, mais l'ordre logique reste le même. Ce qui est risqué, c'est de démarrer sans plan validé ou de faire les travaux techniques trop tard.",
  },
  {
    q: "Faut-il tout décider avant de démarrer?",
    a: "Les décisions structurantes oui : plan, électroménagers, contraintes techniques, matériaux et séquence des travaux. Ça réduit fortement les reprises et les délais.",
  },
  {
    q: 'Quand "commander" ou lancer la fabrication?',
    a: "Lorsque le plan est final, les contraintes techniques validées, et les choix essentiels confirmés. Les changements tardifs coûtent cher.",
  },
  {
    q: "Clé en main ou coordination personnelle?",
    a: "Si plusieurs corps de métier sont impliqués, le clé en main simplifie la coordination et réduit les zones grises. Sinon, vous devrez gérer l'ordre des étapes et les responsabilités.",
  },
];

export const pageData: ArticlePageData = {
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Guides", url: SITE.url + "/guides/" },
    {
      name: "Étapes d'une rénovation de cuisine",
      url: SITE.url + "/guides/etapes-renovation-cuisine/",
    },
  ],
  hero: {
    heading: "Les étapes d'une rénovation de cuisine - du plan à la finition",
    description:
      "Une rénovation de cuisine réussie dépend surtout de l'ordre des étapes. Quand le séquencement est mauvais, les coûts cachés et les délais apparaissent : reprises, changements tardifs, coordination difficile. Ce guide présente le déroulement typique d'un projet, de la planification à l'inspection finale, pour vous aider à cadrer votre décision avant de lancer le chantier.",
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
      ariaLabelledby: "overview",
      heading: "Vue d'ensemble (le bon ordre des étapes)",
      paragraphs: [
        "Les projets varient, mais la logique reste la même : on planifie, on prépare, on exécute les travaux techniques, puis on installe et on finit proprement.",
      ],
    },
    {
      type: "list",
      ariaLabelledby: "overview-steps",
      heading: "",
      items: [
        "Cadrage du projet (portée, contraintes, priorités).",
        "Design & planification (plan, ergonomie, intégrations).",
        "Choix des matériaux et finis (usage, entretien, durabilité).",
        "Préparation du chantier (logistique, démolition, protection).",
        "Travaux techniques (plomberie, électricité, ventilation, murs/plancher si applicable).",
        "Fabrication et installation des armoires.",
        "Ajustements, quincaillerie et finitions.",
        "Inspection finale et validation du fonctionnement.",
      ],
      variant: "numbered",
    },
    {
      type: "text",
      ariaLabelledby: "cadrage",
      heading: "1) Cadrer le projet",
      paragraphs: [
        "Avant de parler matériaux ou style, clarifiez le cadre : qu'est-ce qui doit changer et pourquoi? Une rénovation peut aller d'un remplacement d'armoires à un projet complet avec travaux connexes.",
      ],
    },
    {
      type: "list",
      ariaLabelledby: "cadrage-details",
      heading: "",
      items: [
        "Objectifs : rangement, circulation, îlot, usage quotidien, entretien.",
        "Portée : armoires seulement vs rénovation complète (plomberie/électricité/plancher).",
        "Contraintes : condo, accès, horaires, ascenseur, stationnement, bruit.",
        "Échéance : période souhaitée, flexibilité, dépendances.",
      ],
      variant: "bullets",
    },
    {
      type: "text",
      ariaLabelledby: "cadrage-links",
      heading: "",
      paragraphs: [],
      links: [
        {
          text: "Design",
          href: "/services/design/",
          variant: "outline",
        },
      ],
    },
    {
      type: "text",
      ariaLabelledby: "design",
      heading: "2) Design & planification",
      paragraphs: [
        "C'est l'étape qui évite 80% des problèmes : plan fonctionnel, circulation, zones de travail, intégration des électroménagers et validation des contraintes techniques.",
      ],
    },
    {
      type: "list",
      ariaLabelledby: "design-details",
      heading: "",
      items: [
        "Plan et ergonomie (circulation, dégagements, îlot réaliste).",
        "Intégration des électroménagers (dimensions, dégagements, sorties).",
        "Validation des contraintes (murs, fenêtres, plomberie, ventilation).",
        "Décisions structurantes prises avant fabrication.",
      ],
      variant: "bullets",
    },
    {
      type: "text",
      ariaLabelledby: "design-links",
      heading: "",
      paragraphs: [],
      links: [
        {
          text: "Voir le service de design",
          href: "/services/design/",
          variant: "outline",
        },
        {
          text: "Voir Cuisine sur mesure",
          href: "/espaces/cuisine/",
          variant: "outline",
        },
      ],
    },
    {
      type: "text",
      ariaLabelledby: "materiaux",
      heading: "3) Choix des matériaux et finis",
      paragraphs: [
        "Les matériaux doivent être choisis selon l'usage (humidité, impacts, entretien) et le rendu recherché. Le \"bon\" choix dépend aussi des chants, de la quincaillerie et de l'installation.",
      ],
    },
    {
      type: "list",
      ariaLabelledby: "materiaux-details",
      heading: "",
      items: [
        "Structure (caissons) vs portes (fini et rendu).",
        "Humidité (évier, lave-vaisselle) et entretien au quotidien.",
        "Choix des couleurs et finis selon la lumière et le style.",
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
          text: "Comparatif des matériaux",
          href: "/materiaux/comparatif/",
          variant: "outline",
        },
        {
          text: "Couleurs & finis",
          href: "/materiaux/couleurs/",
          variant: "outline",
        },
      ],
    },
    {
      type: "text",
      ariaLabelledby: "preparation",
      heading: "4) Préparation du chantier",
      paragraphs: [
        "Une préparation solide réduit le chaos : protection des zones, planification des intervenants, séquence claire. En condo, la logistique est souvent un facteur majeur.",
      ],
    },
    {
      type: "list",
      ariaLabelledby: "preparation-details",
      heading: "",
      items: [
        "Protection (planchers, circulation, zones adjacentes).",
        "Démolition (si applicable) et gestion des débris.",
        "Accès chantier : stationnement, ascenseur, horaires, voisins.",
        "Coordination : qui intervient, quand, et dans quel ordre?",
      ],
      variant: "bullets",
    },
    {
      type: "text",
      ariaLabelledby: "preparation-links",
      heading: "",
      paragraphs: [],
      links: [
        {
          text: "Voir la rénovation de cuisine",
          href: "/services/renovation/cuisine/",
          variant: "outline",
        },
      ],
    },
    {
      type: "text",
      ariaLabelledby: "travaux",
      heading: "5) Travaux techniques (avant l'installation)",
      paragraphs: [
        "Les travaux techniques doivent être prêts avant l'installation des armoires. Sinon, on se retrouve à refaire des éléments finis (murs, peinture, plancher) ou à modifier le plan.",
      ],
    },
    {
      type: "list",
      ariaLabelledby: "travaux-details",
      heading: "",
      items: [
        "Plomberie : évier, lave-vaisselle, relocalisations si nécessaires.",
        "Électricité : circuits, prises, éclairage, hotte et électroménagers.",
        "Ventilation : conduits, efficacité, bruit et conformité.",
        "Murs/plancher : selon la portée (gypse, peinture, revêtements).",
      ],
      variant: "bullets",
    },
    {
      type: "text",
      ariaLabelledby: "fabrication",
      heading: "6) Fabrication & installation des armoires",
      paragraphs: [
        "Une fois le plan validé, la fabrication suit le projet. L'installation exige précision et ajustements : niveaux, alignements, jeux réguliers et finition propre.",
      ],
    },
    {
      type: "list",
      ariaLabelledby: "fabrication-details",
      heading: "",
      items: [
        "Fabrication sur mesure selon le plan final.",
        "Installation : niveaux, alignements, ajustements.",
        "Préparation pour comptoir et éléments connexes.",
      ],
      variant: "bullets",
    },
    {
      type: "text",
      ariaLabelledby: "fabrication-links",
      heading: "",
      paragraphs: [],
      links: [
        {
          text: "Voir la fabrication",
          href: "/services/fabrication/",
          variant: "outline",
        },
        {
          text: "Voir l'installation",
          href: "/services/installation/",
          variant: "outline",
        },
      ],
    },
    {
      type: "text",
      ariaLabelledby: "finitions",
      heading: "7) Ajustements & finitions",
      paragraphs: [
        "C'est l'étape qui fait la différence entre \"correct\" et \"haut de gamme\" : portes alignées, tiroirs fluides, mécanismes réglés, finitions propres.",
      ],
    },
    {
      type: "list",
      ariaLabelledby: "finitions-details",
      heading: "",
      items: [
        "Réglage des portes, tiroirs et mécanismes.",
        "Quincaillerie : confort, stabilité des réglages, usage quotidien.",
        "Finitions : joints, retouches, détails visibles.",
      ],
      variant: "bullets",
    },
    {
      type: "text",
      ariaLabelledby: "finitions-links",
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
      ariaLabelledby: "inspection",
      heading: "8) Inspection finale",
      paragraphs: [
        "L'inspection finale valide le fonctionnement et la finition : ouverture/fermeture, alignements, tiroirs, accessoires, et points de détail. C'est aussi le moment de confirmer les dernières retouches si nécessaires.",
      ],
    },
    {
      type: "list",
      ariaLabelledby: "inspection-details",
      heading: "",
      items: [
        "Vérification globale et fonctionnement.",
        "Validation du résultat avec le client.",
        "Liste de retouches (si applicable) et finalisation.",
      ],
      variant: "bullets",
    },
    {
      type: "text",
      ariaLabelledby: "delais",
      heading: "Délais : à quoi s'attendre (sans chiffres)",
      paragraphs: [
        "Les délais varient selon la complexité, la disponibilité et la portée des travaux. Ce qui allonge le plus un projet : changements tardifs, décisions non finalisées, et séquencement mal coordonné entre intervenants.",
      ],
    },
    {
      type: "list",
      ariaLabelledby: "delais-details",
      heading: "",
      items: [
        "Valider le plan et les électroménagers avant fabrication.",
        "Confirmer les choix de matériaux/finis avant de lancer la production.",
        "Planifier une marge pour imprévus, surtout en rénovation.",
      ],
      variant: "bullets",
    },
    {
      type: "list",
      ariaLabelledby: "erreurs",
      heading: "Erreurs de séquencement à éviter",
      items: [
        "Commander ou fabriquer avant que le plan soit vraiment final.",
        "Modifier la plomberie/électricité après l'installation des armoires.",
        "Installer avant que les murs/planchers soient prêts (selon la portée).",
        "Sous-estimer l'étape d'ajustements et de finition.",
      ],
      variant: "bullets",
    },
    {
      type: "text",
      ariaLabelledby: "erreurs-links",
      heading: "",
      paragraphs: [],
      links: [
        {
          text: "Voir les erreurs fréquentes",
          href: "/guides/erreurs-renovation-cuisine/",
          variant: "outline",
        },
      ],
    },
  ],
  faq: {
    ariaLabelledby: "faq",
    heading: "FAQ - étapes d'une rénovation de cuisine",
    items: faqItems,
  },
  footerSections: [
    {
      type: "relatedLinks",
      ariaLabelledby: "liens",
      heading: "Liens utiles",
      links: [
        { label: "Rénovation de cuisine", href: "/services/renovation/cuisine/" },
        { label: "Cuisine sur mesure", href: "/espaces/cuisine/" },
        { label: "Comparatif des matériaux", href: "/materiaux/comparatif/" },
        { label: "Erreurs fréquentes", href: "/guides/erreurs-renovation-cuisine/" },
        { label: "Demander une soumission", href: "/contact/" },
      ],
      columns: 2,
    },
  ],
};
