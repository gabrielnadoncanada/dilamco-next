import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationSalleDeBainPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Rénovation salle de bain",
    description:
      "Rénovation de salle de bain clé en main : coordination, contrôle de l'humidité, vanités sur mesure et finition durable à Montréal.",
    path: "/services/renovation/salle-de-bain",
    ogAlt: "Rénovation salle de bain Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Rénovation", url: SITE.url + "/services/renovation" },
    {
      name: "Rénovation salle de bain",
      url: SITE.url + "/services/renovation/salle-de-bain",
    },
  ],
  service: {
    name: "Rénovation salle de bain",
    description:
      "Design, coordination, vanités sur mesure et finition durable adaptés aux contraintes d'humidité et de plomberie.",
    url: SITE.url + "/services/renovation/salle-de-bain",
    serviceType: "Rénovation de salle de bain",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Dilamco - Rénovation",
          heading:
            "Rénovation de salle de bain clé en main à Montréal, mieux gérer l'humidité, la plomberie et la finition",
          description:
            "En salle de bain, la qualité finale dépend autant de la coordination que des matériaux, de l'humidité, de la plomberie et des détails d'installation. Le chantier doit être mieux séquencé pour protéger la durabilité à long terme.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "default",
            },
            {
              label: "Voir les projets salle de bain",
              href: "/projets",
              variant: "outline",
            },
          ],
          badges: ["Humidité", "Coordination", "Montréal"],
          image: {
            src: "/images/generated/renovation/renovation-bath-hero-01.webp",
            alt: "Rénovation de salle de bain sur mesure",
          },
          caption: "Montréal, Laval et Rive-Sud",
        },
      },
    },
    {
      id: "problems",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading:
            "Ce qui rend une salle de bain plus exigeante qu'elle en a l'air",
          description:
            "Une salle de bain concentre eau, humidité, plomberie, ventilation, rangement et finition dans un espace souvent plus compact. Le projet vieillit mal quand ces éléments sont traités séparément ou trop tard.",
          cards: [
            {
              title: "Risque d'eau et d'humidité",
              description:
                "Les mauvais arbitrages techniques se paient plus cher ici qu'ailleurs parce qu'ils affectent directement la durabilité.",
            },
            {
              title: "Contraintes d'espace",
              description:
                "Circulation, dégagements, rangement et accès doivent être pensés finement dans une pièce limitée.",
            },
            {
              title: "Coordination sensible",
              description:
                "Plomberie, ventilation, finition et mobilier doivent s'aligner pour éviter les reprises et les détails mal résolus.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "priorities",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Les priorités d'une rénovation de salle de bain",
          intro:
            "Le projet doit protéger contre l'eau, intégrer la plomberie et livrer une finition durable.",
          badges: ["Ventilation", "Plomberie", "Protection", "Finitions"],
          cardTitle: "Ce qu'on cherche à protéger",
          items: [
            "Réduire les risques liés à l'eau avec une planification claire.",
            "Obtenir un résultat durable en milieu humide.",
            "Éviter les zones grises entre intervenants et finitions.",
          ],
          actions: [
            {
              label: "Voir les matériaux",
              href: "/materiaux",
              variant: "outline",
            },
            {
              label: "Quincaillerie",
              href: "/materiaux/quincaillerie",
              variant: "outline",
            },
          ],
        },
      },
    },
    {
      id: "approach",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Notre approche pour cadrer une salle de bain plus durable",
          intro:
            "L'objectif est de ne pas séparer les décisions de design des réalités du chantier. Une salle de bain doit être pensée comme un ensemble où humidité, rangement, plomberie et finition se tiennent.",
          items: [
            {
              title: "Analyse du contexte réel",
              description:
                "On lit les contraintes d'espace, d'accès, de plomberie et de ventilation avant d'avancer des solutions.",
            },
            {
              title: "Hiérarchie des choix",
              description:
                "Les décisions structurelles et techniques passent avant les détails purement esthétiques.",
            },
            {
              title: "Séquence des interventions",
              description:
                "Le chantier est organisé pour mieux protéger les étapes sensibles et réduire les retouches.",
            },
            {
              title: "Qualité du rendu final",
              description:
                "Vanité, rangement, transitions et finition doivent donner une lecture propre et durable de la pièce.",
            },
          ],
          actions: [
            {
              label: "Voir la page salle de bain",
              href: "/espaces/salle-de-bain",
              variant: "outline",
            },
            {
              label: "Voir l'installation",
              href: "/services/installation",
              variant: "outline",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-bath-approach-01.webp",
            alt: "Planification d'une rénovation de salle de bain",
          },
          cardTitle: "Ce qu'on cherche à éviter",
          cardDescription:
            "Les salles de bain qui vieillissent mal ont souvent été décidées sans assez de clarté sur l'eau, l'usage quotidien et la qualité des raccords.",
        },
      },
    },
    {
      id: "process",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "Séquence type d'une rénovation de salle de bain",
          intro:
            "La logique reste la même: clarifier les contraintes, valider les choix sensibles puis exécuter proprement dans un milieu humide.",
          steps: [
            {
              number: "1",
              title: "Cadrage",
              description:
                "Portée, contraintes du lieu, accès, plomberie et niveau d'intervention à confirmer.",
            },
            {
              number: "2",
              title: "Design",
              description:
                "Vanité, rangement, circulation, dégagements et décisions de finition.",
            },
            {
              number: "3",
              title: "Matériaux",
              description:
                "Choix de composantes adaptés à l'humidité, à l'entretien et à la durabilité attendue.",
            },
            {
              number: "4",
              title: "Coordination",
              description:
                "Travaux connexes séquencés pour mieux protéger les détails sensibles et la finition.",
            },
            {
              number: "5",
              title: "Installation",
              description:
                "Pose, ajustements et validation finale pour une lecture propre de l'ensemble.",
            },
          ],
        },
      },
    },
    {
      id: "technical",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading:
            "Points techniques qui comptent vraiment dans une salle de bain",
          intro:
            "La durabilité d'une salle de bain ne dépend pas d'un seul produit. Elle dépend d'un ensemble de décisions techniques bien alignées.",
          columns: "2",
          items: [
            {
              title: "Gestion de l'humidité",
              description:
                "Le milieu humide exige des choix plus rigoureux qu'une autre pièce.",
              icon: "doorOpen",
              bullets: [
                "Matériaux et finis adaptés à l'environnement.",
                "Détails de construction pensés pour durer.",
                "Moins de risques visibles à moyen terme.",
              ],
            },
            {
              title: "Structure de la vanité",
              description:
                "Les composantes invisibles influencent directement la tenue dans le temps.",
              icon: "package2",
              bullets: [
                "Bois massif de bouleau pour les éléments critiques.",
                "Contreplaqué de bouleau pour mieux résister à la charge.",
                "Meilleure sensation de solidité à l'usage.",
              ],
            },
            {
              title: "Ergonomie et rangement",
              description:
                "La pièce doit rester simple à utiliser même quand elle est compacte.",
              icon: "slidersHorizontal",
              bullets: [
                "Dégagements pensés selon l'espace réel.",
                "Rangement adapté aux habitudes quotidiennes.",
                "Moins de friction dans l'usage.",
              ],
            },
            {
              title: "Exécution sur chantier",
              description:
                "La finition dépend de l'ordre des interventions et de la qualité des ajustements.",
              icon: "wrench",
              bullets: [
                "Moins de conflits entre interventions.",
                "Moins de reprises de fin de chantier.",
                "Finition plus nette à la livraison.",
              ],
            },
          ],
        },
      },
    },
    {
      id: "intégration",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading:
            "Cette page service soutient surtout votre projet de salle de bain sur mesure",
          intro:
            "La rénovation de salle de bain explique surtout la méthode, les risques et la coordination. Pour la vision complète du produit, des matériaux et des réalisations, la page pilier salle de bain reste la destination principale.",
          items: [
            {
              title: "Salle de bain sur mesure",
              href: "/espaces/salle-de-bain",
              description:
                "La page pilier principale pour voir le niveau de finition, les matériaux, les projets et la logique de rangement.",
              image: {
                src: "/images/generated/spaces/space-bath-hero-01.webp",
                alt: "Salle de bain sur mesure haut de gamme",
              },
              badges: ["Page pilier", "Salle de bain"],
              footerCtaLabel: "Voir la page salle de bain",
            },
            {
              title: "Service de fabrication",
              href: "/services/fabrication",
              description:
                "Pour comprendre ce qui rend la vanité plus stable, plus durable et mieux exécutée dans le temps.",
              image: {
                src: "/images/generated/services/service-fabrication-hero-01.webp",
                alt: "Fabrication sur mesure et détails techniques",
              },
              badges: ["Fabrication", "Durabilité"],
              footerCtaLabel: "Voir fabrication",
            },
            {
              title: "Service d'installation",
              href: "/services/installation",
              description:
                "Pour voir comment la pose, les ajustements et les alignements protègent un rendu plus propre en fin de chantier.",
              image: {
                src: "/images/generated/services/service-installation-hero-01.webp",
                alt: "Installation sur mesure avec ajustements précis",
              },
              badges: ["Installation", "Finition"],
              footerCtaLabel: "Voir installation",
            },
          ],
        },
      },
    },
    {
      id: "proof",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading:
            "Ce qu'une rénovation de salle de bain bien maîtrisée doit livrer",
          description:
            "La preuve de compétence ne tient pas seulement à l'apparence. Elle se voit dans la façon dont la pièce vieillit, se nettoie et fonctionne au quotidien sans faiblesse visible.",
          cards: [
            {
              title: "Pièce plus durable",
              description:
                "Les choix techniques soutiennent mieux l'humidité, la charge et l'usage quotidien.",
            },
            {
              title: "Usage plus simple",
              description:
                "Rangement, circulation et dégagements donnent une salle de bain plus agréable à utiliser.",
            },
            {
              title: "Finition plus crédible",
              description:
                "Les raccords, alignements et détails de pose soutiennent un rendu plus propre et plus premium.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "faq",

      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "FAQ - rénovation de salle de bain",
          intro:
            "Réponses claires sur délais, humidité, coordination et portée du projet.",
          items: [
            {
              q: "Combien de temps dure une rénovation de salle de bain?",
              a: "La durée dépend de la portée, des contraintes du lieu et des travaux connexes.",
            },
            {
              q: "Est-ce risqué au niveau des dégâts d'eau?",
              a: "Une exécution rigoureuse et des choix adaptés à l'humidité réduisent fortement les risques à long terme.",
            },
            {
              q: "Travaillez-vous avec d'autres intervenants sur ce type de chantier?",
              a: "Oui, lorsque la portée l'exige. La coordination sert justement à mieux ordonner plomberie, ventilation, finition et pose pour éviter les zones grises.",
            },
            {
              q: "Est-ce possible en condo?",
              a: "Oui. L'accès, les horaires et les contraintes de bâtiment sont cadrés dès le départ.",
            },
            {
              q: "Puis-je faire une rénovation partielle?",
              a: "Oui. Certains projets visent surtout la vanité et le rangement, d'autres sont plus complets.",
            },
            {
              q: "Où voir l'approche complète pour une salle de bain sur mesure?",
              a: "La page rénovation de salle de bain sert surtout à expliquer la logique de chantier et de coordination. Pour la vision complète du produit, des matériaux et des projets, la page salle de bain sur mesure reste la référence principale.",
            },
          ],
        },
      },
    },
    {
      id: "cta",
      content: {
        type: "cta",
        variant: "band-split-actions",
        props: {
          heading: "Besoin d'une rénovation de salle de bain bien cadrée ?",
          intro:
            "On vous aide à structurer le projet, la séquence et les bons choix pour un environnement humide, puis à vous orienter vers la page pilier salle de bain pour la vision complète.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "default",
            },
            {
              label: "Voir la page salle de bain",
              href: "/espaces/salle-de-bain",
              variant: "outline",
            },
          ],
          note: "Salle de bain, vanité sur mesure, rangement et environnement humide",
        },
      },
    },
  ],
};
