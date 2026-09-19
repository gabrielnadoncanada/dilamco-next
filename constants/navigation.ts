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
  MapPin,
  Droplets,
  Home,
} from "lucide-react";
import type { MenuItem } from "@/components/navbar/navbar.types";
import type { Brand, FooterNavSection, LegalLink } from "@/types/navigation";

export const BRAND: Brand = {
  url: "/",
  src: "/images/logo.svg",
  alt: "Dilamco",
  title: "Dilamco",
  tagline:
    "Entrepreneur général en rénovation résidentielle. Ouest-de-l'Île, Montréal, Laval et Rive-Sud.",
};

export const MAIN_NAV: MenuItem[] = [
  {
    title: "Services",
    groups: [
      {
        title: "Rénovation et construction",
        links: [
          {
            label: "Rénovation clé en main",
            url: "/services/renovation/",
            icon: HardHat,
            description: "Un seul entrepreneur du permis à la livraison.",
          },
          {
            label: "Rénovation de cuisine",
            url: "/services/renovation/cuisine/",
            icon: ChefHat,
            description: "Plomberie, électricité, armoires et finition coordonnées.",
          },
          {
            label: "Rénovation de salle de bain",
            url: "/services/renovation/salle-de-bain/",
            icon: Bath,
            description: "Étanchéité, ventilation, plomberie et finition durable.",
          },
          {
            label: "Finition de sous-sol",
            url: "/services/renovation/sous-sol/",
            icon: Sofa,
            description: "Isolation, drainage, permis et aménagement complet.",
          },
          {
            label: "Agrandissement de maison",
            url: "/services/renovation/agrandissement-de-maison/",
            icon: Building2,
            description: "Fondations, structure, enveloppe et intégration.",
          },
          {
            label: "Rénovation de plancher",
            url: "/services/renovation/plancher/",
            icon: Layers,
            description: "Niveaux, sous-planchers et transitions propres.",
          },
          {
            label: "Après sinistre",
            url: "/services/renovation/apres-sinistre/",
            icon: Droplets,
            description: "Dégât d'eau ou feu : reconstruction et assurances.",
          },
          {
            label: "Commercial",
            url: "/espaces/commercial/",
            icon: Briefcase,
            description: "Bureaux, commerces et améliorations locatives.",
          },
        ],
      },
    ],
  },
  {
    title: "Zones",
    groups: [
      {
        title: "Villes desservies",
        links: [
          {
            label: "Pierrefonds-Roxboro",
            url: "/zones/pierrefonds-roxboro/",
            icon: MapPin,
            description: "Notre base : entrepreneur général sur place.",
          },
          {
            label: "Dollard-des-Ormeaux",
            url: "/zones/dollard-des-ormeaux/",
            icon: MapPin,
            description: "Rénovation résidentielle à DDO.",
          },
          {
            label: "Kirkland",
            url: "/zones/kirkland/",
            icon: MapPin,
            description: "Rénovation et agrandissement à Kirkland.",
          },
          {
            label: "Pointe-Claire",
            url: "/zones/pointe-claire/",
            icon: MapPin,
            description: "Rénovation résidentielle à Pointe-Claire.",
          },
          {
            label: "Beaconsfield",
            url: "/zones/beaconsfield/",
            icon: MapPin,
            description: "Rénovation et agrandissement à Beaconsfield.",
          },
          {
            label: "Dorval",
            url: "/zones/dorval/",
            icon: MapPin,
            description: "Rénovation résidentielle à Dorval.",
          },
          {
            label: "L'Île-Bizard–Sainte-Geneviève",
            url: "/zones/ile-bizard-sainte-genevieve/",
            icon: MapPin,
            description: "Rénovation à L'Île-Bizard et Sainte-Geneviève.",
          },
          {
            label: "Saint-Laurent",
            url: "/zones/saint-laurent/",
            icon: MapPin,
            description: "Rénovation résidentielle à Saint-Laurent.",
          },
          {
            label: "Laval",
            url: "/zones/laval/",
            icon: MapPin,
            description: "Rénovation résidentielle à Laval.",
          },
          {
            label: "Vaudreuil-Dorion",
            url: "/zones/vaudreuil-dorion/",
            icon: MapPin,
            description: "Rénovation résidentielle à Vaudreuil-Dorion.",
          },
          {
            label: "Rive-Sud",
            url: "/zones/rive-sud/",
            icon: MapPin,
            description: "Longueuil, Brossard, Saint-Lambert et environs.",
          },
          {
            label: "Toutes les zones",
            url: "/zones/",
            icon: Home,
            description: "Grand Montréal, Laval, Rive-Sud et Vaudreuil.",
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
    title: "Armoires sur mesure",
    groups: [
      {
        title: "Espaces sur mesure",
        links: [
          {
            label: "Cuisine sur mesure",
            url: "/espaces/cuisine/",
            icon: ChefHat,
            description: "Armoires et cuisine sur mesure, intégrées au chantier.",
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
            label: "Tous les espaces",
            url: "/espaces/",
            icon: LayoutGrid,
            description: "Vue d'ensemble de la division armoires.",
          },
        ],
      },
      {
        title: "Méthode et matériaux",
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
            label: "Matériaux",
            url: "/materiaux/",
            icon: Palette,
            description: "Contreplaqué, quincaillerie, finis et comparatif.",
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
            description: "Entrepreneur général licencié depuis 2004.",
          },
          {
            label: "Processus",
            url: "/processus/",
            icon: Hammer,
            description: "De l'estimation au chantier livré.",
          },
        ],
      },
    ],
  },
];

export const FOOTER_NAV: FooterNavSection[] = [
  {
    title: "Services",
    links: [
      { text: "Clé en main", url: "/services/renovation/" },
      { text: "Cuisine", url: "/services/renovation/cuisine/" },
      {
        text: "Salle de bain",
        url: "/services/renovation/salle-de-bain/",
      },
      { text: "Sous-sol", url: "/services/renovation/sous-sol/" },
      {
        text: "Agrandissement",
        url: "/services/renovation/agrandissement-de-maison/",
      },
      { text: "Après sinistre", url: "/services/renovation/apres-sinistre/" },
    ],
  },
  {
    title: "Zones",
    links: [
      { text: "Pierrefonds-Roxboro", url: "/zones/pierrefonds-roxboro/" },
      { text: "Dollard-des-Ormeaux", url: "/zones/dollard-des-ormeaux/" },
      { text: "Kirkland", url: "/zones/kirkland/" },
      { text: "Pointe-Claire", url: "/zones/pointe-claire/" },
      { text: "Laval", url: "/zones/laval/" },
      { text: "Rive-Sud", url: "/zones/rive-sud/" },
      { text: "Toutes les zones", url: "/zones/" },
    ],
  },
  {
    title: "Armoires",
    links: [
      { text: "Cuisines", url: "/espaces/cuisine/" },
      { text: "Vanités", url: "/espaces/salle-de-bain/" },
      { text: "Walk-in", url: "/espaces/walk-in/" },
      { text: "Matériaux", url: "/materiaux/" },
      { text: "Projets", url: "/projets/" },
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

export const COPYRIGHT_TEXT = `© ${new Date().getFullYear()} Dilamco (9139-1250 Québec inc.). Licence RBQ 8306-0806-27. Tous droits réservés.`;
