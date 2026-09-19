import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const quincailleriePage: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Quincaillerie d'armoires haut de gamme",
    description:
      "Découvrez pourquoi la quincaillerie joue un rôle central dans la durabilité, la fluidité et la qualité perçue d'une cuisine ou d'une vanité haut de gamme.",
    path: "/materiaux/quincaillerie",
    ogAlt: "Quincaillerie d'armoires haut de gamme Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux" },
    {
      name: "Quincaillerie",
      url: SITE.url + "/materiaux/quincaillerie",
    },
  ],
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          heading: "Pourquoi la quincaillerie fait durer vos armoires",
          description:
            "Une porte s'ouvre des milliers de fois par année, et c'est la charnière qui lâche en premier.",
          actions: [
            {
              label: "Voir nos cuisines",
              href: "/espaces/cuisine",
              variant: "primary",
            },
            {
              label: "Rénovation clé en main",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/materials/material-hardware-hero-01.webp",
            alt: "Coulisse de tiroir et charnière dans une armoire sur mesure",
          },
          imageSide: "right",
        },
      },
    },
    {
      id: "fiche",
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "Ce qu'on installe sur chaque porte",
          rows: [
            {
              label: "De quoi c'est fait",
              value:
                "De l'acier nickelé, avec un petit piston qui freine la porte à la fermeture.",
            },
            {
              label: "Résiste à l'humidité ?",
              value:
                "Oui, et en salle de bain nous exigeons un fini nickelé qui ne rouille pas.",
            },
            {
              label: "Entretien",
              value:
                "Un tour de tournevis une fois par année, et c'est tout.",
            },
            {
              label: "Usage recommandé",
              value:
                "Sur toutes les portes et tous les tiroirs, sans exception.",
            },
            {
              label: "Prix par rapport aux autres",
              value:
                "Cela représente 5 à 10 pour cent du prix de vos armoires.",
            },
            {
              label: "Garantie",
              value:
                "Les grandes marques européennes la garantissent à vie.",
            },
          ],
          image: {
            src: "/images/generated/materials/material-hardware-detail-01.webp",
            alt: "Détail d'une charnière réglable sur une porte d'armoire",
          },
          note: "Les modèles exacts sont écrits dans la soumission avant la signature.",
        },
      },
    },
    {
      id: "comparison",
      content: {
        type: "comparison",
        variant: "table-basic",
        props: {
          heading: "La différence entre le standard et le haut de gamme",
          columns: ["Quincaillerie standard", "Quincaillerie haut de gamme"],
          rows: [
            {
              label: "Le tiroir sort-il au complet ?",
              values: ["Non, le fond reste caché", "Oui, jusqu'au fond"],
            },
            {
              label: "Comment la porte ferme",
              values: ["Elle claque", "Elle ralentit toute seule"],
            },
            {
              label: "Poids que le tiroir supporte",
              values: ["25 kg", "35 à 60 kg"],
            },
            {
              label: "Peut-on réaligner la porte ?",
              values: ["Dans deux sens", "Dans les trois sens"],
            },
            {
              label: "Garantie de la marque",
              values: ["Limitée dans le temps", "Souvent à vie"],
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
          heading: "Questions sur la quincaillerie",
          items: [
            {
              q: "Extension partielle ou complète ?",
              a: "Une coulisse partielle laisse le fond du tiroir sous le comptoir. L'extension complète sort tout le tiroir, ce qui rend le rangement du fond réellement utilisable.",
            },
            {
              q: "La fermeture amortie vaut-elle le coût ?",
              a: "Oui. Elle supprime le claquement, mais surtout elle évite le choc qui desserre les vis et décale les portes au fil des années.",
            },
            {
              q: "Peut-on changer la quincaillerie plus tard ?",
              a: "Une charnière se remplace facilement. Une coulisse demande que les perçages du caisson correspondent, ce qui est rarement le cas entre deux marques.",
            },
            {
              q: "Une charnière qui grince, on fait quoi ?",
              a: "Une goutte de lubrifiant sec sur l'axe, puis un quart de tour sur la vis de profondeur. Nous le faisons au passage pendant la période de garantie.",
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
          heading: "Choisir votre quincaillerie avant la commande",
          intro:
            "Vous ouvrez et fermez les modèles vous-même, puis on note celui que vous avez choisi.",
          actions: [
            {
              label: "Obtenir une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir tous les matériaux",
              href: "/materiaux",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
