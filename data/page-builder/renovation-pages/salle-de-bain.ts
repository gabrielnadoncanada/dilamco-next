import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationSalleDeBainPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Renovation salle de bain",
    description:
      "Renovation de salle de bain cle en main : coordination, controle de l'humidite, vanites sur mesure et finition durable a Montreal.",
    path: "/services/renovation/salle-de-bain/",
    ogAlt: "Renovation salle de bain Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services/" },
    { name: "Renovation", url: SITE.url + "/services/renovation/" },
    {
      name: "Renovation salle de bain",
      url: SITE.url + "/services/renovation/salle-de-bain/",
    },
  ],
  service: {
    name: "Renovation salle de bain",
    description:
      "Design, coordination, vanites sur mesure et finition durable adaptes aux contraintes d'humidite et de plomberie.",
    url: SITE.url + "/services/renovation/salle-de-bain/",
    serviceType: "Renovation de salle de bain",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Dilamco - Renovation",
          heading:
            "Renovation de salle de bain cle en main a Montreal, mieux gerer l'humidite, la plomberie et la finition",
          description:
            "En salle de bain, la qualite finale depend autant de la coordination que des materiaux, de l'humidite, de la plomberie et des details d'installation. Le chantier doit etre mieux sequence pour proteger la durabilite a long terme.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir les projets salle de bain",
              href: "/projets/",
              variant: "outline",
            },
          ],
          badges: ["Humidite", "Coordination", "Montreal"],
          image: {
            src: "/images/generated/renovation/renovation-bath-hero-01.webp",
            alt: "Renovation de salle de bain sur mesure",
          },
          caption: "Montreal, Laval et Rive-Sud",
        },
      },
    },
    {
      id: "problems",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading:
            "Ce qui rend une salle de bain plus exigeante qu'elle en a l'air",
          description:
            "Une salle de bain concentre eau, humidite, plomberie, ventilation, rangement et finition dans un espace souvent plus compact. Le projet vieillit mal quand ces elements sont traites separement ou trop tard.",
          cards: [
            {
              title: "Risque d'eau et d'humidite",
              description:
                "Les mauvais arbitrages techniques se paient plus cher ici qu'ailleurs parce qu'ils affectent directement la durabilite.",
            },
            {
              title: "Contraintes d'espace",
              description:
                "Circulation, degagements, rangement et acces doivent etre penses finement dans une piece limitee.",
            },
            {
              title: "Coordination sensible",
              description:
                "Plomberie, ventilation, finition et mobilier doivent s'aligner pour eviter les reprises et les details mal resolus.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "priorities",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Les priorites d'une renovation de salle de bain",
          intro:
            "Le projet doit proteger contre l'eau, integrer la plomberie et livrer une finition durable.",
          badges: ["Ventilation", "Plomberie", "Protection", "Finitions"],
          cardTitle: "Ce qu'on cherche a proteger",
          items: [
            "Reduire les risques lies a l'eau avec une planification claire.",
            "Obtenir un resultat durable en milieu humide.",
            "Eviter les zones grises entre intervenants et finitions.",
          ],
          actions: [
            {
              label: "Voir les materiaux",
              href: "/materiaux/",
              variant: "outline",
            },
            {
              label: "Quincaillerie",
              href: "/materiaux/quincaillerie/",
              variant: "outline",
            },
          ],
        },
      },
    },
    {
      id: "approach",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Notre approche pour cadrer une salle de bain plus durable",
          intro:
            "L'objectif est de ne pas separer les decisions de design des realites du chantier. Une salle de bain doit etre pensee comme un ensemble ou humidite, rangement, plomberie et finition se tiennent.",
          items: [
            {
              title: "Analyse du contexte reel",
              description:
                "On lit les contraintes d'espace, d'acces, de plomberie et de ventilation avant d'avancer des solutions.",
            },
            {
              title: "Hierarchie des choix",
              description:
                "Les decisions structurelles et techniques passent avant les details purement esthetiques.",
            },
            {
              title: "Sequence des interventions",
              description:
                "Le chantier est organise pour mieux proteger les etapes sensibles et reduire les retouches.",
            },
            {
              title: "Qualite du rendu final",
              description:
                "Vanite, rangement, transitions et finition doivent donner une lecture propre et durable de la piece.",
            },
          ],
          actions: [
            {
              label: "Voir la page salle de bain",
              href: "/espaces/salle-de-bain/",
              variant: "outline",
            },
            {
              label: "Voir l'installation",
              href: "/services/installation/",
              variant: "outline",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-bath-approach-01.webp",
            alt: "Planification d'une renovation de salle de bain",
          },
          cardTitle: "Ce qu'on cherche a eviter",
          cardDescription:
            "Les salles de bain qui vieillissent mal ont souvent ete decidees sans assez de clarte sur l'eau, l'usage quotidien et la qualite des raccords.",
        },
      },
    },
    {
      id: "process",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "Sequence type d'une renovation de salle de bain",
          intro:
            "La logique reste la meme: clarifier les contraintes, valider les choix sensibles puis executer proprement dans un milieu humide.",
          steps: [
            {
              number: "1",
              title: "Cadrage",
              description:
                "Portee, contraintes du lieu, acces, plomberie et niveau d'intervention a confirmer.",
            },
            {
              number: "2",
              title: "Design",
              description:
                "Vanite, rangement, circulation, degagements et decisions de finition.",
            },
            {
              number: "3",
              title: "Materiaux",
              description:
                "Choix de composantes adaptes a l'humidite, a l'entretien et a la durabilite attendue.",
            },
            {
              number: "4",
              title: "Coordination",
              description:
                "Travaux connexes sequences pour mieux proteger les details sensibles et la finition.",
            },
            {
              number: "5",
              title: "Installation",
              description:
                "Pose, ajustements et validation finale pour une lecture propre de l'ensemble.",
            },
          ],
        },
      },
    },
    {
      id: "technical",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading:
            "Points techniques qui comptent vraiment dans une salle de bain",
          intro:
            "La durabilite d'une salle de bain ne depend pas d'un seul produit. Elle depend d'un ensemble de decisions techniques bien alignees.",
          columns: "2",
          items: [
            {
              title: "Gestion de l'humidite",
              description:
                "Le milieu humide exige des choix plus rigoureux qu'une autre piece.",
              icon: "doorOpen",
              bullets: [
                "Materiaux et finis adaptes a l'environnement.",
                "Details de construction penses pour durer.",
                "Moins de risques visibles a moyen terme.",
              ],
            },
            {
              title: "Structure de la vanite",
              description:
                "Les composantes invisibles influencent directement la tenue dans le temps.",
              icon: "package2",
              bullets: [
                "Bois massif de bouleau pour les elements critiques.",
                "Contreplaque de bouleau pour mieux resister a la charge.",
                "Meilleure sensation de solidite a l'usage.",
              ],
            },
            {
              title: "Ergonomie et rangement",
              description:
                "La piece doit rester simple a utiliser meme quand elle est compacte.",
              icon: "slidersHorizontal",
              bullets: [
                "Degagements penses selon l'espace reel.",
                "Rangement adapte aux habitudes quotidiennes.",
                "Moins de friction dans l'usage.",
              ],
            },
            {
              title: "Execution sur chantier",
              description:
                "La finition depend de l'ordre des interventions et de la qualite des ajustements.",
              icon: "wrench",
              bullets: [
                "Moins de conflits entre interventions.",
                "Moins de reprises de fin de chantier.",
                "Finition plus nette a la livraison.",
              ],
            },
          ],
        },
      },
    },
    {
      id: "integration",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading:
            "Cette page service soutient surtout votre projet de salle de bain sur mesure",
          intro:
            "La renovation de salle de bain explique surtout la methode, les risques et la coordination. Pour la vision complete du produit, des materiaux et des realisations, la page pilier salle de bain reste la destination principale.",
          items: [
            {
              title: "Salle de bain sur mesure",
              href: "/espaces/salle-de-bain/",
              description:
                "La page pilier principale pour voir le niveau de finition, les materiaux, les projets et la logique de rangement.",
              image: {
                src: "/images/generated/spaces/space-bath-hero-01.webp",
                alt: "Salle de bain sur mesure haut de gamme",
              },
              badges: ["Page pilier", "Salle de bain"],
              footerCtaLabel: "Voir la page salle de bain",
            },
            {
              title: "Service de fabrication",
              href: "/services/fabrication/",
              description:
                "Pour comprendre ce qui rend la vanite plus stable, plus durable et mieux executee dans le temps.",
              image: {
                src: "/images/generated/services/service-fabrication-hero-01.webp",
                alt: "Fabrication sur mesure et details techniques",
              },
              badges: ["Fabrication", "Durabilite"],
              footerCtaLabel: "Voir fabrication",
            },
            {
              title: "Service d'installation",
              href: "/services/installation/",
              description:
                "Pour voir comment la pose, les ajustements et les alignements protegent un rendu plus propre en fin de chantier.",
              image: {
                src: "/images/generated/services/service-installation-hero-01.webp",
                alt: "Installation sur mesure avec ajustements precis",
              },
              badges: ["Installation", "Finition"],
              footerCtaLabel: "Voir installation",
            },
          ],
        },
      },
    },
    {
      id: "proof",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading:
            "Ce qu'une renovation de salle de bain bien maitrisee doit livrer",
          description:
            "La preuve de competence ne tient pas seulement a l'apparence. Elle se voit dans la facon dont la piece vieillit, se nettoie et fonctionne au quotidien sans faiblesse visible.",
          cards: [
            {
              title: "Piece plus durable",
              description:
                "Les choix techniques soutiennent mieux l'humidite, la charge et l'usage quotidien.",
            },
            {
              title: "Usage plus simple",
              description:
                "Rangement, circulation et degagements donnent une salle de bain plus agreable a utiliser.",
            },
            {
              title: "Finition plus credible",
              description:
                "Les raccords, alignements et details de pose soutiennent un rendu plus propre et plus premium.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "faq",

      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "FAQ - renovation de salle de bain",
          intro:
            "Reponses claires sur delais, humidite, coordination et portee du projet.",
          items: [
            {
              q: "Combien de temps dure une renovation de salle de bain?",
              a: "La duree depend de la portee, des contraintes du lieu et des travaux connexes.",
            },
            {
              q: "Est-ce risque au niveau des degats d'eau?",
              a: "Une execution rigoureuse et des choix adaptes a l'humidite reduisent fortement les risques a long terme.",
            },
            {
              q: "Travaillez-vous avec d'autres intervenants sur ce type de chantier?",
              a: "Oui, lorsque la portee l'exige. La coordination sert justement a mieux ordonner plomberie, ventilation, finition et pose pour eviter les zones grises.",
            },
            {
              q: "Est-ce possible en condo?",
              a: "Oui. L'acces, les horaires et les contraintes de batiment sont cadres des le depart.",
            },
            {
              q: "Puis-je faire une renovation partielle?",
              a: "Oui. Certains projets visent surtout la vanite et le rangement, d'autres sont plus complets.",
            },
            {
              q: "Ou voir l'approche complete pour une salle de bain sur mesure?",
              a: "La page renovation de salle de bain sert surtout a expliquer la logique de chantier et de coordination. Pour la vision complete du produit, des materiaux et des projets, la page salle de bain sur mesure reste la reference principale.",
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
          heading: "Besoin d'une renovation de salle de bain bien cadree ?",
          intro:
            "On vous aide a structurer le projet, la sequence et les bons choix pour un environnement humide, puis a vous orienter vers la page pilier salle de bain pour la vision complete.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir la page salle de bain",
              href: "/espaces/salle-de-bain/",
              variant: "outline",
            },
          ],
          note: "Salle de bain, vanite sur mesure, rangement et environnement humide",
        },
      },
    },
  ],
};
