import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const renovationCuisinePage: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Renovation de cuisine",
    description:
      "Renovation de cuisine cle en main : faisabilite, coordination, fabrication et installation d'armoires sur mesure a Montreal.",
    path: "/services/renovation/cuisine/",
    ogAlt: "Renovation de cuisine Dilamco",
  },
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services/" },
    { name: "Renovation", url: SITE.url + "/services/renovation/" },
    {
      name: "Renovation de cuisine",
      url: SITE.url + "/services/renovation/cuisine/",
    },
  ],
  service: {
    name: "Renovation de cuisine",
    description:
      "Design, coordination, fabrication et installation d'armoires sur mesure dans une approche cle en main pour projets de cuisine.",
    url: SITE.url + "/services/renovation/cuisine/",
    serviceType: "Renovation de cuisine",
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
            "Renovation de cuisine cle en main a Montreal, cadrer la cuisine avant d'ouvrir le chantier",
          description:
            "Une renovation de cuisine reussie depend autant de la coordination que du resultat final. Il faut clarifier la portee, la sequence, les raccords techniques et les choix de fabrication pour reduire les imprevus et livrer un resultat coherent.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir les projets cuisine",
              href: "/projets",
              variant: "outline",
            },
          ],
          badges: ["Cuisine", "Cle en main", "Montreal"],
          image: {
            src: "/images/generated/renovation/renovation-cuisine-hero-01.webp",
            alt: "Renovation de cuisine sur mesure",
          },
          caption: "Montreal, Laval et Rive-Sud",
        },
      },
    },
    {
      id: "problems",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Ce qui complique vraiment une renovation de cuisine",
          description:
            "Le probleme n'est pas seulement de choisir des armoires. Une cuisine concentre circulation, plomberie, electricite, electromenagers, rangement et finition dans un espace qui doit rester fonctionnel tous les jours.",
          cards: [
            {
              title: "Portee mal cadree",
              description:
                "Quand la sequence n'est pas claire, le chantier accumule les reprises, les retards et les compromis visibles.",
            },
            {
              title: "Contraintes techniques",
              description:
                "Prises, plomberie, ventilation, niveaux et acces aux appareils influencent directement les decisions de design.",
            },
            {
              title: "Coordination fragmentee",
              description:
                "Plus il y a d'intervenants non alignes, plus la qualite finale depend d'ajustements tardifs et couteux.",
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
          heading: "Notre approche pour mieux cadrer une renovation de cuisine",
          intro:
            "L'objectif est d'eviter qu'une cuisine se decide morceau par morceau. Le projet doit etre pense comme un ensemble ou design, fabrication, chantier et pose se soutiennent mutuellement.",
          items: [
            {
              title: "Lecture de l'espace existant",
              description:
                "On part des contraintes reelles de la piece, pas d'un plan idealise deconnecte du chantier.",
            },
            {
              title: "Hierarchie des decisions",
              description:
                "Circulation, ilot, rangement, appareils et points techniques sont clarifies avant la fabrication.",
            },
            {
              title: "Sequence de travaux",
              description:
                "Le chantier est structure pour mieux gerer les etapes connexes et limiter les retours en arriere.",
            },
            {
              title: "Controle du rendu final",
              description:
                "Les alignements, les finitions et l'integration des equipements sont penses des le debut, pas corriges a la fin.",
            },
          ],
          actions: [
            {
              label: "Voir le service de design",
              href: "/services/design/",
              variant: "outline",
            },
            {
              label: "Voir la page cuisine",
              href: "/espaces/cuisine/",
              variant: "outline",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-cuisine-approach-01.webp",
            alt: "Planification d'une renovation de cuisine",
          },
          cardTitle: "Ce qu'on cherche a proteger",
          cardDescription:
            "Une cuisine mal sequencee coute rarement moins cher au final. Elle coute surtout plus de temps, plus de corrections et souvent un resultat moins propre.",
        },
      },
    },
    {
      id: "included",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "Sequence type d'une renovation de cuisine",
          intro:
            "La portee exacte est confirmee lors de la soumission, mais la logique generale reste la meme: clarifier, fabriquer, coordonner puis installer proprement.",
          steps: [
            {
              number: "1",
              title: "Cadrage",
              description:
                "Analyse de la cuisine existante, de la portee et des contraintes visibles.",
            },
            {
              number: "2",
              title: "Design",
              description:
                "Organisation de l'espace, ergonomie, ilot, rangement et decisions techniques principales.",
            },
            {
              number: "3",
              title: "Fabrication",
              description:
                "Armoires, ilot et rangement sur mesure prepares selon les choix valides.",
            },
            {
              number: "4",
              title: "Coordination",
              description:
                "Travaux connexes sequences proprement selon la portee retenue.",
            },
            {
              number: "5",
              title: "Installation",
              description:
                "Alignements, ajustements et finition soignee pour une cuisine lisible et coherente.",
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
          heading:
            "Points techniques qui changent la qualite d'une cuisine renovee",
          intro:
            "Le rendu final depend d'une serie de decisions techniques qui semblent secondaires sur papier mais deviennent critiques au chantier.",
          columns: "2",
          items: [
            {
              title: "Structure des armoires",
              description:
                "La qualite se joue aussi dans les composantes invisibles.",
              icon: "package2",
              bullets: [
                "Bois massif de bouleau pour les tiroirs.",
                "Contreplaque de bouleau pour mieux supporter la charge.",
                "Choix plus credibles pour un usage quotidien intensif.",
              ],
            },
            {
              title: "Integration des appareils",
              description:
                "Une cuisine se lit mal quand les equipements sont traites trop tard.",
              icon: "doorOpen",
              bullets: [
                "Refrigerateur, hotte et lave-vaisselle influences par le design.",
                "Degagements et alignements valides en amont.",
                "Moins de compromis visibles en fin de chantier.",
              ],
            },
            {
              title: "Ergonomie et circulation",
              description:
                "Le confort quotidien depend de la facon dont la piece fonctionne.",
              icon: "slidersHorizontal",
              bullets: [
                "Distances de travail plus logiques.",
                "Ilot et rangement mieux proportionnes a l'espace.",
                "Moins de friction dans l'usage quotidien.",
              ],
            },
            {
              title: "Coordination chantier",
              description:
                "La pose propre depend d'un chantier prepare correctement.",
              icon: "wrench",
              bullets: [
                "Ordre des etapes mieux cadre.",
                "Moins de reprises entre fabrication et installation.",
                "Finition plus stable jusqu'a la livraison.",
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
            "Cette page service soutient surtout votre projet de cuisine sur mesure",
          intro:
            "La renovation de cuisine rassure sur la methode et la coordination. Pour la vision complete du resultat, des materiaux et des realisations, la page pilier cuisine reste la destination principale.",
          items: [
            {
              title: "Cuisine sur mesure",
              href: "/espaces/cuisine/",
              description:
                "La page pilier principale pour voir le niveau de finition, les materiaux, les projets et le positionnement global.",
              image: {
                src: "/images/generated/spaces/space-cuisine-hero-01.webp",
                alt: "Cuisine sur mesure haut de gamme",
              },
              badges: ["Page pilier", "Cuisine"],
              footerCtaLabel: "Voir la page cuisine",
            },
            {
              title: "Service de fabrication",
              href: "/services/fabrication/",
              description:
                "Pour comprendre ce qui rend les armoires plus stables, plus constantes et plus credibles a long terme.",
              image: {
                src: "/images/generated/services/service-fabrication-hero-01.webp",
                alt: "Fabrication sur mesure et details techniques",
              },
              badges: ["Fabrication", "Durabilite"],
              footerCtaLabel: "Voir fabrication",
            },
            {
              title: "Service d'installation",
              href: "/services/installation/",
              description:
                "Pour voir comment la pose, les ajustements sur place et les alignements protegent le rendu final.",
              image: {
                src: "/images/generated/services/service-installation-hero-01.webp",
                alt: "Installation sur mesure avec ajustements precis",
              },
              badges: ["Installation", "Finition"],
              footerCtaLabel: "Voir installation",
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
          heading: "Ce qu'une renovation de cuisine bien cadree doit produire",
          description:
            "La preuve de competence ne tient pas seulement dans une belle photo. Elle se voit dans la fluidite d'usage, la lecture des alignements et la facon dont les decisions techniques disparaissent au profit d'une cuisine simple a vivre.",
          cards: [
            {
              title: "Chantier plus lisible",
              description:
                "Moins de flottement sur la sequence, les responsabilites et les ajustements de derniere minute.",
            },
            {
              title: "Cuisine plus coherente",
              description:
                "Ilot, rangement, appareils et circulation fonctionnent comme un ensemble au lieu de se concurrencer.",
            },
            {
              title: "Finition plus nette",
              description:
                "Alignements, joints et integration des equipements soutiennent une perception plus premium.",
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
          heading: "FAQ - renovation de cuisine",
          intro:
            "Reponses claires sur delais, condo, coordination et portee du projet.",
          items: [
            {
              q: "Combien de temps dure une renovation de cuisine?",
              a: "La duree varie selon la portee, les contraintes du lieu et la coordination requise.",
            },
            {
              q: "Travaillez-vous avec d'autres intervenants sur le chantier?",
              a: "Oui, lorsque la portee le demande. L'objectif est justement d'ordonner les interventions pour eviter les conflits et proteger la qualite du resultat final.",
            },
            {
              q: "Est-ce possible en condo?",
              a: "Oui. L'acces, les horaires et certaines contraintes techniques doivent etre cadres tot.",
            },
            {
              q: "Dois-je quitter le logement pendant les travaux?",
              a: "Cela depend de la portee. Pour une renovation complete, certaines periodes peuvent etre moins confortables.",
            },
            {
              q: "Puis-je faire une renovation partielle?",
              a: "Oui. Certains projets visent surtout l'armoire, l'ilot et l'installation, d'autres incluent plus de travaux.",
            },
            {
              q: "Ou voir l'approche complete pour une cuisine sur mesure?",
              a: "La page renovation de cuisine explique surtout la logique de coordination et de chantier. Pour la vision complete du produit, des materiaux et des realisations, la page cuisine sur mesure est la reference principale.",
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
          heading:
            "Vous voulez cadrer une renovation de cuisine correctement ?",
          intro:
            "On vous aide a definir la bonne sequence et le bon niveau de coordination, puis a vous rediriger vers la page pilier cuisine pour la vision complete du projet.",
          actions: [
            {
              label: "Demander une soumission",
              href: "/contact/",
              variant: "default",
            },
            {
              label: "Voir la page cuisine",
              href: "/espaces/cuisine/",
              variant: "outline",
            },
          ],
          note: "Cuisine sur mesure, ilot, rangement et renovation integree",
        },
      },
    },
  ],
};
