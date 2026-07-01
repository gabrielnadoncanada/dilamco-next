import {
  Hammer,
  LayoutGrid,
  Ruler,
  Wrench,
  Layers,
  Building2,
  DoorOpen,
  Bath,
  ChefHat,
  Shirt,
  Sofa,
  Briefcase,
  HardHat,
  ScanSearch,
  Palette,
  Settings2,
  Info,
  Boxes,
} from "lucide-react";
import type { MenuItem } from "@/components/navbar/navbar.types";
import type { Brand, FooterNavSection, LegalLink } from "@/types/navigation";

export const BRAND: Brand = {
  url: "http://localhost:3000/",
  src: "/images/logo.svg",
  alt: "Dilamco",
  title: "Dilamco",
  tagline:
    "Armoires & vanités sur mesure, Design - Fabrication - Installation - Rénovation",
};

export const MAIN_NAV: MenuItem[] = [
  {
    title: "Espaces",
    groups: [
      {
        title: "Espaces sur mesure",
        links: [
          {
            label: "Cuisine sur mesure",
            url: "/espaces/cuisine/",
            icon: ChefHat,
            description: "Armoires et cuisine sur mesure haut de gamme.",
          },
          {
            label: "Salle de bain & vanités",
            url: "/espaces/salle-de-bain/",
            icon: Bath,
            description: "Vanités sur mesure, durabilité et finition.",
          },
          {
            label: "Walk-in & rangement",
            url: "/espaces/walk-in/",
            icon: DoorOpen,
            description: "Rangement optimisé, sur mesure et fonctionnel.",
          },
          {
            label: "Salle de lavage",
            url: "/espaces/salle-de-lavage/",
            icon: Shirt,
            description: "Organisation et rangement adaptés au quotidien.",
          },
          {
            label: "Aménagement de sous-sol",
            url: "/espaces/sous-sol/",
            icon: Sofa,
            description: "Cinéma maison, bar, cave à vin et bibliothèque sur mesure.",
          },
          {
            label: "Commercial",
            url: "/espaces/commercial/",
            icon: Briefcase,
            description: "Aménagement sur mesure pour usage intensif.",
          },
        ],
      },
    ],
  },
  {
    title: "Services",
    groups: [
      {
        title: "Services",
        links: [
          {
            label: "Design",
            url: "/services/design/",
            icon: Ruler,
            description: "Planification orientée usage et contraintes.",
          },
          {
            label: "Fabrication",
            url: "/services/fabrication/",
            icon: Settings2,
            description: "Fabrication sur mesure, précision et contrôle.",
          },
          {
            label: "Installation",
            url: "/services/installation/",
            icon: Wrench,
            description: "Alignements, ajustements et finition soignée.",
          },
          {
            label: "Rénovation clé en main",
            url: "/services/renovation/",
            icon: HardHat,
            description: "Coordination, exécution et livraison cohérente.",
          },
        ],
      },
      {
        title: "Rénovation (types)",
        links: [
          {
            label: "Rénovation de cuisine",
            url: "/services/renovation/cuisine/",
            icon: Hammer,
            description: "Coordination + armoires sur mesure + finition.",
          },
          {
            label: "Rénovation salle de bain",
            url: "/services/renovation/salle-de-bain/",
            icon: Bath,
            description: "Humidité, ventilation, étanchéité, durabilité.",
          },
          {
            label: "Rénovation de plancher",
            url: "/services/renovation/plancher/",
            icon: Layers,
            description: "Niveaux, transitions et séquence de travaux.",
          },
          {
            label: "Agrandissement de maison",
            url: "/services/renovation/agrandissement-de-maison/",
            icon: Building2,
            description: "Planification, coordination et exécution complète.",
          },
        ],
      },
    ],
  },
  {
    title: "Projets",
    url: "/projets/",
  },
  {
    title: "Matériaux",
    groups: [
      {
        title: "Matériaux & finition",
        links: [
          {
            label: "Matériaux",
            url: "/materiaux/",
            icon: LayoutGrid,
            description: "Vue d'ensemble des matériaux et critères.",
          },
          {
            label: "Contreplaqué",
            url: "/materiaux/contreplaque/",
            icon: Layers,
            description: "Pourquoi c'est un choix durable en sur mesure.",
          },
          {
            label: "Quincaillerie",
            url: "/materiaux/quincaillerie/",
            icon: Wrench,
            description: "Fiabilité, ajustements et durabilité.",
          },
          {
            label: "Couleurs & finis",
            url: "/materiaux/couleurs/",
            icon: Palette,
            description: "Choix de finis, cohérence et rendu.",
          },
          {
            label: "Comparatif des matériaux",
            url: "/materiaux/comparatif/",
            icon: ScanSearch,
            description: "Comparer selon usage, entretien et durabilité.",
          },
        ],
      },
    ],
  },
  {
    title: "À propos",
    groups: [
      {
        title: "À propos",
        links: [
          {
            label: "Notre approche",
            url: "/a-propos/",
            icon: Info,
            description: "Sur mesure, qualité, process et responsabilité.",
          },
          {
            label: "Processus",
            url: "/processus/",
            icon: LayoutGrid,
            description: "Du cadrage à l'installation finale.",
          },
        ],
      },
    ],
  },
  {
    title: "Boutique",
    groups: [
      {
        title: "Boutique en ligne",
        links: [
          {
            label: "Armoires de cuisine",
            url: "/boutique/armoires-cuisine",
            icon: ChefHat,
            description: "Caissons en stock, prêts à installer.",
          },
          {
            label: "Garde-manger",
            url: "/boutique/garde-manger",
            icon: Boxes,
            description: "Rangement pleine hauteur, en stock.",
          },
          {
            label: "Vanités de salle de bain",
            url: "/boutique/vanites",
            icon: Bath,
            description: "Meubles-lavabos en stock, 24 et 30 pouces.",
          },
          {
            label: "Finitions",
            url: "/boutique/finitions",
            icon: Palette,
            description: "Blanc Pur et Chêne blanc.",
          },
          {
            label: "Demander une soumission",
            url: "/boutique/soumission",
            icon: ScanSearch,
            description: "Soumission ferme sous 48 h sur votre sélection.",
          },
        ],
      },
    ],
  },
];

