import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneDorvalPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "General Contractor in Dorval — Renovation",
    description:
      "RBQ-licensed general contractor in Dorval: post-war bungalow renovations, City of Dorval permits, Lakeshore SPAIP, one accountable lead.",
    path: "/zones/dorval",
    ogAlt: "Residential renovation in Dorval by Dilamco",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Service areas", url: SITE.url + "/zones" },
    { name: "Dorval", url: SITE.url + "/zones/dorval" },
  ],
  service: {
    name: "General contractor in Dorval",
    description:
      "Turnkey residential renovation in Dorval: scoping, City of Dorval permits, trade coordination and execution by an RBQ-licensed general contractor.",
    url: SITE.url + "/zones/dorval",
    serviceType: "Residential renovation",
    areaServed: [
      "Dorval",
      "Dorval Village",
      "Strathmore",
      "Pine Beach",
      "Dorval Gardens",
      "Chemin du Bord-du-Lac",
      "Île-Dorval",
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
          heading: "Dorval",
          description:
            "Kitchen, bathroom and basement renovations for Dorval homes, from a licensed general contractor.",
          actions: [
            {
              label: "Free quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our work",
              href: "/projets",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-cuisine-approach-01.webp",
            alt: "Interior renovation of a Dorval home",
          },
          facts: [
            {
              label: "Our base",
              value: "Pierrefonds-Roxboro, twenty minutes from Dorval",
            },
            {
              label: "Where to apply for the permit",
              value: "Urban planning services, 514 633-4084",
            },
            {
              label: "Type of homes",
              value: "Post-war bungalows built between 1950 and 1975",
            },
            {
              label: "First reply",
              value: "You get an answer within 24 to 48 business hours",
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
          heading: "What to know before renovating in Dorval",
          intro:
            "The lake to the south, the rail line and the airport to the north, and residential streets in between.",
          rows: [
            {
              label: "How long the permit takes",
              value:
                "The city counts thirty business days once the file is complete, compliant and paid.",
            },
            {
              label: "What is different here",
              value:
                "Council approves how additions and chemin du Bord-du-Lac houses will look.",
            },
            {
              label: "How to file the application",
              value:
                "Applications are submitted and tracked online, on the city platform.",
            },
            {
              label: "What the city checks",
              value:
                "The planning department reads the zoning and tells you what your lot really allows.",
            },
            {
              label: "Neighbourhoods",
              value:
                "Strathmore lines up cottages from the 1950s and 1960s, around Surrey park.",
            },
            {
              label: "Common projects",
              value:
                "Redoing a kitchen or bathroom, finishing a basement, renovating a condo near the station.",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-sous-sol-salle-jeux-01.webp",
            alt: "Basement finished in a Dorval bungalow",
          },
          note: "Sources: City of Dorval, Wikipedia, 2026 neighbourhood guide. Verified 2026-09-18.",
        },
      },
    },
    {
      id: "services",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Our services in Dorval",
          items: [
            {
              title: "Kitchen",
              href: "/services/renovation/cuisine",
              description:
                "We often upsize the bungalow's electrical service before opening the kitchen",
              image: {
                src: "/images/realisations/cuisine-blanche-ilot-quartz-01.webp",
                alt: "Kitchen renovated in a Dorval bungalow",
              },
              badges: ["Custom"],
              footerCtaLabel: "See kitchens",
            },
            {
              title: "Addition",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "We prepare the file presented to council before the permit is issued",
              image: {
                src: "/images/generated/renovation/renovation-extension-hero-01.webp",
                alt: "Residential addition planned in Dorval",
              },
              badges: ["Approval"],
              footerCtaLabel: "See additions",
            },
            {
              title: "Basement",
              href: "/services/renovation/sous-sol",
              description:
                "We measure the headroom and the moisture inside block foundations",
              image: {
                src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
                alt: "Finished basement in a Dorval house",
              },
              badges: ["Compliance"],
              footerCtaLabel: "See basements",
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
          heading: "Also served near Dorval",
          columns: "3",
          items: [
            { title: "Pointe-Claire", href: "/zones/pointe-claire" },
            { title: "Saint-Laurent", href: "/zones/saint-laurent" },
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
              q: "How long does the City of Dorval take to issue a permit?",
              a: "Thirty business days from the moment the file is complete, compliant and paid. A missing document restarts the count, which is why we prepare the application ourselves.",
            },
            {
              q: "Does my Dorval addition need council approval?",
              a: "Most likely. Council approves how new construction, residential additions and buildings along chemin du Bord-du-Lac will look. That step is planned before we set any dates.",
            },
            {
              q: "Do you renovate condos near the Dorval train station?",
              a: "Yes. The hours allowed by the syndicate, elevator access, protection of common areas and shared plumbing stacks are settled before the first day on site.",
            },
            {
              q: "What does renovating a Dorval bungalow cost?",
              a: "It depends on the electrical service and on the walls being opened. A mandate starts near $25,000 and a full kitchen runs distinctly higher. The visit and the estimate are free.",
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
          heading: "A project in Dorval?",
          intro:
            "We visit, we define the work, then we hand back a written price.",
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
          note: "Dilamco · City of Dorval permits prepared",
        },
      },
    },
  ],
};
