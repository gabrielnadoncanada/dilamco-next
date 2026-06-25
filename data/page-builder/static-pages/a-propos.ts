import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const page: PageTemplateData = {
  template: "default",
  metadata: {
    title: "À propos, fabricant sur mesure à Montréal",
    description:
      "À propos de Dilamco : sur mesure, fabrication contrôlée, installation soignée et vision long terme pour des projets durables.",
    path: "/a-propos",
    ogAlt: "À propos de Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "À propos", url: SITE.url + "/a-propos" },
  ],
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Dilamco - À propos",
          heading: "Une entreprise de sur mesure construite pour mieux contrôler l'exécution",
          description:
            "Dilamco ne se positionne pas comme un simple vendeur d'armoires. Notre approche relie design, fabrication, installation et coordination quand le projet l'exige, pour obtenir un résultat plus cohérent et plus durable.",
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
          badges: ["Sur mesure", "Exécution", "Durabilité", "clé en main"],
          image: {
            src: "/images/generated/spaces/espaces-hero-overview-01.webp",
            alt: "Équipe et approche Dilamco pour les projets sur mesure",
          },
          caption:
            "Notre valeur ne vient pas d'un discours premium. Elle vient du niveau de contrôle sur le résultat final.",
        },
      },
    },
    {
      id: "structural-advantage",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "L'avantage structurel que nous cherchons à protéger",
          description:
            "Une entreprise de sur mesure solide ne dépend pas seulement du style. Elle dépend de sa capacité à garder le contrôle entre les décisions de design, la qualité de fabrication, le choix des matériaux et la pose sur le terrain.",
          cards: [
            {
              title: "Moins de fragmentation",
              description:
                "Moins il y a de ruptures entre conception, production et installation, plus le projet reste lisible et exécutable.",
            },
            {
              title: "Qualité plus tangible",
              description:
                "La valeur se voit dans les détails : structure, quincaillerie, finitions, ajustements et constance d'exécution.",
            },
            {
              title: "Responsabilité plus claire",
              description:
                "Le client avance mieux quand il sait qui cadre les décisions et qui porte le résultat jusqu'à la fin.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "history",
      frame: { surface: "muted" },
      content: {
        type: "process",
        variant: "split-cards",
        props: {
          heading: "Comment l'entreprise s'est structurée",
          description:
            "Notre trajectoire a suivi une logique simple : réduire les faiblesses qui nuisent à la qualité finale et renforcer les étapes qui stabilisent vraiment un projet.",
          steps: [
            {
              number: "1",
              title: "Comprendre les contraintes réelles",
              description:
                "Les projets sur mesure demandent plus qu'un bon visuel. Ils demandent une lecture sérieuse de l'espace, de l'usage et des limites du chantier.",
            },
            {
              number: "2",
              title: "Mieux relier design et exécution",
              description:
                "La structure de l'entreprise s'est construite autour d'une meilleure continuité entre les choix en amont et la réalité de fabrication et d'installation.",
            },
            {
              number: "3",
              title: "Standardiser sans banaliser",
              description:
                "L'objectif n'a jamais été de faire du standard. L'objectif est d'avoir une méthode reproductible pour livrer du vrai sur mesure avec plus de constance.",
            },
            {
              number: "4",
              title: "Viser une relation long terme",
              description:
                "Nous préférons une croissance basée sur la réputation, la qualité perçue et des projets bien exécutés plutôt que sur le volume à tout prix.",
            },
          ],
          actions: [
            {
              label: "Voir notre processus",
              href: "/processus",
              variant: "ghost",
            },
            {
              label: "Voir les services",
              href: "/services",
              variant: "ghost",
            },
          ],
        },
      },
    },
    {
      id: "principles",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "Les principes qui guident nos décisions",
          intro:
            "Le bon projet n'est pas seulement beau au moment de la livraison. Il doit rester cohérent dans le temps, dans l'usage et dans la qualité perçue.",
          columns: "2",
          items: [
            {
              title: "Usage avant effet",
              description:
                "Le design sert d'abord à rendre l'espace plus juste, plus fluide et plus durable.",
              icon: "doorOpen",
              bullets: [
                "Ergonomie pensée selon le quotidien",
                "Configurations adaptées à l'espace réel",
                "Choix qui servent la fonction avant la mode",
              ],
            },
            {
              title: "Durabilité concrète",
              description:
                "Le premium doit se vérifier dans les composants et dans la manière de les intégrer.",
              icon: "package2",
              bullets: [
                "Matériaux choisis selon l'usage",
                "Quincaillerie et détails cohérents",
                "Moins de compromis invisibles",
              ],
            },
            {
              title: "Exécution maîtrisée",
              description:
                "La qualité finale dépend autant de la séquence que du produit lui-même.",
              icon: "wrench",
              bullets: [
                "Validation avant production",
                "Fabrication mieux cadrée",
                "Installation et ajustements précis",
              ],
            },
            {
              title: "Vision long terme",
              description:
                "On cherche à bâtir une marque qui tient par la répétition d'un bon standard, pas par des promesses vagues.",
              icon: "slidersHorizontal",
              bullets: [
                "Positionnement premium assumé",
                "Croissance basée sur la confiance",
                "Réputation soutenue par le résultat",
              ],
            },
          ],
        },
      },
    },
    {
      id: "where-to-go-next",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Explorer l'entreprise par angle",
          intro:
            "Selon ce que vous cherchez à valider, vous pouvez approfondir la méthode, les services, les matériaux ou les réalisations.",
          columns: "2",
          items: [
            {
              title: "Notre processus",
              description:
                "Pour voir comment un projet avance du cadrage à l'installation.",
              href: "/processus",
              badges: ["Méthode", "Étapes"],
              ctaLabel: "Voir le processus",
            },
            {
              title: "Nos services",
              description:
                "Pour comprendre le rôle du design, de la fabrication, de l'installation et de la rénovation.",
              href: "/services",
              badges: ["Design", "Installation"],
              ctaLabel: "Voir les services",
            },
            {
              title: "Nos matériaux",
              description:
                "Pour comprendre les choix techniques qui soutiennent la durabilité et la finition.",
              href: "/materiaux",
              badges: ["Panneaux", "Quincaillerie"],
              ctaLabel: "Voir les matériaux",
            },
            {
              title: "Nos projets",
              description:
                "Pour voir des exemples concrets du niveau d'exécution recherché.",
              href: "/projets",
              badges: ["Références", "Réalisations"],
              ctaLabel: "Voir les projets",
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
          heading: "Vous voulez valider si Dilamco est le bon fit pour votre projet ?",
          intro:
            "Le plus simple est de cadrer la portée, les priorités et le niveau d'exigence attendu. On vous dira clairement comment on peut intervenir.",
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
          note: "Montréal, Laval et Rive-Sud",
        },
      },
    },
  ],
};
