import {
  Book,
  Cloud,
  Code,
  Database,
  Gift,
  Globe,
  Heart,
  Layout,
  Monitor,
  Paintbrush,
  Server,
  Settings,
  Shield,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Terminal,
  Users,
  Zap,
} from "lucide-react";
import type { LogoConfig, MenuItem, NavAction } from "./navbar.types";

export const LOGO: LogoConfig = {
  url: "https://www.shadcnblocks.com",
  src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
  alt: "logo",
  title: "Shadcnblocks.com",
};

export const NAVIGATION: MenuItem[] = [
  {
    title: "Products",
    groups: [
      {
        title: "Company Blog",
        links: [
          {
            label: "Insights",
            icon: Book,
            description: "Company news and updates",
            url: "#",
          },
          {
            label: "Engineering",
            icon: Code,
            description: "Technical deep dives",
            url: "#",
          },
          {
            label: "Culture",
            icon: Users,
            description: "Team stories and values",
            url: "#",
          },
          {
            label: "Press",
            icon: Globe,
            description: "Media mentions",
            url: "#",
          },
        ],
      },
      {
        title: "Developer Tools",
        links: [
          {
            label: "API",
            icon: Monitor,
            description: "Access our REST API",
            url: "#",
          },
          {
            label: "CLI",
            icon: Terminal,
            description: "Command line tools",
            url: "#",
          },
          {
            label: "SDKs",
            icon: Code,
            description: "Integrate with our SDKs",
            url: "#",
          },
          {
            label: "Docs",
            icon: Book,
            description: "Complete documentation",
            url: "#",
          },
        ],
      },
      {
        title: "Commerce",
        links: [
          {
            label: "Store",
            icon: ShoppingCart,
            description: "Buy our products",
            url: "#",
          },
          {
            label: "Plans",
            icon: Database,
            description: "Subscription options",
            url: "#",
          },
          {
            label: "Mobile App",
            icon: Smartphone,
            description: "Shop on the go",
            url: "#",
          },
          {
            label: "Gift Cards",
            icon: Gift,
            description: "Send a gift instantly",
            url: "#",
          },
        ],
      },
    ],
  },
  {
    title: "Solutions",
    groups: [
      {
        title: "Industries",
        links: [
          {
            label: "E-commerce",
            icon: ShoppingCart,
            description: "Solutions for online stores",
            url: "#",
          },
          {
            label: "SaaS",
            icon: Cloud,
            description: "Tools for SaaS apps",
            url: "#",
          },
          {
            label: "Finance",
            icon: Shield,
            description: "Secure finance apps",
            url: "#",
          },
          {
            label: "Healthcare",
            icon: Heart,
            description: "For medical platforms",
            url: "#",
          },
        ],
      },
      {
        title: "Design System",
        links: [
          {
            label: "Components",
            icon: Layout,
            description: "Reusable UI parts",
            url: "#",
          },
          {
            label: "Tokens",
            icon: Settings,
            description: "Design tokens reference",
            url: "#",
          },
          {
            label: "Icons",
            icon: Sparkles,
            description: "Lucide icon library",
            url: "#",
          },
          {
            label: "Themes",
            icon: Paintbrush,
            description: "UI appearance presets",
            url: "#",
          },
        ],
      },
    ],
  },
  {
    title: "Platform",
    groups: [
      {
        title: "Core Services",
        links: [
          {
            label: "Hosting",
            icon: Server,
            description: "Reliable infrastructure",
            url: "#",
          },
          {
            label: "Auth",
            icon: Shield,
            description: "Secure login & roles",
            url: "#",
          },
          {
            label: "Database",
            icon: Database,
            description: "Scalable data storage",
            url: "#",
          },
          {
            label: "Edge Functions",
            icon: Zap,
            description: "Low-latency logic",
            url: "#",
          },
        ],
      },
    ],
  },
  {
    title: "Resources",
    url: "#",
  },
  {
    title: "Pricing",
    url: "#",
  },
];

export const DESKTOP_BUTTONS: NavAction[] = [
  {
    label: "Contact",
    isPrimary: false,
    url: "#",
  },
  {
    label: "Log in",
    isPrimary: false,
    url: "#",
  },
  {
    label: "Sign up",
    isPrimary: true,
    url: "#",
  },
];

export const MOBILE_BUTTONS: NavAction[] = [
  {
    label: "Sign up",
    isPrimary: true,
    url: "#",
  },
  {
    label: "Log in",
    isPrimary: false,
    url: "#",
  },
];

export const DEFAULT_MOBILE_BREAKPOINT = 1024;

export const DESKTOP_GROUP_WIDTH = 248;
