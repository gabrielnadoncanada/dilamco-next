import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const page: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Projets",
    description:
      "Decouvrez nos realisations sur mesure : cuisines, vanites, walk-in, salles de lavage et projets commerciaux.",
    path: "/projets/",
    ogAlt: "Realisations Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Projets", url: SITE.url + "/projets/" },
  ],
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Dilamco - Projets",
          heading:
            "Realisations sur mesure : cuisines, vanites, rangement et commercial",
          description:
            "Cette page sert a montrer des cas reels, pas une galerie vide. Vous y trouvez des projets qui aident a juger le niveau d'execution, le type de contraintes traitees et la qualite de finition attendue.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir notre processus",
              href: "/processus/",
              variant: "outline",
            },
          ],
          badges: ["Cas reels", "Montreal", "Laval", "Rive-Sud"],
          image: {
            src: "/images/projects/cuisine-haut-de-gamme-blanche-laval.webp",
            alt: "Realisation sur mesure Dilamco",
          },
          caption:
            "Des projets qui servent a se projeter et a verifier la qualite d'execution",
        },
      },
    },
    // {
    //   id: "why-projects",
    //   content: {
    //     type: "grid",
    //     variant: "icon-cards-bullets",
    //     props: {
    //       heading:
    //         "Pourquoi regarder les projets avant de demander une soumission",
    //       intro:
    //         "Les pages projets doivent aider a comparer des cas concrets, pas seulement a regarder de belles photos.",
    //       columns: "2",
    //       items: [
    //         {
    //           title: "Voir des cas reels",
    //           description:
    //             "Chaque projet donne un point de repere plus concret qu'une page purement commerciale.",
    //           icon: "doorOpen",
    //           bullets: [
    //             "Contexte d'espace reel",
    //             "Niveau de finition visible",
    //             "Type de projet mieux identifiable",
    //           ],
    //         },
    //         {
    //           title: "Evaluer l'execution",
    //           description:
    //             "Une bonne realisation montre autant la coherence que l'esthetique.",
    //           icon: "wrench",
    //           bullets: [
    //             "Ajustements precis",
    //             "Implantation bien resolue",
    //             "Details materiaux et pose",
    //           ],
    //         },
    //         {
    //           title: "Comparer selon votre besoin",
    //           description:
    //             "L'index aide a rejoindre plus vite la bonne categorie de projets ou la bonne page pilier.",
    //           icon: "slidersHorizontal",
    //           bullets: [
    //             "Cuisine, salle de bain, rangement",
    //             "Commercial ou residentiel",
    //             "Projet simple ou plus coordonne",
    //           ],
    //         },
    //         {
    //           title: "Se projeter avant d'avancer",
    //           description:
    //             "Les exemples concrets aident a cadrer les attentes avant meme le premier echange.",
    //           icon: "package2",
    //           bullets: [
    //             "Inspirations plus credibles",
    //             "Comparaison de configurations",
    //             "Discussion plus claire ensuite",
    //           ],
    //         },
    //       ],
    //     },
    //   },
    // },
    {
      id: "categories",
      frame: { surface: "muted" },
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Explorer les projets",
          intro:
            "Choisissez l'univers de projet le plus proche de votre realite pour voir des references mieux ciblees.",
          lightbox: true,
          items: [
            {
              // title: "Cuisines sur mesure",
              // description:
              //   "Armoires, ilots, rangements et projets cuisines avec differents niveaux de coordination.",
              image: {
                src: "/images/projects/chene-moderne.webp",
                alt: "Categorie projets cuisine sur mesure",
              },
              // badges: ["Cuisine", "Residentiel"],
              // footerCtaLabel: "Voir les projets cuisine",
            },
            {
              // title: "Salles de bain et vanites",
              // description:
              //   "References de vanites et salles de bain avec contraintes d'humidite, rangement et finition.",
              image: {
                src: "/images/projects/cuisine-haut-de-gamme-blanche-laval.webp",
                alt: "Categorie projets salle de bain",
              },
              // badges: ["Salle de bain", "Humidite"],
              // footerCtaLabel: "Voir les projets salle de bain",
            },
            {
              // title: "Walk-in et rangement",
              // description:
              //   "Organisation, penderies, accessoires et amenagements pensés pour optimiser l'espace.",
              image: {
                src: "/images/projects/Signature-Bouleau.webp",
                alt: "Categorie projets walk-in et rangement",
              },
              // badges: ["Walk-in", "Organisation"],
              // footerCtaLabel: "Voir les projets walk-in",
            },
            {
              // title: "Salles de lavage",
              // description:
              //   "Configurations robustes et pratiques pour un espace de service plus simple au quotidien.",
              image: {
                src: "/images/projects/cuisine-blanche-sur-mesure-brossard.webp",
                alt: "Categorie projets salle de lavage",
              },
              // badges: ["Salle de lavage", "Fonctionnel"],
              // footerCtaLabel: "Voir les projets salle de lavage",
            },
            {
              // title: "Commercial",
              // description:
              //   "Mobilier et amenagements sur mesure quand l'usage, la logistique et la durabilite comptent vraiment.",
              image: {
                src: "/images/projects/project11.jpg",
                alt: "Categorie projets commerciaux",
              },
              // badges: ["Commercial", "Durable"],
              // footerCtaLabel: "Voir les projets commerciaux",
            },
          ],
        },
      },
    },
    // {
    //   id: "featured",
    //   content: {
    //     type: "grid",
    //     variant: "image-cards-slider",
    //     props: {
    //       heading: "Projets en vedette",
    //       intro:
    //         "Quelques realisations phares pour illustrer des contextes, contraintes et niveaux de finition differents.",
    //       ctaLabel: "Voir toutes les categories",
    //       ctaHref: "/projets/",
    //       items: [
    //         {
    //           title: "Cuisine sur mesure, Plateau-Mont-Royal",
    //           href: "/projets/cuisine/cuisine-sur-mesure-plateau-mont-royal/",
    //           description:
    //             "Cuisine sur mesure avec implantation claire, details soignes et execution stable dans un contexte urbain exigeant.",
    //           image: {
    //             src: "/images/generated/spaces/espaces-featured-cuisine-project-01.png",
    //             alt: "Projet cuisine sur mesure au Plateau-Mont-Royal",
    //           },
    //           badges: ["Cuisine", "Montreal", "Plateau-Mont-Royal"],
    //           footerCtaLabel: "Voir le projet",
    //         },
    //         {
    //           title: "Vanite sur mesure, Laval",
    //           href: "/projets/salle-de-bain/vanite-sur-mesure-laval/",
    //           description:
    //             "Salle de bain sur mesure avec rangement optimise, adaptation a l'humidite et finition propre.",
    //           image: {
    //             src: "/images/generated/spaces/espaces-featured-bath-project-01.png",
    //             alt: "Projet vanite sur mesure a Laval",
    //           },
    //           badges: ["Salle de bain", "Laval", "Vanite"],
    //           footerCtaLabel: "Voir le projet",
    //         },
    //         {
    //           title: "Cuisine sur mesure, Rive-Sud",
    //           href: "/projets/cuisine/cuisine-sur-mesure-rive-sud/",
    //           description:
    //             "Projet residentiel sur mesure avec configuration adaptee, materiaux coherents et pose bien executee.",
    //           image: {
    //             src: "/images/generated/home/home-featured-cuisine-project-01.png",
    //             alt: "Projet cuisine sur mesure sur la Rive-Sud",
    //           },
    //           badges: ["Cuisine", "Rive-Sud", "Residentiel"],
    //           footerCtaLabel: "Voir le projet",
    //         },
    //         {
    //           title: "Amenagement sur mesure, bureau centre-ville de Montreal",
    //           href: "/projets/commercial/amenagement-sur-mesure-bureau-centre-ville-montreal/",
    //           description:
    //             "Amenagement commercial pense pour l'usage, la durabilite et la logistique d'installation en contexte actif.",
    //           image: {
    //             src: "/images/generated/spaces/espaces-featured-commercial-project-01.png",
    //             alt: "Projet commercial sur mesure au centre-ville de Montreal",
    //           },
    //           badges: ["Commercial", "Montreal", "Centre-ville"],
    //           footerCtaLabel: "Voir le projet",
    //         },
    //       ],
    //     },
    //   },
    // },
    // {
    //   id: "proof",
    //   content: {
    //     type: "split",
    //     variant: "text-divider-cards",
    //     props: {
    //       heading: "Ce que ces realisations doivent prouver",
    //       description:
    //         "Une fiche projet doit rassurer par des faits visibles: contexte, contraintes, logique de solution, details materiaux et qualite d'execution. L'index projets sert donc a faire remonter les bons exemples et a vous diriger ensuite vers la bonne page pilier.",
    //       cards: [
    //         {
    //           title: "Projection",
    //           description:
    //             "Aider le lecteur a se reconnaitre dans un cas reel proche de sa situation.",
    //         },
    //         {
    //           title: "Credibilite",
    //           description:
    //             "Montrer que la qualite n'est pas seulement annoncee, mais visible dans le resultat.",
    //         },
    //         {
    //           title: "Transition vers conversion",
    //           description:
    //             "Orienter naturellement vers la page pilier ou la prise de contact quand le fit devient evident.",
    //         },
    //       ],
    //       columns: "1",
    //     },
    //   },
    // },
    {
      id: "process",
      frame: { surface: "muted" },
      content: {
        type: "process",
        variant: "split-cards",
        props: {
          heading: "La logique de projet derriere le resultat final",
          description:
            "Les bonnes realisations viennent rarement d'un coup de chance. Elles viennent d'une methode qui clarifie les decisions en amont et protege l'execution jusqu'a la pose.",
          steps: [
            {
              number: "1",
              title: "Cadrage",
              description:
                "Comprendre les besoins, les contraintes du lieu et la portee reelle du projet.",
            },
            {
              number: "2",
              title: "Conception et validations",
              description:
                "Structurer l'implantation, confirmer les choix et fermer les decisions qui influencent la fabrication.",
            },
            {
              number: "3",
              title: "Fabrication",
              description:
                "Produire sur une base stable avec des choix materiaux et techniques deja alignes.",
            },
            {
              number: "4",
              title: "Installation et finition",
              description:
                "Ajuster, aligner et livrer un resultat propre, coherent et durable.",
            },
          ],
          actions: [
            {
              label: "Voir le processus",
              href: "/processus/",
              variant: "outline",
            },
            {
              label: "Voir les services",
              href: "/services/",
              variant: "outline",
            },
          ],
        },
      },
    },
    // {
    //   id: "pillar-links",
    //   content: {
    //     type: "grid",
    //     variant: "link-cards-compact",
    //     props: {
    //       heading: "Aller vers la bonne page pilier",
    //       intro:
    //         "Si un type de projet ressemble au votre, la prochaine etape logique est la page pilier correspondante.",
    //       columns: "3",
    //       items: [
    //         {
    //           title: "Cuisine sur mesure",
    //           description:
    //             "Approche complete, materiaux, references et FAQ pour les projets cuisine.",
    //           href: "/espaces/cuisine/",
    //           badges: ["Pilier", "Cuisine"],
    //           ctaLabel: "Voir la page cuisine",
    //         },
    //         {
    //           title: "Salle de bain et vanites",
    //           description:
    //             "Contraintes d'humidite, choix techniques et execution en salle de bain.",
    //           href: "/espaces/salle-de-bain/",
    //           badges: ["Pilier", "Salle de bain"],
    //           ctaLabel: "Voir la page salle de bain",
    //         },
    //         {
    //           title: "Walk-in et rangement",
    //           description:
    //             "Organisation, accessoirisation et optimisation de l'espace.",
    //           href: "/espaces/walk-in/",
    //           badges: ["Pilier", "Rangement"],
    //           ctaLabel: "Voir la page walk-in",
    //         },
    //         {
    //           title: "Salle de lavage",
    //           description:
    //             "Configuration fonctionnelle, durabilite et usage quotidien.",
    //           href: "/espaces/salle-de-lavage/",
    //           badges: ["Pilier", "Fonctionnel"],
    //           ctaLabel: "Voir la page salle de lavage",
    //         },
    //         {
    //           title: "Commercial",
    //           description:
    //             "Amenagements sur mesure pour contextes professionnels et usage intensif.",
    //           href: "/espaces/commercial/",
    //           badges: ["Pilier", "Commercial"],
    //           ctaLabel: "Voir la page commercial",
    //         },
    //         {
    //           title: "Renovation cle en main",
    //           description:
    //             "Quand le projet depasse les armoires et demande de la coordination.",
    //           href: "/services/renovation/",
    //           badges: ["Service", "Coordination"],
    //           ctaLabel: "Voir la renovation",
    //         },
    //       ],
    //     },
    //   },
    // },
    {
      id: "cta",
      content: {
        type: "cta",
        variant: "band-split-actions",
        props: {
          heading: "Vous avez un projet similaire ?",
          intro:
            "Si une realisation ressemble a votre contexte, on peut vous aider a cadrer la portee, les choix et la meilleure suite.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir nos espaces",
              href: "/espaces/",
              variant: "outline",
            },
          ],
          note: "Residentiel et commercial - Montreal, Laval, Rive-Sud",
        },
      },
    },
  ],
};
