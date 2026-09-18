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
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Vaudreuil-Dorion",
          heading:
            "General contractor in Vaudreuil-Dorion, from permit to handover",
          description:
            "From 18,600 residents in 1995 to nearly 46,000 today. A mostly recent housing stock, with an older Dorion core.",
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
          badges: ["Vaudreuil-Dorion", "Vaudreuil-Soulanges", "RBQ licence"],
          image: {
            src: "/images/generated/home/home-hero-premium-kitchen-01.webp",
            alt: "Renovated kitchen in a Vaudreuil-Dorion home",
          },
          caption: "Vaudreuil-Dorion, Hudson, Saint-Lazare, Île-Perrot",
        },
      },
    },
    {
      id: "housing",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What we know about homes here",
          description:
            "Two housing stocks sit side by side: the planned 2000-2020 neighbourhoods and pre-1960 old Dorion.",
          cards: [
            {
              title: "2000-2020 neighbourhoods",
              description:
                "Sound structure, entry-level original finishes, basements often delivered unfinished.",
            },
            {
              title: "Permits and inspections division",
              description:
                "Online filing, no permit issued on the spot, invoice paid before issuance.",
            },
            {
              title: "By-laws under review",
              description:
                "Planning programme revised, Harwood – De Lotbinière PPU updated in November 2025.",
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
          heading: "What we build in Vaudreuil-Dorion",
          items: [
            {
              title: "Basement finishing",
              href: "/services/renovation/sous-sol",
              description:
                "Finishing a bare basement: family room, bedroom, bathroom.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-bibliotheque-bureau-01.webp",
                alt: "Finished basement used as an office and library",
              },
              badges: ["Basement"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Kitchen renovation",
              href: "/services/renovation/cuisine",
              description:
                "Replacing original cabinets, rethinking the island and the traffic flow.",
              image: {
                src: "/images/generated/spaces/espaces-featured-cuisine-project-01.webp",
                alt: "Custom kitchen with a central island",
              },
              badges: ["Kitchen"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Home addition",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Adding a room, a garage or a storey, permit included.",
              image: {
                src: "/images/generated/renovation/renovation-extension-hero-01.webp",
                alt: "Residential addition tied into the existing house",
              },
              badges: ["Permit"],
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
          heading: "What we check on site",
          intro:
            "A 2008 house and a pre-1960 house do not lead to the same project.",
          badges: ["On-site visit", "Free estimate", "24-48 h reply"],
          cardTitle: "Our on-site checklist",
          items: [
            "Year of construction and neighbourhood",
            "Quality of the original finishes",
            "Clear height and possible basement egress",
            "Electrical service and panel capacity",
            "Load-bearing walls and prefabricated roof trusses",
            "Zoning and the by-laws in force today",
            "Permit type and the by-law 1709 fee",
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
          heading: "Frequently asked questions in Vaudreuil-Dorion",
          items: [
            {
              q: "How do I get a permit in Vaudreuil-Dorion?",
              a: "Through the permits and inspections division. The City strongly recommends filing online, since the platform lists the required documents. No permit is issued on the spot, and the invoice must be paid before the permit is released.",
            },
            {
              q: "What does the permit cost?",
              a: "Fees are set by municipal by-law no. 1709 and vary with the work. We include the amount during scoping. The permits and inspections division answers at 450 455-3371 for questions specific to your address.",
            },
            {
              q: "Are the planning by-laws changing?",
              a: "Yes. The planning programme and by-laws are under review, and the Harwood – De Lotbinière corridor is covered by a special planning programme updated in November 2025. We confirm the rules in force at the time of the project.",
            },
            {
              q: "Do you work in Hudson, Saint-Lazare and on Île-Perrot?",
              a: "Yes. Our territory covers Vaudreuil-Soulanges, the West Island, Montréal, Laval and the South Shore. Each neighbouring municipality has its own planning department, so we confirm the file with the right city before filing.",
            },
            {
              q: "What budget should I plan for?",
              a: "Our mandates start around $25,000. A full kitchen lands between $35,000 and $50,000 and up. The estimate is free and the budget is set in the written contract before work begins.",
            },
            {
              q: "Are you licensed and insured?",
              a: "Yes. RBQ licence 8306-0806-27, valid and unrestricted since 2004, categories 1.2 and 1.3 plus subcategory 12 for cabinets and countertops. Civil liability, job-site coverage and licence bond in force, with no claims on file.",
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
          heading: "Planning a project in Vaudreuil-Dorion?",
          intro:
            "We take Highway 40, confirm the by-laws and price it in writing.",
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
          note: "RBQ-licensed general contractor 8306-0806-27 · Pierrefonds-Roxboro · (514) 820-0773",
        },
      },
    },
  ],
};
