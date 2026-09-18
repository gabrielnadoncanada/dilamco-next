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
            "Wide lots, detached houses, owners who choose to add on rather than move away.",
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
            { label: "Our base", value: "Pierrefonds-Roxboro, fifteen minutes" },
            { label: "Permits", value: "Urban planning, 17200 boul. Hymus" },
            { label: "Housing stock", value: "Detached singles, 1965 to 1985" },
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
          heading: "A town split by Highway 40",
          intro:
            "Fewer than twenty thousand residents over 9.6 square kilometres, with an industrial park on each side of the Trans-Canada.",
          rows: [
            {
              label: "Density",
              value: "Roughly 2,000 residents per square kilometre",
            },
            {
              label: "Excavation",
              value: "Certificate separate from the building permit",
            },
            {
              label: "Online filing",
              value: "Permit management portal, tracking and payment",
            },
            {
              label: "What decides",
              value: "Setbacks, lot coverage and your zone's standards",
            },
            {
              label: "Common projects",
              value: "Side addition, second storey, sunroom, kitchen",
            },
            {
              label: "Drive time",
              value: "Fifteen minutes along boulevard Saint-Charles",
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
          heading: "What we build in Kirkland",
          items: [
            {
              title: "Addition",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Lots here often allow a side addition once setbacks are cleared",
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
                "Roof, windows, panel and bathrooms all reach end of life together",
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
                "Nineteen-seventies houses reopened onto the living areas",
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
          heading: "Kirkland and its neighbours",
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
              q: "How do you file a permit application in Kirkland?",
              a: "Through the online permit management portal, which shows the file status and usually allows remote payment. Otherwise in person at 17200 boulevard Hymus. We assemble the file for you.",
            },
            {
              q: "Does a Kirkland addition need an excavation certificate?",
              a: "Yes. The town treats excavation as a request separate from the building permit. A new foundation therefore needs both authorizations, scheduled from the outset.",
            },
            {
              q: "Can you really add on to a Kirkland lot?",
              a: "Often. At roughly two thousand residents per square kilometre, lots stay wide. Setbacks and lot coverage in your zone decide it, and we confirm that before you pay for drawings.",
            },
            {
              q: "What does taking a Kirkland house back to bare bones cost?",
              a: "More than our entry mandates, which start near $25,000. Redoing roof, windows, panel and bathrooms in one sequence runs into tens of thousands. Estimates are free.",
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
          heading: "A project in Kirkland?",
          intro: "We confirm feasibility before we talk price.",
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
