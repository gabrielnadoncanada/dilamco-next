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
        variant: "split-image",
        props: {
          eyebrow: "Pointe-Claire",
          heading:
            "General contractor in Pointe-Claire, from the Village to postwar streets",
          description:
            "A heritage house, a 1950s bungalow or a recent condo: the rules differ. RBQ licence 8306-0806-27, valid since 2004.",
          actions: [
            {
              label: "Request an estimate",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our work",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Since 2004", "SPAI files", "Insured"],
          image: {
            src: "/images/generated/renovation/renovation-bath-hero-01.webp",
            alt: "Bathroom renovation in Pointe-Claire",
          },
          caption: "From the Village to boulevard Saint-Jean",
        },
      },
    },
    {
      id: "connaissance-locale",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What we know about Pointe-Claire homes",
          description:
            "A municipality in 1854, a city in 1911. Two houses eight streets apart can follow completely different job-site logic.",
          cards: [
            {
              title: "Three building eras",
              description:
                "Village and Lakeshore: older homes, stone foundations, out-of-level floors. Cedar Park Heights and Northview: postwar bungalows.",
            },
            {
              title: "SPAI, found out too late",
              description:
                "By-law PC-2787 covers older sectors and heritage buildings: qualitative review and a longer processing time.",
            },
            {
              title: "Urban planning counter",
              description:
                "City hall, 451 boulevard Saint-Jean. Zoning PC-2775, construction by-law and the Québec Construction Code.",
            },
          ],
          columns: "1",
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
                "Waterproofing redone before the tile, original plumbing replaced where needed.",
              image: {
                src: "/images/realisations/salle-de-bain-douche-italienne-verre-01.webp",
                alt: "Renovated bathroom with tiled shower",
              },
              badges: ["Waterproofing"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Kitchen",
              href: "/services/renovation/cuisine",
              description:
                "Structure checked before any opening, especially in pre-1950 houses.",
              image: {
                src: "/images/realisations/cuisine-aire-ouverte-ilot-colonnes-01.webp",
                alt: "Kitchen renovated in a Pointe-Claire home",
              },
              badges: ["Structure"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Heritage home",
              href: "/services/renovation",
              description:
                "Levels, foundation and framing surveyed before anything is drawn.",
              image: {
                src: "/images/generated/services/service-renovation-project-03.webp",
                alt: "Interior renovation of an older Pointe-Claire home",
              },
              badges: ["Heritage"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Home addition",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Addition, second storey or sunroom, within what zoning PC-2775 allows.",
              image: {
                src: "/images/generated/renovation/renovation-extension-hero-01.webp",
                alt: "Rear addition on a single-family home",
              },
              badges: ["Permit"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Flooring",
              href: "/services/renovation/plancher",
              description:
                "Subfloor, levels and transitions redone in older houses.",
              image: {
                src: "/images/realisations/plancher-bois-franc-neuf-01.webp",
                alt: "Hardwood floor installed in a home",
              },
              badges: ["Hardwood"],
              footerCtaLabel: "See the service",
            },
          ],
        },
      },
    },
    {
      id: "preuves",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "The rules confirmed before the quote",
          intro:
            "In Pointe-Claire the risk is not the workmanship. It is starting without knowing which rules the project falls under.",
          badges: ["Since 2004", "5.0 on Google", "Insured"],
          cardTitle: "What you can verify",
          items: [
            "RBQ licence 8306-0806-27 since 7 September 2004",
            "General contractor classes 1.2 and 1.3",
            "No claims on the licence record",
            "Liability insurance and site coverage",
            "SPAI status checked during scoping",
            "Custom cabinets in the same contract",
          ],
          actions: [
            {
              label: "See our services",
              href: "/services/renovation",
              variant: "primary",
            },
            {
              label: "Request an estimate",
              href: "/contact",
              variant: "ghost",
            },
          ],
        },
      },
    },
    {
      id: "secteurs",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Neighbouring cities we serve",
          columns: "3",
          items: [
            { title: "Dorval", href: "/zones/dorval" },
            { title: "Beaconsfield", href: "/zones/beaconsfield" },
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
              q: "Where do I file a permit application in Pointe-Claire?",
              a: "At the urban planning counter, on the first floor of city hall, 451 boulevard Saint-Jean. The department takes residential and commercial applications there. We prepare the file and submit it.",
            },
            {
              q: "What is SPAI and does it apply to me?",
              a: "The Site Planning and Architectural Integration by-law (PC-2787) supplements zoning and covers heritage buildings and older sectors in particular. We check your address during scoping.",
            },
            {
              q: "Does an SPAI project take longer?",
              a: "Yes. The city allows a longer processing time than an ordinary application, since the project goes through a qualitative review. We put that delay in the schedule from the start.",
            },
            {
              q: "Do you renovate the older homes in the Village?",
              a: "Yes. Foundation, floor levels, framing and systems added in layers are surveyed before anything is drawn. The budget carries a margin for what shows up on opening, and every scope change is written down.",
            },
            {
              q: "Can a condo be renovated in Pointe-Claire?",
              a: "Yes, notably in the Lakeside sector. Co-ownership constraints are framed early: permitted work hours, elevator access, protection of common areas, soundproofing and common elements that cannot be touched.",
            },
            {
              q: "How much does a renovation cost in Pointe-Claire?",
              a: "Our projects start around $25,000. A complete kitchen lands between $35,000 and $50,000. In an older home the real scope depends on what sits behind the finishes. Free estimate.",
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
          heading: "A project in Pointe-Claire?",
          intro:
            "We come see the house, confirm which rules apply, and come back with a price.",
          actions: [
            {
              label: "Request an estimate",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our service areas",
              href: "/zones",
              variant: "ghost",
            },
          ],
          note: "Dilamco · General contractor, RBQ licence 8306-0806-27 · West Island",
        },
      },
    },
  ],
};
