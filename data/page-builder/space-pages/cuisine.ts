import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const cuisinePage: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Armoires de cuisine sur mesure à Pierrefonds",
    description:
      "Armoires de cuisine sur mesure à Pierrefonds et dans le Grand Montréal, conçues, fournies et posées par Dilamco, entrepreneur général licencié RBQ.",
    path: "/espaces/cuisine",
    ogAlt: "Cuisine sur mesure et armoires de cuisine Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Cuisine sur mesure", url: SITE.url + "/espaces/cuisine" },
  ],
  service: {
    name: "Cuisine sur mesure et armoires de cuisine",
    description:
      "Conception, fabrication contrôlée et installation de cuisines sur mesure et d'armoires de cuisine sur mesure haut de gamme à Pierrefonds-Roxboro, dans l'Ouest-de-l'Île, à Montréal, Laval et dans le Grand Montréal.",
    url: SITE.url + "/espaces/cuisine",
    serviceType: "Cuisine sur mesure",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "centered",
        props: {
          badges: ["Sur mesure", "Division armoires"],
          heading:
            "Armoires de cuisine sur mesure, posées par votre entrepreneur général",
          description:
            "On mesure la pièce après la démolition, on commande les armoires, puis on les pose.",
          actions: [
            {
              label: "Obtenir une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos cuisines",
              href: "/projets/cuisine",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/realisations/cuisine-shaker-en-u-dosseret-metro-01.webp",
            alt: "Cuisine en U avec armoires shaker blanches et dosseret métro",
          },
          caption: "Armoires shaker, dosseret métro",
        },
      },
    },
    {
      id: "galerie",
      content: {
        type: "grid",
        variant: "bento",
        props: {
          heading: "Des cuisines qu'on a livrées",
          tiles: [
            {
              kind: "image",
              span: "wide",
              image: {
                src: "/images/realisations/cuisine-aire-ouverte-ilot-colonnes-01.webp",
                alt: "Cuisine à aire ouverte avec îlot et colonnes pleine hauteur",
              },
              caption: "Îlot et colonnes, aire ouverte",
            },
            {
              kind: "stat",
              value: "30 000 $",
              label: "Le prix de départ d'une cuisine complète",
            },
            {
              kind: "image",
              span: "tall",
              image: {
                src: "/images/realisations/cuisine-blanche-ilot-quartz-01.webp",
                alt: "Cuisine blanche avec îlot et comptoir de quartz",
              },
              caption: "Comptoir de quartz, îlot blanc",
            },
            {
              kind: "quote",
              quote:
                "Excellent contracteur. Ils ont fait mes planchers et autres projets et nous sommes très satisfaites. Je recommande 100%.",
              author: "Mélina Desbiens, avis Google",
            },
            {
              kind: "image",
              image: {
                src: "/images/realisations/cuisine-armoires-vitrees-dosseret-01.webp",
                alt: "Armoires de cuisine vitrées et dosseret de céramique",
              },
              caption: "Armoires vitrées et dosseret",
            },
            {
              kind: "image",
              image: {
                src: "/images/realisations/ilot-bleu-marine-interieur-bouleau-01.webp",
                alt: "Îlot bleu marine avec tiroirs à intérieur de bouleau",
              },
              caption: "Îlot marine, intérieur bouleau",
            },
          ],
        },
      },
    },
    {
      id: "en-bref",
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "La cuisine en bref",
          intro:
            "Les questions que les propriétaires nous posent avant de nous rencontrer.",
          rows: [
            {
              label: "Combien de temps",
              value: "Comptez 9 à 15 semaines entre le plan signé et la pose.",
            },
            {
              label: "Prix indicatif",
              value:
                "Une cuisine complète se situe entre 30 000 $ et 65 000 $, confirmé après le relevé.",
            },
            {
              label: "Matériaux",
              value:
                "Les caissons sont en contreplaqué de bouleau et les tiroirs en bouleau massif.",
            },
            {
              label: "Quincaillerie",
              value:
                "Les tiroirs coulissent sur des rails cachés et les portes ferment en douceur.",
            },
            {
              label: "Qui installe",
              value:
                "Notre équipe, une fois la plomberie refaite et le plancher posé.",
            },
            {
              label: "Garantie",
              value:
                "La durée est écrite au contrat et nous revenons ajuster les portes au besoin.",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-cuisine-hero-01.webp",
            alt: "Cuisine sur mesure haut de gamme avec îlot central",
          },
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
              q: "Quand prenez-vous les mesures de la cuisine ?",
              a: "Après la démolition, quand les murs sont à leur position définitive. C'est ce qui évite les espaces perdus le long des colonnes et sous le plafond.",
            },
            {
              q: "Peut-on garder la cuisine utilisable pendant les travaux ?",
              a: "Une station temporaire, évier et réfrigérateur, est installée ailleurs dans la maison. La pièce reste fermée le temps de la démolition, de la plomberie et du plancher.",
            },
            {
              q: "Qui fournit le comptoir et le dosseret ?",
              a: "Nous. On prend les mesures du comptoir une fois les caissons fixés, puis on pose le dosseret. Tout est chiffré dans la même soumission que les armoires.",
            },
            {
              q: "Gérez-vous l'électricité et la ventilation de la hotte ?",
              a: "Oui. Circuits dédiés, prises d'îlot et sortie de hotte sont planifiés au plan de cuisine et exécutés par nos corps de métier avant la livraison des armoires.",
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
          heading: "Parlez-nous de votre projet de cuisine",
          intro:
            "Estimation gratuite, relevé sur place et soumission détaillée avant toute commande.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos cuisines",
              href: "/projets/cuisine",
              variant: "ghost",
            },
          ],
          note: "Licence RBQ 8306-0806-27 · Ouest-de-l'Île, Montréal, Laval, Rive-Sud",
        },
      },
    },
  ],
};
