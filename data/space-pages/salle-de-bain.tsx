import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";
import { SpacePageTemplate } from "@/components/templates/SpacePageTemplate";
import type { SpacePageData } from "@/types/space-page";
import { SECTION_TYPES } from "@/constants/section-types";

export const metadata = createPageMetadata({
  title: "Vanité salle de bain sur mesure haut de gamme",
  description:
    "Vanité salle de bain sur mesure haut de gamme : design, fabrication contrôlée et installation précise, avec coordination clé en main à Montréal, Laval et sur la Rive-Sud.",
  path: "/espaces/salle-de-bain/",
  ogAlt: "Vanité sur mesure Dilamco — durable, résistante à l’humidité, bien exécutée",
});

const faqItems = [
  {
    q: "Combien coûte une vanité sur mesure à Montréal ?",
    a: "Le prix dépend des dimensions, des matériaux, des configurations (double lavabo, rangement, etc.) et du niveau de finition. Les projets sur mesure clés en main sont généralement alignés avec une exécution haut de gamme et une durabilité à long terme.",
  },
  {
    q: "Quelle est la différence vs une vanité standard en grande surface ?",
    a: "Une solution standard peut convenir à certains projets. Le sur mesure permet d’adapter précisément l’espace, d’utiliser des spécifications structurelles plus solides et d’assurer une exécution mieux contrôlée, particulièrement dans un environnement humide.",
  },
  {
    q: "Que signifie « clé en main » pour une salle de bain ?",
    a: "Un seul partenaire responsable coordonne le projet de bout en bout : conception, fabrication, planification et installation. Cela réduit la fragmentation, les délais imprévus et les problèmes de finition.",
  },
  {
    q: "Quels sont les délais typiques ?",
    a: "Les délais varient selon l’ampleur et la coordination requise. Attendez-vous à un plan structuré établi pendant la phase de conception, avant le début de la fabrication.",
  },
];

