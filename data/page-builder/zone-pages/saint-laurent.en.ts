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
      content: {
        type: "hero",
        variant: "zone",
        props: {
          eyebrow: "General contractor in",
          heading: "Saint-Laurent",
          description:
            "The population tripled between 1941 and 1951. Norgate plexes still carry their original electrical service.",
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
            src: "/images/generated/renovation/renovation-bath-hero-01.webp",
            alt: "Bathroom rebuilt in a Saint-Laurent plex",
          },
          facts: [
            {
              label: "Our base",
              value: "Pierrefonds-Roxboro · 20 min on Highway 40",
            },
            {
              label: "Permits",
              value: "Permits division, 777 Marcel-Laurin Boulevard",
            },
            {
              label: "Housing stock",
              value: "Post-war plexes, condos built since 1990",
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
          heading: "Three building eras in one borough",
          intro:
            "Norgate went up in 1949, Nouveau-Saint-Laurent in the early 1990s. The era sets the method.",
          rows: [
            {
              label: "Housing stock",
              value: "Plexes from 1949 to 1955, bungalows, Bois-Franc condos",
            },
            {
              label: "Permits",
              value: "City digital services account, applications filed online",
            },
            {
              label: "Condo rules",
              value: "The board controls access, elevator, common areas, work hours",
            },
            {
              label: "Watch for",
              value: "Shared plumbing stacks and party walls in the plexes",
            },
            {
              label: "Common projects",
              value: "Bathrooms, kitchens, soundproofing between units",
            },
            {
              label: "From our base",
              value: "Highway 40 east, Côte-Vertu or Marcel-Laurin exit",
            },
          ],
          image: {
            src: "/images/generated/spaces/espaces-card-bath-01.webp",
            alt: "Renovated bathroom on the upper floor of a local duplex",
          },
          note: "Sources: City of Montréal, 311 bank, borough history records. Verified 2026-09-18.",
        },
      },
    },
    {
      id: "services",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Our three typical Saint-Laurent jobs",
          items: [
            {
              title: "Bathroom",
              href: "/services/renovation/salle-de-bain",
              description:
                "Shared stack in a Norgate plex located before any drain moves",
              image: {
                src: "/images/generated/spaces/space-bath-project-02.webp",
                alt: "Bathroom rebuilt in a Norgate apartment",
              },
              badges: ["Plex"],
              footerCtaLabel: "See bathrooms",
            },
            {
              title: "Kitchen",
              href: "/services/renovation/cuisine",
              description:
                "Opening up a closed Côte-Vertu bungalow kitchen once the structure checks out",
              image: {
                src: "/images/generated/spaces/space-cuisine-project-01.webp",
                alt: "Open kitchen in a bungalow near Côte-Vertu",
              },
              badges: ["Structure"],
              footerCtaLabel: "See kitchens",
            },
            {
              title: "Basement",
              href: "/services/renovation/sous-sol",
              description:
                "Headroom and egress measured under an Old Saint-Laurent duplex",
              image: {
                src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
                alt: "Basement turned into living space under a duplex",
              },
              badges: ["Code"],
              footerCtaLabel: "See basements",
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
          heading: "Neighbouring areas we serve",
          columns: "2",
          items: [
            {
              title: "Dorval",
              href: "/zones/dorval",
              ctaLabel: "See the area",
            },
            {
              title: "Dollard-des-Ormeaux",
              href: "/zones/dollard-des-ormeaux",
              ctaLabel: "See the area",
            },
            {
              title: "Pierrefonds-Roxboro",
              href: "/zones/pierrefonds-roxboro",
              ctaLabel: "See the area",
            },
            {
              title: "Laval",
              href: "/zones/laval",
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
          heading: "Saint-Laurent questions we get",
          items: [
            {
              q: "How is a permit application filed in Saint-Laurent?",
              a: "Through the City's digital services, which require an account, or at the counter of the permits and inspections division, 777 Marcel-Laurin Boulevard. We build the file and follow it through.",
            },
            {
              q: "Do you work on the Norgate plexes?",
              a: "Yes. The neighbourhood was built from 1949 into the early 1950s, around Galeries Norgate, which opened on 5 December 1950. Electrical service, plumbing stacks and sound separation are checked before any plan.",
            },
            {
              q: "Can a Bois-Franc condo be renovated?",
              a: "Yes, with extra preparation. The board controls access, elevator use, protection of common areas and working hours. Touching a common portion requires written authorization first.",
            },
            {
              q: "Can I add a unit to a Saint-Laurent duplex?",
              a: "It depends on the zoning at your address. The number of units, the permitted use and some changes visible from the street are governed by planning rules. We verify that before quoting, never after demolition.",
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
          heading: "Renovating your Saint-Laurent plex or condo",
          intro: "Address, floor, building type. We visit and we price it.",
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
          note: "Licensed general contractor · based at 18625 Larocque Street · (514) 820-0773",
        },
      },
    },
  ],
};