export const FOOTER_NAV: FooterNavSection[] = [
  {
    title: "Espaces",
    links: [
      { text: "Cuisine sur mesure", url: "/espaces/cuisine/" },
      { text: "Salle de bain & vanités", url: "/espaces/salle-de-bain/" },
      { text: "Walk-in & rangement", url: "/espaces/walk-in/" },
      { text: "Salle de lavage", url: "/espaces/salle-de-lavage/" },
      { text: "Aménagement de sous-sol", url: "/espaces/sous-sol/" },
      { text: "Commercial", url: "/espaces/commercial/" },
    ],
  },
  {
    title: "Services",
    links: [
      { text: "Design", url: "/services/design/" },
      { text: "Fabrication", url: "/services/fabrication/" },
      { text: "Installation", url: "/services/installation/" },
      { text: "Rénovation clé en main", url: "/services/renovation/" },
      { text: "Armoires de cuisine à Laval", url: "/zones/laval" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { text: "Boutique", url: "/boutique" },
      { text: "Projets", url: "/projets/" },
      { text: "Matériaux", url: "/materiaux/" },
    ],
  },
  {
    title: "À propos",
    links: [
      { text: "Notre approche", url: "/a-propos/" },
      { text: "Processus", url: "/processus/" },
      { text: "Contact", url: "/contact/" },
    ],
  },
];

// Pages légales pas encore créées -> aucun lien (évite les 404).
// Réajouter ici quand /politique-de-confidentialite et /conditions-dutilisation existeront.
export const LEGAL_LINKS: LegalLink[] = [];

export const COPYRIGHT_TEXT = `© ${new Date().getFullYear()} Dilamco. Tous droits réservés.`;
