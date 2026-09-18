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
            "Eleven local pages. Each one gives the housing stock, the permit office involved and the drive from our base.",
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
              description: "Our home base",
              badges: ["Base"],
              ctaLabel: "See the area",
            },
            {
              title: "Dollard-des-Ormeaux",
              href: "/zones/dollard-des-ormeaux",
              description: "Zoning overhauled in 2025",
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
              description: "Heritage village under PIIA",
              ctaLabel: "See the area",
            },
            {
              title: "Beaconsfield",
              href: "/zones/beaconsfield",
              description: "Tree felling by-law",
              ctaLabel: "See the area",
            },
            {
              title: "Dorval",
              href: "/zones/dorval",
              description: "Housing near the airport",
              ctaLabel: "See the area",
            },
            {
              title: "L'Île-Bizard–Sainte-Geneviève",
              href: "/zones/ile-bizard-sainte-genevieve",
              description: "Mapped flood zones",
              ctaLabel: "See the area",
            },
            {
              title: "Saint-Laurent",
              href: "/zones/saint-laurent",
              description: "Post-war plexes and condos",
              ctaLabel: "See the area",
            },
            {
              title: "Laval",
              href: "/zones/laval",
              description: "Bungalows from the 1960s",
              ctaLabel: "See the area",
            },
            {
              title: "Vaudreuil-Dorion",
              href: "/zones/vaudreuil-dorion",
              description: "Basements delivered bare",
              ctaLabel: "See the area",
            },
            {
              title: "South Shore",
              href: "/zones/rive-sud",
              description: "Substantial mandates only",
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
          heading: "Our territory, measured in minutes",
          intro:
            "On a job that runs for weeks, distance decides how fast a problem gets solved on site.",
          rows: [
            {
              label: "Base",
              value: "18625 Larocque Street, Pierrefonds-Roxboro",
            },
            {
              label: "Radius",
              value: "West Island, Montréal, Laval, Vaudreuil-Soulanges, South Shore",
            },
            {
              label: "Drive time",
              value: "From 10 minutes on Île Bizard to an hour in Châteauguay",
            },
            {
              label: "Permits",
              value: "A different planning office in every city and borough",
            },
            {
              label: "First reply",
              value: "24 to 48 business hours, free visit and estimate",
            },
            {
              label: "Travel",
              value: "Priced into the quote, not billed along the way",
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
            "City, type of work, timeline. We confirm and book the visit.",
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
          note: "Dilamco · 18625 Larocque Street, Pierrefonds-Roxboro · (514) 820-0773",
        },
      },
    },
  ],
};
