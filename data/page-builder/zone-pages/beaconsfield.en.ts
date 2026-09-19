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
            "Major renovations and additions for Beaconsfield homes, on wooded lots where tree felling is regulated.",
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
            {
              label: "Our base",
              value: "Pierrefonds-Roxboro, twenty-five minutes away",
            },
            {
              label: "Where to apply for the permit",
              value: "City planning department, 514 428-4430",
            },
            {
              label: "Type of homes",
              value: "Houses from 1951 to 1963, on wooded lots",
            },
            {
              label: "First reply",
              value: "We get back to you within 24 to 48 business hours",
            },
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
          heading: "What we know about Beaconsfield homes",
          rows: [
            {
              label: "Age of the neighbourhoods",
              value:
                "Kensington Gardens dates from 1951, Drummond Park from 1955 and Sherwood from 1963.",
            },
            {
              label: "The original village",
              value:
                "Beaurepaire, near the station, has been settled since 1925 and its houses are older.",
            },
            {
              label: "What is different here",
              value:
                "Felling a tree needs a permit, a replacement, and a deposit the city refunds afterwards.",
            },
            {
              label: "What the city checks",
              value:
                "The zoning by-law says where the building can sit, which setbacks apply and how high you may go.",
            },
            {
              label: "Common projects",
              value:
                "Taking a house back to the studs, redoing a kitchen or bathroom, adding on at the back.",
            },
            {
              label: "From our base",
              value: "Twenty-five minutes of driving along Highway 40.",
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
          heading: "Our services in Beaconsfield",
          items: [
            {
              title: "Major renovation",
              href: "/services/renovation",
              description:
                "We take a 1955 house back and rebuild it in a single sequence",
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
                "We place the addition around the trees the city by-law protects",
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
                "We vent the exhaust outdoors rather than into the attic",
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
          heading: "Also served near Beaconsfield",
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
              a: "Only with a permit. A tree standing less than three metres from the planned structure may be felled, but only if the building cannot be placed elsewhere on the lot.",
            },
            {
              q: "What does the Beaconsfield tree permit cost?",
              a: "A $500 deposit covers the first five trees, then $100 per additional tree. The city refunds that deposit once the trees are replaced under the conditions of the by-law.",
            },
            {
              q: "Does the zoning by-law limit my addition in Beaconsfield?",
              a: "Yes. It says where the building can sit, which setbacks apply and how high you may go, in its 1 August 2025 version. The planning advisers confirm what your zone allows before anything is drawn.",
            },
            {
              q: "Is it better to renovate in stages in Beaconsfield?",
              a: "Rarely. In neighbourhoods built between 1951 and 1963, the roof, the windows, the plumbing and the wiring reach end of life together. Doing it all at once avoids paying twice to set up the site.",
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
          heading: "A project in Beaconsfield?",
          intro:
            "We survey the lot, the trees and the house before giving you a price.",
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
        },
      },
    },
  ],
};
