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
            "Kitchens, basements and additions for Dollard-des-Ormeaux homes, from a licensed general contractor based ten minutes away.",
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
            {
              label: "Our base",
              value: "Pierrefonds-Roxboro, ten minutes from DDO",
            },
            {
              label: "Where to apply for the permit",
              value: "City hall, 12001 boul. De Salaberry",
            },
            {
              label: "Type of homes",
              value: "Bungalows and split-levels built from 1960 to 1985",
            },
            {
              label: "First reply",
              value: "We answer within 24 to 48 business hours",
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
          heading: "Dollard-des-Ormeaux homes, in brief",
          rows: [
            {
              label: "What changed recently",
              value:
                "The new planning programme applies since 24 April 2025 and the new zoning since 16 May 2025.",
            },
            {
              label: "What the city checks",
              value:
                "That by-law sets the setbacks, the heights allowed and where the building sits on the lot.",
            },
            {
              label: "How to file the application",
              value:
                "Online or at city hall, with sketches or drawings that clearly show the work.",
            },
            {
              label: "What is different here",
              value:
                "The neighbourhoods were built in waves, from Sunnybrooke to Westpark and the Saint-Jean sector.",
            },
            {
              label: "Common projects",
              value:
                "Opening the centre wall, redoing a bathroom, finishing a basement, adding on at the back.",
            },
            {
              label: "From our base",
              value: "Ten minutes of driving along boulevard Saint-Jean.",
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
          heading: "Our services in Dollard-des-Ormeaux",
          items: [
            {
              title: "Kitchen",
              href: "/services/renovation/cuisine",
              description:
                "We size the beam before opening the centre wall of a split-level",
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
                "We redo the insulation and vapour barrier to today's code, not to 1975",
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
                "We clear the rear addition or sunroom under the 2025 zoning by-law",
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
          heading: "Also served near Dollard-des-Ormeaux",
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
              q: "Does the new 2025 zoning change my DDO project?",
              a: "It may. Setbacks, heights and where the building sits were revised when the by-law came into force on 16 May 2025. We read your zone sheet before anything gets drawn.",
            },
            {
              q: "What documents does the city ask for with a DDO permit?",
              a: "Sketches, plans or detailed drawings that clearly show the work. Filing is done online or at 12001 boulevard De Salaberry. We prepare the application and we answer the inspector.",
            },
            {
              q: "Can the wall between kitchen and living room come out in DDO?",
              a: "Often yes, but rarely without structural work. In Sunnybrooke split-levels that wall often carries the floor above. The beam and the posts are sized before you sign.",
            },
            {
              q: "What does a kitchen cost in Dollard-des-Ormeaux?",
              a: "Most often between $35,000 and $50,000, structure, electrical and plumbing included. Smaller mandates start near $25,000. The budget is fixed in the contract, after the visit.",
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
          heading: "A job site in Dollard-des-Ormeaux?",
          intro:
            "Ten minutes separate us from your street. We come and look, then we price it.",
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
