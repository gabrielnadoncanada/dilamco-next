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
        variant: "split-image",
        props: {
          eyebrow: "Dorval",
          heading:
            "General contractor in Dorval, from permit to handover",
          description:
            "Post-war bungalows, Strathmore cottages and Lakeshore homes, renovated by one accountable lead since 2004.",
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
          badges: ["City permits", "Since 2004", "Insured"],
          image: {
            src: "/images/generated/services/service-renovation-hero-01.webp",
            alt: "Residential renovation led by a general contractor in Dorval",
          },
          caption: "Village, Strathmore, Lakeshore",
        },
      },
    },
    {
      id: "connaissance-locale",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What we know about Dorval homes",
          description:
            "Between Lac Saint-Louis and Highway 20, a housing stock built mostly from 1950 to 1975. Three bands, three kinds of jobsite.",
          cards: [
            {
              title: "Post-war bungalows",
              description:
                "Undersized electrical services, block foundations, low basement headroom, load-bearing walls to verify.",
            },
            {
              title: "Urban planning department",
              description:
                "The City issues its own permits: 30 business days once the file is complete and paid.",
            },
            {
              title: "Lakeshore SPAIP review",
              description:
                "New construction, residential additions and Lakeshore buildings go through council approval.",
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
          heading: "What we build in Dorval",
          items: [
            {
              title: "Kitchen",
              href: "/services/renovation/cuisine",
              description:
                "Wall opened once load-bearing status is confirmed, electrical and plumbing redone.",
              image: {
                src: "/images/generated/spaces/espaces-card-cuisine-01.webp",
                alt: "Custom kitchen built in a West Island home",
              },
              badges: ["Custom"],
              footerCtaLabel: "See kitchens",
            },
            {
              title: "Bathroom",
              href: "/services/renovation/salle-de-bain",
              description:
                "Membrane, drain, slope and ventilation rebuilt down to the substrate.",
              image: {
                src: "/images/generated/spaces/space-bath-project-01.webp",
                alt: "Renovated bathroom with careful finishing",
              },
              badges: ["Waterproofing"],
              footerCtaLabel: "See bathrooms",
            },
            {
              title: "Basement",
              href: "/services/renovation/sous-sol",
              description:
                "Moisture, weeping tile and headroom checked before any drawing.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-salle-jeux-01.webp",
                alt: "Basement finished as a games room",
              },
              badges: ["Code"],
              footerCtaLabel: "See basements",
            },
            {
              title: "Home addition",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "SPAIP file and council approval prepared before the permit is issued.",
              image: {
                src: "/images/generated/renovation/renovation-extension-approach-01.webp",
                alt: "Planning a residential addition in Dorval",
              },
              badges: ["SPAIP"],
              footerCtaLabel: "See additions",
            },
            {
              title: "Disaster recovery",
              href: "/services/renovation/apres-sinistre",
              description:
                "Drying, selective demolition, rebuild and a documented file for your insurer.",
              image: {
                src: "/images/generated/services/service-renovation-project-01.webp",
                alt: "Room rebuilt after water damage",
              },
              badges: ["Insurance"],
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
            "A serious quote rests on checks made on site, not over the phone.",
          badges: ["On-site visit", "Free estimate"],
          cardTitle: "Our on-site checklist",
          items: [
            "Electrical service and panel capacity",
            "Position of existing plumbing stacks",
            "Load-bearing status of walls to open",
            "Basement headroom and moisture signs",
            "Backup history and condition of the drain",
            "Zoning, SPAIP review and permit type",
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
              q: "Do I need a permit to renovate in Dorval?",
              a: "Yes, in most cases. The City of Dorval issues its own permits through its urban planning department, and every renovation requires its own application. We confirm the scope and file the application.",
            },
            {
              q: "How long does the permit take?",
              a: "Thirty business days from the moment the file is complete, compliant and paid. An incomplete file restarts that clock, which is why we prepare the application ourselves.",
            },
            {
              q: "What is the SPAIP and does it apply to me?",
              a: "It is a council approval that comes on top of the permit. In Dorval it covers new construction, residential additions and buildings along chemin du Bord-du-Lac. We plan for it during scoping.",
            },
            {
              q: "What budget should I plan for?",
              a: "Our projects start around $25,000. A full kitchen lands between $35,000 and $50,000 and up, depending on scope. Estimates are free, and budget and schedule are set in the written contract.",
            },
            {
              q: "Do you renovate condos near the Dorval station?",
              a: "Yes. Access, elevator use, protection of common areas, the syndicate's permitted work hours and shared plumbing stacks are all settled before the first day on site.",
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
          heading: "Planning a Dorval project?",
          intro: "We visit, set the scope, and hand you a written quote.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See all service areas",
              href: "/zones",
              variant: "ghost",
            },
          ],
          note: "RBQ licence 8306-0806-27 · Pierrefonds-Roxboro · (514) 820-0773",
        },
      },
    },
  ],
};
