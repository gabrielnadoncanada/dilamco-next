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
        variant: "split-image",
        props: {
          eyebrow: "Beaconsfield",
          heading:
            "General contractor in Beaconsfield, major renovations and additions",
          description:
            "Houses built between 1951 and 1963, taken on in full, on wooded lots where every tree is regulated.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our projects",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Major renovation", "Additions", "Insured"],
          image: {
            src: "/images/generated/spaces/espaces-hero-overview-01.webp",
            alt: "Interior renovation of a Beaconsfield home",
          },
          caption: "Beaurepaire, Beacon Hill, Sherwood, Lakeshore",
        },
      },
    },
    {
      id: "connaissance-locale",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What we know about Beaconsfield homes",
          description:
            "A city built in fifteen years, from 990 residents in 1951 to 16,800 in 1967. Wooded lots, a regulated canopy, houses sixty to seventy-five years old.",
          cards: [
            {
              title: "Homes built 1951 to 1963",
              description:
                "Kensington Gardens 1951, Forest Garden 1954, Drummond Park 1955, Beacon Hill 1962, Sherwood 1963.",
            },
            {
              title: "Beaconsfield planning and permits",
              description:
                "The city's urban planning and building inspection advisors confirm whether a project needs a permit.",
            },
            {
              title: "The canopy is regulated",
              description:
                "No tree cut without a permit, replacement required, siting driven by zoning by-law 720.",
            },
          ],
          columns: "3",
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
                "The whole house taken on in one sequence, one written schedule.",
              image: {
                src: "/images/generated/services/service-renovation-project-01.webp",
                alt: "Major renovation of a 1950s house",
              },
              badges: ["Turnkey"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Kitchen",
              href: "/services/renovation/cuisine",
              description:
                "Load-bearing wall analyzed and beam sized before demolition.",
              image: {
                src: "/images/generated/spaces/espaces-card-cuisine-01.webp",
                alt: "Renovated kitchen in a West Island home",
              },
              badges: ["Structure"],
              footerCtaLabel: "See kitchens",
            },
            {
              title: "Bathroom",
              href: "/services/renovation/salle-de-bain",
              description:
                "Full waterproofing membrane before tile, ventilation vented outside.",
              image: {
                src: "/images/generated/spaces/space-bath-hero-01.webp",
                alt: "Renovated bathroom in a Beaconsfield home",
              },
              badges: ["Waterproofing"],
              footerCtaLabel: "See bathrooms",
            },
            {
              title: "Home addition",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Siting drawn around the trees to keep, under zoning by-law 720.",
              image: {
                src: "/images/generated/renovation/renovation-extension-approach-01.webp",
                alt: "Planning an addition in Beaconsfield",
              },
              badges: ["Permit"],
              footerCtaLabel: "See additions",
            },
            {
              title: "Basement",
              href: "/services/renovation/sous-sol",
              description:
                "Moisture and drainage assessed before insulating and closing up.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
                alt: "Basement finished as a living space",
              },
              badges: ["Insulation"],
              footerCtaLabel: "See basements",
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
              q: "Do I need a permit to renovate in Beaconsfield?",
              a: "In most cases, yes. The city's urban planning and building inspection advisors confirm whether one is required, as soon as structure, envelope or siting is involved. We prepare and file the application.",
            },
            {
              q: "Can I cut a tree to make room for my addition?",
              a: "Not without a permit. A tree within 3 m of the footprint of a proposed construction may be cut, but only if the building cannot be located elsewhere on the lot. No authorization is needed under 10 cm trunk diameter, measured 1.5 m above ground.",
            },
            {
              q: "What does the tree-cutting certificate cost?",
              a: "A $500 deposit for the first five trees, plus $100 per additional tree. It is refunded once replacement is completed under the conditions of zoning by-law 720.",
            },
            {
              q: "Should I renovate in stages?",
              a: "Rarely, when several systems reach end of life together. Every small project pays again for mobilization, site protection and finishing. One sequence usually costs less overall. The work can still be split into contractual phases.",
            },
            {
              q: "What does a renovation cost in Beaconsfield?",
              a: "Our projects start around $25,000. A full kitchen lands between $35,000 and $50,000 and up. A major renovation or an addition sits above that range. Estimates are free.",
            },
            {
              q: "Are you licensed and insured?",
              a: "RBQ licence 8306-0806-27, valid with no restrictions since 2004, classes 1.2 and 1.3, no claims on file. Liability and site insurance in force. We do not build new homes, so the GCR plan does not apply.",
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
          heading: "Planning a Beaconsfield project?",
          intro:
            "We survey the house and the lot, then price it. Free estimate.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See all service areas",
              href: "/zones",
              variant: "ghost",
            },
          ],
          note: "RBQ licence 8306-0806-27 · West Island",
        },
      },
    },
  ],
};
