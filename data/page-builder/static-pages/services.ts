import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const page: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Services de rénovation et construction résidentielle",
    description:
      "Entrepreneur général à Montréal : cuisine, salle de bain, sous-sol, plancher, agrandissement, après sinistre. Licence RBQ, contrat écrit.",
    path: "/services",
    ogAlt: "Services de rénovation Dilamco, entrepreneur général",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
  ],
  service: {
    name: "Services d'entrepreneur général",
    description:
      "Rénovation résidentielle et commerciale coordonnée par un entrepreneur général titulaire de la licence RBQ 8306-0806-27 : permis, corps de métier, échéancier et contrat écrit.",
    url: SITE.url + "/services",
    serviceType: "Entrepreneur général en rénovation",
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
          eyebrow: "Dilamco - Entrepreneur général",
          heading:
            "Services de rénovation et de construction résidentielle, coordonnés par un seul entrepreneur",
          description:
            "Dilamco est un entrepreneur général titulaire de la licence RBQ 8306-0806-27 depuis 2004. Nous prenons en charge le projet complet : demande de permis, corps de métier, échéancier, inspections et livraison. Un seul contrat, un seul responsable, un seul numéro à appeler quand une question se pose sur le chantier.",
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
            "Depuis 2004",
            "Assuré",
            "Contrat écrit",
          ],
          image: {
            src: "/images/generated/services/service-renovation-hero-01.webp",
            alt: "Chantier de rénovation résidentielle coordonné par un entrepreneur général",
          },
          caption:
            "Ouest-de-l'Île, Montréal, Laval, Rive-Sud et Vaudreuil-Soulanges",
        },
      },
    },
    {
      id: "positionnement",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce que change un entrepreneur général sur votre chantier",
          description:
            "La plupart des mauvaises expériences de rénovation ne viennent pas d'un mauvais matériau. Elles viennent d'un chantier où personne n'est responsable de l'ensemble : le plombier attend l'électricien, l'inspecteur refuse une installation faite trop tôt, et le propriétaire se retrouve à jouer au chef de chantier entre deux journées de travail. Notre rôle est exactement celui-là, et il est encadré par une licence.",
          cards: [
            {
              title: "Un seul responsable, du permis à la livraison",
              description:
                "Nous montons la demande de permis, engageons et payons les corps de métier, planifions les inspections et répondons de la qualité finale. Vous n'avez pas à coordonner six entreprises qui ne se parlent pas.",
            },
            {
              title: "Une licence et des assurances vérifiables",
              description:
                "Licence RBQ 8306-0806-27, valide et sans restriction, délivrée le 7 septembre 2004, catégories entrepreneur général 1.2 et 1.3. Cautionnement de licence de 40 000 $, aucune réclamation au dossier. Responsabilité civile et chantier assurées.",
            },
            {
              title: "Un budget et un échéancier écrits",
              description:
                "La soumission détaille la portée, les matériaux, les exclusions et les dates. Ce qui n'est pas au contrat n'apparaît pas en cours de route sous forme d'extra surprise.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "renovation-types",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Nos services de rénovation",
          intro:
            "Six mandats résidentiels et un volet commercial. Chaque page explique la séquence réelle des travaux, ce qui exige un permis et ce qui fait varier le prix.",
          columns: "3",
          items: [
            {
              title: "Rénovation de cuisine",
              description:
                "Démolition, plomberie, électricité, ventilation, planchers, armoires, comptoirs et finition, coordonnés en une seule séquence.",
              href: "/services/renovation/cuisine",
              badges: ["Permis possible", "Multi-métiers"],
              ctaLabel: "Voir la rénovation de cuisine",
            },
            {
              title: "Rénovation de salle de bain",
              description:
                "Étanchéité, membrane, ventilation, plomberie, tuilage et vanité : la pièce où une erreur d'exécution coûte le plus cher.",
              href: "/services/renovation/salle-de-bain",
              badges: ["Étanchéité", "Plomberie"],
              ctaLabel: "Voir la rénovation de salle de bain",
            },
            {
              title: "Finition de sous-sol",
              description:
                "Humidité, drainage, isolation, pare-vapeur, issue de secours et permis obligatoire pour l'aménagement d'un sous-sol.",
              href: "/services/renovation/sous-sol",
              badges: ["Permis obligatoire", "Isolation"],
              ctaLabel: "Voir la finition de sous-sol",
            },
            {
              title: "Rénovation de plancher",
              description:
                "Sous-plancher, planéité, niveaux et transitions entre pièces, intégrés dans le bon ordre du chantier.",
              href: "/services/renovation/plancher",
              badges: ["Sous-plancher", "Transitions"],
              ctaLabel: "Voir la rénovation de plancher",
            },
            {
              title: "Agrandissement de maison",
              description:
                "Fondations, structure, enveloppe, raccordements et conformité au zonage, avec plans d'ingénieur quand la portée l'exige.",
              href: "/services/renovation/agrandissement-de-maison",
              badges: ["Ingénieur", "Zonage"],
              ctaLabel: "Voir l'agrandissement",
            },
            {
              title: "Rénovation après sinistre",
              description:
                "Reconstruction après dégât d'eau, feu, fumée ou moisissures, avec la documentation dont votre assureur a besoin.",
              href: "/services/renovation/apres-sinistre",
              badges: ["Assurance", "Reconstruction"],
              ctaLabel: "Voir la reconstruction",
            },
            {
              title: "Aménagement commercial",
              description:
                "Bureaux, commerces, restaurants et améliorations locatives, sous les catégories RBQ 1.2 et 1.3 qui couvrent les bâtiments de tout genre.",
              href: "/espaces/commercial",
              badges: ["Commercial", "RBQ 1.3"],
              ctaLabel: "Voir le commercial",
            },
          ],
        },
      },
    },
    {
      id: "inclus",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "Ce qui est inclus quand vous engagez un entrepreneur général",
          intro:
            "Ce sont les quatre choses qu'un propriétaire doit assumer lui-même quand il engage des sous-traitants un par un. Dans un mandat Dilamco, elles font partie du contrat.",
          columns: "2",
          items: [
            {
              title: "Permis et conformité",
              description:
                "La demande de permis est notre travail, pas le vôtre.",
              icon: "fileCheck",
              bullets: [
                "Vérification du besoin de permis avant toute démolition : murs porteurs, plomberie, agrandissement de surface, aménagement de sous-sol.",
                "Préparation des plans et documents exigés par la ville ou l'arrondissement.",
                "Planification des inspections municipales aux bonnes étapes du chantier.",
                "Travaux exécutés selon le Code de construction du Québec.",
              ],
            },
            {
              title: "Coordination des corps de métier",
              description:
                "Un seul calendrier pour tout le monde sur le chantier.",
              icon: "hardHat",
              bullets: [
                "Démolition, charpente, plomberie, électricité, ventilation, tuilage, plâtre, peinture et finition planifiés dans le bon ordre.",
                "Les sous-traitants sont engagés et payés par nous, pas par vous.",
                "Un seul interlocuteur pour les questions, les retards et les changements.",
                "Protection des lieux, gestion des débris et propreté du chantier.",
              ],
            },
            {
              title: "Licence, cautionnement et assurances",
              description:
                "Les garanties qui existent parce que l'entreprise est licenciée.",
              icon: "shieldCheck",
              bullets: [
                "Licence RBQ 8306-0806-27, valide et sans restriction depuis le 7 septembre 2004.",
                "Catégories entrepreneur général 1.2 petits bâtiments et 1.3 bâtiments de tout genre.",
                "Cautionnement de licence de 40 000 $, aucune réclamation au dossier.",
                "Responsabilité civile et assurance chantier en vigueur.",
              ],
            },
            {
              title: "Contrat, échéancier et garantie",
              description: "Ce qui est écrit avant que le premier mur tombe.",
              icon: "clipboardCheck",
              bullets: [
                "Estimation gratuite, réponse sous 24 à 48 heures ouvrables.",
                "Soumission détaillée : portée, matériaux, exclusions, conditions de paiement.",
                "Échéancier avec les dates de début, les étapes et la livraison.",
                "Travaux garantis, détails au contrat.",
              ],
            },
          ],
        },
      },
    },
    {
      id: "deroulement",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "Comment se déroule un mandat",
          intro:
            "La même méthode, qu'il s'agisse d'une salle de bain ou d'un agrandissement. Ce qui change, c'est la durée de chaque étape.",
          steps: [
            {
              number: "1",
              title: "Appel et visite",
              description:
                "Vous nous décrivez le projet. Nous venons voir les lieux, relever les contraintes et vérifier ce qui exige un permis ou un avis d'ingénieur.",
            },
            {
              number: "2",
              title: "Soumission détaillée",
              description:
                "Portée, matériaux, corps de métier, exclusions et budget, par écrit. C'est le document qui sert de référence pendant tout le chantier.",
            },
            {
              number: "3",
              title: "Contrat et permis",
              description:
                "Signature du contrat avec l'échéancier, puis dépôt de la demande de permis à la ville ou à l'arrondissement quand elle est requise.",
            },
            {
              number: "4",
              title: "Chantier coordonné",
              description:
                "Démolition, travaux mécaniques, inspections, fermeture, finition. Les corps de métier se succèdent selon un calendrier que nous tenons.",
            },
            {
              number: "5",
              title: "Livraison",
              description:
                "Inspection finale avec vous, liste des derniers points à corriger, nettoyage et remise des lieux. La garantie prend effet.",
            },
          ],
        },
      },
    },
    {
      id: "armoires",
      frame: { surface: "muted" },
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Notre division armoires : un intervenant de moins",
          intro:
            "La plupart des entrepreneurs généraux sous-traitent les armoires à un tiers, ce qui ajoute un fournisseur, un délai et une zone grise de responsabilité. Notre licence RBQ inclut la sous-catégorie 12, armoires et comptoirs usinés. Les armoires sur mesure sont fabriquées pour nous par notre usine partenaire, puis conçues, mesurées et installées par nos équipes, à l'intérieur du même contrat de rénovation.",
          items: [
            {
              title: "Design et plans de fabrication",
              description:
                "Relevé sur place, implantation, ergonomie, choix des finis et dessins validés avant la mise en production.",
            },
            {
              title: "Fabrication sur mesure",
              description:
                "Caissons en contreplaqué de bouleau, tiroirs en bois massif de bouleau, quincaillerie de qualité, dimensions exactes de votre pièce.",
            },
            {
              title: "Installation par nos équipes",
              description:
                "Pose, alignements et ajustements coordonnés avec le reste du chantier : plomberie, électricité, comptoir et plancher.",
            },
            {
              title: "Une seule responsabilité",
              description:
                "Si une porte ne ferme pas droit, vous appelez le même entrepreneur que pour le reste du projet. Pas de renvoi entre fournisseurs.",
            },
          ],
          actions: [
            {
              label: "Voir le service de design",
              href: "/services/design",
              variant: "ghost",
            },
            {
              label: "Voir les espaces",
              href: "/espaces",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/services/service-installation-hero-01.webp",
            alt: "Installation d'armoires sur mesure pendant un chantier de rénovation",
          },
          cardTitle: "Sous-catégorie RBQ 12",
          cardDescription:
            "Armoires et comptoirs usinés. C'est l'une des sous-catégories inscrites à notre licence, avec la plomberie, l'électricité de bâtiment, la charpenterie-menuiserie et les revêtements.",
        },
      },
    },
    {
      id: "divisions",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Les trois étapes du volet armoires",
          intro:
            "Quand votre projet porte surtout sur les armoires, ces pages détaillent chacune des étapes. Les pages espaces montrent le résultat par pièce.",
          columns: "3",
          items: [
            {
              title: "Design",
              description:
                "Relevé, implantation, ergonomie et choix de matériaux avant la production.",
              href: "/services/design",
              badges: ["Plans", "Ergonomie"],
              ctaLabel: "Voir le design",
            },
            {
              title: "Fabrication",
              description:
                "Production sur mesure par notre usine partenaire, selon nos plans et nos standards.",
              href: "/services/fabrication",
              badges: ["Sur mesure", "Durabilité"],
              ctaLabel: "Voir la fabrication",
            },
            {
              title: "Installation",
              description:
                "Pose, ajustements et finition sur place, coordonnés avec les autres corps de métier.",
              href: "/services/installation",
              badges: ["Pose", "Précision"],
              ctaLabel: "Voir l'installation",
            },
          ],
        },
      },
    },
    {
      id: "zones",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Où nous intervenons",
          intro:
            "Nos bureaux sont à Pierrefonds-Roxboro. L'Ouest-de-l'Île est notre base, et nous couvrons le Grand Montréal. Travailler avec un entrepreneur qui connaît déjà le service des permis de votre arrondissement fait gagner des semaines.",
          badges: [
            "Ouest-de-l'Île",
            "Montréal",
            "Laval",
            "Rive-Sud",
            "Vaudreuil-Soulanges",
          ],
          cardTitle: "Ce que la proximité change",
          items: [
            "Visite d'évaluation planifiée rapidement, sans frais.",
            "Connaissance des règlements et des services de permis locaux.",
            "Suivi de chantier fréquent plutôt qu'une visite par semaine.",
            "Retour après livraison quand un ajustement est nécessaire.",
          ],
          actions: [
            {
              label: "Voir les zones desservies",
              href: "/zones",
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
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "FAQ — services d'entrepreneur général",
          intro:
            "Licence, permis, prix, échéancier, assurances et garantie : les questions que se posent les propriétaires avant de signer.",
          items: [
            {
              q: "Quelle est votre licence RBQ ?",
              a: "Licence RBQ 8306-0806-27, délivrée le 7 septembre 2004, valide et sans restriction. Catégories entrepreneur général 1.2 petits bâtiments et 1.3 bâtiments de tout genre, avec plusieurs sous-catégories spécialisées dont la 12, armoires et comptoirs usinés. Le numéro est vérifiable en ligne au registre des détenteurs de licence de la Régie du bâtiment du Québec.",
            },
            {
              q: "Construisez-vous des maisons neuves ?",
              a: "Non. Notre licence couvre la rénovation, la transformation, l'agrandissement, la reconstruction après sinistre et l'aménagement commercial. La construction d'une maison neuve exige une autre catégorie de licence et l'adhésion à un plan de garantie, ce qui n'est pas notre créneau.",
            },
            {
              q: "Est-ce que j'ai besoin d'un permis pour mes travaux ?",
              a: "Souvent, oui. Une demande de permis est généralement requise pour modifier un mur porteur, déplacer ou ajouter de la plomberie, aménager un sous-sol, ajouter de la surface habitable ou changer l'apparence extérieure. Un rafraîchissement de surfaces sans intervention structurale ou mécanique n'en demande habituellement pas. Nous validons le cas avec votre ville avant d'ouvrir le chantier et nous déposons la demande.",
            },
            {
              q: "Combien coûte une rénovation ?",
              a: "Nos mandats démarrent généralement autour de 25 000 $. Une salle de bain complète se situe souvent entre 15 000 $ et 35 000 $, une cuisine complète entre 35 000 $ et 50 000 $ et plus, selon la portée. Ces ordres de grandeur sont indicatifs : le prix réel dépend de la superficie, de l'état de l'existant, des travaux mécaniques et du niveau de finition. La soumission détaillée est gratuite.",
            },
            {
              q: "Combien de temps faut-il attendre avant le début des travaux ?",
              a: "Après la visite, nous revenons avec une estimation sous 24 à 48 heures ouvrables. La date de début dépend ensuite du délai de permis de votre municipalité, de l'approvisionnement des matériaux et de notre calendrier. Les armoires sur mesure demandent de 9 à 15 semaines de production, ce qui se planifie en parallèle des travaux.",
            },
            {
              q: "Qui engage et paie les sous-traitants ?",
              a: "Nous. Plombier, électricien, ventilation, tuilage, plâtrier : ils travaillent pour nous, sous notre contrat et notre calendrier. Vous avez un seul interlocuteur et une seule facturation, et vous n'assumez pas le rôle de coordonnateur de chantier.",
            },
            {
              q: "Êtes-vous assurés ?",
              a: "Oui. Responsabilité civile et assurance chantier sont en vigueur, et notre licence est accompagnée d'un cautionnement de 40 000 $ sans aucune réclamation au dossier. Les attestations peuvent être fournies sur demande avant la signature du contrat.",
            },
            {
              q: "Est-ce que vous travaillez en hiver ?",
              a: "Oui. Les travaux intérieurs — cuisine, salle de bain, sous-sol, plancher, reconstruction après sinistre — se font toute l'année. Pour un agrandissement, les excavations et le coulage de fondation se planifient selon les conditions, et le reste des travaux se poursuit une fois l'enveloppe fermée et chauffée.",
            },
            {
              q: "Est-ce que vous faites de l'aménagement commercial ?",
              a: "Oui. La catégorie 1.3 bâtiments de tout genre couvre les bureaux, les commerces, les restaurants et les améliorations locatives. Les contraintes diffèrent du résidentiel : horaires, accès, exigences du propriétaire de l'immeuble et délais de permis. La page espaces commerciaux détaille l'approche.",
            },
            {
              q: "Offrez-vous une garantie sur les travaux ?",
              a: "Oui, les travaux sont garantis et les modalités sont inscrites au contrat. Cette garantie contractuelle s'ajoute aux protections prévues par la loi et au cautionnement rattaché à notre licence RBQ. Nous n'offrons pas de plan de garantie de maison neuve, qui concerne uniquement la construction résidentielle neuve.",
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
          heading: "Un projet de rénovation à faire évaluer ?",
          intro:
            "Décrivez-nous le projet. Nous nous déplaçons, relevons les contraintes et revenons avec une estimation gratuite sous 24 à 48 heures ouvrables, incluant le permis, les corps de métier et l'échéancier.",
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
          note: "Licence RBQ 8306-0806-27 · Entrepreneur général depuis 2004 · Ouest-de-l'Île et Grand Montréal",
        },
      },
    },
  ],
};
