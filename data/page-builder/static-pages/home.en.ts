import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const pageEn: PageTemplateData = {
  template: "default",
  metadata: {
    title: "General Contractor, Renovation — West Island | Dilamco",
    description:
      "RBQ-licensed general contractor since 2004. Kitchen, bathroom, basement and home addition renovations across the West Island and Greater Montréal.",
    path: "/",
    ogAlt: "Residential renovation site managed by Dilamco",
  },
  breadcrumbs: [
    {
      name: "Home",
      url: SITE.url + "/",
    },
  ],
  blocks: [
    {
      id: "hero",
      content: {
        type: "hero",
        variant: "image-overlay",
        props: {
          heading: "Your renovation, run by a licensed general contractor.",
          description:
            "We handle the permit, the trades, the schedule and the budget. One person accountable, from first call to handover.",
          actions: [
            {
              label: "Free estimate",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our services",
              href: "/services/renovation",
              variant: "ghost-light",
            },
          ],
          image: {
            src: "/images/realisations/cuisine-blanche-ilot-quartz-01.webp",
            alt: "Kitchen renovated by Dilamco in a West Island home",
          },
          overlay: "dark-gradient",
          proofs: [
            { title: "2004", description: "RBQ licence since" },
            { title: "5.0", description: "Google rating" },
            { title: "24 h", description: "First reply" },
          ],
        },
      },
    },
    {
      id: "promesse",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "Why hand your project to a general contractor",
          description:
            "One contractor plans the job, brings the trades in the right order and answers for the result. Here is what that changes for you.",
          cards: [
            {
              title: "A written schedule",
              description: "Every stage of the job is dated in the contract, with the inspections planned.",
            },
            {
              title: "A price set before work starts",
              description: "The quote lists the work, the materials and what is not included. Any change is priced and signed before it is done.",
            },
            {
              title: "One person accountable",
              description: "We hire and coordinate the plumber, the electrician, the carpenter and the finishers. You deal with one person.",
            },
            {
              title: "Licence, insurance and warranty",
              description: "Valid RBQ licence with no restrictions, liability and site insurance, work warranted in writing.",
            },
          ],
          columns: "2",
        },
      },
    },
    {
      id: "services",
      content: {
        type: "grid",
        variant: "image-cards-slider",
        props: {
          heading: "What we renovate",
          items: [
            {
              title: "Kitchen",
              href: "/services/renovation/cuisine",
              description: "Demolition, plumbing, electrical, cabinets and finishing, in the right order.",
              image: {
                src: "/images/realisations/cuisine-aire-ouverte-ilot-colonnes-01.webp",
                alt: "Complete residential kitchen renovation",
              },
              badges: ["Turnkey"],
              footerCtaLabel: "See kitchens",
            },
            {
              title: "Bathroom",
              href: "/services/renovation/salle-de-bain",
              description: "Plumbing, waterproofing membrane, tile, ventilation and vanity.",
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
              description: "Moisture and headroom checked before insulating, dividing and finishing.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
                alt: "Basement finished as a living space",
              },
              badges: ["Insulation"],
              footerCtaLabel: "See basements",
            },
            {
              title: "Home addition",
              href: "/services/renovation/agrandissement-de-maison",
              description: "Permit, plans, foundation, structure and tie-in to the existing house.",
              image: {
                src: "/images/generated/renovation/renovation-extension-hero-01.webp",
                alt: "Rear addition on a single-family home",
              },
              badges: ["Permit"],
              footerCtaLabel: "See additions",
            },
            {
              title: "Flooring",
              href: "/services/renovation/plancher",
              description: "Hardwood, engineered, vinyl or tile, on a levelled subfloor.",
              image: {
                src: "/images/realisations/plancher-bois-franc-neuf-01.webp",
                alt: "Hardwood floor installed in a home",
              },
              badges: ["Hardwood"],
              footerCtaLabel: "See flooring",
            },
            {
              title: "Disaster recovery",
              href: "/services/renovation/apres-sinistre",
              description: "Water or fire damage: drying, rebuild and documentation for your insurer.",
              image: {
                src: "/images/generated/services/service-renovation-project-02.webp",
                alt: "Room rebuilt after water damage",
              },
              badges: ["Insurance"],
              footerCtaLabel: "See disaster recovery",
            },
          ],
        },
      },
    },
    {
      id: "process",
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "How your project unfolds",
          steps: [
            {
              number: "1",
              title: "First reply within 24 h",
              description: "You describe the project, we book the visit and give a ballpark.",
            },
            {
              number: "2",
              title: "Quote and contract",
              description: "Scope, materials, exclusions, price, schedule and payments in writing.",
            },
            {
              number: "3",
              title: "Permit and planning",
              description: "Plans, permit application to the city, trades booked before we open.",
            },
            {
              number: "4",
              title: "Coordinated job site",
              description: "Each trade comes in turn, after inspection of the previous stage.",
            },
            {
              number: "5",
              title: "Handover and warranty",
              description: "Final walkthrough with you, deficiencies fixed before the last payment.",
            },
          ],
        },
      },
    },
    {
      id: "zones",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: {
          heading: "Where we work",
          columns: "3",
          items: [
            { title: "Pierrefonds-Roxboro", href: "/zones/pierrefonds-roxboro", description: "Our base" },
            { title: "Dollard-des-Ormeaux", href: "/zones/dollard-des-ormeaux" },
            { title: "Kirkland", href: "/zones/kirkland" },
            { title: "Pointe-Claire", href: "/zones/pointe-claire" },
            { title: "Beaconsfield", href: "/zones/beaconsfield" },
            { title: "Dorval", href: "/zones/dorval" },
            { title: "L'Île-Bizard–Sainte-Geneviève", href: "/zones/ile-bizard-sainte-genevieve" },
            { title: "Saint-Laurent", href: "/zones/saint-laurent" },
            { title: "Laval", href: "/zones/laval" },
            { title: "Vaudreuil-Dorion", href: "/zones/vaudreuil-dorion" },
            { title: "South Shore", href: "/zones/rive-sud" },
          ],
        },
      },
    },
    {
      id: "armoires",
      content: {
        type: "split",
        variant: "list-actions-image-card",
        props: {
          heading: "Custom cabinets, included in the same contract",
          intro:
            "Our licence also covers cabinets and countertops. You have no extra supplier to manage: everything is in the same quote.",
          items: [
            { title: "Installed at the right time", description: "Cabinets are ordered, delivered and installed when the site is ready for them." },
            { title: "Measured after demolition", description: "We take the dimensions once the walls are in their final position, not before." },
            { title: "Kitchen, bathroom, walk-in", description: "Kitchen cabinets, vanities and built-in storage, depending on the room being renovated." },
          ],
          actions: [
            { label: "See the spaces", href: "/espaces", variant: "primary" },
            { label: "Our materials", href: "/materiaux", variant: "ghost" },
          ],
          image: {
            src: "/images/realisations/ilot-bleu-marine-interieur-bouleau-01.webp",
            alt: "Custom kitchen cabinets installed by Dilamco",
          },
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
              q: "How much does a renovation cost?",
              a: "Our projects start around $25,000. A complete kitchen usually lands between $35,000 and $50,000. The firm price is set after the on-site survey, in the detailed quote.",
            },
            {
              q: "How long does a job take?",
              a: "A bathroom takes weeks, a kitchen or basement months, an addition longer because of the permit and foundation. The schedule is written into the contract.",
            },
            {
              q: "Do I need a permit?",
              a: "Often, as soon as the work touches structure, openings, plumbing or living area. We check your city's requirements and file the application for you.",
            },
            {
              q: "Are you licensed and insured?",
              a: "Yes. RBQ licence 8306-0806-27, valid with no restrictions since 2004, classes 1.2 and 1.3, bond in force, no claims on file. Liability insurance and site coverage.",
            },
            {
              q: "Is your work warranted?",
              a: "Yes, with the scope and duration written in the contract. Deficiencies noted at the final walkthrough are fixed before the last payment. We do not build new homes, so the GCR plan does not apply.",
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
          heading: "Tell us about your project",
          intro: "The estimate is free and we reply within 24 to 48 business hours.",
          actions: [
            { label: "Free estimate", href: "/contact", variant: "primary" },
            { label: "See our work", href: "/projets", variant: "ghost" },
          ],
        },
      },
    },
  ],
};
