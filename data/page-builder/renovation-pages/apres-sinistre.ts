import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationApresSinistrePage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Rénovation après sinistre à Pierrefonds et l'Ouest-de-l'Île",
    description:
      "Reconstruction après dégât d'eau, feu, fumée ou moisissures : portée documentée pour l'assureur, permis et travaux. Entrepreneur général RBQ.",
    path: "/services/renovation/apres-sinistre",
    ogAlt: "Reconstruction après sinistre par un entrepreneur général",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Rénovation", url: SITE.url + "/services/renovation" },
    {
      name: "Rénovation après sinistre",
      url: SITE.url + "/services/renovation/apres-sinistre",
    },
  ],
  service: {
    name: "Rénovation après sinistre",
    description:
      "Reconstruction après dégât d'eau, feu, fumée ou moisissures par un entrepreneur général : évaluation des dommages, portée et devis détaillés pour la réclamation d'assurance, permis, coordination des corps de métier et remise en état.",
    url: SITE.url + "/services/renovation/apres-sinistre",
    serviceType: "Reconstruction après sinistre",
    areaServed: [
      "Pierrefonds-Roxboro",
      "Ouest-de-l'Île",
      "Montréal",
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
          eyebrow: "Rénovation après sinistre",
          heading: "Remettre la maison en état après l'eau ou le feu",
          description:
            "Nous entrons une fois les lieux asséchés : constat, portée écrite, devis par poste et reconstruction.",
          actions: [
            {
              label: "Demander une évaluation",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir le sous-sol",
              href: "/services/renovation/sous-sol",
              variant: "ghost",
            },
          ],
          badges: ["Dossier d'assurance", "Ouest-de-l'Île"],
          image: {
            src: "/images/generated/services/service-renovation-project-02.webp",
            alt: "Pièce reconstruite après un dégât d'eau",
          },
          imageSide: "left",
          caption: "Pierrefonds-Roxboro et Ouest-de-l'Île",
        },
      },
    },
    {
      id: "sinistres",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "Ce que couvre le mandat de reconstruction",
          intro:
            "Le pompage et la décontamination restent aux firmes d'urgence. Nous rebâtissons ensuite.",
          columns: "2",
          items: [
            {
              title: "Dégât d'eau",
              description: "Refoulement, tuyau éclaté, crue",
              icon: "droplets",
              bullets: [
                "Murs ouverts pour mesurer l'étendue réelle",
                "Gypse, isolant et support remplacés",
                "Solives contrôlées avant de refermer",
              ],
            },
            {
              title: "Feu et fumée",
              description: "Suie et odeurs dans les matériaux poreux",
              icon: "hardHat",
              bullets: [
                "Sections atteintes démolies au complet",
                "Structure et enveloppe reprises aux plans",
                "Pièces rebâties du colombage à la peinture",
              ],
            },
            {
              title: "Moisissures",
              description: "Suite d'une fuite lente ou d'un air stagnant",
              icon: "shieldCheck",
              bullets: [
                "Reconstruction après décontamination spécialisée",
                "Cause corrigée : ventilation, étanchéité, drain",
                "Assemblages choisis pour les zones humides",
              ],
            },
            {
              title: "Sous-sol inondé",
              description: "Le cas le plus fréquent près des berges",
              icon: "layers",
              bullets: [
                "Finis et isolant retirés jusqu'à hauteur saine",
                "Drain, pompe et fissures réexaminés",
                "Permis demandé si le sous-sol est refini",
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
          heading: "La séquence après un sinistre",
          steps: [
            {
              number: "1",
              title: "Constat sur place",
              description:
                "Visite après l'assèchement, ouvertures ciblées derrière les finis.",
            },
            {
              number: "2",
              title: "Portée et devis",
              description:
                "Description pièce par pièce, prix par poste, photos à l'appui.",
            },
            {
              number: "3",
              title: "Contrat et permis",
              description:
                "Signature, puis demande déposée si la structure est touchée.",
            },
            {
              number: "4",
              title: "Démolition sélective",
              description:
                "Matériaux atteints sortis, dommages cachés notés au dossier.",
            },
            {
              number: "5",
              title: "Reconstruction",
              description:
                "Mécanique, inspections, gypse, peinture, planchers, remise des clés.",
            },
          ],
        },
      },
    },
    {
      id: "assurance",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Ce que nous apportons à votre réclamation",
          intro:
            "Nous ne remplaçons ni votre assureur ni son expert. Nous fournissons la matière technique.",
          items: [
            {
              title: "Une portée pièce par pièce",
              description: "chaque dommage décrit, plutôt qu'un montant global.",
            },
            {
              title: "Un devis par poste",
              description:
                "démolition, mécanique, matériaux et finition chiffrés à part.",
            },
            {
              title: "Une documentation photo",
              description: "état avant travaux, ouvertures de constat, dommages cachés.",
            },
            {
              title: "Les améliorations isolées",
              description: "ce qui sort du sinistre apparaît sur ses propres lignes.",
            },
          ],
          actions: [
            {
              label: "Rénovation clé en main",
              href: "/services/renovation",
              variant: "ghost",
            },
            {
              label: "Demander une évaluation",
              href: "/contact",
              variant: "primary",
            },
          ],
          image: {
            src: "/images/generated/services/service-renovation-project-03.webp",
            alt: "Constat des dommages avant la reconstruction d'une pièce",
          },
          cardTitle: "Un interlocuteur unique",
          cardDescription:
            "Le même entrepreneur signe le devis, coordonne les métiers et répond aux questions techniques de l'expert.",
        },
      },
    },
    {
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "Questions fréquentes",
          items: [
            {
              q: "Faites-vous le pompage et l'assèchement ?",
              a: "Non. L'urgence, le pompage et la décontamination reviennent à des firmes spécialisées, souvent mandatées par l'assureur. Nous prenons la suite quand les lieux sont secs et mesurés.",
            },
            {
              q: "Travaillez-vous avec mon assureur ?",
              a: "Nous remettons la portée écrite, le devis par poste et les photos dont la réclamation a besoin, et répondons à l'expert. Vous restez l'assuré et l'interlocuteur au dossier.",
            },
            {
              q: "Puis-je choisir mon entrepreneur après un sinistre ?",
              a: "En règle générale oui, même si l'assureur suggère des entreprises de son réseau. Vérifiez les modalités de votre police. Nous fournissons les documents pour que notre devis soit comparé.",
            },
            {
              q: "Et si vous découvrez d'autres dommages ?",
              a: "C'est courant derrière un mur inondé. Nous photographions, chiffrons par écrit et vous laissons déposer un complément de réclamation avant de continuer. Rien n'est refermé sur un problème connu.",
            },
            {
              q: "Faut-il un permis pour reconstruire ?",
              a: "Souvent. Dès que la reconstruction touche la structure, déplace la plomberie ou refait un sous-sol habitable, la ville l'exige. Nous validons le cas et déposons la demande.",
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
          heading: "Un sinistre à reconstruire ?",
          intro:
            "Nous constatons les dommages, montons le devis, puis rebâtissons sous un seul contrat.",
          actions: [
            {
              label: "Demander une évaluation",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir les zones desservies",
              href: "/zones",
              variant: "ghost",
            },
          ],
          note: "Licence RBQ 8306-0806-27 · Pierrefonds-Roxboro et le Grand Montréal",
        },
      },
    },
  ],
};
