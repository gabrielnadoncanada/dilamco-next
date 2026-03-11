import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const agrandissementMaisonPage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Agrandissement de maison",
    description:
      "Agrandissement de maison cle en main : faisabilite, sequence de travaux, coordination et integration propre a l'existant.",
    path: "/services/renovation/agrandissement-de-maison/",
    ogAlt: "Agrandissement de maison Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services/" },
    { name: "Renovation", url: SITE.url + "/services/renovation/" },
    {
      name: "Agrandissement de maison",
      url: SITE.url + "/services/renovation/agrandissement-de-maison/",
    },
  ],
  service: {
    name: "Agrandissement de maison",
    description:
      "Planification, faisabilite, coordination et execution complete pour des projets d'agrandissement residentiel.",
    url: SITE.url + "/services/renovation/agrandissement-de-maison/",
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
          eyebrow: "Dilamco - Renovation",
          heading:
            "Agrandissement de maison cle en main, planifier l'extension sans fragiliser l'existant",
          description:
            "Un agrandissement residentiel ne se resume pas a ajouter des pieds carres. Il faut cadrer la faisabilite, la structure, l'enveloppe, les raccords interieurs et la sequence de chantier pour livrer un resultat coherent et habitable.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir la renovation cle en main",
              href: "/services/renovation/",
              variant: "outline",
            },
          ],
          badges: ["Faisabilite", "Coordination", "Integration"],
          image: {
            src: "/images/generated/renovation/renovation-extension-hero-01.webp",
            alt: "Projet residentiel de renovation et d'agrandissement",
          },
          caption: "Montreal, Laval et Rive-Sud",
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
            "Le risque n'est pas seulement le cout des travaux. La vraie difficulte est d'integrer une nouvelle partie a une maison existante sans generer de zones grises entre structure, enveloppe, circulation et finition.",
          cards: [
            {
              title: "Maison existante",
              description:
                "Niveaux, structure, ouvertures et contraintes cachees doivent etre valides avant de projeter l'agrandissement.",
            },
            {
              title: "Sequence de chantier",
              description:
                "Demolition, structure, fermeture de l'enveloppe et finition doivent s'enchainer proprement pour limiter les reprises.",
            },
            {
              title: "Coordination des intervenants",
              description:
                "Plus le projet touche d'elements, plus la coordination determine la qualite finale et la prevision des delais.",
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
          heading: "Notre approche pour cadrer un agrandissement residentiel",
          intro:
            "L'objectif n'est pas seulement d'ajouter une piece. Il faut confirmer ce qui est realiste, structurer les decisions et preparer une execution qui s'integre a la maison actuelle.",
          items: [
            {
              title: "Analyse de la portee",
              description:
                "On clarifie l'usage recherche, la superficie visee, les contraintes du site et le niveau d'intervention sur l'existant.",
            },
            {
              title: "Validation technique",
              description:
                "On cadre les points sensibles comme la structure, les raccords, l'acces au chantier et la logique generale des travaux.",
            },
            {
              title: "Sequence de realisation",
              description:
                "Les etapes sont ordonnees pour limiter les interruptions, les reprises et les conflits entre corps de metier.",
            },
            {
              title: "Controle du resultat final",
              description:
                "L'agrandissement doit sembler appartenir a la maison, pas fonctionner comme un ajout mal raccorde.",
            },
          ],
          actions: [
            {
              label: "Voir le service de design",
              href: "/services/design/",
              variant: "outline",
            },
            {
              label: "Voir la renovation cle en main",
              href: "/services/renovation/",
              variant: "outline",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-extension-approach-01.webp",
            alt: "Planification d'un projet d'agrandissement residentiel",
          },
          cardTitle: "Ce qu'on cherche a eviter",
          cardDescription:
            "Les projets qui avancent sans sequence claire finissent souvent avec des ajustements couteux, des finitions compromises ou une integration visuelle faible.",
        },
      },
    },
    {
      id: "process",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "Sequence type d'un projet d'agrandissement",
          intro:
            "Chaque projet varie, mais la logique reste la meme : cadrer avant d'ouvrir, coordonner avant d'accelerer et finir seulement quand l'integration est propre.",
          steps: [
            {
              number: "1",
              title: "Cadrage",
              description:
                "Besoins, faisabilite, contraintes du site et niveau d'intervention sur la maison existante.",
            },
            {
              number: "2",
              title: "Conception",
              description:
                "Organisation des volumes, raccords, circulation, ouvertures et decisions techniques principales.",
            },
            {
              number: "3",
              title: "Execution",
              description:
                "Travaux structures et connexes coordonnes selon une sequence qui protege l'avancement du chantier.",
            },
            {
              number: "4",
              title: "Integration",
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
            "Un agrandissement reussi depend d'une serie de decisions techniques prises assez tot pour eviter les blocages et les compromis visibles.",
          columns: "2",
          items: [
            {
              title: "Structure et ouverture",
              description:
                "Liaison entre le nouveau volume et la maison existante.",
              icon: "package2",
              bullets: [
                "Verification de la structure a modifier avant les travaux.",
                "Ouvertures et portees pensees selon l'usage reel.",
                "Impact sur les murs, niveaux et circulation interieure.",
              ],
            },
            {
              title: "Enveloppe et raccords",
              description:
                "Le raccord visible et invisible influence la durabilite autant que l'apparence.",
              icon: "doorOpen",
              bullets: [
                "Jonction propre entre ancien et nouveau.",
                "Gestion des transitions interieures et exterieures.",
                "Attention aux details qui trahissent un ajout mal integre.",
              ],
            },
            {
              title: "Organisation interieure",
              description:
                "L'agrandissement doit ameliorer la maison, pas juste ajouter une surface.",
              icon: "slidersHorizontal",
              bullets: [
                "Circulation plus fluide entre les zones de vie.",
                "Rangement, mobilier et ouvertures prevus des le depart.",
                "Integration possible de cuisine, salle de bain ou walk-in.",
              ],
            },
            {
              title: "Coordination chantier",
              description:
                "Le niveau de controle determine la prevision des delais et la qualite de finition.",
              icon: "wrench",
              bullets: [
                "Ordre des interventions clarifie avant demarrage.",
                "Moins de chevauchement improductif entre equipes.",
                "Moins de corrections de fin de chantier.",
              ],
            },
          ],
        },
      },
    },
    {
      id: "integration",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading:
            "Comment l'agrandissement s'integre aux espaces de la maison",
          intro:
            "Un agrandissement prend souvent tout son sens lorsqu'il supporte mieux la cuisine, la salle de bain ou les zones de rangement. Ces pages piliers restent les principales destinations de conversion.",
          items: [
            {
              title: "Cuisine sur mesure",
              href: "/espaces/cuisine/",
              description:
                "Quand l'agrandissement sert surtout une cuisine plus fonctionnelle, l'enjeu devient la circulation, l'ilot et l'integration des equipements.",
              image: {
                src: "/images/generated/spaces/space-cuisine-hero-01.webp",
                alt: "Cuisine sur mesure integree a un agrandissement",
              },
              badges: ["Cuisine", "Circulation"],
              footerCtaLabel: "Voir la page cuisine",
            },
            {
              title: "Salle de bain",
              href: "/espaces/salle-de-bain/",
              description:
                "Une extension peut permettre d'ajouter ou d'agrandir une salle de bain avec meilleure gestion de l'humidite, de la plomberie et du rangement.",
              image: {
                src: "/images/generated/spaces/space-bath-hero-01.webp",
                alt: "Salle de bain sur mesure integree a un agrandissement",
              },
              badges: ["Humidite", "Plomberie"],
              footerCtaLabel: "Voir la page salle de bain",
            },
            {
              title: "Walk-in et rangement",
              href: "/espaces/walk-in/",
              description:
                "Plusieurs agrandissements servent a creer une suite plus complete avec rangement adapte et organisation plus claire.",
              image: {
                src: "/images/generated/spaces/space-walkin-hero-01.webp",
                alt: "Walk-in sur mesure dans une extension residentielle",
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
            "La preuve de maitrise ne tient pas seulement dans le volume ajoute. Elle se voit dans la facon dont la maison fonctionne apres les travaux et dans la qualite des raccords visibles au quotidien.",
          cards: [
            {
              title: "Lecture claire",
              description:
                "La nouvelle section doit sembler coherente avec la maison plutot que paraitre ajoutee a la hate.",
            },
            {
              title: "Usage ameliore",
              description:
                "La circulation, la luminosite, le rangement ou la capacite d'accueil doivent etre reellement meilleurs.",
            },
            {
              title: "Finition propre",
              description:
                "Les transitions, alignements et details de finition doivent soutenir la perception d'un projet maitrise.",
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
            "Reponses claires sur faisabilite, coordination, delais et integration a l'existant.",
          items: [
            {
              q: "Est-ce que Dilamco prend en charge un agrandissement complet?",
              a: "Oui, selon la portee confirmee. L'objectif est de cadrer clairement ce qui est inclus, le niveau de coordination requis et la sequence generale avant le demarrage.",
            },
            {
              q: "Est-ce que tous les agrandissements sont faisables?",
              a: "Non. La faisabilite depend de la maison existante, du site, de la structure, des acces et des reglements applicables. C'est pour cela que l'analyse de depart est essentielle.",
            },
            {
              q: "Comment gerer les imprevus dans ce type de chantier?",
              a: "On ne elimine pas tous les imprevus, mais une bonne sequence et une meilleure lecture de l'existant reduisent fortement les corrections tardives et les conflits entre interventions.",
            },
            {
              q: "Combien de temps dure un agrandissement de maison?",
              a: "La duree varie selon la superficie, la complexite, le niveau d'intervention sur l'existant et les travaux connexes. Un echeancier realiste est etabli une fois la portee mieux definie.",
            },
            {
              q: "Est-ce pertinent si l'objectif principal est d'ameliorer la cuisine ou une suite parentale?",
              a: "Oui. Plusieurs projets d'agrandissement existent pour mieux loger une cuisine, une salle de bain ou un espace de rangement. Dans ce cas, l'agrandissement sert la page pilier correspondante plutot qu'il ne la remplace.",
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
          heading: "Vous planifiez un agrandissement residentiel ?",
          intro:
            "On vous aide a cadrer la faisabilite, la sequence de travaux et l'integration a l'existant pour partir sur une base plus maitrisable.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir la renovation cle en main",
              href: "/services/renovation/",
              variant: "outline",
            },
          ],
          note: "Agrandissement, reconfiguration et renovation integree",
        },
      },
    },
  ],
};
