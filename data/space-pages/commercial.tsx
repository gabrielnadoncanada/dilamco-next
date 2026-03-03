import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";
import { SpacePageTemplate } from "@/components/templates/SpacePageTemplate";
import type { SpacePageData } from "@/types/space-page";
import { SECTION_TYPES } from "@/constants/section-types";

export const metadata = createPageMetadata({
  title: "Armoires commerciales sur mesure haut de gamme",
  description:
    "Armoires commerciales sur mesure : conception, fabrication contrôlée et installation précise, avec coordination clé en main à Montréal, Laval et sur la Rive-Sud.",
  path: "/espaces/commercial/",
  ogAlt: "Commercial Dilamco — durable, structuré, bien exécuté",
});

const faqItems = [
  {
    q: "Quels types de projets commerciaux réalisez-vous ?",
    a: "Nous réalisons des aménagements et armoires commerciales sur mesure pour des espaces où la durabilité, l’entretien et la constance d’exécution sont prioritaires (ex. bureaux, commerces, services professionnels).",
  },
  {
    q: "Pouvez-vous respecter des délais serrés et des fenêtres d’installation ?",
    a: "Oui, dans la mesure où le projet est planifié correctement dès la conception. Nous structurons l’échéancier en amont (validation, fabrication, logistique, installation) pour réduire les imprévus.",
  },
  {
    q: "Faites-vous la coordination clé en main ?",
    a: "Oui. Un seul partenaire responsable peut coordonner la conception, la fabrication, la planification et l’installation afin d’éviter la responsabilité fragmentée et les finitions inégales.",
  },
  {
    q: "Quels matériaux recommandez-vous pour un usage intensif ?",
    a: "Pour le commercial, nous privilégions des spécifications orientées stabilité, durabilité et entretien. Sur les éléments critiques (ex. tiroirs), une structure robuste (bois massif + contreplaqué de bouleau) améliore la tenue dans le temps.",
  },
  {
    q: "Travaillez-vous à Montréal, Laval et sur la Rive-Sud ?",
    a: "Oui. Nous desservons Montréal, Laval et la Rive-Sud pour les projets commerciaux sur mesure.",
  },
];

