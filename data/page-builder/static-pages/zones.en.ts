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
        variant: "centered",
        props: {
          badges: ["West Island", "Montréal", "Laval"],
          heading: "Where we work, city by city",
          description:
            "Eleven local pages. Each one gives the type of homes in the area, where to apply for the permit and the drive from our office.",
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
          columns: "3",
          items: [
            {
              title: "Pierrefonds-Roxboro",
              href: "/zones/pierrefonds-roxboro",
              description: "Our office is here",
              badges: ["Base"],
              ctaLabel: "See the area",
            },
            {
              title: "Dollard-des-Ormeaux",
              href: "/zones/dollard-des-ormeaux",
              description: "New zoning since 2025",
              ctaLabel: "See the area",
            },
            {
              title: "Kirkland",
              href: "/zones/kirkland",
              description: "Large lots, room to add on",
              ctaLabel: "See the area",
            },
            {
              title: "Pointe-Claire",
              href: "/zones/pointe-claire",
              description: "The old Village goes before a committee",
              ctaLabel: "See the area",
            },
            {
              title: "Beaconsfield",
              href: "/zones/beaconsfield",
              description: "Felling a tree needs a permit",
              ctaLabel: "See the area",
            },
            {
              title: "Dorval",
              href: "/zones/dorval",
              description: "Bungalows between the lake and the highway",
              ctaLabel: "See the area",
            },
            {
              title: "L'Île-Bizard–Sainte-Geneviève",
              href: "/zones/ile-bizard-sainte-genevieve",
              description: "Flood zones to check before anything",
              ctaLabel: "See the area",
            },
            {
              title: "Saint-Laurent",
              href: "/zones/saint-laurent",
              description: "Post-war plexes and newer condos",
              ctaLabel: "See the area",
            },
            {
              title: "Laval",
              href: "/zones/laval",
              description: "1960s bungalows ready for a redo",
              ctaLabel: "See the area",
            },
            {
              title: "Vaudreuil-Dorion",
              href: "/zones/vaudreuil-dorion",
              description: "Plenty of basements left to finish",
              ctaLabel: "See the area",
            },
            {
              title: "South Shore",
              href: "/zones/rive-sud",
              description: "Substantial projects only",
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
        variant: "fact-sheet",
        props: {
          heading: "Our territory, in brief",
          rows: [
            {
              label: "Our address",
              value: "18625 Larocque Street, Pierrefonds-Roxboro.",
            },
            {
              label: "Cities covered",
              value:
                "The West Island, Montréal, Laval, Vaudreuil-Soulanges and the South Shore.",
            },
            {
              label: "Drive time",
              value:
                "From ten minutes on Île Bizard to an hour in Châteauguay.",
            },
            {
              label: "Permits",
              value:
                "Every city and every borough has its own planning department.",
            },
            {
              label: "First reply",
              value:
                "We answer within 24 to 48 business hours, and the visit is free.",
            },
            {
              label: "Travel costs",
              value:
                "They are priced into the quote, never added once the job has started.",
            },
          ],
          image: {
            src: "/images/generated/services/service-renovation-hero-01.webp",
            alt: "Renovation site run from our Pierrefonds-Roxboro base",
          },
          note: "Business base and licence verified in the RBQ register on 2026-09-18.",
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
            "Give us the city, the type of work and the timeline. We book the visit.",
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
