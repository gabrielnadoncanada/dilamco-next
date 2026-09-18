import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneIleBizardSainteGenevievePageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "General Contractor in L'Île-Bizard–Sainte-Geneviève",
    description:
      "RBQ-licensed general contractor in L'Île-Bizard–Sainte-Geneviève: renovation, basements, flood reconstruction, borough permits handled for you.",
    path: "/zones/ile-bizard-sainte-genevieve",
    ogAlt: "Residential renovation in L'Île-Bizard–Sainte-Geneviève by Dilamco",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Service areas", url: SITE.url + "/zones" },
    {
      name: "L'Île-Bizard–Sainte-Geneviève",
      url: SITE.url + "/zones/ile-bizard-sainte-genevieve",
    },
  ],
  service: {
    name: "General contractor in L'Île-Bizard–Sainte-Geneviève",
    description:
      "Residential renovation and post-damage reconstruction in L'Île-Bizard–Sainte-Geneviève: borough permits, flood zones and full coordination by an RBQ-licensed general contractor.",
    url: SITE.url + "/zones/ile-bizard-sainte-genevieve",
    serviceType: "Residential renovation",
    areaServed: [
      "L'Île-Bizard–Sainte-Geneviève",
      "L'Île-Bizard",
      "Sainte-Geneviève",
      "Île Mercier",
      "Boulevard Gouin Ouest",
      "Chemin Cherrier",
      "Montée de l'Église",
    ],
  },
  blocks: [
    {
      id: "hero",
      content: {
        type: "hero",
        variant: "zone",
        props: {
          eyebrow: "General contractor in",
          heading: "L'Île-Bizard–Sainte-Geneviève",
          description:
            "Two islands, a river that rises every spring, and basements rebuilt after the 2017 and 2019 floods.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Post-damage rebuilds",
              href: "/services/renovation/apres-sinistre",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-extension-hero-01.webp",
            alt: "Home addition on a single-family house in L'Île-Bizard",
          },
          facts: [
            {
              label: "Our base",
              value: "Pierrefonds-Roxboro · 10 min over the bridge",
            },
            {
              label: "Permits",
              value: "Counter at 15795 Gouin Boulevard West",
            },
            {
              label: "Housing stock",
              value: "Single-family homes on deep lots, 1845 village",
            },
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
          heading: "What the water dictates on the island",
          intro:
            "Rivière des Prairies to the north, Lac des Deux Montagnes to the west. The flood-plain map drives the project.",
          rows: [
            {
              label: "Housing stock",
              value:
                "Single-family homes on deep lots, Chemin Cherrier and Jacques-Bizard Boulevard",
            },
            {
              label: "Permits",
              value: "Every flood-plain job needs one, with no exception",
            },
            {
              label: "By-laws",
              value: "11-018 construction, 11-010 sewer backup protection",
            },
            {
              label: "Local risks",
              value: "2017 and 2019 floods, Île Mercier submerged, evacuations",
            },
            {
              label: "Common projects",
              value: "Rebuilt basements, additions, older homes on Gouin West",
            },
            {
              label: "From our base",
              value: "Jacques-Bizard bridge, then Montée de l'Église",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-sous-sol-materials-01.webp",
            alt: "Materials staged to rebuild a basement on Île Bizard",
          },
          note: "Sources: City of Montréal, 311 information bank, SPHIB-SG. Verified 2026-09-18.",
        },
      },
    },
    {
      id: "services",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "What we rebuild on Île Bizard",
          items: [
            {
              title: "Basement rebuild",
              href: "/services/renovation/sous-sol",
              description:
                "Drain, backflow valve and sump pump checked before a riverside basement closes",
              image: {
                src: "/images/generated/spaces/space-sous-sol-cinema-01.webp",
                alt: "Basement finished as a home cinema on Île Bizard",
              },
              badges: ["Drainage"],
              footerCtaLabel: "See basements",
            },
            {
              title: "Post-damage rebuild",
              href: "/services/renovation/apres-sinistre",
              description:
                "Rebuilding homes hit by the flood waters around Île Mercier",
              image: {
                src: "/images/generated/services/service-renovation-project-03.webp",
                alt: "Interior rebuild after flooding near Île Mercier",
              },
              badges: ["Insurance"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Home addition",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Shoreline strip, setbacks and fill confirmed before the first sketch",
              image: {
                src: "/images/generated/renovation/renovation-extension-approach-01.webp",
                alt: "Planning an addition on a riverside lot on the island",
              },
              badges: ["Zoning"],
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
          heading: "Across the bridge",
          columns: "2",
          items: [
            {
              title: "Pierrefonds-Roxboro",
              href: "/zones/pierrefonds-roxboro",
              ctaLabel: "See the area",
            },
            {
              title: "Dollard-des-Ormeaux",
              href: "/zones/dollard-des-ormeaux",
              ctaLabel: "See the area",
            },
            {
              title: "Kirkland",
              href: "/zones/kirkland",
              ctaLabel: "See the area",
            },
            {
              title: "Laval",
              href: "/zones/laval",
              ctaLabel: "See the area",
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
          heading: "Questions we hear on the island",
          items: [
            {
              q: "Where are permits filed in L'Île-Bizard–Sainte-Geneviève?",
              a: "At the permit counter, 15795 Gouin Boulevard West, or with the urban planning, permits and inspections division at 406 Montée de l'Église, 514 620-6607. We prepare and file the application.",
            },
            {
              q: "Can I renovate in a high-velocity flood zone on Île Bizard?",
              a: "In the 0 to 20 year high-velocity zone, construction and work are prohibited apart from listed exceptions. In the 20 to 100 year zone, any non flood-proofed construction is banned. We confirm the elevation before drawing.",
            },
            {
              q: "What does by-law 11-010 change for a Sainte-Geneviève basement?",
              a: "It requires the building to be protected against sewer backups. Backflow valve, sump pump and French drain come before finishes, and the lower wall materials have to survive a repeat event.",
            },
            {
              q: "Can an older house in old Sainte-Geneviève be transformed?",
              a: "Yes, starting with a survey of what is there. The village core is recognized as exceptional in character, around the 1843-1845 church and the D'Ailleboust-De-Manthet house at 15886 Gouin Boulevard West.",
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
          heading: "A project in L'Île-Bizard or Sainte-Geneviève?",
          intro: "We cross the bridge, survey the house and price the work.",
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
          note: "Dilamco · general contractor based in Pierrefonds-Roxboro · (514) 820-0773",
        },
      },
    },
  ],
};
