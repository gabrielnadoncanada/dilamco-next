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
        variant: "split-image",
        props: {
          eyebrow: "Dollard-des-Ormeaux",
          heading:
            "General contractor in Dollard-des-Ormeaux, permit and trades coordinated",
          description:
            "Bungalows, split-levels and cottages from 1960 to 1985. Our base is ten minutes away. RBQ licence 8306-0806-27 since 2004.",
          actions: [
            {
              label: "Request an estimate",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our work",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Since 2004", "General contractor", "Insured"],
          image: {
            src: "/images/generated/renovation/renovation-cuisine-hero-01.webp",
            alt: "Kitchen renovation in a Dollard-des-Ormeaux home",
          },
          caption: "Saint-Jean, Westpark, Sunnybrooke",
        },
      },
    },
    {
      id: "connaissance-locale",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What we know about DDO homes",
          description:
            "Almost the entire housing stock went up in twenty-five years, in waves. The same defects repeat from street to street.",
          cards: [
            {
              title: "Three sectors, three generations",
              description:
                "Sunnybrooke: bungalows and split-levels from the first wave. Westpark and Saint-Jean: cottages, semis, row houses.",
            },
            {
              title: "Zoning rewritten in 2025",
              description:
                "Urban plan R-2024-190 in force 24 April 2025, zoning by-law R-2025-199 on 16 May 2025.",
            },
            {
              title: "Permits at city hall",
              description:
                "Filed online or at 12001 boulevard De Salaberry. Detailed sketches, plans or drawings are mandatory.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "services",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "What we build in DDO",
          items: [
            {
              title: "Kitchen",
              href: "/services/renovation/cuisine",
              description:
                "Centre wall often load-bearing: beam and columns sized before demolition.",
              image: {
                src: "/images/realisations/cuisine-aire-ouverte-ilot-colonnes-01.webp",
                alt: "Open kitchen renovated in a split-level",
              },
              badges: ["Structure"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Bathroom",
              href: "/services/renovation/salle-de-bain",
              description:
                "Full waterproofing membrane, ventilation vented outside and not into the attic.",
              image: {
                src: "/images/realisations/salle-de-bain-douche-italienne-verre-01.webp",
                alt: "Renovated bathroom with tiled shower",
              },
              badges: ["Waterproofing"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Basement",
              href: "/services/renovation/sous-sol",
              description:
                "Insulation and vapour barrier redone to current rules, not to 1975.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
                alt: "Basement finished as a family room",
              },
              badges: ["Insulation"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Home addition",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Addition, sunroom or second storey checked under zoning by-law R-2025-199.",
              image: {
                src: "/images/generated/renovation/renovation-extension-hero-01.webp",
                alt: "Rear addition on a suburban home",
              },
              badges: ["Permit"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Disaster recovery",
              href: "/services/renovation/apres-sinistre",
              description:
                "Water damage or backup: valve and pump checked, code-compliant rebuild.",
              image: {
                src: "/images/generated/services/service-renovation-project-01.webp",
                alt: "Rebuild under way after water damage",
              },
              badges: ["Insurance"],
              footerCtaLabel: "See the service",
            },
          ],
        },
      },
    },
    {
      id: "preuves",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Why a West Island general contractor",
          intro:
            "An unplanned visit to DDO does not cost half a day of driving. That changes how fast things get settled.",
          badges: ["Since 2004", "5.0 on Google", "Insured"],
          cardTitle: "What you can verify",
          items: [
            "RBQ licence 8306-0806-27 since 7 September 2004",
            "General contractor classes 1.2 and 1.3",
            "No claims on the licence record",
            "Liability insurance and site coverage",
            "Zoning R-2025-199 confirmed with the city",
            "Custom cabinets in the same contract",
          ],
          actions: [
            {
              label: "See our services",
              href: "/services/renovation",
              variant: "primary",
            },
            {
              label: "Request an estimate",
              href: "/contact",
              variant: "ghost",
            },
          ],
        },
      },
    },
    {
      id: "secteurs",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Neighbouring cities we serve",
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
              q: "Do I need a permit to renovate in DDO?",
              a: "In the vast majority of cases, yes. The city requires detailed sketches, plans or drawings that clearly show the work. Applications go online or to city hall. We prepare the file.",
            },
            {
              q: "Does the new zoning by-law change anything?",
              a: "Possibly. Urban plan R-2024-190 has been in force since 24 April 2025 and zoning by-law R-2025-199 since 16 May 2025. Setbacks, heights and siting rules may have changed.",
            },
            {
              q: "Can the wall between kitchen and living room be opened?",
              a: "Often yes, rarely without structural work. In DDO split-levels the centre wall frequently carries the upper floor. Sized beam and columns down to proper bearing, decided before the contract.",
            },
            {
              q: "How long does a job take?",
              a: "A bathroom takes weeks, a complete kitchen months. Custom cabinets take 9 to 15 weeks, running alongside the job site. The schedule is written into the contract.",
            },
            {
              q: "How much does a renovation cost in Dollard-des-Ormeaux?",
              a: "Our projects start around $25,000. A complete kitchen usually lands between $35,000 and $50,000. Free estimate, budget set in the written contract after the site visit.",
            },
            {
              q: "Are you licensed and insured?",
              a: "RBQ licence 8306-0806-27, issued 7 September 2004, valid with no restrictions, classes 1.2 and 1.3, no claims on file. Liability insurance and site coverage.",
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
          heading: "A project in Dollard-des-Ormeaux?",
          intro:
            "We come see the house, frame the scope, and come back with a detailed quote.",
          actions: [
            {
              label: "Request an estimate",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our service areas",
              href: "/zones",
              variant: "ghost",
            },
          ],
          note: "Dilamco · General contractor, RBQ licence 8306-0806-27 · West Island",
        },
      },
    },
  ],
};
