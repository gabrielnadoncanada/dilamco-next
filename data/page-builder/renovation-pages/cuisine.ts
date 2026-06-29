import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationCuisinePage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Rénovation de cuisine à Montréal — clé en main",
    description:
      "Rénovation de cuisine clé en main : faisabilité, coordination, fabrication et installation d'armoires sur mesure à Montréal.",
    path: "/services/renovation/cuisine",
    ogAlt: "Rénovation de cuisine Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Rénovation", url: SITE.url + "/services/renovation" },
    {
      name: "Rénovation de cuisine",
      url: SITE.url + "/services/renovation/cuisine",
    },
  ],
  service: {
    name: "Rénovation de cuisine",
    description:
      "Design, coordination, fabrication et installation d'armoires sur mesure dans une approche clé en main pour projets de cuisine.",
    url: SITE.url + "/services/renovation/cuisine",
    serviceType: "Rénovation de cuisine",
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
            "Rénovation de cuisine clé en main à Montréal, cadrer la cuisine avant d'ouvrir le chantier",
          description:
            "Une rénovation de cuisine réussie dépend autant de la coordination que du résultat final. Il faut clarifier la portée, la séquence, les raccords techniques et les choix de fabrication pour réduire les imprévus et livrer un résultat cohérent.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir les projets cuisine",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Cuisine", "clé en main", "Montréal"],
          image: {
            src: "/images/generated/renovation/renovation-cuisine-hero-01.webp",
            alt: "Rénovation de cuisine sur mesure",
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
          heading: "Ce qui complique vraiment une rénovation de cuisine",
          description:
            "Le problème n'est pas seulement de choisir des armoires. Une cuisine concentre circulation, plomberie, électricité, électroménagers, rangement et finition dans un espace qui doit rester fonctionnel tous les jours.",
          cards: [
            {
              title: "Portée mal cadrée",
              description:
                "Quand la séquence n'est pas claire, le chantier accumule les reprises, les retards et les compromis visibles.",
            },
            {
              title: "Contraintes techniques",
              description:
                "Prises, plomberie, ventilation, niveaux et accès aux appareils influencent directement les décisions de design.",
            },
            {
              title: "Coordination fragmentée",
              description:
                "Plus il y a d'intervenants non alignés, plus la qualité finale dépend d'ajustements tardifs et coûteux.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "approach",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Notre approche pour mieux cadrer une rénovation de cuisine",
          intro:
            "L'objectif est d'éviter qu'une cuisine se décide morceau par morceau. Le projet doit être pensé comme un ensemble où design, fabrication, chantier et pose se soutiennent mutuellement.",
          items: [
            {
              title: "Lecture de l'espace existant",
              description:
                "On part des contraintes réelles de la pièce, pas d'un plan idéalisé déconnecté du chantier.",
            },
            {
              title: "Hiérarchie des décisions",
              description:
                "Circulation, îlot, rangement, appareils et points techniques sont clarifiés avant la fabrication.",
            },
            {
              title: "Séquence de travaux",
              description:
                "Le chantier est structuré pour mieux gérer les étapes connexes et limiter les retours en arrière.",
            },
            {
              title: "Contrôle du rendu final",
              description:
                "Les alignements, les finitions et l'intégration des équipements sont pensés dès le début, pas corrigés à la fin.",
            },
          ],
          actions: [
            {
              label: "Voir le service de design",
              href: "/services/design",
              variant: "ghost",
            },
            {
              label: "Voir la page cuisine",
              href: "/espaces/cuisine",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-cuisine-approach-01.webp",
            alt: "Planification d'une rénovation de cuisine",
          },
          cardTitle: "Ce qu'on cherche à protéger",
          cardDescription:
            "Une cuisine mal séquencée coûte rarement moins cher au final. Elle coûte surtout plus de temps, plus de corrections et souvent un résultat moins propre.",
        },
      },
    },
    {
      id: "included",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "Séquence type d'une rénovation de cuisine",
          intro:
            "La portée exacte est confirmée lors de la soumission, mais la logique générale reste la même: clarifier, fabriquer, coordonner puis installer proprement.",
          steps: [
            {
              number: "1",
              title: "Cadrage",
              description:
                "Analyse de la cuisine existante, de la portée et des contraintes visibles.",
            },
            {
              number: "2",
              title: "Design",
              description:
                "Organisation de l'espace, ergonomie, îlot, rangement et décisions techniques principales.",
            },
            {
              number: "3",
              title: "Fabrication",
              description:
                "Armoires, îlot et rangement sur mesure préparés selon les choix validés.",
            },
            {
              number: "4",
              title: "Coordination",
              description:
                "Travaux connexes séquencés proprement selon la portée retenue.",
            },
            {
              number: "5",
              title: "Installation",
              description:
                "Alignements, ajustements et finition soignée pour une cuisine lisible et cohérente.",
            },
          ],
        },
      },
    },
    {
      id: "prix",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Combien coûte une rénovation de cuisine au Québec ?",
          description:
            "Le prix d'une rénovation de cuisine dépend surtout de la portée des travaux, des matériaux, des dimensions et de la coordination requise. À titre indicatif pour le marché québécois en 2026 — la soumission précise vient après le cadrage du projet :",
          cards: [
            {
              title: "Entrée de gamme — à partir d'environ 20 000 $",
              description:
                "Rafraîchissement : surfaces, portes, comptoir, sans modifier l'agencement ni la plomberie.",
            },
            {
              title: "Rénovation sur mesure — 35 000 $ à 50 000 $ et +",
              description:
                "Armoires et îlot sur mesure, matériaux durables (bois massif, contreplaqué de bouleau), agencement revu et coordination complète. Le créneau de Dilamco.",
            },
            {
              title: "Ce qui fait varier le prix",
              description:
                "Dimensions de la pièce, déplacement de plomberie ou d'électricité, électroménagers intégrés, niveau de finition et complexité de la coordination.",
            },
          ],
          columns: "1",
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
            "Points techniques qui changent la qualité d'une cuisine rénovée",
          intro:
            "Le rendu final dépend d'une série de décisions techniques qui semblent secondaires sur papier mais deviennent critiques au chantier.",
          columns: "2",
          items: [
            {
              title: "Structure des armoires",
              description:
                "La qualité se joue aussi dans les composantes invisibles.",
              icon: "package2",
              bullets: [
                "Bois massif de bouleau pour les tiroirs.",
                "Contreplaqué de bouleau pour mieux supporter la charge.",
                "Choix plus crédibles pour un usage quotidien intensif.",
              ],
            },
            {
              title: "Intégration des appareils",
              description:
                "Une cuisine se lit mal quand les équipements sont traités trop tard.",
              icon: "doorOpen",
              bullets: [
                "Réfrigérateur, hotte et lave-vaisselle influencés par le design.",
                "Dégagements et alignements validés en amont.",
                "Moins de compromis visibles en fin de chantier.",
              ],
            },
            {
              title: "Ergonomie et circulation",
              description:
                "Le confort quotidien dépend de la façon dont la pièce fonctionne.",
              icon: "slidersHorizontal",
              bullets: [
                "Distances de travail plus logiques.",
                "Îlot et rangement mieux proportionnés à l'espace.",
                "Moins de friction dans l'usage quotidien.",
              ],
            },
            {
              title: "Coordination chantier",
              description:
                "La pose propre dépend d'un chantier préparé correctement.",
              icon: "wrench",
              bullets: [
                "Ordre des étapes mieux cadrées.",
                "Moins de reprises entre fabrication et installation.",
                "Finition plus stable jusqu'à la livraison.",
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
            "Cette page service soutient surtout votre projet de cuisine sur mesure",
          intro:
            "La rénovation de cuisine rassure sur la méthode et la coordination. Pour la vision complète du résultat, des matériaux et des réalisations, la page pilier cuisine reste la destination principale.",
          items: [
            {
              title: "Cuisine sur mesure",
              href: "/espaces/cuisine",
              description:
                "La page pilier principale pour voir le niveau de finition, les matériaux, les projets et le positionnement global.",
              image: {
                src: "/images/generated/spaces/space-cuisine-hero-01.webp",
                alt: "Cuisine sur mesure haut de gamme",
              },
              badges: ["Page pilier", "Cuisine"],
              footerCtaLabel: "Voir la page cuisine",
            },
            {
              title: "Service de fabrication",
              href: "/services/fabrication",
              description:
                "Pour comprendre ce qui rend les armoires plus stables, plus constantes et plus crédibles à long terme.",
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
                "Pour voir comment la pose, les ajustements sur place et les alignements protègent le rendu final.",
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
          heading: "Ce qu'une rénovation de cuisine bien cadrée doit produire",
          description:
            "La preuve de compétence ne tient pas seulement dans une belle photo. Elle se voit dans la fluidité d'usage, la lecture des alignements et la façon dont les décisions techniques disparaissent au profit d'une cuisine simple à vivre.",
          cards: [
            {
              title: "Chantier plus lisible",
              description:
                "Moins de flottement sur la séquence, les responsabilités et les ajustements de dernière minute.",
            },
            {
              title: "Cuisine plus cohérente",
              description:
                "Îlot, rangement, appareils et circulation fonctionnent comme un ensemble au lieu de se concurrencer.",
            },
            {
              title: "Finition plus nette",
              description:
                "Alignements, joints et intégration des équipements soutiennent une perception plus premium.",
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
          heading: "FAQ - rénovation de cuisine",
          intro:
            "Réponses claires sur délais, condo, coordination et portée du projet.",
          items: [
            {
              q: "Quel est le prix moyen d'une rénovation de cuisine au Québec?",
              a: "En 2026, une rénovation de cuisine complète se situe souvent autour de 35 000 $ à 40 000 $. L'entrée de gamme (rafraîchissement) démarre vers 20 000 $, tandis qu'une cuisine sur mesure haut de gamme dépasse fréquemment 45 000 $. Le prix dépend surtout de l'agencement, des matériaux et de la coordination.",
            },
            {
              q: "Par où commencer une rénovation de cuisine?",
              a: "Par le cadrage : clarifier la portée, les contraintes techniques, le budget et la séquence des travaux. C'est cette étape qui évite les reprises et les mauvaises surprises. Viennent ensuite le design, la fabrication des armoires sur mesure, la coordination et l'installation.",
            },
            {
              q: "Combien de temps dure une rénovation de cuisine?",
              a: "La durée varie selon la portée, les contraintes du lieu et la coordination requise.",
            },
            {
              q: "Travaillez-vous avec d'autres intervenants sur le chantier?",
              a: "Oui, lorsque la portée le demande. L'objectif est justement d'ordonner les interventions pour éviter les conflits et protéger la qualité du résultat final.",
            },
            {
              q: "Est-ce possible en condo?",
              a: "Oui. L'accès, les horaires et certaines contraintes techniques doivent être cadrés tôt.",
            },
            {
              q: "Dois-je quitter le logement pendant les travaux?",
              a: "Cela dépend de la portée. Pour une rénovation complète, certaines périodes peuvent être moins confortables.",
            },
            {
              q: "Puis-je faire une rénovation partielle?",
              a: "Oui. Certains projets visent surtout l'armoire, l'îlot et l'installation, d'autres incluent plus de travaux.",
            },
            {
              q: "Où voir l'approche complète pour une cuisine sur mesure?",
              a: "La page rénovation de cuisine explique surtout la logique de coordination et de chantier. Pour la vision complète du produit, des matériaux et des réalisations, la page cuisine sur mesure est la référence principale.",
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
          heading:
            "Vous voulez cadrer une rénovation de cuisine correctement ?",
          intro:
            "On vous aide à définir la bonne séquence et le bon niveau de coordination, puis à vous rediriger vers la page pilier cuisine pour la vision complète du projet.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir la page cuisine",
              href: "/espaces/cuisine",
              variant: "ghost",
            },
          ],
          note: "Cuisine sur mesure, îlot, rangement et rénovation intégrée",
        },
      },
    },
  ],
};
