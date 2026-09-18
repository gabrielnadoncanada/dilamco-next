import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationSalleDeBainPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Rénovation de salle de bain à Montréal — clé en main",
    description:
      "Rénovation de salle de bain complète : étanchéité, membrane, ventilation, plomberie, tuilage et vanité. Entrepreneur général licencié RBQ.",
    path: "/services/renovation/salle-de-bain",
    ogAlt: "Rénovation de salle de bain par un entrepreneur général",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Rénovation", url: SITE.url + "/services/renovation" },
    {
      name: "Rénovation salle de bain",
      url: SITE.url + "/services/renovation/salle-de-bain",
    },
  ],
  service: {
    name: "Rénovation salle de bain",
    description:
      "Rénovation de salle de bain par un entrepreneur général : permis, plomberie, ventilation, membrane d'étanchéité, tuilage, vanité sur mesure et finition.",
    url: SITE.url + "/services/renovation/salle-de-bain",
    serviceType: "Rénovation de salle de bain",
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
            "Rénovation de salle de bain : la pièce où l'étanchéité décide de tout",
          description:
            "Une salle de bain mal étanchéifiée ne se voit pas la première année. Elle se voit quand le plafond du dessous tache, quand la tuile sonne creux ou quand la structure a pourri sous la douche. Nous refaisons la pièce au complet — plomberie, ventilation, membrane, tuilage, vanité — sous un seul contrat et une seule licence.",
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
            "Membrane d'étanchéité",
            "Plomberie inspectée",
          ],
          image: {
            src: "/images/generated/renovation/renovation-bath-hero-01.webp",
            alt: "Salle de bain rénovée par un entrepreneur général",
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
          heading: "Pourquoi une salle de bain se refait deux fois",
          description:
            "C'est la pièce la plus petite et la plus chère au pied carré, et celle où les raccourcis coûtent le plus cher. Les reprises viennent presque toujours de quatre défauts d'exécution, jamais du choix de la céramique.",
          cards: [
            {
              title: "Pas de vraie membrane sous la douche",
              description:
                "Poser la céramique directement sur un panneau ordinaire, sans membrane d'étanchéité ni pente correcte vers le drain, c'est laisser l'eau traverser. Le dégât apparaît des mois plus tard, souvent au plafond de l'étage du dessous.",
            },
            {
              title: "Une ventilation absente ou mal raccordée",
              description:
                "Un ventilateur qui souffle dans l'entretoit ou qui n'a pas le débit requis laisse l'humidité dans la pièce. Résultat : peinture qui cloque, joints noircis, moisissure derrière le gypse.",
            },
            {
              title: "La plomberie modifiée sans permis ni inspection",
              description:
                "Déplacer une douche ou un drain change la pente et la ventilation de plomberie. Sans permis ni inspection avant fermeture, personne ne valide le travail, et le problème est scellé dans le mur.",
            },
            {
              title: "Une structure qu'on n'a pas ouverte",
              description:
                "Quand la salle de bain fuit depuis des années, le contreplaqué et parfois les solives sont atteints. Poser du neuf par-dessus sans ouvrir revient à cacher le vrai problème.",
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
          heading: "Ce que comprend une rénovation de salle de bain complète",
          intro:
            "La portée exacte est écrite dans la soumission. Voici les quatre volets d'un mandat de salle de bain complète, dans l'ordre où ils se réalisent.",
          columns: "2",
          items: [
            {
              title: "Démolition et mise à nu",
              description:
                "On ouvre pour voir l'état réel avant de chiffrer la suite.",
              icon: "hammer",
              bullets: [
                "Protection des lieux et des aires de circulation.",
                "Retrait de la douche ou de la baignoire, de la vanité, de la toilette et des revêtements.",
                "Mise à nu de la structure pour vérifier le contreplaqué, les solives et les traces d'eau.",
                "Correction du sous-plancher et de la charpente avant toute nouvelle pose.",
              ],
            },
            {
              title: "Plomberie et ventilation",
              description:
                "Les travaux qui doivent passer l'inspection avant la fermeture.",
              icon: "droplets",
              bullets: [
                "Alimentation et drains repris ou déplacés, avec la pente requise.",
                "Ventilation de plomberie conforme, valve de douche antibrûlure.",
                "Ventilateur d'extraction avec débit adéquat, évacué vers l'extérieur et non dans l'entretoit.",
                "Inspection municipale planifiée avant de refermer les murs.",
              ],
            },
            {
              title: "Étanchéité et tuilage",
              description: "L'étape invisible qui détermine la durée de vie.",
              icon: "shieldCheck",
              bullets: [
                "Panneau de ciment ou panneau hydrofuge sur les surfaces mouillées.",
                "Membrane d'étanchéité continue en douche, remontée sur les murs et raccordée au drain.",
                "Pente régulière vers le drain, validée avant la pose de la céramique.",
                "Tuilage, coulis, calfeutrage et transitions de seuil.",
              ],
            },
            {
              title: "Vanité, finition et raccordements",
              description: "Ce qui se voit, posé une fois la base saine.",
              icon: "bath",
              bullets: [
                "Vanité sur mesure fabriquée pour nous par notre usine partenaire, sous la sous-catégorie RBQ 12.",
                "Comptoir, robinetterie, miroir, éclairage et rangement.",
                "Installation de la toilette, de la porte de douche et de la quincaillerie.",
                "Peinture, moulures, ajustements et inspection finale avec vous.",
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
          heading: "Le déroulement d'un chantier de salle de bain",
          intro:
            "Six étapes, dont trois se passent entièrement derrière les murs. Les temps de séchage du coulis, du calfeutrage et de la peinture font partie de l'échéancier, ils ne se compressent pas.",
          steps: [
            {
              number: "1",
              title: "Visite et soumission",
              description:
                "Relevé, vérification de la ventilation existante, de la plomberie, de l'étage sous la salle de bain et des signes d'infiltration. Estimation sous 24 à 48 heures ouvrables.",
            },
            {
              number: "2",
              title: "Contrat, plan et permis",
              description:
                "Signature avec l'échéancier, implantation de la pièce, sélection des matériaux, puis dépôt du permis si la plomberie est déplacée.",
            },
            {
              number: "3",
              title: "Démolition et inspection de l'existant",
              description:
                "Mise à nu complète. C'est le moment où on découvre un sous-plancher gonflé ou une solive atteinte, et où la portée peut être ajustée avec vous.",
            },
            {
              number: "4",
              title: "Plomberie, électricité, ventilation",
              description:
                "Drains, alimentation, circuits, chauffage de plancher si prévu et ventilateur d'extraction. Inspection municipale avant fermeture.",
            },
            {
              number: "5",
              title: "Étanchéité et tuilage",
              description:
                "Panneaux, membrane, pente vers le drain, puis pose de la céramique, coulis et calfeutrage, avec les temps de séchage requis.",
            },
            {
              number: "6",
              title: "Vanité, finition, livraison",
              description:
                "Peinture, pose de la vanité et du comptoir, robinetterie, toilette, porte de douche, ajustements et remise des lieux.",
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
          heading: "Permis, ventilation et conformité",
          intro:
            "La salle de bain est encadrée par le Code de construction du Québec sur plusieurs points précis. Ce sont aussi les points qu'un inspecteur vérifie et qu'un assureur regarde en cas de dégât d'eau.",
          items: [
            {
              title: "Plomberie déplacée",
              description:
                "Déplacer une douche, une baignoire ou une toilette modifie les drains et la ventilation de plomberie. Un permis est généralement requis, et l'inspection se fait avant la fermeture des murs.",
            },
            {
              title: "Nouvelle salle de bain",
              description:
                "Ajouter une salle de bain — au sous-sol, dans une suite, dans un agrandissement — exige un permis dans la quasi-totalité des municipalités, avec plans à l'appui.",
            },
            {
              title: "Ventilation obligatoire",
              description:
                "Chaque salle de bain doit être ventilée mécaniquement vers l'extérieur. Un ventilateur qui décharge dans l'entretoit n'est pas conforme et crée un problème d'humidité ailleurs dans la maison.",
            },
            {
              title: "Protection antibrûlure",
              description:
                "Les robinets de douche et de baignoire doivent limiter la température. C'est une exigence de sécurité courante dans les inspections résidentielles.",
            },
            {
              title: "Remplacement à l'identique",
              description:
                "Changer la vanité, la toilette, la céramique et la robinetterie sans déplacer la plomberie n'exige habituellement pas de permis. Nous validons quand même avec votre ville.",
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
            src: "/images/generated/renovation/renovation-bath-approach-01.webp",
            alt: "Préparation d'une douche avec membrane d'étanchéité",
          },
          cardTitle: "Ce que l'assureur regarde",
          cardDescription:
            "En cas de dégât d'eau, la conformité des travaux et la présence d'un entrepreneur licencié pèsent dans le traitement de la réclamation. Notre licence RBQ 8306-0806-27 est valide et sans restriction depuis 2004.",
        },
      },
    },
    {
      id: "prix",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Combien coûte une rénovation de salle de bain ?",
          description:
            "Les montants ci-dessous sont donnés à titre indicatif pour le marché québécois. Ils varient selon la superficie, l'état de la structure sous les revêtements, le déplacement ou non de la plomberie et le niveau de finition choisi.",
          cards: [
            {
              title: "Salle de bain complète — 15 000 $ à 35 000 $",
              description:
                "Démolition, plomberie reprise, ventilation, membrane, tuilage, vanité, comptoir, toilette, robinetterie et finition, sans changer l'emplacement des appareils.",
            },
            {
              title: "Plomberie déplacée ou douche à l'italienne",
              description:
                "Déplacer la douche ou la toilette, créer une douche de plain-pied avec drain linéaire ou ajouter un plancher chauffant pousse le budget vers le haut de la fourchette et au-delà.",
            },
            {
              title: "Nouvelle salle de bain au sous-sol",
              description:
                "Ajouter une salle de bain là où il n'y en avait pas demande souvent de casser la dalle pour le drain, ou d'installer une pompe de relevage. À budgéter séparément.",
            },
            {
              title: "Ce qui fait varier le prix",
              description:
                "Superficie, format de céramique, structure à réparer sous la douche, type de douche, plancher chauffant, qualité de la robinetterie et accès au chantier en condo.",
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
          heading: "Les mandats qui accompagnent souvent une salle de bain",
          intro:
            "Une salle de bain se rénove rarement seule. Ces pages détaillent les travaux qui s'y rattachent le plus souvent.",
          items: [
            {
              title: "Finition de sous-sol",
              href: "/services/renovation/sous-sol",
              description:
                "Ajouter une salle de bain au sous-sol implique le drain dans la dalle ou une pompe de relevage, plus le permis d'aménagement.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
                alt: "Salle de bain aménagée dans un sous-sol fini",
              },
              badges: ["Sous-sol", "Pompe de relevage"],
              footerCtaLabel: "Voir sous-sol",
            },
            {
              title: "Rénovation après sinistre",
              href: "/services/renovation/apres-sinistre",
              description:
                "Fuite prolongée, dégât d'eau ou moisissures : la reconstruction commence par ouvrir et assainir, pas par reposer de la céramique.",
              image: {
                src: "/images/generated/renovation/renovation-plancher-approach-01.webp",
                alt: "Reconstruction après une fuite de salle de bain",
              },
              badges: ["Moisissures", "Assurance"],
              footerCtaLabel: "Voir après sinistre",
            },
            {
              title: "Rénovation de plancher",
              href: "/services/renovation/plancher",
              description:
                "Seuil de porte, différence de niveau avec le corridor et raccord entre céramique et bois franc : des détails à régler au bon moment.",
              image: {
                src: "/images/generated/renovation/renovation-plancher-hero-01.webp",
                alt: "Transition de plancher au seuil d'une salle de bain",
              },
              badges: ["Seuils", "Transitions"],
              footerCtaLabel: "Voir plancher",
            },
            {
              title: "Salle de bain sur mesure",
              href: "/espaces/salle-de-bain",
              description:
                "Le volet vanité et rangement : dimensions, finis, quincaillerie et exemples de réalisations.",
              image: {
                src: "/images/generated/spaces/space-bath-hero-01.webp",
                alt: "Vanité sur mesure dans une salle de bain",
              },
              badges: ["Vanité", "Sur mesure"],
              footerCtaLabel: "Voir la page salle de bain",
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
          heading: "Ce qu'une salle de bain bien faite doit livrer",
          description:
            "La qualité d'une salle de bain se mesure sur dix ans, pas sur la photo du premier jour. Trois choses le déterminent, et aucune ne se voit une fois les travaux terminés.",
          cards: [
            {
              title: "Une douche réellement étanche",
              description:
                "Membrane continue, pente vers le drain, raccords aux murs traités. L'eau ne se rend jamais à la structure.",
            },
            {
              title: "Une pièce qui sèche",
              description:
                "Ventilation au bon débit, évacuée dehors. Les miroirs se dégagent, les joints restent clairs, la peinture tient.",
            },
            {
              title: "Une structure saine sous les finis",
              description:
                "Le sous-plancher a été vérifié et réparé avant la pose. La céramique ne bouge pas et le coulis ne fend pas.",
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
          heading: "FAQ — rénovation de salle de bain",
          intro:
            "Prix, permis, durée, étanchéité, ventilation, condo et garantie.",
          items: [
            {
              q: "Combien coûte une rénovation de salle de bain ?",
              a: "À titre indicatif, une salle de bain complète se situe le plus souvent entre 15 000 $ et 35 000 $ selon la portée. Le haut de la fourchette correspond à une pièce plus grande, une douche de plain-pied, un plancher chauffant ou un déplacement de plomberie. L'estimation détaillée est gratuite et précise ce qui est inclus et exclu.",
            },
            {
              q: "Faut-il un permis pour refaire une salle de bain ?",
              a: "Un remplacement à l'identique — vanité, toilette, céramique, robinetterie au même endroit — n'exige habituellement pas de permis. Dès qu'on déplace la plomberie, qu'on change l'emplacement de la douche ou qu'on ajoute une nouvelle salle de bain, un permis est généralement requis avec inspection avant la fermeture des murs. Nous validons avec votre ville et déposons la demande.",
            },
            {
              q: "Combien de temps dure le chantier ?",
              a: "Une salle de bain complète se compte en semaines de travail sur place. Les temps de séchage du mortier, du coulis, du calfeutrage et de la peinture sont incompressibles, et l'inspection municipale doit être planifiée avant la fermeture des murs. L'échéancier précis est joint au contrat.",
            },
            {
              q: "Qu'est-ce qu'une membrane d'étanchéité et est-elle obligatoire ?",
              a: "C'est une couche continue posée sous la céramique de la douche, remontée sur les murs et raccordée au drain, qui empêche l'eau de rejoindre la structure. C'est la pièce maîtresse d'une douche durable. Nous l'installons systématiquement sur les surfaces mouillées, avec une pente régulière vers le drain.",
            },
            {
              q: "Quel ventilateur faut-il dans une salle de bain ?",
              a: "Un ventilateur d'extraction évacué vers l'extérieur, jamais dans l'entretoit, avec un débit adapté au volume de la pièce et une conduite courte et isolée. C'est ce qui empêche l'humidité de s'accumuler et la moisissure d'apparaître derrière les finis. Le remplacement du ventilateur fait partie du mandat.",
            },
            {
              q: "Peut-on ajouter une salle de bain au sous-sol ?",
              a: "Oui. Il faut vérifier la position du drain principal : soit on casse la dalle pour raccorder par gravité, soit on installe une pompe de relevage. S'y ajoutent la ventilation, l'alimentation et le permis d'aménagement de sous-sol. La page finition de sous-sol détaille l'ensemble du mandat.",
            },
            {
              q: "Et si vous trouvez des dégâts d'eau en démolissant ?",
              a: "C'est fréquent dans une salle de bain qui a plus de vingt ans. Nous vous montrons ce qui est atteint — sous-plancher, colombages, solives —, documentons l'état et vous soumettons par écrit le coût de la réparation avant de poursuivre. Rien n'est refermé sur un problème connu.",
            },
            {
              q: "Est-ce faisable en condo ?",
              a: "Oui. Il faut d'abord obtenir l'accord du syndicat et vérifier les horaires de travaux, l'accès par ascenseur, la protection des aires communes et les restrictions de la déclaration de copropriété sur la plomberie et l'insonorisation. Ces points sont réglés avant la démolition.",
            },
            {
              q: "Fournissez-vous la vanité ?",
              a: "Oui. Les vanités sur mesure sont fabriquées pour nous par notre usine partenaire, sous la sous-catégorie 12 de notre licence RBQ, puis mesurées et installées par nos équipes avec le comptoir et la robinetterie. Une seule entreprise est responsable du résultat.",
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
          heading: "Une salle de bain à refaire correctement ?",
          intro:
            "Nous venons évaluer la pièce, l'état de la ventilation, la plomberie et les signes d'infiltration, puis nous revenons avec une estimation détaillée sous 24 à 48 heures ouvrables.",
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
          note: "Licence RBQ 8306-0806-27 · Étanchéité, ventilation et plomberie conformes",
        },
      },
    },
  ],
};
