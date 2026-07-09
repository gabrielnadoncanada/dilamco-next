import type { ProjectData } from "@/types/projects";
import {
  CORE_HREF,
  SPACE_GALLERY_HREF,
  SPACE_HREF,
} from "@/constants/projects";

export const PROJECT_CUISINE_SUR_MESURE_BROSSARD_EN: ProjectData = {
  space: "cuisine",
  slug: "cuisine-sur-mesure-brossard",
  title: "Custom kitchen cabinets, Brossard",
  metaDescription:
    "Custom kitchen cabinet project in Brossard: two-tone kitchen (white upper cabinets, navy blue bases) with marbled quartz countertops. Design, fabrication and installation.",
  summary:
    "Custom kitchen completed in Brossard: a two-tone play between white upper cabinets and navy blue bases, veined quartz countertops and elongated hardware for a contemporary look.",
  area: "rive-sud",
  city: "Brossard",
  images: [
    {
      src: "/images/projects/cuisine-sur-mesure-brossard-1.webp",
      alt: "Two-tone custom kitchen in Brossard with white cabinets and navy blue bases",
    },
    {
      src: "/images/projects/cuisine-sur-mesure-brossard-2.webp",
      alt: "Navy blue kitchen cabinets and marbled quartz countertop in Brossard",
    },
  ],
  scope: [
    "Scoping and validation of needs",
    "Design and selection of the two tones",
    "Custom fabrication of cabinets",
    "Installation and adjustments",
  ],
  constraints: [
    "U-shaped layout in an enclosed space",
    "Balancing the two tones (white on top, navy at the base)",
    "Integrating black stainless steel appliances",
  ],
  solution: [
    "Navy blue bases and white upper cabinets for a controlled contrast",
    "Marbled quartz countertops and backsplash to unify the whole",
    "Matching elongated hardware and optimized storage",
  ],
  results: [
    "A current, bright two-tone kitchen",
    "Optimized storage across three walls",
    "Consistent finish and clean lines",
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
