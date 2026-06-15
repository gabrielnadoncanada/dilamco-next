import type { ProjectData } from "@/types/projects";
import {
  CORE_HREF,
  SPACE_GALLERY_HREF,
  SPACE_HREF,
} from "@/constants/projects";

export const PROJECT_CUISINE_SUR_MESURE_MONTREAL_EN: ProjectData = {
  space: "cuisine",
  slug: "cuisine-sur-mesure-montreal",
  title: "Custom kitchen, Montréal",
  metaDescription:
    "Custom kitchen project in Montréal: design, fabrication and installation. An example of a durable solution with optimized storage and precise finishing.",
  summary:
    "Custom kitchen completed in Montréal: optimized storage, durable material choices and installation with clean alignments.",
  area: "montreal",
  city: "Montréal",
  images: [
    {
      src: "/images/projects/cuisine-haut-de-gamme-blanche-laval.webp",
      alt: "High-end custom kitchen in Montréal",
    },
  ],
  scope: [
    "Scoping and needs validation",
    "Design and planning",
    "Custom fabrication",
    "Installation and adjustments",
  ],
  constraints: [
    "Space and circulation constraints",
    "Walls/floors sometimes uneven (on-site adjustments)",
    "Appliance integration and clearances",
  ],
  solution: [
    "Configuration optimized for real-world use (work zones and storage)",
    "Choice of stable materials and reliable hardware",
    "Precise installation: alignments, levels, finishes and final inspection",
  ],
  results: [
    "More functional storage and smoother circulation",
    "Consistent finish and clean lines",
    "Greater durability through materials + hardware + installation",
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
