import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const pageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "Residential renovation and construction services",
    description:
      "General contractor in Montreal: kitchen, bathroom, basement, flooring, addition, disaster rebuild. RBQ licence, written contract.",
    path: "/services",
    ogAlt: "Dilamco renovation services, general contractor",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Services", url: SITE.url + "/services" },
  ],
  service: {
    name: "General contracting services",
    description:
      "Residential and commercial renovation coordinated by a general contractor holding RBQ licence 8306-0806-27: permits, trades, schedule and written contract.",
    url: SITE.url + "/services",
    serviceType: "General contractor, renovation",
    areaServed: [
      "Montreal",
      "West Island",
      "Laval",
      "South Shore",
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
          eyebrow: "General contractor",
          heading: "Residential renovation run by a single contractor",
          description:
            "Permits, trades, schedule and budget written into the contract. RBQ licensed since 2004.",
          actions: [
            {
              label: "Free estimate",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "Turnkey renovation",
              href: "/services/renovation",
              variant: "ghost",
            },
          ],
          badges: ["RBQ 8306-0806-27", "Since 2004", "Written contract"],
          image: {
            src: "/images/generated/services/service-renovation-hero-01.webp",
            alt: "Residential renovation site coordinated by a general contractor",
          },
          caption: "West Island, Montreal, Laval, South Shore",
        },
      },
    },
    {
      id: "renovation-types",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "Our renovation services",
          items: [
            {
              title: "Kitchen",
              href: "/services/renovation/cuisine",
              description:
                "Demolition, plumbing, electrical, ventilation, cabinets and finishing in one sequence.",
              image: {
                src: "/images/realisations/cuisine-aire-ouverte-ilot-colonnes-01.webp",
                alt: "Complete residential kitchen renovation",
              },
              badges: ["Multi-trade"],
              footerCtaLabel: "See kitchens",
            },
            {
              title: "Bathroom",
              href: "/services/renovation/salle-de-bain",
              description:
                "Waterproofing membrane, plumbing, tile, ventilation and vanity.",
              image: {
                src: "/images/realisations/salle-de-bain-douche-italienne-verre-01.webp",
                alt: "Renovated bathroom with tiled shower",
              },
              badges: ["Waterproofing"],
              footerCtaLabel: "See bathrooms",
            },
            {
              title: "Basement",
              href: "/services/renovation/sous-sol",
              description:
                "Moisture, drainage, insulation, vapour barrier and egress window. Permit required.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
                alt: "Basement finished as a living space",
              },
              badges: ["Permit"],
              footerCtaLabel: "See basements",
            },
            {
              title: "Flooring",
              href: "/services/renovation/plancher",
              description:
                "Levelled subfloor, transitions and finishing from room to room.",
              image: {
                src: "/images/realisations/plancher-bois-franc-neuf-01.webp",
                alt: "Hardwood floor installed in a home",
              },
              badges: ["Hardwood"],
              footerCtaLabel: "See flooring",
            },
            {
              title: "Home addition",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Foundation, structure, envelope, service connections and zoning compliance.",
              image: {
                src: "/images/generated/renovation/renovation-extension-hero-01.webp",
                alt: "Rear addition on a single-family home",
              },
              badges: ["Engineer"],
              footerCtaLabel: "See additions",
            },
            {
              title: "Disaster rebuild",
              href: "/services/renovation/apres-sinistre",
              description:
                "Water or fire damage: drying, rebuild and documentation for your insurer.",
              image: {
                src: "/images/generated/services/service-renovation-project-02.webp",
                alt: "Room rebuilt after water damage",
              },
              badges: ["Insurance"],
              footerCtaLabel: "See disaster rebuild",
            },
            {
              title: "Commercial fit-out",
              href: "/espaces/commercial",
              description:
                "Offices, retail and leasehold improvements, under RBQ class 1.3.",
              image: {
                src: "/images/generated/spaces/espaces-card-commercial-01.webp",
                alt: "Commercial fit-out delivered ready to occupy",
              },
              badges: ["RBQ 1.3"],
              footerCtaLabel: "See commercial",
            },
          ],
        },
      },
    },
    {
      id: "armoires",
      frame: { surface: "muted" },
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "The cabinet division",
          intro:
            "Our licence covers subclass 12, cabinets and countertops. One less supplier to coordinate.",
          items: [
            {
              title: "Folded into the mandate",
              description: "same quote and same schedule as the construction work.",
            },
            {
              title: "Measured after demolition",
              description:
                "dimensions are taken once the walls are in their final position.",
            },
            {
              title: "Supplied by our partner factory",
              description: "designed, coordinated and installed by our crews.",
            },
          ],
          actions: [
            {
              label: "See design",
              href: "/services/design",
              variant: "ghost",
            },
            {
              label: "See spaces",
              href: "/espaces",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/generated/services/service-installation-hero-01.webp",
            alt: "Custom cabinet installation during a renovation project",
          },
          cardTitle: "RBQ subclass 12",
          cardDescription:
            "Manufactured cabinets and countertops, listed on our licence.",
        },
      },
    },
    {
      id: "divisions",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "The cabinet side, stage by stage",
          columns: "3",
          items: [
            { title: "Design", href: "/services/design" },
            { title: "Fabrication", href: "/services/fabrication" },
            { title: "Installation", href: "/services/installation" },
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
              q: "What is your RBQ licence?",
              a: "Licence 8306-0806-27, issued September 7, 2004, valid and unrestricted. Classes 1.2 and 1.3, plus subclass 12, cabinets and countertops. It can be checked on the Régie du bâtiment du Québec register.",
            },
            {
              q: "Do you build new homes?",
              a: "No. Renovation, conversion, additions, rebuilding after a loss and commercial fit-outs. The GCR warranty plan therefore does not apply.",
            },
            {
              q: "What does a renovation cost?",
              a: "Our projects start around $25,000. A full bathroom often lands between $15,000 and $35,000, a full kitchen between $35,000 and $50,000. The firm price is set after the on-site survey.",
            },
            {
              q: "Who hires and pays the subcontractors?",
              a: "We do. Plumber, electrician, ventilation, tile and drywall work under our contract and our schedule. You have one point of contact and one invoicing stream.",
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
          heading: "A project to price out?",
          intro: "Free estimate. Reply within 24 to 48 business hours.",
          actions: [
            {
              label: "Free estimate",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See service areas",
              href: "/zones",
              variant: "ghost",
            },
          ],
          note: "RBQ licence 8306-0806-27 · General contractor since 2004 · West Island and Greater Montreal",
        },
      },
    },
  ],
};
