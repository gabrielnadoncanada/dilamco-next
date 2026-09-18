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
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "image-overlay",
        props: {
          heading:
            "Residential renovation general contractor — West Island and Greater Montréal",
          description:
            "Dilamco takes charge of your renovation from permit to handover. One person accountable, a written schedule, a price set in the contract and trades that are actually coordinated. Free estimate, reply within 24 to 48 business hours.",
          badges: [
            "Residential renovation",
            "Home additions",
            "Disaster restoration",
          ],
          actions: [
            {
              label: "Get a free estimate",
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
            {
              title: "RBQ licence 8306-0806-27",
              description:
                "General contractor, classes 1.2 and 1.3. Valid, with no restrictions on the register.",
            },
            {
              title: "Since 2004",
              description:
                "Over 20 years and hundreds of residential projects across Greater Montréal.",
            },
            {
              title: "5.0 on Google",
              description:
                "Rated 5.0 from 11 reviews on the Dilamco Construction listing.",
            },
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
          heading: "Why renovations go off the rails — and what we commit to",
          description:
            "Most bad renovation stories share one cause: nobody is actually holding the project together. The job drags because the plumber is waiting on the electrician. The bill doubles because nothing was priced up front. Work has to be redone because the trades came in the wrong order. Our job as a general contractor is precisely to remove those four causes.",
          cards: [
            {
              title: "A written schedule, not a verbal estimate",
              description:
                "Every phase is dated in the contract, with delivery and inspection milestones. You know who enters your home, when, and for how long.",
            },
            {
              title: "A price set in the contract",
              description:
                "The quote itemizes the work, the materials and the exclusions. Changes go through a written, priced change order before they are carried out — never after.",
            },
            {
              title: "One person accountable, from permit to handover",
              description:
                "We coordinate plumbing, electrical, structure, drywall, tile and finishing. You never have to arbitrate between subcontractors who don't talk to each other.",
            },
            {
              title: "Work that is guaranteed and verifiable",
              description:
                "Valid RBQ licence, licence bond, liability and site insurance. Work is guaranteed, with terms set out in the contract. Compliance with the Québec Construction Code.",
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
          intro:
            "Full-home or room-by-room renovations, additions and post-disaster reconstruction. Every project follows the same method: itemized quote, written contract, coordinated trades.",
          items: [
            {
              title: "Kitchen renovation",
              href: "/services/renovation/cuisine",
              description:
                "Demolition, plumbing, electrical, ventilation, finishes and cabinetry. The kitchen involves more trades than any other room — that's where coordination makes the difference.",
              image: {
                src: "/images/realisations/cuisine-aire-ouverte-ilot-colonnes-01.webp",
                alt: "Complete residential kitchen renovation",
              },
              badges: ["Residential", "Turnkey"],
              footerCtaLabel: "See kitchen renovation",
            },
            {
              title: "Bathroom renovation",
              href: "/services/renovation/salle-de-bain",
              description:
                "Plumbing rework, waterproofing membrane, tile, ventilation and vanity. A badly waterproofed bathroom gets paid for twice — we don't cut corners there.",
              image: {
                src: "/images/realisations/salle-de-bain-douche-italienne-verre-01.webp",
                alt: "Renovated bathroom with a tiled shower",
              },
              badges: ["Waterproofing", "Tile"],
              footerCtaLabel: "See bathroom renovation",
            },
            {
              title: "Basement renovation",
              href: "/services/renovation/sous-sol",
              description:
                "Insulation, vapour barrier, drainage, partitions, ceiling and lighting. We confirm moisture levels and headroom before finishing anything.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
                alt: "Finished basement turned into a living space",
              },
              badges: ["Insulation", "Living space"],
              footerCtaLabel: "See basement renovation",
            },
            {
              title: "Home addition",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Rear or side extension, second-storey addition, kitchen bump-out. Municipal permit, drawings, foundation, structure and tie-in to the existing house.",
              image: {
                src: "/images/generated/renovation/renovation-extension-hero-01.webp",
                alt: "Rear addition on a single-family home",
              },
              badges: ["Permits", "Structure"],
              footerCtaLabel: "See home additions",
            },
            {
              title: "Flooring installation",
              href: "/services/renovation/plancher",
              description:
                "Hardwood, engineered wood, luxury vinyl and tile. Subfloor preparation, levelling and transitions — most of a floor's quality is decided below the surface.",
              image: {
                src: "/images/realisations/plancher-bois-franc-neuf-01.webp",
                alt: "Hardwood flooring being installed in a home",
              },
              badges: ["Hardwood", "Tile"],
              footerCtaLabel: "See flooring installation",
            },
            {
              title: "Disaster restoration",
              href: "/services/renovation/apres-sinistre",
              description:
                "Water damage, sewer backup, fire or mould: controlled demolition, drying, reconstruction and restoration. Work documented for your insurer.",
              image: {
                src: "/images/generated/services/service-renovation-project-02.webp",
                alt: "Room being rebuilt after water damage",
              },
              badges: ["Water damage", "Reconstruction"],
              footerCtaLabel: "See disaster restoration",
            },
          ],
        },
      },
    },
    {
      id: "process",
      frame: { surface: "muted" },
      content: {
        type: "process",
        variant: "horizontal-steps-cards",
        props: {
          heading: "How a project runs with us",
          intro:
            "Five steps, always the same. They exist so that at any moment you know where the project stands and what comes next.",
          steps: [
            {
              number: "1",
              title: "Free estimate within 24–48 h",
              description:
                "You describe the project. We come back within 24 to 48 business hours to book a site visit and set a realistic order of magnitude.",
            },
            {
              number: "2",
              title: "Itemized quote and contract",
              description:
                "Measurements, scope of work, materials, exclusions and price. Once accepted, the quote becomes a written contract with a schedule and a payment calendar.",
            },
            {
              number: "3",
              title: "Permits and planning",
              description:
                "We prepare the required drawings, file the permit application with the city or borough, and book the trades before the site opens.",
            },
            {
              number: "4",
              title: "Coordinated site work",
              description:
                "Surface protection, demolition, structure, plumbing, electrical, insulation, drywall, finishing. Each trade comes in after the previous stage has been inspected.",
            },
            {
              number: "5",
              title: "Handover and guarantee",
              description:
                "Final walkthrough with you, deficiency list corrected before the final payment, then a guarantee on the work performed — terms in the contract.",
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
          heading: "Areas we serve",
          intro:
            "We are based in Pierrefonds-Roxboro and work throughout the West Island, Montréal, Laval, the South Shore and Vaudreuil-Soulanges.",
          columns: "3",
          items: [
            {
              title: "Pierrefonds-Roxboro",
              description:
                "Our home turf: bungalows, cottages and basements along the Rivière des Prairies.",
              href: "/zones/pierrefonds-roxboro",
              ctaLabel: "See Pierrefonds-Roxboro",
            },
            {
              title: "Dollard-des-Ormeaux",
              description:
                "Bungalows and split-levels from the 1960s to the 1990s, often ready for a kitchen or basement project.",
              href: "/zones/dollard-des-ormeaux",
              ctaLabel: "See Dollard-des-Ormeaux",
            },
            {
              title: "Kirkland",
              description:
                "Single-family homes to renovate or extend, with local permit requirements to meet.",
              href: "/zones/kirkland",
              ctaLabel: "See Kirkland",
            },
            {
              title: "Pointe-Claire",
              description:
                "A varied housing stock, from the historic village to post-war residential streets.",
              href: "/zones/pointe-claire",
              ctaLabel: "See Pointe-Claire",
            },
            {
              title: "Beaconsfield",
              description:
                "Larger properties and addition projects, often with siting constraints to work around.",
              href: "/zones/beaconsfield",
              ctaLabel: "See Beaconsfield",
            },
            {
              title: "Dorval",
              description:
                "Residential renovations and commercial fit-outs, minutes from our base.",
              href: "/zones/dorval",
              ctaLabel: "See Dorval",
            },
            {
              title: "L'Île-Bizard–Sainte-Geneviève",
              description:
                "Waterfront sectors where basement moisture and drainage need particular attention.",
              href: "/zones/ile-bizard-sainte-genevieve",
              ctaLabel: "See L'Île-Bizard",
            },
            {
              title: "Saint-Laurent",
              description:
                "Post-war homes, plexes and condos: access, hours and coordination all need planning.",
              href: "/zones/saint-laurent",
              ctaLabel: "See Saint-Laurent",
            },
            {
              title: "Laval",
              description:
                "Full renovations and additions, with permits filed through the Ville de Laval.",
              href: "/zones/laval",
              ctaLabel: "See Laval",
            },
            {
              title: "Vaudreuil-Dorion",
              description:
                "A natural westward extension of our territory, a short drive from Pierrefonds.",
              href: "/zones/vaudreuil-dorion",
              ctaLabel: "See Vaudreuil-Dorion",
            },
            {
              title: "South Shore",
              description:
                "Longueuil, Brossard, Saint-Lambert and nearby: additions, full renovations and disaster recovery.",
              href: "/zones/rive-sud",
              ctaLabel: "See the South Shore",
            },
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
          heading: "Also: our custom cabinetry division",
          intro:
            "Subclass 12 of our RBQ licence covers manufactured cabinets and countertops. In practice: when your project calls for cabinetry, you don't have to add another supplier to the site. It goes into the same quote, under the same responsibility.",
          items: [
            {
              title: "One less party to manage",
              description:
                "cabinets are ordered, delivered and installed within the site sequence, not alongside it.",
            },
            {
              title: "Measurements taken on the real site",
              description:
                "the survey happens after demolition, once the walls are in their final position.",
            },
            {
              title: "Made for us by our partner factory",
              description:
                "a consistent standard from one project to the next, and a single point of contact if an adjustment is needed.",
            },
            {
              title: "Kitchen, bathroom, walk-in, basement",
              description:
                "cabinets, vanities, storage and built-ins to match the room being renovated.",
            },
          ],
          actions: [
            {
              label: "Explore the spaces",
              href: "/espaces",
              variant: "primary",
            },
            {
              label: "Understand our materials",
              href: "/materiaux",
              variant: "ghost",
            },
          ],
          image: {
            src: "/images/realisations/ilot-bleu-marine-interieur-bouleau-01.webp",
            alt: "Custom kitchen cabinetry installed by Dilamco",
          },
          cardTitle: "RBQ subclass 12",
          cardDescription:
            "Manufactured cabinets and countertops — a Dilamco division, folded into the renovation mandate.",
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
          intro:
            "The questions most homeowners ask before signing with a general contractor.",
          items: [
            {
              q: "How much does a renovation cost?",
              a: "Our renovation projects generally start around $25,000. A complete kitchen usually lands between $35,000 and $50,000, and higher depending on scope, the condition of existing systems and the materials chosen. A number given over the phone is only an approximation: the price is set after the site visit, in the itemized quote.",
            },
            {
              q: "How long does a project take?",
              a: "Duration depends on scope and on how many trades are involved. A bathroom is counted in weeks, a full kitchen or basement in months, an addition longer still since permit time and foundation work are added. The schedule is written into the contract before work begins, with milestones for each phase.",
            },
            {
              q: "Do my renovations need a permit?",
              a: "Often, yes. Cities and boroughs require a permit as soon as you touch the structure, openings, plumbing or electrical systems, or add habitable floor area. We verify the requirements that apply to your address, prepare the documents and file the application for you. No site opens without the required approvals.",
            },
            {
              q: "Are you licensed and insured?",
              a: "Yes. Dilamco holds RBQ licence 8306-0806-27, valid and with no restrictions, issued in 2004, in general contractor classes 1.2 (small buildings) and 1.3 (buildings of all kinds). A licence bond is in force and no claim appears on file. We carry civil liability insurance and site coverage.",
            },
            {
              q: "Is your work guaranteed?",
              a: "Yes. The work performed is guaranteed and the terms are set out in the contract, including coverage and duration. The final walkthrough is done with you: deficiencies on the list are corrected before the final payment. We do not build new homes, so the GCR warranty plan does not apply to our projects.",
            },
            {
              q: "What territory do you serve?",
              a: "We are based in Pierrefonds-Roxboro. We cover the West Island, all of Montréal, Laval, the South Shore and the Vaudreuil-Soulanges area. Being based in the West Island changes something concrete: follow-up visits and corrections happen quickly, without the site waiting on us.",
            },
            {
              q: "Do you work in condos and co-ownerships?",
              a: "Yes. These projects call for extra preparation: syndicate approval, permitted work hours, elevator booking, protection of common areas and debris management. We map those constraints before setting the schedule, so work doesn't stop halfway through.",
            },
            {
              q: "Do you supply the cabinetry as well?",
              a: "Yes. Our RBQ licence includes subclass 12, manufactured cabinets and countertops. Custom cabinetry is made for us by our partner factory, then delivered and installed within the site sequence. For you, that means one fewer supplier to coordinate and a single quote.",
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
          heading: "Tell us about your renovation project",
          intro:
            "The estimate is free and we reply within 24 to 48 business hours. We'll tell you straight what your project involves, what it costs and how long it takes.",
          actions: [
            {
              label: "Get a free estimate",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our projects",
              href: "/projets",
              variant: "ghost",
            },
          ],
          note: "RBQ licence 8306-0806-27 • West Island, Montréal, Laval, South Shore and Vaudreuil-Soulanges",
        },
      },
    },
  ],
};
