import type { PageTemplateData } from "@/features/page-builder";
import { serviceJsonLd } from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";

export const page: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Processus",
    description:
      "Processus Dilamco : cadrage, design, fabrication, installation et, selon le projet, coordination de renovation cle en main.",
    path: "/processus/",
    ogAlt: "Processus Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Processus", url: SITE.url + "/processus/" },
  ],
  extraJsonLd: [
    serviceJsonLd({
      name: "Processus Dilamco",
      description:
        "Processus structure pour projets sur mesure : cadrage, design, selections, fabrication, installation et coordination selon la portee.",
      url: SITE.url + "/processus/",
      serviceType: "Processus de projet sur mesure",
      areaServed: ["Montreal", "Laval", "Rive-Sud", "Quebec"],
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
          heading: "Un processus clair, du cadrage a l'installation",
          description:
            "Chaque projet avance avec une sequence definie pour reduire les zones grises, valider les decisions au bon moment et proteger la qualite finale.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir nos services",
              href: "/services/",
              variant: "outline",
            },
          ],
          badges: ["Design", "Fabrication", "Installation", "Coordination"],
          image: {
            src: "/images/generated/spaces/espaces-hero-overview-01.webp",
            alt: "Processus Dilamco pour un projet sur mesure",
          },
          caption:
            "Une seule logique de travail pour mieux cadrer les decisions et l'execution",
        },
      },
    },
    {
      id: "benefits",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "Ce que le processus protege concretement",
          intro:
            "Le but n'est pas d'ajouter des etapes. Le but est de garder le projet lisible, executable et coherent du debut a la fin.",
          columns: "2",
          items: [
            {
              title: "Portee plus claire",
              description:
                "On clarifie ce qui est inclus, ce qui doit etre valide et ce qui peut ralentir le projet.",
              icon: "slidersHorizontal",
              bullets: [
                "Contraintes identifiees plus tot",
                "Priorites mieux classees",
                "Moins de zones grises en cours de route",
              ],
            },
            {
              title: "Choix mieux verrouilles",
              description:
                "Les decisions structurantes se prennent avant la fabrication, pas en reaction.",
              icon: "doorOpen",
              bullets: [
                "Plans et configuration valides",
                "Materiaux et finis confirmes",
                "Arbitrages faits avant production",
              ],
            },
            {
              title: "Fabrication plus stable",
              description:
                "Une production bien lancee depend d'informations stables et d'un cadrage propre.",
              icon: "package2",
              bullets: [
                "Moins de reprises evitables",
                "Execution plus previsible",
                "Meilleure coherence entre pieces",
              ],
            },
            {
              title: "Installation mieux controlee",
              description:
                "La pose se passe mieux quand la sequence du projet a ete preparee correctement.",
              icon: "wrench",
              bullets: [
                "Coordination plus nette sur place",
                "Ajustements plus precis",
                "Inspection finale plus simple",
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
          heading: "Les grandes etapes d'un projet Dilamco",
          description:
            "La portee varie selon le projet, mais la logique reste la meme : cadrer, valider, produire, installer.",
          steps: [
            {
              number: "1",
              title: "Cadrage initial",
              description:
                "On comprend l'espace, la portee, les contraintes du site, le niveau d'exigence et l'echeance visee.",
            },
            {
              number: "2",
              title: "Design et configuration",
              description:
                "On structure l'implantation, les fonctions, les dimensions et les choix qui influencent le resultat final.",
            },
            {
              number: "3",
              title: "Selection des materiaux",
              description:
                "On confirme panneaux, quincaillerie, finis et details selon l'usage reel et la durabilite recherchee.",
            },
            {
              number: "4",
              title: "Validation avant production",
              description:
                "Les decisions essentielles sont fermees avant de lancer la fabrication pour reduire les reprises.",
            },
            {
              number: "5",
              title: "Fabrication",
              description:
                "La production sur mesure demarre avec une base stable, ce qui protege la constance et la precision.",
            },
            {
              number: "6",
              title: "Installation et finition",
              description:
                "La pose, les ajustements et l'inspection finale servent a livrer un resultat propre et coherent.",
            },
          ],
          actions: [
            {
              label: "Voir le service design",
              href: "/services/design/",
              variant: "outline",
            },
            {
              label: "Voir l'installation",
              href: "/services/installation/",
              variant: "outline",
            },
          ],
        },
      },
    },
    {
      id: "inputs",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Ce qu'il faut pour avancer plus vite",
          intro:
            "Un bon depart accelere surtout les validations. Quelques informations simples suffisent pour cadrer la discussion correctement.",
          badges: ["Secteur", "Type d'espace", "Portee", "Priorites"],
          cardTitle: "Informations utiles des le premier echange",
          items: [
            "Le type d'espace et la localisation du projet",
            "La portee reelle : design seul, sur mesure, renovation ou coordination",
            "Les priorites : delai, rangement, durabilite, esthetique ou budget",
            "Des photos, mesures de base ou inspirations si disponibles",
            "Les contraintes du batiment ou du chantier quand elles existent",
          ],
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir nos projets",
              href: "/projets/",
              variant: "outline",
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
            "Selon l'etape ou vous en etes, ces pages aident a mieux comprendre la methode, les services et les choix techniques.",
          columns: "3",
          items: [
            {
              title: "Service design",
              description:
                "Pour comprendre comment on structure les choix avant fabrication.",
              href: "/services/design/",
              badges: ["Plans", "Configuration"],
              ctaLabel: "Voir le design",
            },
            {
              title: "Service fabrication",
              description:
                "Pour voir comment la production s'insere dans le projet global.",
              href: "/services/fabrication/",
              badges: ["Production", "Sur mesure"],
              ctaLabel: "Voir la fabrication",
            },
            {
              title: "Service installation",
              description:
                "Pour comprendre la pose, les ajustements et la finition sur place.",
              href: "/services/installation/",
              badges: ["Pose", "Ajustements"],
              ctaLabel: "Voir l'installation",
            },
            {
              title: "Renovation cle en main",
              description:
                "Quand le projet demande de coordonner plus que les armoires.",
              href: "/services/renovation/",
              badges: ["Coordination", "Travaux connexes"],
              ctaLabel: "Voir la renovation",
            },
            {
              title: "Materiaux",
              description:
                "Pour comparer les options et comprendre ce qui change vraiment la durabilite.",
              href: "/materiaux/",
              badges: ["Panneaux", "Quincaillerie"],
              ctaLabel: "Voir les materiaux",
            },
            {
              title: "Projets",
              description:
                "Pour voir des realisations concretes et le niveau de finition attendu.",
              href: "/projets/",
              badges: ["References", "Execution"],
              ctaLabel: "Voir les projets",
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
          heading: "FAQ - processus",
          intro:
            "Reponses rapides aux questions qui reviennent le plus souvent avant de demarrer.",
          items: [
            {
              q: "Tous les projets suivent-ils exactement les memes etapes ?",
              a: "La logique reste similaire, mais la portee change selon qu'il s'agit d'un mandat de design, d'un projet sur mesure complet ou d'une renovation avec coordination.",
            },
            {
              q: "Quand la fabrication commence-t-elle ?",
              a: "Une fois que les decisions structurantes sont validees : configuration, dimensions, materiaux, finis et elements qui influencent directement la production.",
            },
            {
              q: "Faites-vous aussi l'installation ?",
              a: "Oui. L'installation, les ajustements et l'inspection finale font partie de la logique d'execution quand le mandat le prevoit.",
            },
            {
              q: "Le processus fonctionne-t-il aussi en condo ou dans des contextes contraints ?",
              a: "Oui. Le processus sert justement a identifier les contraintes d'acces, de calendrier ou de coordination assez tot pour mieux les integrer.",
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
          heading: "Besoin de cadrer un projet proprement avant d'avancer ?",
          intro:
            "On vous aide a clarifier la portee, les priorites et la meilleure sequence pour lancer un projet sur mesure avec moins d'imprevus.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir nos services",
              href: "/services/",
              variant: "outline",
            },
          ],
          note: "Montreal, Laval et Rive-Sud",
        },
      },
    },
  ],
};
