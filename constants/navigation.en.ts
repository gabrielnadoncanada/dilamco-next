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

export const BRAND_EN: Brand = {
  url: "/",
  src: "/images/logo.svg",
  alt: "Dilamco",
  title: "Dilamco",
  tagline:
    "General contractor for residential renovation. West Island, Montréal, Laval and South Shore.",
};

export const MAIN_NAV_EN: MenuItem[] = [
  {
    title: "Services",
    groups: [
      {
        title: "Renovation and construction",
        links: [
          {
            label: "Turnkey renovation",
            url: "/services/renovation/",
            icon: HardHat,
            description: "One contractor from permit to hand-over.",
          },
          {
            label: "Kitchen renovation",
            url: "/services/renovation/cuisine/",
            icon: ChefHat,
            description: "Plumbing, electrical, cabinets and finishes, coordinated.",
          },
          {
            label: "Bathroom renovation",
            url: "/services/renovation/salle-de-bain/",
            icon: Bath,
            description: "Waterproofing, ventilation, plumbing and durable finishes.",
          },
          {
            label: "Basement finishing",
            url: "/services/renovation/sous-sol/",
            icon: Sofa,
            description: "Insulation, drainage, permits and full fit-out.",
          },
          {
            label: "Home addition",
            url: "/services/renovation/agrandissement-de-maison/",
            icon: Building2,
            description: "Foundations, structure, envelope and integration.",
          },
          {
            label: "Flooring renovation",
            url: "/services/renovation/plancher/",
            icon: Layers,
            description: "Levels, subfloors and clean transitions.",
          },
          {
            label: "Disaster recovery",
            url: "/services/renovation/apres-sinistre/",
            icon: Droplets,
            description: "Water or fire damage: rebuild and insurance claims.",
          },
          {
            label: "Commercial",
            url: "/espaces/commercial/",
            icon: Briefcase,
            description: "Offices, retail and tenant improvements.",
          },
        ],
      },
    ],
  },
  {
    title: "Areas",
    groups: [
      {
        title: "Cities we serve",
        links: [
          {
            label: "Pierrefonds-Roxboro",
            url: "/zones/pierrefonds-roxboro/",
            icon: MapPin,
            description: "Our home base: a general contractor next door.",
          },
          {
            label: "Dollard-des-Ormeaux",
            url: "/zones/dollard-des-ormeaux/",
            icon: MapPin,
            description: "Residential renovation in DDO.",
          },
          {
            label: "Kirkland",
            url: "/zones/kirkland/",
            icon: MapPin,
            description: "Renovation and additions in Kirkland.",
          },
          {
            label: "Pointe-Claire",
            url: "/zones/pointe-claire/",
            icon: MapPin,
            description: "Residential renovation in Pointe-Claire.",
          },
          {
            label: "Beaconsfield",
            url: "/zones/beaconsfield/",
            icon: MapPin,
            description: "Renovation and additions in Beaconsfield.",
          },
          {
            label: "Dorval",
            url: "/zones/dorval/",
            icon: MapPin,
            description: "Residential renovation in Dorval.",
          },
          {
            label: "L'Île-Bizard–Sainte-Geneviève",
            url: "/zones/ile-bizard-sainte-genevieve/",
            icon: MapPin,
            description: "Renovation in Île-Bizard and Sainte-Geneviève.",
          },
          {
            label: "Saint-Laurent",
            url: "/zones/saint-laurent/",
            icon: MapPin,
            description: "Residential renovation in Saint-Laurent.",
          },
          {
            label: "Laval",
            url: "/zones/laval/",
            icon: MapPin,
            description: "Residential renovation in Laval.",
          },
          {
            label: "Vaudreuil-Dorion",
            url: "/zones/vaudreuil-dorion/",
            icon: MapPin,
            description: "Residential renovation in Vaudreuil-Dorion.",
          },
          {
            label: "South Shore",
            url: "/zones/rive-sud/",
            icon: MapPin,
            description: "Longueuil, Brossard, Saint-Lambert and nearby.",
          },
          {
            label: "All areas",
            url: "/zones/",
            icon: Home,
            description: "Greater Montréal, Laval, South Shore and Vaudreuil.",
          },
        ],
      },
    ],
  },
  {
    title: "Projects",
    url: "/projets/",
  },
  {
    title: "Custom cabinetry",
    groups: [
      {
        title: "Custom spaces",
        links: [
          {
            label: "Custom kitchens",
            url: "/espaces/cuisine/",
            icon: ChefHat,
            description: "Custom cabinets and kitchens, integrated with the job site.",
          },
          {
            label: "Bathrooms & vanities",
            url: "/espaces/salle-de-bain/",
            icon: Bath,
            description: "Custom vanities, durability and finish.",
          },
          {
            label: "Walk-in & storage",
            url: "/espaces/walk-in/",
            icon: DoorOpen,
            description: "Optimized, custom, functional storage.",
          },
          {
            label: "Laundry room",
            url: "/espaces/salle-de-lavage/",
            icon: Shirt,
            description: "Organization and storage built for daily use.",
          },
          {
            label: "Basement fit-out",
            url: "/espaces/sous-sol/",
            icon: Sofa,
            description: "Home theatre, bar, wine cellar and custom built-ins.",
          },
          {
            label: "All spaces",
            url: "/espaces/",
            icon: LayoutGrid,
            description: "Overview of the cabinetry division.",
          },
        ],
      },
      {
        title: "Method and materials",
        links: [
          {
            label: "Design",
            url: "/services/design/",
            icon: Ruler,
            description: "Planning driven by use and constraints.",
          },
          {
            label: "Fabrication",
            url: "/services/fabrication/",
            icon: Settings2,
            description: "Custom fabrication, precision and control.",
          },
          {
            label: "Installation",
            url: "/services/installation/",
            icon: Wrench,
            description: "Alignment, adjustment and careful finish.",
          },
          {
            label: "Materials",
            url: "/materiaux/",
            icon: Palette,
            description: "Plywood, hardware, finishes and comparison.",
          },
          {
            label: "Materials comparison",
            url: "/materiaux/comparatif/",
            icon: ScanSearch,
            description: "Compare by use, upkeep and durability.",
          },
        ],
      },
    ],
  },
  {
    title: "About",
    groups: [
      {
        title: "About",
        links: [
          {
            label: "Our approach",
            url: "/a-propos/",
            icon: Info,
            description: "Licensed general contractor since 2004.",
          },
          {
            label: "Process",
            url: "/processus/",
            icon: Hammer,
            description: "From estimate to delivered job site.",
          },
        ],
      },
    ],
  },
];

