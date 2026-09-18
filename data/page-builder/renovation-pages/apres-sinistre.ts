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
          heading: "Reconstruire après un dégât d'eau ou un feu",
          description:
            "Nous prenons le relais une fois les lieux asséchés : portée écrite, devis par poste, permis et reconstruction.",
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
            src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
            alt: "Sous-sol reconstruit après un dégât d'eau",
          },
          caption: "Pierrefonds-Roxboro · Ouest-de-l'Île",
        },
      },
    },
    {
      id: "sinistres",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "Les sinistres que nous reconstruisons",
          intro:
            "Le pompage, l'assèchement et la décontamination reviennent à des firmes spécialisées. Nous reconstruisons ensuite.",
          columns: "2",
          items: [
            {
              title: "Dégât d'eau et inondation",
              description: "Refoulement d'égout, tuyau éclaté, infiltration, crue.",
              icon: "droplets",
              bullets: [
                "Murs et planchers ouverts pour constater l'étendue réelle",
                "Gypse, isolant et sous-plancher atteints remplacés",
                "Charpente et solives vérifiées avant de refermer",
              ],
            },
            {
              title: "Feu et fumée",
              description: "Dommages directs, suie, odeurs dans les matériaux poreux.",
              icon: "hardHat",
              bullets: [
                "Démolition des sections atteintes",
                "Structure et enveloppe reprises selon les plans",
                "Pièces reconstruites du colombage à la peinture",
              ],
            },
            {
              title: "Moisissures",
              description: "Souvent la suite d'une fuite lente ou d'une ventilation absente.",
              icon: "shieldCheck",
              bullets: [
                "Reconstruction après la décontamination spécialisée",
                "Cause corrigée : ventilation, étanchéité, drainage",
                "Assemblages adaptés aux zones humides",
              ],
            },
            {
              title: "Sous-sol inondé",
              description: "La situation la plus fréquente dans l'Ouest-de-l'Île.",
              icon: "layers",
              bullets: [
                "Finis et isolant retirés jusqu'à hauteur sûre",
                "Drain, pompe de puisard et fissures vérifiés",
                "Permis d'aménagement si le sous-sol est refini",
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
          heading: "Cinq étapes",
          steps: [
            {
              number: "1",
              title: "Évaluation sur place",
              description:
                "Visite après l'assèchement, ouvertures ciblées pour voir derrière les finis.",
            },
            {
              number: "2",
              title: "Portée et devis",
              description:
                "Description pièce par pièce, devis par poste et photos, pour votre assureur.",
            },
            {
              number: "3",
              title: "Contrat et permis",
              description:
                "Signature avec échéancier, puis demande de permis si la structure est touchée.",
            },
            {
              number: "4",
              title: "Démolition",
              description:
                "Retrait des matériaux atteints. Dommages cachés documentés avant de poursuivre.",
            },
            {
              number: "5",
              title: "Reconstruction",
              description:
                "Mécanique, inspections, gypse, peinture, planchers, puis inspection finale avec vous.",
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
            "Nous ne remplaçons ni votre assureur ni votre expert. Nous fournissons la matière technique du dossier.",
          items: [
            {
              title: "Une portée écrite, pièce par pièce",
              description: "Dommages et travaux décrits, plutôt qu'un montant global.",
            },
            {
              title: "Un devis par poste",
              description:
                "Démolition, mécanique, matériaux, finition chiffrés séparément.",
            },
            {
              title: "Une documentation photo",
              description:
                "État avant travaux, ouvertures de constat et dommages cachés.",
            },
            {
              title: "Sinistre et améliorations séparés",
              description:
                "La part hors sinistre est isolée dans le devis, ligne par ligne.",
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
            src: "/images/generated/renovation/renovation-plancher-approach-01.webp",
            alt: "Constat des dommages avant la reconstruction d'un plancher",
          },
          cardTitle: "Pourquoi la licence compte ici",
          cardDescription:
            "Licence RBQ 8306-0806-27 valide depuis 2004, cautionnement, responsabilité civile et assurance chantier en vigueur.",
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
              a: "Non. Le pompage, l'assèchement et la décontamination sont des interventions d'urgence confiées à des firmes spécialisées, souvent mandatées par l'assureur. Nous prenons le relais une fois les lieux asséchés.",
            },
            {
              q: "Travaillez-vous avec mon assurance ?",
              a: "Nous fournissons la portée écrite, le devis par poste et les photos dont votre réclamation a besoin, et nous répondons aux questions techniques de l'expert. Vous demeurez l'assuré et l'interlocuteur de votre assureur.",
            },
            {
              q: "Puis-je choisir mon entrepreneur ?",
              a: "En règle générale, le propriétaire choisit qui exécute les travaux, même si l'assureur propose des entreprises de son réseau. Vérifiez les modalités de votre police. Nous fournissons les documents pour que notre devis soit comparé.",
            },
            {
              q: "Et si vous découvrez d'autres dommages ?",
              a: "C'est fréquent après un dégât d'eau. Nous documentons les dommages cachés avec photos, vous soumettons le coût par écrit et vous laissons déposer un complément de réclamation. Rien n'est refermé sur un problème connu.",
            },
            {
              q: "Faut-il un permis pour reconstruire ?",
              a: "Souvent. Dès que la reconstruction touche la structure, déplace la plomberie ou refinit un sous-sol en espace habitable, un permis est requis. Nous validons avec votre ville et déposons la demande.",
            },
            {
              q: "Les travaux sont-ils garantis ?",
              a: "Oui, avec la portée et la durée inscrites au contrat. Licence RBQ 8306-0806-27 valide sans restriction depuis 2004, cautionnement en vigueur, aucune réclamation au dossier.",
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
            "Nous évaluons les dommages, montons la portée et le devis, puis nous reconstruisons sous un seul contrat.",
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
