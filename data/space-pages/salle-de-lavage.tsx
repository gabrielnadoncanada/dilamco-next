import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";
import { SpacePageTemplate } from "@/components/templates/SpacePageTemplate";
import type { SpacePageData } from "@/types/space-page";
import { SECTION_TYPES } from "@/constants/section-types";

export const metadata = createPageMetadata({
  title: "Salle de lavage sur mesure haut de gamme",
  description:
    "Salle de lavage sur mesure haut de gamme : conception, fabrication contrôlée et installation précise, avec coordination clé en main à Montréal, Laval et sur la Rive-Sud.",
  path: "/espaces/salle-de-lavage/",
  ogAlt: "Salle de lavage sur mesure Dilamco — durable, technique, bien exécuté",
});

const faqItems = [
  {
    q: "Quel est le prix d’une salle de lavage sur mesure à Montréal ?",
    a: "Le prix dépend de la configuration (machines côte à côte ou superposées), du niveau d’intégration (comptoir, pliage, rangement vertical), des matériaux et des finitions. Une solution sur mesure clé en main est généralement alignée avec une exécution haut de gamme et une durabilité à long terme.",
  },
  {
    q: "Est-ce que vous gérez la rénovation complète si nécessaire ?",
    a: "Oui. Selon le projet, nous pouvons coordonner l’ensemble : conception, fabrication, planification du chantier et installation, afin de réduire la fragmentation et les imprévus.",
  },
  {
    q: "Quels matériaux recommandez-vous pour l’humidité ?",
    a: "Une salle de lavage est un espace technique. Nous privilégions une structure durable et stable (bois massif de bouleau + contreplaqué de bouleau sur les éléments critiques), pour améliorer la tenue dans le temps et limiter les remplacements prématurés.",
  },
  {
    q: "Travaillez-vous à Montréal, Laval et sur la Rive-Sud ?",
    a: "Oui. Nous desservons Montréal, Laval et la Rive-Sud pour les projets sur mesure clés en main.",
  },
];

