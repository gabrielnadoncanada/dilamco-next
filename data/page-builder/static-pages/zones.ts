// Page hub : zones desservies.
// Territoire et base d'affaires confirmés au registre RBQ et à la fiche d'entreprise
// (18625, rue Larocque, Pierrefonds-Roxboro, QC H9K 1P1).
// Licence RBQ 8306-0806-27 : valide, sans restriction, délivrée le 2004-09-07,
// catégories entrepreneur général 1.2 et 1.3. Registre consulté le 2026-09-18 :
// https://www.pes.rbq.gouv.qc.ca/RegistreLicences/FicheDetenteur/8306080627

import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const page: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Zones desservies — Ouest-de-l'Île, Montréal, Laval",
    description:
      "Entrepreneur général basé à Pierrefonds-Roxboro : Ouest-de-l'Île, Montréal, Laval, Vaudreuil-Soulanges et Rive-Sud sur demande. Voir les zones desservies.",
    path: "/zones",
    ogAlt: "Zones desservies par Dilamco, entrepreneur général",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Zones desservies", url: SITE.url + "/zones" },
  ],
  service: {
    name: "Entrepreneur général — zones desservies",
    description:
      "Rénovation résidentielle et commerciale par un entrepreneur général licencié RBQ basé à Pierrefonds-Roxboro, actif dans l'Ouest-de-l'Île, à Montréal, à Laval et dans Vaudreuil-Soulanges.",
    url: SITE.url + "/zones",
    serviceType: "Rénovation résidentielle",
    areaServed: [
      "Ouest-de-l'Île",
      "Montréal",
      "Laval",
      "Vaudreuil-Soulanges",
      "Rive-Sud",
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
          eyebrow: "Dilamco - Zones desservies",
          heading:
            "Où on travaille : l'Ouest-de-l'Île d'abord, puis Montréal, Laval et Vaudreuil",
          description:
            "Notre base est au 18625, rue Larocque, à Pierrefonds-Roxboro. C'est de là que partent nos chantiers, et c'est ce qui explique la forme de notre territoire : très dense dans l'Ouest-de-l'Île, large sur l'île de Montréal, régulier vers Laval et Vaudreuil-Soulanges, ponctuel sur la Rive-Sud. Entrepreneur général licencié RBQ 8306-0806-27 depuis 2004.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos services",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          badges: [
            "RBQ 8306-0806-27",
            "Depuis 2004",
            "Ouest-de-l'Île",
            "Assuré",
          ],
          image: {
            src: "/images/generated/home/home-hero-premium-kitchen-01.webp",
            alt: "Projet de rénovation réalisé par Dilamco dans l'Ouest-de-l'Île",
          },
          caption:
            "Base d'affaires : Pierrefonds-Roxboro, arrondissement de Montréal",
        },
      },
    },
    {
      id: "territoire",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Comment se dessine notre territoire",
          description:
            "Un entrepreneur général n'est pas un fournisseur qu'on appelle une fois. Sur un chantier de plusieurs semaines, il revient, il corrige, il constate un imprévu, il rencontre l'inspecteur. La distance n'est donc pas un détail logistique : elle détermine la vitesse à laquelle les problèmes se règlent. C'est pourquoi notre territoire est organisé par cercles plutôt que par liste.",
          cards: [
            {
              title: "L'Ouest-de-l'Île : notre coeur de territoire",
              description:
                "Pierrefonds-Roxboro, Dollard-des-Ormeaux, Kirkland, Pointe-Claire, Beaconsfield, Dorval, L'Île-Bizard–Sainte-Geneviève et Saint-Laurent forment la zone où nous travaillons le plus souvent. Un déplacement y prend généralement moins de vingt minutes depuis notre base, ce qui permet une visite rapide, un suivi de chantier serré et une réponse concrète quand quelque chose ne se passe pas comme prévu. Nous connaissons aussi les règles locales : chaque ville de l'Ouest-de-l'Île a son propre service d'urbanisme et ses propres règlements.",
            },
            {
              title: "Montréal, Laval et Vaudreuil-Soulanges : territoire régulier",
              description:
                "Nous intervenons régulièrement ailleurs sur l'île de Montréal, à Laval et dans Vaudreuil-Soulanges, notamment à Vaudreuil-Dorion. Ce sont des mandats normaux pour nous, avec la même méthode : visite, soumission détaillée, permis municipal, contrat écrit, chantier coordonné. La seule différence tient au service municipal auquel on s'adresse et aux règlements applicables, qu'on valide au cadrage plutôt qu'en cours de route.",
            },
            {
              title: "Rive-Sud et au-delà : sur demande",
              description:
                "La Rive-Sud et les secteurs plus éloignés se traitent au cas par cas, en fonction de la portée du projet et de la période. Un mandat d'envergure justifie souvent le déplacement ; une petite intervention ponctuelle, rarement. Écrivez-nous en décrivant le projet et la ville : nous répondons franchement si ce n'est pas un mandat que nous pouvons bien servir. Mieux vaut un non rapide qu'un chantier mal encadré.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "zones",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Les zones que nous desservons",
          intro:
            "Une page par ville, avec le parc immobilier local, le service des permis concerné, les secteurs desservis et une FAQ propre à la municipalité.",
          columns: "3",
          items: [
            {
              title: "Pierrefonds-Roxboro",
              href: "/zones/pierrefonds-roxboro",
              description:
                "Notre base. Bungalows et cottages 1950-1980, sous-sols et reconstruction après sinistre.",
              badges: ["Base"],
              ctaLabel: "Voir la zone",
            },
            {
              title: "Dollard-des-Ormeaux",
              href: "/zones/dollard-des-ormeaux",
              description:
                "Secteurs Saint-Jean, Westpark et Sunnybrooke. Zonage refondu en 2025.",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Kirkland",
              href: "/zones/kirkland",
              description:
                "Grands terrains, maisons détachées, agrandissements et rénovations majeures.",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Pointe-Claire",
              href: "/zones/pointe-claire",
              description:
                "Du Village patrimonial à Cedar Park, avec les dossiers assujettis au PIIA.",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Beaconsfield",
              href: "/zones/beaconsfield",
              description:
                "Quartiers planifiés des années 1950-1960, zonage 720 et règlement d'abattage.",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Dorval",
              href: "/zones/dorval",
              description:
                "Rénovation résidentielle et aménagement commercial près de l'aéroport.",
              ctaLabel: "Voir la zone",
            },
            {
              title: "L'Île-Bizard–Sainte-Geneviève",
              href: "/zones/ile-bizard-sainte-genevieve",
              description:
                "Arrondissement voisin : maisons riveraines, terrains larges, contraintes d'accès.",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Saint-Laurent",
              href: "/zones/saint-laurent",
              description:
                "Plex, bungalows d'après-guerre et locaux commerciaux dans un arrondissement dense.",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Laval",
              href: "/zones/laval",
              description:
                "Rénovation résidentielle et agrandissement, de Chomedey à Sainte-Rose.",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Vaudreuil-Dorion",
              href: "/zones/vaudreuil-dorion",
              description:
                "Vaudreuil-Soulanges : secteurs en développement et maisons à moderniser.",
              ctaLabel: "Voir la zone",
            },
            {
              title: "Rive-Sud",
              href: "/zones/rive-sud",
              description:
                "Longueuil, Brossard, Saint-Lambert et environs : agrandissements, rénovations complètes et après sinistre.",
              ctaLabel: "Voir la zone",
            },
          ],
        },
      },
    },
    {
      id: "services",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "Ce qu'on fait, dans toutes nos zones",
          intro:
            "La méthode ne change pas d'une ville à l'autre : un seul responsable du permis à la livraison, une portée écrite et un échéancier au contrat.",
          columns: "3",
          items: [
            {
              title: "Rénovation résidentielle",
              description:
                "Cuisine, salle de bain, planchers et rénovation intérieure complète.",
              icon: "hammer",
              bullets: [
                "Corps de métier coordonnés sous un seul contrat.",
                "Mise à niveau électrique et plomberie pendant l'ouverture des murs.",
                "Armoires sur mesure par notre division armoires (sous-catégorie RBQ 12).",
              ],
            },
            {
              title: "Sous-sol et espaces gagnés",
              description:
                "Finir, corriger ou transformer un sous-sol existant.",
              icon: "sofa",
              bullets: [
                "Humidité, drainage et clapet vérifiés avant la finition.",
                "Isolation et pare-vapeur repris selon les règles actuelles.",
                "Salle familiale, bureau, chambre ou salle de bain supplémentaire.",
              ],
            },
            {
              title: "Agrandissement et transformation",
              description:
                "Ajouter de la surface sur un terrain déjà bâti.",
              icon: "building2",
              bullets: [
                "Faisabilité réglementaire validée avant les frais de plans.",
                "Excavation, fondation, structure, enveloppe et finition séquencées.",
                "Permis municipal monté et déposé dans le cadre du mandat.",
              ],
            },
            {
              title: "Reconstruction après sinistre",
              description:
                "Dégât d'eau, refoulement, inondation ou incendie.",
              icon: "droplets",
              bullets: [
                "Intervention une fois l'assèchement et la décontamination terminés.",
                "Portée écrite et modifications documentées pour votre assureur.",
                "Reconstruction conforme au Code de construction du Québec.",
              ],
            },
            {
              title: "Permis et conformité",
              description:
                "L'étape que la plupart des mauvaises surprises ont en commun.",
              icon: "fileCheck",
              bullets: [
                "Dossier monté pour la ville ou l'arrondissement concerné.",
                "Inspections planifiées aux bonnes étapes du chantier.",
                "Licence RBQ et assurances vérifiables avant le démarrage.",
              ],
            },
            {
              title: "Aménagement commercial",
              description:
                "Locaux, bureaux et commerces de quartier.",
              icon: "building2",
              bullets: [
                "Catégories de licence 1.2 et 1.3 : petits bâtiments et bâtiments de tout genre.",
                "Travaux planifiés pour limiter l'interruption des activités.",
                "Échéancier et budget fixés au contrat écrit.",
              ],
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
          heading: "FAQ - territoire et déplacements",
          intro:
            "Distance, frais, villes hors liste : ce qu'il faut savoir avant de nous écrire.",
          items: [
            {
              q: "Quel territoire desservez-vous exactement ?",
              a: "Notre coeur de territoire est l'Ouest-de-l'Île, à partir de notre base du 18625, rue Larocque, à Pierrefonds-Roxboro. Nous travaillons régulièrement ailleurs sur l'île de Montréal, à Laval et dans Vaudreuil-Soulanges. La Rive-Sud et les secteurs plus éloignés sont évalués au cas par cas selon la portée du projet.",
            },
            {
              q: "Facturez-vous des frais de déplacement ?",
              a: "La visite d'évaluation et l'estimation sont gratuites dans nos zones desservies. Pour un projet situé plus loin, le coût de déplacement est intégré à la soumission de façon transparente plutôt que facturé à part en cours de chantier. Tout est écrit au contrat avant le début des travaux.",
            },
            {
              q: "Ma ville n'apparaît pas dans la liste. Travaillez-vous quand même chez moi ?",
              a: "Peut-être. La liste des pages couvre les municipalités où nous intervenons le plus souvent, pas les seules où nous acceptons des mandats. Écrivez-nous en indiquant la ville et la nature du projet. Si ce n'est pas un chantier que nous pouvons bien encadrer à cette distance, nous vous le dirons franchement plutôt que d'accepter un mandat que nous servirions mal.",
            },
            {
              q: "Le prix est-il différent selon la ville ?",
              a: "Le prix dépend de la portée des travaux, de l'état du bâtiment, des matériaux et de la coordination requise, pas d'un tarif par municipalité. Ce qui peut varier d'une ville à l'autre, ce sont les frais de permis municipaux, les exigences réglementaires et, parfois, les contraintes d'accès au chantier. Ces éléments sont détaillés dans la soumission.",
            },
            {
              q: "Vous occupez-vous du permis dans chaque ville ?",
              a: "Oui. Chaque municipalité et chaque arrondissement a son propre service d'urbanisme, ses propres règlements et son propre processus. Nous montons et déposons le dossier dans le cadre du mandat, et nous intégrons le délai de traitement à l'échéancier plutôt que de le découvrir en cours de projet.",
            },
            {
              q: "Combien de temps avant d'avoir une soumission ?",
              a: "Nous revenons avec une estimation sous 24 à 48 heures ouvrables après la visite. Dans l'Ouest-de-l'Île, la visite elle-même peut souvent être fixée très rapidement, puisque nos chantiers et notre base s'y trouvent.",
            },
            {
              q: "Faites-vous du commercial partout dans votre territoire ?",
              a: "Oui. Nos catégories de licence RBQ couvrent les petits bâtiments (1.2) et les bâtiments de tout genre (1.3), ce qui inclut l'aménagement de locaux commerciaux et de bureaux. La logique reste la même qu'en résidentiel : portée écrite, permis, échéancier et un seul responsable.",
            },
            {
              q: "Construisez-vous des maisons neuves ?",
              a: "Non, dans aucune de nos zones. Nous sommes entrepreneur général en rénovation, transformation, agrandissement, reconstruction après sinistre et aménagement commercial. Nous ne construisons pas de maison neuve et n'offrons pas de plan de garantie pour bâtiment résidentiel neuf.",
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
          heading: "Dites-nous où se trouve votre projet",
          intro:
            "Ville, type de travaux, échéance souhaitée. On vous confirme rapidement si c'est un mandat pour nous, puis on fixe la visite. Estimation gratuite, retour sous 24 à 48 heures ouvrables.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos réalisations",
              href: "/projets",
              variant: "ghost",
            },
          ],
          note: "Dilamco - 18625, rue Larocque, Pierrefonds-Roxboro - RBQ 8306-0806-27",
        },
      },
    },
  ],
};
