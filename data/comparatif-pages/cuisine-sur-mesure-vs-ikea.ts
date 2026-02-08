import type { Metadata } from "next";
import type { ArticlePageData } from "@/components/templates/ArticlePageTemplate";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";

export const metadata: Metadata = createPageMetadata({
  title: "Cuisine sur mesure vs IKEA",
  description:
    "Comparatif cuisine sur mesure vs IKEA : personnalisation, ergonomie, matériaux, installation et rénovation. Aidez-vous à choisir la solution adaptée à votre projet à Montréal, Laval et sur la Rive-Sud.",
  path: "/comparatifs/cuisine-sur-mesure-vs-ikea/",
  ogAlt: "Comparatif : Cuisine sur mesure vs IKEA",
});

export const pageData: ArticlePageData = {
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Comparatifs", url: SITE.url + "/comparatifs/" },
    {
      name: "Cuisine sur mesure vs IKEA",
      url: SITE.url + "/comparatifs/cuisine-sur-mesure-vs-ikea/",
    },
  ],
  hero: {
    heading: "Cuisine sur mesure vs IKEA : quelle option correspond à votre projet?",
    description:
      "IKEA est populaire pour de bonnes raisons : accessibilité, choix variés et solution rapide pour des cuisines plutôt standards. Une cuisine sur mesure devient souvent préférable quand l'espace est atypique, que vous voulez optimiser l'ergonomie et le rangement, ou que le projet implique une rénovation et une finition haut de gamme.",
  },
  sections: [
    {
      type: "text",
      ariaLabelledby: "pour-qui",
      heading: "À qui s'adresse chaque option?",
      paragraphs: [],
    },
    {
      type: "list",
      ariaLabelledby: "ikea",
      heading: "Une cuisine IKEA peut convenir si :",
      items: [
        "Votre cuisine est standard (peu de contraintes d'angles, de hauteurs ou d'accès).",
        "Vous cherchez une solution rapide avec des configurations déjà définies.",
        "Vous êtes à l'aise avec une part d'autonomie (choix, montage, installation ou gestion d'intervenants).",
        "Vous acceptez certains compromis sur le rangement et l'intégration.",
      ],
      variant: "bullets",
    },
    {
      type: "list",
      ariaLabelledby: "sur-mesure",
      heading: "Une cuisine sur mesure est souvent préférable si :",
      items: [
        "Votre espace est atypique (angles, murs irréguliers, contraintes d'accès, plafonds).",
        "Vous voulez maximiser le rangement et l'ergonomie au quotidien.",
        "La durabilité et la qualité de finition sont prioritaires.",
        "Vous souhaitez simplifier le projet (un seul responsable lorsque requis).",
      ],
      variant: "checkmarks",
    },
    {
      type: "table",
      ariaLabelledby: "tableau",
      heading: "Comparatif rapide",
      firstColumnLabel: "Critère",
      columns: ["Cuisine sur mesure (Dilamco)", "Cuisine IKEA"],
      rows: [
        {
          label: "Dimensions",
          values: ["Adaptées à votre espace", "Modules standardisés"],
        },
        {
          label: "Rangement",
          values: ["Conçu selon vos usages", "Limité au système de caissons"],
        },
        {
          label: "Intégration",
          values: [
            "Coins, hauteurs, contraintes prises en compte",
            "Compromis (filler, panneaux, pertes d'espace)",
          ],
        },
        {
          label: "Matériaux",
          values: [
            "Choix orientés durabilité et usage",
            "Variable selon la gamme",
          ],
        },
        {
          label: "Montage",
          values: [
            "Fabrication + installation maîtrisées",
            "Montage souvent requis / délégué",
          ],
        },
        {
          label: "Installation",
          values: [
            "Ajustements, alignements et finition sur place",
            "Résultat dépend du service choisi / installateur",
          ],
        },
        {
          label: "Rénovation",
          values: [
            "Option clé en main selon le projet",
            "Coordination souvent à votre charge",
          ],
        },
      ],
    },
    {
      type: "text",
      ariaLabelledby: "standard-vs-surmesure",
      heading: "Standardisation vs adaptation réelle à votre espace",
      paragraphs: [
        "IKEA propose un système modulaire efficace, mais la standardisation implique parfois des compromis : espaces perdus, panneaux de compensation, coins moins accessibles ou choix plus limités pour optimiser le rangement. Le sur mesure permet d'ajuster les dimensions, l'ergonomie et l'intérieur des armoires pour mieux correspondre à vos usages.",
      ],
      links: [
        {
          text: "Voir la page Cuisine sur mesure",
          href: "/espaces/cuisine/",
          variant: "outline",
        },
      ],
    },
    {
      type: "list",
      ariaLabelledby: "materiaux-details",
      heading: "Matériaux et durabilité",
      intro:
        "Une cuisine est soumise à l'humidité et à l'usage quotidien. Au-delà du style, la durabilité dépend de la structure, des assemblages, de la quincaillerie et de la qualité d'installation.",
      items: [
        "Sur mesure : choix de matériaux et de configurations adaptés à la cuisine, avec une structure pensée pour durer.",
        "IKEA : la qualité varie selon les gammes. L'installation et la protection contre l'humidité ont un impact important sur la longévité.",
      ],
      variant: "bullets",
      links: [
        {
          text: "Pourquoi le contreplaqué",
          href: "/materiaux/contreplaque/",
          variant: "outline",
        },
        {
          text: "Voir les matériaux",
          href: "/materiaux/",
          variant: "outline",
        },
      ],
    },
    {
      type: "text",
      ariaLabelledby: "installation",
      heading: "Montage, installation et réalité du chantier",
      paragraphs: [
        "Le résultat final dépend souvent de l'exécution : alignements, ajustements, gestion des murs et planchers irréguliers, et finition. Une cuisine standard peut très bien paraître… si le montage et l'installation sont impeccables. Le sur mesure inclut généralement une approche où l'installation et les ajustements font partie intégrante du projet.",
      ],
      links: [
        {
          text: "Voir l'installation",
          href: "/services/installation/",
          variant: "outline",
        },
        {
          text: "Voir la rénovation de cuisine",
          href: "/services/renovation/cuisine/",
          variant: "outline",
        },
      ],
    },
    {
      type: "text",
      ariaLabelledby: "cout",
      heading: "Et le budget?",
      paragraphs: [
        "IKEA est souvent plus abordable à l'achat. L'écart peut toutefois se réduire selon la complexité : montage, installation, ajustements, retouches et coordination si vous rénovez. Une cuisine sur mesure coûte généralement plus, mais vise un résultat mieux intégré à votre espace, avec une ergonomie optimisée et une finition plus stable dans le temps.",
      ],
    },
    {
      type: "list",
      ariaLabelledby: "quand-ikea",
      heading: "Quand IKEA n'est plus la bonne solution",
      items: [
        "Votre espace est atypique ou vous voulez exploiter chaque centimètre.",
        "Vous recherchez un rendu haut de gamme et une finition cohérente.",
        "Le projet implique une rénovation complète et vous voulez limiter la coordination.",
        "La durabilité et la tranquillité d'esprit sont prioritaires.",
      ],
      variant: "checkmarks",
      links: [
        {
          text: "Rénovation de cuisine clé en main",
          href: "/services/renovation/cuisine/",
          variant: "outline",
        },
        {
          text: "Voir des projets de cuisines",
          href: "/projets/cuisine/",
          variant: "outline",
        },
      ],
    },
  ],
  cta: {
    heading: "Parlez-nous de votre projet",
    description:
      "Dites-nous votre espace (cuisine/salle de bain), votre secteur (Montréal/Laval/Rive-Sud) et votre échéance. On vous recommande un choix cohérent (matériaux + quincaillerie + installation) pour un résultat durable.",
    actions: [
      {
        text: "Demander une soumission",
        href: "/contact/",
      },
      {
        text: "Solution Dilamco",
        href: "/espaces/cuisine/",
        variant: "outline",
      },
    ],
  },
};
