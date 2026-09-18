import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const zoneKirklandPageEn: PageTemplateData = {
  template: "services",
  metadata: {
    title: "General contractor in Kirkland — renovation",
    description:
      "RBQ-licensed general contractor in Kirkland: major renovations, additions, kitchens and basements on the West Island's larger lots.",
    path: "/zones/kirkland",
    ogAlt: "Home renovation in Kirkland by Dilamco",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "Service areas", url: SITE.url + "/zones" },
    { name: "Kirkland", url: SITE.url + "/zones/kirkland" },
  ],
  service: {
    name: "General contractor in Kirkland",
    description:
      "Home renovation, additions, kitchens, bathrooms and basements in Kirkland, by an RBQ-licensed general contractor based in the West Island.",
    url: SITE.url + "/zones/kirkland",
    serviceType: "Residential renovation",
    areaServed: [
      "Kirkland",
      "Timberlea",
      "Boul. Hymus",
      "Boul. Saint-Charles",
      "Boul. Brunswick",
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
        variant: "split-image",
        props: {
          eyebrow: "Kirkland",
          heading:
            "General contractor in Kirkland: major renovations and additions",
          description:
            "Large lots, detached homes, owners who add on rather than move. RBQ licence 8306-0806-27, classes 1.2 and 1.3.",
          actions: [
            {
              label: "Request an estimate",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our work",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["Since 2004", "Additions", "Insured"],
          image: {
            src: "/images/generated/renovation/renovation-extension-hero-01.webp",
            alt: "Addition on a single-family home in Kirkland",
          },
          caption: "On both sides of Highway 40",
        },
      },
    },
    {
      id: "connaissance-locale",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What we know about Kirkland homes",
          description:
            "Under 20,000 residents on 9.6 km2, a city split in two by Highway 40. Uniform housing stock, generous lots.",
          cards: [
            {
              title: "Large lots, detached homes",
              description:
                "About 2,000 residents per square kilometre: side or rear additions genuinely feasible, comfortable site access.",
            },
            {
              title: "A generation coming due",
              description:
                "1970s homes: roof, windows, electrical panel, attic insulation and original bathrooms all reaching end of life together.",
            },
            {
              title: "Permit and excavation certificate",
              description:
                "Urban Planning Department, city hall at 17200 boulevard Hymus. Applications through the online permit portal.",
            },
          ],
          columns: "1",
        },
      },
    },
    {
      id: "services",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "What we build in Kirkland",
          items: [
            {
              title: "Home addition",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Addition, second storey or sunroom: foundation, structure, roof and tie-in.",
              image: {
                src: "/images/generated/renovation/renovation-extension-hero-01.webp",
                alt: "Rear addition on a Kirkland home",
              },
              badges: ["Permit"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Major renovation",
              href: "/services/renovation",
              description:
                "Take on a 1970s house in one sequence rather than over ten years.",
              image: {
                src: "/images/generated/services/service-renovation-project-02.webp",
                alt: "Major renovation of a Kirkland home",
              },
              badges: ["Turnkey"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Kitchen",
              href: "/services/renovation/cuisine",
              description:
                "Wall to be opened assessed and beam sized before demolition.",
              image: {
                src: "/images/realisations/cuisine-aire-ouverte-ilot-colonnes-01.webp",
                alt: "Kitchen opened onto the living areas",
              },
              badges: ["Structure"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Bathroom",
              href: "/services/renovation/salle-de-bain",
              description:
                "Two or three bathrooms sequenced so one stays usable throughout.",
              image: {
                src: "/images/realisations/salle-de-bain-douche-italienne-verre-01.webp",
                alt: "Renovated bathroom with tiled shower",
              },
              badges: ["Waterproofing"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Basement",
              href: "/services/renovation/sous-sol",
              description:
                "Good headroom: home theatre, office, gym or guest bedroom.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
                alt: "Basement finished as a living space",
              },
              badges: ["Insulation"],
              footerCtaLabel: "See the service",
            },
          ],
        },
      },
    },
    {
      id: "preuves",
      content: {
        type: "split",
        variant: "badges-checklist-cta",
        props: {
          heading: "An addition puts seven trades in play",
          intro:
            "Excavation, foundation, structure, roof, envelope, mechanical, finishing. With no single lead, seven schedules contradict each other.",
          badges: ["Since 2004", "5.0 on Google", "Insured"],
          cardTitle: "What you can verify",
          items: [
            "RBQ licence 8306-0806-27 since 7 September 2004",
            "General contractor classes 1.2 and 1.3",
            "No claims on the licence record",
            "Liability insurance and site coverage",
            "Permit and excavation certificate filed separately",
            "One contract, one point of contact",
          ],
          actions: [
            {
              label: "See additions",
              href: "/services/renovation/agrandissement-de-maison",
              variant: "primary",
            },
            {
              label: "Request an estimate",
              href: "/contact",
              variant: "ghost",
            },
          ],
        },
      },
    },
    {
      id: "secteurs",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Neighbouring cities we serve",
          columns: "3",
          items: [
            { title: "Beaconsfield", href: "/zones/beaconsfield" },
            { title: "Pointe-Claire", href: "/zones/pointe-claire" },
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
          heading: "Frequently asked questions",
          items: [
            {
              q: "Do I need a permit to renovate in Kirkland?",
              a: "Yes, in most cases. The city asks you to consult it before interior or exterior renovations, and issues a building permit or a certificate of authorization. We prepare the application as part of the mandate.",
            },
            {
              q: "How do I file a permit application?",
              a: "Through the online permit portal, which lets you track the file and often pay without going in. Or in person at city hall, 17200 boulevard Hymus.",
            },
            {
              q: "Does an addition need an excavation certificate?",
              a: "Kirkland treats excavation work as a separate application from the building permit. An addition with a foundation therefore needs both. We build them into the schedule.",
            },
            {
              q: "Can I add on to a Kirkland lot?",
              a: "Often yes: lots here are larger than the West Island average. What decides it is setbacks, lot coverage and the standards in your zone. We confirm feasibility before you pay for plans.",
            },
            {
              q: "How much does a major renovation cost?",
              a: "Our projects start around $25,000 and a complete kitchen lands between $35,000 and $50,000. An addition with a foundation sits higher. Free estimate, firm price in the quote.",
            },
            {
              q: "Do you build new homes?",
              a: "No. Renovation, conversion, additions, post-disaster reconstruction and commercial fit-outs. We do not build new homes, so the GCR warranty plan does not apply.",
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
          heading: "A project in Kirkland?",
          intro:
            "We survey the house and lot, confirm feasibility, and come back with a price.",
          actions: [
            {
              label: "Request an estimate",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our service areas",
              href: "/zones",
              variant: "ghost",
            },
          ],
          note: "Dilamco · General contractor, RBQ licence 8306-0806-27 · West Island",
        },
      },
    },
  ],
};
