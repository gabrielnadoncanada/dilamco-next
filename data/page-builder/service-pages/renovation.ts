import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Renovation cle en main",
    description:
      "Renovation cle en main a Montreal : design, coordination, fabrication, installation et sequence de chantier mieux maitrisee.",
    path: "/services/renovation/",
    ogAlt: "Renovation cle en main Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services/" },
    { name: "Renovation cle en main", url: SITE.url + "/services/renovation/" },
  ],
  service: {
    name: "Renovation cle en main",
    description:
      "Design, coordination et execution lorsque le projet implique plusieurs corps de metier.",
    url: SITE.url + "/services/renovation/",
    serviceType: "Renovation",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Dilamco - Services",
          heading:
            "Renovation cle en main a Montreal, un seul cadre du design a l'installation",
          description:
            "Quand la renovation touche plusieurs corps de metier, la valeur ne se joue pas seulement dans le resultat final. Elle se joue dans la sequence, la coordination, la qualite des decisions techniques et la capacite de livrer un ensemble coherent du debut a la fin.",
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
          badges: ["Cle en main", "Coordination", "Montreal"],
          image: {
            src: "/images/generated/services/service-renovation-hero-01.webp",
            alt: "Projet de renovation sur mesure",
          },
          caption: "Montreal, Laval et Rive-Sud",
        },
      },
    },
    {
      id: "difference",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading:
            "Pourquoi Dilamco ne fonctionne pas comme un simple detaillant",
          description:
            "Une renovation cle en main demande plus qu'un fournisseur d'armoires. L'avantage vient du controle de la chaine, de la constance de fabrication et d'une meilleure maitrise de la sequence entre design, approvisionnement, installation et travaux connexes.",
          cards: [
            {
              title: "Approvisionnement mieux controle",
              description:
                "Les choix de materiaux, composantes et finis sont cadres plus tot pour reduire les ecarts et mieux proteger l'echeancier.",
            },
            {
              title: "Qualite plus stable",
              description:
                "Le design, la fabrication et l'installation sont penses comme un ensemble, pas comme des morceaux livres sans logique commune.",
            },
            {
              title: "Coordination reelle",
              description:
                "Quand le chantier implique plusieurs etapes, un cadre clair limite la fragmentation et les zones grises entre intervenants.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "why",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Quand la renovation cle en main est pertinente",
          intro:
            "Cette approche devient pertinente quand le projet depasse la seule fabrication et installation d'armoires et qu'il faut mieux maitriser l'enchainement global.",
          badges: ["Plomberie", "Electricite", "Plancher", "Coordination"],
          cardTitle: "Ce que ca apporte",
          items: [
            "Moins de fragmentation entre intervenants.",
            "Un calendrier mieux cadre des le depart.",
            "Une execution plus coherente sur le chantier.",
          ],
          actions: [
            {
              label: "Voir le design",
              href: "/services/design/",
            },
            {
              label: "Voir l'installation",
              href: "/services/installation/",
              variant: "outline",
            },
          ],
        },
      },
    },
    {
      id: "process",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "Un processus cle en main qui garde le chantier lisible",
          intro:
            "La logique reste la meme d'un projet a l'autre : clarifier d'abord, verrouiller les decisions importantes, puis executer dans le bon ordre.",
          steps: [
            {
              number: "1",
              title: "Cadrage",
              description:
                "Besoins, portee, contraintes du lieu et niveau de renovation a confirmer avant d'ouvrir le chantier.",
            },
            {
              number: "2",
              title: "Design",
              description:
                "Organisation de l'espace, usages, circulation et decisions qui auront un impact sur la fabrication et la sequence.",
            },
            {
              number: "3",
              title: "Materiaux",
              description:
                "Choix de composantes, finis et solutions adaptes a la durabilite, a l'entretien et au niveau d'usage attendu.",
            },
            {
              number: "4",
              title: "Fabrication et chantier",
              description:
                "Preparation des elements sur mesure et coordination des etapes connexes pour limiter les reprises et les conflits.",
            },
            {
              number: "5",
              title: "Installation",
              description:
                "Pose, ajustements et finition avec une lecture claire de l'ensemble du projet.",
            },
          ],
        },
      },
    },
    {
      id: "materials",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Des choix techniques qui justifient une renovation premium",
          intro:
            "Le positionnement ne repose pas sur un discours marketing. Il repose sur la qualite des composantes, la stabilite de fabrication et l'integration des decisions techniques dans le chantier.",
          items: [
            {
              title: "Structure de tiroirs en bois massif de bouleau",
              description:
                "Un choix plus solide et plus durable qu'une construction faible quand le projet vise un usage quotidien intensif.",
            },
            {
              title: "Fond de tiroirs en contreplaque de bouleau",
              description:
                "Meilleure resistance a la charge, meilleure stabilite dimensionnelle et meilleure perception de qualite a long terme.",
            },
            {
              title: "Selection de materiaux selon l'espace",
              description:
                "Cuisine, salle de bain, rangement ou zone de service ne demandent pas exactement les memes arbitrages techniques.",
            },
            {
              title: "Execution pensee pour la pose",
              description:
                "Une renovation se deroule mieux quand les choix sont pris avec la fabrication et l'installation en tete, pas separement.",
            },
          ],
          actions: [
            {
              label: "Voir les materiaux",
              href: "/materiaux/",
              variant: "outline",
            },
            {
              label: "Voir la fabrication",
              href: "/services/fabrication/",
              variant: "outline",
            },
          ],
          image: {
            src: "/images/spaces/cabinet-cuisines.webp",
            alt: "Details de materiaux pour renovation sur mesure",
          },
          cardTitle: "Pourquoi c'est important",
          cardDescription:
            "Dans une renovation complete, les composantes invisibles influencent autant la durabilite que le rendu final visible.",
        },
      },
    },
    {
      id: "projects",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Realisations qui montrent le niveau de coordination",
          intro:
            "La preuve de maitrise se voit dans les projets ou le design, la fabrication, la pose et la finition restent coherents jusqu'a la livraison.",
          items: [
            {
              title: "Cuisine sur mesure",
              href: "/projets",
              description:
                "Projet residentiel avec implantation precise, decisions techniques mieux cadrees et finition propre.",
              image: {
                src: "/images/generated/services/service-renovation-project-01.webp",
                alt: "Projet de renovation de cuisine a Montreal",
              },
              badges: ["Montreal", "Cuisine"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Cuisine sur mesure",
              href: "/projets",
              description:
                "Renovation pensee pour l'usage quotidien avec meilleure coherence entre fabrication, chantier et installation.",
              image: {
                src: "/images/generated/services/service-renovation-project-02.webp",
                alt: "Projet de renovation residentielle a Laval",
              },
              badges: ["Laval", "Coordination"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Cuisine sur mesure",
              href: "/projets",
              description:
                "Projet complet avec gestion plus propre de la sequence, des ajustements et des details de finition.",
              image: {
                src: "/images/generated/services/service-renovation-project-03.webp",
                alt: "Projet de renovation sur la Rive-Sud",
              },
              badges: ["Rive-Sud", "Cle en main"],
              footerCtaLabel: "Voir le projet",
            },
          ],
          ctaLabel: "Voir tous nos projets",
          ctaHref: "/projets/",
        },
      },
    },
    {
      id: "subservices",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Types de renovation",
          intro:
            "Accedez a la page adaptee selon la nature des travaux a coordonner.",
          items: [
            {
              title: "Renovation de cuisine",
              href: "/services/renovation/cuisine",
              description:
                "Cuisine complete avec sequence de chantier, integration des armoires et coordination des travaux connexes.",
              image: {
                src: "/images/generated/renovation/renovation-cuisine-hero-01.webp",
                alt: "Renovation de cuisine cle en main",
              },
              badges: ["Cuisine", "Coordination"],
              footerCtaLabel: "Voir cuisine",
            },
            {
              title: "Renovation de salle de bain",
              href: "/services/renovation/salle-de-bain",
              description:
                "Salle de bain mieux cadree pour humidite, plomberie, rangement et finition durable.",
              image: {
                src: "/images/generated/renovation/renovation-bath-hero-01.webp",
                alt: "Renovation de salle de bain cle en main",
              },
              badges: ["Salle de bain", "Humidite"],
              footerCtaLabel: "Voir salle de bain",
            },
            {
              title: "Renovation de plancher",
              href: "/services/renovation/plancher",
              description:
                "Plancher integre dans le bon ordre pour gerer niveaux, transitions et finition sans reprises inutiles.",
              image: {
                src: "/images/generated/renovation/renovation-plancher-hero-01.webp",
                alt: "Renovation de plancher integree a un projet residentiel",
              },
              badges: ["Plancher", "Transitions"],
              footerCtaLabel: "Voir plancher",
            },
            {
              title: "Agrandissement de maison",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Extension residentielle avec faisabilite, raccords et execution mieux coordonnees avec l'existant.",
              image: {
                src: "/images/generated/renovation/renovation-extension-hero-01.webp",
                alt: "Agrandissement de maison cle en main",
              },
              badges: ["Agrandissement", "Execution"],
              footerCtaLabel: "Voir agrandissement",
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
          heading: "FAQ - renovation cle en main",
          intro:
            "Reponses claires sur le prix, les delais, la coordination et la difference avec une approche plus fragmentee.",
          items: [
            {
              q: "Combien coute une renovation cle en main ?",
              a: "Le prix depend de la portee, des materiaux, de la complexite du chantier et du niveau de coordination requis. Une soumission structuree sert justement a clarifier ces points avant de demarrer.",
            },
            {
              q: "Quelle est la difference avec acheter des armoires puis gerer le reste separement ?",
              a: "Une approche fragmentee multiplie les zones grises entre design, fabrication, chantier et finition. Le cle en main vise au contraire une meilleure continuite entre les decisions et l'execution.",
            },
            {
              q: "Est-ce que vous gerez seulement les armoires ou aussi la coordination du chantier ?",
              a: "Selon la portee definie, la renovation peut inclure un niveau de coordination plus large pour mieux structurer les etapes et reduire les reprises.",
            },
            {
              q: "Quels sont les delais pour une renovation ?",
              a: "Les delais varient selon l'espace, la complexite, l'approvisionnement et les travaux connexes. Un echeancier realiste est etabli une fois la portee du projet clarifiee.",
            },
            {
              q: "Est-ce pertinent pour une cuisine, une salle de bain ou un agrandissement ?",
              a: "Oui. La logique cle en main devient particulierement utile des que plusieurs decisions doivent s'aligner entre espace, materiaux, sequence et finition.",
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
          heading: "Vous avez un projet de renovation a cadrer serieusement ?",
          intro:
            "Obtenez une soumission claire et detaillee pour un projet de renovation cle en main mieux structure, mieux sequence et mieux execute.",
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
          note: "Residentiel, cuisine, salle de bain, plancher et agrandissement",
        },
      },
    },
  ],
};
