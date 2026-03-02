import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";
import { SpacePageTemplate } from "@/components/templates/SpacePageTemplate";
import type { SpacePageData } from "@/types/space-page";
import { SECTION_TYPES } from "@/constants/section-types";

export const metadata = createPageMetadata({
  title: "Walk-in sur mesure haut de gamme",
  description:
    "Walk-in sur mesure haut de gamme : conception, fabrication contrôlée et installation précise, avec coordination clé en main à Montréal, Laval et sur la Rive-Sud.",
  path: "/espaces/walk-in/",
  ogAlt: "Walk-in sur mesure Dilamco — durable, structuré, bien exécuté",
});

const faqItems = [
  {
    q: "Combien coûte un walk-in sur mesure ?",
    a: "Le prix dépend des dimensions, du niveau d’aménagement (tiroirs, accessoires, penderie double, etc.), des matériaux et des finitions. Les projets sur mesure clés en main sont généralement alignés avec une exécution haut de gamme et une durabilité à long terme.",
  },
  {
    q: "Quelle est la différence vs un système modulaire standard ?",
    a: "Les systèmes modulaires peuvent convenir à certains contextes. Le sur mesure permet une adaptation complète à l’espace, des choix de structure plus robustes, et une exécution contrôlée pour un résultat stable et durable.",
  },
  {
    q: "Peut-on optimiser un petit espace ?",
    a: "Oui. Le sur mesure est particulièrement pertinent pour maximiser la capacité dans des dimensions contraignantes (angles, plafonds, niches), tout en gardant une circulation fonctionnelle.",
  },
  {
    q: "Quels sont les délais typiques ?",
    a: "Les délais varient selon l’ampleur et les besoins de coordination. Attendez-vous à un plan structuré établi pendant la phase de conception, avant le début de la fabrication.",
  },
];