export const pageData: SpacePageData = {
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Espaces", url: SITE.url + "/espaces/" },
    { name: "Salle de bain sur mesure", url: SITE.url + "/espaces/salle-de-bain/" },
  ],
  service: {
    name: "Salle de bain sur mesure",
    description:
      "Conception, fabrication contrôlée et installation de vanités sur mesure haut de gamme, avec coordination complète du projet.",
    url: SITE.url + "/espaces/salle-de-bain/",
    serviceType: "Vanité salle de bain sur mesure",
  },
  hero: {
    variant: "split-premium",
    heading: "Vanité sur mesure, exécution clé en main à Montréal",
    description:
      "Conception, fabrication contrôlée et installation précise — avec une coordination complète du projet par un seul partenaire.",
    badges: ["Sur mesure", "Clé en main", "Montréal"],
    image: {
      src: "/images/hero/bathroom-hero.webp",
      alt: "Vanité sur mesure haut de gamme — salle de bain",
    },
    imagePriority: true,
    actions: [
      {
        text: "Obtenir une soumission détaillée",
        href: "/contact/",
      },
      {
        text: "Voir nos projets salle de bain",
        href: "/projets/salle-de-bain/",
        variant: "secondary",
      },
    ],
    proofs: [
      {
        title: "Conçu pour l’humidité",
        description: "Spécifications structurelles pensées pour un environnement exigeant.",
      },
      {
        title: "Fabrication contrôlée",
        description: "Standards définis et qualité reproductible.",
      },
      {
        title: "Coordination clé en main",
        description: "Un seul partenaire responsable, moins d’imprévus.",
      },
    ],
  },
  sections: [
    {
      id: "introduction-value",
      title: "Une salle de bain sur mesure pensée pour durer",
      intro:
        "Une salle de bain est un environnement humide. La durabilité dépend surtout de la structure, des matériaux et de la qualité d’exécution — pas seulement du look.",
      content: {
        type: SECTION_TYPES.INTRO_VALUE,
        badges: ["Résistance à l’humidité", "Structure durable", "Finition haut de gamme"],
        cardTitle: "Vérification rapide d’adéquation au projet",
        cardItems: [
          "Projet de résidence principale",
          "Durabilité à long terme priorisée",
          "Finition et stabilité importantes",
          "Budget aligné avec l’exécution premium",
        ],
        cardAction: {
          href: "/contact/",
          title: "Commencer une demande de soumission",
        },
      },
    },

    {
      id: "differentiation",
      title: "Une structure commerciale qui protège la qualité",
      intro:
        "Nous ne sommes pas un simple revendeur. Notre opération est conçue autour du contrôle de l’approvisionnement, de standards cohérents et d’une livraison prévisible.",
      content: {
        type: SECTION_TYPES.ASYMMETRIC_2_COLUMNS,
        items: [
          {
            title: "Présence locale à Montréal",
            description: "pour réduire les imprévus, mieux coordonner et garder le contrôle.",
          },
          {
            title: "Approvisionnement direct et standards de fabrication",
            description: "pour des résultats reproductibles et une qualité stable.",
          },
          {
            title: "Exécution clé en main",
            description: "pour éviter la responsabilité fragmentée sur le chantier.",
          },
        ],
        links: [
          { title: "Obtenir une soumission", href: "/contact/" },
          { title: "Voir notre processus", href: "/processus/", variant: "outline" },
        ],
        image: {
          src: "/images/sections/bathroom-detail-or-warehouse.jpg",
          alt: "Détail de finition ou contrôle logistique — Dilamco",
        },
        cardTitle: "Ce que cela signifie pour vous",
        cardDescription:
          "Une planification plus claire, moins d’inconnues, et une qualité cohérente d’un projet à l’autre.",
        surface: "muted",
      },
    },

    {
      id: "process",
      title: "Un processus clé en main clair",
      intro:
        "Un seul partenaire responsable de la conception à l’installation — des étapes structurées pour réduire les risques et améliorer les résultats.",
      content: {
        type: SECTION_TYPES.PROCESS,
        items: [
          {
            step: "1",
            title: "Conception & plans",
            description:
              "Analyse de l’espace, contraintes plomberie, ergonomie et validation avant fabrication.",
          },
          {
            step: "2",
            title: "Sélection des matériaux",
            description:
              "Choix orienté durabilité et stabilité en environnement humide, sans compromis sur les finitions.",
          },
          {
            step: "3",
            title: "Fabrication contrôlée",
            description:
              "Standards définis et qualité reproductible, sans assemblage improvisé.",
          },
          {
            step: "4",
            title: "Coordination du chantier",
            description:
              "Planification, séquencement et contrôle pour réduire délais et erreurs.",
          },
          {
            step: "5",
            title: "Installation précise",
            description:
              "Ajustement, alignement et finitions vérifiés lors de la livraison.",
          },
        ],
      },
    },

    {
      id: "materials",
      title: "Matériaux adaptés à une salle de bain haut de gamme",
      intro:
        "Dans une salle de bain, la solidité et la stabilité dimensionnelle sont critiques. Les détails à l’intérieur comptent plus que la finition en vitrine.",
      content: {
        type: SECTION_TYPES.MATERIALS_CONTRAST,
        cards: [
          {
            title: "Structure des tiroirs",
            description:
              "Bois massif de bouleau — robuste, stable et durable, adapté aux cuisines et salles de bain.",
          },
          {
            title: "Fond des tiroirs",
            description:
              "Contreplaqué de bouleau — stabilité dimensionnelle, résistance au poids et durabilité accrue.",
          },
          {
            title: "Pourquoi ça compte en salle de bain ?",
            description:
              "Meilleure tenue dans le temps face à l’humidité, moins de déformation, et une sensation de solidité durable à l’usage quotidien.",
            fullWidth: true,
          },
        ],
        links: [
          { title: "Explorer le bois massif", href: "/materiaux/bois-massif/", variant: "outline" },
          { title: "Explorer le contreplaqué", href: "/materiaux/contreplaque/", variant: "outline" },
        ],
        image: {
          src: "/images/sections/bathroom-material-detail.jpg",
          alt: "Détail matériau — salle de bain",
        },
        imageCardTitle: "Détail technique, avantage concret",
        imageCardDescription:
          "La structure (bois massif + contreplaqué de bouleau) améliore la stabilité et la durabilité dans un environnement humide.",
        compareTitle: "Comparaison rapide",
        compareRows: [
          { label: "Standard", value: "Panneaux minces / MDF / mélamine" },
          { label: "Spécifications Dilamco", value: "Bois massif + contreplaqué de bouleau" },
        ],
        surface: "muted",
      },
    },

    {
      id: "projects",
      title: "Projets réels à Montréal et environs",
      intro: "Preuve de la qualité d’exécution — pas seulement une galerie.",
      content: {
        type: SECTION_TYPES.PROJECTS_IMMERSIVE,
        cta: {
          title: "Voir tous les projets salle de bain",
          href: "/projets/salle-de-bain/",
          variant: "outline",
        },
        items: [
          {
            title: "Vanité sur mesure",
            location: "Laval",
            href: "/projets/salle-de-bain/vanite-sur-mesure-laval",
            image: {
              src: "/images/projects/bathroom-1.jpg",
              alt: "Projet vanité sur mesure — Laval",
            },
          },
          // Ajoute 2 autres projets quand tu as les slugs/photos
          {
            title: "Salle de bain sur mesure",
            location: "Montréal",
            href: "/projets/salle-de-bain/",
            image: {
              src: "/images/projects/bathroom-2.jpg",
              alt: "Projet salle de bain sur mesure — Montréal",
            },
          },
          {
            title: "Salle de bain sur mesure",
            location: "Rive-Sud",
            href: "/projets/salle-de-bain/",
            image: {
              src: "/images/projects/bathroom-3.jpg",
              alt: "Projet salle de bain sur mesure — Rive-Sud",
            },
          },
        ],
      },
    },

    {
      id: "fit-filtering",
      title: "Est-ce le bon choix pour votre projet ?",
      intro:
        "Nos vanités sur mesure sont conçues pour la durabilité à long terme et l’exécution cohérente. Si votre priorité est le prix le plus bas à l’avance, une solution standardisée peut être plus appropriée.",
      content: {
        type: SECTION_TYPES.CENTERED_MINIMAL,
        cards: [
          {
            title: "Profil idéal",
            description:
              "Résidence principale • Investissement long terme • Qualité, stabilité et finition prioritaires.",
          },
          {
            title: "Moins adapté",
            description:
              "Projet temporaire • Budget strictement limité • Solution standard privilégiée.",
          },
        ],
        links: [
          { title: "Demander une soumission", href: "/contact/" },
          { title: "Voir nos services", href: "/services/", variant: "outline" },
        ],
      },
    },
  ],

  faq: {
    ariaLabelledby: "faq",
    heading: "FAQ",
    items: faqItems,
  },

  cta: {
    heading: "Obtenez une soumission claire et détaillée pour votre salle de bain sur mesure",
    description:
      "Une évaluation structurée adaptée à votre espace, vos contraintes et votre niveau de finition.",
    actions: [{ text: "Démarrer ma demande de soumission", href: "/contact/" }],
  },
};

export default function SalleDeBain() {
  return <SpacePageTemplate data={pageData} />;
}