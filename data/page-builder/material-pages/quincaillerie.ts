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
          eyebrow: "Matériaux",
          heading: "La quincaillerie décide de la durée de vos armoires",
          description:
            "Charnières, coulisses et amortisseurs encaissent des milliers de cycles par année. C'est la pièce qui lâche en premier.",
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
          badges: ["Charnières", "Coulisses", "Soft-close"],
          image: {
            src: "/images/generated/materials/material-hardware-hero-01.webp",
            alt: "Coulisse de tiroir et charnière dans une armoire sur mesure",
          },
          caption: "Le détail qu'on ne voit jamais",
          imageSide: "right",
        },
      },
    },
    {
      id: "fiche",
      frame: { surface: "muted" },
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "La quincaillerie en fiche",
          intro: "Ce qu'on spécifie par défaut sur chaque porte et chaque tiroir.",
          rows: [
            {
              label: "Composition",
              value: "Acier embouti nickelé, amortisseur hydraulique intégré",
            },
            {
              label: "Humidité",
              value: "Finition nickelée exigée en salle de bain",
            },
            {
              label: "Entretien",
              value: "Un réglage de charnière par année, rien d'autre",
            },
            {
              label: "Usages recommandés",
              value: "Toutes les portes et tous les tiroirs, sans exception",
            },
            {
              label: "Prix relatif",
              value: "5 à 10 pour cent du coût des armoires",
            },
            {
              label: "Garantie",
              value: "À vie chez les grandes marques européennes",
            },
          ],
          image: {
            src: "/images/generated/materials/material-hardware-detail-01.webp",
            alt: "Détail d'une charnière réglable sur une porte d'armoire",
          },
          note: "Modèles exacts inscrits au devis avant la signature.",
        },
      },
    },
    {
      id: "comparison",
      content: {
        type: "comparison",
        variant: "table-basic",
        props: {
          heading: "Standard ou haut de gamme",
          columns: ["Standard", "Haut de gamme"],
          rows: [
            {
              label: "Extension du tiroir",
              values: ["Partielle", "Complète"],
            },
            {
              label: "Fermeture",
              values: ["Sèche", "Amortie"],
            },
            {
              label: "Charge",
              values: ["25 kg", "35 à 60 kg"],
            },
            {
              label: "Réglage",
              values: ["Deux axes", "Trois axes"],
            },
            {
              label: "Garantie de la marque",
              values: ["Limitée", "Souvent à vie"],
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
          heading: "Choisir la quincaillerie avant la commande",
          intro:
            "On vous fait ouvrir et fermer les modèles, puis on inscrit la référence retenue.",
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
          note: "Ouest-de-l'Île, Montréal, Laval, Rive-Sud",
        },
      },
    },
  ],
};
