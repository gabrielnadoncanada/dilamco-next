import type { PageTemplateData } from "@/page-builder";
import { SITE } from "@/seo/schema/site";

export const page: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Cuisines, vanites et armoires sur mesure cle en main a Montreal",
    description:
      "Dilamco concoit et realise des cuisines, vanites et armoires sur mesure haut de gamme.",
    path: "/",
    ogAlt: "Dilamco, sur mesure, durable, bien execute",
  },
  breadcrumbs: [
    {
      name: "Accueil",
      url: SITE.url + "/",
    },
  ],
  blocks: [
    {
      id: "hero",
      frame: {
        divider: "bottom",
      },
      content: {
        type: "hero",
        variant: "split-image-badges",
        props: {
          image: {
            src: "/images/hero/kitchen-hero.webp",
            alt: "Premium custom kitchen",
          },
          eyebrow: "Dilamco - Espaces",
          overlay: "dark-gradient",
          badges: [
            "Fabrication controlee",
            "Materiaux durables",
            "Installation precise",
            "Coordination complete",
          ],
          heading: "Espaces sur mesure haut de gamme a Montreal",
          description:
            "Cuisine, salle de bain, salle de lavage, walk-in et commercial - concus, fabriques et installes avec une gestion cle en main et des standards de qualite constants.",
          actions: [
            {
              label: "Obtenir une soumission",
              href: "/contact",
              variant: "default",
            },
            { label: "Voir nos projets", href: "/projets", variant: "outline" },
          ],
          note: "Positionnement premium : ideal pour des projets durables et bien executes.",
          card: {
            title: "Pourquoi Dilamco",
            description: "Un modele structure qui protege la qualite.",
            items: [
              {
                title: "Entrepot a Montreal",
                description:
                  "controle des inventaires et reduction des imprevus.",
              },
              {
                title: "Approvisionnement direct",
                description: "specifications definies, qualite coherente.",
              },
              {
                title: "Gestion cle en main",
                description: "un responsable du design a l'installation.",
              },
            ],
          },
        },
      },
    },
    {
      id: "quality-pillars",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Des espaces concus pour durer - pas des modules standard",
          description:
            "Chaque espace Dilamco suit la meme logique : design adapte a votre realite, fabrication controlee, materiaux premium et execution structuree. L'objectif est simple : un resultat durable, coherent et maitrise, avec un seul responsable du debut a la fin.",
          cards: [
            {
              title: "Qualite tangible",
              description:
                "Details de construction, quincaillerie, finitions et durabilite verifiables.",
            },
            {
              title: "Gestion cle en main",
              description:
                "Moins d'intervenants, moins d'imprevus, une coordination claire.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "spaces",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Choisissez votre espace",
          intro:
            "Accedez a la page pilier correspondante pour decouvrir l'approche, les materiaux, des realisations et une FAQ adaptee.",
          items: [
            {
              title: "Cuisine",
              href: "/espaces/cuisine",
              description:
                "Armoires sur mesure, ergonomie, durabilite et coordination complete pour un resultat maitrise.",
              image: {
                src: "/images/spaces/cabinet-cuisines.webp",
                alt: "Cuisine sur mesure haut de gamme",
              },
              badges: ["Sur mesure", "Cle en main", "Haut de gamme"],
              quickActionLabel: "Voir",
              footerCtaLabel: "Decouvrir cuisine",
            },
            {
              title: "Salle de bain",
              href: "/espaces/salle-de-bain",
              description:
                "Vanites sur mesure, rangement optimise et finitions resistantes a l'humidite pour durer.",
              image: {
                src: "/images/spaces/vanite-salles-de-bain.webp",
                alt: "Vanite et salle de bain sur mesure",
              },
              badges: ["Vanites", "Durable", "Finitions"],
              quickActionLabel: "Voir",
              footerCtaLabel: "Decouvrir salle de bain",
            },
            {
              title: "Salle de lavage",
              href: "/espaces/salle-de-lavage",
              description:
                "Solutions de rangement et d'organisation pensees pour le quotidien, sans compromis sur la solidite.",
              image: {
                src: "/images/spaces/vanite-salles-de-lavage.webp",
                alt: "Salle de lavage sur mesure",
              },
              badges: ["Rangement", "Fonctionnel", "Sur mesure"],
              quickActionLabel: "Voir",
              footerCtaLabel: "Decouvrir salle de lavage",
            },
            {
              title: "Walk-in",
              href: "/espaces/walk-in",
              description:
                "Organisation personnalisee : tiroirs, penderies, accessoires et configuration adaptee a vos besoins.",
              image: {
                src: "/images/spaces/vanite-garde-robes-et-walk-ins.webp",
                alt: "Walk-in sur mesure",
              },
              badges: ["Organisation", "Personnalise", "Premium"],
              quickActionLabel: "Voir",
              footerCtaLabel: "Decouvrir walk-in",
            },
            {
              title: "Commercial",
              href: "/espaces/commercial",
              description:
                "Amenagement durable et reproductible : bureaux, espaces clients, rangements et mobilier sur mesure.",
              image: {
                src: "/images/spaces/commercial.webp",
                alt: "Amenagement commercial sur mesure",
              },
              badges: ["Commercial", "Durable", "Execution maitrisee"],
              quickActionLabel: "Voir",
              footerCtaLabel: "Decouvrir commercial",
            },
          ],
        },
      },
    },
    {
      id: "standard",
      content: {
        type: "split",
        variant: "steps-2x2-cta",
        props: {
          heading: "Notre standard, peu importe l'espace",
          description:
            "Une methode reproductible pour proteger la qualite, reduire les imprevus et livrer un resultat coherent.",
          steps: [
            {
              label: "1) Conception",
              description:
                "Plans clairs, configuration adaptee et validations avant fabrication.",
            },
            {
              label: "2) Materiaux",
              description:
                "Choix durables et details de construction penses pour la longevite.",
            },
            {
              label: "3) Fabrication controlee",
              description:
                "Standards stables, controle qualite et coherence d'un projet a l'autre.",
            },
            {
              label: "4) Installation",
              description:
                "Ajustements precis, finitions nettes et coordination structuree sur chantier.",
            },
          ],
          actions: [
            {
              label: "Voir nos services",
              href: "/services",
              variant: "outline",
            },
            {
              label: "Comprendre nos materiaux",
              href: "/materiaux",
              variant: "outline",
            },
          ],
        },
      },
    },
    {
      id: "projects",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Projets en vedette",
          intro:
            "Decouvrez les realisations recentes de nos espaces sur mesure.",
          ctaLabel: "Voir tous les projets",
          ctaHref: "/projets",
          items: [
            {
              title: "Cuisine sur mesure",
              href: "/projets/cuisine/cuisine-sur-mesure-plateau-mont-royal/",
              description:
                "Conception, fabrication controlee et installation precise avec finitions soignees.",
              image: {
                src: "/images/spaces/cabinet-cuisines.webp",
                alt: "Cuisine sur mesure haut de gamme",
              },
              badges: ["Cuisine", "Montreal", "Plateau-Mont-Royal"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Vanite sur mesure",
              href: "/projets/salle-de-bain/vanite-sur-mesure-laval/",
              description:
                "Rangement optimise, materiaux durables et execution nette adaptee a la salle de bain.",
              image: {
                src: "/images/spaces/vanite-salles-de-bain.webp",
                alt: "Vanite et salle de bain sur mesure",
              },
              badges: ["Salle de bain", "Laval", "Vanites"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Amenagement sur mesure",
              href: "/projets/commercial/amenagement-sur-mesure-bureau-centre-ville-montreal/",
              description:
                "Mobilier robuste, lignes epurees et installation planifiee pour minimiser les interruptions.",
              image: {
                src: "/images/spaces/vanite-salles-de-lavage.webp",
                alt: "Salle de lavage sur mesure",
              },
              badges: ["Commercial", "Montreal", "Centre-ville"],
              footerCtaLabel: "Voir le projet",
            },
          ],
        },
      },
    },
    {
      id: "faq",
      frame: {
        divider: "bottom",
      },
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "FAQ",
          intro:
            "Reponses claires aux questions qui bloquent le plus souvent la decision.",
          items: [
            {
              q: "Quel budget prevoir pour une cuisine sur mesure ?",
              a: "Le budget depend des dimensions, de l'amenagement (tiroirs, accessoires, ilot), des materiaux et de la coordination. Pour une approche sur mesure et cle en main, il faut s'attendre a un investissement aligne avec une execution premium et durable.",
            },
            {
              q: "Quelle est la difference avec IKEA / grandes surfaces ?",
              a: "Les solutions standardisees peuvent convenir a certains contexts. Le sur mesure vise une personnalisation complete, une structure plus robuste, et une execution mieux controlee - particulierement important dans une residence principale.",
            },
            {
              q: "Quels sont les delais typiques ?",
              a: "Les delais varient selon la complexite et la charge de production. Un processus structure (validation avant fabrication + coordination installation) permet une planification plus previsible et moins d'imprevus.",
            },
            {
              q: "Gerez-vous la renovation complete ?",
              a: "Oui, lorsque requis : coordination des etapes cles et integration avec le design, la fabrication et l'installation. L'objectif est de reduire la fragmentation et d'assurer une execution coherente.",
            },
          ],
        },
      },
    },
    {
      id: "cta-plan",
      content: {
        type: "cta",
        variant: "band-split-actions",
        props: {
          heading: "Pret a cadrer votre projet correctement ?",
          intro:
            "Obtenez une soumission claire et structuree, adaptee a un projet durable et maitrise.",
          actions: [
            {
              label: "Obtenir une soumission",
              href: "/contact",
              variant: "default",
            },
            {
              label: "Cuisine sur mesure",
              href: "/espaces/cuisine/",
              variant: "outline",
            },
          ],
          note: "Montreal • Laval • Rive-Sud - residentiel & commercial",
        },
      },
    },
  ],
};
