import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Rénovation clé en main à Montréal : cuisine et salle de bain",
    description:
      "Rénovation clé en main à Montréal : design, coordination, fabrication, installation et séquence de chantier mieux maîtrisée.",
    path: "/services/renovation",
    ogAlt: "Rénovation clé en main Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Rénovation clé en main", url: SITE.url + "/services/renovation" },
  ],
  service: {
    name: "Rénovation clé en main",
    description:
      "Design, coordination et exécution lorsque le projet implique plusieurs corps de métier.",
    url: SITE.url + "/services/renovation",
    serviceType: "Rénovation",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Dilamco - Services",
          heading:
            "Rénovation clé en main à Montréal, un seul cadre du design à l'installation",
          description:
            "Quand la rénovation touche plusieurs corps de métier, la valeur ne se joue pas seulement dans le résultat final. Elle se joue dans la séquence, la coordination, la qualité des décisions techniques et la capacité de livrer un ensemble cohérent du début à la fin.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos projets",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["clé en main", "Coordination", "Montréal"],
          image: {
            src: "/images/generated/services/service-renovation-hero-01.webp",
            alt: "Projet de rénovation sur mesure",
          },
          caption: "Montréal, Laval et Rive-Sud",
        },
      },
    },
    {
      id: "différence",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading:
            "Pourquoi Dilamco ne fonctionne pas comme un simple détaillant",
          description:
            "Une rénovation clé en main demande plus qu'un fournisseur d'armoires. L'avantage vient du contrôle de la chaîne, de la constance de fabrication et d'une meilleure maîtrise de la séquence entre design, approvisionnement, installation et travaux connexes.",
          cards: [
            {
              title: "Approvisionnement mieux contrôlé",
              description:
                "Les choix de matériaux, composantes et finis sont cadrés plus tôt pour réduire les écarts et mieux protéger l'échéancier.",
            },
            {
              title: "Qualité plus stable",
              description:
                "Le design, la fabrication et l'installation sont pensés comme un ensemble, pas comme des morceaux livrés sans logique commune.",
            },
            {
              title: "Coordination réelle",
              description:
                "Quand le chantier implique plusieurs étapes, un cadre clair limite la fragmentation et les zones grises entre intervenants.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "why",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Quand la rénovation clé en main est pertinente",
          intro:
            "Cette approche devient pertinente quand le projet dépasse la seule fabrication et installation d'armoires et qu'il faut mieux maîtriser l'enchaînement global.",
          badges: ["Plomberie", "Électricité", "Plancher", "Coordination"],
          cardTitle: "Ce que ça apporte",
          items: [
            "Moins de fragmentation entre intervenants.",
            "Un calendrier mieux cadré dès le départ.",
            "Une exécution plus cohérente sur le chantier.",
          ],
          actions: [
            {
              label: "Voir le design",
              href: "/services/design",
            },
            {
              label: "Voir l'installation",
              href: "/services/installation",
              variant: "ghost",
            },
          ],
        },
      },
    },
    {
      id: "process",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "Un processus clé en main qui garde le chantier lisible",
          intro:
            "La logique reste la même d'un projet à l'autre : clarifier d'abord, verrouiller les décisions importantes, puis exécuter dans le bon ordre.",
          steps: [
            {
              number: "1",
              title: "Cadrage",
              description:
                "Besoins, portée, contraintes du lieu et niveau de rénovation à confirmer avant d'ouvrir le chantier.",
            },
            {
              number: "2",
              title: "Design",
              description:
                "Organisation de l'espace, usages, circulation et décisions qui auront un impact sur la fabrication et la séquence.",
            },
            {
              number: "3",
              title: "Matériaux",
              description:
                "Choix de composantes, finis et solutions adaptés à la durabilité, à l'entretien et au niveau d'usage attendu.",
            },
            {
              number: "4",
              title: "Fabrication et chantier",
              description:
                "Préparation des éléments sur mesure et coordination des étapes connexes pour limiter les reprises et les conflits.",
            },
            {
              number: "5",
              title: "Installation",
              description:
                "Pose, ajustements et finition avec une lecture claire de l'ensemble du projet.",
            },
          ],
        },
      },
    },
    {
      id: "materials",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Des choix techniques qui justifient une rénovation premium",
          intro:
            "Le positionnement ne repose pas sur un discours marketing. Il repose sur la qualité des composantes, la stabilité de fabrication et l'intégration des décisions techniques dans le chantier.",
          items: [
            {
              title: "Structure de tiroirs en bois massif de bouleau",
              description:
                "Un choix plus solide et plus durable qu'une construction faible quand le projet vise un usage quotidien intensif.",
            },
            {
              title: "Fond de tiroirs en contreplaqué de bouleau",
              description:
                "Meilleure résistance à la charge, meilleure stabilité dimensionnelle et meilleure perception de qualité à long terme.",
            },
            {
              title: "Sélection de matériaux selon l'espace",
              description:
                "Cuisine, salle de bain, rangement ou zone de service ne demandent pas exactement les mêmes arbitrages techniques.",
            },
            {
              title: "Exécution pensée pour la pose",
              description:
                "Une rénovation se déroule mieux quand les choix sont pris avec la fabrication et l'installation en tête, pas séparément.",
            },
          ],
          actions: [
            {
              label: "Voir les matériaux",
              href: "/materiaux",
              variant: "ghost",
            },
            {
              label: "Voir la fabrication",
              href: "/services/fabrication",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/spaces/cabinet-cuisines.webp",
            alt: "Détails de matériaux pour rénovation sur mesure",
          },
          cardTitle: "Pourquoi c'est important",
          cardDescription:
            "Dans une rénovation complète, les composantes invisibles influencent autant la durabilité que le rendu final visible.",
        },
      },
    },
    {
      id: "projects",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Réalisations qui montrent le niveau de coordination",
          intro:
            "La preuve de maîtrise se voit dans les projets où le design, la fabrication, la pose et la finition restent cohérents jusqu'à la livraison.",
          items: [
            {
              title: "Cuisine sur mesure",
              href: "/projets",
              description:
                "Projet résidentiel avec implantation précise, décisions techniques mieux cadrées et finition propre.",
              image: {
                src: "/images/generated/services/service-renovation-project-01.webp",
                alt: "Projet de rénovation de cuisine à Montréal",
              },
              badges: ["Montréal", "Cuisine"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Cuisine sur mesure",
              href: "/projets",
              description:
                "Rénovation pensée pour l'usage quotidien avec meilleure cohérence entre fabrication, chantier et installation.",
              image: {
                src: "/images/generated/services/service-renovation-project-02.webp",
                alt: "Projet de rénovation résidentielle à Laval",
              },
              badges: ["Laval", "Coordination"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Cuisine sur mesure",
              href: "/projets",
              description:
                "Projet complet avec gestion plus propre de la séquence, des ajustements et des détails de finition.",
              image: {
                src: "/images/generated/services/service-renovation-project-03.webp",
                alt: "Projet de rénovation sur la Rive-Sud",
              },
              badges: ["Rive-Sud", "clé en main"],
              footerCtaLabel: "Voir le projet",
            },
          ],
          ctaLabel: "Voir tous nos projets",
          ctaHref: "/projets/",
        },
      },
    },
    {
      id: "subservices",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Types de rénovation",
          intro:
            "Accédez à la page adaptée selon la nature des travaux à coordonner.",
          items: [
            {
              title: "Rénovation de cuisine",
              href: "/services/renovation/cuisine",
              description:
                "Cuisine complète avec séquence de chantier, intégration des armoires et coordination des travaux connexes.",
              image: {
                src: "/images/generated/renovation/renovation-cuisine-hero-01.webp",
                alt: "Rénovation de cuisine clé en main",
              },
              badges: ["Cuisine", "Coordination"],
              footerCtaLabel: "Voir cuisine",
            },
            {
              title: "Rénovation de salle de bain",
              href: "/services/renovation/salle-de-bain",
              description:
                "Salle de bain mieux cadrée pour humidité, plomberie, rangement et finition durable.",
              image: {
                src: "/images/generated/renovation/renovation-bath-hero-01.webp",
                alt: "Rénovation de salle de bain clé en main",
              },
              badges: ["Salle de bain", "Humidité"],
              footerCtaLabel: "Voir salle de bain",
            },
            {
              title: "Rénovation de plancher",
              href: "/services/renovation/plancher",
              description:
                "Plancher intégré dans le bon ordre pour gérer niveaux, transitions et finition sans reprises inutiles.",
              image: {
                src: "/images/generated/renovation/renovation-plancher-hero-01.webp",
                alt: "Rénovation de plancher intégrée à un projet résidentiel",
              },
              badges: ["Plancher", "Transitions"],
              footerCtaLabel: "Voir plancher",
            },
            {
              title: "Agrandissement de maison",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Extension résidentielle avec faisabilité, raccords et exécution mieux coordonnés avec l'existant.",
              image: {
                src: "/images/generated/renovation/renovation-extension-hero-01.webp",
                alt: "Agrandissement de maison clé en main",
              },
              badges: ["Agrandissement", "Exécution"],
              footerCtaLabel: "Voir agrandissement",
            },
          ],
        },
      },
    },
    {
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "FAQ - rénovation clé en main",
          intro:
            "Réponses claires sur le prix, les délais, la coordination et la différence avec une approche plus fragmentée.",
          items: [
            {
              q: "Combien coûte une rénovation clé en main ?",
              a: "Le prix dépend de la portée, des matériaux, de la complexité du chantier et du niveau de coordination requis. Une soumission structurée sert justement à clarifier ces points avant de démarrer.",
            },
            {
              q: "Quelle est la différence avec acheter des armoires puis gérer le reste séparément ?",
              a: "Une approche fragmentée multiplie les zones grises entre design, fabrication, chantier et finition. La clé en main vise au contraire une meilleure continuité entre les décisions et l'exécution.",
            },
            {
              q: "Est-ce que vous gérez seulement les armoires ou aussi la coordination du chantier ?",
              a: "Selon la portée définie, la rénovation peut inclure un niveau de coordination plus large pour mieux structurer les étapes et réduire les reprises.",
            },
            {
              q: "Quels sont les délais pour une rénovation ?",
              a: "Les délais varient selon l'espace, la complexité, l'approvisionnement et les travaux connexes. Un échéancier réaliste est établi une fois la portée du projet clarifiée.",
            },
            {
              q: "Est-ce pertinent pour une cuisine, une salle de bain ou un agrandissement ?",
              a: "Oui. La logique clé en main devient particulièrement utile dès que plusieurs décisions doivent s'aligner entre espace, matériaux, séquence et finition.",
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
          heading: "Vous avez un projet de rénovation à cadrer sérieusement ?",
          intro:
            "Obtenez une soumission claire et détaillée pour un projet de rénovation clé en main mieux structuré, mieux séquencé et mieux exécuté.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos projets",
              href: "/projets",
              variant: "ghost",
            },
          ],
          note: "Résidentiel, cuisine, salle de bain, plancher et agrandissement",
        },
      },
    },
  ],
};
