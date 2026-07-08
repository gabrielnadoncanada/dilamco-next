import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const salleDeBainPage: PageTemplateData = {
  template: "spaces",
  metadata: {
    title: "Vanité de salle de bain sur mesure à Laval",
    description:
      "Vanité de salle de bain sur mesure haut de gamme : conception, fabrication contrôlée et installation précise à Montréal, Laval, sur la Rive-Nord et la Rive-Sud.",
    path: "/espaces/salle-de-bain",
    ogAlt: "Vanité de salle de bain sur mesure Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    {
      name: "Salle de bain sur mesure",
      url: SITE.url + "/espaces/salle-de-bain",
    },
  ],
  service: {
    name: "Vanité de salle de bain sur mesure",
    description:
      "Conception, fabrication contrôlée et installation de vanités de salle de bain sur mesure haut de gamme à Montréal, Laval, sur la Rive-Nord et la Rive-Sud.",
    url: SITE.url + "/espaces/salle-de-bain",
    serviceType: "Vanité de salle de bain sur mesure",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Dilamco - Espaces",
          heading:
            "Vanité de salle de bain sur mesure à Laval et dans le Grand Montréal",
          description:
            "Une vanité de salle de bain sur mesure est un meuble-lavabo conçu et fabriqué aux dimensions exactes de votre pièce, avec des matériaux choisis pour résister à l'humidité. Chez Dilamco, à Laval et dans le Grand Montréal, on conçoit, fournit et installe des vanités sur mesure — structure stable, rangement adapté et pose précise, du plan à la finition.",
          actions: [
            {
              label: "Obtenir une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos projets salle de bain",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Sur mesure", "Grand Montréal", "Humidité"],
          image: {
            src: "/images/generated/spaces/space-bath-hero-01.webp",
            alt: "Vanité de salle de bain sur mesure à Pierrefonds et dans le Grand Montréal",
          },
          caption: "Conçu pour un usage quotidien et un environnement humide",
        },
      },
    },
    {
      id: "why",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Une salle de bain sur mesure pensée pour durer",
          intro:
            "Dans une salle de bain, la structure et la tenue dans le temps comptent autant que le design.",
          badges: ["Stabilité", "Humidité", "Finition"],
          cardTitle: "Quand le sur mesure est pertinent",
          items: [
            "Vous voulez optimiser un espace réellement contraint.",
            "La durabilité et la stabilité sont prioritaires.",
            "Vous cherchez une exécution mieux contrôlée qu'une solution standard.",
          ],
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos services",
              href: "/services",
              variant: "ghost",
            },
          ],
        },
      },
    },
    {
      id: "types",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "Les types de vanités sur mesure qu'on offre",
          intro:
            "Une vanité sur mesure s'adapte à votre pièce, à votre plomberie et à vos besoins de rangement — pas l'inverse. Voici les configurations les plus fréquentes.",
          columns: "2",
          items: [
            {
              title: "Vanité simple lavabo",
              description:
                "Pour les salles de bain compactes et les salles d'eau.",
              icon: "package2",
              bullets: [
                "Largeur ajustée au mur disponible.",
                "Rangement optimisé sous le lavabo.",
                "Idéale pour petites surfaces.",
              ],
            },
            {
              title: "Vanité double lavabo",
              description:
                "Pour les salles de bain principales partagées.",
              icon: "slidersHorizontal",
              bullets: [
                "Deux lavabos et plans de travail dédiés.",
                "Colonne ou tiroirs centraux au besoin.",
                "Ergonomie pensée pour deux personnes.",
              ],
            },
            {
              title: "Vanité suspendue (murale)",
              description:
                "Look épuré et entretien du plancher facilité.",
              icon: "doorOpen",
              bullets: [
                "Fixation murale robuste.",
                "Sensation d'espace dans les petites pièces.",
                "Hauteur ajustée à votre usage.",
              ],
            },
            {
              title: "Vanité avec rangement",
              description:
                "Tiroirs profonds, colonne et organisation intégrée.",
              icon: "wrench",
              bullets: [
                "Tiroirs en bois massif de bouleau.",
                "Rangement adapté aux produits et serviettes.",
                "Accès logique et finition cohérente.",
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
          heading: "Du plan à la pose, sans improvisation",
          intro:
            "Le projet est cadré tôt pour mieux gérer plomberie, rangement, ergonomie et finition.",
          steps: [
            {
              number: "1",
              title: "Analyse",
              description:
                "Contraintes d'espace, circulation, plomberie et besoins de rangement.",
            },
            {
              number: "2",
              title: "Conception",
              description:
                "Validation des dimensions, des finis et de la logique d'utilisation.",
            },
            {
              number: "3",
              title: "Fabrication",
              description:
                "Production contrôlée avec des standards adaptés à un environnement exigeant.",
            },
            {
              number: "4",
              title: "Installation",
              description:
                "Ajustements, alignements et finitions vérifiés lors de la livraison.",
            },
          ],
        },
      },
    },
    {
      id: "materials",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Des matériaux adaptés à l'humidité",
          intro:
            "Une salle de bain premium repose sur une structure stable, des composants durables et des choix simples à entretenir.",
          items: [
            {
              title: "Bois massif de bouleau",
              description:
                "Utilisé sur les éléments critiques pour sa résistance et sa stabilité.",
            },
            {
              title: "Contreplaqué de bouleau",
              description:
                "Meilleure tenue dimensionnelle et meilleure résistance à la charge.",
            },
            {
              title: "Choix de finis",
              description:
                "Sélection alignée avec l'entretien, l'usage et l'environnement humide.",
            },
          ],
          actions: [
            {
              label: "Explorer les matériaux",
              href: "/materiaux",
              variant: "ghost",
            },
            {
              label: "Cuisine sur mesure",
              href: "/espaces/cuisine",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-bath-project-01.webp",
            alt: "Détail matériau pour salle de bain sur mesure",
          },
          cardTitle: "Ce que cela apporte",
          cardDescription:
            "Moins de déformation, une meilleure tenue dans le temps et une sensation de solidité plus durable.",
        },
      },
    },
    {
      id: "projects",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Projets salle de bain en vedette",
          intro:
            "Quelques réalisations qui montrent le niveau de finition et la qualité d'exécution.",
          items: [
            {
              title: "Vanité sur mesure",
              href: "/projets/salle-de-bain/vanite-sur-mesure-laval",
              description:
                "Rangement optimisé et finition précise adaptés à la salle de bain.",
              image: {
                src: "/images/generated/spaces/space-bath-project-01.webp",
                alt: "Projet salle de bain sur mesure à Laval",
              },
              badges: ["Laval", "Vanité"],
              footerCtaLabel: "Voir le projet",
            },
            {
              title: "Salle de bain sur mesure",
              href: "/projets",
              description:
                "Projet sur mesure pensé pour l'usage quotidien et la tenue dans le temps.",
              image: {
                src: "/images/generated/spaces/space-bath-project-02.webp",
                alt: "Projet salle de bain sur mesure à Montréal",
              },
              badges: ["Montréal", "Sur mesure"],
              footerCtaLabel: "Voir les projets",
            },
            {
              title: "Salle de bain sur mesure",
              href: "/projets",
              description:
                "Exécution propre avec matériaux adaptés et alignements soignés.",
              image: {
                src: "/images/generated/spaces/space-bath-project-03.webp",
                alt: "Projet salle de bain sur mesure sur la Rive-Sud",
              },
              badges: ["Rive-Sud", "Finition"],
              footerCtaLabel: "Voir les projets",
            },
          ],
        },
      },
    },
    {
      id: "zones",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Vanités sur mesure dans tout le Grand Montréal",
          intro:
            "On conçoit, fournit et installe des vanités de salle de bain sur mesure des deux côtés du fleuve : de l'ouest de l'île jusqu'à Laval, la Rive-Nord et la Rive-Sud.",
          badges: ["Montréal", "Laval", "Rive-Nord", "Rive-Sud"],
          cardTitle: "Zones desservies",
          items: [
            "Montréal et l'ouest de l'île",
            "Laval et la Rive-Nord",
            "Rive-Sud et couronne sud",
            "Conception, fabrication et installation incluses",
          ],
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos projets salle de bain",
              href: "/projets",
              variant: "ghost",
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
          heading: "FAQ - salle de bain sur mesure",
          intro:
            "Les points qu'on clarifie le plus souvent avant de lancer le projet.",
          items: [
            {
              q: "Combien coûte une vanité de salle de bain sur mesure ?",
              a: "Le prix d'une vanité de salle de bain sur mesure dépend surtout de cinq éléments : les dimensions et le format (simple ou double lavabo), le volume de rangement (tiroirs, colonnes, niches), les matériaux et finis choisis, la quincaillerie (coulisses, charnières), et les contraintes du lieu. Comme la pièce est humide, les matériaux et les détails de construction sont sélectionnés pour la stabilité et la tenue dans le temps, ce qui influence aussi le budget. Nous établissons une estimation précise une fois le projet cadré — mesures réelles, rangement souhaité et niveau de finition — pour un budget clair, sans surprise.",
            },
            {
              q: "Faites-vous des vanités sur mesure à Laval et sur la Rive-Nord ?",
              a: "Oui. On conçoit, fournit et installe des vanités de salle de bain sur mesure à Laval, sur la Rive-Nord, à Montréal et sur la Rive-Sud.",
            },
            {
              q: "Quelle est la différence avec une vanité de salle de bain standard ?",
              a: "Une vanité standard est vendue en dimensions fixes : il faut composer avec l'espace restant, quitte à perdre des centimètres autour du lavabo ou de la plomberie. Une vanité sur mesure est dimensionnée au millimètre pour votre salle de bain, ce qui permet d'exploiter les angles, les hauteurs et les niches, et d'ajuster précisément le rangement autour de la tuyauterie. La structure est aussi choisie pour l'environnement humide de la pièce — matériaux stables, détails de construction qui limitent le gondolement — là où beaucoup de vanités standards vieillissent mal. Résultat : un meuble mieux adapté, plus durable et intégré à la pièce.",
            },
            {
              q: "Est-ce que l'humidité change vos choix de matériaux ?",
              a: "Oui. Les matériaux et les détails de construction sont sélectionnés en fonction de cet environnement humide, pour la stabilité et la tenue dans le temps.",
            },
            {
              q: "Quel est le délai pour une vanité sur mesure ?",
              a: "Le délai dépend de la complexité, des finis et du calendrier de fabrication. On le confirme dès la phase de conception.",
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
          heading: "Parlez-nous de votre salle de bain",
          intro:
            "On vous aide à cadrer un projet durable, adapté à l'espace et bien exécuté.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir nos projets salle de bain",
              href: "/projets",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
