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
            "Charnières, coulisses et amortisseurs encaissent des milliers de cycles par année. C'est la pièce qui lâche en premier quand elle est bas de gamme.",
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
            alt: "Cuisine sur mesure mettant en valeur la qualité de la quincaillerie",
          },
          caption: "Le détail qu'on ne voit jamais",
        },
      },
    },
    {
      id: "types",
      frame: { surface: "muted" },
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "Ce qu'on spécifie",
          columns: "2",
          items: [
            {
              title: "Charnières",
              description:
                "Elles portent la porte et gardent son alignement dans le temps.",
              icon: "doorOpen",
              bullets: [
                "Réglage sur trois axes",
                "Fermeture amortie intégrée",
                "Ouverture jusqu'à 155 degrés",
              ],
            },
            {
              title: "Coulisses de tiroir",
              description:
                "Elles supportent la charge et donnent accès au fond du tiroir.",
              icon: "slidersHorizontal",
              bullets: [
                "Extension complète",
                "Charge de 35 à 60 kg",
                "Sous le tiroir, invisibles",
              ],
            },
            {
              title: "Systèmes de tiroir",
              description:
                "Caisson et mécanisme forment un ensemble, pas deux pièces séparées.",
              icon: "package2",
              bullets: [
                "Côtés en métal ou en bois",
                "Séparateurs ajustables",
                "Tiroir dans tiroir",
              ],
            },
            {
              title: "Mécanismes spéciaux",
              description:
                "Pour les armoires hautes, les angles et les façades sans poignée.",
              icon: "wrench",
              bullets: [
                "Relevables et pousse-lâche",
                "Plateaux tournants d'angle",
                "Garde-manger coulissants",
              ],
            },
          ],
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
          heading: "Questions fréquentes",
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
              q: "Est-ce compris dans votre soumission ?",
              a: "Oui. Le modèle de charnière et de coulisse est inscrit dans la soumission détaillée, avec le reste des matériaux, avant la signature du contrat.",
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
          heading: "Parlons de votre projet",
          intro:
            "On cadre les matériaux, la quincaillerie et l'échéancier dans une seule soumission.",
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
