import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationSalleDeBainPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Rénovation de salle de bain à Montréal — clé en main",
    description:
      "Rénovation de salle de bain complète : étanchéité, membrane, ventilation, plomberie, tuilage et vanité. Entrepreneur général licencié RBQ.",
    path: "/services/renovation/salle-de-bain",
    ogAlt: "Rénovation de salle de bain par un entrepreneur général",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Rénovation", url: SITE.url + "/services/renovation" },
    {
      name: "Rénovation salle de bain",
      url: SITE.url + "/services/renovation/salle-de-bain",
    },
  ],
  service: {
    name: "Rénovation salle de bain",
    description:
      "Rénovation de salle de bain par un entrepreneur général : permis, plomberie, ventilation, membrane d'étanchéité, tuilage, vanité sur mesure et finition.",
    url: SITE.url + "/services/renovation/salle-de-bain",
    serviceType: "Rénovation de salle de bain",
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
          eyebrow: "Rénovation de salle de bain",
          heading: "Une salle de bain étanche avant d'être belle",
          description:
            "Drains, ventilation, membrane et tuilage repris dans l'ordre, avec inspection avant la fermeture des murs.",
          actions: [
            {
              label: "Soumission gratuite",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos réalisations",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Membrane continue", "Plomberie inspectée"],
          image: {
            src: "/images/generated/renovation/renovation-bath-hero-01.webp",
            alt: "Salle de bain rénovée par un entrepreneur général",
          },
          imageSide: "left",
          caption: "Salles de bain, Ouest-de-l'Île et Laval",
        },
      },
    },
    {
      id: "included",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "Ce qui est compris dans le mandat",
          columns: "2",
          items: [
            {
              title: "Mise à nu",
              description: "On regarde l'état réel du support",
              icon: "hammer",
              bullets: [
                "Douche, vanité et revêtements retirés",
                "Solives et contreplaqué inspectés",
                "Sous-plancher corrigé avant la pose",
              ],
            },
            {
              title: "Drains et ventilation",
              description: "Les points qu'un inspecteur vérifie",
              icon: "droplets",
              bullets: [
                "Pente de drain et alimentation reprises",
                "Ventilateur sorti dehors, pas dans l'entretoit",
                "Valve antibrûlure installée",
              ],
            },
            {
              title: "Membrane et céramique",
              description: "L'étape invisible qui décide de la durée",
              icon: "shieldCheck",
              bullets: [
                "Panneau hydrofuge sur les surfaces mouillées",
                "Membrane remontée aux murs, liée au drain",
                "Pente validée avant le tuilage",
              ],
            },
            {
              title: "Vanité et accessoires",
              description: "La partie visible, sur une base saine",
              icon: "bath",
              bullets: [
                "Vanité venue de notre usine partenaire",
                "Robinetterie, miroir, éclairage",
                "Toilette, porte de douche, moulures",
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
          heading: "La séquence d'une salle de bain",
          steps: [
            {
              number: "1",
              title: "Relevé",
              description:
                "Ventilation, plomberie et traces d'infiltration examinées sur place.",
            },
            {
              number: "2",
              title: "Démolition et constat",
              description:
                "Un sous-plancher atteint est photographié, puis chiffré avec vous.",
            },
            {
              number: "3",
              title: "Mécanique et inspection",
              description:
                "Drains, circuits et extraction posés, contrôlés avant de fermer.",
            },
            {
              number: "4",
              title: "Étanchéité et tuilage",
              description:
                "Panneau, membrane, pente, puis céramique du sol aux murs.",
            },
            {
              number: "5",
              title: "Vanité et livraison",
              description:
                "Vanité, robinetterie, porte de douche, ajustements finaux.",
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
          heading: "Ce que coûte une salle de bain",
          tiles: [
            {
              title: "Salle d'eau",
              price: "à partir de 10 000 $",
              hint: "toilette et lavabo, sans douche",
              includes: [
                "Démolition et plomberie au même endroit",
                "Céramique au sol",
                "Vanité, toilette, éclairage",
              ],
            },
            {
              title: "Salle de bain complète",
              price: "15 000 $ à 35 000 $",
              hint: "douche, bain, vanité",
              featured: true,
              includes: [
                "Membrane d'étanchéité continue",
                "Drains et ventilation repris",
                "Céramique murale et au sol",
                "Vanité, comptoir, robinetterie",
              ],
            },
            {
              title: "Douche de plain-pied",
              price: "vers le haut de la fourchette",
              hint: "dalle entaillée, drain linéaire",
              includes: [
                "Sol abaissé pour un seuil nul",
                "Drain linéaire et pente calculée",
                "Verre trempé sur mesure",
              ],
            },
          ],
          note: "Prix indicatifs. Le montant ferme dépend de la plomberie déplacée et du format de céramique retenu.",
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
          heading: "Des salles de bain déjà livrées",
          tiles: [
            {
              kind: "image",
              span: "wide",
              image: {
                src: "/images/realisations/salle-de-bain-douche-italienne-verre-01.webp",
                alt: "Douche de plain-pied avec paroi de verre",
              },
              caption: "Douche de plain-pied",
            },
            {
              kind: "image",
              image: {
                src: "/images/realisations/salle-de-bain-vanite-miroir-del-quartz-01.webp",
                alt: "Vanité avec comptoir de quartz et miroir rétroéclairé",
              },
              caption: "Vanité et miroir rétroéclairé",
            },
            {
              kind: "stat",
              value: "2 étapes",
              label: "Inspection avant fermeture, puis pente vérifiée",
            },
            {
              kind: "text",
              title: "Voir d'autres salles de bain",
              description:
                "Douches, vanités et finis photographiés après la livraison.",
              href: "/espaces/salle-de-bain",
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
              q: "Qu'est-ce qu'une membrane d'étanchéité ?",
              a: "Une couche continue posée sous la céramique, remontée sur les murs de la douche et raccordée au drain. Elle bloque l'eau avant qu'elle n'atteigne le bois de la structure.",
            },
            {
              q: "Peut-on installer une douche de plain-pied ?",
              a: "Souvent oui. Il faut abaisser le sol entre les solives ou entailler la dalle pour loger le drain et la pente. Nous le vérifions à la visite, avant de chiffrer.",
            },
            {
              q: "La ventilation de la salle de bain est-elle obligatoire ?",
              a: "Oui, et elle doit sortir à l'extérieur. Un ventilateur qui souffle dans l'entretoit crée du givre, puis de la moisissure. Nous refaisons le conduit quand il se termine sous le toit.",
            },
            {
              q: "Et si vous trouvez du bois pourri en démolissant ?",
              a: "C'est courant après vingt ans sous une douche mal étanchée. Nous vous montrons les photos, chiffrons la réparation par écrit, puis continuons. Rien n'est refermé sur un problème connu.",
            },
            {
              q: "Faut-il un permis pour une salle de bain ?",
              a: "Un remplacement au même endroit n'en demande habituellement pas. Déplacer la plomberie ou ajouter une pièce d'eau exige un permis, avec inspection avant que les murs soient refermés.",
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
          heading: "Faites chiffrer votre salle de bain",
          intro:
            "Nous mesurons, vérifions la ventilation et remettons une soumission détaillée.",
          actions: [
            {
              label: "Soumission gratuite",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Rénovation clé en main",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          note: "Licence RBQ 8306-0806-27 · Étanchéité, ventilation et plomberie conformes",
        },
      },
    },
  ],
};
