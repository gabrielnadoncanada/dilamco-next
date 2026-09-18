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
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "South Shore",
          heading: "General contractor on Montreal's South Shore",
          description:
            "Longueuil, Brossard, Saint-Lambert, Boucherville, Candiac, Châteauguay. Substantial mandates: full renovations, additions, disaster rebuilds.",
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
          badges: ["RBQ licence", "Since 2004", "Travel in contract"],
          image: {
            src: "/images/generated/renovation/renovation-extension-hero-01.webp",
            alt: "Residential addition built by a general contractor on Montreal's South Shore",
          },
          caption: "Travel priced in the written quote",
        },
      },
    },
    {
      id: "connaissance-locale",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What we know about South Shore homes",
          description:
            "Four housing stocks side by side, eight cities, eight sets of by-laws. A serious quote starts by knowing which one applies.",
          cards: [
            {
              title: "Post-war bungalows",
              description:
                "Vieux-Longueuil, Greenfield Park, Saint-Hubert: original slabs, joists and electrical services.",
            },
            {
              title: "Permits, city by city",
              description:
                "Longueuil: Direction de l'aménagement et de l'urbanisme, Permis en ligne portal.",
            },
            {
              title: "Heritage and flood zones",
              description:
                "Architectural review in Saint-Lambert, Vieux-Boucherville heritage site, Châteauguay dikes.",
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
          heading: "What we build on the South Shore",
          items: [
            {
              title: "Home addition",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Rear extension, added storey or garage conversion, municipal permit included.",
              image: {
                src: "/images/generated/renovation/renovation-extension-approach-01.webp",
                alt: "Planning a residential addition on Montreal's South Shore",
              },
              badges: ["Permit"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Full interior renovation",
              href: "/services/renovation",
              description:
                "Taking the house end to end rather than one room at a time.",
              image: {
                src: "/images/generated/services/service-renovation-project-02.webp",
                alt: "Full interior renovation coordinated by a general contractor",
              },
              badges: ["Turnkey"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Post-damage renovation",
              href: "/services/renovation/apres-sinistre",
              description:
                "Water damage, sewer backup or fire: a compliant, documented rebuild.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-materials-01.webp",
                alt: "Materials staged for a basement rebuild",
              },
              badges: ["Insurance"],
              footerCtaLabel: "See the service",
            },
          ],
        },
      },
    },
    {
      id: "acces",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "Let us be plain about the distance",
          intro:
            "Our base is in Pierrefonds-Roxboro. Travel is priced in the quote, never added partway through the project.",
          badges: [
            "Substantial mandates",
            "Travel in contract",
            "Free estimate",
          ],
          cardTitle: "How we cover the South Shore",
          items: [
            "Châteauguay, La Prairie, Candiac: via Highway 30",
            "Brossard and Longueuil: Samuel-De Champlain bridge",
            "Boucherville and Saint-Bruno: Louis-Hippolyte-La Fontaine tunnel",
            "Travel included as a visible quote line",
            "Substantial mandates, not two-day jobs",
            "A full day on site, not back-and-forth trips",
          ],
          actions: [
            {
              label: "Describe your project",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our renovation services",
              href: "/services/renovation",
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
          heading: "Frequently asked questions on the South Shore",
          items: [
            {
              q: "Do you really work on the South Shore?",
              a: "Yes, for substantial mandates: full renovations, additions, conversions and post-disaster rebuilds. Travel is priced in the quote. For a one or two day job, a contractor from your own municipality will serve you better, and we will say so.",
            },
            {
              q: "Which South Shore cities do you cover?",
              a: "Longueuil and its Vieux-Longueuil, Saint-Hubert and Greenfield Park boroughs, plus Brossard, Saint-Lambert, Boucherville, Saint-Bruno-de-Montarville, Candiac, La Prairie and Châteauguay. Elsewhere, the answer depends on the scope of the project.",
            },
            {
              q: "Who handles the permit in Longueuil or Brossard?",
              a: "We do. In Longueuil the file goes through the Direction de l'aménagement et de l'urbanisme and the Permis en ligne portal, used for filing, payment and tracking. In Brossard, through the Direction de l'urbanisme. We handle the exchanges with the analyst.",
            },
            {
              q: "Is renovating in Saint-Lambert more complicated?",
              a: "Longer, mostly. Any exterior change visible from the street falls under the site planning and architectural integration by-law: the application goes to the planning advisory committee before the permit. The interior can be modernized freely.",
            },
            {
              q: "What does a renovation cost on the South Shore?",
              a: "Our mandates start around $25,000. A full kitchen lands between $35,000 and $50,000 and up. An addition is priced after zoning and setbacks are verified. The estimate is free and the budget is set in the contract.",
            },
            {
              q: "Do you build new houses?",
              a: "No. Our RBQ categories 1.2 and 1.3 cover renovation, conversion, additions, post-disaster rebuilds and commercial fit-outs. We do not build new houses and we do not offer a new home warranty plan.",
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
          heading: "A substantial South Shore project?",
          intro:
            "Describe the work and the address. We confirm, we visit, we price it in writing.",
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
          note: "Dilamco · RBQ 8306-0806-27 · Longueuil, Brossard, Saint-Lambert, Boucherville, Candiac, La Prairie, Châteauguay",
        },
      },
    },
  ],
};
