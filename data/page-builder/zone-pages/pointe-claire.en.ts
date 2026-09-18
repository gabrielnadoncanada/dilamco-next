import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zonePointeClairePageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "General contractor in Pointe-Claire",
    description:
      "RBQ-licensed general contractor in Pointe-Claire: renovations, bathrooms, kitchens, additions. Site Planning and Architectural Integration files handled.",
    path: "/zones/pointe-claire",
    ogAlt: "Home renovation in Pointe-Claire by Dilamco",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Service areas", url: SITE.url + "/zones" },
    { name: "Pointe-Claire", url: SITE.url + "/zones/pointe-claire" },
  ],
  service: {
    name: "General contractor in Pointe-Claire",
    description:
      "Home renovation, additions and conversions in Pointe-Claire, including sectors subject to the Site Planning and Architectural Integration by-law, by an RBQ-licensed general contractor.",
    url: SITE.url + "/zones/pointe-claire",
    serviceType: "Residential renovation",
    areaServed: [
      "Pointe-Claire",
      "Pointe-Claire Village",
      "Valois",
      "Cedar Park",
      "Lakeside",
      "Northview",
      "West Island",
      "Montréal",
    ],
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "zone",
        props: {
          eyebrow: "General contractor in",
          heading: "Pointe-Claire",
          description:
            "From the 1854 Village to the post-war streets, two neighbouring houses can fall under different rules.",
          actions: [
            {
              label: "Free quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See bathrooms",
              href: "/services/renovation/salle-de-bain",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-bath-hero-01.webp",
            alt: "Renovated bathroom in a Pointe-Claire home",
          },
          facts: [
            { label: "Our base", value: "Pierrefonds-Roxboro, twenty minutes" },
            { label: "Permits", value: "Planning counter, 451 boul. Saint-Jean" },
            { label: "Housing stock", value: "Heritage homes and post-war bungalows" },
            { label: "First reply", value: "24 to 48 business hours" },
          ],
        },
      },
    },
    {
      id: "fiche",
      content: {
        type: "split",
        variant: "fact-sheet",
        props: {
          heading: "Three building eras on one territory",
          intro:
            "A municipality in 1854, a city in 1911, two railways in the nineteenth century, then a suburban wave after 1945.",
          rows: [
            {
              label: "Older sectors",
              value: "The Village and the Lakeshore, stone foundations",
            },
            {
              label: "Post-war sectors",
              value: "Cedar Park Heights, Northview, Oneida, Valois",
            },
            {
              label: "SPAIP",
              value: "By-law PC-2787, qualitative review of the project",
            },
            {
              label: "Zoning",
              value: "PC-2775, codified 10 December 2024",
            },
            {
              label: "Common projects",
              value: "Bathroom, kitchen, levelled floor, rear addition",
            },
            {
              label: "Drive time",
              value: "Twenty minutes along boulevard Saint-Jean",
            },
          ],
          image: {
            src: "/images/generated/services/service-renovation-project-03.webp",
            alt: "Interior renovation of an older home in Pointe-Claire Village",
          },
          note: "Sources: City of Pointe-Claire, Wikipedia. Verified 2026-09-18.",
        },
      },
    },
    {
      id: "services",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "What we build in Pointe-Claire",
          items: [
            {
              title: "Bathroom",
              href: "/services/renovation/salle-de-bain",
              description:
                "Original Lakeshore plumbing replaced back to the supply line",
              image: {
                src: "/images/realisations/salle-de-bain-douche-italienne-verre-01.webp",
                alt: "Bathroom rebuilt in a Lakeshore house",
              },
              badges: ["Waterproofing"],
              footerCtaLabel: "See bathrooms",
            },
            {
              title: "Older home",
              href: "/services/renovation",
              description:
                "Levels, stone foundation and framing surveyed before the first drawing",
              image: {
                src: "/images/generated/services/service-renovation-hero-01.webp",
                alt: "Renovation job site in Pointe-Claire Village",
              },
              badges: ["Heritage"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Flooring",
              href: "/services/renovation/plancher",
              description:
                "Subfloor and transitions rebuilt when the house is a century old",
              image: {
                src: "/images/realisations/plancher-bois-franc-neuf-01.webp",
                alt: "Hardwood floor laid in a Pointe-Claire home",
              },
              badges: ["Hardwood"],
              footerCtaLabel: "See flooring",
            },
          ],
        },
      },
    },
    {
      id: "voisins",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Pointe-Claire neighbours we serve",
          columns: "2",
          items: [
            { title: "Dorval", href: "/zones/dorval" },
            { title: "Beaconsfield", href: "/zones/beaconsfield" },
            { title: "Kirkland", href: "/zones/kirkland" },
            {
              title: "Dollard-des-Ormeaux",
              href: "/zones/dollard-des-ormeaux",
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
              q: "Is my Pointe-Claire address subject to SPAIP?",
              a: "By-law PC-2787 covers heritage-interest buildings and older sectors such as the Village. We check your address at the planning counter before pricing anything.",
            },
            {
              q: "Does a SPAIP file stretch the schedule?",
              a: "Yes. The city reviews the project against qualitative criteria, which takes longer than an ordinary application. That delay appears in the schedule at quote time, never mid-job.",
            },
            {
              q: "Do you renovate older homes in the Village?",
              a: "We do. Floor levels, the stone foundation and systems added in layers get surveyed first. The budget carries a margin for whatever shows up once walls are open.",
            },
            {
              q: "What does a bathroom cost in Pointe-Claire?",
              a: "In a pre-1950 house, plumbing and subfloor weigh as much as the finishes. A mandate starts near $25,000 and the scope is set after the survey. Estimates are free.",
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
          heading: "Your Pointe-Claire home",
          intro: "We confirm which rules apply before pricing.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See service areas",
              href: "/zones",
              variant: "ghost",
            },
          ],
          note: "Dilamco · Pointe-Claire SPAIP files prepared",
        },
      },
    },
  ],
};
