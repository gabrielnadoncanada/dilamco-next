import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const page: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Services",
    description:
      "Services Dilamco : design, fabrication sur mesure, installation et renovation cle en main.",
    path: "/services/",
    ogAlt: "Services Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services/" },
  ],
  service: {
    name: "Services Dilamco",
    description:
      "Design, fabrication sur mesure, installation et renovation cle en main selon la portee du projet.",
    url: SITE.url + "/services/",
    serviceType: "Services sur mesure",
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          heading:
            "Services : design, fabrication, installation et renovation cle en main",
          description:
            "Selon le projet, nous prenons en charge l'ensemble du plan a la finition.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir nos realisations",
              href: "/projets/",
              variant: "outline",
            },
          ],
          badges: ["Design", "Fabrication", "Installation", "Coordination"],
          image: {
            src: "/images/generated/spaces/espaces-hero-overview-01.webp",
            alt: "Vue d'ensemble des services Dilamco",
          },
          caption: "De la planification a l'installation selon la portee",
        },
      },
    },
    {
      id: "primary-services",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Nos services principaux",
          intro: "Choisissez le service qui correspond a votre etape.",
          columns: "2",
          items: [
            {
              title: "Design",
              description: "Cadrage du plan, ergonomie et choix de materiaux.",
              href: "/services/design/",
              badges: ["Planification", "Usage"],
              ctaLabel: "Voir le design",
            },
            {
              title: "Fabrication",
              description: "Production sur mesure orientee durabilite.",
              href: "/services/fabrication/",
              badges: ["Sur mesure", "Durabilite"],
              ctaLabel: "Voir la fabrication",
            },
            {
              title: "Installation",
              description: "Ajustements et finition sur place.",
              href: "/services/installation/",
              badges: ["Pose", "Precision"],
              ctaLabel: "Voir l'installation",
            },
            {
              title: "Renovation cle en main",
              description: "Coordination des travaux connexes selon le projet.",
              href: "/services/renovation/",
              badges: ["Coordination", "Execution"],
              ctaLabel: "Voir la renovation",
            },
          ],
        },
      },
    },
    {
      id: "renovation-types",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Renovation par type",
          columns: "2",
          items: [
            {
              title: "Renovation de cuisine",
              href: "/services/renovation/cuisine/",
              badges: ["Cuisine", "Coordination"],
              ctaLabel: "Voir cuisine",
            },
            {
              title: "Renovation salle de bain",
              href: "/services/renovation/salle-de-bain/",
              badges: ["Humidite", "Technique"],
              ctaLabel: "Voir salle de bain",
            },
            {
              title: "Renovation de plancher",
              href: "/services/renovation/plancher/",
              badges: ["Transitions", "Finition"],
              ctaLabel: "Voir plancher",
            },
            {
              title: "Agrandissement de maison",
              href: "/services/renovation/agrandissement-de-maison/",
              badges: ["Portee", "Coordination"],
              ctaLabel: "Voir l'agrandissement",
            },
          ],
        },
      },
    },
    {
      id: "turnkey-approach",
      frame: { surface: "muted" },
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Quand choisir une approche cle en main",
          intro:
            "Cette approche devient pertinente quand le projet depasse la seule fabrication et installation d'armoires.",
          badges: ["Cuisine", "Salle de bain", "Coordination"],
          cardTitle: "Situations ou l'approche est pertinente",
          items: [
            "Renovation complete de cuisine.",
            "Salle de bain avec contraintes techniques.",
            "Projet multi-intervenants.",
          ],
          actions: [
            {
              label: "Voir la renovation",
              href: "/services/renovation/",
              variant: "outline",
            },
            {
              label: "Parler de votre projet",
              href: "/contact/",
              variant: "default",
            },
          ],
        },
      },
    },
    {
      id: "quality",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Qualite et durabilite",
          intro:
            "Le haut de gamme repose sur un systeme coherent : materiaux, assemblage, quincaillerie et installation.",
          columns: "3",
          items: [
            {
              title: "Pourquoi le contreplaque",
              description:
                "Voir pourquoi la structure du panneau change la stabilite et la longevite.",
              href: "/materiaux/contreplaque/",
              badges: ["Structure", "Durabilite"],
              ctaLabel: "Voir le contreplaque",
            },
            {
              title: "Quincaillerie",
              description:
                "Comprendre l'impact des mecanismes sur le confort d'usage et l'usure.",
              href: "/materiaux/quincaillerie/",
              badges: ["Usage", "Precision"],
              ctaLabel: "Voir la quincaillerie",
            },
            {
              title: "Tous les materiaux",
              description:
                "Comparer les options selon l'espace, l'humidite et la finition attendue.",
              href: "/materiaux/",
              badges: ["Comparatif", "Choix techniques"],
              ctaLabel: "Voir les materiaux",
            },
          ],
        },
      },
    },
  ],
};
