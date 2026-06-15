import type { ProjectData } from "@/types/projects";
import {
  CORE_HREF,
  SPACE_GALLERY_HREF,
  SPACE_HREF,
} from "@/constants/projects";

export const PROJECT_CUISINE_SUR_MESURE_PLATEAU_MONT_ROYAL_EN: ProjectData = {
  space: "cuisine",
  slug: "cuisine-sur-mesure-plateau-mont-royal",
  title: "Custom kitchen, Plateau-Mont-Royal",
  metaDescription:
    "Custom kitchen project in Montréal (Plateau-Mont-Royal): design, fabrication and installation. A concrete example of a durable solution with a precise finish.",
  summary:
    "Custom kitchen completed in Montréal: optimized storage, durable material choices and installation with clean alignments.",
  area: "montreal",
  city: "Montréal",
  neighborhood: "Plateau-Mont-Royal",
  images: [
    {
      src: "/images/projects/chene-moderne.webp",
      alt: "Custom kitchen in Plateau-Mont-Royal, Montréal",
    },
  ],
  scope: [
    "Scoping and validation of needs",
    "Design and planning",
    "Custom fabrication",
    "Installation and adjustments",
  ],
  constraints: [
    "Space constraints (circulation and storage)",
    "Visible alignments (lines and joints)",
    "Coordination with related work as needed",
  ],
  solution: [
    "Optimization of modules based on real use",
    "Selection of stable, durable materials",
    "Precise installation: adjustments, finishes and inspection",
  ],
  results: [
    "Optimized storage and smoother circulation",
    "Consistent finish and clean lines",
    "Increased durability through materials + hardware + installation",
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
