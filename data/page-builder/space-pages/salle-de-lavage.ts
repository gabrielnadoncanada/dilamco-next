import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const salleDeLavagePage: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Salle de lavage sur mesure — entrepreneur général",
    description:
      "Salle de lavage sur mesure à Montréal, Laval et sur la Rive-Sud : conception, production en usine partenaire et pose par un entrepreneur général licencié.",
    path: "/espaces/salle-de-lavage",
    ogAlt: "Salle de lavage sur mesure Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    {
      name: "Salle de lavage sur mesure",
      url: SITE.url + "/espaces/salle-de-lavage",
    },
  ],
  service: {
    name: "Salle de lavage sur mesure",
    description:
      "Conception, fabrication contrôlée et installation d'armoires de salle de lavage sur mesure.",
    url: SITE.url + "/espaces/salle-de-lavage",
    serviceType: "Salle de lavage sur mesure",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "centered",
        props: {
          badges: ["Fini lavable"],
          heading: "Salle de lavage sur mesure à Montréal et Laval",
          description:
            "Comptoir de pliage, colonnes de rangement et cuve, dessinés autour de vos appareils.",
          actions: [
            {
              label: "Obtenir une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos réalisations",
              href: "/projets/salle-de-lavage",
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
          heading: "Des salles de lavage qu'on a aménagées",
          tiles: [
            {
              kind: "image",
              span: "wide",
              image: {
                src: "/images/generated/spaces/space-laundry-hero-01.webp",
                alt: "Salle de lavage avec comptoir de pliage continu au-dessus des appareils",
              },
              caption: "Comptoir de pliage continu",
            },
            {
              kind: "image",
              span: "tall",
              image: {
                src: "/images/generated/spaces/space-laundry-project-02.webp",
                alt: "Colonnes de rangement et paniers dans une salle de lavage à Laval",
              },
              caption: "Colonnes et paniers, Laval",
            },
            {
              kind: "stat",
              value: "9 à 15 sem.",
              label: "Le délai de production des armoires",
            },
            {
              kind: "image",
              image: {
                src: "/images/generated/spaces/space-laundry-project-01.webp",
                alt: "Salle de lavage compacte aménagée dans un logement de Montréal",
              },
              caption: "Espace compact, Montréal",
            },
            {
              kind: "image",
              image: {
                src: "/images/generated/spaces/space-laundry-project-03.webp",
                alt: "Cuve de lavage et comptoir alignés sur le même mur",
              },
              caption: "Cuve et comptoir alignés",
            },
            {
              kind: "text",
              title: "Déplacer les appareils",
              description:
                "On refait l'entrée d'eau, le drain et la sortie d'air avant de dessiner.",
              href: "/contact",
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
          heading: "La salle de lavage en bref",
          intro:
            "Ce qu'il faut prévoir dans une pièce où passent l'eau, l'air chaud et le courant.",
          rows: [
            {
              label: "Combien de temps",
              value:
                "Il faut 9 à 15 semaines, et la plomberie se refait avant la pose.",
            },
            {
              label: "Prix indicatif",
              value:
                "Le prix suit le nombre de colonnes, la surface de comptoir et la cuve de lavage.",
            },
            {
              label: "Matériaux",
              value:
                "Du contreplaqué de bouleau, avec les arrières scellés à cause de la vapeur.",
            },
            {
              label: "Quincaillerie",
              value:
                "Des fixations choisies pour des tablettes pleines de bouteilles et de savon.",
            },
            {
              label: "Qui installe",
              value:
                "Notre équipe, en gardant l'espace nécessaire autour de la laveuse et de la sécheuse.",
            },
            {
              label: "Garantie",
              value:
                "Le contrat prévoit que nous revenions ajuster les portes et les tiroirs.",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-laundry-project-01.webp",
            alt: "Détail d'armoires de salle de lavage sur mesure",
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
              q: "Faut-il un drain de plancher dans la salle de lavage ?",
              a: "Il n'est pas exigé partout, mais il évite des dégâts coûteux à l'étage. À défaut, on installe un bac de rétention sous la laveuse et un robinet d'arrêt accessible.",
            },
            {
              q: "Peut-on empiler la laveuse et la sécheuse ?",
              a: "Oui, si les appareils sont conçus pour l'empilage. Ça libère un demi-mur pour une colonne de rangement et un panneau d'accès à la tuyauterie.",
            },
            {
              q: "Où passe l'évacuation de la sécheuse ?",
              a: "Le plus court chemin vers un mur extérieur, en conduit rigide. Un parcours long ou plein de coudes allonge les cycles et encrasse le conduit.",
            },
            {
              q: "Peut-on installer la salle de lavage à l'étage ?",
              a: "Oui, avec un plancher renforcé au besoin, un coupe-eau et une évacuation dédiée. On valide la structure et le tracé des conduits avant de dessiner le rangement.",
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
          heading: "Parlez-nous de votre salle de lavage",
          intro:
            "Estimation gratuite. Les contraintes de plomberie sont relevées sur place.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos réalisations",
              href: "/projets/salle-de-lavage",
              variant: "ghost",
            },
          ],
          note: "Licence RBQ 8306-0806-27 · Montréal, Laval, Rive-Sud",
        },
      },
    },
  ],
};