export const pageData: SpacePageData = {
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Espaces", url: SITE.url + "/espaces/" },
    { name: "Salle de lavage sur mesure", url: SITE.url + "/espaces/salle-de-lavage/" },
  ],

  service: {
    name: "Salle de lavage sur mesure",
    description:
      "Conception, fabrication contrôlée et installation d’armoires de salle de lavage sur mesure haut de gamme, avec coordination complète du projet.",
    url: SITE.url + "/espaces/salle-de-lavage/",
    serviceType: "Salle de lavage sur mesure",
  },

  hero: {
    variant: "split-premium",
    heading: "Salle de lavage sur mesure, clé en main à Montréal",
    description:
      "Conception, fabrication contrôlée et installation précise — avec une coordination complète du projet par un seul partenaire.",
    badges: ["Sur mesure", "Clé en main", "Montréal"],
    image: {
      src: "/images/hero/laundry-hero.webp",
      alt: "Salle de lavage sur mesure haut de gamme",
    },
    imagePriority: true,
    actions: [
      { text: "Obtenir une soumission détaillée", href: "/contact/" },
      { text: "Voir nos réalisations", href: "/projets/salle-de-lavage/", variant: "secondary" },
    ],
    proofs: [
      { title: "Fabrication contrôlée", description: "Standards définis et qualité reproductible." },
      { title: "Matériaux durables", description: "Choix orientés stabilité et tenue dans le temps." },
      { title: "Coordination clé en main", description: "Un seul responsable, moins d’imprévus." },
    ],
  },

  sections: [
    {
      id: "introduction-value",
      title: "Une salle de lavage conçue comme un espace technique",
      intro:
        "Une salle de lavage mal pensée devient vite un irritant quotidien : humidité, circulation serrée, rangement inefficace, comptoir insuffisant. Le sur mesure permet d’intégrer vos contraintes réelles et d’obtenir un espace stable, durable et fonctionnel.",
      content: {
        type: SECTION_TYPES.INTRO_VALUE,
        badges: ["Rangement optimisé", "Résistance à l’usage", "Exécution structurée"],
        cardTitle: "Vérification rapide d’adéquation au projet",
        cardItems: [
          "Espace restreint à optimiser",
          "Besoin de rangement vertical et comptoir pliage",
          "Priorité à la durabilité (humidité / usage fréquent)",
          "Budget aligné avec une exécution premium",
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
          src: "/images/sections/laundry-detail-or-warehouse.jpg",
          alt: "Détail d’armoire ou contrôle logistique — Dilamco",
        },
        cardTitle: "Ce que cela change pour vous",
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
            title: "Analyse des contraintes",
            description: "Plomberie, ventilation, circulation, portes, profondeur disponible et contraintes réelles.",
          },
          {
            step: "2",
            title: "Conception & validation",
            description: "Plans et aménagement : rangement vertical, zones panier/produits, comptoir pliage, accès machines.",
          },
          {
            step: "3",
            title: "Sélection des matériaux",
            description: "Choix orientés stabilité et tenue dans le temps, adaptés à un espace exposé à l’humidité.",
          },
          {
            step: "4",
            title: "Fabrication contrôlée",
            description: "Standards définis et qualité reproductible, sans assemblage improvisé.",
          },
          {
            step: "5",
            title: "Installation précise",
            description: "Ajustements, alignements et finitions vérifiés lors de la livraison.",
          },
        ],
      },
    },

    {
      id: "materials",
      title: "Matériaux qui justifient le haut de gamme",
      intro:
        "Dans une salle de lavage, la durabilité est structurale. L’humidité et l’usage fréquent punissent rapidement les choix standards.",
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
            title: "Pourquoi c’est critique en salle de lavage ?",
            description:
              "Humidité, détergents, charge (paniers, produits), usage quotidien : une structure stable réduit la déformation et protège la sensation de solidité au fil des années.",
            fullWidth: true,
          },
        ],
        links: [
          { title: "Explorer le bois massif", href: "/materiaux/bois-massif/", variant: "outline" },
          { title: "Explorer le contreplaqué de bouleau", href: "/materiaux/contreplaque/", variant: "outline" },
        ],
        image: {
          src: "/images/sections/laundry-material-detail.jpg",
          alt: "Détail matériau — salle de lavage sur mesure",
        },
        imageCardTitle: "Détail technique, avantage concret",
        imageCardDescription:
          "Les bons choix de structure protègent la tenue dans le temps, surtout dans un espace exposé à l’humidité.",
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
          title: "Voir toutes les réalisations salle de lavage",
          href: "/projets/salle-de-lavage/",
          variant: "outline",
        },
        items: [
          {
            title: "Salle de lavage sur mesure",
            location: "Montréal",
            href: "/projets/salle-de-lavage/salle-de-lavage-sur-mesure-montreal",
            image: {
              src: "/images/projects/laundry-1.jpg",
              alt: "Projet salle de lavage sur mesure — Montréal",
            },
          },
          {
            title: "Salle de lavage sur mesure",
            location: "Laval",
            href: "/projets/salle-de-lavage/salle-de-lavage-sur-mesure-laval",
            image: {
              src: "/images/projects/laundry-2.jpg",
              alt: "Projet salle de lavage sur mesure — Laval",
            },
          },
          {
            title: "Salle de lavage sur mesure",
            location: "Rive-Sud",
            href: "/projets/salle-de-lavage/salle-de-lavage-sur-mesure-rive-sud",
            image: {
              src: "/images/projects/laundry-3.jpg",
              alt: "Projet salle de lavage sur mesure — Rive-Sud",
            },
          },
        ],
      },
    },

    {
      id: "fit-filtering",
      title: "Est-ce le bon choix pour votre projet ?",
      intro:
        "Nos salles de lavage sur mesure sont conçues pour la durabilité à long terme et l’exécution cohérente. Si votre priorité est le prix le plus bas à l’avance, une solution standardisée peut être plus appropriée.",
      content: {
        type: SECTION_TYPES.CENTERED_MINIMAL,
        cards: [
          {
            title: "Profil idéal",
            description:
              "Résidence principale • Usage fréquent • Qualité et rangement priorisés • Coordination clé en main.",
          },
          {
            title: "Moins adapté",
            description:
              "Projet temporaire • Budget strictement limité • Modules standards privilégiés.",
          },
        ],
        links: [
          { title: "Demander une soumission", href: "/contact/" },
          { title: "Voir notre processus", href: "/processus/", variant: "outline" },
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
    heading: "Obtenez une soumission claire et détaillée pour votre salle de lavage sur mesure",
    description: "Une évaluation structurée adaptée à votre espace, vos contraintes techniques et votre niveau de finition.",
    actions: [{ text: "Démarrer ma demande de soumission", href: "/contact/" }],
  },
};

export default function SalleDeLavage() {
  return <SpacePageTemplate data={pageData} />;
}