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
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "L'Île-Bizard–Sainte-Geneviève",
          heading:
            "General contractor in L'Île-Bizard–Sainte-Geneviève, renovating with the water in mind",
          description:
            "Flood zones, basements rebuilt after the 2017 and 2019 floods, borough permits prepared and filed by us.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Post-damage renovation",
              href: "/services/renovation/apres-sinistre",
              variant: "ghost",
            },
          ],
          badges: ["Disaster recovery", "Flood zone", "Insured"],
          image: {
            src: "/images/generated/renovation/renovation-extension-hero-01.webp",
            alt: "Addition to a single-family home in L'Île-Bizard",
          },
          caption: "Île Mercier, old Sainte-Geneviève",
        },
      },
    },
    {
      id: "connaissance-locale",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What we know about the borough",
          description:
            "Rivière des Prairies to the north, Lac des Deux Montagnes to the west. Large wooded lots, mapped flood zones, an old village core.",
          cards: [
            {
              title: "Single-family homes, large lots",
              description:
                "Deep lots along chemin Cherrier and boulevard Jacques-Bizard, with mature trees to protect.",
            },
            {
              title: "Urban planning and permits division",
              description:
                "Permit counter at 15795 boulevard Gouin Ouest, division at 406 montée de l'Église.",
            },
            {
              title: "Mapped flood zones",
              description:
                "High-velocity 0-20 year zone: building prohibited. Low-velocity 20-100 year zone: flood-proofing required.",
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
          heading: "What we build on the island",
          items: [
            {
              title: "Disaster recovery",
              href: "/services/renovation/apres-sinistre",
              description:
                "Drying, selective demolition, rebuild and a documented file for your insurer.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-materials-01.webp",
                alt: "Materials prepared to rebuild a basement",
              },
              badges: ["Insurance"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Basement",
              href: "/services/renovation/sous-sol",
              description:
                "Weeping tile, sump pump and backwater valve checked before finishing.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-cinema-01.webp",
                alt: "Basement finished as a home theatre",
              },
              badges: ["Drainage"],
              footerCtaLabel: "See basements",
            },
            {
              title: "Home addition",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Setbacks, shoreline buffer and fill confirmed before anything is drawn.",
              image: {
                src: "/images/generated/renovation/renovation-extension-approach-01.webp",
                alt: "Planning a home addition",
              },
              badges: ["Zoning"],
              footerCtaLabel: "See additions",
            },
            {
              title: "Kitchen",
              href: "/services/renovation/cuisine",
              description:
                "Opening to the dining room once the structure is verified.",
              image: {
                src: "/images/generated/spaces/espaces-card-cuisine-01.webp",
                alt: "Renovated kitchen in a West Island home",
              },
              badges: ["Custom"],
              footerCtaLabel: "See kitchens",
            },
            {
              title: "Heritage sector",
              href: "/services/renovation",
              description:
                "Older homes on boulevard Gouin Ouest, surveyed before any drawing.",
              image: {
                src: "/images/generated/services/service-renovation-project-01.webp",
                alt: "Conversion of an older Sainte-Geneviève home",
              },
              badges: ["Heritage"],
              footerCtaLabel: "See the service",
            },
          ],
        },
      },
    },
    {
      id: "checks",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "What we check before pricing",
          intro:
            "On the island, two questions decide the real scope of the work.",
          badges: ["On-site visit", "Free estimate"],
          cardTitle: "Our on-site checklist",
          items: [
            "Where the lot sits in the flood zone",
            "History of flooding or sewer backup",
            "Level of the basement floor",
            "Backwater valve, sump pump, weeping tile",
            "Shoreline buffer and applicable setbacks",
            "Trees 10 cm in diameter and over",
          ],
          actions: [
            {
              label: "Book a visit",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our process",
              href: "/processus",
              variant: "ghost",
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
              q: "Where do I apply for a permit in the borough?",
              a: "At the permit counter, 15795 boulevard Gouin Ouest, or at the urban planning, permits and inspections division, 406 montée de l'Église. We prepare and file the application as part of the mandate.",
            },
            {
              q: "My house is in a flood zone. Can I still renovate?",
              a: "It depends on the zone. In the high-velocity 0-20 year zone, buildings and works are prohibited apart from listed exceptions. In the low-velocity 20-100 year zone, any structure that is not flood-proofed is prohibited. All work in a floodplain requires a permit.",
            },
            {
              q: "Do you rebuild after a flood?",
              a: "Yes. The 2017 and 2019 floods hit several streets, including Île Mercier. Selective demolition, sanitation, structural repair where needed, then a rebuild documented for your insurance file.",
            },
            {
              q: "Can a basement near the river be finished?",
              a: "Often yes, but not the same way as elsewhere. By-law 11-010 on protection against sewer backup applies: backwater valve, sump pump and weeping tile first, water-tolerant materials second.",
            },
            {
              q: "What budget should I plan for?",
              a: "Our projects start around $25,000. A full kitchen lands between $35,000 and $50,000 and up. Estimates are free, and budget and schedule are set in the written contract before work starts.",
            },
            {
              q: "Are you licensed and insured?",
              a: "RBQ licence 8306-0806-27, valid with no restrictions since September 2004, classes 1.2 and 1.3, no claims on file. Liability and site insurance in force, licence bond in place.",
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
          heading: "Planning a project here?",
          intro:
            "We cross the Jacques-Bizard bridge, survey the house, and price it.",
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
          note: "RBQ licence 8306-0806-27 · Pierrefonds-Roxboro · (514) 820-0773",
        },
      },
    },
  ],
};
