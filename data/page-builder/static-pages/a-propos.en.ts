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
          heading: "A residential renovation general contractor since 2004",
          description:
            "Same licence, same person in charge and same address since 2004, in Pierrefonds-Roxboro.",
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
          image: {
            src: "/images/realisations/escalier-rampe-verre-finition-interieure-01.webp",
            alt: "Staircase and glass railing: interior finishing by Dilamco",
          },
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
          heading: "The company in numbers",
          tiles: [
            {
              kind: "image",
              span: "wide",
              image: {
                src: "/images/realisations/mur-bois-accent-plafond-haut-01.webp",
                alt: "Timber accent wall under a high ceiling",
              },
            },
            {
              kind: "stat",
              value: "2004",
              label: "The year our licence was issued",
            },
            {
              kind: "image",
              span: "tall",
              image: {
                src: "/images/realisations/plancher-bois-franc-neuf-01.webp",
                alt: "New hardwood floor laid in a renovated room",
              },
            },
            {
              kind: "stat",
              value: "5.0",
              label: "Our Google rating, from 11 customer reviews",
            },
            {
              kind: "stat",
              value: "$40,000",
              label: "The sum held in guarantee to protect our clients",
            },
            {
              kind: "image",
              image: {
                src: "/images/realisations/showroom-dorval-presentoirs-finis-01.webp",
                alt: "Finish and material displays at the Dorval showroom",
              },
              caption: "Our Dorval showroom",
            },
          ],
        },
      },
    },
    {
      id: "licence",
      content: {
        type: "grid",
        variant: "icon-cards-bullets",
        props: {
          heading: "What protects you when you hire us",
          columns: "2",
          items: [
            {
              title: "Our RBQ licence",
              icon: "fileCheck",
              bullets: [
                "The number to check is 8306-0806-27",
                "It covers houses as well as larger buildings",
                "It also covers cabinets and countertops",
              ],
            },
            {
              title: "A guarantee deposit",
              icon: "shieldCheck",
              bullets: [
                "The deposit is $40,000",
                "Nobody has ever had to draw on it",
              ],
            },
            {
              title: "Our insurance",
              icon: "hardHat",
              bullets: [
                "We carry civil liability insurance",
                "The site is covered while the work goes on",
                "You can ask for the paperwork at any time",
              ],
            },
            {
              title: "The warranty on our work",
              icon: "clipboardCheck",
              bullets: [
                "We fix everything before you pay the balance",
                "The work meets the Québec Construction Code",
                "We do not build new homes",
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
            "Tell us what you want renovated and in which city.",
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
        },
      },
    },
  ],
};
