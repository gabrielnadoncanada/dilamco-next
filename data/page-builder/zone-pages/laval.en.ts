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
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "Laval",
          heading: "General contractor in Laval, from permit to handover",
          description:
            "Chomedey bungalows, Vimont basements, rebuilds after flooding in Laval-Ouest. One person accountable for the site.",
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
          badges: ["Laval", "RBQ licence", "Since 2004"],
          image: {
            src: "/images/generated/renovation/renovation-cuisine-hero-01.webp",
            alt: "Renovated kitchen in a Laval home",
          },
          caption: "Chomedey, Sainte-Dorothée, Vimont, Sainte-Rose",
        },
      },
    },
    {
      id: "housing",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What we know about Laval homes",
          description:
            "The city was built in waves. The sector already tells us what sits behind the walls.",
          cards: [
            {
              title: "Chomedey, the 1960-1970 wave",
              description:
                "Bungalows on concrete block foundations, possible vermiculite in the attic.",
            },
            {
              title: "Service de l'urbanisme",
              description:
                "Online application, progress tracked in Mon dossier, permit sent by email.",
            },
            {
              title: "Mille Îles flood zones",
              description:
                "Flood elevations set in the zoning by-law; Laval-Ouest and Fabreville flooded in 2017.",
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
          heading: "What we build in Laval",
          items: [
            {
              title: "Basement finishing",
              href: "/services/renovation/sous-sol",
              description:
                "Family room, bedroom and bathroom, all built to Code.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-bar-01.webp",
                alt: "Finished basement with a bar area",
              },
              badges: ["Basement"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Kitchen renovation",
              href: "/services/renovation/cuisine",
              description:
                "Opening up a closed bungalow kitchen, custom cabinetry installed.",
              image: {
                src: "/images/generated/spaces/space-cuisine-project-02.webp",
                alt: "Open renovated kitchen in a suburban home",
              },
              badges: ["Kitchen"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Post-damage renovation",
              href: "/services/renovation/apres-sinistre",
              description:
                "Selective demolition, rebuild and a documented file for your insurer.",
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
      id: "checks",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "What we check on site",
          intro:
            "The sector gives us a hypothesis; the visit confirms it before any number is written.",
          badges: ["On-site visit", "Free estimate", "24-48 h reply"],
          cardTitle: "Our on-site checklist",
          items: [
            "Year of construction and sector",
            "Electrical service and panel capacity",
            "Block foundation and signs of movement",
            "Possible vermiculite in the attic",
            "Clear height, beams and columns downstairs",
            "Drainage, sump pump and backwater valve",
            "Flood elevation set in the zoning by-law",
            "Permit required: interior, exterior or commercial",
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
          heading: "Frequently asked questions in Laval",
          items: [
            {
              q: "How do I get a renovation permit in Laval?",
              a: "Online, through the Service de l'urbanisme. Progress is tracked in Mon dossier, and the issued permit is posted there and sent by email. An application that cannot be filed online is presented at 1333 boulevard Chomedey, by appointment.",
            },
            {
              q: "Which permit covers an interior renovation?",
              a: "The City separates the interior residential renovation permit, its exterior counterpart and the commercial space permit. We identify the right one during scoping and assemble the file before work starts.",
            },
            {
              q: "My house sits in a flood zone. Does that block the project?",
              a: "Not necessarily. Floodplain limits come from the flood elevations written into the zoning by-law, based on a study approved by the Quebec government in 2014. We confirm the elevation before anything is drawn.",
            },
            {
              q: "What should I do with a flooded basement in Laval-Ouest or Fabreville?",
              a: "We step in once drying is done: selective demolition, remediation, then rebuild. We revisit the drainage, sump pump and backwater valve, and pick lower-wall materials that can take a second water event.",
            },
            {
              q: "What does a renovation cost in Laval?",
              a: "Our mandates start around $25,000. A full kitchen lands between $35,000 and $50,000 and up. The firm price is set after the on-site survey, in the detailed written quote.",
            },
            {
              q: "Are you licensed and insured?",
              a: "Yes. RBQ licence 8306-0806-27, valid and unrestricted since 2004, categories 1.2 and 1.3. Civil liability, job-site coverage and licence bond in force, with no claims on file.",
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
          heading: "Planning a renovation in Laval?",
          intro:
            "We come out, identify the permit and send a detailed written quote.",
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
          note: "RBQ licence 8306-0806-27 · Pierrefonds-Roxboro · (514) 820-0773",
        },
      },
    },
  ],
};
