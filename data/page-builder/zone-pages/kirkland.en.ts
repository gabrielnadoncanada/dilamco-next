import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneKirklandPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "General contractor in Kirkland — renovation",
    description:
      "RBQ-licensed general contractor in Kirkland: major renovations, additions, kitchens and basements on the West Island's larger lots.",
    path: "/zones/kirkland",
    ogAlt: "Home renovation in Kirkland by Dilamco",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Service areas", url: SITE.url + "/zones" },
    { name: "Kirkland", url: SITE.url + "/zones/kirkland" },
  ],
  service: {
    name: "General contractor in Kirkland",
    description:
      "Home renovation, additions, kitchens, bathrooms and basements in Kirkland, by an RBQ-licensed general contractor based in the West Island.",
    url: SITE.url + "/zones/kirkland",
    serviceType: "Residential renovation",
    areaServed: [
      "Kirkland",
      "Timberlea",
      "Boul. Hymus",
      "Boul. Saint-Charles",
      "Boul. Brunswick",
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
          heading: "Kirkland",
          description:
            "Renovation and additions for Kirkland homes, from a licensed general contractor based fifteen minutes away.",
          actions: [
            {
              label: "Free quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See additions",
              href: "/services/renovation/agrandissement-de-maison",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-extension-hero-01.webp",
            alt: "Addition to a single-family house in Kirkland",
          },
          facts: [
            {
              label: "Our base",
              value: "Pierrefonds-Roxboro, fifteen minutes from Kirkland",
            },
            {
              label: "Where to apply for the permit",
              value: "Urban planning department, 17200 boul. Hymus",
            },
            {
              label: "Type of homes",
              value: "Detached single-family houses built from 1965 to 1985",
            },
            {
              label: "First reply",
              value: "We call you back within 24 to 48 business hours",
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
          heading: "What we know about Kirkland homes",
          intro: "Here is what comes up on nearly every Kirkland job site.",
          rows: [
            {
              label: "Lot sizes",
              value:
                "Lots are wide here, with roughly two thousand residents per square kilometre.",
            },
            {
              label: "What the town checks",
              value:
                "It looks at setbacks and at how much of the lot your house is allowed to cover.",
            },
            {
              label: "What is different here",
              value:
                "Digging a new foundation needs an excavation certificate on top of the building permit.",
            },
            {
              label: "How to file the application",
              value:
                "Online, through the town portal, which shows the file status and lets you pay.",
            },
            {
              label: "Common projects",
              value:
                "Side additions, a second storey, a sunroom, and opening up the kitchen.",
            },
            {
              label: "From our base",
              value: "Fifteen minutes of driving along boulevard Saint-Charles.",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-extension-approach-01.webp",
            alt: "Planning an addition on a Kirkland lot",
          },
          note: "Sources: Town of Kirkland, Wikipedia, 2021 census. Verified 2026-09-18.",
        },
      },
    },
    {
      id: "services",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Our services in Kirkland",
          items: [
            {
              title: "Addition",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "We add a side extension when the setbacks allow it",
              image: {
                src: "/images/generated/services/service-renovation-project-02.webp",
                alt: "Addition under construction on a Kirkland street",
              },
              badges: ["Excavation"],
              footerCtaLabel: "See additions",
            },
            {
              title: "Major renovation",
              href: "/services/renovation",
              description:
                "We redo the roof, the windows, the electrical panel and the bathrooms",
              image: {
                src: "/images/generated/services/service-renovation-project-03.webp",
                alt: "Full renovation of a Kirkland house",
              },
              badges: ["Turnkey"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Kitchen",
              href: "/services/renovation/cuisine",
              description:
                "We open the kitchen onto the living room in 1970s houses",
              image: {
                src: "/images/realisations/cuisine-armoires-vitrees-dosseret-01.webp",
                alt: "Open kitchen in a detached Kirkland home",
              },
              badges: ["Structure"],
              footerCtaLabel: "See kitchens",
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
          heading: "Also served near Kirkland",
          columns: "2",
          items: [
            { title: "Beaconsfield", href: "/zones/beaconsfield" },
            { title: "Pointe-Claire", href: "/zones/pointe-claire" },
            {
              title: "Dollard-des-Ormeaux",
              href: "/zones/dollard-des-ormeaux",
            },
            {
              title: "Pierrefonds-Roxboro",
              href: "/zones/pierrefonds-roxboro",
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
              q: "Where do you apply for a renovation permit in Kirkland?",
              a: "At the urban planning department, 17200 boulevard Hymus, or online through the town portal. We prepare the file, we submit it and we answer the inspector.",
            },
            {
              q: "Does a Kirkland addition need an excavation certificate?",
              a: "Yes, as soon as the addition sits on a new foundation. The town treats excavation as a separate application. Both authorizations are scheduled from the start.",
            },
            {
              q: "Does my Kirkland lot really allow an addition?",
              a: "Often, yes, because lots here are wide. Setbacks and lot coverage are what decide it. We check that before you pay for any drawings.",
            },
            {
              q: "What does renovating a whole Kirkland house cost?",
              a: "Redoing the roof, the windows, the electrical panel and the bathrooms in one sequence runs into tens of thousands of dollars. Our smallest mandates start near $25,000.",
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
          heading: "A project in Kirkland? Let's talk.",
          intro:
            "We check what the town allows at your address first, then we talk price.",
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
          note: "Dilamco · West Island · Kirkland job sites",
        },
      },
    },
  ],
};
