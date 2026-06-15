import type { ProjectData } from "@/types/projects";
import {
  CORE_HREF,
  SPACE_GALLERY_HREF,
  SPACE_HREF,
} from "@/constants/projects";

export const PROJECT_VANITE_SUR_MESURE_LAVAL_EN: ProjectData = {
  space: "salle-de-bain",
  slug: "vanite-sur-mesure-laval",
  title: "Custom vanity, Laval",
  metaDescription:
    "Custom vanity project in Laval: design, fabrication and installation. An example of a durable, moisture-resistant solution.",
  summary:
    "Custom vanity designed for a humid environment: suitable materials, reliable hardware and precise installation.",
  area: "laval",
  city: "Laval",
  images: [
    {
      src: "/images/generated/spaces/space-bath-hero-01.webp",
      alt: "Custom bathroom vanity in Laval",
    },
  ],
  scope: ["Scoping", "Design", "Custom fabrication", "Installation"],
  constraints: [
    "Humidity and maintenance",
    "Functional storage in a compact space",
    "Durable finish",
  ],
  solution: [
    "Storage configuration suited to everyday use",
    "Choice of stable, resistant materials",
    "Installation with fine adjustments and clean alignments",
  ],
  results: [
    "More functional storage",
    "Improved moisture resistance",
    "Clean, durable finish",
  ],
  requiredLinks: {
    spaceHref: SPACE_HREF["salle-de-bain"],
    renovationHref: CORE_HREF.renovation,
    materialHref: CORE_HREF.plywood,
    contactHref: CORE_HREF.contact,
  },
  optionalLinks: {
    galleryHref: SPACE_GALLERY_HREF["salle-de-bain"],
    installationHref: CORE_HREF.installation,
  },
  materials: [
    { title: "Why plywood", href: CORE_HREF.plywood },
    { title: "Hardware", href: CORE_HREF.hardware },
    {
      title: "Materials comparison",
      href: CORE_HREF.materialsComparison,
    },
  ],
  services: [
    { title: "Design", href: CORE_HREF.design },
    { title: "Fabrication", href: CORE_HREF.fabrication },
    { title: "Installation", href: CORE_HREF.installation },
    { title: "Turnkey renovation", href: CORE_HREF.renovation },
  ],
};
