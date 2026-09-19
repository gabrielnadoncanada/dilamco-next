import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneVaudreuilDorionPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "General Contractor in Vaudreuil-Dorion — Renovation",
    description:
      "RBQ-licensed general contractor in Vaudreuil-Dorion: renovating 2000s homes, finishing basements, permits filed with the City's permits division.",
    path: "/zones/vaudreuil-dorion",
    ogAlt: "Residential renovation in Vaudreuil-Dorion by Dilamco",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Service areas", url: SITE.url + "/zones" },
    { name: "Vaudreuil-Dorion", url: SITE.url + "/zones/vaudreuil-dorion" },
  ],
  service: {
    name: "General contractor in Vaudreuil-Dorion",
    description:
      "Turnkey residential renovation in Vaudreuil-Dorion and Vaudreuil-Soulanges: scoping, municipal permits, trade coordination and execution by an RBQ-licensed general contractor.",
    url: SITE.url + "/zones/vaudreuil-dorion",
    serviceType: "Residential renovation",
    areaServed: [
      "Vaudreuil-Dorion",
      "Dorion",
      "Harwood",
      "Cité-des-Jeunes",
      "Hudson",
      "Saint-Lazare",
      "Vaudreuil-Soulanges",
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
          heading: "Vaudreuil-Dorion",
          description:
            "Basement finishing, kitchens and additions for Vaudreuil-Dorion homes, from a licensed general contractor.",
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
          image: {
            src: "/images/generated/home/home-hero-premium-kitchen-01.webp",
            alt: "Rebuilt kitchen in a recent Vaudreuil-Dorion home",
          },
          facts: [
            {
              label: "Our base",
              value: "Pierrefonds-Roxboro, thirty minutes on Highway 40",
            },
            {
              label: "Where to apply for the permit",
              value: "Permits and inspections division, 450 455-3371",
            },
            {
              label: "Type of homes",
              value: "Houses from 2000 to 2020, plus old Dorion before 1960",
            },
            {
              label: "First reply",
              value: "We get back to you in 24 to 48 business hours",
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
          heading: "What to know before renovating in Vaudreuil-Dorion",
          rows: [
            {
              label: "Age of the neighbourhoods",
              value:
                "The newer areas date from 2000 to 2020 and come with entry-level original finishes.",
            },
            {
              label: "What is different here",
              value:
                "Many recent houses were handed over with a basement that was never finished.",
            },
            {
              label: "How to get the permit",
              value:
                "No permit is handed over on the spot, and the invoice must be paid before it is released.",
            },
            {
              label: "What the permit costs",
              value:
                "The fee is set by a municipal by-law and varies with the nature of the work.",
            },
            {
              label: "What is changing soon",
              value:
                "The urban plan is under review and the Harwood corridor was updated on 12 November 2025.",
            },
            {
              label: "Common projects",
              value:
                "Finishing a basement, redoing a kitchen, adding a room or a garage.",
            },
            {
              label: "From our base",
              value: "Île-aux-Tourtes bridge, then the Harwood exit.",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-sous-sol-rangement-01.webp",
            alt: "Finished basement with storage in a Vaudreuil-Dorion home",
          },
          note: "Sources: City of Vaudreuil-Dorion, Statistics Canada 2021. Verified 2026-09-18.",
        },
      },
    },
    {
      id: "services",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Our services in Vaudreuil-Dorion",
          items: [
            {
              title: "Basement finishing",
              href: "/services/renovation/sous-sol",
              description:
                "We finish the bare basement the builder handed over",
              image: {
                src: "/images/generated/spaces/space-sous-sol-bibliotheque-bureau-01.webp",
                alt: "Basement turned into an office in a Cité-des-Jeunes home",
              },
              badges: ["Basement"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Kitchen renovation",
              href: "/services/renovation/cuisine",
              description:
                "We replace the original cabinets of a 2008 house and rework the island",
              image: {
                src: "/images/generated/spaces/espaces-featured-cuisine-project-01.webp",
                alt: "Island replacing the original kitchen of a 2008 house",
              },
              badges: ["Kitchen"],
              footerCtaLabel: "See kitchens",
            },
            {
              title: "Home addition",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "We add a room or a garage, permit fees included in the price",
              image: {
                src: "/images/generated/renovation/renovation-extension-hero-01.webp",
                alt: "Addition blended into a Vaudreuil-Dorion house",
              },
              badges: ["Permits"],
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
          heading: "Neighbouring towns we serve",
          columns: "3",
          items: [
            {
              title: "Beaconsfield",
              href: "/zones/beaconsfield",
              ctaLabel: "See the area",
            },
            {
              title: "Kirkland",
              href: "/zones/kirkland",
              ctaLabel: "See the area",
            },
            {
              title: "Pierrefonds-Roxboro",
              href: "/zones/pierrefonds-roxboro",
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
          heading: "Vaudreuil-Dorion questions we get",
          items: [
            {
              q: "How do you obtain a permit in Vaudreuil-Dorion?",
              a: "Through the permits and inspections division. The City recommends applying online, where the required document list is shown. No permit is handed over on the spot and the invoice is paid before release.",
            },
            {
              q: "What does a Vaudreuil-Dorion permit cost?",
              a: "The fee is set by a municipal by-law and varies with the nature of the work. The amount goes into our price. The permits and inspections division answers at 450 455-3371 for specific cases.",
            },
            {
              q: "Are the planning rules changing right now?",
              a: "Yes. The urban plan and its by-laws are under review, and the Harwood corridor has a special programme updated on 12 November 2025. We confirm the rules at the time of your project.",
            },
            {
              q: "Why are so many basements here left unfinished?",
              a: "Areas built between 2000 and 2020 were often handed over with a bare basement. The headroom, the exit route, the drainage and the fire separation are checked before the rooms are drawn.",
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
          heading: "A project in Vaudreuil-Dorion?",
          intro:
            "Send us the address and the list of work you would like done.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our service areas",
              href: "/zones",
              variant: "ghost",
            },
          ],
        },
      },
    },
  ],
};
