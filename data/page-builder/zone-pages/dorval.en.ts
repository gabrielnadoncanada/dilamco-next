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
            "Post-war bungalows between Lac Saint-Louis and Highway 20, Strathmore cottages in the middle.",
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
            { label: "Our base", value: "Pierrefonds-Roxboro, a twenty-minute drive" },
            { label: "Permits", value: "Urban planning services, 514 633-4084" },
            { label: "Housing stock", value: "Post-war bungalows, 1950 to 1975" },
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
          heading: "The City of Dorval in three bands",
          intro:
            "The lake to the south, the rail line and the airport to the north, and a post-war residential fabric in between.",
          rows: [
            {
              label: "Lakeshore",
              value: "Buildings on the chemin need council approval",
            },
            {
              label: "Strathmore",
              value: "Cottages from the 1950s and 1960s, Surrey park",
            },
            {
              label: "Permit delay",
              value: "Thirty business days, file complete and paid",
            },
            {
              label: "Filing",
              value: "Applications submitted and tracked online with the city",
            },
            {
              label: "By-law",
              value: "RCM-60H-2024 on comprehensive development plans",
            },
            {
              label: "Common projects",
              value: "Kitchen, bathroom, basement, condo renovation",
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
          heading: "What we build in Dorval",
          items: [
            {
              title: "Kitchen",
              href: "/services/renovation/cuisine",
              description:
                "Electrical service in local bungalows often needs upsizing first",
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
                "SPAIP file prepared for council before the permit is issued",
              image: {
                src: "/images/generated/renovation/renovation-extension-hero-01.webp",
                alt: "Residential addition planned in Dorval",
              },
              badges: ["SPAIP"],
              footerCtaLabel: "See additions",
            },
            {
              title: "Basement",
              href: "/services/renovation/sous-sol",
              description:
                "Headroom and moisture measured inside block foundations",
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
          heading: "Towns we serve near Dorval",
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
              q: "Does SPAIP apply to my Lakeshore house?",
              a: "Most likely. In Dorval, council approval covers new construction, residential additions and buildings along chemin du Bord-du-Lac. It is planned at scoping, before dates are set.",
            },
            {
              q: "Do you renovate condos near the Dorval train station?",
              a: "Yes. Hours allowed by the syndicate, elevator access, protection of common areas and shared plumbing stacks are settled before the first day on site.",
            },
            {
              q: "What does renovating a Dorval bungalow cost?",
              a: "It depends on the electrical service and the walls being opened. A mandate starts near $25,000 and a full kitchen runs distinctly higher. Site visit and estimate are free.",
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
          heading: "Renovating in Dorval",
          intro: "We visit, scope the work, hand back a written price.",
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
