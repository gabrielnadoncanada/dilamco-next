import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const agrandissementMaisonPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Agrandissement de maison à Montréal — clé en main",
    description:
      "Agrandissement résidentiel : zonage, permis, fondations, structure, enveloppe et raccordements. Entrepreneur général licencié RBQ.",
    path: "/services/renovation/agrandissement-de-maison",
    ogAlt: "Agrandissement de maison par un entrepreneur général",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Rénovation", url: SITE.url + "/services/renovation" },
    {
      name: "Agrandissement de maison",
      url: SITE.url + "/services/renovation/agrandissement-de-maison",
    },
  ],
  service: {
    name: "Agrandissement de maison",
    description:
      "Agrandissement résidentiel par un entrepreneur général : vérification du zonage, permis de construction, plans d'ingénieur, fondations, structure, enveloppe, raccordements et finition intérieure.",
    url: SITE.url + "/services/renovation/agrandissement-de-maison",
    serviceType: "Agrandissement résidentiel",
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
            "Agrandissement de maison : du zonage aux fondations, jusqu'à la finition",
          description:
            "Un agrandissement n'est pas une grosse rénovation. C'est de la construction : il faut vérifier le zonage et les marges, obtenir un permis, faire calculer la structure par un ingénieur, couler des fondations sous le niveau de gel, fermer une enveloppe étanche et raccorder la nouvelle section aux services existants. Nous sommes l'entrepreneur général responsable de l'ensemble.",
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
            "Catégories 1.2 et 1.3",
            "Plans d'ingénieur",
          ],
          image: {
            src: "/images/generated/renovation/renovation-extension-hero-01.webp",
            alt: "Agrandissement résidentiel en construction",
          },
          caption:
            "Ouest-de-l'Île, Montréal, Laval, Rive-Sud et Vaudreuil-Soulanges",
        },
      },
    },
    {
      id: "risks",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce qui bloque un projet d'agrandissement",
          description:
            "La plupart des agrandissements qui échouent n'échouent pas au chantier. Ils échouent avant, sur des contraintes réglementaires ou structurales qu'on aurait pu vérifier en quelques jours. Voici les quatre obstacles qui reviennent le plus souvent.",
          cards: [
            {
              title: "Le zonage ne permet pas la superficie visée",
              description:
                "Chaque terrain est soumis à des marges de recul avant, arrière et latérales, à un coefficient d'occupation du sol et parfois à une hauteur maximale. Une rallonge de 20 pieds sur un terrain étroit peut simplement être impossible sans dérogation.",
            },
            {
              title: "La structure existante ne reprend pas les charges",
              description:
                "Ouvrir un mur porteur pour relier les deux sections, ajouter un étage ou poser une nouvelle toiture exige un calcul de charges. Un ingénieur en structure doit fournir des plans scellés, et ce document fait partie de la demande de permis.",
            },
            {
              title: "Les fondations ne sont pas adaptées",
              description:
                "Une rallonge sur dalle, sur pieux ou sur fondation coulée ne se comporte pas de la même façon. La semelle doit descendre sous le niveau de gel, et le raccord avec la fondation existante doit éviter les tassements différentiels.",
            },
            {
              title: "L'enveloppe n'est pas fermée avant l'hiver",
              description:
                "Un agrandissement exposé aux intempéries prend l'eau. La séquence excavation, fondation, charpente, toiture, fenêtres et enveloppe doit être planifiée en fonction de la saison, pas de l'envie de commencer vite.",
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
          heading: "Ce que comprend un mandat d'agrandissement",
          intro:
            "Un agrandissement traverse quatre grandes phases. Nous sommes l'entrepreneur général pour l'ensemble et nous coordonnons les professionnels externes nécessaires.",
          columns: "2",
          items: [
            {
              title: "Faisabilité, zonage et permis",
              description: "Ce qui se vérifie avant de dessiner quoi que ce soit.",
              icon: "fileCheck",
              bullets: [
                "Vérification du règlement de zonage : marges de recul, implantation, hauteur, coefficient d'occupation du sol.",
                "Relevé de l'existant, de la fondation, de la structure et des services.",
                "Plans de construction et plans de structure scellés par un ingénieur.",
                "Demande de permis de construction déposée à votre ville ou arrondissement, avec suivi jusqu'à la délivrance.",
              ],
            },
            {
              title: "Excavation et fondations",
              description: "La partie qui détermine la tenue du bâtiment.",
              icon: "hardHat",
              bullets: [
                "Excavation, localisation préalable des services souterrains.",
                "Semelles et fondation coulées sous le niveau de gel.",
                "Drain de fondation, imperméabilisation et remblai drainant.",
                "Raccord à la fondation existante conçu pour limiter les tassements différentiels.",
              ],
            },
            {
              title: "Structure, enveloppe et toiture",
              description: "Fermer le bâtiment avant que la météo décide.",
              icon: "building2",
              bullets: [
                "Charpente selon les plans d'ingénieur, poutres et appuis dimensionnés.",
                "Ouverture du mur existant et reprise des charges avec poutre calculée.",
                "Toiture raccordée à l'existante, membrane, solins et gouttières.",
                "Isolation, pare-air, pare-vapeur, fenêtres, portes et revêtement extérieur agencé au bâtiment.",
              ],
            },
            {
              title: "Raccordements et finition intérieure",
              description: "La nouvelle section devient une vraie partie de la maison.",
              icon: "wrench",
              bullets: [
                "Plomberie, électricité, chauffage et ventilation étendus depuis les systèmes existants, avec vérification de leur capacité.",
                "Inspections municipales aux étapes prévues, avant la fermeture des murs.",
                "Gypse, joints, peinture, planchers raccordés aux niveaux de l'existant.",
                "Cuisine, salle de bain, rangements ou walk-in sur mesure fournis et installés par nos équipes.",
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
          heading: "Le déroulement d'un agrandissement",
          intro:
            "C'est le mandat le plus long que nous réalisons, et celui où la phase administrative pèse le plus. L'étude de faisabilité et le permis prennent souvent autant de temps que la fondation.",
          steps: [
            {
              number: "1",
              title: "Faisabilité",
              description:
                "Visite, relevé de l'existant et vérification du zonage : marges, implantation, hauteur et superficie autorisée. C'est ici qu'on sait si le projet est réalisable tel quel.",
            },
            {
              number: "2",
              title: "Plans et ingénieur",
              description:
                "Plans de construction, puis calcul de structure et plans scellés par un ingénieur pour les fondations, la poutre d'ouverture et la charpente.",
            },
            {
              number: "3",
              title: "Permis et contrat",
              description:
                "Dépôt de la demande de permis de construction avec les plans, signature du contrat avec l'échéancier et le budget, et attente de la délivrance.",
            },
            {
              number: "4",
              title: "Excavation et fondation",
              description:
                "Localisation des services, excavation, semelles, fondation, drain, imperméabilisation et remblai. Inspection avant remblayage.",
            },
            {
              number: "5",
              title: "Structure et fermeture",
              description:
                "Charpente, toiture, fenêtres, portes, pare-air et revêtement extérieur. Objectif : un bâtiment fermé et étanche le plus tôt possible.",
            },
            {
              number: "6",
              title: "Mécanique et finition",
              description:
                "Plomberie, électricité, chauffage et ventilation, inspections, isolation, gypse, peinture, planchers, menuiserie sur mesure, puis livraison.",
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
          heading: "Permis, zonage et ingénieur : ce qui est obligatoire",
          intro:
            "Un agrandissement ajoute de la superficie de plancher et modifie l'implantation du bâtiment. C'est un permis de construction, pas un permis de rénovation, et il exige des documents précis.",
          items: [
            {
              title: "Conformité au règlement de zonage",
              description:
                "Marges de recul avant, arrière et latérales, pourcentage d'occupation du terrain, hauteur maximale et parfois alignement avec les bâtiments voisins. Si le projet dépasse, il faut une demande de dérogation mineure, avec délais et incertitude.",
            },
            {
              title: "Plans de construction",
              description:
                "Plans d'implantation, plans d'étage, coupes et élévations, exigés par la ville pour analyser la demande. Certains arrondissements demandent aussi un certificat de localisation à jour.",
            },
            {
              title: "Plans de structure scellés",
              description:
                "Fondations, poutres, appuis et ouverture du mur existant doivent être calculés par un ingénieur en structure. Le plan scellé accompagne la demande et sert aussi de référence au chantier.",
            },
            {
              title: "Inspections aux étapes clés",
              description:
                "Fondation avant remblayage, charpente, plomberie et électricité avant la fermeture des murs. Une inspection manquée oblige à rouvrir ce qui vient d'être fermé.",
            },
            {
              title: "Capacité des systèmes existants",
              description:
                "Panneau électrique, appareil de chauffage, entrée d'eau et fosse septique le cas échéant doivent pouvoir desservir la superficie ajoutée. On le vérifie avant de chiffrer, pas après.",
            },
          ],
          actions: [
            {
              label: "Voir tous les services",
              href: "/services",
              variant: "ghost",
            },
            {
              label: "Voir les zones desservies",
              href: "/zones",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-extension-approach-01.webp",
            alt: "Planification et relevé d'un projet d'agrandissement résidentiel",
          },
          cardTitle: "Notre licence couvre ce type de travaux",
          cardDescription:
            "Licence RBQ 8306-0806-27, catégories entrepreneur général 1.2 petits bâtiments et 1.3 bâtiments de tout genre, valide et sans restriction depuis 2004. Nous réalisons des agrandissements, des transformations et des reconstructions — pas de construction de maison neuve, qui relève d'une autre catégorie.",
        },
      },
    },
    {
      id: "types",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Les types d'agrandissement que nous réalisons",
          intro:
            "La forme de l'agrandissement dépend autant du terrain et du zonage que du besoin. Souvent, la solution retenue n'est pas celle envisagée au départ.",
          badges: [
            "Rallonge arrière",
            "Rallonge latérale",
            "Ajout d'étage",
            "Solarium quatre saisons",
            "Suite parentale",
            "Garage attenant",
          ],
          cardTitle: "Ce qu'on évalue pour trancher",
          items: [
            "La superficie autorisée par le zonage après application des marges de recul.",
            "La capacité de la fondation et de la structure existantes à recevoir un étage.",
            "L'orientation, l'ensoleillement et l'impact sur les fenêtres actuelles.",
            "La position de l'entrée électrique, du drain et de l'appareil de chauffage.",
            "L'accès au terrain pour l'excavation et la livraison des matériaux.",
          ],
          actions: [
            {
              label: "Voir la rénovation de cuisine",
              href: "/services/renovation/cuisine",
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
      id: "intégration",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Ce que l'agrandissement permet de régler",
          intro:
            "Un agrandissement sert presque toujours un besoin précis : une cuisine trop petite, une salle de bain manquante, un rangement inexistant. Ces mandats sont réalisés dans le même contrat.",
          items: [
            {
              title: "Rénovation de cuisine",
              href: "/services/renovation/cuisine",
              description:
                "La rallonge arrière est souvent la seule façon d'obtenir une cuisine ouverte avec îlot dans un bungalow des années 1960.",
              image: {
                src: "/images/generated/renovation/renovation-cuisine-hero-01.webp",
                alt: "Cuisine agrandie par une rallonge arrière",
              },
              badges: ["Cuisine", "Rallonge"],
              footerCtaLabel: "Voir cuisine",
            },
            {
              title: "Rénovation de salle de bain",
              href: "/services/renovation/salle-de-bain",
              description:
                "Un ajout d'étage ou une suite parentale permet d'ajouter une salle de bain complète là où la plomberie n'existait pas.",
              image: {
                src: "/images/generated/renovation/renovation-bath-hero-01.webp",
                alt: "Salle de bain ajoutée dans un agrandissement",
              },
              badges: ["Salle de bain", "Plomberie"],
              footerCtaLabel: "Voir salle de bain",
            },
            {
              title: "Rénovation de plancher",
              href: "/services/renovation/plancher",
              description:
                "Raccorder le plancher neuf à l'existant sans dénivelé visible se prépare dès la charpente du plancher.",
              image: {
                src: "/images/generated/renovation/renovation-plancher-hero-01.webp",
                alt: "Raccord de plancher entre l'agrandissement et la maison",
              },
              badges: ["Niveaux", "Raccord"],
              footerCtaLabel: "Voir plancher",
            },
            {
              title: "Walk-in et rangement",
              href: "/espaces/walk-in",
              description:
                "Une suite parentale ajoutée comprend souvent un walk-in sur mesure, conçu et installé par nos équipes.",
              image: {
                src: "/images/generated/spaces/space-walkin-hero-01.webp",
                alt: "Walk-in sur mesure dans une suite parentale ajoutée",
              },
              badges: ["Rangement", "Sur mesure"],
              footerCtaLabel: "Voir walk-in",
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
          heading: "Ce qu'un agrandissement réussi doit livrer",
          description:
            "Le meilleur compliment pour un agrandissement, c'est qu'on ne devine pas où il commence. Cela se joue sur trois plans, et deux d'entre eux ne se voient pas.",
          cards: [
            {
              title: "Une structure et une enveloppe conformes",
              description:
                "Fondations sous le niveau de gel, charpente selon les plans d'ingénieur, enveloppe étanche à l'air et inspections passées à chaque étape.",
            },
            {
              title: "Des systèmes qui suivent",
              description:
                "Chauffage, ventilation, électricité et plomberie dimensionnés pour la superficie ajoutée, pas simplement prolongés.",
            },
            {
              title: "Un raccord invisible",
              description:
                "Niveaux de plancher alignés, revêtement extérieur agencé, toiture continue et transitions intérieures traitées comme si la pièce avait toujours été là.",
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
          heading: "FAQ — agrandissement de maison",
          intro:
            "Zonage, permis, ingénieur, fondations, délais, hiver, prix et garantie.",
          items: [
            {
              q: "Faut-il un permis pour agrandir une maison ?",
              a: "Oui, toujours. Un agrandissement ajoute de la superficie de plancher et modifie l'implantation du bâtiment : c'est un permis de construction, accompagné de plans d'implantation, d'étage, de coupes et d'élévations, et de plans de structure scellés par un ingénieur. Nous montons le dossier et déposons la demande.",
            },
            {
              q: "Comment savoir si mon terrain permet un agrandissement ?",
              a: "Le règlement de zonage de votre ville ou arrondissement fixe les marges de recul avant, arrière et latérales, le pourcentage d'occupation du terrain et la hauteur maximale. Nous vérifions ces paramètres et votre certificat de localisation avant de dessiner quoi que ce soit. Si le projet dépasse, une demande de dérogation mineure est possible, avec des délais et aucune garantie de résultat.",
            },
            {
              q: "Ai-je besoin d'un ingénieur ?",
              a: "Dans presque tous les cas, oui. Les fondations, la charpente et surtout la poutre qui remplace le mur porteur ouvert entre l'existant et la nouvelle section demandent un calcul de charges. Les plans scellés par un ingénieur en structure accompagnent la demande de permis et servent de référence au chantier.",
            },
            {
              q: "Quel type de fondation faut-il ?",
              a: "Cela dépend du sol, de la nappe phréatique, de la présence d'un sous-sol et du type d'agrandissement. Semelle et fondation coulées, dalle sur sol ou pieux : dans tous les cas, l'appui doit descendre sous le niveau de gel et le raccord à la fondation existante doit être conçu pour limiter les tassements différentiels.",
            },
            {
              q: "Peut-on ajouter un étage sur une maison existante ?",
              a: "C'est possible quand la fondation et les murs porteurs peuvent reprendre les charges supplémentaires, ce que l'ingénieur détermine par un calcul. Il faut aussi vérifier la hauteur maximale autorisée par le zonage. C'est un chantier lourd, qui implique souvent de retirer la toiture existante et donc une planification serrée de la météo.",
            },
            {
              q: "Combien de temps dure un projet d'agrandissement ?",
              a: "Il faut raisonner en mois, pas en semaines. La phase administrative — faisabilité, plans, ingénieur, permis — se compte souvent en semaines à elle seule, selon le délai d'analyse de votre municipalité. Le chantier suit ensuite la séquence excavation, fondation, charpente, fermeture, mécanique, finition. L'échéancier détaillé est joint au contrat.",
            },
            {
              q: "Peut-on construire en hiver ?",
              a: "L'excavation et le coulage de fondation se planifient selon les conditions et peuvent exiger des mesures de protection contre le gel. Une fois l'enveloppe fermée et le chantier chauffé, les travaux intérieurs se poursuivent normalement. Nous calons la séquence pour que la fermeture du bâtiment arrive avant la période la plus difficile.",
            },
            {
              q: "Puis-je habiter la maison pendant les travaux ?",
              a: "Généralement oui pendant les phases d'excavation, de fondation et de charpente, puisque la nouvelle section est construite à côté. La période la plus perturbante est l'ouverture du mur entre les deux sections et le raccordement des systèmes. On en discute en fixant l'échéancier.",
            },
            {
              q: "Combien coûte un agrandissement ?",
              a: "C'est le mandat où les écarts sont les plus grands, parce que la fondation, la structure, la toiture et l'enveloppe changent complètement selon le terrain et le type d'ajout. Un budget sérieux ne se donne pas au téléphone : il se construit après la visite, la vérification du zonage et les plans. L'estimation est gratuite et détaillée.",
            },
            {
              q: "Construisez-vous des maisons neuves ?",
              a: "Non. Notre licence RBQ couvre la rénovation, la transformation, l'agrandissement et la reconstruction — catégories entrepreneur général 1.2 et 1.3. La construction d'une maison neuve relève d'une autre catégorie et d'un plan de garantie distinct. Les travaux d'agrandissement, eux, sont garantis selon les modalités du contrat.",
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
          heading: "Un agrandissement à valider avant d'aller plus loin ?",
          intro:
            "Nous commençons par la seule question qui compte : ce que votre terrain et votre structure permettent réellement. Visite, vérification du zonage et estimation détaillée sous 24 à 48 heures ouvrables.",
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
          note: "Licence RBQ 8306-0806-27 · Zonage, permis, ingénieur et fondations",
        },
      },
    },
  ],
};
