import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneRiveSudPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "General contractor on Montreal's South Shore",
    description:
      "RBQ-licensed general contractor on Montreal's South Shore: full renovations, home additions and post-disaster rebuilds. Detailed written quote.",
    path: "/zones/rive-sud",
    ogAlt: "Residential renovation on Montreal's South Shore by Dilamco",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Service areas", url: SITE.url + "/zones" },
    { name: "South Shore", url: SITE.url + "/zones/rive-sud" },
  ],
  service: {
    name: "General contractor on Montreal's South Shore",
    description:
      "Full residential renovations, home additions, conversions and post-disaster rebuilds on Montreal's South Shore, by a general contractor licensed by the RBQ since 2004.",
    url: SITE.url + "/zones/rive-sud",
    serviceType: "Residential renovation",
    areaServed: [
      "South Shore of Montreal",
      "Longueuil",
      "Brossard",
      "Saint-Lambert",
      "Boucherville",
      "Saint-Bruno-de-Montarville",
      "Candiac",
      "La Prairie",
      "Châteauguay",
    ],
  },
  blocks: [
    {
      id: "hero",
      content: {
        type: "hero",
        variant: "zone",
        props: {
          eyebrow: "General contractor on the",
          heading: "South Shore",
          description:
            "Full renovations, additions and post-damage rebuilds on the South Shore, for substantial projects.",
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
            src: "/images/generated/services/service-renovation-project-02.webp",
            alt: "Full interior renovation carried out on Montreal's South Shore",
          },
          facts: [
            {
              label: "Our base",
              value: "Pierrefonds-Roxboro, 45 to 60 minutes away",
            },
            {
              label: "Where to apply for the permit",
              value: "Each city has its own planning department and rules",
            },
            {
              label: "Type of homes",
              value: "Post-war bungalows and planned 1960s neighbourhoods",
            },
            {
              label: "First reply",
              value: "We call back within 24 to 48 business hours",
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
          heading: "What to know before renovating on the South Shore",
          intro:
            "Eight cities, eight planning by-laws. Knowing which one applies changes the price.",
          rows: [
            {
              label: "Age of the neighbourhoods",
              value:
                "Old Longueuil is lined with bungalows, and Brossard was planned in the 1960s.",
            },
            {
              label: "How to file the application",
              value:
                "In Longueuil through the Permis en ligne portal, in Brossard through its planning department.",
            },
            {
              label: "What is different here",
              value:
                "In Saint-Lambert, a committee approves how work visible from the street will look.",
            },
            {
              label: "Local risk",
              value:
                "In Châteauguay, up to 1,100 homes sit in a flood zone and the dykes are not recognized.",
            },
            {
              label: "Common projects",
              value:
                "Renovating a whole house, adding on, rebuilding after water damage.",
            },
            {
              label: "From our base",
              value:
                "Highway 30, the Samuel-De Champlain bridge or the Louis-Hippolyte-La Fontaine tunnel.",
            },
          ],
          image: {
            src: "/images/generated/renovation/renovation-extension-hero-01.webp",
            alt: "Completed addition in a South Shore municipality",
          },
          note: "Sources: cities of Longueuil, Brossard, Saint-Lambert and Candiac, Le Soleil de Châteauguay. Verified 2026-09-18.",
        },
      },
    },
    {
      id: "services",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Our services on the South Shore",
          items: [
            {
              title: "Home addition",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "We add a rear extension or a storey on an Old Longueuil bungalow",
              image: {
                src: "/images/generated/renovation/renovation-extension-approach-01.webp",
                alt: "Addition plan for an Old Longueuil bungalow",
              },
              badges: ["Permits"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Full renovation",
              href: "/services/renovation",
              description:
                "We take a Brossard home from end to end in one go",
              image: {
                src: "/images/generated/services/service-renovation-project-03.webp",
                alt: "Full renovation of a house in a Brossard sector",
              },
              badges: ["Turnkey"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Post-damage rebuild",
              href: "/services/renovation/apres-sinistre",
              description:
                "We restore a home after a sewer backup or water damage in Châteauguay",
              image: {
                src: "/images/generated/spaces/space-sous-sol-materials-01.webp",
                alt: "Materials ready for a basement rebuild in Châteauguay",
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
          heading: "Also served across our territory",
          columns: "2",
          items: [
            {
              title: "Vaudreuil-Dorion",
              href: "/zones/vaudreuil-dorion",
              ctaLabel: "See the area",
            },
            {
              title: "Dorval",
              href: "/zones/dorval",
              ctaLabel: "See the area",
            },
            {
              title: "Saint-Laurent",
              href: "/zones/saint-laurent",
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
          heading: "South Shore questions we get",
          items: [
            {
              q: "Which South Shore cities do you cover?",
              a: "Longueuil, with Vieux-Longueuil, Saint-Hubert and Greenfield Park, then Brossard, Saint-Lambert, Boucherville, Saint-Bruno-de-Montarville, Candiac, La Prairie and Châteauguay. Beyond that, the answer depends on the size of the project.",
            },
            {
              q: "Who prepares the permit file in Longueuil or Brossard?",
              a: "We do. In Longueuil the file goes through the planning department and the Permis en ligne portal. In Brossard it goes through its planning department and its online request portal.",
            },
            {
              q: "Does renovating in Saint-Lambert take longer?",
              a: "Often, yes. Any exterior change visible from the street goes before a planning committee before the permit is issued. Interior work skips that detour.",
            },
            {
              q: "What does the Châteauguay flood zone change for a basement?",
              a: "A great deal. Between 700 and 1,100 homes are potentially concerned, and the dykes along Salaberry Nord and D'Youville boulevards are not recognized as protection works. Lower walls and drainage are designed accordingly.",
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
          heading: "A substantial project on the South Shore?",
          intro:
            "Give us the address, the size of the work and the timeline. We answer you straight.",
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
          note: "Travel is priced into the quote, never added mid-project.",
        },
      },
    },
  ],
};
