import type { ProjectData } from "@/types/projects";
import {
  CORE_HREF,
  SPACE_GALLERY_HREF,
  SPACE_HREF,
} from "@/constants/projects";

export const PROJECT_CUISINE_SUR_MESURE_PIERREFONDS_EN: ProjectData = {
  space: "cuisine",
  slug: "cuisine-sur-mesure-pierrefonds",
  title: "Custom kitchen cabinets, Pierrefonds",
  metaDescription:
    "Custom kitchen cabinet project in Pierrefonds (West Island): design, fabrication and installation. A concrete example of a durable, well-executed kitchen.",
  summary:
    "Custom kitchen cabinets built in the West Island: optimized storage, durable materials and careful installation, by a team based in Pierrefonds-Roxboro.",
  area: "montreal",
  city: "Montréal",
  neighborhood: "Pierrefonds-Roxboro",
  images: [
    {
      src: "/images/projects/cuisine-sur-mesure-pierrefonds.webp",
      alt: "Custom kitchen cabinets in Pierrefonds, West Island",
    },
  ],
  scope: [
    "Scoping and validation of needs",
    "Design and planning",
    "Custom fabrication",
    "Installation and adjustments",
  ],
  constraints: [
    "Optimizing a real space (circulation, storage, island)",
    "Visible alignments and transitions to control",
    "Coordination with related work as needed",
  ],
  solution: [
    "Cabinet configuration tailored to daily use",
    "Solid wood and birch plywood for durability",
    "On-site fitted installation: alignments, levels and finish",
  ],
  results: [
    "More functional storage and smooth circulation",
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
    { title: "Materials comparison", href: CORE_HREF.materialsComparison },
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
