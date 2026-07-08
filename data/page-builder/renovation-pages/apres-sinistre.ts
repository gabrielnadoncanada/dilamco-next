import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationApresSinistrePage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Rénovation après sinistre à Pierrefonds",
    description:
      "Reconstruction après dégât d'eau ou inondation : évaluation des dommages, accompagnement de réclamation d'assurance, fabrication et installation sur mesure à Pierrefonds-Roxboro, dans l'Ouest-de-l'Île et le Grand Montréal.",
    path: "/services/renovation/apres-sinistre",
    ogAlt: "Rénovation après sinistre Dilamco",
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
      "Reconstruction après dégât d'eau ou inondation : évaluation des dommages, coordination, fabrication et installation sur mesure, avec accompagnement de la réclamation d'assurance, à Pierrefonds-Roxboro et dans l'Ouest-de-l'Île.",
    url: SITE.url + "/services/renovation/apres-sinistre",
    serviceType: "Rénovation après sinistre",
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
            "Rénovation après sinistre : reconstruire proprement après un dégât d'eau, à Pierrefonds et dans l'Ouest-de-l'Île",
          description:
            "Une fois l'eau retirée et les lieux asséchés, il reste à reconstruire. Nous prenons le relais sur la rénovation : remise en état des sous-sols, cuisines, salles de bain et planchers touchés, avec la même rigueur de fabrication que nos projets sur mesure. Basés à Pierrefonds-Roxboro, nous connaissons les bâtiments de la zone touchée.",
          actions: [
            {
              label: "Demander une évaluation",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir la rénovation de sous-sol",
              href: "/espaces/sous-sol",
              variant: "ghost",
            },
          ],
          badges: ["Après dégât d'eau", "Reconstruction", "Ouest-de-l'Île"],
          image: {
            src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
            alt: "Sous-sol reconstruit après un dégât d'eau",
          },
          caption: "Pierrefonds-Roxboro, DDO, l'Ouest-de-l'Île et le Grand Montréal",
        },
      },
    },
    {
      id: "problems",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce qui rend une reconstruction après sinistre différente",
          description:
            "Reconstruire après un dégât d'eau n'est pas une rénovation ordinaire. Il faut composer avec des dommages parfois invisibles, un échéancier dicté par l'assurance et la nécessité de revenir à un logement sain, pas seulement refait.",
          cards: [
            {
              title: "Dommages mal évalués",
              description:
                "L'eau migre derrière les finitions. Une portée établie trop vite laisse passer des dégâts cachés qui ressortent plus tard.",
            },
            {
              title: "Échéancier sous pression",
              description:
                "Entre l'assèchement, l'assurance et le retour à la normale, les décisions s'enchaînent vite. Une séquence claire évite les reprises.",
            },
            {
              title: "Réclamation à documenter",
              description:
                "Un dossier bien monté — portée, photos, devis détaillé — facilite la réclamation et réduit les écarts avec l'assureur.",
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
          heading: "Notre approche : reconstruire, pas seulement réparer",
          intro:
            "Le marché de l'urgence (assèchement, décontamination) est une étape distincte. Nous intervenons sur la suite : la reconstruction durable, avec des choix de matériaux et de fabrication pensés pour tenir dans le temps.",
          items: [
            {
              title: "Évaluation des dommages",
              description:
                "On documente l'étendue réelle des dégâts avant d'arrêter une portée, pour éviter les mauvaises surprises en cours de chantier.",
            },
            {
              title: "Accompagnement de la réclamation",
              description:
                "Devis détaillé, photos et portée claire : un dossier qui parle le langage de l'assureur et appuie votre réclamation.",
            },
            {
              title: "Matériaux adaptés à l'humidité",
              description:
                "Choix de matériaux et de finitions cohérents avec un espace qui a déjà subi l'eau, surtout au sous-sol.",
            },
            {
              title: "Fabrication et pose sur mesure",
              description:
                "Armoires, rangements et finitions fournis et installés avec la même exigence que nos projets réguliers.",
            },
          ],
          actions: [
            {
              label: "Voir le service de rénovation",
              href: "/services/renovation",
              variant: "ghost",
            },
            {
              label: "Voir la rénovation de sous-sol",
              href: "/espaces/sous-sol",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-plancher-approach-01.webp",
            alt: "Reconstruction d'un plancher après dégât d'eau",
          },
          cardTitle: "Ce qu'on cherche à protéger",
          cardDescription:
            "Un espace reconstruit après un sinistre doit redevenir sain et durable, pas seulement présentable. La valeur se joue dans ce qui ne se voit plus une fois les travaux terminés.",
        },
      },
    },
    {
      id: "included",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "Séquence type d'une reconstruction après sinistre",
          intro:
            "La portée exacte est confirmée après l'évaluation et selon votre couverture d'assurance, mais la logique reste la même : constater, documenter, préparer, coordonner puis installer proprement.",
          steps: [
            {
              number: "1",
              title: "Évaluation",
              description:
                "Constat des dommages visibles et cachés, mesure de l'étendue à reconstruire.",
            },
            {
              number: "2",
              title: "Dossier",
              description:
                "Devis détaillé et documentation pour appuyer la réclamation d'assurance.",
            },
            {
              number: "3",
              title: "Design",
              description:
                "Organisation de l'espace remis en état et choix de matériaux adaptés.",
            },
            {
              number: "4",
              title: "Fabrication",
              description:
                "Armoires, rangements et finitions sur mesure préparés avant le chantier.",
            },
            {
              number: "5",
              title: "Installation",
              description:
                "Coordination des travaux connexes et pose soignée pour un espace de nouveau fonctionnel.",
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
          heading: "Points techniques qui comptent après un dégât d'eau",
          intro:
            "La qualité d'une reconstruction se joue surtout dans des décisions qui semblent secondaires mais qui déterminent si le problème revient ou non.",
          columns: "2",
          items: [
            {
              title: "Sous-sol et bas de murs",
              description:
                "La zone la plus touchée par les inondations demande une attention particulière.",
              icon: "package2",
              bullets: [
                "Finitions et matériaux choisis en tenant compte de l'humidité résiduelle.",
                "Détails de bas de mur pensés pour un retour à un espace sain.",
                "Rangements et armoires conçus pour durer dans la pièce reconstruite.",
              ],
            },
            {
              title: "Planchers",
              description:
                "Le revêtement est souvent à refaire entièrement après une inondation.",
              icon: "slidersHorizontal",
              bullets: [
                "Préparation du support avant la pose du nouveau revêtement.",
                "Choix cohérent avec l'usage et l'emplacement de la pièce.",
                "Raccords propres avec les éléments conservés.",
              ],
            },
            {
              title: "Armoires et fabrication",
              description:
                "Les modules gonflés ou tachés par l'eau doivent être remplacés, pas masqués.",
              icon: "doorOpen",
              bullets: [
                "Bois massif de bouleau pour les tiroirs.",
                "Contreplaqué de bouleau pour mieux supporter la charge.",
                "Fabrication contrôlée chez notre usine partenaire, pas d'assemblage improvisé.",
              ],
            },
            {
              title: "Coordination du chantier",
              description:
                "Une reconstruction propre dépend d'un chantier séquencé correctement.",
              icon: "wrench",
              bullets: [
                "Ordre des étapes cadré après l'assèchement.",
                "Moins de reprises entre fabrication et installation.",
                "Suivi clair jusqu'à la remise des lieux.",
              ],
            },
          ],
        },
      },
    },
    {
      id: "assurance",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Réclamation d'assurance : ce qu'on apporte au dossier",
          description:
            "La reconstruction est plus simple quand le dossier d'assurance est solide. Sans remplacer votre assureur ni votre expert, nous fournissons la matière dont la réclamation a besoin.",
          cards: [
            {
              title: "Portée documentée",
              description:
                "Une description claire des travaux de reconstruction, pièce par pièce, avec photos à l'appui.",
            },
            {
              title: "Devis détaillé",
              description:
                "Un chiffrage transparent qui distingue ce qui relève du sinistre et ce qui relève d'une amélioration souhaitée.",
            },
            {
              title: "Interlocuteur stable",
              description:
                "Un seul responsable de la reconstruction, du constat à la livraison, pour limiter les zones grises.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "intégration",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Les espaces qu'on reconstruit le plus souvent",
          intro:
            "Après un dégât d'eau, ce sont surtout le sous-sol, la cuisine et les planchers qui demandent une reconstruction. Chaque espace a sa page dédiée.",
          items: [
            {
              title: "Rénovation de sous-sol",
              href: "/espaces/sous-sol",
              description:
                "L'espace le plus exposé aux inondations. Reconstruction complète, du bas de mur au rangement.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
                alt: "Sous-sol reconstruit après un dégât d'eau",
              },
              badges: ["Sous-sol", "Après inondation"],
              footerCtaLabel: "Voir le sous-sol",
            },
            {
              title: "Rénovation de cuisine",
              href: "/services/renovation/cuisine",
              description:
                "Quand l'eau atteint la cuisine, armoires et bas de meubles sont souvent à remplacer.",
              image: {
                src: "/images/generated/renovation/renovation-cuisine-hero-01.webp",
                alt: "Reconstruction de cuisine après sinistre",
              },
              badges: ["Cuisine", "Reconstruction"],
              footerCtaLabel: "Voir cuisine",
            },
            {
              title: "Rénovation de plancher",
              href: "/services/renovation/plancher",
              description:
                "Le revêtement de plancher est presque toujours à refaire après une inondation.",
              image: {
                src: "/images/generated/renovation/renovation-plancher-hero-01.webp",
                alt: "Reconstruction de plancher après dégât d'eau",
              },
              badges: ["Plancher", "Revêtement"],
              footerCtaLabel: "Voir plancher",
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
          heading: "Ce qu'une reconstruction bien menée doit produire",
          description:
            "La preuve de compétence ne tient pas à une finition rapide. Elle se voit dans un espace qui redevient sain, durable et cohérent, sans que le sinistre ne ressorte quelques mois plus tard.",
          cards: [
            {
              title: "Espace de nouveau sain",
              description:
                "Les zones touchées sont reconstruites, pas masquées, pour éviter que le problème ne revienne.",
            },
            {
              title: "Chantier lisible",
              description:
                "Moins de flottement sur la séquence et les responsabilités, dans une période déjà éprouvante.",
            },
            {
              title: "Dossier propre",
              description:
                "Une documentation qui appuie la réclamation et clarifie ce qui a été reconstruit.",
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
          heading: "FAQ - rénovation après sinistre",
          intro:
            "Réponses claires sur l'assurance, les délais, l'assèchement et la portée des travaux.",
          items: [
            {
              q: "Faites-vous l'urgence et l'assèchement?",
              a: "Non. L'assèchement, le pompage et la décontamination sont des étapes d'urgence assurées par des entreprises spécialisées. Nous intervenons sur la reconstruction qui suit, une fois les lieux asséchés.",
            },
            {
              q: "Travaillez-vous avec mon assurance?",
              a: "Nous fournissons la portée des travaux, un devis détaillé et la documentation photo nécessaires à votre réclamation. Vous restez l'interlocuteur de l'assureur; nous appuyons le dossier de reconstruction.",
            },
            {
              q: "Intervenez-vous à Pierrefonds-Roxboro et dans l'Ouest-de-l'Île?",
              a: "Oui. Nous sommes basés à Pierrefonds-Roxboro et intervenons dans tout l'Ouest-de-l'Île, à DDO et dans le Grand Montréal — la zone la plus touchée par les inondations récentes.",
            },
            {
              q: "Combien de temps après le sinistre peut-on commencer?",
              a: "La reconstruction commence une fois l'assèchement complété et la portée confirmée. On peut faire l'évaluation et monter le dossier en parallèle pour ne pas perdre de temps.",
            },
            {
              q: "Quels espaces reconstruisez-vous?",
              a: "Surtout les sous-sols, cuisines, salles de bain et planchers touchés par l'eau, avec fabrication d'armoires et de rangements sur mesure.",
            },
            {
              q: "Où voir votre approche complète de rénovation de sous-sol?",
              a: "La page rénovation de sous-sol détaille les aménagements possibles et le niveau de finition. Pour une reconstruction après dégât d'eau, cette page est la suite logique.",
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
          heading: "Un dégât d'eau à reconstruire dans l'Ouest-de-l'Île?",
          intro:
            "On évalue les dommages, on monte le dossier pour l'assurance et on reconstruit proprement. Demandez une évaluation pour cadrer la suite.",
          actions: [
            {
              label: "Demander une évaluation",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Voir la rénovation de sous-sol",
              href: "/espaces/sous-sol",
              variant: "ghost",
            },
          ],
          note: "Reconstruction après dégât d'eau, Pierrefonds-Roxboro et l'Ouest-de-l'Île",
        },
      },
    },
  ],
};
