import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const couleursPage: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Couleurs et finis d'armoires sur mesure",
    description:
      "Couleurs et finis pour cuisines, vanités et armoires sur mesure : choisir selon la lumière, l'usage et les matériaux.",
    path: "/materiaux/couleurs",
    ogAlt: "Couleurs et finis - Matériaux sur mesure",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux" },
    { name: "Couleurs et finis", url: SITE.url + "/materiaux/couleurs" },
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
          heading: "Choisir une couleur qui tient à l'usage",
          description:
            "La teinte se décide sur place, à la lumière réelle de la pièce. Le niveau de lustre, lui, décide de l'entretien quotidien.",
          actions: [
            {
              label: "Parler design et finitions",
              href: "/services/design",
              variant: "primary",
            },
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "ghost",
            },
          ],
          badges: ["Lumière", "Lustre", "Entretien"],
          image: {
            src: "/images/generated/materials/material-finish-samples-01.webp",
            alt: "Choix de couleurs et finis pour projet sur mesure",
          },
          caption: "Échantillons vus dans votre pièce",
        },
      },
    },
    {
      id: "method",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Quatre choses à regarder",
          description:
            "Un échantillon change d'aspect selon l'orientation de la pièce, le support et le lustre. On valide les trois avant de commander.",
          cards: [
            {
              title: "Lumière de la pièce",
              description:
                "Une façade nord tire au gris, une façade sud réchauffe les teintes.",
            },
            {
              title: "Support",
              description:
                "Le même ton ne rend pas pareil sur MDF, mélamine ou bois.",
            },
            {
              title: "Lustre",
              description:
                "Mat, satiné ou brillant changent la couleur perçue et l'entretien.",
            },
            {
              title: "Surfaces voisines",
              description:
                "Comptoir, dosseret et plancher se valident ensemble, pas séparément.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "care",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Trois lustres, trois comportements",
          intro:
            "Le lustre pèse plus lourd que la couleur sur le travail d'entretien.",
          items: [
            {
              title: "Mat",
              description: "Feutré et contemporain, il marque plus vite.",
            },
            {
              title: "Satiné",
              description: "Le compromis courant en cuisine, facile à nettoyer.",
            },
            {
              title: "Brillant",
              description: "Il renvoie la lumière et montre chaque trace.",
            },
          ],
          actions: [
            {
              label: "Voir la quincaillerie",
              href: "/materiaux/quincaillerie",
              variant: "ghost",
            },
            {
              label: "Voir les matériaux",
              href: "/materiaux",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/materials/material-color-finish-lifestyle-01.webp",
            alt: "Choix de finis et échantillons de couleurs",
          },
          cardTitle: "Erreur fréquente",
          cardDescription:
            "Valider une couleur sur un écran ou sous l'éclairage d'un magasin.",
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
              q: "Mat ou satiné ?",
              a: "Satiné en cuisine, dans presque tous les cas : il renvoie un peu de lumière, masque les traces de doigts et se nettoie sans produit particulier. Le mat convient mieux aux pièces peu sollicitées.",
            },
            {
              q: "Les couleurs foncées sont-elles risquées ?",
              a: "Non, à condition d'avoir de la lumière naturelle ou un bon éclairage sous les armoires. Un fini satiné limite aussi les traces, plus visibles sur les teintes foncées.",
            },
            {
              q: "Peut-on changer la couleur plus tard ?",
              a: "Une porte peinte se repeint. Une porte mélamine ou plaquée se remplace. C'est un point à trancher avant de commander, pas après.",
            },
            {
              q: "Comment éviter un rendu daté ?",
              a: "Teintes neutres sur les grandes surfaces, couleur forte sur ce qui se change vite : îlot, dosseret, poignées. Vous rafraîchissez la pièce sans refaire les armoires.",
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
          heading: "Besoin d'aide pour arrêter la palette ?",
          intro:
            "On apporte les échantillons chez vous et on valide à la lumière de la pièce.",
          actions: [
            {
              label: "Parler design",
              href: "/services/design",
              variant: "primary",
            },
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
