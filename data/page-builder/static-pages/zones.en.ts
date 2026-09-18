import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const pageEn: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Service areas — West Island, Montréal, Laval",
    description:
      "General contractor based in Pierrefonds-Roxboro: West Island, Montréal, Laval, Vaudreuil-Soulanges and the South Shore on request. See our service areas.",
    path: "/zones",
    ogAlt: "Dilamco general contractor service areas",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Service areas", url: SITE.url + "/zones" },
  ],
  service: {
    name: "General contractor — service areas",
    description:
      "Residential and commercial renovation by an RBQ-licensed general contractor based in Pierrefonds-Roxboro, active across the West Island, Montréal, Laval and Vaudreuil-Soulanges.",
    url: SITE.url + "/zones",
    serviceType: "Residential renovation",
    areaServed: [
      "West Island",
      "Montréal",
      "Laval",
      "Vaudreuil-Soulanges",
      "South Shore",
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
          eyebrow: "Service areas",
          heading: "General contractor across the West Island and Greater Montréal",
          description:
            "Based in Pierrefonds-Roxboro. Eleven area pages, from the municipal permit to handover.",
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
          badges: ["RBQ licence", "Since 2004", "West Island"],
          image: {
            src: "/images/generated/home/home-hero-premium-kitchen-01.webp",
            alt: "Renovation project completed by Dilamco in the West Island",
          },
          caption: "Base: Pierrefonds-Roxboro, Montréal",
        },
      },
    },
    {
      id: "zones",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "The areas we serve",
          intro:
            "One page per city: local housing stock, the permit department involved and a municipal FAQ.",
          columns: "3",
          items: [
            {
              title: "Pierrefonds-Roxboro",
              href: "/zones/pierrefonds-roxboro",
              description: "Our base, 1950s-1980s bungalows and cottages",
              badges: ["Home base"],
              ctaLabel: "See the area",
            },
            {
              title: "Dollard-des-Ormeaux",
              href: "/zones/dollard-des-ormeaux",
              description: "Zoning rewritten in 2025",
              ctaLabel: "See the area",
            },
            {
              title: "Kirkland",
              href: "/zones/kirkland",
              description: "Large lots, major additions",
              ctaLabel: "See the area",
            },
            {
              title: "Pointe-Claire",
              href: "/zones/pointe-claire",
              description: "Heritage Village and architectural review files",
              ctaLabel: "See the area",
            },
            {
              title: "Beaconsfield",
              href: "/zones/beaconsfield",
              description: "Zoning by-law 720 and tree permits",
              ctaLabel: "See the area",
            },
            {
              title: "Dorval",
              href: "/zones/dorval",
              description: "Homes and commercial spaces near the airport",
              ctaLabel: "See the area",
            },
            {
              title: "L'Île-Bizard–Sainte-Geneviève",
              href: "/zones/ile-bizard-sainte-genevieve",
              description: "Waterfront homes, wide lots",
              ctaLabel: "See the area",
            },
            {
              title: "Saint-Laurent",
              href: "/zones/saint-laurent",
              description: "Plexes and post-war bungalows",
              ctaLabel: "See the area",
            },
            {
              title: "Laval",
              href: "/zones/laval",
              description: "From Chomedey to Sainte-Rose",
              ctaLabel: "See the area",
            },
            {
              title: "Vaudreuil-Dorion",
              href: "/zones/vaudreuil-dorion",
              description: "Vaudreuil-Soulanges, fast-growing sectors",
              ctaLabel: "See the area",
            },
            {
              title: "South Shore",
              href: "/zones/rive-sud",
              description: "Longueuil, Brossard, Saint-Lambert and nearby",
              ctaLabel: "See the area",
            },
          ],
        },
      },
    },
    {
      id: "territoire",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "How our territory is drawn",
          description:
            "On a project that runs for weeks, distance decides how fast a problem gets solved.",
          cards: [
            {
              title: "West Island",
              description:
                "Under twenty minutes from our base, with tight site follow-up.",
            },
            {
              title: "Montréal, Laval, Vaudreuil-Soulanges",
              description:
                "Regular territory, same method, planning department confirmed at scoping.",
            },
            {
              title: "South Shore and beyond",
              description:
                "Case by case, depending on the scope of the project and the season.",
            },
          ],
          columns: "3",
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
              q: "Which territory do you serve exactly?",
              a: "Our core territory is the West Island, from our base at 18625 rue Larocque in Pierrefonds-Roxboro. We work regularly elsewhere on the island of Montréal, in Laval and across Vaudreuil-Soulanges. The South Shore is assessed case by case.",
            },
            {
              q: "Do you charge travel fees?",
              a: "The visit and the estimate are free within our service areas. Farther out, travel is built into the quote rather than billed separately partway through the project. Everything is written into the contract before work begins.",
            },
            {
              q: "My city is not on the list. Do you work there?",
              a: "Possibly. The list covers the municipalities where we work most often, not the only ones where we accept mandates. Write to us with the city and the nature of the project; we will say plainly if it is not a mandate for us.",
            },
            {
              q: "Do you handle the permit in every city?",
              a: "Yes. Every city and borough has its own planning department, by-laws and process. We assemble and file the application as part of the mandate, and the processing time is built into the schedule.",
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
          heading: "Tell us where your project is",
          intro:
            "City, type of work, target date. We confirm quickly and book the visit.",
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
          note: "Dilamco · 18625 rue Larocque, Pierrefonds-Roxboro · RBQ 8306-0806-27",
        },
      },
    },
  ],
};
