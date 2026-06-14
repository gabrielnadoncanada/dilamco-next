import type { PageTemplateData } from "@/features/page-builder";
import { serviceJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";

export const page: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Processus",
    description:
      "Processus Dilamco : cadrage, design, fabrication, installation et, selon le projet, coordination de rénovation clé en main.",
    path: "/processus",
    ogAlt: "Processus Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Processus", url: SITE.url + "/processus" },
  ],
  extraJsonLd: [
    serviceJsonLd({
      name: "Processus Dilamco",
      description:
        "Processus structuré pour projets sur mesure : cadrage, design, sélections, fabrication, installation et coordination selon la portée.",
      url: SITE.url + "/processus",
      serviceType: "Processus de projet sur mesure",
      areaServed: ["Montréal", "Laval", "Rive-Sud", "Québec"],
    }),
  ],
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Dilamco - Processus",
          heading: "Un processus clair, du cadrage à l'installation",
          description:
            "Chaque projet avance avec une séquence définie pour réduire les zones grises, valider les décisions au bon moment et protéger la qualité finale.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "default",
            },
            {
              label: "Voir nos services",
              href: "/services",
              variant: "outline",
            },
          ],
          badges: ["Design", "Fabrication", "Installation", "Coordination"],
          image: {
            src: "/images/generated/spaces/espaces-hero-overview-01.webp",
            alt: "Processus Dilamco pour un projet sur mesure",
          },
          caption:
            "Une seule logique de travail pour mieux cadrer les décisions et l'exécution",
        },
      },
    },
    {
      id: "benefits",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "Ce que le processus protège concrètement",
          intro:
            "Le but n'est pas d'ajouter des étapes. Le but est de garder le projet lisible, exécutable et cohérent du début à la fin.",
          columns: "2",
          items: [
            {
              title: "Portée plus claire",
              description:
                "On clarifie ce qui est inclus, ce qui doit être validé et ce qui peut ralentir le projet.",
              icon: "slidersHorizontal",
              bullets: [
                "Contraintes identifiées plus tôt",
                "Priorités mieux classées",
                "Moins de zones grises en cours de route",
              ],
            },
            {
              title: "Choix mieux verrouillés",
              description:
                "Les décisions structurantes se prennent avant la fabrication, pas en réaction.",
              icon: "doorOpen",
              bullets: [
                "Plans et configuration validés",
                "Matériaux et finis confirmés",
                "Arbitrages faits avant production",
              ],
            },
            {
              title: "Fabrication plus stable",
              description:
                "Une production bien lancée dépend d'informations stables et d'un cadrage propre.",
              icon: "package2",
              bullets: [
                "Moins de reprises évitables",
                "Exécution plus prévisible",
                "Meilleure cohérence entre pièces",
              ],
            },
            {
              title: "Installation mieux contrôlée",
              description:
                "La pose se passe mieux quand la séquence du projet a été préparée correctement.",
              icon: "wrench",
              bullets: [
                "Coordination plus nette sur place",
                "Ajustements plus précis",
                "Inspection finale plus simple",
              ],
            },
          ],
        },
      },
    },
    {
      id: "steps",
      frame: { surface: "muted" },
      content: {
        type: "process",
        variant: "split-cards",
        props: {
          heading: "Les grandes étapes d'un projet Dilamco",
          description:
            "La portée varie selon le projet, mais la logique reste la même : cadrer, valider, produire, installer.",
          steps: [
            {
              number: "1",
              title: "Cadrage initial",
              description:
                "On comprend l'espace, la portée, les contraintes du site, le niveau d'exigence et l'échéance visée.",
            },
            {
              number: "2",
              title: "Design et configuration",
              description:
                "On structure l'implantation, les fonctions, les dimensions et les choix qui influencent le résultat final.",
            },
            {
              number: "3",
              title: "Sélection des matériaux",
              description:
                "On confirme panneaux, quincaillerie, finis et détails selon l'usage réel et la durabilité recherchée.",
            },
            {
              number: "4",
              title: "Validation avant production",
              description:
                "Les décisions essentielles sont fermées avant de lancer la fabrication pour réduire les reprises.",
            },
            {
              number: "5",
              title: "Fabrication",
              description:
                "La production sur mesure démarre avec une base stable, ce qui protège la constance et la précision.",
            },
            {
              number: "6",
              title: "Installation et finition",
              description:
                "La pose, les ajustements et l'inspection finale servent à livrer un résultat propre et cohérent.",
            },
          ],
          actions: [
            {
              label: "Voir le service design",
              href: "/services/design",
              variant: "outline",
            },
            {
              label: "Voir l'installation",
              href: "/services/installation",
              variant: "outline",
            },
          ],
        },
      },
    },
    {
      id: "inputs",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Ce qu'il faut pour avancer plus vite",
          intro:
            "Un bon départ accélère surtout les validations. Quelques informations simples suffisent pour cadrer la discussion correctement.",
          badges: ["Secteur", "Type d'espace", "Portée", "Priorités"],
          cardTitle: "Informations utiles dès le premier échange",
          items: [
            "Le type d'espace et la localisation du projet",
            "La portée réelle : design seul, sur mesure, rénovation ou coordination",
            "Les priorités : délai, rangement, durabilité, esthétique ou budget",
            "Des photos, mesures de base ou inspirations si disponibles",
            "Les contraintes du bâtiment ou du chantier quand elles existent",
          ],
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "default",
            },
            {
              label: "Voir nos projets",
              href: "/projets",
              variant: "outline",
            },
          ],
        },
      },
    },
    {
      id: "resources",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Pages utiles pour approfondir",
          intro:
            "Selon l'étape où vous en êtes, ces pages aident à mieux comprendre la méthode, les services et les choix techniques.",
          columns: "3",
          items: [
            {
              title: "Service design",
              description:
                "Pour comprendre comment on structure les choix avant fabrication.",
              href: "/services/design",
              badges: ["Plans", "Configuration"],
              ctaLabel: "Voir le design",
            },
            {
              title: "Service fabrication",
              description:
                "Pour voir comment la production s'insère dans le projet global.",
              href: "/services/fabrication",
              badges: ["Production", "Sur mesure"],
              ctaLabel: "Voir la fabrication",
            },
            {
              title: "Service installation",
              description:
                "Pour comprendre la pose, les ajustements et la finition sur place.",
              href: "/services/installation",
              badges: ["Pose", "Ajustements"],
              ctaLabel: "Voir l'installation",
            },
            {
              title: "Rénovation clé en main",
              description:
                "Quand le projet demande de coordonner plus que les armoires.",
              href: "/services/renovation",
              badges: ["Coordination", "Travaux connexes"],
              ctaLabel: "Voir la rénovation",
            },
            {
              title: "Matériaux",
              description:
                "Pour comparer les options et comprendre ce qui change vraiment la durabilité.",
              href: "/materiaux",
              badges: ["Panneaux", "Quincaillerie"],
              ctaLabel: "Voir les matériaux",
            },
            {
              title: "Projets",
              description:
                "Pour voir des réalisations concrètes et le niveau de finition attendu.",
              href: "/projets",
              badges: ["Références", "Exécution"],
              ctaLabel: "Voir les projets",
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
          heading: "FAQ - processus",
          intro:
            "Réponses rapides aux questions qui reviennent le plus souvent avant de démarrer.",
          items: [
            {
              q: "Tous les projets suivent-ils exactement les mêmes étapes ?",
              a: "La logique reste similaire, mais la portée change selon qu'il s'agit d'un mandat de design, d'un projet sur mesure complet ou d'une rénovation avec coordination.",
            },
            {
              q: "Quand la fabrication commence-t-elle ?",
              a: "Une fois que les décisions structurantes sont validées : configuration, dimensions, matériaux, finis et éléments qui influencent directement la production.",
            },
            {
              q: "Faites-vous aussi l'installation ?",
              a: "Oui. L'installation, les ajustements et l'inspection finale font partie de la logique d'exécution quand le mandat le prévoit.",
            },
            {
              q: "Le processus fonctionne-t-il aussi en condo ou dans des contextes contraints ?",
              a: "Oui. Le processus sert justement à identifier les contraintes d'accès, de calendrier ou de coordination assez tôt pour mieux les intégrer.",
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
          heading: "Besoin de cadrer un projet proprement avant d'avancer ?",
          intro:
            "On vous aide à clarifier la portée, les priorités et la meilleure séquence pour lancer un projet sur mesure avec moins d'imprévus.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "default",
            },
            {
              label: "Voir nos services",
              href: "/services",
              variant: "outline",
            },
          ],
          note: "Montréal, Laval et Rive-Sud",
        },
      },
    },
  ],
};
