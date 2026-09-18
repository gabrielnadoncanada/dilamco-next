import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneLavalPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "General Contractor in Laval — Renovation",
    description:
      "RBQ-licensed general contractor in Laval: Chomedey bungalow renovations, basements, City urban planning permits, Mille Îles flood zones.",
    path: "/zones/laval",
    ogAlt: "Residential renovation in Laval by Dilamco",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Service areas", url: SITE.url + "/zones" },
    { name: "Laval", url: SITE.url + "/zones/laval" },
  ],
  service: {
    name: "General contractor in Laval",
    description:
      "Turnkey residential renovation in Laval: scoping, City of Laval urban planning permits, trade coordination and execution by an RBQ-licensed general contractor.",
    url: SITE.url + "/zones/laval",
    serviceType: "Residential renovation",
    areaServed: [
      "Laval",
      "Chomedey",
      "Sainte-Dorothée",
      "Laval-Ouest",
      "Fabreville",
      "Vimont",
      "Sainte-Rose",
      "Laval-des-Rapides",
      "Duvernay",
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
          heading: "Laval",
          description:
            "Chomedey and Laval-des-Rapides date from the 1960s. Here the sector tells you what sits behind the walls.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our services",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-cuisine-hero-01.webp",
            alt: "Renovated kitchen in a Chomedey bungalow",
          },
          facts: [
            {
              label: "Our base",
              value: "Pierrefonds-Roxboro · 25 min on Highway 13",
            },
            {
              label: "Permits",
              value: "Urban planning service, 1333 Chomedey Boulevard",
            },
            {
              label: "Housing stock",
              value: "1960s bungalows on concrete block foundations",
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
          heading: "Laval reads sector by sector",
          intro:
            "Four building waves, flood elevations written into the zoning by-law and two separate permits depending on the work.",
          rows: [
            {
              label: "Housing stock",
              value: "1960-1970 wave in Chomedey, 1980-1990 in Duvernay-Vimont",
            },
            {
              label: "Permits",
              value: "Two separate files, interior or exterior renovation",
            },
            {
              label: "Process",
              value: "Filed online, tracked in Mon dossier, permit sent by email",
            },
            {
              label: "Local risks",
              value: "2017 floods in Laval-Ouest, Fabreville and Sainte-Dorothée",
            },
            {
              label: "Flood zones",
              value: "Flood elevations in the zoning, from a 2014 study",
            },
            {
              label: "Common projects",
              value: "Basements, opening a closed kitchen, water damage rebuilds",
            },
            {
              label: "From our base",
              value: "Louis-Bisson bridge, then Highway 440 or Saint-Martin",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-sous-sol-salle-jeux-01.webp",
            alt: "Basement finished as a games room in a Vimont home",
          },
          note: "Sources: City of Laval, CCI Laval 2017 flood review, Laval housing profile. Verified 2026-09-18.",
        },
      },
    },
    {
      id: "services",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "What we build inside Laval homes",
          items: [
            {
              title: "Basement finishing",
              href: "/services/renovation/sous-sol",
              description:
                "Family room and bedroom under a Vimont bungalow, built to Code",
              image: {
                src: "/images/generated/spaces/space-sous-sol-bar-01.webp",
                alt: "Basement with a bar area in a Laval home",
              },
              badges: ["Basement"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Kitchen renovation",
              href: "/services/renovation/cuisine",
              description:
                "Taking down the wall of a closed 1960s bungalow kitchen",
              image: {
                src: "/images/generated/spaces/space-cuisine-project-02.webp",
                alt: "Kitchen opened to the dining room of a Laval bungalow",
              },
              badges: ["Kitchen"],
              footerCtaLabel: "See kitchens",
            },
            {
              title: "Post-damage rebuild",
              href: "/services/renovation/apres-sinistre",
              description:
                "Rebuilding Laval-Ouest basements after a river flood event",
              image: {
                src: "/images/generated/services/service-renovation-project-02.webp",
                alt: "Interior rebuild after flooding in Laval-Ouest",
              },
              badges: ["Insurance"],
              footerCtaLabel: "See the service",
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
          heading: "Also nearby",
          columns: "2",
          items: [
            {
              title: "L'Île-Bizard–Sainte-Geneviève",
              href: "/zones/ile-bizard-sainte-genevieve",
              ctaLabel: "See the area",
            },
            {
              title: "Pierrefonds-Roxboro",
              href: "/zones/pierrefonds-roxboro",
              ctaLabel: "See the area",
            },
            {
              title: "Saint-Laurent",
              href: "/zones/saint-laurent",
              ctaLabel: "See the area",
            },
            {
              title: "Dollard-des-Ormeaux",
              href: "/zones/dollard-des-ormeaux",
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
          heading: "Laval questions we get",
          items: [
            {
              q: "Which permit does a Laval renovation need?",
              a: "The City splits interior and exterior residential renovation into two permits. We identify the right one during scoping, file online and follow the case in Mon dossier until the permit arrives by email.",
            },
            {
              q: "My Laval-Ouest home sits in a flood zone, is that a dead end?",
              a: "Not necessarily. Laval flood plains are set by the flood elevations written into the zoning by-law, from a study approved by the provincial government in 2014. We check the elevation for your address before drawing.",
            },
            {
              q: "What can be done with a flooded Fabreville basement?",
              a: "We step in once it is dry, as after the 2017 floods: selective demolition, decontamination, then rebuilding. Drainage, sump pump and backflow valve get reviewed, and the lower walls take materials that survive a repeat.",
            },
            {
              q: "Should I worry about vermiculite in a Duvernay bungalow?",
              a: "It is worth testing. Attics from the Laval 1980-1990 building wave sometimes contain it. A sample goes to the lab before we open the ceiling, and the result changes the site method, not the project.",
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
          heading: "A Laval renovation, from Chomedey to Sainte-Rose",
          intro: "Tell us the sector and the work. We book the visit.",
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
          note: "Dilamco · general contractor in renovation since 2004 · (514) 820-0773",
        },
      },
    },
  ],
};
