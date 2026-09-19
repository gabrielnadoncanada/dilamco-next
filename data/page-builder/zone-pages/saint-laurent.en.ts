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
            "Renovations for Saint-Laurent plexes, bungalows and condos, from a licensed West Island general contractor.",
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
              value: "Pierrefonds-Roxboro, twenty minutes on Highway 40",
            },
            {
              label: "Where to apply for the permit",
              value: "Permits division, 777 Marcel-Laurin Boulevard",
            },
            {
              label: "Type of homes",
              value: "Post-war plexes and condos built since 1990",
            },
            {
              label: "First reply",
              value: "We come back to you within 24 to 48 business hours",
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
          heading: "Saint-Laurent homes, in brief",
          rows: [
            {
              label: "Age of the neighbourhoods",
              value:
                "The plexes date from 1949 to 1955, the Bois-Franc condos from the 1990s.",
            },
            {
              label: "What to watch for",
              value:
                "Plexes share plumbing stacks and party walls between the units.",
            },
            {
              label: "Common projects",
              value:
                "Redoing a bathroom, opening a kitchen, soundproofing between two units.",
            },
          ],
          image: {
            src: "/images/generated/spaces/espaces-card-bath-01.webp",
            alt: "Renovated bathroom on the upper floor of a local duplex",
          },
        },
      },
    },
    {
      id: "services",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Our services in Saint-Laurent",
          items: [
            {
              title: "Bathroom",
              href: "/services/renovation/salle-de-bain",
              description:
                "We locate the plex's shared plumbing stack before moving any drain",
              image: {
                src: "/images/generated/spaces/space-bath-project-02.webp",
                alt: "Bathroom rebuilt in a Norgate apartment",
              },
              footerCtaLabel: "See bathrooms",
            },
            {
              title: "Kitchen",
              href: "/services/renovation/cuisine",
              description:
                "We check the structure before opening a bungalow's closed kitchen",
              image: {
                src: "/images/generated/spaces/space-cuisine-project-01.webp",
                alt: "Open kitchen in a bungalow near Côte-Vertu",
              },
              footerCtaLabel: "See kitchens",
            },
            {
              title: "Basement",
              href: "/services/renovation/sous-sol",
              description:
                "We measure the headroom and the exit route under a duplex",
              image: {
                src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
                alt: "Basement turned into living space under a duplex",
              },
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
          heading: "Also served near Saint-Laurent",
          columns: "2",
          items: [
            {
              title: "Dorval",
              href: "/zones/dorval",
            },
            {
              title: "Dollard-des-Ormeaux",
              href: "/zones/dollard-des-ormeaux",
            },
            {
              title: "Pierrefonds-Roxboro",
              href: "/zones/pierrefonds-roxboro",
            },
            {
              title: "Laval",
              href: "/zones/laval",
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
              q: "How do you file a permit application in Saint-Laurent?",
              a: "Online, with a City digital services account, or at the counter of the permits and inspections division, 777 Marcel-Laurin Boulevard. We build the file and we follow it through.",
            },
            {
              q: "Do you work on the Norgate plexes?",
              a: "Yes. The neighbourhood was built from 1949 into the early 1950s. We check the electrical service, the plumbing stacks and the sound separation between units before drawing the project.",
            },
            {
              q: "Can a Bois-Franc condo be renovated?",
              a: "Yes, with extra preparation. The board controls access, the elevator, protection of common areas and the work hours. Touching a common portion requires written authorization first.",
            },
            {
              q: "Can I add a unit to a Saint-Laurent duplex?",
              a: "It depends on the zoning at your address. The number of units, the permitted use and some changes visible from the street are all governed. We verify that before quoting, never after demolition.",
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
          heading: "A plex or condo to renovate in Saint-Laurent?",
          intro:
            "Give us the address, the floor and the type of building. We come and look.",
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
  ],
};
