import type { ActionButton } from "@/components/ActionButtons";
import type { SliderSectionItem } from "@/types/sections";

export const DEFAULT_CTA = {
  heading: "Parlez-nous de votre projet",
  description:
    "Dites-nous votre espace (cuisine/salle de bain), votre secteur (Montréal/Laval/Rive-Sud) et votre échéance. On vous recommande un choix cohérent (matériaux + quincaillerie + installation) pour un résultat durable.",
  actions: [
    {
      text: "Demander une soumission",
      href: "/contact/",
    },
  ] satisfies ActionButton[],
} as const;

export const SPACE_SLIDER_ITEMS: SliderSectionItem[] = [
  {
    id: "cuisine",
    title: "Cuisine sur mesure",
    description:
      "Transformez votre cuisine en un espace unique, pensé pour vous et sans compromis sur la qualité ni explosion du budget.",
    href: "/espaces/cuisine/",
    image: {
      src: "/images/spaces/cabinet-cuisines.webp",
      alt: "Custom kitchen cabinets and design",
    },
  },
  {
    id: "salle-de-bain",
    title: "Salle de bain & vanités sur mesure",
    description:
      "Offrez-vous une salle de bain élégante, fonctionnelle et durable, conçue selon vos goûts et vos besoins.",
    href: "/espaces/salle-de-bain/",
    image: {
      src: "/images/spaces/vanite-salles-de-bain.webp",
      alt: "Custom bathroom vanity and design",
    },
  },
  {
    id: "walk-in",
    title: "Walk-in & rangement",
    href: "/espaces/walk-in/",
    description:
      "Maximisez chaque espace avec une garde-robe ou un walk-in conçu pour vous, élégant, fonctionnel et durable.",
    image: {
      src: "/images/spaces/vanite-garde-robes-et-walk-ins.webp",
      alt: "Custom walk-in closet and storage",
    },
  },
  {
    id: "salle-de-lavage",
    title: "Salle de lavage",
    href: "/espaces/salle-de-lavage/",
    description:
      "Optimisez vos tâches quotidiennes avec une salle de lavage sur-mesure, pensée pour être pratique, durable et élégante.",
    image: {
      src: "/images/spaces/vanite-salles-de-lavage.webp",
      alt: "Custom laundry room cabinets",
    },
  },
  {
    id: "commercial",
    title: "Commercial",
    href: "/espaces/commercial/",
    description:
      "Transformez vos espaces commerciaux en des lieux de vente attrayants et fonctionnels, conçus pour maximiser votre rentabilité.",
    image: {
      src: "/images/spaces/commercial.webp",
      alt: "Commercial custom spaces",
    },
  },
];
