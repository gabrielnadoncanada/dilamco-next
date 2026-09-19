import type { ProjectData } from "@/types/projects";
import {
  CORE_HREF,
  SPACE_GALLERY_HREF,
  SPACE_HREF,
} from "@/constants/projects";

export const PROJECT_CUISINE_SUR_MESURE_TERREBONNE_EN: ProjectData = {
  space: "cuisine",
  slug: "cuisine-sur-mesure-terrebonne",
  title: "Custom kitchen cabinets, Terrebonne",
  metaDescription:
    "Custom kitchen cabinet project in Terrebonne: modern minimalist handleless high-gloss white kitchen with calacatta quartz countertops. Design, fabrication and installation.",
  summary:
    "Custom kitchen completed in Terrebonne: modern handleless high-gloss white cabinets, full-height calacatta quartz backsplash and countertops for a sleek, high-end look.",
  area: "other",
  city: "Terrebonne",
  images: [
    {
      src: "/images/projects/cuisine-sur-mesure-terrebonne-1.webp",
      alt: "Modern custom kitchen in Terrebonne with high-gloss white finish and calacatta quartz countertop",
    },
    {
      src: "/images/projects/cuisine-sur-mesure-terrebonne-2.webp",
      alt: "Handleless white kitchen cabinets and quartz island in Terrebonne",
    },
  ],
  scope: [],
  constraints: [
    "Handleless doors with channel-pull opening",
    "Full-height quartz backsplash to connect to the countertops",
  ],
  solution: [
    "High-gloss white handleless cabinets",
    "Matching calacatta quartz countertops and backsplash",
    "Glossy central island offering work surface and storage",
  ],
  results: [],
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
