import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";
import { SpacePageTemplate } from "@/components/templates/SpacePageTemplate";
import type { SpacePageData } from "@/types/space-page";
import { SECTION_TYPES } from "@/constants/section-types";

export const metadata = createPageMetadata({
  title: "Cuisine sur mesure haut de gamme",
  description:
    "Cuisine sur mesure haut de gamme : conception, fabrication contrôlée et installation précise, avec coordination clé en main à Montréal, Laval et sur la Rive-Sud.",
  path: "/espaces/cuisine/",
  ogAlt: "Cuisine sur mesure Dilamco — haut de gamme, durable, bien exécuté",
});

const faqItems = [
  {
    q: "Combien coûte une cuisine sur mesure à Montréal ?",
    a: "Le prix dépend de l’aménagement, des matériaux et de la complexité. Les projets sur mesure clés en main sont généralement alignés avec une exécution haut de gamme et une durabilité à long terme.",
  },
  {
    q: "Quelle est la différence vs IKEA ou les grandes surfaces ?",
    a: "Les modules standards peuvent convenir à certains contextes. La fabrication sur mesure permet une adaptation complète à l’espace, des spécifications structurelles plus solides et une exécution contrôlée.",
  },
  {
    q: "Que signifie « clé en main » avec Dilamco ?",
    a: "Un seul partenaire responsable coordonne le projet de bout en bout : conception, fabrication, planification et installation, réduisant la fragmentation et les imprévus.",
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
    { name: "Cuisine sur mesure", url: SITE.url + "/espaces/cuisine/" },
  ],
  service: {
    name: "Cuisine sur mesure",
    description:
      "Conception, fabrication contrôlée et installation de cuisines sur mesure haut de gamme, avec coordination complète du projet.",
    url: SITE.url + "/espaces/cuisine/",
    serviceType: "Cuisine sur mesure",
  },
  hero: {
    variant: "split-premium",
    heading: "Cuisine sur mesure, livraison clé en main à Montréal",
    description:
      "Conception, fabrication contrôlée et installation précise — avec une coordination complète du projet par un seul partenaire.",
    badges: ["Sur mesure", "Clé en main", "Montréal"],
    image: {
      src: "/images/hero/kitchen-hero.webp",
      alt: "Premium custom kitchen",
    },
    imagePriority: true,
    actions: [
      {
        text: "Obtenir une soumission détaillée",
        href: "/contact/",
      },
      {
        text: "Voir nos cuisines",
        href: "/projets/cuisine/",
        variant: "secondary",
      },
    ],
    proofs: [
      {
        title: "Fabrication contrôlée",
        description: "Standards définis et qualité reproductible.",
      },
      {
        title: "Matériaux haut de gamme",
        description: "Spécifications conçues pour la durabilité et la stabilité.",
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
      title: "Une cuisine sur mesure conçue pour durer",
      intro:
        "Ce n’est pas seulement de l’armoire. C’est un investissement résidentiel à long terme où la structure, les matériaux et la qualité d’exécution comptent plus que l’esthétique superficielle.",
      content: {
        type: SECTION_TYPES.INTRO_VALUE,
        badges: ["Durabilité réelle", "Planification stable", "Finitions haut de gamme"],
        cardTitle: "Vérification rapide d’adéquation au projet",
        cardItems: [
          "Projet de résidence principale",
          "Durabilité à long terme priorisée",
          "Coordination clé en main préférée",
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
            description: "pour réduire les imprévus et améliorer le contrôle.",
          },
          {
            title: "Approvisionnement direct et standards de fabrication",
            description: "pour des résultats reproductibles.",
          },
          {
            title: "Exécution clé en main",
            description: "pour éviter la responsabilité fragmentée.",
          },
        ],
        links: [
          {
            title: "Obtenir une soumission",
            href: "/contact/",
          },
          {
            title: "Voir notre processus",
            href: "/processus/",
            variant: "outline",
          },
        ],
        image: {
          src: "/images/sections/warehouse-or-detail.jpg",
          alt: "Warehouse or detail shot",
        },
        cardTitle: "Ce que cela signifie pour vous",
        cardDescription:
          "Moins d’inconnues, une planification plus claire et une qualité qui reste cohérente d’un projet à l’autre.",
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
            title: "Conception & plans 3D",
            description: "Analyse de l’espace, aménagement et validation 3D détaillée avant fabrication.",
          },
          {
            step: "2",
            title: "Sélection des matériaux",
            description: "Spécifications haut de gamme alignées avec la durabilité et la constance des finitions.",
          },
          {
            step: "3",
            title: "Fabrication contrôlée",
            description: "Standards définis et qualité reproductible, sans assemblage improvisé.",
          },
          {
            step: "4",
            title: "Coordination du chantier",
            description: "Un seul partenaire responsable pour réduire les délais et la fragmentation.",
          },
          {
            step: "5",
            title: "Installation précise",
            description: "Ajustement, alignement et finitions vérifiés lors de la livraison.",
          },
        ],
      },
    },
    {
      id: "materials",
      title: "Matériaux qui justifient le haut de gamme",
      intro:
        "La durabilité réelle est structurale. Les détails à l’intérieur comptent plus que la finition de la boutique.",
      content: {
        type: SECTION_TYPES.MATERIALS_CONTRAST,
        cards: [
          {
            title: "Structure des tiroirs",
            description: "Composants en bois massif de bouleau conçus pour la résistance, la stabilité et la longévité.",
          },
          {
            title: "Fond des tiroirs",
            description: "Contreplaqué de bouleau pour une meilleure résistance à la charge et une stabilité dimensionnelle.",
          },
          {
            title: "Quelle est la différence par rapport aux panneaux standard ?",
            description:
              "Meilleure résistance à la déformation, meilleure performance au fil du temps et moins de remplacements prématurés.",
            fullWidth: true,
          },
        ],
        links: [
          {
            title: "Explorer le bois massif",
            href: "/materiaux/bois-massif/",
            variant: "outline",
          },
          {
            title: "Explorer le contreplaqué de bouleau",
            href: "/materiaux/contreplaque/",
            variant: "outline",
          },
        ],
        image: {
          src: "/images/sections/material-detail.jpg",
          alt: "Material detail macro",
        },
        imageCardTitle: "Détail technique, simple avantage",
        imageCardDescription:
          "Les choix de structure réduisent la déformation, améliorent la capacité de charge et protègent le sentiment de longévité de la cuisine.",
        compareTitle: "Comparaison rapide",
        compareRows: [
          { label: "Standard", value: "Panneaux minces / MDF" },
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
          title: "Voir tous les projets de cuisine",
          href: "/projets/cuisine/",
          variant: "outline",
        },
        items: [
          {
            title: "Cuisine sur mesure",
            location: "Plateau-Mont-Royal",
            href: "/projets/cuisine/cuisine-sur-mesure-plateau-mont-royal",
            image: {
              src: "/images/projects/kitchen-1.jpg",
              alt: "Projet de cuisine sur mesure — Plateau-Mont-Royal",
            },
          },
          {
            title: "Cuisine sur mesure",
            location: "Laval",
            href: "/projets/cuisine/cuisine-sur-mesure-montreal",
            image: {
              src: "/images/projects/kitchen-2.jpg",
              alt: "Projet de cuisine sur mesure — Laval",
            },
          },
          {
            title: "Cuisine sur mesure",
            location: "Rive-Sud",
            href: "/projets/cuisine/cuisine-sur-mesure-rive-sud",
            image: {
              src: "/images/projects/kitchen-3.jpg",
              alt: "Projet de cuisine sur mesure — Rive-Sud",
            },
          },
        ],
      },
    },
    {
      id: "fit-filtering",
      title: "Est-ce le bon choix pour votre projet ?",
      intro:
        "Nos cuisines sur mesure sont conçues pour la durabilité à long terme et l’exécution cohérente. Si votre priorité est le prix le plus bas à l’avance, une solution standardisée peut être plus appropriée.",
      content: {
        type: SECTION_TYPES.CENTERED_MINIMAL,
        cards: [
          {
            title: "Profil idéal",
            description: "Résidence principale • Investissement long terme • Qualité et coordination prioritaires.",
          },
          {
            title: "Moins adapté",
            description: "Projet temporaire • Budget strictement limité • Modules standards privilégiés.",
          },
        ],
        links: [
          {
            title: "Demander une soumission",
            href: "/contact/",
          },
          {
            title: "Comparer avec IKEA",
            href: "/comparatifs/cuisine-sur-mesure-vs-ikea",
            variant: "outline",
          },
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
    heading: "Obtenez une soumission claire et détaillée pour votre cuisine sur mesure",
    description:
      "Une évaluation structurée adaptée à votre espace, vos priorités et votre niveau de finition.",
    actions: [
      {
        text: "Démarrer ma demande de soumission",
        href: "/contact/",
      },
    ],
  },
};

export default function Cuisine() {
  return <SpacePageTemplate data={pageData} />;
}
