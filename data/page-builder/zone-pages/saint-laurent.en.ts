import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneSaintLaurentPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "General Contractor in Saint-Laurent — Renovation",
    description:
      "RBQ-licensed general contractor in Saint-Laurent: post-war plex renovations, Bois-Franc condos, borough permits handled, one accountable lead.",
    path: "/zones/saint-laurent",
    ogAlt: "Residential renovation in Saint-Laurent by Dilamco",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Service areas", url: SITE.url + "/zones" },
    { name: "Saint-Laurent", url: SITE.url + "/zones/saint-laurent" },
  ],
  service: {
    name: "General contractor in Saint-Laurent",
    description:
      "Residential renovation in Saint-Laurent: post-war duplexes and plexes, bungalows, newer Bois-Franc and Nouveau-Saint-Laurent condos, borough permits and full coordination.",
    url: SITE.url + "/zones/saint-laurent",
    serviceType: "Residential renovation",
    areaServed: [
      "Saint-Laurent",
      "Bois-Franc",
      "Nouveau-Saint-Laurent",
      "Norgate",
      "Côte-Vertu",
      "Chameran",
      "Old Saint-Laurent",
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
          eyebrow: "Saint-Laurent",
          heading:
            "General contractor in Saint-Laurent, plexes, bungalows and condos",
          description:
            "Three eras of buildings, three sets of surprises. Borough permits and trade coordination included in the mandate.",
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
          badges: ["Plexes", "Condos", "Since 2004"],
          image: {
            src: "/images/generated/renovation/renovation-bath-hero-01.webp",
            alt: "Renovated bathroom in a Saint-Laurent plex",
          },
          caption: "Norgate, Côte-Vertu, Bois-Franc",
        },
      },
    },
    {
      id: "connaissance-locale",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What we know about Saint-Laurent buildings",
          description:
            "The population tripled between 1941 and 1951, then doubled again the next decade. A dated post-war stock, plus planned neighbourhoods built since 1990.",
          cards: [
            {
              title: "Norgate plexes",
              description:
                "Built from 1949 to the early 1950s: shared stacks, party walls, original electrical services.",
            },
            {
              title: "Permits and inspections division",
              description:
                "At 777 boulevard Marcel-Laurin, or online with a City digital services account.",
            },
            {
              title: "Bois-Franc and condos",
              description:
                "Neighbourhoods planned since the 1990s: access, elevator, work hours and common areas all governed.",
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
          heading: "What we build in Saint-Laurent",
          items: [
            {
              title: "Kitchen",
              href: "/services/renovation/cuisine",
              description:
                "Load-bearing status and electrical capacity confirmed before any opening.",
              image: {
                src: "/images/generated/spaces/space-cuisine-project-01.webp",
                alt: "Renovated kitchen with custom cabinets",
              },
              badges: ["Custom"],
              footerCtaLabel: "See kitchens",
            },
            {
              title: "Bathroom",
              href: "/services/renovation/salle-de-bain",
              description:
                "Shared plumbing stacks located before any drain is moved.",
              image: {
                src: "/images/generated/spaces/espaces-card-bath-01.webp",
                alt: "Renovated bathroom in an existing unit",
              },
              badges: ["Plexes"],
              footerCtaLabel: "See bathrooms",
            },
            {
              title: "Basement",
              href: "/services/renovation/sous-sol",
              description:
                "Headroom, moisture, egress and fire separation checked before the plan.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
                alt: "Basement finished as a living space",
              },
              badges: ["Code"],
              footerCtaLabel: "See basements",
            },
            {
              title: "Plexes and rental units",
              href: "/services/renovation",
              description:
                "Soundproofing redone while the floors are open, vacancy kept short.",
              image: {
                src: "/images/generated/services/service-renovation-project-01.webp",
                alt: "Renovation work in a Saint-Laurent duplex",
              },
              badges: ["Multi-unit"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Flooring",
              href: "/services/renovation/plancher",
              description:
                "Subfloor levelled before installation, thresholds and transitions aligned.",
              image: {
                src: "/images/generated/renovation/renovation-plancher-hero-01.webp",
                alt: "Flooring installed in a renovated room",
              },
              badges: ["Preparation"],
              footerCtaLabel: "See flooring",
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
            "In a post-war building, the real scope only shows up on site.",
          badges: ["On-site visit", "Free estimate"],
          cardTitle: "Our on-site checklist",
          items: [
            "Year built and alterations since",
            "Electrical service and panel capacity",
            "Position of shared plumbing stacks",
            "Load-bearing walls and party walls",
            "Soundproofing between units or floors",
            "Permitted use and number of units",
            "Condo syndicate constraints",
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
              q: "Where do I get a renovation permit in Saint-Laurent?",
              a: "From the borough's permits and inspections division, 777 boulevard Marcel-Laurin, or online through the City's digital services, which require creating an account. We prepare and file the application.",
            },
            {
              q: "Do I need a permit for interior work?",
              a: "Yes in most cases, as soon as the work touches structure, room layout, plumbing or electrical. Routine maintenance usually does not. Working without a permit can lead to a stop-work order.",
            },
            {
              q: "Do you work on the Norgate plexes?",
              a: "Yes. These buildings date from 1949 to the early 1950s. Electrical service, plumbing stacks, load-bearing walls and soundproofing between units are all checked before a plan is confirmed.",
            },
            {
              q: "Can a Bois-Franc condo be renovated?",
              a: "Yes, with extra preparation. The syndicate governs access, elevator use, protection of common areas and work hours. Some work touching common elements requires written authorization.",
            },
            {
              q: "Can I add a unit or change the use?",
              a: "It depends on the zoning at your address. The number of units, the permitted use and some exterior alterations are governed by the borough's planning by-laws. We check this before quoting, never after demolition.",
            },
            {
              q: "What does it cost, and are you insured?",
              a: "Our projects start around $25,000, a full kitchen between $35,000 and $50,000 and up. RBQ licence 8306-0806-27, valid with no restrictions since 2004, classes 1.2 and 1.3, liability and site insurance in force.",
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
          heading: "Planning a Saint-Laurent project?",
          intro: "We visit, confirm zoning and permits, then price the work.",
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
