import type { ProjectData } from "@/types/projects";
import {
  CORE_HREF,
  SPACE_GALLERY_HREF,
  SPACE_HREF,
} from "@/constants/projects";

export const PROJECT_CUISINE_SUR_MESURE_REPENTIGNY_EN: ProjectData = {
  space: "cuisine",
  slug: "cuisine-sur-mesure-repentigny",
  title: "Custom kitchen cabinets, Repentigny",
  metaDescription:
    "Custom kitchen cabinet project in Repentigny: classic white kitchen with raised-panel doors, crown moulding and quartz countertops. Design, fabrication and installation.",
  summary:
    "Custom kitchen completed in Repentigny: white raised-panel cabinets, crown moulding and a central island, with ceramic backsplash and veined quartz countertops.",
  area: "other",
  city: "Repentigny",
  images: [
    {
      src: "/images/projects/cuisine-sur-mesure-repentigny-1.webp",
      alt: "Classic white custom kitchen in Repentigny with island and mouldings",
    },
    {
      src: "/images/projects/cuisine-sur-mesure-repentigny-2.webp",
      alt: "White raised-panel kitchen cabinets and ceramic backsplash in Repentigny",
    },
  ],
  scope: [
    "Scoping and validation of needs",
    "Classic design and planning",
    "Custom fabrication of cabinets and island",
    "Installation and adjustments",
  ],
  constraints: [
    "Classic raised-panel style with crown moulding",
    "Integrating a central island with sink",
    "Visible alignments on a large cabinet wall",
  ],
  solution: [
    "White raised-panel cabinets with crown moulding",
    "Matching central island offering storage and work surface",
    "Elongated ceramic backsplash and veined quartz countertops",
  ],
  results: [
    "Timeless, bright classic kitchen",
    "Functional island at the heart of the room",
    "Optimized storage and careful finish",
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
