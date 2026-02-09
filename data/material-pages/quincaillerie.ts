import type { Metadata } from "next";
import type {
  ArticlePageData,
  ContentArticleSection,
} from "@/types/article-page";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/seo/schema/site";
import { SECTION_TYPES } from "@/constants/section-types";

export const metadata: Metadata = createPageMetadata({
  title: "Quincaillerie",
  description:
    "Quincaillerie d'armoires : charnières, coulisses et mécanismes. Comprendre l'impact sur le confort, les réglages et la durabilité.",
  path: "/materiaux/quincaillerie/",
  ogAlt: "Quincaillerie - Matériaux sur mesure",
});

const faqItems = [
  {
    q: "Le soft-close est-il utile?",
    a: "Oui, si le système est fiable et bien installé : confort, moins de chocs et meilleure longévité.",
  },
  {
    q: "La quincaillerie influence-t-elle la durée de vie?",
    a: "Oui. Ce sont les pièces qui bougent et s'usent.",
  },
  {
    q: "Peut-on remplacer plus tard?",
    a: "Parfois, mais c'est préférable de choisir correctement dès le départ.",
  },
  {
    q: "Pourquoi l'installation compte autant?",
    a: "Parce que l'alignement et les ajustements déterminent le fonctionnement réel.",
  },
];

const sections: ContentArticleSection[] = [
  {
    id: "pourquoi",
    title: "Pourquoi c'est critique",
    content: {
      type: SECTION_TYPES.LIST,
      items: [
        "Usage intensif sur des milliers de cycles.",
        "Réglages et alignements durables.",
        "Perception de qualité quotidienne.",
      ],
    },
  },
  {
    id: "charnieres",
    title: "Charnières",
    content: {
      type: SECTION_TYPES.LIST,
      items: ["Ajustabilité fine.", "Soft-close pour confort et protection."],
    },
  },
  {
    id: "coulisses",
    title: "Coulisses de tiroirs",
    content: {
      type: SECTION_TYPES.LIST,
      items: ["Extension utile.", "Capacité de charge.", "Stabilité en usage."],
    },
  },
  {
    id: "mecanismes",
    title: "Mécanismes et accessoires",
    content: {
      type: SECTION_TYPES.LIST,
      items: ["Solutions d'angle.", "Rangements spécialisés."],
    },
  },
  {
    id: "qualite",
    title: "Ce qu'une bonne quincaillerie change",
    content: {
      type: SECTION_TYPES.LIST,
      items: ["Confort.", "Durabilité.", "Moins d'entretien."],
    },
  },
  {
    id: "risques",
    title: "Risques d'une quincaillerie faible",
    content: {
      type: SECTION_TYPES.LIST,
      items: ["Désalignements.", "Jeu et frottements.", "Usure prématurée."],
    },
  },
  {
    id: "cuisine",
    title: "Cuisine",
    content: {
      type: SECTION_TYPES.LIST,
      items: [
        "Cycles élevés.",
        "Charges importantes.",
        "Coulisses stables essentielles.",
      ],
    },
  },
  {
    id: "cuisine-link",
    title: "",
    content: {
      type: SECTION_TYPES.RELATED_LINKS,
      items: [{ title: "Voir Cuisine sur mesure", href: "/espaces/cuisine/" }],
      columns: 2,
    },
  },
  {
    id: "sdb",
    title: "Salle de bain",
    content: {
      type: SECTION_TYPES.LIST,
      items: ["Humidité plus exigeante.", "Exécution et réglages précis."],
    },
  },
  {
    id: "sdb-link",
    title: "",
    content: {
      type: SECTION_TYPES.RELATED_LINKS,
      items: [
        {
          title: "Voir Salle de bain & vanités",
          href: "/espaces/salle-de-bain/",
        },
      ],
      columns: 2,
    },
  },
  {
    id: "systeme",
    title: "Matériaux + quincaillerie = système",
    content: {
      type: SECTION_TYPES.TEXT,
      paragraphs: [
        "Le résultat final dépend de l'ensemble : structure, chants, quincaillerie, installation.",
      ],
      links: [
        {
          title: "Pourquoi le contreplaqué",
          href: "/materiaux/contreplaque/",
        },
        { title: "MDF", href: "/materiaux/mdf/" },
        { title: "Mélamine", href: "/materiaux/melamine/" },
      ],
    },
  },
  {
    id: "choix",
    title: "Comment nous la choisissons",
    content: {
      type: SECTION_TYPES.LIST,
      items: [
        "Usage et charges.",
        "Contexte d'humidité.",
        "Stabilité des réglages.",
        "Qualité d'installation.",
      ],
      links: [
        { title: "Voir l'installation", href: "/services/installation/" },
        { title: "Voir le design", href: "/services/design/" },
      ],
    },
  },
];

export const pageData: ArticlePageData = {
  breadcrumbs: [
    { name: "Accueil", url: SITE.url + "/" },
    { name: "Matériaux", url: SITE.url + "/materiaux/" },
    { name: "Quincaillerie", url: SITE.url + "/materiaux/quincaillerie/" },
  ],
  hero: {
    heading: "Quincaillerie, confort, précision et durabilité",
    description:
      "Charnières, coulisses et mécanismes sont souvent le facteur principal de l'expérience quotidienne. Une bonne quincaillerie bien installée améliore fortement la longévité et le ressenti haut de gamme.",
    actions: [
      { text: "Demander une soumission", href: "/contact/" },
      {
        text: "Voir tous les matériaux",
        href: "/materiaux/",
        variant: "outline",
      },
    ],
  },
  sections: sections,
  faq: {
    ariaLabelledby: "faq",
    heading: "FAQ - quincaillerie",
    items: faqItems,
  },
};

