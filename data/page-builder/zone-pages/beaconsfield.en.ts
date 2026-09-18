import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneBeaconsfieldPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "General contractor in Beaconsfield",
    description:
      "RBQ-licensed general contractor in Beaconsfield: major renovations, additions, kitchens and basements, with zoning by-law 720 and tree permits handled.",
    path: "/zones/beaconsfield",
    ogAlt: "Home renovation in Beaconsfield by Dilamco",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Service areas", url: SITE.url + "/zones" },
    { name: "Beaconsfield", url: SITE.url + "/zones/beaconsfield" },
  ],
  service: {
    name: "General contractor in Beaconsfield",
    description:
      "Major home renovation, additions, kitchens, bathrooms and basements in Beaconsfield, by an RBQ-licensed West Island general contractor.",
    url: SITE.url + "/zones/beaconsfield",
    serviceType: "Residential renovation",
    areaServed: [
      "Beaconsfield",
      "Beaurepaire",
      "Kensington Gardens",
      "Forest Garden",
      "Drummond Park",
      "Beacon Hill",
      "Sherwood",
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
          heading: "Beaconsfield",
          description:
            "Houses built from 1951 to 1963, on wooded lots where every tree falls under a by-law.",
          actions: [
            {
              label: "Free quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our projects",
              href: "/projets",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/spaces/espaces-hero-overview-01.webp",
            alt: "Renovated interior of a Beaconsfield home",
          },
          facts: [
            { label: "Our base", value: "Pierrefonds-Roxboro, twenty-five minutes" },
            { label: "Permits", value: "Planning department, 514 428-4430" },
            { label: "Housing stock", value: "Homes from 1951 to 1963, wooded lots" },
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
          heading: "A town built in fifteen years",
          intro:
            "From 990 residents in 1951 to 16,800 in 1967, over 1,050 hectares of which 5% were ceded as green space.",
          rows: [
            {
              label: "Dated neighbourhoods",
              value: "Kensington Gardens 1951, Drummond Park 1955, Sherwood 1963",
            },
            {
              label: "Original village",
              value: "Beaurepaire, settled from 1925, near the station",
            },
            {
              label: "Zoning",
              value: "By-law 720, consolidated 1 August 2025",
            },
            {
              label: "Tree felling",
              value: "Permit required, replacement mandatory, refundable deposit",
            },
            {
              label: "Common projects",
              value: "Whole-house redo, kitchen, bathroom, rear addition",
            },
            {
              label: "Drive time",
              value: "Twenty-five minutes along Highway 40",
            },
          ],
          image: {
            src: "/images/generated/spaces/espaces-card-cuisine-01.webp",
            alt: "Kitchen rebuilt in a Beaconsfield home",
          },
          note: "Sources: City of Beaconsfield, Wikipedia. Verified 2026-09-18.",
        },
      },
    },
    {
      id: "services",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "What we build in Beaconsfield",
          items: [
            {
              title: "Major renovation",
              href: "/services/renovation",
              description:
                "A 1955 house taken back and rebuilt in a single sequence",
              image: {
                src: "/images/generated/services/service-renovation-project-01.webp",
                alt: "Major renovation of a Beaconsfield house",
              },
              badges: ["Turnkey"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Addition",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Siting drawn around the trees that by-law 720 protects",
              image: {
                src: "/images/generated/renovation/renovation-extension-approach-01.webp",
                alt: "Planning an addition on a wooded Beaconsfield lot",
              },
              badges: ["Tree permit"],
              footerCtaLabel: "See additions",
            },
            {
              title: "Bathroom",
              href: "/services/renovation/salle-de-bain",
              description:
                "Exhaust vented outdoors, not into a Beacon Hill bungalow attic",
              image: {
                src: "/images/generated/spaces/space-bath-hero-01.webp",
                alt: "Bathroom renovated in a Beacon Hill home",
              },
              badges: ["Waterproofing"],
              footerCtaLabel: "See bathrooms",
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
          heading: "Towns we serve around Beaconsfield",
          columns: "3",
          items: [
            { title: "Kirkland", href: "/zones/kirkland" },
            { title: "Pointe-Claire", href: "/zones/pointe-claire" },
            { title: "Dorval", href: "/zones/dorval" },
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
              q: "Can I fell a tree to build an addition in Beaconsfield?",
              a: "Only with a permit. A tree standing less than three metres from the footprint of a planned structure may be felled, but only if the building cannot be sited elsewhere.",
            },
            {
              q: "What does the Beaconsfield felling certificate cost?",
              a: "A $500 deposit covers the first five trees, then $100 per additional tree. The city refunds it once replacement is completed under the conditions of the by-law.",
            },
            {
              q: "Does zoning by-law 720 limit my rear addition?",
              a: "It sets siting, setbacks and heights, in the version consolidated on 1 August 2025. The planning advisers confirm what your zone allows before anything is drawn.",
            },
            {
              q: "Is it better to renovate in stages in Beaconsfield?",
              a: "Rarely. In neighbourhoods built between 1951 and 1963, roof, windows, plumbing and wiring reach end of life together. One sequence avoids paying twice for setup and site protection.",
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
          heading: "Your Beaconsfield home",
          intro: "Lot, trees and building surveyed before pricing.",
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
          note: "Dilamco · permits and tree filings handled in Beaconsfield",
        },
      },
    },
  ],
};
