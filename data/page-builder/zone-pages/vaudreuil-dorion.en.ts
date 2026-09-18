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
            "From 18,600 residents in 1995 to nearly 46,000 today. A lot of basements are still waiting to be finished.",
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
              value: "Pierrefonds-Roxboro · 30 min on Highway 40",
            },
            {
              label: "Permits",
              value: "Permits and inspections division, 450 455-3371",
            },
            {
              label: "Housing stock",
              value: "2000-2020 subdivisions, old Dorion from before 1960",
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
          heading: "A city that doubled in thirty years",
          intro:
            "The 2021 census counted 43,268 residents, 13.5% more than in 2016. The building stock follows that curve exactly.",
          rows: [
            {
              label: "Housing stock",
              value: "Homes built 2000 to 2020, entry-level original finishes",
            },
            {
              label: "Older core",
              value: "Old Dorion from before 1960, systems to replace outright",
            },
            {
              label: "Permits",
              value: "No permit issued on the spot, invoice paid before release",
            },
            {
              label: "Fees",
              value: "Set by municipal by-law no. 1709, according to the work",
            },
            {
              label: "Planning rules",
              value: "Urban plan under review, Harwood – De Lotbinière PPU updated",
            },
            {
              label: "Common projects",
              value: "Finishing basements, kitchens, adding a room or a garage",
            },
            {
              label: "From our base",
              value: "Île-aux-Tourtes bridge, then the Harwood exit",
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
          heading: "Three typical Vaudreuil-Soulanges jobs",
          items: [
            {
              title: "Basement finishing",
              href: "/services/renovation/sous-sol",
              description:
                "Finishing the bare basement handed over by a Cité-des-Jeunes builder",
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
                "Replacing the original cabinets of a 2008 model and reworking the island",
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
                "Adding a room or a garage, by-law 1709 fees included in the scope",
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
          heading: "Before the bridge, in the West Island",
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
              a: "Through the permits and inspections division. The City strongly recommends applying online, where the required document list is shown. No permit is handed over in person and the invoice must be paid before it is released.",
            },
            {
              q: "What does a Vaudreuil-Dorion permit cost?",
              a: "Fees are set by municipal by-law no. 1709 and vary with the nature of the work. The amount goes into the scope. The permits and inspections division answers at 450 455-3371 for address-specific cases.",
            },
            {
              q: "Are the planning rules changing right now?",
              a: "Yes. The urban plan and its by-laws are under review, and the Harwood – De Lotbinière corridor has a special planning programme updated on 12 November 2025. Rules are confirmed at the time of the project.",
            },
            {
              q: "Why are so many basements here left unfinished?",
              a: "Subdivisions built between 2000 and 2020 were often delivered with a bare basement. Finishing stays possible later: headroom, egress, drainage and fire separation are checked before the rooms are drawn.",
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
          heading: "Finishing or reworking your Vaudreuil-Dorion home",
          intro: "Send the address and the list of work you want done.",
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
          note: "Dilamco · Vaudreuil-Soulanges and the West Island · (514) 820-0773",
        },
      },
    },
  ],
};
