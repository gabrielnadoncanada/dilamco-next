import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const page: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Entrepreneur général licencié depuis 2004 — À propos",
    description:
      "Dilamco, entrepreneur général en rénovation résidentielle depuis 2004. Licence RBQ 8306-0806-27, base à Pierrefonds-Roxboro, Ouest-de-l'Île.",
    path: "/a-propos",
    ogAlt: "L'équipe et l'approche de chantier de Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "À propos", url: SITE.url + "/a-propos" },
  ],
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Dilamco - À propos",
          heading:
            "Entrepreneur général en rénovation résidentielle depuis 2004",
          description:
            "Dilamco est une entreprise de construction et de rénovation établie à Pierrefonds-Roxboro, dans l'Ouest-de-l'Île. Notre licence d'entrepreneur général a été délivrée le 7 septembre 2004 et elle est toujours valide, sans restriction. Depuis, nous menons des chantiers résidentiels — rénovations complètes, transformations, agrandissements et reconstructions après sinistre — dans le Grand Montréal.",
          actions: [
            {
              label: "Obtenir une estimation gratuite",
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
            "RBQ 8306-0806-27",
            "Depuis 2004",
            "Pierrefonds-Roxboro",
            "Ouest-de-l'Île",
          ],
          image: {
            src: "/images/realisations/escalier-rampe-verre-finition-interieure-01.webp",
            alt: "Escalier et rampe de verre : finition intérieure réalisée par Dilamco",
          },
          caption:
            "Raison sociale : 9139-1250 Québec inc. — aussi connue sous « Construction Dilamco » et « Le Groupe Dilamco ».",
        },
      },
    },
    {
      id: "structural-advantage",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Notre thèse : tout se joue dans le contrôle de l'exécution",
          description:
            "Un chantier de rénovation échoue rarement à cause d'un mauvais choix de céramique. Il échoue parce que quelque chose s'est rompu entre les intervenants : une information qui ne circule pas, un métier qui arrive trop tôt, une décision prise sans que personne n'en mesure l'effet sur la suite. Nous avons construit l'entreprise autour d'une idée simple : réduire le nombre de ruptures, et faire porter le résultat par un seul responsable.",
          cards: [
            {
              title: "Moins de ruptures entre les intervenants",
              description:
                "Chaque transfert entre corps de métier est un endroit où un projet peut dérailler. Nous planifions la séquence complète avant l'ouverture du chantier et nous inspectons chaque étape avant d'enchaîner sur la suivante.",
            },
            {
              title: "Un seul responsable du résultat",
              description:
                "Vous ne coordonnez pas les sous-traitants et vous n'arbitrez pas leurs désaccords. Nous engageons les métiers, nous fixons leur calendrier et nous répondons du travail livré — y compris quand il faut revenir le corriger.",
            },
            {
              title: "Des engagements écrits, pas des promesses",
              description:
                "Portée des travaux, prix, exclusions, échéancier et calendrier de paiements figurent au contrat avant le premier coup de marteau. Tout changement passe par un avenant écrit et chiffré, accepté avant d'être exécuté.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "history",
      frame: { surface: "muted" },
      content: {
        type: "process",
        variant: "split-cards",
        props: {
          heading: "Comment l'entreprise s'est structurée",
          description:
            "Notre parcours n'a rien de spectaculaire et c'est voulu. Chaque étape a servi à élargir ce que nous pouvons prendre en charge nous-mêmes, plutôt qu'à sous-traiter la responsabilité.",
          steps: [
            {
              number: "1",
              title: "2004 — La licence d'entrepreneur général",
              description:
                "La licence RBQ 8306-0806-27 est délivrée le 7 septembre 2004, dans les catégories 1.2 (petits bâtiments) et 1.3 (bâtiments de tout genre). Ces deux catégories nous permettent de mener un projet résidentiel complet sous une seule responsabilité.",
            },
            {
              number: "2",
              title: "Une base dans l'Ouest-de-l'Île",
              description:
                "Le siège est au 18625, rue Larocque, à Pierrefonds-Roxboro. Cette proximité n'est pas un argument de vente : elle réduit concrètement le délai entre un appel et une visite, et entre une déficience signalée et sa correction.",
            },
            {
              number: "3",
              title: "L'élargissement des sous-catégories",
              description:
                "La licence couvre aujourd'hui une série de sous-catégories spécialisées — de la maçonnerie et de la charpente aux revêtements, à la finition intérieure et aux systèmes. Moins de travaux à confier à l'extérieur, donc moins de zones grises sur le chantier.",
            },
            {
              number: "4",
              title: "La division armoires",
              description:
                "La sous-catégorie 12, armoires et comptoirs usinés, permet d'intégrer les armoires sur mesure au mandat de rénovation plutôt que d'ajouter un fournisseur en parallèle du chantier.",
            },
            {
              number: "5",
              title: "Un dossier tenu propre",
              description:
                "Vingt ans plus tard, la licence est toujours valide et sans restriction, un cautionnement de licence de 40 000 $ est en vigueur auprès de la FACCQ et aucune réclamation n'apparaît au dossier. C'est vérifiable au registre de la RBQ.",
            },
          ],
          actions: [
            {
              label: "Voir notre processus",
              href: "/processus",
              variant: "ghost",
            },
            {
              label: "Voir nos services",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
        },
      },
    },
    {
      id: "licence",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "Licence, assurances et garanties",
          intro:
            "Tout ce qui suit est vérifiable. Le numéro de licence permet de consulter notre dossier directement au registre des détenteurs de licence de la Régie du bâtiment du Québec.",
          columns: "2",
          items: [
            {
              title: "Licence RBQ 8306-0806-27",
              description:
                "Licence d'entrepreneur général, délivrée le 7 septembre 2004, valide et sans restriction.",
              icon: "fileCheck",
              bullets: [
                "Catégorie 1.2 — entrepreneur général en petits bâtiments",
                "Catégorie 1.3 — entrepreneur général en bâtiments de tout genre",
                "Sous-catégories spécialisées, dont la 12 : armoires et comptoirs usinés",
              ],
            },
            {
              title: "Cautionnement et dossier",
              description:
                "Le cautionnement de licence protège le client en cas de défaut de l'entrepreneur.",
              icon: "shieldCheck",
              bullets: [
                "Cautionnement de licence de 40 000 $ auprès de la FACCQ",
                "Aucune réclamation inscrite au dossier",
                "Répondant unique et permanent : Sean Diffley",
              ],
            },
            {
              title: "Assurances en vigueur",
              description:
                "Un entrepreneur sans couverture transfère son risque au propriétaire. Ce n'est pas notre cas.",
              icon: "hardHat",
              bullets: [
                "Assurance responsabilité civile",
                "Couverture de chantier pendant les travaux",
                "Attestations disponibles sur demande avant la signature",
              ],
            },
            {
              title: "Garantie des travaux",
              description:
                "Les travaux exécutés sont garantis, avec une portée et une durée inscrites au contrat.",
              icon: "clipboardCheck",
              bullets: [
                "Inspection finale et liste de déficiences avant le paiement final",
                "Conformité au Code de construction du Québec",
                "Nous ne construisons pas de maisons neuves : le plan de garantie GCR ne s'applique pas",
              ],
            },
          ],
        },
      },
    },
    {
      id: "armoires",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Une force secondaire : la division armoires",
          intro:
            "Dilamco reste avant tout un entrepreneur général. Mais la sous-catégorie 12 de notre licence couvre les armoires et comptoirs usinés, ce qui nous permet d'inclure les armoires sur mesure dans le même mandat que la rénovation. Sur un chantier de cuisine ou de salle de bain, c'est un intervenant de moins à coordonner et un délai de moins à absorber.",
          items: [
            {
              title: "Intégrées au mandat",
              description:
                "les armoires figurent dans la même soumission et dans le même échéancier que les travaux.",
            },
            {
              title: "Relevé après la démolition",
              description:
                "les dimensions sont prises quand les murs sont à leur position finale, pas avant.",
            },
            {
              title: "Fabriquées par notre usine partenaire",
              description:
                "un standard constant d'un projet à l'autre, sous notre responsabilité de bout en bout.",
            },
            {
              title: "Aucune production à l'interne",
              description:
                "nous ne prétendons pas produire sur place : nous spécifions, coordonnons et installons.",
            },
          ],
          actions: [
            {
              label: "Voir les espaces",
              href: "/espaces",
              variant: "primary",
            },
            {
              label: "Comprendre nos matériaux",
              href: "/materiaux",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/materials/material-plywood-hero-01.webp",
            alt: "Panneaux de contreplaqué utilisés pour les armoires sur mesure",
          },
          cardTitle: "Sous-catégorie RBQ 12",
          cardDescription:
            "Armoires et comptoirs usinés — une division de l'entreprise, jamais son identité principale.",
        },
      },
    },
    {
      id: "where-to-go-next",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Poursuivre la vérification",
          intro:
            "Selon ce que vous cherchez à valider avant de nous confier un projet, ces pages détaillent la méthode, les services, le territoire et les réalisations.",
          columns: "2",
          items: [
            {
              title: "Notre processus",
              description:
                "Le déroulement complet d'un projet : estimation, soumission, contrat, permis, chantier, livraison.",
              href: "/processus",
              badges: ["Étapes", "Contrat"],
              ctaLabel: "Voir le processus",
            },
            {
              title: "Nos services de rénovation",
              description:
                "Cuisine, salle de bain, sous-sol, agrandissement, plancher et reconstruction après sinistre.",
              href: "/services/renovation",
              badges: ["Résidentiel", "Clé en main"],
              ctaLabel: "Voir les services",
            },
            {
              title: "Zones desservies",
              description:
                "Ouest-de-l'Île, Montréal, Laval, Rive-Sud et Vaudreuil-Soulanges, ville par ville.",
              href: "/zones",
              badges: ["Territoire", "Local"],
              ctaLabel: "Voir les zones",
            },
            {
              title: "Nos réalisations",
              description:
                "Des exemples concrets de chantiers menés dans le Grand Montréal.",
              href: "/projets",
              badges: ["Références", "Chantiers"],
              ctaLabel: "Voir les projets",
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
          heading: "Parlons de votre projet avant d'y engager un budget",
          intro:
            "Une visite sur place, une soumission détaillée, et une réponse honnête sur ce que votre projet implique réellement. L'estimation est gratuite et le retour se fait sous 24 à 48 heures ouvrables.",
          actions: [
            {
              label: "Obtenir une estimation gratuite",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir notre processus",
              href: "/processus",
              variant: "ghost",
            },
          ],
          note: "Licence RBQ 8306-0806-27 • 18625, rue Larocque, Pierrefonds-Roxboro (Montréal) • (514) 820-0773",
        },
      },
    },
  ],
};
