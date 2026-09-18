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
          heading: "Régler l'eau avant de poser un seul panneau",
          description:
            "Diagnostic, drainage, isolation, issue de secours et finition menés sous un contrat unique.",
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
          badges: ["Permis obligatoire", "Humidité vérifiée"],
          image: {
            src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
            alt: "Sous-sol fini et aménagé par un entrepreneur général",
          },
          imageSide: "left",
          caption: "Sous-sols finis, Montréal et Rive-Sud",
        },
      },
    },
    {
      id: "included",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "Ce que couvre le mandat sous-sol",
          columns: "2",
          items: [
            {
              title: "Eau et fondation",
              description: "L'étape qui conditionne tout le reste",
              icon: "droplets",
              bullets: [
                "Dalle, murs et traces d'infiltration examinés",
                "Drain, pente de terrain et pompe vérifiés",
                "Fissures réparées avant d'isoler",
              ],
            },
            {
              title: "Isolation et divisions",
              description: "Le mur qui gère la vapeur",
              icon: "layers",
              bullets: [
                "Isolant continu appliqué contre le béton",
                "Colombages montés en retrait de la dalle",
                "Solives de rive et pourtour traités",
              ],
            },
            {
              title: "Issue de secours",
              description: "La condition pour une chambre",
              icon: "doorOpen",
              bullets: [
                "Fenêtre ouvrante ou porte donnant dehors",
                "Découpe de fondation et margelle",
                "Avertisseurs de fumée et de monoxyde",
              ],
            },
            {
              title: "Finition et rangement",
              description: "La partie visible, sur une base saine",
              icon: "package2",
              bullets: [
                "Revêtement toléré par une dalle de béton",
                "Plafond suspendu ou gypse selon l'accès",
                "Escalier, portes, rangements intégrés",
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
          heading: "La séquence d'un sous-sol",
          steps: [
            {
              number: "1",
              title: "Diagnostic d'humidité",
              description:
                "Dalle, fissures, pompe de puisard et hauteur libre mesurées.",
            },
            {
              number: "2",
              title: "Travaux correctifs",
              description:
                "Fissures scellées, drainage repris. On ne finit pas sur une fuite.",
            },
            {
              number: "3",
              title: "Plan et permis",
              description:
                "Plan d'aménagement dessiné, demande déposée à votre ville.",
            },
            {
              number: "4",
              title: "Isolation et divisions",
              description:
                "Isolant, colombages, égress, circuits et plomberie inspectés.",
            },
            {
              number: "5",
              title: "Finition",
              description:
                "Gypse, plafond, plancher, escalier, peinture, puis livraison.",
            },
          ],
        },
      },
    },
    {
      id: "prix",
      content: {
        type: "grid",
        variant: "price-tiles",
        props: {
          heading: "Ce que coûte un sous-sol",
          tiles: [
            {
              title: "Aire ouverte",
              price: "à partir de 25 000 $",
              hint: "une grande pièce, sans plomberie",
              includes: [
                "Isolation et pare-vapeur",
                "Colombages, gypse et peinture",
                "Éclairage et circuits",
              ],
            },
            {
              title: "Sous-sol complet",
              price: "40 000 $ à 80 000 $",
              hint: "chambre, salle de bain, rangement",
              featured: true,
              includes: [
                "Plan et permis d'aménagement",
                "Fenêtre d'issue de secours",
                "Salle de bain raccordée",
                "Plancher, plafond, portes",
              ],
            },
          ],
          note: "Prix indicatifs. Les travaux correctifs de drainage ou de fondation se chiffrent séparément.",
          action: {
            label: "Soumission gratuite",
            href: "/contact",
            variant: "primary",
          },
        },
      },
    },
    {
      id: "galerie",
      content: {
        type: "grid",
        variant: "bento",
        props: {
          heading: "Des sous-sols déjà finis",
          tiles: [
            {
              kind: "image",
              span: "wide",
              image: {
                src: "/images/generated/spaces/space-sous-sol-cinema-01.webp",
                alt: "Salle de cinéma aménagée dans un sous-sol fini",
              },
              caption: "Salle de cinéma",
            },
            {
              kind: "image",
              image: {
                src: "/images/generated/spaces/space-sous-sol-bar-01.webp",
                alt: "Bar de sous-sol avec comptoir et rangements",
              },
              caption: "Bar et comptoir",
            },
            {
              kind: "stat",
              value: "1 permis",
              label: "Exigé dès qu'une pièce habitable est ajoutée",
            },
            {
              kind: "text",
              title: "Voir les aménagements",
              description:
                "Cinéma, bar, cellier, bureau : ce qu'un sous-sol peut devenir.",
              href: "/espaces/sous-sol",
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
          heading: "Questions fréquentes",
          items: [
            {
              q: "Mon sous-sol prend l'eau, peut-on le finir quand même ?",
              a: "Pas avant d'avoir coupé l'entrée d'eau : fissure, drain français bouché, terrain qui verse vers la maison ou pompe défaillante. Finir par-dessus une infiltration oblige à tout recommencer.",
            },
            {
              q: "Faut-il un permis pour finir un sous-sol ?",
              a: "Oui. Transformer un sous-sol brut en espace habitable demande un permis dans la plupart des municipalités, avec plan à l'appui. Nous montons le dossier et déposons la demande.",
            },
            {
              q: "Puis-je aménager une chambre au sous-sol ?",
              a: "Seulement avec une issue de secours : fenêtre ouvrante atteignable ou porte vers l'extérieur. Cela suppose souvent de découper le béton de fondation et d'installer une margelle.",
            },
            {
              q: "Peut-on ajouter une salle de bain au sous-sol ?",
              a: "Oui. Selon la profondeur du drain principal, on casse la dalle pour raccorder par gravité ou on pose une pompe de relevage. La ventilation suit, avec inspection.",
            },
            {
              q: "Et si la hauteur du plafond est juste ?",
              a: "On gagne quelques centimètres en suspendant peu, en dégageant les conduits et en choisissant un plancher mince. Nous mesurons la hauteur libre au relevé et vous donnons le verdict.",
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
            "On commence par l'humidité et la hauteur libre, puis on chiffre l'aménagement.",
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
