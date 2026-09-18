import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Rénovation clé en main — entrepreneur général à Montréal",
    description:
      "Rénovation clé en main : permis, corps de métier coordonnés, échéancier et contrat écrit. Entrepreneur général licencié RBQ depuis 2004.",
    path: "/services/renovation",
    ogAlt: "Rénovation clé en main par un entrepreneur général",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Rénovation clé en main", url: SITE.url + "/services/renovation" },
  ],
  service: {
    name: "Rénovation clé en main",
    description:
      "Entrepreneur général responsable du projet complet : demande de permis, coordination des corps de métier, inspections, échéancier et livraison, sous licence RBQ 8306-0806-27.",
    url: SITE.url + "/services/renovation",
    serviceType: "Rénovation résidentielle clé en main",
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
            "Rénovation clé en main : un seul entrepreneur du permis à la livraison",
          description:
            "Une rénovation clé en main veut dire qu'une seule entreprise licenciée signe le contrat, dépose la demande de permis, engage et paie les corps de métier, tient le calendrier, fait venir l'inspecteur et répond de la qualité finale. Vous n'avez pas à jouer au chef de chantier entre deux journées de travail.",
          actions: [
            {
              label: "Demander une estimation gratuite",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos projets",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: [
            "Licence RBQ 8306-0806-27",
            "Permis inclus",
            "Contrat écrit",
            "Assuré",
          ],
          image: {
            src: "/images/generated/services/service-renovation-hero-01.webp",
            alt: "Chantier de rénovation résidentielle clé en main",
          },
          caption:
            "Ouest-de-l'Île, Montréal, Laval, Rive-Sud et Vaudreuil-Soulanges",
        },
      },
    },
    {
      id: "derapage",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Pourquoi les chantiers dérapent",
          description:
            "Les rénovations qui traînent et qui coûtent le double ont presque toujours les mêmes causes. Aucune n'est mystérieuse, et aucune ne se règle une fois le chantier ouvert : elles se règlent avant, au moment de définir la portée et de signer.",
          cards: [
            {
              title: "La portée n'a jamais été écrite",
              description:
                "Une soumission d'une page, quelques montants ronds, rien sur les exclusions. Chaque décision non prise avant le début devient un extra en cours de route, et personne ne s'entend sur ce qui avait été convenu.",
            },
            {
              title: "Le permis arrive après la démolition",
              description:
                "Un mur porteur ouvert sans autorisation, une plomberie déplacée sans plan déposé : la ville peut faire arrêter les travaux, exiger une remise en état ou une expertise. Le retard se compte alors en mois, pas en jours.",
            },
            {
              title: "Personne ne coordonne les métiers",
              description:
                "Le propriétaire a engagé quatre entreprises séparément. Le plombier vient avant que la charpente soit prête, l'électricien repart parce que les murs sont déjà fermés, et chacun facture son déplacement.",
            },
            {
              title: "L'entrepreneur n'était pas licencié",
              description:
                "Sans licence RBQ valide, il n'y a ni cautionnement, ni recours réel, ni assurance chantier fiable. Si l'entreprise disparaît en cours de projet, le propriétaire assume seul la suite.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "prise-en-charge",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Ce que nous prenons en charge",
          intro:
            "Le mandat d'entrepreneur général n'est pas une formule commerciale, c'est une répartition de responsabilité. Voici concrètement ce qui passe de votre côté au nôtre quand vous signez un contrat de rénovation clé en main avec Dilamco.",
          items: [
            {
              title: "La demande de permis",
              description:
                "Vérification du besoin réel auprès de votre ville ou arrondissement, préparation des plans et documents, dépôt de la demande et suivi jusqu'à la délivrance.",
            },
            {
              title: "L'embauche et le paiement des corps de métier",
              description:
                "Démolition, charpente, plomberie, électricité, ventilation, tuilage, plâtre, peinture. Ils travaillent pour nous, sous notre contrat, et c'est nous qui les payons.",
            },
            {
              title: "Le calendrier et sa tenue",
              description:
                "Chaque métier a une fenêtre. Nous planifions l'enchaînement, commandons les matériaux à temps et ajustons quand un imprévu se présente, sans laisser le chantier tourner à vide.",
            },
            {
              title: "Les inspections municipales",
              description:
                "Elles se font à des étapes précises, souvent avant la fermeture des murs. Une inspection manquée oblige à rouvrir ce qui vient d'être fermé. Nous les planifions au bon moment.",
            },
            {
              title: "La conformité au Code de construction",
              description:
                "Hauteurs, dégagements, ventilation, électricité, issues : les exigences existent pour la sécurité et pour la valeur de revente. Elles sont respectées, pas contournées.",
            },
            {
              title: "La garantie après livraison",
              description:
                "Les travaux sont garantis et les modalités sont au contrat. Si un ajustement est nécessaire quelques mois plus tard, vous rappelez la même entreprise.",
            },
          ],
          actions: [
            {
              label: "Voir tous les services",
              href: "/services",
              variant: "ghost",
            },
            {
              label: "Demander une estimation",
              href: "/contact",
              variant: "primary",
            },
          ],
          image: {
            src: "/images/generated/services/service-renovation-project-01.webp",
            alt: "Coordination des corps de métier sur un chantier de rénovation",
          },
          cardTitle: "Une licence, pas une promesse",
          cardDescription:
            "Licence RBQ 8306-0806-27, délivrée le 7 septembre 2004, valide et sans restriction. Catégories 1.2 petits bâtiments et 1.3 bâtiments de tout genre. Cautionnement de 40 000 $, aucune réclamation au dossier. Le numéro se vérifie au registre de la Régie du bâtiment du Québec.",
        },
      },
    },
    {
      id: "process",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "Le déroulement, étape par étape",
          intro:
            "La même séquence pour une salle de bain ou pour un agrandissement. Ce qui change, c'est la durée de chaque phase et le nombre de corps de métier impliqués.",
          steps: [
            {
              number: "1",
              title: "Visite et évaluation",
              description:
                "Nous venons voir les lieux, relever les dimensions, l'état de l'existant et les contraintes : structure, plomberie, entrée électrique, accès, condo ou maison. Sans frais.",
            },
            {
              number: "2",
              title: "Soumission détaillée",
              description:
                "Portée pièce par pièce, corps de métier prévus, matériaux, exclusions et budget. Réponse sous 24 à 48 heures ouvrables après la visite.",
            },
            {
              number: "3",
              title: "Contrat et échéancier",
              description:
                "Signature avec les dates, les étapes de paiement et les conditions. C'est le document auquel les deux parties se réfèrent pendant tout le projet.",
            },
            {
              number: "4",
              title: "Permis",
              description:
                "Dépôt de la demande auprès de la ville ou de l'arrondissement quand elle est requise, et attente de la délivrance avant d'ouvrir le chantier.",
            },
            {
              number: "5",
              title: "Exécution coordonnée",
              description:
                "Protection des lieux, démolition, travaux mécaniques, inspections, fermeture, finition. Les métiers se succèdent selon le calendrier convenu.",
            },
            {
              number: "6",
              title: "Livraison et garantie",
              description:
                "Inspection finale avec vous, liste des points à corriger, nettoyage, remise des lieux et entrée en vigueur de la garantie contractuelle.",
            },
          ],
        },
      },
    },
    {
      id: "subservices",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Les six types de rénovation que nous réalisons",
          intro:
            "Chaque page détaille la séquence réelle des travaux, ce qui exige un permis, les points techniques qui comptent et les ordres de grandeur de prix.",
          items: [
            {
              title: "Rénovation de cuisine",
              href: "/services/renovation/cuisine",
              description:
                "Démolition, plomberie, électricité, ventilation, planchers, murs, armoires, comptoirs et finition, coordonnés en une seule séquence.",
              image: {
                src: "/images/generated/renovation/renovation-cuisine-hero-01.webp",
                alt: "Rénovation de cuisine complète",
              },
              badges: ["Cuisine", "Multi-métiers"],
              footerCtaLabel: "Voir cuisine",
            },
            {
              title: "Rénovation de salle de bain",
              href: "/services/renovation/salle-de-bain",
              description:
                "Étanchéité, membrane, ventilation, plomberie, tuilage et vanité, dans la pièce la moins tolérante aux raccourcis d'exécution.",
              image: {
                src: "/images/generated/renovation/renovation-bath-hero-01.webp",
                alt: "Rénovation de salle de bain complète",
              },
              badges: ["Salle de bain", "Étanchéité"],
              footerCtaLabel: "Voir salle de bain",
            },
            {
              title: "Finition de sous-sol",
              href: "/services/renovation/sous-sol",
              description:
                "Humidité, drainage, isolation, pare-vapeur, issue de secours, plomberie et permis obligatoire pour aménager un sous-sol.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
                alt: "Sous-sol fini par un entrepreneur général",
              },
              badges: ["Sous-sol", "Permis obligatoire"],
              footerCtaLabel: "Voir sous-sol",
            },
            {
              title: "Rénovation de plancher",
              href: "/services/renovation/plancher",
              description:
                "Sous-plancher, planéité, niveaux et transitions entre pièces, exécutés au bon moment dans la séquence du chantier.",
              image: {
                src: "/images/generated/renovation/renovation-plancher-hero-01.webp",
                alt: "Rénovation de plancher résidentiel",
              },
              badges: ["Plancher", "Sous-plancher"],
              footerCtaLabel: "Voir plancher",
            },
            {
              title: "Agrandissement de maison",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Fondations, structure, enveloppe, raccordements et conformité au zonage, avec plans scellés par un ingénieur quand la portée l'exige.",
              image: {
                src: "/images/generated/renovation/renovation-extension-hero-01.webp",
                alt: "Agrandissement de maison en construction",
              },
              badges: ["Agrandissement", "Structure"],
              footerCtaLabel: "Voir agrandissement",
            },
            {
              title: "Rénovation après sinistre",
              href: "/services/renovation/apres-sinistre",
              description:
                "Reconstruction après dégât d'eau, feu, fumée ou moisissures, avec la documentation dont votre assureur a besoin pour la réclamation.",
              image: {
                src: "/images/generated/renovation/renovation-plancher-approach-01.webp",
                alt: "Reconstruction après un dégât d'eau",
              },
              badges: ["Sinistre", "Assurance"],
              footerCtaLabel: "Voir après sinistre",
            },
          ],
        },
      },
    },
    {
      id: "controle",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "Les quatre points qui tiennent un chantier",
          intro:
            "Ce sont les mêmes sur tous les mandats, du remplacement d'une salle de bain à la reconstruction d'un sous-sol inondé.",
          columns: "2",
          items: [
            {
              title: "Le contrat écrit",
              description:
                "Ce qui n'est pas écrit finira par être discuté sur le chantier.",
              icon: "fileCheck",
              bullets: [
                "Portée décrite pièce par pièce, avec les exclusions.",
                "Matériaux nommés, avec les allocations quand le choix reste à faire.",
                "Conditions de paiement liées à l'avancement, pas au calendrier seul.",
                "Procédure écrite pour les changements demandés en cours de route.",
              ],
            },
            {
              title: "Le permis et l'inspection",
              description:
                "L'étape que les entrepreneurs pressés proposent de sauter.",
              icon: "clipboardCheck",
              bullets: [
                "Vérification du besoin de permis avant toute démolition.",
                "Plans et documents préparés selon les exigences de votre ville.",
                "Inspections planifiées avant la fermeture des murs.",
                "Travaux conformes au Code de construction du Québec.",
              ],
            },
            {
              title: "La séquence des métiers",
              description:
                "L'ordre des interventions détermine le coût réel du projet.",
              icon: "hardHat",
              bullets: [
                "Chaque corps de métier a une fenêtre planifiée.",
                "Les matériaux à long délai sont commandés dès la signature.",
                "Les sous-traitants sont engagés et payés par nous.",
                "Un seul interlocuteur pour les questions et les imprévus.",
              ],
            },
            {
              title: "La protection du propriétaire",
              description:
                "Ce qui existe parce que l'entreprise est licenciée et assurée.",
              icon: "shieldCheck",
              bullets: [
                "Licence RBQ valide et sans restriction, vérifiable en ligne.",
                "Cautionnement de licence de 40 000 $, aucune réclamation.",
                "Responsabilité civile et assurance chantier en vigueur.",
                "Travaux garantis, détails au contrat.",
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
          heading: "FAQ — rénovation clé en main",
          intro:
            "Prix, permis, délais, sous-traitants, hiver, condo et garantie : les questions les plus fréquentes avant de signer.",
          items: [
            {
              q: "Qu'est-ce qui est vraiment inclus dans « clé en main » ?",
              a: "La gestion complète du projet : demande de permis, embauche et paiement des corps de métier, commande des matériaux, tenue du calendrier, planification des inspections, protection et nettoyage des lieux, puis livraison et garantie. Ce qui n'est pas inclus est écrit noir sur blanc dans les exclusions de la soumission, pour qu'il n'y ait pas de zone grise.",
            },
            {
              q: "Combien coûte une rénovation clé en main ?",
              a: "Nos mandats démarrent généralement autour de 25 000 $. À titre indicatif, une salle de bain complète se situe souvent entre 15 000 $ et 35 000 $, une cuisine complète entre 35 000 $ et 50 000 $ et plus. La portée, l'état de l'existant, le déplacement de plomberie ou d'électricité et le niveau de finition font la différence. L'estimation détaillée est gratuite.",
            },
            {
              q: "Est-ce que j'ai besoin d'un permis ?",
              a: "Une demande de permis est généralement requise dès qu'on touche à un mur porteur, qu'on déplace ou ajoute de la plomberie, qu'on aménage un sous-sol, qu'on ajoute de la surface habitable ou qu'on modifie l'apparence extérieure. Nous validons le cas auprès de votre ville ou de votre arrondissement avant le début des travaux et nous déposons la demande à votre place.",
            },
            {
              q: "Qui engage et paie les sous-traitants ?",
              a: "Nous. Plombier, électricien, ventilation, tuilage, plâtrier : ils travaillent sous notre contrat et notre calendrier, et c'est nous qui les payons. Vous recevez une seule facturation et vous n'avez qu'un interlocuteur, ce qui évite les renvois de responsabilité quand un problème survient.",
            },
            {
              q: "Combien de temps dure une rénovation ?",
              a: "La durée dépend de la portée, du délai de permis de votre municipalité et de l'approvisionnement. Une salle de bain complète se compte en semaines, une cuisine complète en plusieurs semaines de chantier, un agrandissement en mois. Les armoires sur mesure demandent de 9 à 15 semaines de production, planifiées en parallèle. L'échéancier précis est joint au contrat.",
            },
            {
              q: "Peut-on rénover en hiver ?",
              a: "Oui. Les travaux intérieurs se font toute l'année et l'hiver est souvent une période plus disponible chez les corps de métier. Pour un agrandissement, l'excavation et le coulage de fondation se planifient selon les conditions, puis les travaux se poursuivent une fois l'enveloppe fermée et chauffée.",
            },
            {
              q: "Est-ce que vous travaillez en condo ?",
              a: "Oui. En condo, il faut valider tôt les horaires de travaux autorisés par le syndicat, l'accès (ascenseur, stationnement, protection des aires communes), les exigences d'insonorisation et les restrictions de la déclaration de copropriété sur la plomberie et la ventilation. Une fois ces points cadrés, le chantier se planifie normalement.",
            },
            {
              q: "Puis-je rester chez moi pendant les travaux ?",
              a: "Souvent oui, surtout si la rénovation touche une seule pièce et qu'une autre salle de bain ou une cuisine temporaire reste disponible. Pour une rénovation majeure ou un chantier avec démolition importante, plusieurs propriétaires choisissent de s'absenter quelques semaines. On en discute au moment de fixer l'échéancier.",
            },
            {
              q: "Est-ce que les travaux sont garantis ?",
              a: "Oui. Les travaux sont garantis et les modalités sont inscrites au contrat. Cette garantie s'ajoute aux protections prévues par la loi et au cautionnement de 40 000 $ rattaché à notre licence RBQ. Nous n'offrons pas de plan de garantie de maison neuve, qui ne s'applique qu'à la construction résidentielle neuve.",
            },
            {
              q: "Dans quelles villes intervenez-vous ?",
              a: "Nos bureaux sont à Pierrefonds-Roxboro. Nous couvrons l'Ouest-de-l'Île, Montréal, Laval, la Rive-Sud et Vaudreuil-Soulanges. La page des zones desservies détaille les municipalités et les particularités locales de permis.",
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
          heading: "Un projet de rénovation à cadrer sérieusement ?",
          intro:
            "Nous nous déplaçons, relevons les contraintes réelles et revenons avec une estimation gratuite sous 24 à 48 heures ouvrables. Permis, corps de métier, échéancier et budget, par écrit.",
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
          note: "Licence RBQ 8306-0806-27 · Entrepreneur général depuis 2004 · (514) 820-0773",
        },
      },
    },
  ],
};
