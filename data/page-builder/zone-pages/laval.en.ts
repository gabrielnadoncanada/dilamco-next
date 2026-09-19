import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneLavalPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "General Contractor in Laval — Renovation",
    description:
      "RBQ-licensed general contractor in Laval: Chomedey bungalow renovations, basements, City urban planning permits, Mille Îles flood zones.",
    path: "/zones/laval",
    ogAlt: "Residential renovation in Laval by Dilamco",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Service areas", url: SITE.url + "/zones" },
    { name: "Laval", url: SITE.url + "/zones/laval" },
  ],
  service: {
    name: "General contractor in Laval",
    description:
      "Turnkey residential renovation in Laval: scoping, City of Laval urban planning permits, trade coordination and execution by an RBQ-licensed general contractor.",
    url: SITE.url + "/zones/laval",
    serviceType: "Residential renovation",
    areaServed: [
      "Laval",
      "Chomedey",
      "Sainte-Dorothée",
      "Laval-Ouest",
      "Fabreville",
      "Vimont",
      "Sainte-Rose",
      "Laval-des-Rapides",
      "Duvernay",
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
          heading: "Laval",
          description:
            "Basements, kitchens and water damage rebuilds for Laval homes, from a licensed general contractor.",
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
          image: {
            src: "/images/generated/renovation/renovation-cuisine-hero-01.webp",
            alt: "Renovated kitchen in a Chomedey bungalow",
          },
          facts: [
            {
              label: "Our base",
              value: "Pierrefonds-Roxboro, twenty-five minutes on Highway 13",
            },
            {
              label: "Where to apply for the permit",
              value: "Urban planning service, 1333 Chomedey Boulevard",
            },
            {
              label: "Type of homes",
              value: "1960s bungalows, on concrete block foundations",
            },
            {
              label: "First reply",
              value: "Our first reply comes within 24 to 48 business hours",
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
          heading: "What we know about Laval homes",
          rows: [
            {
              label: "Age of the neighbourhoods",
              value:
                "Chomedey and Laval-des-Rapides date mostly from 1960-1970, Duvernay and Vimont from 1980-1990.",
            },
            {
              label: "Local risk",
              value:
                "The river flooded streets in Laval-Ouest, Fabreville and Sainte-Dorothée in 2017.",
            },
            {
              label: "Common projects",
              value:
                "Finishing a basement, opening a closed kitchen, rebuilding after water damage.",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-sous-sol-salle-jeux-01.webp",
            alt: "Basement finished as a games room in a Vimont home",
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
          heading: "Our services in Laval",
          items: [
            {
              title: "Basement finishing",
              href: "/services/renovation/sous-sol",
              description:
                "We build a family room and a bedroom under a Vimont bungalow",
              image: {
                src: "/images/generated/spaces/space-sous-sol-bar-01.webp",
                alt: "Basement with a bar area in a Laval home",
              },
              footerCtaLabel: "See the service",
            },
            {
              title: "Kitchen renovation",
              href: "/services/renovation/cuisine",
              description:
                "We take down the wall of a closed kitchen in a 1960s bungalow",
              image: {
                src: "/images/generated/spaces/space-cuisine-project-02.webp",
                alt: "Kitchen opened to the dining room of a Laval bungalow",
              },
              footerCtaLabel: "See kitchens",
            },
            {
              title: "Post-damage rebuild",
              href: "/services/renovation/apres-sinistre",
              description:
                "We restore Laval-Ouest basements after a flood from the river",
              image: {
                src: "/images/generated/services/service-renovation-project-02.webp",
                alt: "Interior rebuild after flooding in Laval-Ouest",
              },
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
          heading: "Also served near Laval",
          columns: "2",
          items: [
            {
              title: "L'Île-Bizard–Sainte-Geneviève",
              href: "/zones/ile-bizard-sainte-genevieve",
            },
            {
              title: "Pierrefonds-Roxboro",
              href: "/zones/pierrefonds-roxboro",
            },
            {
              title: "Saint-Laurent",
              href: "/zones/saint-laurent",
            },
            {
              title: "Dollard-des-Ormeaux",
              href: "/zones/dollard-des-ormeaux",
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
          heading: "Laval questions we get",
          items: [
            {
              q: "Which permit does a Laval renovation need?",
              a: "The City splits interior and exterior renovation into two permits. We pick the right one, file the application online and follow the case until the permit arrives by email.",
            },
            {
              q: "My Laval-Ouest home sits in a flood zone, is that a dead end?",
              a: "Not necessarily. These zones are set by flood elevations written into the zoning by-law, from a study approved in 2014. We check the elevation for your address before drawing.",
            },
            {
              q: "What can be done with a flooded Fabreville basement?",
              a: "We step in once the place is dry: targeted demolition, decontamination, then rebuilding. The drain, the pump and the backflow valve get redone, and the lower walls take materials that survive a repeat.",
            },
            {
              q: "Should I worry about vermiculite in a Duvernay bungalow?",
              a: "It is worth testing. Attics in houses built between 1980 and 1990 sometimes contain it. A sample goes to the lab before we open the ceiling, and the result changes the method, not the project.",
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
          heading: "A renovation in Laval?",
          intro:
            "Tell us the sector and the work you want done. We book the visit.",
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
