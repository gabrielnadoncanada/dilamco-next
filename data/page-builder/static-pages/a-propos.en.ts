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
            "Same licence, same officer, same address for twenty years. The work stays in Greater Montréal.",
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
          imageSide: "left",
        },
      },
    },
    {
      id: "reperes",
      content: {
        type: "grid",
        variant: "bento",
        props: {
          heading: "What twenty years leave behind",
          tiles: [
            {
              kind: "image",
              span: "wide",
              image: {
                src: "/images/realisations/mur-bois-accent-plafond-haut-01.webp",
                alt: "Timber accent wall under a high ceiling",
              },
              caption: "Accent wall, high ceiling",
            },
            {
              kind: "stat",
              value: "2004",
              label: "RBQ licence issued, never lapsed",
            },
            {
              kind: "image",
              span: "tall",
              image: {
                src: "/images/realisations/plancher-bois-franc-neuf-01.webp",
                alt: "New hardwood floor laid in a renovated room",
              },
              caption: "New hardwood floor",
            },
            {
              kind: "stat",
              value: "5.0",
              label: "Google rating, 11 reviews",
            },
            {
              kind: "stat",
              value: "$40,000",
              label: "FACCQ licence bond, no claim on file",
            },
            {
              kind: "image",
              image: {
                src: "/images/realisations/showroom-dorval-presentoirs-finis-01.webp",
                alt: "Finish and material displays at the Dorval showroom",
              },
              caption: "Finish displays, Dorval",
            },
          ],
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
              q: "Who is the designated officer on the licence?",
              a: "Sean Diffley, listed on the register as the officer for management and for carrying out the work. He is the person the Régie holds accountable for our sites.",
            },
            {
              q: "Why hire a general contractor at all?",
              a: "Because one signature covers the permits, the trades, the schedule and the price. Without one, every trade-off between trades lands back on the homeowner.",
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
          intro:
            "Free estimate. Insurance certificates are handed over before signing.",
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
