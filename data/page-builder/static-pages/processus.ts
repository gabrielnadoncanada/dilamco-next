import type { PageTemplateData } from "@/features/page-builder";
import { serviceJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";

export const page: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Processus : le déroulement d'un projet de rénovation",
    description:
      "De l'estimation gratuite à la garantie : visite, soumission détaillée, contrat écrit, permis, chantier coordonné, liste de déficiences et livraison.",
    path: "/processus",
    ogAlt: "Étapes d'un projet de rénovation mené par Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Processus", url: SITE.url + "/processus" },
  ],
  extraJsonLd: [
    serviceJsonLd({
      name: "Gestion de projet de rénovation résidentielle",
      description:
        "Déroulement d'un projet avec un entrepreneur général : visite et estimation, soumission détaillée, contrat écrit avec échéancier, permis municipal, chantier coordonné, liste de déficiences, livraison et garantie.",
      url: SITE.url + "/processus",
      serviceType: "Gestion de projet de rénovation",
      areaServed: [
        "Ouest-de-l'Île",
        "Montréal",
        "Laval",
        "Rive-Sud",
        "Vaudreuil-Soulanges",
      ],
    }),
  ],
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Dilamco - Processus",
          heading:
            "Le déroulement d'un projet de rénovation avec un entrepreneur général",
          description:
            "Voici ce qui se passe réellement, dans l'ordre, entre le premier appel et la fin de la garantie. Huit étapes, chacune avec un livrable précis : un document signé, une autorisation obtenue ou une inspection passée. Rien n'avance tant que l'étape précédente n'est pas fermée.",
          actions: [
            {
              label: "Obtenir une estimation gratuite",
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
            "Soumission détaillée",
            "Contrat écrit",
            "Permis",
            "Inspection",
          ],
          image: {
            src: "/images/generated/services/service-renovation-project-03.webp",
            alt: "Chantier de rénovation résidentielle en cours d'exécution",
          },
          caption:
            "Estimation gratuite, retour sous 24 à 48 heures ouvrables. Licence RBQ 8306-0806-27.",
        },
      },
    },
    {
      id: "benefits",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "Ce que ce déroulement évite concrètement",
          intro:
            "Ces étapes ne servent pas à alourdir le projet. Chacune ferme une des causes classiques de dérapage sur un chantier résidentiel.",
          columns: "2",
          items: [
            {
              title: "Un prix qui ne bouge pas tout seul",
              description:
                "Le budget dérape quand les travaux n'ont jamais été détaillés au départ.",
              icon: "fileCheck",
              bullets: [
                "Portée, matériaux et exclusions écrits dans la soumission",
                "Avenant écrit et chiffré pour tout changement",
                "Aucun travail supplémentaire exécuté sans votre accord",
              ],
            },
            {
              title: "Un chantier qui ne traîne pas",
              description:
                "Les retards viennent surtout des métiers qui s'attendent les uns les autres.",
              icon: "clock",
              bullets: [
                "Séquence complète planifiée avant l'ouverture du chantier",
                "Corps de métier réservés à l'avance, avec dates",
                "Matériaux à long délai commandés dès la signature",
              ],
            },
            {
              title: "Des travaux conformes et autorisés",
              description:
                "Des travaux sans permis peuvent devoir être refaits, ou bloquer une vente.",
              icon: "clipboardCheck",
              bullets: [
                "Vérification des exigences de la ville ou de l'arrondissement",
                "Plans préparés et demande de permis déposée",
                "Conformité au Code de construction du Québec",
              ],
            },
            {
              title: "Un travail qui n'est pas à refaire",
              description:
                "La qualité finale dépend de ce qui est inspecté avant d'être recouvert.",
              icon: "shieldCheck",
              bullets: [
                "Inspection de chaque étape avant de fermer les murs",
                "Liste de déficiences corrigée avant le paiement final",
                "Garantie sur les travaux exécutés, détails au contrat",
              ],
            },
          ],
        },
      },
    },
    {
      id: "steps",
      frame: { surface: "muted" },
      content: {
        type: "process",
        variant: "split-cards",
        props: {
          heading: "Les huit étapes d'un projet",
          description:
            "La portée varie d'un projet à l'autre — une salle de bain n'exige pas la même chose qu'un agrandissement — mais l'ordre, lui, ne change pas.",
          steps: [
            {
              number: "1",
              title: "Visite et estimation gratuite",
              description:
                "Vous nous décrivez le projet et on revient sous 24 à 48 heures ouvrables pour fixer une visite. Sur place, on relève les dimensions, on regarde l'état de la plomberie, de l'électricité et de la structure, et on vous donne un ordre de grandeur réaliste. Cette étape ne coûte rien et ne vous engage à rien.",
            },
            {
              number: "2",
              title: "Soumission détaillée",
              description:
                "On rédige une soumission qui décrit les travaux poste par poste : démolition, structure, systèmes, revêtements, finition. Les matériaux, les quantités et surtout les exclusions y figurent. Une soumission d'une seule ligne avec un montant global n'est pas une soumission : c'est un pari.",
            },
            {
              number: "3",
              title: "Contrat écrit, échéancier et calendrier de paiements",
              description:
                "Une fois la soumission acceptée, elle devient un contrat. On y ajoute l'échéancier daté des travaux et le calendrier de paiements, lié à l'avancement réel plutôt qu'au calendrier. Vous savez ce que vous payez, quand, et contre quel travail livré.",
            },
            {
              number: "4",
              title: "Permis municipal et plans",
              description:
                "On vérifie ce que votre ville ou votre arrondissement exige pour vos travaux : permis de transformation, de construction, certificat d'autorisation. On prépare les plans requis, on dépose la demande et on suit le dossier. En copropriété, on obtient en plus l'autorisation du syndicat.",
            },
            {
              number: "5",
              title: "Préparation du chantier et protection",
              description:
                "Avant la première démolition : protection des planchers et des surfaces conservées, confinement des poussières, condamnation des accès, installation du conteneur à débris et branchement temporaire au besoin. C'est aussi à ce moment qu'on convient avec vous des heures de travail et de l'accès à la maison.",
            },
            {
              number: "6",
              title: "Séquence des corps de métier et inspections",
              description:
                "Démolition, structure, plomberie brute, électricité brute, ventilation, isolation et pare-vapeur, gypse, puis finition. Chaque métier entre après l'inspection de l'étape précédente — y compris les inspections municipales quand elles sont exigées. Rien n'est recouvert avant d'avoir été vérifié.",
            },
            {
              number: "7",
              title: "Finition et liste de déficiences",
              description:
                "Peinture, revêtements de plancher, armoires, quincaillerie, appareils et scellants. On fait ensuite le tour du chantier avec vous, on note tout ce qui n'est pas au niveau attendu et on dresse la liste de déficiences. Elle est corrigée avant le paiement final, pas après.",
            },
            {
              number: "8",
              title: "Livraison et garantie",
              description:
                "Nettoyage, remise des lieux, transmission des garanties de manufacturier et des documents de permis. Les travaux exécutés sont garantis : portée et durée sont inscrites au contrat. Si quelque chose bouge dans les mois suivants, vous rappelez le même entrepreneur.",
            },
          ],
          actions: [
            {
              label: "Obtenir une estimation gratuite",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos services de rénovation",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
        },
      },
    },
    {
      id: "documents",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Les documents que vous recevez",
          intro:
            "Un chantier bien tenu laisse une trace écrite. Voici ce que vous avez en main à chaque étape — ce sont aussi les documents à exiger de n'importe quel entrepreneur, pas seulement de nous.",
          items: [
            {
              title: "La soumission détaillée",
              description:
                "les travaux poste par poste, les matériaux prévus et ce qui n'est pas inclus.",
            },
            {
              title: "Le contrat écrit",
              description:
                "portée, prix, échéancier daté, calendrier de paiements et modalités de garantie.",
            },
            {
              title: "Les avenants",
              description:
                "chaque changement de portée est chiffré et accepté par écrit avant d'être exécuté.",
            },
            {
              title: "Le permis et les plans",
              description:
                "copie du permis délivré et des plans déposés, utiles à la revente de la propriété.",
            },
            {
              title: "La liste de déficiences",
              description:
                "établie avec vous à l'inspection finale et corrigée avant le paiement final.",
            },
            {
              title: "Les attestations",
              description:
                "licence RBQ, assurance responsabilité et couverture chantier, sur demande.",
            },
          ],
          actions: [
            {
              label: "Parler de votre projet",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "En savoir plus sur Dilamco",
              href: "/a-propos",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/process3.jpg",
            alt: "Plans et documents de chantier sur une table de travail",
          },
          cardTitle: "Tout est écrit",
          cardDescription:
            "Aucune décision structurante ne repose sur une entente verbale ou un courriel ambigu.",
        },
      },
    },
    {
      id: "inputs",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Ce qui accélère le premier échange",
          intro:
            "Vous n'avez pas besoin de plans ni de devis pour nous appeler. Quelques informations de base suffisent pour cadrer la discussion et vous donner un ordre de grandeur utile dès le premier retour.",
          badges: ["Adresse", "Type de travaux", "Portée", "Échéance"],
          cardTitle: "Utile dès le premier appel",
          items: [
            "L'adresse ou au moins la ville et le secteur du projet",
            "Le type de bâtiment : unifamiliale, plex, condo ou local commercial",
            "Les pièces visées et l'étendue souhaitée des travaux",
            "L'année approximative de construction, si vous la connaissez",
            "Des photos de l'état actuel et, si possible, des mesures sommaires",
            "Votre échéance et le budget que vous avez en tête, même approximatif",
          ],
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
        },
      },
    },
    {
      id: "resources",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Pages utiles pour approfondir",
          intro:
            "Selon l'étape où vous en êtes, ces pages détaillent les travaux, le territoire et les choix techniques.",
          columns: "3",
          items: [
            {
              title: "Rénovation de cuisine",
              description:
                "La pièce la plus dense en corps de métier : plomberie, électricité, ventilation et armoires.",
              href: "/services/renovation/cuisine",
              badges: ["Cuisine", "Clé en main"],
              ctaLabel: "Voir la cuisine",
            },
            {
              title: "Rénovation de salle de bain",
              description:
                "Plomberie, membrane d'étanchéité, céramique et ventilation : l'étanchéité avant tout.",
              href: "/services/renovation/salle-de-bain",
              badges: ["Étanchéité", "Céramique"],
              ctaLabel: "Voir la salle de bain",
            },
            {
              title: "Agrandissement de maison",
              description:
                "Le cas où le permis, les plans et la fondation allongent le plus l'échéancier.",
              href: "/services/renovation/agrandissement-de-maison",
              badges: ["Permis", "Structure"],
              ctaLabel: "Voir l'agrandissement",
            },
            {
              title: "Rénovation après sinistre",
              description:
                "Démolition contrôlée, assèchement, reconstruction et documentation pour l'assureur.",
              href: "/services/renovation/apres-sinistre",
              badges: ["Dégât d'eau", "Assurance"],
              ctaLabel: "Voir l'après-sinistre",
            },
            {
              title: "Zones desservies",
              description:
                "Les exigences de permis et les parcs immobiliers changent d'une ville à l'autre.",
              href: "/zones",
              badges: ["Territoire", "Permis"],
              ctaLabel: "Voir les zones",
            },
            {
              title: "À propos de Dilamco",
              description:
                "Licence, catégories, cautionnement, assurances et répondant : les faits vérifiables.",
              href: "/a-propos",
              badges: ["RBQ", "Assurances"],
              ctaLabel: "Voir à propos",
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
          heading: "FAQ — déroulement d'un projet",
          intro:
            "Les questions qui reviennent le plus souvent entre le premier appel et la signature du contrat.",
          items: [
            {
              q: "L'estimation est-elle vraiment gratuite ?",
              a: "Oui. La visite sur place et l'estimation initiale ne sont pas facturées et ne vous engagent à rien. Si le projet exige des plans d'architecte ou une expertise d'ingénieur, ces travaux-là sont distincts et vous êtes informé de leur coût avant qu'ils soient engagés.",
            },
            {
              q: "Combien de temps entre l'appel et le début des travaux ?",
              a: "Le retour se fait sous 24 à 48 heures ouvrables et la visite suit rapidement. Ce qui allonge ensuite le délai, c'est surtout le permis municipal et la disponibilité des corps de métier. Pour un projet sans permis, on parle généralement de quelques semaines ; pour un agrandissement, il faut prévoir plus de temps en amont.",
            },
            {
              q: "Qui s'occupe de la demande de permis ?",
              a: "Nous. On vérifie ce que votre ville ou votre arrondissement exige, on prépare les documents et les plans requis, on dépose la demande et on suit le dossier jusqu'à la délivrance. Le permis est émis au nom du propriétaire, mais vous n'avez pas à naviguer le processus vous-même.",
            },
            {
              q: "Comment les paiements sont-ils structurés ?",
              a: "Le calendrier de paiements est inscrit au contrat et rattaché à l'avancement réel des travaux, pas à des dates fixes. Un dépôt à la signature, puis des versements liés à des étapes atteintes et vérifiables. Le dernier versement n'est dû qu'une fois la liste de déficiences corrigée.",
            },
            {
              q: "Que se passe-t-il si on découvre un problème caché ?",
              a: "C'est fréquent en rénovation : moisissure derrière un mur, câblage non conforme, structure affaiblie. On arrête, on documente, on vous explique les options et on chiffre le correctif dans un avenant. Rien n'est exécuté avant que vous ayez accepté par écrit.",
            },
            {
              q: "Peut-on habiter la maison pendant les travaux ?",
              a: "Souvent oui, selon la portée. Pour une salle de bain ou un sous-sol, on isole la zone de travail et on protège les circulations. Pour une rénovation majeure qui touche la cuisine, la plomberie principale ou l'électricité, l'inconfort devient réel et on en discute franchement avant de signer.",
            },
            {
              q: "Travaillez-vous l'hiver ?",
              a: "Oui. Les travaux intérieurs se déroulent toute l'année. Ce qui se planifie autour de la saison, ce sont l'excavation, les fondations, la toiture et les revêtements extérieurs. Pour un agrandissement, la séquence est établie pour fermer l'enveloppe avant le gel.",
            },
            {
              q: "Qui est sur le chantier au quotidien ?",
              a: "Les corps de métier requis à l'étape en cours, sous notre coordination. Vous avez un seul interlocuteur chez Dilamco pour le suivi, les questions et les décisions. Vous n'engagez ni ne payez les sous-traitants directement.",
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
          heading: "On commence par une visite et une estimation",
          intro:
            "Décrivez-nous le projet. On fixe une visite, on relève ce qu'il y a à relever, et vous repartez avec une soumission détaillée plutôt qu'un chiffre lancé au téléphone.",
          actions: [
            {
              label: "Obtenir une estimation gratuite",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos services",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          note: "Licence RBQ 8306-0806-27 • Ouest-de-l'Île, Montréal, Laval, Rive-Sud et Vaudreuil-Soulanges",
        },
      },
    },
  ],
};