export const FOOTER_NAV_EN: FooterNavSection[] = [
  {
    title: "Services",
    links: [
      { text: "Turnkey", url: "/services/renovation/" },
      { text: "Kitchen", url: "/services/renovation/cuisine/" },
      { text: "Bathroom", url: "/services/renovation/salle-de-bain/" },
      { text: "Basement", url: "/services/renovation/sous-sol/" },
      {
        text: "Home addition",
        url: "/services/renovation/agrandissement-de-maison/",
      },
      { text: "Disaster recovery", url: "/services/renovation/apres-sinistre/" },
    ],
  },
  {
    title: "Areas",
    links: [
      { text: "Pierrefonds-Roxboro", url: "/zones/pierrefonds-roxboro/" },
      { text: "Dollard-des-Ormeaux", url: "/zones/dollard-des-ormeaux/" },
      { text: "Kirkland", url: "/zones/kirkland/" },
      { text: "Pointe-Claire", url: "/zones/pointe-claire/" },
      { text: "Laval", url: "/zones/laval/" },
      { text: "South Shore", url: "/zones/rive-sud/" },
      { text: "All areas", url: "/zones/" },
    ],
  },
  {
    title: "Cabinetry",
    links: [
      { text: "Kitchens", url: "/espaces/cuisine/" },
      { text: "Vanities", url: "/espaces/salle-de-bain/" },
      { text: "Walk-in", url: "/espaces/walk-in/" },
      { text: "Materials", url: "/materiaux/" },
      { text: "Projects", url: "/projets/" },
    ],
  },
  {
    title: "About",
    links: [
      { text: "Our approach", url: "/a-propos/" },
      { text: "Process", url: "/processus/" },
      { text: "Contact", url: "/contact/" },
    ],
  },
];

// Pages légales pas encore créées -> aucun lien (évite les 404).
export const LEGAL_LINKS_EN: LegalLink[] = [];

export const COPYRIGHT_TEXT_EN = `© ${new Date().getFullYear()} Dilamco (9139-1250 Québec inc.). RBQ licence 8306-0806-27. All rights reserved.`;
