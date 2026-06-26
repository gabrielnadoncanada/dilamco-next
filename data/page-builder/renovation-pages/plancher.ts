import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationPlancherPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Rénovation de plancher à Montréal",
    description:
      "Rénovation de plancher : séquence de chantier, niveaux, transitions et intégration propre dans un projet plus large.",
    path: "/services/renovation/plancher",
    ogAlt: "Rénovation de plancher Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Rénovation", url: SITE.url + "/services/renovation" },
    {
      name: "Rénovation de plancher",
      url: SITE.url + "/services/renovation/plancher",
    },
  ],
  service: {
    name: "Rénovation de plancher",
    description:
      "Planification, coordination et finition soignée quand le plancher s'intègre à une rénovation plus large avec armoires, installation ou reconfiguration.",
    url: SITE.url + "/services/renovation/plancher",
    serviceType: "Rénovation de plancher",
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
            "Rénovation de plancher, mieux gérer niveaux, transitions et séquence de chantier",
          description:
            "Le plancher influence les niveaux, les transitions, l'installation des armoires et la qualité perçue du projet. Il doit être pensé dans la séquence globale du chantier, pas traité comme une décision isolée.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir la rénovation clé en main",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          badges: ["Transitions", "Niveaux", "Séquence"],
          image: {
            src: "/images/generated/renovation/renovation-plancher-hero-01.webp",
            alt: "Rénovation de plancher",
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
            "Pourquoi le plancher crée souvent des problèmes à retardement",
          description:
            "Le plancher semble simple tant qu'on ne le relie pas au reste du chantier. En réalité, il influence les hauteurs, les transitions, les ajustements sur place et parfois la logique complète d'installation.",
          cards: [
            {
              title: "Niveaux et planéité",
              description:
                "Les variations du support se répercutent directement sur la pose, les alignements et le rendu final.",
            },
            {
              title: "Mauvais ordre des travaux",
              description:
                "Quand le plancher est traité trop tard ou trop tôt, il force souvent des reprises ou des protections supplémentaires.",
            },
            {
              title: "Raccords visibles",
              description:
                "Les transitions mal pensées entre zones, pièces ou matériaux diminuent vite la perception de qualité.",
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
          heading:
            "Notre approche pour intégrer le plancher sans nuire au reste du projet",
          intro:
            "L'objectif n'est pas seulement de remplacer une surface. Il faut s'assurer que le plancher s'intègre correctement aux armoires, aux niveaux, aux transitions et à la séquence générale du chantier.",
          items: [
            {
              title: "Lecture de l'existant",
              description:
                "On clarifie les niveaux, les irrégularités visibles, les transitions et la relation avec les autres zones du projet.",
            },
            {
              title: "Ordre des étapes",
              description:
                "Le plancher est positionné dans la bonne séquence pour réduire les reprises et protéger la finition.",
            },
            {
              title: "Coordination avec l'installation",
              description:
                "Les armoires, les ajustements sur place et les raccords doivent être pensés ensemble.",
            },
            {
              title: "Contrôle du rendu final",
              description:
                "Les joints, les lignes de transition et la lecture des surfaces doivent rester propres après les travaux.",
            },
          ],
          actions: [
            {
              label: "Voir l'installation",
              href: "/services/installation",
              variant: "ghost",
            },
            {
              label: "Voir la rénovation clé en main",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-plancher-approach-01.webp",
            alt: "Coordination du plancher dans une rénovation",
          },
          cardTitle: "Ce qu'on cherche à éviter",
          cardDescription:
            "Un plancher mal intégré peut obliger des corrections en cascade sur la pose, les niveaux et les transitions alors que le problème venait surtout d'une mauvaise séquence.",
        },
      },
    },
    {
      id: "process",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading:
            "Séquence type pour intégrer un plancher dans une rénovation",
          intro:
            "La logique reste simple: comprendre le support, vérifier les impacts sur les autres éléments, puis exécuter dans le bon ordre.",
          steps: [
            {
              number: "1",
              title: "Analyse",
              description:
                "Lecture du support, des niveaux, des transitions et de la relation avec les autres zones du chantier.",
            },
            {
              number: "2",
              title: "Décision",
              description:
                "Choix du matériau, des raccords et de la séquence selon la portée réelle du projet.",
            },
            {
              number: "3",
              title: "Préparation",
              description:
                "Mise en condition du chantier pour protéger les prochaines étapes et limiter les reprises.",
            },
            {
              number: "4",
              title: "Coordination",
              description:
                "Intégration avec armoires, installation, transitions et ajustements nécessaires.",
            },
            {
              number: "5",
              title: "Finition",
              description:
                "Vérification des joints, des lignes et du rendu final dans l'ensemble de l'espace.",
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
            "Points techniques qui influencent vraiment un projet de plancher",
          intro:
            "Le plancher est rarement un simple choix esthétique. Ce sont les détails techniques autour qui influencent le plus la qualité finale.",
          columns: "2",
          items: [
            {
              title: "Planéité du support",
              description:
                "La base conditionne directement le résultat visuel et fonctionnel.",
              icon: "slidersHorizontal",
              bullets: [
                "Les variations de niveau se répercutent sur l'installation.",
                "Un support mal lu crée des corrections plus tard.",
                "Le rendu final dépend souvent de ce travail préparatoire.",
              ],
            },
            {
              title: "Transitions entre zones",
              description:
                "Les raccords visibles comptent autant que la surface elle-même.",
              icon: "doorOpen",
              bullets: [
                "Jonctions propres entre pièces ou matériaux.",
                "Transitions pensées selon circulation et hauteur.",
                "Moins d'effets de seuil mal résolus.",
              ],
            },
            {
              title: "Relation avec les armoires",
              description:
                "Le plancher et le mobilier influencent mutuellement leur pose.",
              icon: "package2",
              bullets: [
                "Impact direct sur alignements et hauteurs.",
                "Besoin de séquence claire avec installation.",
                "Moins de reprises sur joints et ajustements.",
              ],
            },
            {
              title: "Exécution chantier",
              description:
                "La qualité du rendu dépend aussi de l'ordre des interventions.",
              icon: "wrench",
              bullets: [
                "Protection des surfaces au bon moment.",
                "Moins de corrections de fin de chantier.",
                "Finition plus nette dans l'ensemble du projet.",
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
          heading: "Le plancher s'intègre surtout à un projet plus large",
          intro:
            "Cette page service sert à expliquer la logique de coordination. Dans la plupart des cas, le plancher soutient surtout un projet de cuisine, de salle de bain ou de rénovation clé en main plus globale.",
          items: [
            {
              title: "Rénovation clé en main",
              href: "/services/renovation",
              description:
                "La page principale pour comprendre comment séquence, coordination et travaux connexes s'alignent dans un projet plus large.",
              image: {
                src: "/images/generated/services/service-renovation-hero-01.webp",
                alt: "Rénovation clé en main mieux coordonnée",
              },
              badges: ["Page principale", "Coordination"],
              footerCtaLabel: "Voir rénovation",
            },
            {
              title: "Cuisine sur mesure",
              href: "/espaces/cuisine",
              description:
                "Quand le plancher influence les niveaux, l'îlot, les armoires et la lecture générale de la cuisine.",
              image: {
                src: "/images/generated/spaces/space-cuisine-hero-01.webp",
                alt: "Cuisine sur mesure avec intégration propre du plancher",
              },
              badges: ["Cuisine", "Niveaux"],
              footerCtaLabel: "Voir la page cuisine",
            },
            {
              title: "Salle de bain sur mesure",
              href: "/espaces/salle-de-bain",
              description:
                "Quand les transitions, l'humidité et la finition du sol doivent soutenir le reste de la pièce sans faiblesse visible.",
              image: {
                src: "/images/generated/spaces/space-bath-hero-01.webp",
                alt: "Salle de bain sur mesure avec finition de plancher propre",
              },
              badges: ["Salle de bain", "Finition"],
              footerCtaLabel: "Voir la page salle de bain",
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
          heading: "Ce qu'un plancher bien intégré doit apporter au projet",
          description:
            "La preuve de compétence ne tient pas seulement dans la surface choisie. Elle se voit dans les niveaux, les transitions et la façon dont le plancher soutient le reste de l'aménagement sans attirer l'attention pour les mauvaises raisons.",
          cards: [
            {
              title: "Lecture plus propre",
              description:
                "Les lignes et raccords restent discrets au lieu de casser la cohérence de l'espace.",
            },
            {
              title: "Installation plus stable",
              description:
                "Les autres éléments du projet s'ajustent mieux quand le support et la séquence sont bien cadrés.",
            },
            {
              title: "Finition plus crédible",
              description:
                "Le résultat final paraît mieux maîtrisé parce que les détails techniques ne ressortent pas.",
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
          heading: "FAQ - rénovation de plancher",
          intro:
            "Réponses claires sur séquence, niveaux, condo et intégration au reste du chantier.",
          items: [
            {
              q: "Est-ce que je peux refaire uniquement le plancher?",
              a: "Oui, mais dès qu'il y a des armoires ou une rénovation plus large, la coordination devient déterminante.",
            },
            {
              q: "Dans quel ordre faut-il faire les travaux?",
              a: "L'ordre dépend de la portée, mais l'objectif reste d'éviter les reprises et protéger le résultat final.",
            },
            {
              q: "Travaillez-vous avec d'autres intervenants pour ce type de projet?",
              a: "Oui, lorsque le plancher s'intègre à une rénovation plus large. La coordination sert justement à clarifier l'ordre des interventions et à protéger la finition.",
            },
            {
              q: "Est-ce possible en condo?",
              a: "Oui. Les contraintes d'accès, d'horaires et parfois d'acoustique doivent être cadrées au début.",
            },
            {
              q: "Est-ce que le plancher influence l'installation des armoires?",
              a: "Oui. Les niveaux et la planéité influencent directement l'alignement, les joints et les transitions.",
            },
            {
              q: "Où voir l'approche complète pour un projet plus global?",
              a: "La page rénovation de plancher explique surtout la logique de séquence et de coordination. Pour la vision complète d'un projet plus large, la page rénovation clé en main reste la référence principale.",
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
            "Besoin d'intégrer le plancher dans une rénovation plus large ?",
          intro:
            "On vous aide à cadrer la bonne séquence et les bons raccords pour protéger le résultat final, puis à vous orienter vers la page rénovation principale si le projet dépasse le seul plancher.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir la rénovation clé en main",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          note: "Plancher, transitions, niveaux et coordination chantier",
        },
      },
    },
  ],
};
