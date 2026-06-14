import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const agrandissementMaisonPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Agrandissement de maison",
    description:
      "Agrandissement de maison clé en main : faisabilité, séquence de travaux, coordination et intégration propre à l'existant.",
    path: "/services/renovation/agrandissement-de-maison",
    ogAlt: "Agrandissement de maison Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Rénovation", url: SITE.url + "/services/renovation" },
    {
      name: "Agrandissement de maison",
      url: SITE.url + "/services/renovation/agrandissement-de-maison",
    },
  ],
  service: {
    name: "Agrandissement de maison",
    description:
      "Planification, faisabilité, coordination et exécution complète pour des projets d'agrandissement résidentiel.",
    url: SITE.url + "/services/renovation/agrandissement-de-maison",
    serviceType: "Agrandissement de maison",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Dilamco - Rénovation",
          heading:
            "Agrandissement de maison clé en main, planifier l'extension sans fragiliser l'existant",
          description:
            "Un agrandissement résidentiel ne se résume pas à ajouter des pieds carrés. Il faut cadrer la faisabilité, la structure, l'enveloppe, les raccords intérieurs et la séquence de chantier pour livrer un résultat cohérent et habitable.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "default",
            },
            {
              label: "Voir la rénovation clé en main",
              href: "/services/renovation",
              variant: "outline",
            },
          ],
          badges: ["Faisabilité", "Coordination", "Intégration"],
          image: {
            src: "/images/generated/renovation/renovation-extension-hero-01.webp",
            alt: "Projet résidentiel de rénovation et d'agrandissement",
          },
          caption: "Montréal, Laval et Rive-Sud",
        },
      },
    },
    {
      id: "risks",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Pourquoi un agrandissement devient vite complexe",
          description:
            "Le risque n'est pas seulement le coût des travaux. La vraie difficulté est d'intégrer une nouvelle partie à une maison existante sans générer de zones grises entre structure, enveloppe, circulation et finition.",
          cards: [
            {
              title: "Maison existante",
              description:
                "Niveaux, structure, ouvertures et contraintes cachées doivent être validés avant de projeter l'agrandissement.",
            },
            {
              title: "Séquence de chantier",
              description:
                "Démolition, structure, fermeture de l'enveloppe et finition doivent s'enchaîner proprement pour limiter les reprises.",
            },
            {
              title: "Coordination des intervenants",
              description:
                "Plus le projet touche d'éléments, plus la coordination détermine la qualité finale et la prévision des délais.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "approach",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Notre approche pour cadrer un agrandissement résidentiel",
          intro:
            "L'objectif n'est pas seulement d'ajouter une pièce. Il faut confirmer ce qui est réaliste, structurer les décisions et préparer une exécution qui s'intègre à la maison actuelle.",
          items: [
            {
              title: "Analyse de la portée",
              description:
                "On clarifie l'usage recherché, la superficie visée, les contraintes du site et le niveau d'intervention sur l'existant.",
            },
            {
              title: "Validation technique",
              description:
                "On cadre les points sensibles comme la structure, les raccords, l'accès au chantier et la logique générale des travaux.",
            },
            {
              title: "Séquence de réalisation",
              description:
                "Les étapes sont ordonnées pour limiter les interruptions, les reprises et les conflits entre corps de métier.",
            },
            {
              title: "Contrôle du résultat final",
              description:
                "L'agrandissement doit sembler appartenir à la maison, pas fonctionner comme un ajout mal raccordé.",
            },
          ],
          actions: [
            {
              label: "Voir le service de design",
              href: "/services/design",
              variant: "outline",
            },
            {
              label: "Voir la rénovation clé en main",
              href: "/services/renovation",
              variant: "outline",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-extension-approach-01.webp",
            alt: "Planification d'un projet d'agrandissement résidentiel",
          },
          cardTitle: "Ce qu'on cherche à éviter",
          cardDescription:
            "Les projets qui avancent sans séquence claire finissent souvent avec des ajustements coûteux, des finitions compromises ou une intégration visuelle faible.",
        },
      },
    },
    {
      id: "process",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "Séquence type d'un projet d'agrandissement",
          intro:
            "Chaque projet varie, mais la logique reste la même : cadrer avant d'ouvrir, coordonner avant d'accélérer et finir seulement quand l'intégration est propre.",
          steps: [
            {
              number: "1",
              title: "Cadrage",
              description:
                "Besoins, faisabilité, contraintes du site et niveau d'intervention sur la maison existante.",
            },
            {
              number: "2",
              title: "Conception",
              description:
                "Organisation des volumes, raccords, circulation, ouvertures et décisions techniques principales.",
            },
            {
              number: "3",
              title: "Exécution",
              description:
                "Travaux structurels et connexes coordonnés selon une séquence qui protège l'avancement du chantier.",
            },
            {
              number: "4",
              title: "Intégration",
              description:
                "Finitions, ajustements et raccords pour que l'agrandissement fonctionne avec le reste de la maison.",
            },
          ],
        },
      },
    },
    {
      id: "technical",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "Points techniques qui influencent vraiment le projet",
          intro:
            "Un agrandissement réussi dépend d'une série de décisions techniques prises assez tôt pour éviter les blocages et les compromis visibles.",
          columns: "2",
          items: [
            {
              title: "Structure et ouverture",
              description:
                "Liaison entre le nouveau volume et la maison existante.",
              icon: "package2",
              bullets: [
                "Vérification de la structure à modifier avant les travaux.",
                "Ouvertures et portées pensées selon l'usage réel.",
                "Impact sur les murs, niveaux et circulation intérieure.",
              ],
            },
            {
              title: "Enveloppe et raccords",
              description:
                "Le raccord visible et invisible influence la durabilité autant que l'apparence.",
              icon: "doorOpen",
              bullets: [
                "Jonction propre entre ancien et nouveau.",
                "Gestion des transitions intérieures et extérieures.",
                "Attention aux détails qui trahissent un ajout mal intégré.",
              ],
            },
            {
              title: "Organisation intérieure",
              description:
                "L'agrandissement doit améliorer la maison, pas juste ajouter une surface.",
              icon: "slidersHorizontal",
              bullets: [
                "Circulation plus fluide entre les zones de vie.",
                "Rangement, mobilier et ouvertures prévus dès le départ.",
                "Intégration possible de cuisine, salle de bain ou walk-in.",
              ],
            },
            {
              title: "Coordination chantier",
              description:
                "Le niveau de contrôle détermine la prévision des délais et la qualité de finition.",
              icon: "wrench",
              bullets: [
                "Ordre des interventions clarifié avant démarrage.",
                "Moins de chevauchement improductif entre équipes.",
                "Moins de corrections de fin de chantier.",
              ],
            },
          ],
        },
      },
    },
    {
      id: "intégration",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading:
            "Comment l'agrandissement s'intègre aux espaces de la maison",
          intro:
            "Un agrandissement prend souvent tout son sens lorsqu'il supporte mieux la cuisine, la salle de bain ou les zones de rangement. Ces pages piliers restent les principales destinations de conversion.",
          items: [
            {
              title: "Cuisine sur mesure",
              href: "/espaces/cuisine",
              description:
                "Quand l'agrandissement sert surtout une cuisine plus fonctionnelle, l'enjeu devient la circulation, l'îlot et l'intégration des équipements.",
              image: {
                src: "/images/generated/spaces/space-cuisine-hero-01.webp",
                alt: "Cuisine sur mesure intégrée à un agrandissement",
              },
              badges: ["Cuisine", "Circulation"],
              footerCtaLabel: "Voir la page cuisine",
            },
            {
              title: "Salle de bain",
              href: "/espaces/salle-de-bain",
              description:
                "Une extension peut permettre d'ajouter ou d'agrandir une salle de bain avec meilleure gestion de l'humidité, de la plomberie et du rangement.",
              image: {
                src: "/images/generated/spaces/space-bath-hero-01.webp",
                alt: "Salle de bain sur mesure intégrée à un agrandissement",
              },
              badges: ["Humidité", "Plomberie"],
              footerCtaLabel: "Voir la page salle de bain",
            },
            {
              title: "Walk-in et rangement",
              href: "/espaces/walk-in",
              description:
                "Plusieurs agrandissements servent à créer une suite plus complète avec rangement adapté et organisation plus claire.",
              image: {
                src: "/images/generated/spaces/space-walkin-hero-01.webp",
                alt: "Walk-in sur mesure dans une extension résidentielle",
              },
              badges: ["Rangement", "Suite"],
              footerCtaLabel: "Voir la page walk-in",
            },
          ],
        },
      },
    },
    {
      id: "proof",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce qu'un bon agrandissement doit livrer au final",
          description:
            "La preuve de maîtrise ne tient pas seulement dans le volume ajouté. Elle se voit dans la façon dont la maison fonctionne après les travaux et dans la qualité des raccords visibles au quotidien.",
          cards: [
            {
              title: "Lecture claire",
              description:
                "La nouvelle section doit sembler cohérente avec la maison plutôt que paraître ajoutée à la hâte.",
            },
            {
              title: "Usage amélioré",
              description:
                "La circulation, la luminosité, le rangement ou la capacité d'accueil doivent être réellement meilleurs.",
            },
            {
              title: "Finition propre",
              description:
                "Les transitions, alignements et détails de finition doivent soutenir la perception d'un projet maîtrisé.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "faq",

      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "FAQ - agrandissement de maison",
          intro:
            "Réponses claires sur faisabilité, coordination, délais et intégration à l'existant.",
          items: [
            {
              q: "Est-ce que Dilamco prend en charge un agrandissement complet?",
              a: "Oui, selon la portée confirmée. L'objectif est de cadrer clairement ce qui est inclus, le niveau de coordination requis et la séquence générale avant le démarrage.",
            },
            {
              q: "Est-ce que tous les agrandissements sont faisables?",
              a: "Non. La faisabilité dépend de la maison existante, du site, de la structure, des accès et des règlements applicables. C'est pour cela que l'analyse de départ est essentielle.",
            },
            {
              q: "Comment gérer les imprévus dans ce type de chantier?",
              a: "On n'élimine pas tous les imprévus, mais une bonne séquence et une meilleure lecture de l'existant réduisent fortement les corrections tardives et les conflits entre interventions.",
            },
            {
              q: "Combien de temps dure un agrandissement de maison?",
              a: "La durée varie selon la superficie, la complexité, le niveau d'intervention sur l'existant et les travaux connexes. Un échéancier réaliste est établi une fois la portée mieux définie.",
            },
            {
              q: "Est-ce pertinent si l'objectif principal est d'améliorer la cuisine ou une suite parentale?",
              a: "Oui. Plusieurs projets d'agrandissement existent pour mieux loger une cuisine, une salle de bain ou un espace de rangement. Dans ce cas, l'agrandissement sert la page pilier correspondante plutôt qu'il ne la remplace.",
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
          heading: "Vous planifiez un agrandissement résidentiel ?",
          intro:
            "On vous aide à cadrer la faisabilité, la séquence de travaux et l'intégration à l'existant pour partir sur une base plus maîtrisable.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact",
              variant: "default",
            },
            {
              label: "Voir la rénovation clé en main",
              href: "/services/renovation",
              variant: "outline",
            },
          ],
          note: "Agrandissement, reconfiguration et rénovation intégrée",
        },
      },
    },
  ],
};
