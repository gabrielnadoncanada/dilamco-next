import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationCuisinePage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Rénovation de cuisine à Montréal — clé en main",
    description:
      "Rénovation de cuisine complète : démolition, plomberie, électricité, ventilation, armoires, comptoirs. Entrepreneur général licencié RBQ.",
    path: "/services/renovation/cuisine",
    ogAlt: "Rénovation de cuisine complète par un entrepreneur général",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Rénovation", url: SITE.url + "/services/renovation" },
    {
      name: "Rénovation de cuisine",
      url: SITE.url + "/services/renovation/cuisine",
    },
  ],
  service: {
    name: "Rénovation de cuisine",
    description:
      "Rénovation de cuisine complète par un entrepreneur général : permis, démolition, plomberie, électricité, ventilation, planchers, armoires sur mesure, comptoirs et finition.",
    url: SITE.url + "/services/renovation/cuisine",
    serviceType: "Rénovation de cuisine",
    areaServed: [
      "Montréal",
      "Ouest-de-l'Île",
      "Laval",
      "Rive-Sud",
      "Vaudreuil-Soulanges",
    ],
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Dilamco - Rénovation",
          heading:
            "Rénovation de cuisine complète : un entrepreneur général, pas six fournisseurs",
          description:
            "Refaire une cuisine, ce n'est pas commander des armoires. C'est démolir, déplacer de la plomberie, ajouter des circuits électriques, sortir une hotte au mur extérieur, refaire le plancher et les murs, poser les armoires et le comptoir, puis tout raccorder. Nous signons un seul contrat pour l'ensemble, permis compris.",
          actions: [
            {
              label: "Demander une estimation gratuite",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos réalisations",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: [
            "Licence RBQ 8306-0806-27",
            "Permis inclus",
            "Corps de métier coordonnés",
          ],
          image: {
            src: "/images/generated/renovation/renovation-cuisine-hero-01.webp",
            alt: "Cuisine rénovée par un entrepreneur général à Montréal",
          },
          caption:
            "Ouest-de-l'Île, Montréal, Laval, Rive-Sud et Vaudreuil-Soulanges",
        },
      },
    },
    {
      id: "problems",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce qui fait vraiment dérailler une rénovation de cuisine",
          description:
            "La cuisine est la pièce qui concentre le plus de corps de métier au mètre carré : plomberie, électricité, ventilation, revêtements, menuiserie, comptoir. Quand ces interventions sont achetées séparément, les problèmes arrivent toujours au même endroit.",
          cards: [
            {
              title: "Un mur porteur ouvert sans permis",
              description:
                "Beaucoup de rénovations de cuisine visent à ouvrir sur le salon. Dès qu'un mur porteur est touché, la ville exige un permis et souvent un plan scellé par un ingénieur pour la poutre de remplacement. Sauter cette étape peut faire arrêter le chantier.",
            },
            {
              title: "La plomberie déplacée trop tard",
              description:
                "Déplacer un évier ou un lave-vaisselle exige de rouvrir le plancher ou les murs, de refaire un drain avec la bonne pente et de faire inspecter avant de fermer. Décider ça une fois les armoires commandées coûte cher.",
            },
            {
              title: "L'entrée électrique insuffisante",
              description:
                "Cuisinière, four mural, plaque à induction, lave-vaisselle, micro-ondes encastré, îlot avec prises : le panneau doit suivre. On le vérifie à la visite, pas la semaine du branchement.",
            },
            {
              title: "La hotte qui n'évacue nulle part",
              description:
                "Une hotte performante demande une sortie vers l'extérieur, un conduit de bon diamètre et un trajet court. Dans un condo ou au centre d'une maison, c'est parfois le point qui redéfinit tout l'agencement.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "included",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "Ce que comprend une rénovation de cuisine complète",
          intro:
            "La portée exacte est écrite dans la soumission. Voici ce qu'un mandat de cuisine complète couvre habituellement, du permis à la dernière moulure.",
          columns: "2",
          items: [
            {
              title: "Permis et démolition",
              description:
                "Ce qui se passe avant que le premier caisson arrive.",
              icon: "fileCheck",
              bullets: [
                "Vérification du besoin de permis : mur porteur, plomberie déplacée, ouverture extérieure.",
                "Plans déposés à la ville ou à l'arrondissement, avec expertise d'ingénieur si la structure est touchée.",
                "Protection des lieux, retrait des anciennes armoires, du comptoir et des revêtements.",
                "Gestion et évacuation des débris.",
              ],
            },
            {
              title: "Plomberie, électricité, ventilation",
              description:
                "Les travaux qui doivent être faits avant de fermer les murs.",
              icon: "wrench",
              bullets: [
                "Déplacement de l'alimentation et du drain d'évier, ligne du lave-vaisselle et du réfrigérateur.",
                "Nouveaux circuits, prises d'îlot, éclairage encastré et sous-armoires.",
                "Conduit de hotte vers l'extérieur avec le bon diamètre et le bon trajet.",
                "Inspections municipales planifiées avant la fermeture des murs.",
              ],
            },
            {
              title: "Planchers, murs et plafonds",
              description:
                "La base sur laquelle tout le reste s'aligne.",
              icon: "layers",
              bullets: [
                "Réfection du sous-plancher et correction de la planéité avant la pose.",
                "Plancher neuf ou raccord propre avec les pièces adjacentes.",
                "Plâtre, joints, ponçage et peinture après les travaux mécaniques.",
                "Dosseret, moulures et transitions de finition.",
              ],
            },
            {
              title: "Armoires, comptoirs et finition",
              description:
                "La partie visible, fournie et posée par la même équipe.",
              icon: "package2",
              bullets: [
                "Armoires sur mesure fabriquées pour nous par notre usine partenaire, sous notre sous-catégorie RBQ 12.",
                "Caissons en contreplaqué de bouleau, tiroirs en bois massif de bouleau, quincaillerie de qualité.",
                "Gabarit, coupe et pose du comptoir, avec découpes d'évier et de plaque.",
                "Installation des électroménagers, ajustements de portes et de tiroirs, inspection finale.",
              ],
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
          heading: "Le déroulement d'un chantier de cuisine",
          intro:
            "L'ordre n'est pas négociable : ce qui se cache derrière les murs se fait avant ce qui se voit. Chaque étape de plus qu'on inverse se paie en reprises.",
          steps: [
            {
              number: "1",
              title: "Visite et soumission",
              description:
                "Relevé des dimensions, vérification du panneau électrique, de la plomberie existante, de la structure et du trajet de hotte possible. Estimation détaillée sous 24 à 48 heures ouvrables.",
            },
            {
              number: "2",
              title: "Contrat, plans et permis",
              description:
                "Signature du contrat avec l'échéancier, plans d'implantation de la cuisine, plans de fabrication des armoires et dépôt du permis quand il est requis.",
            },
            {
              number: "3",
              title: "Démolition",
              description:
                "Protection des aires de circulation, retrait des armoires, du comptoir et des revêtements, ouverture des murs concernés. C'est ici qu'apparaissent les surprises de l'existant.",
            },
            {
              number: "4",
              title: "Mécanique et inspection",
              description:
                "Charpente si un mur est ouvert, plomberie, électricité et ventilation. Inspection municipale avant de refermer quoi que ce soit.",
            },
            {
              number: "5",
              title: "Fermeture et finition",
              description:
                "Isolation si requise, gypse, joints, peinture, puis pose du plancher. La pièce redevient propre et d'équerre avant l'arrivée des armoires.",
            },
            {
              number: "6",
              title: "Armoires, comptoir, livraison",
              description:
                "Pose et nivellement des caissons, gabarit et installation du comptoir, dosseret, raccordement des appareils, ajustements et remise des lieux.",
            },
          ],
        },
      },
    },
    {
      id: "permis",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Permis : quand en faut-il un pour une cuisine ?",
          intro:
            "Les exigences varient d'une municipalité et d'un arrondissement à l'autre, mais la logique est constante au Québec. Nous validons votre cas avant le début des travaux et nous déposons la demande à votre place.",
          items: [
            {
              title: "Mur porteur modifié ou retiré",
              description:
                "Permis requis, presque toujours accompagné d'un plan scellé par un ingénieur pour la poutre et les appuis. C'est le cas le plus fréquent en rénovation de cuisine.",
            },
            {
              title: "Plomberie déplacée ou ajoutée",
              description:
                "Déplacer un évier, ajouter un drain d'îlot ou modifier la ventilation de plomberie déclenche généralement un permis et une inspection avant fermeture.",
            },
            {
              title: "Nouvelle ouverture extérieure",
              description:
                "Percer un mur pour une sortie de hotte, agrandir une fenêtre ou ajouter une porte-fenêtre touche l'enveloppe et l'apparence du bâtiment : permis requis.",
            },
            {
              title: "Rafraîchissement sans travaux structuraux",
              description:
                "Remplacer les armoires et le comptoir au même endroit, repeindre et changer le plancher n'exige habituellement pas de permis. On le confirme quand même avec la ville.",
            },
            {
              title: "Condo et copropriété",
              description:
                "Au permis municipal s'ajoutent l'autorisation du syndicat, les horaires de travaux, l'accès par ascenseur et parfois des restrictions sur la plomberie et la ventilation.",
            },
          ],
          actions: [
            {
              label: "Voir la rénovation clé en main",
              href: "/services/renovation",
              variant: "ghost",
            },
            {
              label: "Voir les zones desservies",
              href: "/zones",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-cuisine-approach-01.webp",
            alt: "Planification et relevé d'une rénovation de cuisine",
          },
          cardTitle: "Pourquoi on ne saute pas cette étape",
          cardDescription:
            "Des travaux faits sans permis peuvent entraîner un arrêt de chantier, une remise en état et des complications à la revente ou lors d'une réclamation d'assurance. Notre licence RBQ nous engage à respecter le Code de construction du Québec.",
        },
      },
    },
    {
      id: "prix",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Combien coûte une rénovation de cuisine ?",
          description:
            "Les fourchettes ci-dessous sont indicatives pour le marché québécois. Le prix réel dépend de la superficie, de l'état de l'existant, de la quantité de travaux mécaniques et du niveau de finition. La soumission détaillée est gratuite et engage les deux parties une fois signée.",
          cards: [
            {
              title: "Rafraîchissement — à partir d'environ 20 000 $",
              description:
                "Armoires, comptoir et plancher remplacés au même endroit, sans toucher à la plomberie ni à la structure. Pas de permis dans la plupart des cas.",
            },
            {
              title: "Rénovation complète — 35 000 $ à 50 000 $ et plus",
              description:
                "Démolition, agencement revu, plomberie et électricité modifiées, ventilation, planchers et murs refaits, armoires sur mesure, comptoir et finition. C'est le mandat typique chez nous.",
            },
            {
              title: "Ouverture sur l'aire de vie — à prévoir en plus",
              description:
                "Retirer un mur porteur ajoute l'expertise d'ingénieur, la poutre, les appuis, le permis et les travaux de plafond et de plancher qui suivent. C'est souvent la ligne la plus sous-estimée d'un budget de cuisine.",
            },
            {
              title: "Ce qui fait varier le prix",
              description:
                "Superficie, nombre de caissons, matériau du comptoir, électroménagers intégrés, déplacement de plomberie, capacité du panneau électrique, hauteur de plafond et accès au chantier.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "intégration",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Les services connexes d'un projet de cuisine",
          intro:
            "Une rénovation de cuisine touche rarement la cuisine seule. Voici les mandats qui s'y greffent le plus souvent.",
          items: [
            {
              title: "Rénovation de plancher",
              href: "/services/renovation/plancher",
              description:
                "Le plancher de cuisine se raccorde à celui du salon et de l'entrée. Sous-plancher, niveaux et transitions sont à régler avant la pose des armoires.",
              image: {
                src: "/images/generated/renovation/renovation-plancher-hero-01.webp",
                alt: "Plancher raccordé entre la cuisine et l'aire de vie",
              },
              badges: ["Plancher", "Transitions"],
              footerCtaLabel: "Voir plancher",
            },
            {
              title: "Agrandissement de maison",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Quand la cuisine est trop petite, l'ajout d'une rallonge arrière est parfois la seule vraie solution. Fondations, structure, enveloppe et raccordements.",
              image: {
                src: "/images/generated/renovation/renovation-extension-hero-01.webp",
                alt: "Rallonge arrière pour agrandir une cuisine",
              },
              badges: ["Agrandissement", "Structure"],
              footerCtaLabel: "Voir agrandissement",
            },
            {
              title: "Cuisine sur mesure",
              href: "/espaces/cuisine",
              description:
                "Le volet armoires du projet : implantation, îlot, rangement, finis et quincaillerie, avec des exemples de réalisations.",
              image: {
                src: "/images/generated/spaces/space-cuisine-hero-01.webp",
                alt: "Cuisine sur mesure réalisée par Dilamco",
              },
              badges: ["Armoires", "Sur mesure"],
              footerCtaLabel: "Voir la page cuisine",
            },
            {
              title: "Rénovation après sinistre",
              href: "/services/renovation/apres-sinistre",
              description:
                "Après un dégât d'eau, les caissons du bas et le plancher de cuisine sont souvent à remplacer. Reconstruction et dossier d'assurance.",
              image: {
                src: "/images/generated/renovation/renovation-plancher-approach-01.webp",
                alt: "Reconstruction de cuisine après un dégât d'eau",
              },
              badges: ["Sinistre", "Assurance"],
              footerCtaLabel: "Voir après sinistre",
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
          heading: "Ce qu'un chantier de cuisine bien mené doit produire",
          description:
            "Une cuisine réussie ne se juge pas seulement sur une photo prise le jour de la livraison. Elle se juge sur ce qui a été fait derrière les murs et sur ce qui tient encore cinq ans plus tard.",
          cards: [
            {
              title: "Des travaux conformes et inspectés",
              description:
                "Plomberie, électricité et ventilation réalisées selon le Code et validées par l'inspecteur municipal avant la fermeture des murs.",
            },
            {
              title: "Un échéancier tenu",
              description:
                "Les corps de métier se suivent sans temps mort, et les écarts sont annoncés d'avance plutôt que constatés après coup.",
            },
            {
              title: "Une finition qui tient",
              description:
                "Armoires de niveau, portes alignées, comptoir sans jeu, dosseret droit, raccords de plancher propres entre les pièces.",
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
          heading: "FAQ — rénovation de cuisine",
          intro:
            "Prix, permis, durée, plomberie, condo, électroménagers et garantie.",
          items: [
            {
              q: "Combien coûte une rénovation de cuisine complète ?",
              a: "À titre indicatif, une rénovation complète se situe généralement entre 35 000 $ et 50 000 $ et plus, et un simple rafraîchissement démarre autour de 20 000 $. La superficie, le déplacement de plomberie, l'ouverture d'un mur porteur, le matériau du comptoir et les électroménagers intégrés sont les principaux facteurs. L'estimation détaillée est gratuite et précise la portée exacte.",
            },
            {
              q: "Ai-je besoin d'un permis pour refaire ma cuisine ?",
              a: "Oui dans la plupart des rénovations complètes : dès qu'un mur porteur est modifié, que la plomberie est déplacée ou qu'une ouverture extérieure est percée, votre ville exige un permis et parfois un plan d'ingénieur. Un remplacement d'armoires et de comptoir au même emplacement n'en demande habituellement pas. Nous vérifions auprès de votre municipalité et déposons la demande.",
            },
            {
              q: "Combien de temps dure le chantier ?",
              a: "Pour une rénovation complète, il faut compter plusieurs semaines de travaux sur place, auxquelles s'ajoutent le délai de permis de votre municipalité et le délai de production des armoires sur mesure, de 9 à 15 semaines. Ces deux délais se planifient en parallèle des travaux préparatoires pour éviter d'immobiliser la cuisine inutilement.",
            },
            {
              q: "Peut-on déplacer l'évier ou le lave-vaisselle ?",
              a: "Oui, mais c'est un travail de plomberie qui exige généralement d'ouvrir le plancher ou le mur, de refaire le drain avec la bonne pente, d'ajuster la ventilation de plomberie et de faire inspecter avant de refermer. Cela se décide au moment de la soumission, pas une fois les armoires commandées.",
            },
            {
              q: "Puis-je enlever le mur entre la cuisine et le salon ?",
              a: "Souvent oui, mais il faut d'abord déterminer si le mur est porteur. S'il l'est, un ingénieur en structure calcule la poutre et les appuis, le plan est déposé avec la demande de permis et les travaux de plafond, de plancher et d'électricité qui en découlent doivent être budgétés. Nous vous disons dès la visite dans quelle situation vous êtes.",
            },
            {
              q: "Est-ce faisable dans un condo ?",
              a: "Oui. Il faut valider avec le syndicat les horaires de travaux, l'accès par ascenseur, la protection des aires communes et les restrictions de la déclaration de copropriété, notamment pour la plomberie, l'évacuation de hotte et les revêtements de plancher. Ces points se règlent avant le début, pas pendant.",
            },
            {
              q: "Puis-je habiter la maison pendant les travaux ?",
              a: "La plupart des clients restent chez eux. Nous protégeons les aires de circulation et regroupons les journées les plus bruyantes. Prévoyez tout de même une cuisine temporaire — réfrigérateur, micro-ondes, évier de salle de bain — pour la période où la pièce est hors service.",
            },
            {
              q: "Fournissez-vous les armoires et le comptoir ?",
              a: "Oui. Les armoires sur mesure sont fabriquées pour nous par notre usine partenaire, sous la sous-catégorie 12 de notre licence RBQ, puis mesurées et installées par nos équipes. Le comptoir est gabarié, coupé et posé dans le même mandat. Vous n'avez pas de fournisseur supplémentaire à coordonner.",
            },
            {
              q: "Qui installe les électroménagers ?",
              a: "Nous prévoyons les dégagements, les circuits, l'alimentation en eau et l'évacuation au moment des travaux mécaniques, puis nous raccordons les appareils à la fin du chantier. Les appareils encastrés, four mural et hotte intégrée demandent des dimensions confirmées avant la fabrication des armoires.",
            },
            {
              q: "Les travaux sont-ils garantis ?",
              a: "Oui. Les travaux sont garantis et les modalités sont inscrites au contrat. Notre licence RBQ 8306-0806-27 est valide et sans restriction depuis 2004, avec un cautionnement de 40 000 $ et aucune réclamation au dossier. Responsabilité civile et assurance chantier sont en vigueur.",
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
          heading: "Prêt à faire évaluer votre projet de cuisine ?",
          intro:
            "Nous venons voir la pièce, vérifions la structure, le panneau électrique et la plomberie, puis revenons avec une estimation détaillée sous 24 à 48 heures ouvrables.",
          actions: [
            {
              label: "Demander une estimation gratuite",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir la rénovation clé en main",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          note: "Licence RBQ 8306-0806-27 · Permis, corps de métier et échéancier inclus",
        },
      },
    },
  ],
};
