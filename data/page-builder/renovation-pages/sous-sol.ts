import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationSousSolPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Finition de sous-sol à Montréal — clé en main",
    description:
      "Finition de sous-sol : humidité, drainage, isolation, pare-vapeur, issue de secours, permis et plomberie. Entrepreneur général licencié RBQ.",
    path: "/services/renovation/sous-sol",
    ogAlt: "Sous-sol fini par un entrepreneur général à Montréal",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Rénovation", url: SITE.url + "/services/renovation" },
    {
      name: "Finition de sous-sol",
      url: SITE.url + "/services/renovation/sous-sol",
    },
  ],
  service: {
    name: "Finition de sous-sol",
    description:
      "Aménagement et finition de sous-sol par un entrepreneur général : évaluation de l'humidité et du drainage, isolation, pare-vapeur, permis, issue de secours, électricité, plomberie et finition.",
    url: SITE.url + "/services/renovation/sous-sol",
    serviceType: "Finition de sous-sol",
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
            "Finition de sous-sol clé en main : régler l'humidité avant de poser un seul panneau",
          description:
            "Un sous-sol fini ajoute la surface habitable la moins chère au pied carré — à condition de traiter l'eau, l'isolation et la conformité avant la finition. Aménager un sous-sol exige un permis à Montréal, et une chambre exige une issue de secours. Nous prenons le mandat complet, du diagnostic d'humidité à la livraison.",
          actions: [
            {
              label: "Demander une estimation gratuite",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir les aménagements de sous-sol",
              href: "/espaces/sous-sol",
              variant: "ghost",
            },
          ],
          badges: [
            "Licence RBQ 8306-0806-27",
            "Permis obligatoire",
            "Humidité et drainage",
          ],
          image: {
            src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
            alt: "Sous-sol fini et aménagé par un entrepreneur général",
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
          heading: "Pourquoi tant de sous-sols finis sont à refaire",
          description:
            "Le sous-sol est la pièce où l'on voit le plus de travaux faits trop vite. Le résultat paraît bien pendant deux ans, puis l'odeur apparaît, le plancher flotte ou la moisissure remonte derrière le gypse. Les causes sont toujours les mêmes.",
          cards: [
            {
              title: "Finir par-dessus un problème d'eau",
              description:
                "Fissure de fondation, drain français bouché, pente de terrain vers la maison, pompe de puisard défaillante : si l'eau entre encore, aucun matériau ne le corrigera. Le diagnostic vient avant le devis de finition.",
            },
            {
              title: "Un pare-vapeur posé du mauvais côté",
              description:
                "Un mur de sous-sol se monte avec un isolant continu contre le béton et une gestion de la vapeur adaptée. Un polyéthylène mal placé emprisonne l'humidité dans le mur et nourrit la moisissure.",
            },
            {
              title: "Aucune issue de secours dans la chambre",
              description:
                "Une chambre au sous-sol doit avoir une fenêtre d'égress ou une porte donnant dehors. Sans elle, la pièce n'est pas une chambre légale, ce qui pose problème à la revente comme à l'inspection.",
            },
            {
              title: "Des travaux non déclarés",
              description:
                "Aménager un sous-sol exige un permis. Sans permis, la superficie finie n'est pas reconnue, l'électricité n'est pas inspectée et un sinistre peut devenir un litige avec l'assureur.",
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
          heading: "Ce que comprend une finition de sous-sol complète",
          intro:
            "Le mandat se divise en quatre volets. Les deux premiers ne se voient plus une fois terminés, et ce sont eux qui déterminent si le sous-sol tiendra.",
          columns: "2",
          items: [
            {
              title: "Diagnostic, eau et permis",
              description: "L'étape qui conditionne tout le reste.",
              icon: "droplets",
              bullets: [
                "Inspection des murs de fondation, du plancher et des traces d'infiltration ou d'efflorescence.",
                "Vérification du drainage périmétrique, de la pente du terrain, des gouttières et de la pompe de puisard.",
                "Réparation des fissures et correction de l'écoulement avant toute finition.",
                "Demande de permis d'aménagement de sous-sol déposée à votre ville ou arrondissement.",
              ],
            },
            {
              title: "Isolation, pare-vapeur et charpente",
              description: "Le mur qui décide de l'humidité pour vingt ans.",
              icon: "layers",
              bullets: [
                "Isolant continu contre le béton et gestion de la vapeur adaptée au mur de fondation.",
                "Colombages montés en retrait du béton, sans contact direct avec la dalle.",
                "Isolation du pourtour de la dalle et des solives de rive.",
                "Insonorisation du plafond entre le sous-sol et le rez-de-chaussée quand elle est souhaitée.",
              ],
            },
            {
              title: "Électricité, plomberie et issues",
              description: "Les travaux inspectés avant la fermeture des murs.",
              icon: "wrench",
              bullets: [
                "Circuits, prises, éclairage encastré, détecteurs de fumée et de monoxyde de carbone.",
                "Fenêtre d'égress ou porte extérieure si une chambre est aménagée.",
                "Salle de bain au sous-sol : drain dans la dalle ou pompe de relevage, ventilation, alimentation.",
                "Inspections municipales planifiées aux bonnes étapes.",
              ],
            },
            {
              title: "Planchers, plafond et finition",
              description: "La partie visible, posée sur une base saine.",
              icon: "package2",
              bullets: [
                "Revêtement de plancher adapté au sous-sol, sur sous-plancher isolant lorsque requis.",
                "Plafond suspendu ou gypse, selon l'accès aux services et la hauteur disponible.",
                "Gypse, joints, peinture, portes, moulures et escalier.",
                "Rangements, bibliothèque, bar ou meubles sur mesure fournis et installés par nos équipes.",
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
          heading: "Le déroulement d'un chantier de sous-sol",
          intro:
            "L'ordre compte plus ici qu'ailleurs : tout ce qui touche à l'eau et à la conformité se règle avant qu'un seul panneau de gypse soit posé.",
          steps: [
            {
              number: "1",
              title: "Visite et diagnostic",
              description:
                "Inspection des fondations, de la dalle, de la pompe de puisard, du drainage et de la hauteur libre. Repérage de l'entrée d'eau, du panneau électrique et du drain principal.",
            },
            {
              number: "2",
              title: "Soumission et plan",
              description:
                "Plan d'aménagement — salle familiale, chambre, salle de bain, bureau, rangement —, portée écrite et estimation sous 24 à 48 heures ouvrables.",
            },
            {
              number: "3",
              title: "Contrat et permis",
              description:
                "Signature avec l'échéancier, puis dépôt de la demande de permis d'aménagement de sous-sol, avec les plans exigés par votre municipalité.",
            },
            {
              number: "4",
              title: "Travaux correctifs",
              description:
                "Réparation des fissures, correction du drainage ou de la pente, remplacement de la pompe de puisard si nécessaire. On ne finit pas par-dessus une infiltration active.",
            },
            {
              number: "5",
              title: "Structure et mécanique",
              description:
                "Isolation, charpente, fenêtre d'égress, électricité, plomberie et ventilation, puis inspections municipales avant la fermeture des murs.",
            },
            {
              number: "6",
              title: "Finition et livraison",
              description:
                "Gypse, joints, peinture, planchers, plafond, portes, moulures, rangements sur mesure, ajustements et remise des lieux.",
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
          heading: "Permis, issue de secours et conformité",
          intro:
            "L'aménagement d'un sous-sol est encadré. À Montréal comme dans la plupart des municipalités du Grand Montréal, transformer un sous-sol non fini en espace habitable exige un permis de transformation, avec plans à l'appui. Nous montons et déposons la demande.",
          items: [
            {
              title: "Permis d'aménagement obligatoire",
              description:
                "Ajouter des pièces habitables au sous-sol modifie la superficie habitable déclarée du bâtiment. Le permis est requis, et l'arrondissement peut demander un plan d'aménagement coté.",
            },
            {
              title: "Fenêtre d'égress pour toute chambre",
              description:
                "Une chambre au sous-sol doit disposer d'une issue de secours : fenêtre ouvrante de dimensions suffisantes et accessible, ou porte donnant directement à l'extérieur. Cela implique souvent de découper le béton et d'aménager une margelle.",
            },
            {
              title: "Hauteur libre sous plafond",
              description:
                "Le Code impose une hauteur minimale pour qu'un espace soit reconnu habitable. Les conduits, les poutres et les tuyaux se contournent par un plan de plafond réfléchi, parfois par un abaissement de dalle si la marge est trop faible.",
            },
            {
              title: "Électricité et avertisseurs",
              description:
                "Circuits, prises et éclairage sont réalisés selon le Code et inspectés. Avertisseurs de fumée et détecteur de monoxyde de carbone sont installés là où ils sont exigés.",
            },
            {
              title: "Logement accessoire ou pièce familiale",
              description:
                "Créer un logement indépendant au sous-sol dépend du zonage de votre secteur et ajoute des exigences : entrée distincte, séparation coupe-feu, insonorisation, parfois stationnement. C'est une portée différente d'une simple salle familiale.",
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
            src: "/images/generated/spaces/space-sous-sol-materials-01.webp",
            alt: "Matériaux et finition adaptés à un aménagement de sous-sol",
          },
          cardTitle: "Pourquoi le permis vous protège",
          cardDescription:
            "Un sous-sol aménagé avec permis et inspections est reconnu comme superficie habitable, se vend mieux et ne devient pas un point de litige avec l'assureur en cas de sinistre. Notre licence RBQ 8306-0806-27 nous engage à respecter le Code de construction du Québec.",
        },
      },
    },
    {
      id: "usages",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Pièce familiale, chambre, bureau ou logement accessoire ?",
          intro:
            "La portée change beaucoup selon ce que le sous-sol doit devenir. Un espace ouvert sans chambre est le mandat le plus simple ; une chambre ajoute l'issue de secours ; un logement accessoire ajoute le zonage, la séparation coupe-feu et l'entrée distincte.",
          badges: [
            "Salle familiale",
            "Chambre",
            "Salle de bain",
            "Bureau",
            "Rangement",
            "Logement accessoire",
          ],
          cardTitle: "Ce qu'on valide avant de choisir",
          items: [
            "La hauteur libre réelle sous les poutres et les conduits.",
            "La position du drain principal, si une salle de bain est souhaitée.",
            "La possibilité d'ouvrir une fenêtre d'égress dans le mur de fondation.",
            "Le zonage du secteur, si l'objectif est un logement indépendant.",
            "La capacité du panneau électrique et du système de chauffage.",
          ],
          actions: [
            {
              label: "Voir les aménagements de sous-sol",
              href: "/espaces/sous-sol",
              variant: "ghost",
            },
            {
              label: "Parler de votre projet",
              href: "/contact",
              variant: "primary",
            },
          ],
        },
      },
    },
    {
      id: "prix",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Combien coûte une finition de sous-sol ?",
          description:
            "Les ordres de grandeur ci-dessous sont indicatifs pour le marché québécois. Le prix dépend surtout de la superficie, de l'état de l'enveloppe et de la quantité de travaux mécaniques à ajouter.",
          cards: [
            {
              title: "Aménagement de base — à partir d'environ 25 000 $",
              description:
                "Salle familiale ouverte : isolation, charpente, électricité, gypse, peinture, plancher et plafond, sur un sous-sol sain et sans salle de bain.",
            },
            {
              title: "Sous-sol complet — 40 000 $ à 80 000 $ et plus",
              description:
                "Plusieurs pièces fermées, chambre avec fenêtre d'égress, salle de bain, rangements sur mesure et finition soignée. C'est le mandat le plus courant.",
            },
            {
              title: "Travaux correctifs à prévoir en plus",
              description:
                "Réparation de fissures, drain français, pompe de puisard, découpe du béton pour une fenêtre d'égress ou pour un drain de salle de bain : chacun se chiffre à part, selon le diagnostic.",
            },
            {
              title: "Ce qui fait varier le prix",
              description:
                "Superficie, hauteur libre, nombre de pièces fermées, ajout d'une salle de bain, qualité des revêtements, insonorisation du plafond et exigences de zonage si logement accessoire.",
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
          heading: "Ce qui se greffe à un projet de sous-sol",
          intro:
            "La plupart des sous-sols finis entraînent au moins un de ces mandats. Ils sont réalisés dans le même contrat.",
          items: [
            {
              title: "Rénovation de salle de bain",
              href: "/services/renovation/salle-de-bain",
              description:
                "Ajouter une salle de bain au sous-sol : drain dans la dalle ou pompe de relevage, membrane d'étanchéité, ventilation et vanité.",
              image: {
                src: "/images/generated/renovation/renovation-bath-hero-01.webp",
                alt: "Salle de bain aménagée au sous-sol",
              },
              badges: ["Salle de bain", "Plomberie"],
              footerCtaLabel: "Voir salle de bain",
            },
            {
              title: "Rénovation après sinistre",
              href: "/services/renovation/apres-sinistre",
              description:
                "Le sous-sol est la pièce la plus touchée par les dégâts d'eau. Reconstruction après inondation ou refoulement, avec dossier d'assurance.",
              image: {
                src: "/images/generated/renovation/renovation-plancher-approach-01.webp",
                alt: "Reconstruction d'un sous-sol après un dégât d'eau",
              },
              badges: ["Dégât d'eau", "Assurance"],
              footerCtaLabel: "Voir après sinistre",
            },
            {
              title: "Rénovation de plancher",
              href: "/services/renovation/plancher",
              description:
                "Planéité de la dalle, sous-plancher isolant et raccord avec l'escalier : le plancher de sous-sol a ses propres règles.",
              image: {
                src: "/images/generated/renovation/renovation-plancher-hero-01.webp",
                alt: "Pose d'un plancher sur dalle de sous-sol",
              },
              badges: ["Dalle", "Sous-plancher"],
              footerCtaLabel: "Voir plancher",
            },
            {
              title: "Aménagements de sous-sol",
              href: "/espaces/sous-sol",
              description:
                "Cinéma maison, salle de jeux, bar, cave à vin, bibliothèque ou rangement : les usages possibles, avec des exemples.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-salle-jeux-01.webp",
                alt: "Salle de jeux aménagée dans un sous-sol fini",
              },
              badges: ["Aménagement", "Sur mesure"],
              footerCtaLabel: "Voir la page sous-sol",
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
          heading: "Ce qu'un sous-sol bien fini doit livrer",
          description:
            "Un bon sous-sol ne se reconnaît pas à sa finition mais à son air. S'il sent le sous-sol, quelque chose n'a pas été réglé avant la pose du gypse.",
          cards: [
            {
              title: "Un espace sec et sans odeur",
              description:
                "L'eau a été arrêtée à la source, le mur respire correctement et l'humidité relative reste stable d'une saison à l'autre.",
            },
            {
              title: "Une superficie habitable reconnue",
              description:
                "Permis obtenu, inspections passées, hauteur libre conforme et issue de secours en place : la surface compte vraiment à la revente.",
            },
            {
              title: "Un espace confortable en hiver",
              description:
                "Isolation continue, solives de rive traitées et plancher isolé : la pièce reste utilisable en janvier, pas seulement en juin.",
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
          heading: "FAQ — finition de sous-sol",
          intro:
            "Permis, humidité, chambre légale, salle de bain, prix, délais et garantie.",
          items: [
            {
              q: "Faut-il un permis pour finir un sous-sol ?",
              a: "Oui. Aménager un sous-sol non fini en espace habitable exige un permis de transformation à Montréal et dans la grande majorité des municipalités du Grand Montréal, avec un plan d'aménagement à l'appui. Le permis déclenche aussi les inspections d'électricité et de plomberie. Nous montons et déposons la demande pour vous.",
            },
            {
              q: "Mon sous-sol prend l'eau. Peut-on quand même le finir ?",
              a: "Pas avant d'avoir réglé l'entrée d'eau. On identifie d'abord la source — fissure de fondation, drain français obstrué, pente de terrain vers la maison, gouttières mal dirigées, pompe de puisard défaillante — et on corrige. Finir par-dessus une infiltration active garantit d'avoir à tout refaire.",
            },
            {
              q: "Puis-je aménager une chambre au sous-sol ?",
              a: "Oui, à condition d'avoir une issue de secours : une fenêtre ouvrante de dimensions suffisantes et accessible, ou une porte donnant directement à l'extérieur. Cela demande souvent de découper le mur de fondation et d'installer une margelle. Sans issue, la pièce ne peut pas être déclarée comme chambre.",
            },
            {
              q: "Comment isole-t-on un mur de fondation ?",
              a: "Avec un isolant continu appliqué contre le béton et une gestion de la vapeur adaptée, les colombages montés en retrait du mur et sans contact direct avec la dalle. Les solives de rive et le pourtour de la dalle sont traités aussi. C'est cette séquence qui empêche la condensation de se former dans le mur.",
            },
            {
              q: "Peut-on ajouter une salle de bain au sous-sol ?",
              a: "Oui. Deux options selon la position du drain principal : casser la dalle pour raccorder par gravité, ou installer une pompe de relevage. S'ajoutent la ventilation mécanique vers l'extérieur, l'alimentation en eau et l'inspection avant la fermeture des murs. C'est l'ajout qui pèse le plus dans un budget de sous-sol.",
            },
            {
              q: "Et si le plafond est trop bas ?",
              a: "Le Code impose une hauteur libre minimale pour qu'un espace soit reconnu habitable. On gagne souvent quelques pouces en repensant le plan de plafond autour des conduits et des poutres, ou en choisissant un sous-plancher plus mince. Quand la marge est vraiment insuffisante, l'abaissement de dalle est une option lourde à évaluer au cas par cas.",
            },
            {
              q: "Puis-je créer un logement au sous-sol pour le louer ?",
              a: "Cela dépend du zonage de votre secteur, qui autorise ou non un logement accessoire. Les exigences vont au-delà d'une salle familiale : entrée distincte, séparation coupe-feu avec le logement principal, insonorisation, ventilation et parfois stationnement. Nous vérifions le zonage avant de vous proposer une portée.",
            },
            {
              q: "Combien coûte la finition d'un sous-sol ?",
              a: "À titre indicatif, un aménagement de base démarre autour de 25 000 $ et un sous-sol complet avec chambre, salle de bain et rangements se situe souvent entre 40 000 $ et 80 000 $ et plus. Les travaux correctifs sur le drainage, les fissures ou la fenêtre d'égress se chiffrent à part, après le diagnostic.",
            },
            {
              q: "Combien de temps dure le chantier ?",
              a: "Un sous-sol complet demande plusieurs semaines de travaux sur place, auxquelles s'ajoute le délai de permis de votre municipalité. L'ajout d'une salle de bain, la découpe d'une fenêtre d'égress et les travaux correctifs d'humidité allongent l'échéancier, qui est joint au contrat.",
            },
            {
              q: "Les travaux sont-ils garantis ?",
              a: "Oui. Les travaux sont garantis et les modalités figurent au contrat. Notre licence RBQ 8306-0806-27 est valide et sans restriction depuis 2004, avec un cautionnement de 40 000 $ et aucune réclamation au dossier. Responsabilité civile et assurance chantier sont en vigueur.",
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
          heading: "Un sous-sol à finir dans l'Ouest-de-l'Île ?",
          intro:
            "Nous venons inspecter les fondations, le drainage, la hauteur libre et le panneau électrique, puis nous revenons avec une estimation détaillée sous 24 à 48 heures ouvrables, permis inclus.",
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
          note: "Licence RBQ 8306-0806-27 · Humidité, isolation, permis et issue de secours",
        },
      },
    },
  ],
};