export const pageData: SpacePageData = {
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Espaces", url: SITE.url + "/espaces/" },
    { name: "Walk-in sur mesure", url: SITE.url + "/espaces/walk-in/" },
  ],
  service: {
    name: "Walk-in sur mesure",
    description:
      "Conception, fabrication contrôlée et installation de walk-ins sur mesure haut de gamme, avec coordination complète du projet.",
    url: SITE.url + "/espaces/walk-in/",
    serviceType: "Walk-in sur mesure",
  },

  hero: {
    variant: "split-premium",
    heading: "Walk-in sur mesure, exécution clé en main à Montréal",
    description:
      "Conception, fabrication contrôlée et installation précise — avec une coordination complète du projet par un seul partenaire.",
    badges: ["Sur mesure", "Clé en main", "Montréal"],
    image: {
      src: "/images/hero/walkin-hero.webp",
      alt: "Walk-in sur mesure haut de gamme",
    },
    imagePriority: true,
    actions: [
      { text: "Obtenir une soumission détaillée", href: "/contact/" },
      { text: "Voir nos walk-ins", href: "/projets/walk-in/", variant: "secondary" },
    ],
    proofs: [
      { title: "Fabrication contrôlée", description: "Standards définis et qualité reproductible." },
      { title: "Matériaux durables", description: "Spécifications conçues pour la stabilité et l’usage quotidien." },
      { title: "Installation précise", description: "Ajustements et finitions vérifiés à la livraison." },
    ],
  },

  sections: [
    {
      id: "introduction-value",
      title: "Un walk-in sur mesure conçu pour l’usage réel",
      intro:
        "Un walk-in n’est pas un ensemble de tablettes. C’est un système de rangement quotidien où la structure, la précision d’installation et les choix de matériaux déterminent la durabilité et le confort d’utilisation.",
      content: {
        type: SECTION_TYPES.INTRO_VALUE,
        badges: ["Rangement optimisé", "Structure durable", "Finition haut de gamme"],
        cardTitle: "Vérification rapide d’adéquation au projet",
        cardItems: [
          "Résidence principale ou projet long terme",
          "Besoin réel d’optimisation (penderie, tiroirs, accessoires)",
          "Finition et stabilité prioritaires",
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
            description: "pour éviter la responsabilité fragmentée et les finitions inégales.",
          },
        ],
        links: [
          { title: "Obtenir une soumission", href: "/contact/" },
          { title: "Voir notre processus", href: "/processus/", variant: "outline" },
        ],
        image: {
          src: "/images/sections/walkin-detail-or-warehouse.jpg",
          alt: "Détail de rangement walk-in ou contrôle logistique — Dilamco",
        },
        cardTitle: "Ce que cela signifie pour vous",
        cardDescription:
          "Moins d’inconnues, une planification plus claire et un résultat cohérent d’un projet à l’autre.",
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
            title: "Analyse de l’espace & des besoins",
            description:
              "Penderie courte/longue, tiroirs accessoires, chaussures, sacs, zones à optimiser et contraintes réelles.",
          },
          {
            step: "2",
            title: "Conception & plan",
            description:
              "Organisation logique du rangement, circulation, proportions, et validation avant fabrication.",
          },
          {
            step: "3",
            title: "Sélection des matériaux",
            description:
              "Choix orienté stabilité, résistance à l’usure et constance des finitions.",
          },
          {
            step: "4",
            title: "Fabrication contrôlée",
            description:
              "Standards définis et qualité reproductible, sans assemblage improvisé.",
          },
          {
            step: "5",
            title: "Installation précise",
            description:
              "Ajustements, alignements et finitions vérifiés lors de la livraison.",
          },
        ],
      },
    },

    {
      id: "materials",
      title: "Matériaux qui justifient le haut de gamme",
      intro:
        "La durabilité réelle est structurale. Les détails à l’intérieur comptent plus que l’esthétique immédiate.",
      content: {
        type: SECTION_TYPES.MATERIALS_CONTRAST,
        cards: [
          {
            title: "Structure des tiroirs",
            description:
              "Composants en bois massif de bouleau conçus pour la résistance, la stabilité et la longévité.",
          },
          {
            title: "Fond des tiroirs",
            description:
              "Contreplaqué de bouleau pour une meilleure résistance à la charge et une stabilité dimensionnelle.",
          },
          {
            title: "Pourquoi c’est important dans un walk-in ?",
            description:
              "Ouverture/fermeture quotidienne, charge (chaussures, accessoires), et tenue dans le temps : moins de jeu, moins de déformation, sensation de solidité durable.",
            fullWidth: true,
          },
        ],
        links: [
          { title: "Explorer le bois massif", href: "/materiaux/bois-massif/", variant: "outline" },
          { title: "Explorer le contreplaqué de bouleau", href: "/materiaux/contreplaque/", variant: "outline" },
        ],
        image: {
          src: "/images/sections/walkin-material-detail.jpg",
          alt: "Détail matériau — walk-in sur mesure",
        },
        imageCardTitle: "Détail technique, avantage concret",
        imageCardDescription:
          "Une structure stable et robuste améliore la tenue dans le temps et la qualité d’usage au quotidien.",
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
          title: "Voir tous les projets walk-in",
          href: "/projets/walk-in/",
          variant: "outline",
        },
        items: [
          {
            title: "Walk-in sur mesure",
            location: "Montréal",
            href: "/projets/walk-in/walk-in-sur-mesure-montreal",
            image: {
              src: "/images/projects/walkin-1.jpg",
              alt: "Projet walk-in sur mesure — Montréal",
            },
          },
          {
            title: "Walk-in sur mesure",
            location: "Laval",
            href: "/projets/walk-in/walk-in-sur-mesure-laval",
            image: {
              src: "/images/projects/walkin-2.jpg",
              alt: "Projet walk-in sur mesure — Laval",
            },
          },
          {
            title: "Walk-in sur mesure",
            location: "Rive-Sud",
            href: "/projets/walk-in/walk-in-sur-mesure-rive-sud",
            image: {
              src: "/images/projects/walkin-3.jpg",
              alt: "Projet walk-in sur mesure — Rive-Sud",
            },
          },
        ],
      },
    },

    {
      id: "fit-filtering",
      title: "Est-ce le bon choix pour votre projet ?",
      intro:
        "Nos walk-ins sur mesure sont conçus pour la durabilité à long terme et l’exécution cohérente. Si votre objectif est une solution minimaliste au prix le plus bas, un système standardisé peut être plus approprié.",
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
              "Projet temporaire • Budget strictement limité • Tablettes/modules standards privilégiés.",
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
    heading: "Obtenez une soumission claire et détaillée pour votre walk-in sur mesure",
    description:
      "Une évaluation structurée adaptée à votre espace, vos besoins de rangement et votre niveau de finition.",
    actions: [{ text: "Démarrer ma demande de soumission", href: "/contact/" }],
  },
};

export default function WalkIn() {
  return <SpacePageTemplate data={pageData} />;
}