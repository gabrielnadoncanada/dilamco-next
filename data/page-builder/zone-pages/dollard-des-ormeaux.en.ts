import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneDollardDesOrmeauxPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "General contractor in Dollard-des-Ormeaux",
    description:
      "RBQ-licensed general contractor in Dollard-des-Ormeaux: kitchens, bathrooms, basements, additions. Based in Pierrefonds, ten minutes from DDO.",
    path: "/zones/dollard-des-ormeaux",
    ogAlt: "Home renovation in Dollard-des-Ormeaux by Dilamco",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Service areas", url: SITE.url + "/zones" },
    {
      name: "Dollard-des-Ormeaux",
      url: SITE.url + "/zones/dollard-des-ormeaux",
    },
  ],
  service: {
    name: "General contractor in Dollard-des-Ormeaux",
    description:
      "Full home renovation in Dollard-des-Ormeaux: kitchens, bathrooms, basements, additions and conversions, by an RBQ-licensed West Island general contractor.",
    url: SITE.url + "/zones/dollard-des-ormeaux",
    serviceType: "Residential renovation",
    areaServed: [
      "Dollard-des-Ormeaux",
      "Westpark",
      "Sunnybrooke",
      "Saint-Jean sector",
      "Lake Road",
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
          heading: "Dollard-des-Ormeaux",
          description:
            "Forty-eight thousand residents, a housing stock built in twenty-five years, and the same faults from street to street.",
          actions: [
            {
              label: "Free quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See kitchens",
              href: "/services/renovation/cuisine",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-cuisine-hero-01.webp",
            alt: "Renovated kitchen in a Dollard-des-Ormeaux home",
          },
          facts: [
            { label: "Our base", value: "Pierrefonds-Roxboro, ten minutes" },
            { label: "Permits", value: "City hall, 12001 boul. De Salaberry" },
            { label: "Housing stock", value: "Bungalows and split-levels, 1960 to 1985" },
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
          heading: "DDO homes, sector by sector",
          intro:
            "The city counted 1,800 residents in the early 1960s and close to 40,000 twenty years later.",
          rows: [
            {
              label: "First wave",
              value: "Sunnybrooke, then Westpark and the Saint-Jean sector",
            },
            {
              label: "Zoning",
              value: "R-2025-199, in force since 16 May 2025",
            },
            {
              label: "Planning programme",
              value: "R-2024-190, applicable since 24 April 2025",
            },
            {
              label: "Documents required",
              value: "Sketches, plans or detailed drawings of the work",
            },
            {
              label: "Common projects",
              value: "Centre wall opened, bathroom, basement, rear addition",
            },
            {
              label: "Drive time",
              value: "Ten minutes along boulevard Saint-Jean",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-bath-hero-01.webp",
            alt: "Bathroom redone in a Dollard-des-Ormeaux split-level",
          },
          note: "Sources: City of Dollard-des-Ormeaux, Wikipedia. Verified 2026-09-18.",
        },
      },
    },
    {
      id: "services",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "What we build in Dollard-des-Ormeaux",
          items: [
            {
              title: "Kitchen",
              href: "/services/renovation/cuisine",
              description:
                "In DDO split-levels the centre wall often carries the upper floor",
              image: {
                src: "/images/realisations/cuisine-aire-ouverte-ilot-colonnes-01.webp",
                alt: "Kitchen opened onto the living room of a DDO split-level",
              },
              badges: ["Structure"],
              footerCtaLabel: "See kitchens",
            },
            {
              title: "Basement",
              href: "/services/renovation/sous-sol",
              description:
                "Insulation and vapour barrier rebuilt to today's code, not to 1975",
              image: {
                src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
                alt: "Basement family room finished in Dollard-des-Ormeaux",
              },
              badges: ["Insulation"],
              footerCtaLabel: "See basements",
            },
            {
              title: "Addition",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Rear addition or sunroom cleared under zoning R-2025-199",
              image: {
                src: "/images/generated/renovation/renovation-extension-hero-01.webp",
                alt: "Rear addition on a Dollard-des-Ormeaux house",
              },
              badges: ["Permit"],
              footerCtaLabel: "See additions",
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
          heading: "Around DDO, we also serve",
          columns: "3",
          items: [
            {
              title: "Pierrefonds-Roxboro",
              href: "/zones/pierrefonds-roxboro",
            },
            { title: "Kirkland", href: "/zones/kirkland" },
            { title: "Pointe-Claire", href: "/zones/pointe-claire" },
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
              q: "Does zoning R-2025-199 change my DDO project?",
              a: "It may. Setbacks, heights and siting were revised when it came into force on 16 May 2025. We read your zone sheet at city hall before anything gets drawn.",
            },
            {
              q: "What documents does Dollard-des-Ormeaux require?",
              a: "Sketches, plans or detailed drawings that clearly show the work. Filing is done online or at 12001 boulevard De Salaberry. We prepare the application and answer the inspector.",
            },
            {
              q: "Can the wall between kitchen and living room come out in DDO?",
              a: "Often yes, rarely without structural work. In Sunnybrooke split-levels that wall frequently carries the floor above. Beam and posts are sized before you sign anything.",
            },
            {
              q: "What does a kitchen cost in Dollard-des-Ormeaux?",
              a: "Most often between $35,000 and $50,000, structure, electrical and plumbing included. Smaller mandates start near $25,000. The budget is fixed in the written contract after the visit.",
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
          heading: "A job site in Dollard-des-Ormeaux",
          intro: "Ten minutes separate us from your street.",
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
          note: "Dilamco · general contractor, ten minutes from DDO",
        },
      },
    },
  ],
};
