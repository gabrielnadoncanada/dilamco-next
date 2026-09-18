import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const walkInPage: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Garde-robe et walk-in sur mesure à Montréal",
    description:
      "Garde-robe et walk-in sur mesure à Montréal et Laval : prix, comparaison avec le modulaire, conception et pose par un entrepreneur général licencié.",
    path: "/espaces/walk-in",
    ogAlt: "Garde-robe et walk-in sur mesure Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Garde-robe sur mesure", url: SITE.url + "/espaces/walk-in" },
  ],
  service: {
    name: "Garde-robe et walk-in sur mesure",
    description:
      "Conception, fabrication contrôlée et installation de garde-robes et walk-ins sur mesure haut de gamme à Pierrefonds, dans l'Ouest-de-l'Île et le Grand Montréal.",
    url: SITE.url + "/espaces/walk-in",
    serviceType: "Garde-robe sur mesure",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "centered",
        props: {
          badges: ["Sur mesure"],
          heading: "Garde-robe et walk-in sur mesure à Montréal",
          description:
            "Penderies, tiroirs et tablettes calculés par type de vêtement, montés du plancher au plafond.",
          actions: [
            {
              label: "Obtenir une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos walk-ins",
              href: "/projets/walk-in",
              variant: "ghost",
            },
          ],
        },
      },
    },
    {
      id: "galerie",
      content: {
        type: "grid",
        variant: "bento",
        props: {
          heading: "Du mur de rangement à la pièce complète",
          tiles: [
            {
              kind: "image",
              span: "wide",
              image: {
                src: "/images/generated/spaces/space-walkin-hero-01.webp",
                alt: "Walk-in sur mesure avec penderie sur deux hauteurs",
              },
              caption: "Penderie sur deux hauteurs",
            },
            {
              kind: "image",
              span: "tall",
              image: {
                src: "/images/generated/spaces/space-walkin-project-02.webp",
                alt: "Walk-in aménagé dans un angle de chambre à Laval",
              },
              caption: "Angle exploité, Laval",
            },
            {
              kind: "stat",
              value: "3 000 $",
              label: "Départ d'un mur de rangement, walk-in dès 8 000 $",
            },
            {
              kind: "image",
              image: {
                src: "/images/generated/spaces/space-walkin-project-01.webp",
                alt: "Tiroirs et tablettes sur mesure dans un walk-in de Montréal",
              },
              caption: "Tiroirs et tablettes, Montréal",
            },
            {
              kind: "image",
              image: {
                src: "/images/generated/spaces/space-walkin-project-03.webp",
                alt: "Walk-in avec îlot central et éclairage intégré",
              },
              caption: "Îlot central et éclairage",
            },
            {
              kind: "text",
              title: "Face au modulaire",
              description:
                "Dimensions imposées, tablettes qui fléchissent sous la charge après quelques saisons.",
              href: "/materiaux",
            },
          ],
        },
      },
    },
    {
      id: "en-bref",
      frame: { surface: "muted" },
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "Le rangement en bref",
          intro:
            "Un walk-in se juge cinq ans plus tard, tiroirs pleins et tablettes chargées.",
          rows: [
            {
              label: "Prix",
              value: "3 000 $ à 8 000 $ le mur, 8 000 $ à 20 000 $ le walk-in",
            },
            {
              label: "Délai",
              value: "9 à 15 semaines, selon le nombre de modules et les finis",
            },
            {
              label: "Matériaux",
              value: "Tiroirs en bouleau massif, tablettes en contreplaqué",
            },
            {
              label: "Quincaillerie",
              value: "Coulisses à extension complète, charnières amorties",
            },
            {
              label: "Pose",
              value: "Après la peinture, avant les plinthes et l'éclairage",
            },
            {
              label: "Garantie",
              value: "Ajustement des portes et tiroirs repris, durée au contrat",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-walkin-project-01.webp",
            alt: "Détail de tiroirs et de tablettes dans un walk-in sur mesure",
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
              q: "Quelle largeur faut-il pour un walk-in confortable ?",
              a: "Comptez 1,7 m de mur à mur pour une penderie d'un seul côté et un passage utilisable, 2,4 m pour deux côtés. Sous cette largeur, un mur de rangement rend mieux service.",
            },
            {
              q: "Combien de penderie et combien de tablettes ?",
              a: "On compte vos vêtements longs, vos vestons et vos piles de chandails avant de dessiner. La répartition sort du contenu réel, pas d'un gabarit standard.",
            },
            {
              q: "Faut-il des portes sur un walk-in ?",
              a: "Une porte de pièce suffit dans la plupart des cas. Les façades fermées servent surtout aux zones visibles depuis la chambre et au rangement de saison.",
            },
            {
              q: "Peut-on ajouter l'éclairage et une prise ?",
              a: "Oui. Bandes DEL sous les tablettes, détecteur de présence et prise pour la repasseuse sont tirés avant la fermeture des murs, par notre électricien.",
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
          heading: "Parlez-nous de votre projet de walk-in",
          intro:
            "Estimation gratuite. Un relevé des murs suffit pour chiffrer le rangement.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos walk-ins",
              href: "/projets/walk-in",
              variant: "ghost",
            },
          ],
          note: "Licence RBQ 8306-0806-27 · Montréal, Laval, Ouest-de-l'Île, Rive-Sud",
        },
      },
    },
  ],
};
