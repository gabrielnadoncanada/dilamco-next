import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const page: PageTemplateData = {
  template: "default",
  metadata: {
    title: "A propos",
    description:
      "A propos de Dilamco : sur mesure, fabrication controlee, installation soignee et vision long terme pour des projets durables.",
    path: "/a-propos/",
    ogAlt: "A propos de Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "A propos", url: SITE.url + "/a-propos/" },
  ],
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Dilamco - A propos",
          heading: "Une entreprise de sur mesure construite pour mieux controler l'execution",
          description:
            "Dilamco ne se positionne pas comme un simple vendeur d'armoires. Notre approche relie design, fabrication, installation et coordination quand le projet l'exige, pour obtenir un resultat plus coherent et plus durable.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir nos projets",
              href: "/projets/",
              variant: "outline",
            },
          ],
          badges: ["Sur mesure", "Execution", "Durabilite", "Cle en main"],
          image: {
            src: "/images/generated/spaces/espaces-hero-overview-01.png",
            alt: "Equipe et approche Dilamco pour les projets sur mesure",
          },
          caption:
            "Notre valeur ne vient pas d'un discours premium. Elle vient du niveau de controle sur le resultat final.",
        },
      },
    },
    {
      id: "structural-advantage",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "L'avantage structurel que nous cherchons a proteger",
          description:
            "Une entreprise de sur mesure solide ne depend pas seulement du style. Elle depend de sa capacite a garder le controle entre les decisions de design, la qualite de fabrication, le choix des materiaux et la pose sur le terrain.",
          cards: [
            {
              title: "Moins de fragmentation",
              description:
                "Moins il y a de ruptures entre conception, production et installation, plus le projet reste lisible et executable.",
            },
            {
              title: "Qualite plus tangible",
              description:
                "La valeur se voit dans les details : structure, quincaillerie, finitions, ajustements et constance d'execution.",
            },
            {
              title: "Responsabilite plus claire",
              description:
                "Le client avance mieux quand il sait qui cadre les decisions et qui porte le resultat jusqu'a la fin.",
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
          heading: "Comment l'entreprise s'est structuree",
          description:
            "Notre trajectoire a suivi une logique simple : reduire les faiblesses qui nuisent a la qualite finale et renforcer les etapes qui stabilisent vraiment un projet.",
          steps: [
            {
              number: "1",
              title: "Comprendre les contraintes reelles",
              description:
                "Les projets sur mesure demandent plus qu'un bon visuel. Ils demandent une lecture serieuse de l'espace, de l'usage et des limites du chantier.",
            },
            {
              number: "2",
              title: "Mieux relier design et execution",
              description:
                "La structure de l'entreprise s'est construite autour d'une meilleure continuite entre les choix en amont et la realite de fabrication et d'installation.",
            },
            {
              number: "3",
              title: "Standardiser sans banaliser",
              description:
                "L'objectif n'a jamais ete de faire du standard. L'objectif est d'avoir une methode reproductible pour livrer du vrai sur mesure avec plus de constance.",
            },
            {
              number: "4",
              title: "Viser une relation long terme",
              description:
                "Nous preferons une croissance basee sur la reputation, la qualite percue et des projets bien executes plutot que sur le volume a tout prix.",
            },
          ],
          actions: [
            {
              label: "Voir notre processus",
              href: "/processus/",
              variant: "outline",
            },
            {
              label: "Voir les services",
              href: "/services/",
              variant: "outline",
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
          heading: "Les principes qui guident nos decisions",
          intro:
            "Le bon projet n'est pas seulement beau au moment de la livraison. Il doit rester coherent dans le temps, dans l'usage et dans la qualite percue.",
          columns: "2",
          items: [
            {
              title: "Usage avant effet",
              description:
                "Le design sert d'abord a rendre l'espace plus juste, plus fluide et plus durable.",
              icon: "doorOpen",
              bullets: [
                "Ergonomie pensee selon le quotidien",
                "Configurations adaptees a l'espace reel",
                "Choix qui servent la fonction avant la mode",
              ],
            },
            {
              title: "Durabilite concrete",
              description:
                "Le premium doit se verifier dans les composants et dans la maniere de les integrer.",
              icon: "package2",
              bullets: [
                "Materiaux choisis selon l'usage",
                "Quincaillerie et details coherents",
                "Moins de compromis invisibles",
              ],
            },
            {
              title: "Execution maitrisee",
              description:
                "La qualite finale depend autant de la sequence que du produit lui-meme.",
              icon: "wrench",
              bullets: [
                "Validation avant production",
                "Fabrication mieux cadree",
                "Installation et ajustements precis",
              ],
            },
            {
              title: "Vision long terme",
              description:
                "On cherche a batir une marque qui tient par la repetition d'un bon standard, pas par des promesses vagues.",
              icon: "slidersHorizontal",
              bullets: [
                "Positionnement premium assume",
                "Croissance basee sur la confiance",
                "Reputation soutenue par le resultat",
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
            "Selon ce que vous cherchez a valider, vous pouvez approfondir la methode, les services, les materiaux ou les realisations.",
          columns: "2",
          items: [
            {
              title: "Notre processus",
              description:
                "Pour voir comment un projet avance du cadrage a l'installation.",
              href: "/processus/",
              badges: ["Methode", "Etapes"],
              ctaLabel: "Voir le processus",
            },
            {
              title: "Nos services",
              description:
                "Pour comprendre le role du design, de la fabrication, de l'installation et de la renovation.",
              href: "/services/",
              badges: ["Design", "Installation"],
              ctaLabel: "Voir les services",
            },
            {
              title: "Nos materiaux",
              description:
                "Pour comprendre les choix techniques qui soutiennent la durabilite et la finition.",
              href: "/materiaux/",
              badges: ["Panneaux", "Quincaillerie"],
              ctaLabel: "Voir les materiaux",
            },
            {
              title: "Nos projets",
              description:
                "Pour voir des exemples concrets du niveau d'execution recherche.",
              href: "/projets/",
              badges: ["References", "Realisations"],
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
            "Le plus simple est de cadrer la portee, les priorites et le niveau d'exigence attendu. On vous dira clairement comment on peut intervenir.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir nos projets",
              href: "/projets/",
              variant: "outline",
            },
          ],
          note: "Montreal, Laval et Rive-Sud",
        },
      },
    },
  ],
};
