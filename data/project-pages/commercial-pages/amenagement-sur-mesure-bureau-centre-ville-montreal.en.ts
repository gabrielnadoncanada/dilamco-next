import type { ProjectData } from "@/types/projects";
import {
  CORE_HREF,
  SPACE_GALLERY_HREF,
  SPACE_HREF,
} from "@/constants/projects";

export const PROJECT_AMENAGEMENT_SUR_MESURE_BUREAU_CENTRE_VILLE_MONTREAL_EN: ProjectData =
  {
    space: "commercial",
    slug: "amenagement-sur-mesure-bureau-centre-ville-montreal",
    title: "Custom fit-out, office (Downtown Montréal)",
    metaDescription:
      "Custom commercial project: office fit-out in Montréal. Heavy use, durability, coordination and precise installation.",
    summary:
      "Commercial fit-out designed for heavy use: rugged modules, hardware selection and a clean finish in visible areas.",
    area: "montreal",
    city: "Montréal",
    neighborhood: "Centre-ville",
    images: [
      {
        src: "/images/generated/spaces/space-commercial-hero-01.webp",
        alt: "Custom office fit-out in downtown Montréal",
      },
    ],
    scope: [
      "Scoping the mandate (use, constraints, deadline)",
      "Planning and validation of dimensions",
      "Custom fabrication",
      "Installation and adjustments",
    ],
    constraints: [
      "Tight schedule",
      "Limited access (work windows)",
      "Heavy use and frequent maintenance",
    ],
    solution: [
      "Rugged modules suited to high usage cycles",
      "Hardware selection consistent with the use",
      "Installation with clean alignments and finishes",
    ],
    results: [
      "Optimized storage and improved circulation",
      "Greater durability (heavy use)",
      "Consistent finish in public areas",
    ],
    requiredLinks: {
      spaceHref: SPACE_HREF.commercial,
      renovationHref: CORE_HREF.renovation,
      materialHref: CORE_HREF.hardware, // commercial: hardware is often the strongest sales angle
      contactHref: CORE_HREF.contact,
    },
    optionalLinks: {
      galleryHref: SPACE_GALLERY_HREF.commercial,
      installationHref: CORE_HREF.installation,
    },
    materials: [
      { title: "Hardware", href: CORE_HREF.hardware },
      {
        title: "Materials comparison",
        href: CORE_HREF.materialsComparison,
      },
      { title: "Why plywood", href: CORE_HREF.plywood },
    ],
    services: [
      { title: "Design", href: CORE_HREF.design },
      { title: "Fabrication", href: CORE_HREF.fabrication },
      { title: "Installation", href: CORE_HREF.installation },
      {
        title: "Turnkey renovation (coordination)",
        href: CORE_HREF.renovation,
      },
    ],
  };
