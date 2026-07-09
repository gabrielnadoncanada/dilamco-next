import type { ProjectData } from "@/types/projects";
import {
  CORE_HREF,
  SPACE_GALLERY_HREF,
  SPACE_HREF,
} from "@/constants/projects";

export const PROJECT_CUISINE_SUR_MESURE_LAVAL_EN: ProjectData = {
  space: "cuisine",
  slug: "cuisine-sur-mesure-laval",
  title: "Custom kitchen cabinets, Laval",
  metaDescription:
    "Custom kitchen cabinet project in Laval: white cabinets, light wood-veneer island and marbled quartz countertops. Design, fabrication and installation.",
  summary:
    "Custom kitchen completed in Laval: white shaker cabinets, a light wood-clad island and veined quartz countertops for a bright, functional room.",
  area: "laval",
  city: "Laval",
  images: [
    {
      src: "/images/projects/cuisine-sur-mesure-laval-1.webp",
      alt: "Custom kitchen in Laval with light wood island and marbled quartz countertop",
    },
    {
      src: "/images/projects/cuisine-sur-mesure-laval-2.webp",
      alt: "White custom kitchen cabinets in Laval with quartz backsplash",
    },
    {
      src: "/images/projects/cuisine-sur-mesure-laval-3.webp",
      alt: "Light wood-veneer kitchen island and veined quartz in Laval",
    },
  ],
  scope: [
    "Scoping and validation of needs",
    "Design and 3D planning",
    "Custom fabrication of cabinets and island",
    "Installation and adjustments",
  ],
  constraints: [
    "Large central island to integrate",
    "Harmony between white cabinets and light wood veneer",
    "Visible alignments (lines, joints and full-height backsplash)",
  ],
  solution: [
    "Island clad in light wood veneer to warm up the all-white palette",
    "Matching marbled quartz countertops and backsplash",
    "Glass-door pantry and full-height storage",
  ],
  results: [
    "Generous work surface around the island",
    "Warm, timeless wood/white contrast",
    "Optimized storage and consistent finish",
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
