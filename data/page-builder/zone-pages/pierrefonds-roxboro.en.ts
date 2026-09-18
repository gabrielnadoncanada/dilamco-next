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
        variant: "split-image",
        props: {
          eyebrow: "Pierrefonds-Roxboro",
          heading:
            "General contractor in Pierrefonds-Roxboro, from permit to handover",
          description:
            "Our business address is on rue Larocque, in the borough. RBQ licence 8306-0806-27, valid with no restrictions since 2004.",
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
          badges: ["Since 2004", "General contractor", "Insured"],
          image: {
            src: "/images/generated/services/service-renovation-hero-01.webp",
            alt: "Home renovation in Pierrefonds-Roxboro",
          },
          caption: "Rue Larocque · Pierrefonds-Roxboro",
        },
      },
    },
    {
      id: "connaissance-locale",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What we know about the borough",
          description:
            "Bungalows and cottages built from 1950 to 1980, a river that floods, a borough permit counter. Three job-site realities.",
          cards: [
            {
              title: "Bungalows and split-levels",
              description:
                "Roxboro, Pierrefonds-East, Cloverdale: uninsulated slabs, undersized panels, centre walls often load-bearing.",
            },
            {
              title: "Borough permit counter",
              description:
                "Permit counter at 13665 boulevard de Pierrefonds. Plans sent by email, signing by appointment.",
            },
            {
              title: "Rivière des Prairies",
              description:
                "2017 and 2019 floods: drain, backwater valve and pump checked before finishing a basement.",
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
          heading: "What we build here",
          items: [
            {
              title: "Basement",
              href: "/services/renovation/sous-sol",
              description:
                "Drain, valve and pump checked before insulating and finishing.",
              image: {
                src: "/images/generated/spaces/space-sous-sol-hero-01.webp",
                alt: "Finished basement in Pierrefonds-Roxboro",
              },
              badges: ["Moisture"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Disaster recovery",
              href: "/services/renovation/apres-sinistre",
              description:
                "Water damage or sewer backup: code-compliant rebuild once drying is done.",
              image: {
                src: "/images/generated/services/service-renovation-project-02.webp",
                alt: "Rebuild after water damage",
              },
              badges: ["Insurance"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Kitchen",
              href: "/services/renovation/cuisine",
              description:
                "Load-bearing wall opened, plumbing and electrical panel brought up to code.",
              image: {
                src: "/images/realisations/cuisine-aire-ouverte-ilot-colonnes-01.webp",
                alt: "Kitchen renovated in a West Island bungalow",
              },
              badges: ["Turnkey"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Bathroom",
              href: "/services/renovation/salle-de-bain",
              description:
                "Waterproofing redone before the tile, ventilation vented outside.",
              image: {
                src: "/images/realisations/salle-de-bain-douche-italienne-verre-01.webp",
                alt: "Renovated bathroom with tiled shower",
              },
              badges: ["Waterproofing"],
              footerCtaLabel: "See the service",
            },
            {
              title: "Home addition",
              href: "/services/renovation/agrandissement-de-maison",
              description:
                "Rear addition, second storey or garage conversion, permit included.",
              image: {
                src: "/images/generated/renovation/renovation-extension-hero-01.webp",
                alt: "Rear addition on a single-family home",
              },
              badges: ["Permit"],
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
          heading: "A contractor based in the borough",
          intro:
            "Verifiable licence, insurance in force, budget and schedule written into the contract.",
          badges: ["Since 2004", "5.0 on Google", "Insured"],
          cardTitle: "What you can verify",
          items: [
            "RBQ licence 8306-0806-27 since 7 September 2004",
            "General contractor classes 1.2 and 1.3",
            "No claims on the licence record",
            "Liability insurance and site coverage",
            "Based on rue Larocque, minutes away",
            "Custom cabinets in the same contract",
          ],
          actions: [
            {
              label: "See our services",
              href: "/services/renovation",
              variant: "primary",
            },
            {
              label: "Tell us about your project",
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
            {
              title: "Dollard-des-Ormeaux",
              href: "/zones/dollard-des-ormeaux",
            },
            {
              title: "Île-Bizard–Sainte-Geneviève",
              href: "/zones/ile-bizard-sainte-genevieve",
            },
            { title: "Kirkland", href: "/zones/kirkland" },
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
              q: "Do I need a permit to renovate in Pierrefonds-Roxboro?",
              a: "Almost always, as soon as the work touches structure, envelope, plumbing or electrical. The permit comes from the borough, at the counter at 13665 boulevard de Pierrefonds. We prepare and file the application.",
            },
            {
              q: "My basement flooded. Can you rebuild it?",
              a: "Yes. Before any finishing, we check the drain, the backwater valve, the sump pump and the condition of the slab. Near the river, we pick materials that tolerate moisture.",
            },
            {
              q: "How much does a renovation cost?",
              a: "Our projects start around $25,000. A complete kitchen usually lands between $35,000 and $50,000. Free estimate, firm price set in the contract after the site visit.",
            },
            {
              q: "Are you licensed and insured?",
              a: "RBQ licence 8306-0806-27, issued 7 September 2004, valid with no restrictions, classes 1.2 and 1.3, no claims on file. Liability insurance and site coverage. Verifiable in the Régie du bâtiment register.",
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
          heading: "A project in Pierrefonds-Roxboro?",
          intro:
            "We come out, look at the house, and come back with a written scope and a price.",
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
          note: "Dilamco · 18625 rue Larocque, Pierrefonds-Roxboro · RBQ 8306-0806-27",
        },
      },
    },
  ],
};
