import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationPlancherPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Rénovation de plancher à Montréal — entrepreneur général",
    description:
      "Rénovation de plancher : sous-plancher, planéité, niveaux, transitions et pose. Entrepreneur général licencié RBQ, contrat écrit.",
    path: "/services/renovation/plancher",
    ogAlt: "Rénovation de plancher par un entrepreneur général",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Rénovation", url: SITE.url + "/services/renovation" },
    {
      name: "Rénovation de plancher",
      url: SITE.url + "/services/renovation/plancher",
    },
  ],
  service: {
    name: "Rénovation de plancher",
    description:
      "Réfection de plancher par un entrepreneur général : évaluation du sous-plancher, correction des niveaux, transitions entre pièces, pose et finition, coordonnées avec le reste du chantier.",
    url: SITE.url + "/services/renovation/plancher",
    serviceType: "Rénovation de plancher",
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
            "Rénovation de plancher : ce qui se passe sous le revêtement décide du résultat",
          description:
            "Un plancher qui craque, qui bouge ou dont les joints s'ouvrent n'a presque jamais un problème de revêtement. Il a un problème de sous-plancher, de planéité, d'humidité ou de fixation. Nous ouvrons, corrigeons la base, puis posons — avec les transitions et les seuils réglés d'avance.",
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
          badges: [
            "Licence RBQ 8306-0806-27",
            "Sous-plancher et niveaux",
            "Contrat écrit",
          ],
          image: {
            src: "/images/generated/renovation/renovation-plancher-hero-01.webp",
            alt: "Rénovation de plancher résidentiel par un entrepreneur général",
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
          heading: "Pourquoi un plancher neuf se met à bouger",
          description:
            "Dans une maison de l'Ouest-de-l'Île construite dans les années 1960 ou 1970, le plancher a souvent été recouvert deux ou trois fois. Chaque couche cache l'état réel du support. Les problèmes qui reviennent le plus sont tous structurels, pas esthétiques.",
          cards: [
            {
              title: "Un sous-plancher fatigué ou mal fixé",
              description:
                "Contreplaqué trop mince, vis manquantes, panneaux gonflés par une ancienne fuite : le craquement vient de là. Poser du neuf par-dessus ne fait que le rendre plus audible.",
            },
            {
              title: "Une planéité hors tolérance",
              description:
                "Les fabricants de bois d'ingénierie, de vinyle et de céramique imposent une tolérance de planéité. Au-delà, la garantie tombe et le revêtement finit par se déjointer ou sonner creux.",
            },
            {
              title: "Un taux d'humidité non vérifié",
              description:
                "Sur dalle de béton comme sur bois, poser un plancher sans mesurer l'humidité du support mène au gondolement. C'est la première cause de reprise dans les sous-sols et les rez-de-chaussée sur dalle.",
            },
            {
              title: "Des transitions improvisées",
              description:
                "Le plancher se raccorde à la céramique d'entrée, au seuil de salle de bain, à l'escalier et aux plinthes. Quand ces points ne sont pas prévus au plan, on les règle avec une baguette de métal qu'on regrette.",
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
          heading: "Ce que comprend une réfection de plancher",
          intro:
            "La portée est écrite dans la soumission. Un mandat de plancher complet couvre quatre volets, et le premier est celui qui détermine si le reste tiendra.",
          columns: "2",
          items: [
            {
              title: "Arrachage et diagnostic",
              description: "On voit le support avant de chiffrer la pose.",
              icon: "hammer",
              bullets: [
                "Retrait des revêtements existants, des plinthes et des seuils.",
                "Inspection du sous-plancher, des solives visibles et des traces d'eau.",
                "Test d'humidité sur dalle de béton ou sur support de bois.",
                "Dans un bâtiment plus ancien, vérification avant arrachage des anciennes tuiles de vinyle et de leur colle.",
              ],
            },
            {
              title: "Correction de la base",
              description: "L'étape que la plupart des poseurs facturent en extra.",
              icon: "ruler",
              bullets: [
                "Remplacement des panneaux de contreplaqué abîmés, revissage complet.",
                "Ajout d'une épaisseur de sous-plancher quand la rigidité est insuffisante.",
                "Nivellement à l'autolissant ou ponçage des joints hauts pour respecter la tolérance du fabricant.",
                "Renforcement des solives ou pose d'un support additionnel si un affaissement est constaté.",
              ],
            },
            {
              title: "Pose du revêtement",
              description: "Bois franc, ingénierie, vinyle ou céramique.",
              icon: "layers",
              bullets: [
                "Acclimatation du bois dans la pièce avant la pose.",
                "Membrane, sous-tapis acoustique ou membrane de découplage selon le revêtement et l'étage.",
                "Sens de pose et calepinage validés avec vous avant de commencer.",
                "Jeux périphériques respectés pour laisser le plancher travailler.",
              ],
            },
            {
              title: "Niveaux, seuils et finition",
              description: "Les détails qui distinguent une pose propre.",
              icon: "slidersHorizontal",
              bullets: [
                "Transitions entre pièces et entre matériaux planifiées d'avance.",
                "Raccords avec l'escalier, les seuils de porte et les nez de marche.",
                "Plinthes, quarts-de-rond et calfeutrage de finition.",
                "Ajustement des portes quand l'épaisseur du plancher change.",
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
          heading: "Le déroulement d'un chantier de plancher",
          intro:
            "Quand le plancher fait partie d'un projet plus large, sa place dans la séquence change tout : trop tôt et il se fait abîmer, trop tard et les armoires sont déjà posées au mauvais niveau.",
          steps: [
            {
              number: "1",
              title: "Visite et relevé",
              description:
                "Mesure des surfaces, vérification de la planéité et des niveaux entre pièces, repérage des seuils, des escaliers et des revêtements existants.",
            },
            {
              number: "2",
              title: "Soumission",
              description:
                "Portée écrite : arrachage, correction du support, revêtement, transitions et finition, avec les exclusions. Estimation sous 24 à 48 heures ouvrables.",
            },
            {
              number: "3",
              title: "Arrachage et mise à nu",
              description:
                "Protection des lieux, retrait des anciens revêtements et des plinthes, évacuation des débris, puis inspection réelle du support.",
            },
            {
              number: "4",
              title: "Préparation du support",
              description:
                "Réparations, revissage, ajout de sous-plancher, nivellement et séchage. C'est ici que se joue la durée de vie du plancher.",
            },
            {
              number: "5",
              title: "Pose",
              description:
                "Acclimatation, membranes, calepinage puis pose du revêtement, avec les jeux périphériques et les transitions prévus au plan.",
            },
            {
              number: "6",
              title: "Finition et livraison",
              description:
                "Seuils, plinthes, quarts-de-rond, ajustement des portes, nettoyage et inspection finale avec vous.",
            },
          ],
        },
      },
    },
    {
      id: "sequence",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Où le plancher se place dans la séquence du chantier",
          intro:
            "C'est la question la plus utile à régler avant de commencer, et celle qui coûte le plus cher quand elle est tranchée au hasard. Voici les règles que nous appliquons sur un chantier coordonné.",
          items: [
            {
              title: "Après les travaux mécaniques et la peinture",
              description:
                "Plomberie, électricité, ventilation, gypse et première couche de peinture passent avant. Un plancher neuf sous un chantier ouvert se fait marquer, peu importe la protection.",
            },
            {
              title: "Avant les armoires, dans la plupart des cas",
              description:
                "Poser le plancher sous les caissons évite les décalages de hauteur si vous changez d'électroménager plus tard et simplifie le raccord au pied de l'îlot.",
            },
            {
              title: "Les niveaux entre pièces se décident au plan",
              description:
                "Céramique d'entrée, bois du salon, vinyle du sous-sol : les épaisseurs diffèrent. On calcule les seuils avant l'achat, pas après la pose.",
            },
            {
              title: "La salle de bain suit sa propre logique",
              description:
                "Membrane d'étanchéité, pente de douche et seuil se coordonnent avec le plancher du corridor. C'est un point de jonction à prévoir explicitement.",
            },
            {
              title: "Le sous-sol demande un support isolant",
              description:
                "Sur dalle, un sous-plancher isolant ou une membrane de désolidarisation évite le froid et la condensation sous le revêtement.",
            },
          ],
          actions: [
            {
              label: "Voir la rénovation de cuisine",
              href: "/services/renovation/cuisine",
              variant: "ghost",
            },
            {
              label: "Voir la finition de sous-sol",
              href: "/services/renovation/sous-sol",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-plancher-approach-01.webp",
            alt: "Préparation du sous-plancher avant la pose d'un revêtement",
          },
          cardTitle: "Pourquoi un entrepreneur général",
          cardDescription:
            "Quand le plancher fait partie d'un projet plus large, c'est nous qui décidons de sa place dans le calendrier, qui protégeons la surface et qui répondons du raccord avec les armoires, la salle de bain et l'escalier. Une seule entreprise, un seul contrat.",
        },
      },
    },
    {
      id: "prix",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce qui fait varier le prix d'un plancher",
          description:
            "Le coût d'une réfection de plancher se compose de trois blocs distincts : le retrait de l'existant, la remise en état du support et la pose du nouveau revêtement. Beaucoup de soumissions ne chiffrent que le troisième, ce qui explique les écarts.",
          cards: [
            {
              title: "L'arrachage et l'évacuation",
              description:
                "Retirer plusieurs couches collées, du tapis agrafé ou de la céramique sur mortier demande beaucoup plus de temps qu'un flottant à déclipser.",
            },
            {
              title: "La remise en état du support",
              description:
                "Revissage, remplacement de panneaux, ajout d'une épaisseur de sous-plancher ou nivellement autolissant : c'est la ligne la plus variable d'une maison à l'autre.",
            },
            {
              title: "Le revêtement et sa pose",
              description:
                "Bois franc massif, ingénierie, vinyle de luxe et céramique n'ont ni le même prix au pied carré, ni la même préparation, ni la même durée de pose.",
            },
            {
              title: "Les transitions et la finition",
              description:
                "Seuils, nez de marche, plinthes, ajustement des portes et raccords avec l'escalier : petits postes, mais ils s'additionnent sur une maison complète.",
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
          heading: "Le plancher dans un projet plus large",
          intro:
            "Une réfection de plancher accompagne presque toujours un autre mandat. Voici les combinaisons les plus fréquentes.",
          items: [
            {
              title: "Rénovation de cuisine",
              href: "/services/renovation/cuisine",
              description:
                "Le plancher de cuisine se raccorde au salon et à l'entrée, et se pose avant les armoires. La séquence se planifie dès la soumission.",
              image: {
                src: "/images/generated/renovation/renovation-cuisine-hero-01.webp",
                alt: "Plancher posé avant l'installation des armoires de cuisine",
              },
              badges: ["Cuisine", "Séquence"],
              footerCtaLabel: "Voir cuisine",
            },
            {
              title: "Finition de sous-sol",
              href: "/services/renovation/sous-sol",
              description:
                "Sur dalle de béton, l'humidité et l'isolation du support conditionnent le choix du revêtement et la méthode de pose.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
                alt: "Plancher de sous-sol posé sur sous-plancher isolant",
              },
              badges: ["Dalle", "Isolation"],
              footerCtaLabel: "Voir sous-sol",
            },
            {
              title: "Rénovation après sinistre",
              href: "/services/renovation/apres-sinistre",
              description:
                "Après un dégât d'eau, le revêtement et souvent le sous-plancher sont à remplacer. Reconstruction documentée pour l'assureur.",
              image: {
                src: "/images/generated/renovation/renovation-plancher-approach-01.webp",
                alt: "Remplacement d'un plancher après un dégât d'eau",
              },
              badges: ["Dégât d'eau", "Assurance"],
              footerCtaLabel: "Voir après sinistre",
            },
            {
              title: "Agrandissement de maison",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Raccorder le plancher de la nouvelle section à l'existant demande de gérer les niveaux dès la structure, pas à la finition.",
              image: {
                src: "/images/generated/renovation/renovation-extension-hero-01.webp",
                alt: "Raccord de plancher entre une rallonge et la maison existante",
              },
              badges: ["Niveaux", "Raccord"],
              footerCtaLabel: "Voir agrandissement",
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
          heading: "Ce qu'un plancher bien posé doit livrer",
          description:
            "La qualité se juge sur ce qu'on entend et ce qu'on sent sous le pied, pas sur la photo du premier jour. Trois signes ne trompent pas.",
          cards: [
            {
              title: "Un plancher silencieux",
              description:
                "Pas de craquement en marchant, parce que le sous-plancher a été revissé et les panneaux abîmés remplacés.",
            },
            {
              title: "Des joints qui restent fermés",
              description:
                "Planéité respectée, humidité mesurée et jeux périphériques prévus : le revêtement travaille sans s'ouvrir.",
            },
            {
              title: "Des transitions discrètes",
              description:
                "Seuils calculés, raccords d'escalier propres et portes ajustées, pour un résultat qui ne trahit pas où le chantier s'est arrêté.",
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
          heading: "FAQ — rénovation de plancher",
          intro:
            "Sous-plancher, craquements, humidité, ordre des travaux, condo, permis et garantie.",
          items: [
            {
              q: "Peut-on poser le nouveau plancher par-dessus l'ancien ?",
              a: "Parfois, mais rarement une bonne idée. Superposer les couches augmente la hauteur, oblige à recouper toutes les portes, complique les seuils et surtout empêche de voir l'état réel du sous-plancher. Nous recommandons l'arrachage, sauf cas particulier documenté dans la soumission.",
            },
            {
              q: "Pourquoi mon plancher craque-t-il ?",
              a: "Presque toujours à cause du sous-plancher : panneaux mal fixés, vis manquantes, contreplaqué trop mince pour la portée des solives, ou frottement entre deux couches. Le revêtement n'est qu'un symptôme. On règle ça en arrachant, en revissant et en remplaçant ce qui est abîmé.",
            },
            {
              q: "Faut-il un permis pour refaire un plancher ?",
              a: "Non dans la majorité des cas : remplacer un revêtement n'est pas un travail structural. Un permis devient nécessaire si les travaux touchent la structure — renforcer ou modifier des solives, ouvrir une trémie, abaisser une dalle. Nous validons avec votre ville avant de commencer.",
            },
            {
              q: "Dans quel ordre faire le plancher et les armoires ?",
              a: "Dans un chantier coordonné, le plancher se pose après les travaux mécaniques et la peinture, et généralement avant les armoires. Cela évite les décalages de hauteur si un électroménager change plus tard et simplifie le raccord au pied de l'îlot. Nous fixons cette séquence au moment du contrat.",
            },
            {
              q: "Quel revêtement choisir pour un sous-sol ?",
              a: "Sur une dalle de béton, il faut d'abord mesurer l'humidité et prévoir un sous-plancher isolant ou une membrane de désolidarisation. Le vinyle de luxe et la céramique tolèrent bien l'environnement ; le bois franc massif est déconseillé directement sur dalle. Le choix se fait après le test d'humidité.",
            },
            {
              q: "Faut-il acclimater le bois avant la pose ?",
              a: "Oui. Le bois franc et l'ingénierie doivent séjourner dans la pièce où ils seront posés, aux conditions normales de température et d'humidité, avant l'installation. Sauter cette étape est une cause classique de joints ouverts en hiver ou de bombement en été.",
            },
            {
              q: "Est-ce faisable en condo ?",
              a: "Oui, mais plusieurs syndicats imposent une membrane acoustique d'un indice minimal sous le revêtement, ainsi que des horaires de travaux et un accès contrôlé. Nous vérifions la déclaration de copropriété avant de commander les matériaux, pas après.",
            },
            {
              q: "Ma maison date des années 1970. Y a-t-il un risque avec les vieilles tuiles ?",
              a: "Dans les bâtiments plus anciens, certains revêtements de vinyle et certaines colles peuvent contenir des matériaux nécessitant des précautions particulières lors du retrait. Nous faisons vérifier avant l'arrachage plutôt que de prendre le risque, et la démarche est inscrite au contrat.",
            },
            {
              q: "Combien de temps dure un chantier de plancher ?",
              a: "Cela dépend de la surface, du type d'arrachage et de l'état du support. Le nivellement autolissant et l'acclimatation du bois ajoutent des jours de séchage et d'attente qui font partie de l'échéancier. Une durée réaliste est inscrite au contrat après le relevé.",
            },
            {
              q: "Les travaux sont-ils garantis ?",
              a: "Oui. La pose est garantie et les modalités figurent au contrat, en plus de la garantie du fabricant sur le revêtement — garantie qui exige justement une planéité et un taux d'humidité conformes. Notre licence RBQ 8306-0806-27 est valide et sans restriction depuis 2004.",
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
          heading: "Un plancher à refaire correctement ?",
          intro:
            "Nous venons vérifier la planéité, l'état du sous-plancher et les niveaux entre pièces, puis nous revenons avec une estimation détaillée sous 24 à 48 heures ouvrables.",
          actions: [
            {
              label: "Demander une estimation gratuite",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir les zones desservies",
              href: "/zones",
              variant: "ghost",
            },
          ],
          note: "Licence RBQ 8306-0806-27 · Sous-plancher, niveaux et transitions inclus",
        },
      },
    },
  ],
};
