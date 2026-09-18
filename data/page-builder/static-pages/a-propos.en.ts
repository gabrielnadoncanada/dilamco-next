import type { PageTemplateData } from "@/features/page-builder";
import { SITE } from "@/seo/schema/site";

export const pageEn: PageTemplateData = {
  template: "default",
  metadata: {
    title: "Licensed general contractor since 2004 — About",
    description:
      "Dilamco, residential renovation general contractor since 2004. RBQ licence 8306-0806-27, based in Pierrefonds-Roxboro, West Island.",
    path: "/a-propos",
    ogAlt: "Dilamco's team and approach to running a job site",
  },
  breadcrumbs: [
    { name: "Home", url: SITE.url + "/" },
    { name: "About", url: SITE.url + "/a-propos" },
  ],
  blocks: [
    {
      id: "hero",
      frame: { divider: "bottom" },
      content: {
        type: "hero",
        variant: "split-image",
        props: {
          eyebrow: "About",
          heading: "A residential renovation general contractor since 2004",
          description:
            "RBQ licence issued in 2004, still valid with no restrictions. Based in Pierrefonds-Roxboro, working across Greater Montréal.",
          actions: [
            {
              label: "Free estimate",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our projects",
              href: "/projets",
              variant: "ghost",
            },
          ],
          badges: ["RBQ 8306-0806-27", "Since 2004", "Pierrefonds-Roxboro"],
          image: {
            src: "/images/realisations/escalier-rampe-verre-finition-interieure-01.webp",
            alt: "Staircase and glass railing: interior finishing by Dilamco",
          },
          caption: "9139-1250 Québec inc. · Pierrefonds-Roxboro",
        },
      },
    },
    {
      id: "structural-advantage",
      content: {
        type: "split",
        variant: "text-divider-cards",
        props: {
          heading: "What holds a job site together",
          description:
            "A project derails between the people involved, not over a tile choice. We cut down the number of handoffs.",
          cards: [
            {
              title: "Planned sequence",
              description:
                "Trades come in order, each stage inspected before the next one starts.",
            },
            {
              title: "One party accountable",
              description:
                "We hire the trades and answer for the work that gets delivered.",
            },
            {
              title: "Written commitments",
              description:
                "Scope, price, exclusions and schedule in the contract. Any change goes through a priced change order.",
            },
          ],
          columns: "3",
        },
      },
    },
    {
      id: "licence",
      frame: { surface: "muted" },
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "Licence, insurance and warranty",
          intro:
            "All of it can be checked on the Régie du bâtiment du Québec register.",
          columns: "2",
          items: [
            {
              title: "RBQ licence 8306-0806-27",
              description:
                "General contractor, issued September 7, 2004, no restrictions.",
              icon: "fileCheck",
              bullets: [
                "Class 1.2, small buildings",
                "Class 1.3, buildings of all kinds",
                "Subclass 12, cabinets and countertops",
              ],
            },
            {
              title: "Bond and record",
              description:
                "The licence bond protects the client if the contractor defaults.",
              icon: "shieldCheck",
              bullets: [
                "$40,000 licence bond with FACCQ",
                "No claim on file",
                "Designated officer: Sean Diffley",
              ],
            },
            {
              title: "Insurance in force",
              description: "Certificates provided before signing.",
              icon: "hardHat",
              bullets: [
                "Civil liability",
                "Site coverage for the duration of the work",
                "Certificates on request",
              ],
            },
            {
              title: "Warranty on the work",
              description: "Scope and duration written into the contract.",
              icon: "clipboardCheck",
              bullets: [
                "Deficiencies fixed before the final payment",
                "Compliance with the Québec Construction Code",
                "No new homes, so no GCR plan",
              ],
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
              q: "How long has Dilamco been around?",
              a: "The general contractor licence was issued on September 7, 2004 and has never lapsed. Legal name: 9139-1250 Québec inc., also operating as « Construction Dilamco ».",
            },
            {
              q: "Where are you based?",
              a: "At 18625 rue Larocque, in Pierrefonds-Roxboro. We cover the West Island, Montréal, Laval, the South Shore and Vaudreuil-Soulanges.",
            },
            {
              q: "Do you build new homes?",
              a: "No. Our licence covers renovation, conversion, additions and rebuilding after a loss. The GCR warranty plan therefore does not apply.",
            },
            {
              q: "Do you make your own cabinets?",
              a: "No. Subclass 12 of our licence covers cabinets and countertops: we design, coordinate and install. The cabinets are supplied by our partner factory.",
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
          intro: "Free estimate. First reply within 24 to 48 business hours.",
          actions: [
            {
              label: "Free estimate",
              href: "/contact",
              variant: "primary",
            },
            {
              label: "See our process",
              href: "/processus",
              variant: "ghost",
            },
          ],
          note: "RBQ licence 8306-0806-27 · 18625 rue Larocque, Pierrefonds-Roxboro · (514) 820-0773",
        },
      },
    },
  ],
};
