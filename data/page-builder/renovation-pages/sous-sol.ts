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
          heading: "Finition de sous-sol, du diagnostic d'humidité à la peinture",
          description:
            "On vérifie l'humidité, puis on isole, on divise les pièces et on finit, sous un seul contrat.",
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
          heading: "Ce qui est inclus dans un sous-sol fini",
          columns: "2",
          items: [
            {
              title: "Humidité et fondation",
              icon: "droplets",
              bullets: [
                "On examine la dalle, les murs et les traces d'eau",
                "On vérifie le drain, la pente du terrain et la pompe",
                "On répare les fissures avant d'isoler",
              ],
            },
            {
              title: "Isolation et murs",
              icon: "layers",
              bullets: [
                "On applique un isolant continu contre le béton",
                "On monte les murs légèrement en retrait de la dalle",
                "On isole aussi le pourtour du plancher du dessus",
              ],
            },
            {
              title: "Issue de secours",
              icon: "doorOpen",
              bullets: [
                "Fenêtre qui s'ouvre ou porte donnant dehors",
                "On découpe la fondation et on pose une margelle",
                "On installe les avertisseurs de fumée et de monoxyde",
              ],
            },
            {
              title: "Finition et rangement",
              icon: "package2",
              bullets: [
                "On choisit un plancher qui supporte le béton",
                "Plafond suspendu ou gypse, selon l'accès aux tuyaux",
                "On refait l'escalier, les portes et les rangements",
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
          heading: "Les étapes d'une finition de sous-sol",
          steps: [
            {
              number: "1",
              title: "Diagnostic d'humidité",
              description:
                "On cherche les fissures et on mesure la hauteur du plafond.",
            },
            {
              number: "2",
              title: "Réparations",
              description:
                "On scelle les fissures et on corrige le drainage. On ne finit jamais sur une fuite.",
            },
            {
              number: "3",
              title: "Plan et permis",
              description:
                "On dessine le plan des pièces et on dépose la demande à votre ville.",
            },
            {
              number: "4",
              title: "Isolation et divisions",
              description:
                "On isole, on monte les murs, on passe les fils, l'inspecteur passe.",
            },
            {
              number: "5",
              title: "Finition",
              description:
                "On pose le gypse, le plafond et le plancher, puis on peint.",
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
          heading: "Combien coûte un sous-sol fini",
          tiles: [
            {
              title: "Une grande pièce",
              price: "à partir de 25 000 $",
              hint: "sans chambre ni salle de bain",
              includes: [
                "Isolation et pare-vapeur",
                "Murs, gypse et peinture",
                "Éclairage et prises de courant",
              ],
            },
            {
              title: "Sous-sol complet",
              price: "40 000 $ à 80 000 $",
              hint: "chambre, salle de bain et rangement",
              featured: true,
              includes: [
                "Plan et permis d'aménagement",
                "Fenêtre d'issue de secours",
                "Salle de bain raccordée au drain",
                "Plancher, plafond et portes",
              ],
            },
          ],
          note: "Ce sont des ordres de grandeur. Les réparations de drainage ou de fondation sont chiffrées à part.",
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
          heading: "Des sous-sols qu'on a finis",
          tiles: [
            {
              kind: "image",
              span: "wide",
              image: {
                src: "/images/generated/spaces/space-sous-sol-cinema-01.webp",
                alt: "Salle de cinéma aménagée dans un sous-sol fini",
              },
              caption: "Salle de cinéma maison",
            },
            {
              kind: "image",
              image: {
                src: "/images/generated/spaces/space-sous-sol-bar-01.webp",
                alt: "Bar de sous-sol avec comptoir et rangements",
              },
              caption: "Bar avec comptoir et rangements",
            },
            {
              kind: "stat",
              value: "1 permis",
              label: "Obligatoire dès qu'on ajoute une pièce habitable",
            },
            {
              kind: "text",
              title: "Voir les aménagements",
              description:
                "Cinéma, bar, cellier ou bureau : ce qu'un sous-sol peut devenir.",
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
              a: "Pas avant d'avoir arrêté l'eau : une fissure, un drain bouché, un terrain qui verse vers la maison ou une pompe qui ne fonctionne plus. Finir par-dessus, c'est tout recommencer.",
            },
            {
              q: "Faut-il un permis pour finir un sous-sol ?",
              a: "Oui. Transformer un sous-sol brut en espace habitable demande un permis dans la plupart des villes, avec un plan à l'appui. On prépare le dossier et on dépose la demande.",
            },
            {
              q: "Puis-je aménager une chambre au sous-sol ?",
              a: "Seulement avec une sortie de secours : une fenêtre qui s'ouvre et qu'on peut atteindre, ou une porte vers l'extérieur. Il faut souvent découper le béton et poser une margelle.",
            },
            {
              q: "Peut-on ajouter une salle de bain au sous-sol ?",
              a: "Oui. Selon la profondeur du drain principal, on casse la dalle pour raccorder par gravité, ou on installe une pompe. La ventilation suit, avec une inspection.",
            },
            {
              q: "Et si mon plafond est trop bas ?",
              a: "On gagne quelques centimètres en déplaçant les conduits et en choisissant un plancher mince. On mesure la hauteur à la visite et on vous donne l'heure juste.",
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
            "On commence par vérifier l'humidité et la hauteur du plafond, puis on chiffre les travaux.",
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
        },
      },
    },
  ],
};
