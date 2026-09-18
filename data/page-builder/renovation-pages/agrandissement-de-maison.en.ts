import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const agrandissementMaisonPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Home addition in Montreal — turnkey general contractor",
    description:
      "Residential addition: zoning, permit, foundation, structure, envelope and service connections. RBQ-licensed general contractor.",
    path: "/services/renovation/agrandissement-de-maison",
    ogAlt: "Home addition by a general contractor",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
    { name: "Renovation", url: SITE.url + "/services/renovation" },
    {
      name: "Home addition",
      url: SITE.url + "/services/renovation/agrandissement-de-maison",
    },
  ],
  service: {
    name: "Home addition",
    description:
      "Residential addition by a general contractor: zoning verification, building permit, engineered drawings, foundation, structure, envelope, service connections and interior finishing.",
    url: SITE.url + "/services/renovation/agrandissement-de-maison",
    serviceType: "Residential addition",
    areaServed: [
      "Montreal",
      "West Island",
      "Laval",
      "South Shore",
      "Vaudreuil-Soulanges",
    ],
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Home addition",
          heading: "From zoning to foundation, through to finishing",
          description:
            "Building permit, engineered drawings, footings below the frost line and a clean tie-in to the existing house.",
          actions: [
            {
              label: "Free estimate",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Turnkey renovation",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          badges: ["Building permit", "Engineered drawings"],
          image: {
            src: "/images/generated/renovation/renovation-extension-hero-01.webp",
            alt: "Residential addition under construction",
          },
          caption: "West Island, Montreal, Laval, South Shore",
        },
      },
    },
    {
      id: "included",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "What the mandate covers",
          columns: "2",
          items: [
            {
              title: "Feasibility and permit",
              description: "What gets checked before anything is drawn.",
              icon: "fileCheck",
              bullets: [
                "Zoning: setbacks, siting, height, lot coverage",
                "Survey of foundation, structure and services",
                "Sealed drawings and permit application filed",
              ],
            },
            {
              title: "Excavation and foundation",
              description: "The part that decides how the building holds.",
              icon: "hardHat",
              bullets: [
                "Underground services located, then excavation",
                "Footings poured below the frost line",
                "Weeping tile, waterproofing and draining backfill",
              ],
            },
            {
              title: "Structure and envelope",
              description: "Close the building in before the weather decides.",
              icon: "building2",
              bullets: [
                "Framing built to the engineered drawings",
                "Bearing wall opened, loads carried by a sized beam",
                "Roof, air barrier, windows and matched cladding",
              ],
            },
            {
              title: "Connections and finishing",
              description: "The new section becomes a real part of the house.",
              icon: "wrench",
              bullets: [
                "Plumbing, electrical, heating and ventilation extended",
                "Municipal inspections before walls are closed",
                "Drywall, paint, floors levelled to the existing house",
              ],
            },
          ],
        },
      },
    },
    {
      id: "process",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "Five steps",
          steps: [
            {
              number: "1",
              title: "Feasibility",
              description:
                "Visit, survey and zoning check: setbacks, height, allowable floor area.",
            },
            {
              number: "2",
              title: "Drawings and engineer",
              description:
                "Construction drawings, load calculations and engineer-sealed structural plans.",
            },
            {
              number: "3",
              title: "Permit and contract",
              description:
                "Application filed with the city, contract signed with schedule and budget.",
            },
            {
              number: "4",
              title: "Foundation and structure",
              description:
                "Excavation, footings, drainage, framing, roof and envelope closed in.",
            },
            {
              number: "5",
              title: "Mechanical and finishing",
              description:
                "Plumbing, electrical, ventilation, inspections, drywall, floors, then handover.",
            },
          ],
        },
      },
    },
    {
      id: "types",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "The types of addition we build",
          intro:
            "The final shape depends as much on the lot and the zoning as on the original need.",
          badges: [
            "Rear addition",
            "Side addition",
            "Second storey",
            "Four-season sunroom",
            "Primary suite",
            "Attached garage",
          ],
          cardTitle: "What we weigh before deciding",
          items: [
            "The floor area allowed once setbacks are applied",
            "Whether the foundation can carry a second storey",
            "Sunlight and the impact on existing windows",
            "The position of the electrical entrance, drain and furnace",
            "Site access for excavation and deliveries",
          ],
          actions: [
            {
              label: "See kitchens",
              href: "/services/renovation/cuisine",
              variant: "ghost",
            },
            {
              label: "Talk about your project",
              href: "/contact",
              variant: "primary",
            },
          ],
        },
      },
    },
    {
      id: "faq",
      content: {
        type: "faq",
        variant: "accordion",
        props: {
          heading: "Frequently asked questions",
          items: [
            {
              q: "Do I need a permit to add on?",
              a: "Yes, always. An addition adds floor area and changes the siting of the building: that means a building permit, with site plan, sections, elevations and engineer-sealed structural drawings. We assemble the file and submit the application.",
            },
            {
              q: "Does my lot allow an addition?",
              a: "The zoning by-law sets the setbacks, the lot coverage percentage and the maximum height. We check those and your certificate of location before drawing anything. A minor exemption stays possible, with no guaranteed outcome.",
            },
            {
              q: "Do I need an engineer?",
              a: "In almost every case. The foundation, the framing and the beam replacing the opened bearing wall require load calculations. The sealed drawings go with the permit application and serve as the reference on site.",
            },
            {
              q: "How long does an addition take?",
              a: "Think in months. The administrative phase, feasibility, drawings, engineer and permit, often weighs as much as the foundation, depending on your municipality's review time. The detailed schedule is attached to the contract.",
            },
            {
              q: "What does an addition cost?",
              a: "This is the mandate with the widest spread: foundation, structure, roof and envelope all change with the lot. A serious budget is built after the visit, the zoning check and the drawings. The estimate is free.",
            },
            {
              q: "Do you build new homes?",
              a: "No. Our RBQ licence 8306-0806-27 covers renovation, conversion, additions and rebuilding, classes 1.2 and 1.3. New home construction falls under another class and a separate warranty plan that does not apply here.",
            },
          ],
        },
      },
    },
    {
      id: "cta",
      content: {
        type: "cta",
        variant: "band-split-actions",
        props: {
          heading: "An addition to validate?",
          intro:
            "We start with what your lot and your structure actually allow.",
          actions: [
            {
              label: "Free estimate",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Turnkey renovation",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          note: "RBQ licence 8306-0806-27 · Zoning, permit, engineer and foundation",
        },
      },
    },
  ],
};
