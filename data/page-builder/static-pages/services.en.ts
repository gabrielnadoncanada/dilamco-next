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
          heading: "Residential and commercial renovation, plus custom cabinets",
          description:
            "A licensed general contractor renovates your rooms and supplies your cabinets, under the same contract.",
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
                "We demolish, redo the plumbing and install the cabinets.",
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
                "We seal the shower before a single tile goes on.",
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
                "We check the moisture, get the permit, then finish.",
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
                "We tear out, fix what is underneath, then lay the new floor.",
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
                "We add a room and tie it into your house.",
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
                "We put the house back together after water or fire.",
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
                "We fit out offices and storefronts, under RBQ category 1.3.",
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
                "We draw your cabinets and choose the finishes with you.",
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
                "Your cabinets are produced by our partner factory.",
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
                "We set the cabinets, align the doors and hook everything up.",
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
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "What you should know about Dilamco",
          intro: "The verifiable facts before you hand us a job site.",
          rows: [
            {
              label: "Our RBQ licence",
              value: "Number 8306-0806-27, issued on 7 September 2004, with no restriction",
            },
            {
              label: "What the licence covers",
              value: "Categories 1.2 and 1.3, plus cabinets and countertops",
            },
            {
              label: "Do you build new houses",
              value: "No. We only work on buildings that already exist",
            },
            {
              label: "Where we are",
              value: "In Pierrefonds-Roxboro, in the West Island",
            },
            {
              label: "Who looks after you",
              value: "The same person, from the quote to the final payment",
            },
            {
              label: "What an estimate costs",
              value: "Nothing. We come to you and there is no obligation",
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
            "Describe the room or the building. We will tell you which team handles it.",
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
