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
          eyebrow: "Finition de sous-sol",
          heading: "Régler l'humidité avant de poser un seul panneau",
          description:
            "Diagnostic, drainage, isolation, permis, issue de secours et finition, sous un seul contrat.",
          actions: [
            {
              label: "Soumission gratuite",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir les aménagements",
              href: "/espaces/sous-sol",
              variant: "ghost",
            },
          ],
          badges: ["Permis obligatoire", "Humidité et drainage", "Prix ferme"],
          image: {
            src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
            alt: "Sous-sol fini et aménagé par un entrepreneur général",
          },
          caption: "Ouest-de-l'Île, Montréal, Laval, Rive-Sud",
        },
      },
    },
    {
      id: "included",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "Ce que le mandat comprend",
          intro: "La portée exacte est écrite dans la soumission.",
          columns: "2",
          items: [
            {
              title: "Diagnostic, eau et permis",
              description: "L'étape qui conditionne tout le reste",
              icon: "droplets",
              bullets: [
                "Fondation, dalle et traces d'infiltration inspectées",
                "Drainage, pente du terrain et pompe de puisard vérifiés",
                "Fissures réparées, permis d'aménagement déposé",
              ],
            },
            {
              title: "Isolation et charpente",
              description: "Le mur qui décide de l'humidité",
              icon: "layers",
              bullets: [
                "Isolant continu contre le béton, vapeur gérée correctement",
                "Colombages montés en retrait, sans contact avec la dalle",
                "Solives de rive et pourtour de dalle isolés",
              ],
            },
            {
              title: "Électricité, plomberie, issues",
              description: "Inspectés avant la fermeture des murs",
              icon: "wrench",
              bullets: [
                "Circuits, éclairage, détecteurs de fumée et de monoxyde",
                "Fenêtre d'égress ou porte extérieure pour une chambre",
                "Salle de bain : drain de dalle ou pompe de relevage",
              ],
            },
            {
              title: "Planchers, plafond, finition",
              description: "La partie visible, sur une base saine",
              icon: "package2",
              bullets: [
                "Revêtement adapté au sous-sol, sur sous-plancher isolant",
                "Plafond suspendu ou gypse selon l'accès aux services",
                "Peinture, portes, moulures, escalier et rangements",
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
          heading: "Le chantier, étape par étape",
          steps: [
            {
              number: "1",
              title: "Visite et diagnostic",
              description:
                "Fondations, dalle, drainage, pompe de puisard et hauteur libre inspectés.",
            },
            {
              number: "2",
              title: "Plan et soumission",
              description:
                "Plan d'aménagement, portée écrite et estimation détaillée.",
            },
            {
              number: "3",
              title: "Contrat et permis",
              description:
                "Échéancier signé, demande de permis déposée avec les plans exigés.",
            },
            {
              number: "4",
              title: "Travaux correctifs",
              description:
                "Fissures, drainage, pompe. On ne finit pas par-dessus une infiltration.",
            },
            {
              number: "5",
              title: "Structure, mécanique, finition",
              description:
                "Isolation, égress, électricité, plomberie, inspections, puis gypse et finis.",
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
            "Transformer un sous-sol brut en espace habitable exige un permis. Nous déposons la demande.",
          items: [
            {
              title: "Permis d'aménagement",
              description: "Requis dès qu'on ajoute des pièces habitables.",
            },
            {
              title: "Fenêtre d'égress",
              description: "Obligatoire pour toute chambre : fenêtre accessible ou porte.",
            },
            {
              title: "Hauteur libre",
              description: "Un minimum est exigé pour reconnaître l'espace habitable.",
            },
            {
              title: "Électricité et avertisseurs",
              description: "Circuits inspectés, avertisseurs de fumée et de monoxyde.",
            },
            {
              title: "Logement accessoire",
              description: "Zonage, entrée distincte, coupe-feu : une portée différente.",
            },
          ],
          actions: [
            {
              label: "Rénovation clé en main",
              href: "/services/renovation",
              variant: "ghost",
            },
            {
              label: "Zones desservies",
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
            "Un sous-sol fait avec permis compte comme superficie habitable et ne devient pas un litige avec l'assureur.",
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
              q: "Combien coûte la finition d'un sous-sol ?",
              a: "Un aménagement de base démarre autour de 25 000 $. Un sous-sol complet avec chambre et salle de bain se situe souvent entre 40 000 $ et 80 000 $. Les travaux correctifs se chiffrent à part.",
            },
            {
              q: "Faut-il un permis pour finir un sous-sol ?",
              a: "Oui. Aménager un sous-sol en espace habitable exige un permis de transformation à Montréal et dans la plupart des municipalités, avec plan à l'appui. Nous déposons la demande pour vous.",
            },
            {
              q: "Mon sous-sol prend l'eau. Peut-on le finir quand même ?",
              a: "Pas avant d'avoir réglé l'entrée d'eau : fissure, drain français obstrué, pente de terrain ou pompe de puisard. Finir par-dessus une infiltration garantit d'avoir à tout refaire.",
            },
            {
              q: "Puis-je aménager une chambre au sous-sol ?",
              a: "Oui, à condition d'avoir une issue de secours : fenêtre ouvrante accessible ou porte donnant dehors. Cela demande souvent de découper le mur de fondation et d'installer une margelle.",
            },
            {
              q: "Peut-on ajouter une salle de bain ?",
              a: "Oui. Selon la position du drain principal, on casse la dalle pour raccorder par gravité ou on installe une pompe de relevage. S'ajoutent la ventilation et l'inspection avant fermeture.",
            },
            {
              q: "Les travaux sont-ils garantis ?",
              a: "Oui, avec la portée et la durée inscrites au contrat. Licence RBQ 8306-0806-27 valide sans restriction depuis 2004, cautionnement de 40 000 $, aucune réclamation au dossier. Responsabilité civile et assurance chantier en vigueur.",
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
          heading: "Faites évaluer votre sous-sol",
          intro:
            "Estimation gratuite, permis inclus. Premier retour sous 24 à 48 heures ouvrables.",
          actions: [
            {
              label: "Soumission gratuite",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Zones desservies",
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
