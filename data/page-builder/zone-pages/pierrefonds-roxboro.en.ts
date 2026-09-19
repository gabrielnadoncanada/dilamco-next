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
            "Renovations, basements and rebuilding after water damage for borough homes, from our office on rue Larocque.",
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
            {
              label: "Our base",
              value: "Our office is on rue Larocque, inside the borough",
            },
            {
              label: "Where to apply for the permit",
              value: "Permit counter, 13665 boul. de Pierrefonds",
            },
            {
              label: "Type of homes",
              value: "Bungalows and cottages built between 1950 and 1980",
            },
            {
              label: "First reply",
              value: "You hear back within 24 to 48 business hours",
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
          heading: "What to know before renovating here",
          rows: [
            {
              label: "Local risk",
              value:
                "The Rivière des Prairies overflowed in 2017 and in 2019, and riverside basements paid for it.",
            },
            {
              label: "What is different here",
              value:
                "Many split-levels sit on a concrete slab that was never insulated.",
            },
            {
              label: "What the borough checks",
              value:
                "For an addition, it confirms the setbacks and where the building sits on the lot.",
            },
            {
              label: "How to file the application",
              value:
                "Drawings go in by email and the signature is booked by appointment.",
            },
            {
              label: "Common projects",
              value:
                "Redoing a basement, rebuilding after water damage, opening a bungalow's centre wall.",
            },
            {
              label: "From our base",
              value: "We are at your door in ten minutes, all year round.",
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
          heading: "Our services in Pierrefonds-Roxboro",
          items: [
            {
              title: "Basement",
              href: "/services/renovation/sous-sol",
              description:
                "We check the backflow valve and the pump before insulating, because the sector is riverside",
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
                "We rebuild after a sewer backup or a spring flood, with a file for your insurer",
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
                "We size the beam before opening a bungalow's centre wall",
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
          heading: "Also served near Pierrefonds-Roxboro",
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
              a: "At the borough permit counter, 13665 boulevard de Pierrefonds. Drawings go in by email and the signature is booked by appointment. We assemble the file and we follow its progress.",
            },
            {
              q: "My Roxboro basement flooded. What do you check first?",
              a: "The drain, the backflow valve, the pump and the slab, before any insulation goes back. After the 2017 and 2019 floods we use materials that can take water coming up.",
            },
            {
              q: "How long does a basement job take in the borough?",
              a: "A few weeks for a simple room, longer if the drainage has to be corrected before the walls close. The start date and the end date are written into the contract.",
            },
            {
              q: "What does finishing a bungalow basement cost here?",
              a: "A mandate starts around $25,000, and adding a powder room raises the total. What we find under the slab decides the rest. The site visit and the estimate are free.",
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
          heading: "A project in Pierrefonds-Roxboro?",
          intro:
            "Our office is ten minutes from your door and the visit costs nothing.",
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
        },
      },
    },
  ],
};
