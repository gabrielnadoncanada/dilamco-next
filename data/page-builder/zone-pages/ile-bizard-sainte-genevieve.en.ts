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
            "Renovations, basements and rebuilding after flooding for homes on Île Bizard and in Sainte-Geneviève.",
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
              value: "Pierrefonds-Roxboro, ten minutes over the bridge",
            },
            {
              label: "Where to apply for the permit",
              value: "Permit counter, 15795 Gouin Boulevard West",
            },
            {
              label: "Type of homes",
              value: "Single-family homes on large lots, and an 1845 village",
            },
            {
              label: "First reply",
              value: "You hear from us within 24 to 48 business hours",
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
          heading: "What to know before renovating on the island",
          rows: [
            {
              label: "Local risk",
              value:
                "The 2017 and 2019 floods submerged Île Mercier and forced people out of their homes.",
            },
            {
              label: "When a permit is required",
              value:
                "In a flood zone, every single job needs a permit, with no exception.",
            },
            {
              label: "What the by-law requires",
              value:
                "The house must be protected against sewer backups before it is finished.",
            },
            {
              label: "Neighbourhoods",
              value:
                "Single-family homes line up on deep lots, on Chemin Cherrier and Jacques-Bizard Boulevard.",
            },
            {
              label: "Common projects",
              value:
                "Rebuilding a basement, adding on, restoring an older home on Gouin Boulevard.",
            },
            {
              label: "From our base",
              value:
                "We cross the Jacques-Bizard bridge, then take Montée de l'Église.",
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
          heading: "Our services on Île Bizard",
          items: [
            {
              title: "Basement rebuild",
              href: "/services/renovation/sous-sol",
              description:
                "We check the drain, the backflow valve and the pump before the walls close",
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
                "We restore the homes hit by the flood waters around Île Mercier",
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
                "We confirm the shoreline strip, the setbacks and the fill before drawing",
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
          heading: "Neighbouring areas we serve",
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
              q: "Where do you file a permit application on Île Bizard?",
              a: "At the permit counter, 15795 Gouin Boulevard West, or with the urban planning, permits and inspections division at 406 Montée de l'Église, 514 620-6607. We prepare and file the application.",
            },
            {
              q: "Can I renovate if my house is in a flood zone?",
              a: "It depends on the zone. In the most exposed one, work is banned apart from the exceptions listed in the by-law. In the other, the construction must be protected against water. We confirm your address before drawing.",
            },
            {
              q: "What do you plan for a basement in Sainte-Geneviève?",
              a: "The house must be protected against sewer backups. The backflow valve, the pump and the drain come before the finishes, and the lower walls get materials that can take water coming up again.",
            },
            {
              q: "Can an older house in old Sainte-Geneviève be transformed?",
              a: "Yes, provided we survey what is there first. The village core is recognized as a site of special interest, around the 1843-1845 church and the D'Ailleboust-De-Manthet house at 15886 Gouin Boulevard West.",
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
          intro:
            "We cross the bridge, survey the house and hand you a written price.",
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
        },
      },
    },
  ],
};
