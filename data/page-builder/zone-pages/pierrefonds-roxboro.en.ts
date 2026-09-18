import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zonePierrefondsRoxboroPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "General contractor in Pierrefonds-Roxboro",
    description:
      "RBQ-licensed general contractor based on rue Larocque in Pierrefonds-Roxboro: renovations, basements, additions and post-disaster reconstruction.",
    path: "/zones/pierrefonds-roxboro",
    ogAlt: "Home renovation in Pierrefonds-Roxboro by Dilamco",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Service areas", url: SITE.url + "/zones" },
    {
      name: "Pierrefonds-Roxboro",
      url: SITE.url + "/zones/pierrefonds-roxboro",
    },
  ],
  service: {
    name: "General contractor in Pierrefonds-Roxboro",
    description:
      "Home renovation, basement finishing, additions and post-disaster reconstruction in Pierrefonds-Roxboro, by an RBQ-licensed general contractor based in the borough.",
    url: SITE.url + "/zones/pierrefonds-roxboro",
    serviceType: "Residential renovation",
    areaServed: [
      "Pierrefonds-Roxboro",
      "Pierrefonds",
      "Roxboro",
      "Cap-Saint-Jacques",
      "Bois-de-Liesse",
      "Cloverdale",
      "West Island",
      "Montréal",
    ],
  },
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "zone",
        props: {
          eyebrow: "General contractor in",
          heading: "Pierrefonds-Roxboro",
          description:
            "Our office sits on rue Larocque, in the borough where we have run residential job sites since 2004.",
          actions: [
            {
              label: "Free quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See basements",
              href: "/services/renovation/sous-sol",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/services/service-renovation-hero-01.webp",
            alt: "Home renovation in Pierrefonds-Roxboro",
          },
          facts: [
            { label: "Our base", value: "Rue Larocque, inside the borough" },
            { label: "Permits", value: "Counter at 13665 boul. de Pierrefonds" },
            { label: "Housing stock", value: "Bungalows and cottages, 1950 to 1980" },
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
          heading: "Our home turf, street by street",
          intro:
            "Seventy thousand residents over twenty-seven square kilometres, a river to the north and basements that have already taken on water.",
          rows: [
            {
              label: "Dominant stock",
              value: "Split-levels and semis, slabs rarely insulated",
            },
            {
              label: "Filing",
              value: "Drawings by email, signature by appointment",
            },
            {
              label: "Additions",
              value: "Setbacks and siting confirmed by the borough",
            },
            {
              label: "Riverside risk",
              value: "Rivière des Prairies floods, 2017 and 2019",
            },
            {
              label: "Common projects",
              value: "Basement redo, post-disaster work, centre wall opened",
            },
            {
              label: "Drive time",
              value: "On site in ten minutes, all year round",
            },
          ],
          image: {
            src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
            alt: "Finished basement in a Pierrefonds-Roxboro bungalow",
          },
          note: "Sources: City of Montréal, UQAM, Wikipedia. Verified 2026-09-18.",
        },
      },
    },
    {
      id: "services",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "What we build in the borough",
          items: [
            {
              title: "Basement",
              href: "/services/renovation/sous-sol",
              description:
                "Backflow valve and pump checked before insulating, riverside obliges",
              image: {
                src: "/images/generated/spaces/space-sous-sol-salle-jeux-01.webp",
                alt: "Basement games room finished in Pierrefonds",
              },
              badges: ["Moisture"],
              footerCtaLabel: "See basements",
            },
            {
              title: "After a disaster",
              href: "/services/renovation/apres-sinistre",
              description:
                "Backup or spring flood, rebuilt with a file your insurer can follow",
              image: {
                src: "/images/generated/services/service-renovation-project-02.webp",
                alt: "Rebuilding after water damage in Roxboro",
              },
              badges: ["Insurance"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Kitchen",
              href: "/services/renovation/cuisine",
              description:
                "Centre wall of local bungalows carries load, beam sized first",
              image: {
                src: "/images/realisations/cuisine-aire-ouverte-ilot-colonnes-01.webp",
                alt: "Open kitchen in a borough bungalow",
              },
              badges: ["Structure"],
              footerCtaLabel: "See kitchens",
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
          heading: "Our other West Island sectors",
          columns: "2",
          items: [
            {
              title: "Dollard-des-Ormeaux",
              href: "/zones/dollard-des-ormeaux",
            },
            {
              title: "Île-Bizard–Sainte-Geneviève",
              href: "/zones/ile-bizard-sainte-genevieve",
            },
            { title: "Kirkland", href: "/zones/kirkland" },
            { title: "Laval", href: "/zones/laval" },
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
              q: "Where do I get a renovation permit in Pierrefonds-Roxboro?",
              a: "At the borough permit counter, 13665 boulevard de Pierrefonds. Drawings go in by email and the signature is booked by appointment. We assemble the file and follow it through.",
            },
            {
              q: "My Roxboro basement flooded. What do you check?",
              a: "The drain, the backflow valve, the sump pump and the slab, before any insulation goes back. After the 2017 and 2019 floods we pick materials that tolerate water coming up.",
            },
            {
              q: "How long does a basement job take here?",
              a: "A few weeks for a simple room, longer when drainage has to be corrected before closing up. Start and delivery dates are written into the contract, never promised verbally.",
            },
            {
              q: "What does a Pierrefonds bungalow basement cost?",
              a: "A mandate starts around $25,000, and adding a powder room widens the scope. What we find under the slab decides the rest. Site visit and estimate are free.",
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
          heading: "Renovating in Pierrefonds-Roxboro",
          intro: "Your house is ten minutes from our office.",
          actions: [
            {
              label: "Request a quote",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See service areas",
              href: "/zones",
              variant: "ghost",
            },
          ],
          note: "Dilamco · 18625 rue Larocque, Pierrefonds-Roxboro",
        },
      },
    },
  ],
};
