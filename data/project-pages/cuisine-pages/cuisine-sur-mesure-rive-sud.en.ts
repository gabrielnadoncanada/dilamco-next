import type { ProjectData } from "@/types/projects";
import {
  CORE_HREF,
  SPACE_GALLERY_HREF,
  SPACE_HREF,
} from "@/constants/projects";

export const PROJECT_CUISINE_SUR_MESURE_RIVE_SUD_EN: ProjectData = {
  space: "cuisine",
  slug: "cuisine-sur-mesure-rive-sud",
  title: "Custom kitchen, South Shore",
  metaDescription:
    "Custom kitchen project on the South Shore: design, fabrication and installation. A concrete example of a durable, integrated and well-executed solution.",
  summary:
    "Custom kitchen built on the South Shore: optimized storage, clean integration and installation with careful finishes.",
  area: "rive-sud",
  city: "Rive-Sud",
  images: [
    {
      src: "/images/projects/cuisine-blanche-sur-mesure-brossard.webp",
      alt: "White custom kitchen in Brossard, South Shore",
    },
  ],
  scope: [
    "Scoping and needs validation",
    "Design and planning",
    "Custom fabrication",
    "Installation and adjustments",
  ],
  constraints: [
    "Layout constraints (openings, circulation, island)",
    "Visible transitions and alignments (joints, lines, finishes)",
    "Coordination with related work as needed",
  ],
  solution: [
    "Optimization of storage and work zones according to the space",
    "Stable materials and choices consistent with use",
    "Installation adjusted on site: alignments, transitions and final inspection",
  ],
  results: [
    "A more functional space day to day",
    "Consistent and durable finish",
    "Clean integration with the existing space",
  ],
  requiredLinks: {
    spaceHref: SPACE_HREF.cuisine,
    renovationHref: CORE_HREF.renovation,
    materialHref: CORE_HREF.plywood,
    contactHref: CORE_HREF.contact,
  },
  optionalLinks: {
    galleryHref: SPACE_GALLERY_HREF.cuisine,
    installationHref: CORE_HREF.installation,
    designHref: CORE_HREF.design,
    fabricationHref: CORE_HREF.fabrication,
  },
  materials: [
    { title: "Why plywood", href: CORE_HREF.plywood },
    {
      title: "Materials comparison",
      href: CORE_HREF.materialsComparison,
    },
    { title: "Hardware", href: CORE_HREF.hardware },
    { title: "Colours and finishes", href: CORE_HREF.colors },
  ],
  services: [
    { title: "Design", href: CORE_HREF.design },
    { title: "Fabrication", href: CORE_HREF.fabrication },
    { title: "Installation", href: CORE_HREF.installation },
    { title: "Turnkey renovation", href: CORE_HREF.renovation },
  ],
};
