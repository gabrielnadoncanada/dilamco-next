import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const pageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Residential renovation and construction services",
    description:
      "General contractor in Montreal: kitchen, bathroom, basement, flooring, addition, disaster rebuild. RBQ licence, written contract.",
    path: "/services",
    ogAlt: "Dilamco renovation services, general contractor",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
  ],
  service: {
    name: "General contracting services",
    description:
      "Residential and commercial renovation coordinated by a general contractor holding RBQ licence 8306-0806-27: permits, trades, schedule and written contract.",
    url: SITE.url + "/services",
    serviceType: "General contractor, renovation",
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
        variant: "centered",
        props: {
          badges: ["RBQ 8306-0806-27", "Since 2004", "Written contract"],
          heading: "Two divisions, one contractor accountable for both",
          description:
            "Residential and commercial renovation on one side, custom cabinetry on the other, under the same contract.",
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
        },
      },
    },
    {
      id: "renovation-types",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "What we take charge of",
          items: [
            {
              title: "Kitchen",
              href: "/services/renovation/cuisine",
              description:
                "A room stripped bare, rebuilt and reconnected by one crew.",
              image: {
                src: "/images/realisations/cuisine-shaker-en-u-dosseret-metro-01.webp",
                alt: "U-shaped shaker kitchen with subway tile backsplash",
              },
              badges: ["Multi-trade"],
              footerCtaLabel: "See the kitchen",
            },
            {
              title: "Bathroom",
              href: "/services/renovation/salle-de-bain",
              description:
                "Waterproofing, slope and exhaust before a single tile.",
              image: {
                src: "/images/realisations/salle-de-bain-marbre-meuble-lavabo-flottant-01.webp",
                alt: "Bathroom with floating vanity and marble surfaces",
              },
              badges: ["Waterproofing"],
              footerCtaLabel: "See the bathroom",
            },
            {
              title: "Basement",
              href: "/services/renovation/sous-sol",
              description:
                "Moisture diagnosis, permit, egress, then the finishing work.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-salle-jeux-01.webp",
                alt: "Basement turned into a games room",
              },
              badges: ["Permit"],
              footerCtaLabel: "See the basement",
            },
            {
              title: "Flooring",
              href: "/services/renovation/plancher",
              description:
                "Tear-out, substrate corrected, levelling, install and thresholds.",
              image: {
                src: "/images/realisations/plancher-bois-franc-neuf-01.webp",
                alt: "Hardwood flooring installed in a home",
              },
              badges: ["Hardwood"],
              footerCtaLabel: "See the flooring",
            },
            {
              title: "Addition",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Setbacks, foundation, framing and the tie-in to the house.",
              image: {
                src: "/images/generated/renovation/renovation-extension-hero-01.webp",
                alt: "Rear addition on a single-family home",
              },
              badges: ["Engineer"],
              footerCtaLabel: "See the addition",
            },
            {
              title: "Disaster rebuild",
              href: "/services/renovation/apres-sinistre",
              description:
                "Findings, itemized quote and restoration once drying is done.",
              image: {
                src: "/images/generated/services/service-renovation-project-01.webp",
                alt: "Room restored after a loss",
              },
              badges: ["Insurance"],
              footerCtaLabel: "See disaster rebuild",
            },
            {
              title: "Commercial fit-out",
              href: "/espaces/commercial",
              description:
                "Offices, storefronts and leasehold improvements, RBQ category 1.3.",
              image: {
                src: "/images/generated/spaces/espaces-card-commercial-01.webp",
                alt: "Commercial fit-out delivered ready to occupy",
              },
              badges: ["RBQ 1.3"],
              footerCtaLabel: "See commercial",
            },
            {
              title: "Cabinet design",
              href: "/services/design",
              description:
                "Layout, finishes and hardware settled before the order goes in.",
              image: {
                src: "/images/generated/services/service-design-hero-01.webp",
                alt: "Custom cabinet design session",
              },
              badges: ["Subcategory 12"],
              footerCtaLabel: "See the design",
            },
            {
              title: "Cabinet production",
              href: "/services/fabrication",
              description:
                "Boxes and fronts produced by our partner factory.",
              image: {
                src: "/images/generated/services/service-fabrication-hero-01.webp",
                alt: "Custom cabinet boxes and fronts",
              },
              badges: ["Made to measure"],
              footerCtaLabel: "See production",
            },
            {
              title: "Installation",
              href: "/services/installation",
              description:
                "Setting, door alignment and appliance hook-ups on site.",
              image: {
                src: "/images/generated/services/service-installation-hero-01.webp",
                alt: "Custom cabinets installed during a renovation",
              },
              badges: ["Our crews"],
              footerCtaLabel: "See the installation",
            },
          ],
        },
      },
    },
    {
      id: "en-bref",
      frame: { surface: "muted" },
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "The company at a glance",
          intro: "The verifiable facts before you hand us a job site.",
          rows: [
            {
              label: "Licence",
              value: "8306-0806-27, issued 7 September 2004, no restriction",
            },
            {
              label: "Categories",
              value: "1.2 and 1.3, plus subcategory 12, cabinets and countertops",
            },
            {
              label: "New houses",
              value: "We build none, only work on existing buildings",
            },
            {
              label: "Base",
              value: "Pierrefonds-Roxboro, in the West Island",
            },
            {
              label: "Point of contact",
              value: "One person accountable, from quote to final payment",
            },
            {
              label: "Estimate",
              value: "Free, on site, with no obligation",
            },
          ],
          note: "Licence verifiable in the Régie du bâtiment du Québec register.",
        },
      },
    },
    {
      id: "cta",
      content: {
        type: "cta",
        variant: "band-split-actions",
        props: {
          heading: "Which service fits your project?",
          intro:
            "Describe the room or the building. We will tell you which division handles it.",
          actions: [
            {
              label: "Free estimate",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our service areas",
              href: "/zones",
              variant: "ghost",
            },
          ],
          note: "RBQ licence 8306-0806-27 · West Island and Greater Montreal",
        },
      },
    },
  ],
};