export const pageData: SpacePageData = {
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Espaces", url: SITE.url + "/espaces/" },
    { name: "Commercial", url: SITE.url + "/espaces/commercial/" },
  ],

  service: {
    name: "Commercial",
    description:
      "Conception, fabrication contrôlée et installation d’armoires commerciales sur mesure haut de gamme, avec coordination complète du projet.",
    url: SITE.url + "/espaces/commercial/",
    serviceType: "Armoires commerciales sur mesure",
  },

  hero: {
    variant: "split-premium",
    heading: "Armoires commerciales sur mesure, clé en main à Montréal",
    description:
      "Conception, fabrication contrôlée et installation précise — avec une coordination complète du projet par un seul partenaire.",
    badges: ["Sur mesure", "Clé en main", "Montréal"],
    image: {
      src: "/images/hero/commercial-hero.webp",
      alt: "Armoires commerciales sur mesure — aménagement durable",
    },
    imagePriority: true,
    actions: [
      { text: "Obtenir une soumission commerciale", href: "/contact/" },
      { text: "Voir nos projets commerciaux", href: "/projets/commercial/", variant: "secondary" },
    ],
    proofs: [
      { title: "Standards reproductibles", description: "Qualité cohérente d’un projet à l’autre." },
      { title: "Fabrication contrôlée", description: "Approvisionnement maîtrisé et exécution stable." },
      { title: "Installation planifiée", description: "Fenêtres d’intervention et finitions vérifiées." },
    ],
  },

  sections: [
    // Intro / Value
    {
      id: "introduction-value",
      title: "Un aménagement commercial conçu pour l’usage intensif",
      intro:
        "En commercial, la qualité se voit… et se vit. Usage intensif, entretien, contraintes d’ergonomie et fenêtres d’installation : un projet réussi dépend d’une conception structurée, de matériaux stables et d’une exécution maîtrisée.",
      content: {
        type: SECTION_TYPES.INTRO_VALUE,
        badges: ["Durabilité", "Entretien", "Exécution stable"],
        cardTitle: "Vérification rapide d’adéquation au projet",
        cardItems: [
          "Priorité à la durabilité et à l’entretien",
          "Délais planifiés (fenêtre d’installation)",
          "Besoin de constance d’exécution et de finition",
          "Budget aligné avec une solution premium",
        ],
        cardAction: {
          href: "/contact/",
          title: "Démarrer une demande de soumission",
        },
      },
    },

    // Differentiation
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
            title: "Coordination clé en main",
            description: "pour éviter la responsabilité fragmentée et sécuriser les délais.",
          },
        ],
        links: [
          { title: "Obtenir une soumission", href: "/contact/" },
          { title: "Voir notre processus", href: "/processus/", variant: "outline" },
        ],
        image: {
          src: "/images/sections/commercial-detail-or-warehouse.jpg",
          alt: "Contrôle logistique ou détail de fabrication — commercial",
        },
        cardTitle: "Ce que cela change pour votre entreprise",
        cardDescription:
          "Moins d’inconnues, une planification plus claire, et une exécution cohérente — particulièrement critique en contexte commercial.",
        surface: "muted",
      },
    },

    // Commercial problem framing (optional but useful)
    {
      id: "commercial-problem",
      title: "Pourquoi les projets commerciaux dérapent souvent",
      intro:
        "Les problèmes arrivent rarement sur le design. Ils arrivent sur les délais, la coordination et la tenue dans le temps.",
      content: {
        // If you don't have this SECTION_TYPE, change to an existing one (e.g. INTRO_VALUE or ASYMMETRIC_2_COLUMNS).
        // I'm using INTRO_VALUE for compatibility, but you can swap for a dedicated "bullets" type if you have one.
        type: SECTION_TYPES.INTRO_VALUE,
        badges: ["Délais", "Usage intensif", "Coordination"],
        cardTitle: "Risques typiques",
        cardItems: [
          "Fenêtres d’installation serrées (ouverture / relance d’activité)",
          "Matériaux qui vieillissent mal sous usage intensif",
          "Entretien difficile (taches, impacts, nettoyage)",
          "Coordination fragmentée → retards et finitions inégales",
        ],
        cardAction: {
          href: "/contact/",
          title: "Valider la faisabilité de mon échéancier",
        },
      },
    },

    // Process
    {
      id: "process",
      title: "Un processus clé en main clair",
      intro:
        "Un seul partenaire responsable de la conception à l’installation — des étapes structurées pour sécuriser délais, qualité et finition.",
      content: {
        type: SECTION_TYPES.PROCESS,
        items: [
          {
            step: "1",
            title: "Cadrage & besoins",
            description:
              "Usage, contraintes, entretien, flux, exigences de marque, et échéancier (fenêtres d’intervention).",
          },
          {
            step: "2",
            title: "Conception & validation",
            description:
              "Plans et validation avant fabrication pour éviter les changements tardifs et les surprises.",
          },
          {
            step: "3",
            title: "Spécifications & matériaux",
            description:
              "Choix orientés durabilité, stabilité et entretien selon l’usage intensif.",
          },
          {
            step: "4",
            title: "Fabrication contrôlée",
            description:
              "Standards définis et qualité reproductible, sans assemblage improvisé.",
          },
          {
            step: "5",
            title: "Logistique & installation",
            description:
              "Planification, livraison, installation précise et vérification des finitions.",
          },
        ],
      },
    },

    // Materials
    {
      id: "materials",
      title: "Matériaux et spécifications pour usage intensif",
      intro:
        "En commercial, le premium n’est pas esthétique : c’est la tenue dans le temps, l’entretien et la stabilité. Les détails structuraux font la différence.",
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
            title: "Pourquoi c’est important en commercial ?",
            description:
              "Usage intensif, cycles répétés, charge et entretien : une structure stable réduit la déformation et protège la sensation de solidité au fil du temps.",
            fullWidth: true,
          },
        ],
        links: [
          { title: "Explorer le bois massif", href: "/materiaux/bois-massif/", variant: "outline" },
          { title: "Explorer le contreplaqué de bouleau", href: "/materiaux/contreplaque/", variant: "outline" },
        ],
        image: {
          src: "/images/sections/commercial-material-detail.jpg",
          alt: "Détail matériau — commercial",
        },
        imageCardTitle: "Détail technique, avantage opérationnel",
        imageCardDescription:
          "Moins d’entretien correctif, meilleure tenue structurelle, et finitions plus stables à l’usage.",
        compareTitle: "Comparaison rapide",
        compareRows: [
          { label: "Standard", value: "Panneaux minces / MDF / mélamine" },
          { label: "Spécifications Dilamco", value: "Bois massif + contreplaqué de bouleau" },
        ],
        surface: "muted",
      },
    },

    // Projects
    {
      id: "projects",
      title: "Projets commerciaux — preuves d’exécution",
      intro: "Preuve de la qualité d’exécution — pas seulement une galerie.",
      content: {
        type: SECTION_TYPES.PROJECTS_IMMERSIVE,
        cta: {
          title: "Voir tous les projets commerciaux",
          href: "/projets/commercial/",
          variant: "outline",
        },
        items: [
          {
            title: "Aménagement commercial",
            location: "Montréal",
            href: "/projets/commercial/amenagement-commercial-montreal",
            image: {
              src: "/images/projects/commercial-1.jpg",
              alt: "Projet commercial — Montréal",
            },
          },
          {
            title: "Armoires commerciales sur mesure",
            location: "Laval",
            href: "/projets/commercial/armoires-commerciales-sur-mesure-laval",
            image: {
              src: "/images/projects/commercial-2.jpg",
              alt: "Projet commercial — Laval",
            },
          },
          {
            title: "Mobilier commercial",
            location: "Rive-Sud",
            href: "/projets/commercial/mobilier-commercial-rive-sud",
            image: {
              src: "/images/projects/commercial-3.jpg",
              alt: "Projet commercial — Rive-Sud",
            },
          },
        ],
      },
    },

    // Fit / Filtering
    {
      id: "fit-filtering",
      title: "Est-ce le bon choix pour votre projet ?",
      intro:
        "Nos solutions commerciales sur mesure sont conçues pour la durabilité à long terme et l’exécution cohérente. Si votre priorité est le prix le plus bas, une solution standardisée peut être plus appropriée.",
      content: {
        type: SECTION_TYPES.CENTERED_MINIMAL,
        cards: [
          {
            title: "Profil idéal",
            description:
              "Usage intensif • Image de marque • Durabilité et entretien prioritaires • Échéancier planifié.",
          },
          {
            title: "Moins adapté",
            description:
              "Solution temporaire • Budget strictement limité • Décision axée uniquement sur le prix.",
          },
        ],
        links: [
          { title: "Demander une soumission commerciale", href: "/contact/" },
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
    heading: "Obtenez une soumission claire et détaillée pour votre projet commercial",
    description:
      "Une évaluation structurée adaptée à votre usage, votre échéancier et votre niveau de finition.",
    actions: [{ text: "Démarrer ma demande de soumission", href: "/contact/" }],
  },
};

export default function Commercial() {
  return <SpacePageTemplate data={pageData} />;
}