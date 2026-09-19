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
            "Interior renovations and additions for Pointe-Claire homes, from the old Village to the post-war neighbourhoods.",
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
            {
              label: "Our base",
              value: "Pierrefonds-Roxboro, twenty minutes from Pointe-Claire",
            },
            {
              label: "Where to apply for the permit",
              value: "Planning counter, 451 boul. Saint-Jean",
            },
            {
              label: "Type of homes",
              value: "Older heritage houses and post-war bungalows",
            },
            {
              label: "First reply",
              value: "A call back within 24 to 48 business hours",
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
          heading: "What to know before renovating in Pointe-Claire",
          rows: [
            {
              label: "Older neighbourhoods",
              value:
                "The Village and the lakefront still have stone foundations and original framing.",
            },
            {
              label: "Post-war neighbourhoods",
              value:
                "Cedar Park Heights, Northview, Oneida and Valois were built after 1945.",
            },
            {
              label: "What the city checks",
              value:
                "Elsewhere, the zoning by-law sets the setbacks, the heights and the use allowed on the lot.",
            },
            {
              label: "Common projects",
              value:
                "Redoing a bathroom, opening a kitchen, levelling a floor, adding on at the back.",
            },
          ],
          image: {
            src: "/images/generated/services/service-renovation-project-03.webp",
            alt: "Interior renovation of an older home in Pointe-Claire Village",
          },
        },
      },
    },
    {
      id: "services",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Our services in Pointe-Claire",
          items: [
            {
              title: "Bathroom",
              href: "/services/renovation/salle-de-bain",
              description:
                "We replace the original plumbing right back to the water supply line",
              image: {
                src: "/images/realisations/salle-de-bain-douche-italienne-verre-01.webp",
                alt: "Bathroom rebuilt in a Lakeshore house",
              },
              footerCtaLabel: "See bathrooms",
            },
            {
              title: "Older home",
              href: "/services/renovation",
              description:
                "We survey the levels, the stone foundation and the framing before drawing",
              image: {
                src: "/images/generated/services/service-renovation-hero-01.webp",
                alt: "Renovation job site in Pointe-Claire Village",
              },
              footerCtaLabel: "See the service",
            },
            {
              title: "Flooring",
              href: "/services/renovation/plancher",
              description:
                "We rebuild the subfloor and the transitions when the house is a century old",
              image: {
                src: "/images/realisations/plancher-bois-franc-neuf-01.webp",
                alt: "Hardwood floor laid in a Pointe-Claire home",
              },
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
          heading: "Also served near Pointe-Claire",
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
          heading: "Pointe-Claire questions we get",
          items: [
            {
              q: "Does my project go before a committee in Pointe-Claire?",
              a: "If your house is in the Village or another older sector, yes. A planning committee approves how the work will look before the permit. We check your address at the planning counter before pricing.",
            },
            {
              q: "Does that approval stretch the schedule?",
              a: "Yes. The city judges the project on how it will look, which takes longer than an ordinary application. That delay appears in the schedule at quote time, never mid-job.",
            },
            {
              q: "Do you renovate older homes in Pointe-Claire Village?",
              a: "We do. We first survey the floor levels, the stone foundation and the systems added over the years. The budget carries a margin for whatever shows up once the walls are open.",
            },
            {
              q: "What does a bathroom cost in Pointe-Claire?",
              a: "In a pre-1950 house, the plumbing and the subfloor cost as much as the finishes. A mandate starts near $25,000 and the scope is set after the survey. The estimate is free.",
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
            "We confirm which rules apply at your address, then we price the work.",
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
