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
} from "lucide-react";
import type { MenuItem } from "@/components/navbar/navbar.types";
import type { Brand, FooterNavSection, LegalLink } from "@/types/navigation";

export const BRAND_EN: Brand = {
  url: "/",
  src: "/images/logo.svg",
  alt: "Dilamco",
  title: "Dilamco",
  tagline:
    "Custom cabinetry & vanities — Design, Fabrication, Installation, Renovation",
};

export const MAIN_NAV_EN: MenuItem[] = [
  {
    title: "Spaces",
    groups: [
      {
        title: "Custom spaces",
        links: [
          {
            label: "Custom kitchens",
            url: "/espaces/cuisine/",
            icon: ChefHat,
            description: "High-end custom kitchen cabinets.",
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
            description: "Optimized, custom and functional storage.",
          },
          {
            label: "Laundry room",
            url: "/espaces/salle-de-lavage/",
            icon: Shirt,
            description: "Organization and storage for everyday use.",
          },
          {
            label: "Basement fit-out",
            url: "/espaces/sous-sol/",
            icon: Sofa,
            description: "Home cinema, bar, wine cellar and custom bookcases.",
          },
          {
            label: "Commercial",
            url: "/espaces/commercial/",
            icon: Briefcase,
            description: "Custom fit-out for heavy daily use.",
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
            description: "Alignments, adjustments and clean finish.",
          },
          {
            label: "Turnkey renovation",
            url: "/services/renovation/",
            icon: HardHat,
            description: "Coordination, execution and consistent delivery.",
          },
        ],
      },
      {
        title: "Renovation (types)",
        links: [
          {
            label: "Kitchen renovation",
            url: "/services/renovation/cuisine/",
            icon: Hammer,
            description: "Coordination + custom cabinets + finish.",
          },
          {
            label: "Bathroom renovation",
            url: "/services/renovation/salle-de-bain/",
            icon: Bath,
            description: "Humidity, ventilation, sealing, durability.",
          },
          {
            label: "Flooring renovation",
            url: "/services/renovation/plancher/",
            icon: Layers,
            description: "Levels, transitions and work sequencing.",
          },
          {
            label: "Home extension",
            url: "/services/renovation/agrandissement-de-maison/",
            icon: Building2,
            description: "Planning, coordination and full execution.",
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
    title: "Materials",
    groups: [
      {
        title: "Materials & finish",
        links: [
          {
            label: "Materials",
            url: "/materiaux/",
            icon: LayoutGrid,
            description: "Overview of materials and selection criteria.",
          },
          {
            label: "Plywood",
            url: "/materiaux/contreplaque/",
            icon: Layers,
            description: "Why it's a durable choice for custom work.",
          },
          {
            label: "Hardware",
            url: "/materiaux/quincaillerie/",
            icon: Wrench,
            description: "Reliability, adjustability and durability.",
          },
          {
            label: "Colours & finishes",
            url: "/materiaux/couleurs/",
            icon: Palette,
            description: "Finish choices, consistency and look.",
          },
          {
            label: "Materials comparison",
            url: "/materiaux/comparatif/",
            icon: ScanSearch,
            description: "Compare by use, maintenance and durability.",
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
            description: "Custom work, quality, process and accountability.",
          },
          {
            label: "Process",
            url: "/processus/",
            icon: LayoutGrid,
            description: "From scoping to final installation.",
          },
        ],
      },
    ],
  },
  {
    title: "Shop",
    url: "/boutique",
  },
];

export const FOOTER_NAV_EN: FooterNavSection[] = [
  {
    title: "Spaces",
    links: [
      { text: "Custom kitchens", url: "/espaces/cuisine/" },
      { text: "Bathrooms & vanities", url: "/espaces/salle-de-bain/" },
      { text: "Walk-in & storage", url: "/espaces/walk-in/" },
      { text: "Laundry room", url: "/espaces/salle-de-lavage/" },
      { text: "Basement fit-out", url: "/espaces/sous-sol/" },
      { text: "Commercial", url: "/espaces/commercial/" },
    ],
  },
  {
    title: "Services",
    links: [
      { text: "Design", url: "/services/design/" },
      { text: "Fabrication", url: "/services/fabrication/" },
      { text: "Installation", url: "/services/installation/" },
      { text: "Turnkey renovation", url: "/services/renovation/" },
    ],
  },
  {
    title: "Resources",
    links: [
      { text: "Shop", url: "/boutique" },
      { text: "Projects", url: "/projets/" },
      { text: "Materials", url: "/materiaux/" },
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

export const COPYRIGHT_TEXT_EN = `© ${new Date().getFullYear()} Dilamco. All rights reserved.`;

export const REQUEST_QUOTE_LABEL_EN = "Request a quote";
