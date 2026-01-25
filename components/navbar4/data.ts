import {
  AppWindow,
  ArrowRightLeft,
  Book,
  Building,
  Building2,
  Calculator,
  Calendar,
  CheckCircle2,
  Clock,
  Code,
  Computer,
  DollarSign,
  File,
  Flag,
  Gavel,
  Globe,
  Globe2,
  Lightbulb,
  Lock,
  Mic,
  Newspaper,
  Phone,
  PieChart,
  Play,
  PlayCircle,
  Puzzle,
  Pyramid,
  Rocket,
  Scale,
  Search,
  ShieldCheck,
  Speech,
  Table,
  UserPlus,
  UserRound,
} from "lucide-react";

export const solutions = [
  {
    id: "solution-1",
    title: "Team Management",
    description: "Streamline team collaboration and project workflows.",
    href: "#",
    subpages: [
      {
        id: "subpage-1",
        title: "Task Management",
        href: "#",
        icon: File,
      },
      {
        id: "subpage-2",
        title: "Team Planning",
        href: "#",
        icon: Building,
      },
      {
        id: "subpage-3",
        title: "Resource Allocation",
        href: "#",
        icon: Search,
      },
      {
        id: "subpage-4",
        title: "Time Tracking",
        href: "#",
        icon: File,
      },
      {
        id: "subpage-5",
        title: "Team Analytics",
        href: "#",
        icon: UserPlus,
      },
    ],
  },
  {
    id: "solution-2",
    title: "Project Management",
    description: "Plan, track, and deliver projects with confidence.",
    href: "#",
    subpages: [
      {
        id: "subpage-6",
        title: "Project Templates",
        href: "#",
        icon: CheckCircle2,
      },
      {
        id: "subpage-7",
        title: "Timeline Views",
        href: "#",
        icon: UserRound,
      },
      {
        id: "subpage-8",
        title: "Risk Management",
        href: "#",
        icon: ShieldCheck,
      },
      {
        id: "subpage-9",
        title: "Budget Tracking",
        href: "#",
        icon: Scale,
      },
      {
        id: "subpage-10",
        title: "Global Teams",
        href: "#",
        icon: Globe,
      },
    ],
  },
  {
    id: "solution-3",
    title: "Workflow Automation",
    description: "Automate repetitive tasks and focus on what matters.",
    href: "#",
    subpages: [
      {
        id: "subpage-11",
        title: "Custom Workflows",
        href: "#",
        icon: Globe2,
      },
      {
        id: "subpage-12",
        title: "Process Templates",
        href: "#",
        icon: Clock,
      },
      {
        id: "subpage-13",
        title: "Business Rules",
        href: "#",
        icon: DollarSign,
      },
      {
        id: "subpage-14",
        title: "Integrations",
        href: "#",
        icon: Phone,
      },
      {
        id: "subpage-15",
        title: "API Access",
        href: "#",
        icon: Speech,
      },
    ],
  },
  {
    id: "solution-4",
    title: "Enterprise Solutions",
    description: "Scale your organization with enterprise-grade features.",
    href: "#",
    subpages: [
      {
        id: "subpage-16",
        title: "Advanced Analytics",
        href: "#",
        icon: PieChart,
      },
      {
        id: "subpage-17",
        title: "Security Controls",
        href: "#",
        icon: Calculator,
      },
      {
        id: "subpage-18",
        title: "Custom Reporting",
        href: "#",
        icon: Table,
      },
    ],
  },
];

export const solutionTechnologies = [
  {
    id: "technology-1",
    title: "Integration Platform",
    href: "#",
    icon: Puzzle,
  },
  {
    id: "technology-2",
    title: "Enterprise Security",
    href: "#",
    icon: Lock,
  },
  {
    id: "technology-3",
    title: "Developer API",
    href: "#",
    icon: Code,
  },
];

export const productCategories = [
  {
    title: "Core Products",
    products: [
      {
        id: "product-1",
        title: "Task Management",
        description: "Organize and track work efficiently.",
        href: "#",
        image:
          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
      },
      {
        id: "product-2",
        title: "Team Calendar",
        description: "Coordinate schedules and deadlines.",
        href: "#",
        image:
          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-2.svg",
      },
      {
        id: "product-3",
        title: "Workflows",
        description: "Automate your business processes.",
        href: "#",
        image:
          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-3.svg",
      },
    ],
  },
  {
    title: "Advanced Features",
    products: [
      {
        id: "product-4",
        title: "Portfolio Management",
        description: "Track and optimize project portfolios at scale.",
        href: "#",
        image:
          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-4.svg",
      },
      {
        id: "product-5",
        title: "Resource Planning",
        description: "Optimize team workload and capacity.",
        href: "#",
        image:
          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-5.svg",
      },
    ],
  },
];

export const globalCategories = [
  {
    title: "Enterprise Solutions",
    features: [
      {
        id: "feature-1",
        title: "Digital Transformation",
        description: "Transform how your organization works with our platform.",
        href: "#",
        icon: Rocket,
      },
      {
        id: "feature-2",
        title: "Change Management",
        description: "Expert guidance for organizational change and adoption.",
        href: "#",
        icon: Building2,
      },
      {
        id: "feature-3",
        title: "Global Deployment",
        description: "Roll out and scale across global teams seamlessly.",
        href: "#",
        icon: Globe2,
      },
    ],
  },
  {
    title: "Business Solutions",
    features: [
      {
        id: "feature-4",
        title: "Customer Success",
        description: "Dedicated support for your business needs.",
        href: "#",
        icon: Phone,
      },
      {
        id: "feature-5",
        title: "Compliance",
        description: "Meet industry standards and regulations.",
        href: "#",
        icon: Gavel,
      },
      {
        id: "feature-6",
        title: "ROI Calculator",
        description: "Measure the impact on your business.",
        href: "#",
        icon: DollarSign,
      },
      {
        id: "feature-7",
        title: "IT Solutions",
        description: "Enterprise-grade security and administration tools.",
        href: "#",
        icon: Computer,
      },
      {
        id: "feature-8",
        title: "Strategic Planning",
        description: "Align teams and track company objectives.",
        href: "#",
        icon: Flag,
      },
    ],
  },
];

export const resources = [
  {
    id: "resource-1",
    title: "Events & Webinars",
    description: "Learn from industry experts.",
    href: "#",
    icon: Calendar,
  },
  {
    id: "resource-2",
    title: "Podcasts",
    description: "Insights on productivity and leadership.",
    href: "#",
    icon: Mic,
  },
  {
    id: "resource-3",
    title: "Blog",
    description: "Latest updates and best practices.",
    href: "#",
    icon: Newspaper,
  },
  {
    id: "resource-4",
    title: "Video Tutorials",
    description: "Get started with guided videos.",
    href: "#",
    icon: PlayCircle,
  },
  {
    id: "resource-5",
    title: "Knowledge Base",
    description: "Detailed guides and documentation.",
    href: "#",
    icon: Book,
  },
  {
    id: "resource-6",
    title: "Success Stories",
    description: "See how others achieve more.",
    href: "#",
    icon: Lightbulb,
  },
];

export const topicGroups = [
  {
    title: "Learning Resources",
    topics: [
      {
        id: "topic-1",
        title: "Getting Started Guide",
        href: "#",
        icon: Globe,
      },
      {
        id: "topic-2",
        title: "Product Updates",
        href: "#",
        icon: Rocket,
      },
      {
        id: "topic-3",
        title: "Best Practices",
        href: "#",
        icon: Pyramid,
      },
      {
        id: "topic-4",
        title: "Integrations",
        href: "#",
        icon: ArrowRightLeft,
      },
      {
        id: "topic-5",
        title: "API Documentation",
        href: "#",
        icon: AppWindow,
      },
    ],
  },
  {
    title: "Community",
    topics: [
      {
        id: "topic-6",
        title: "Community Forum",
        href: "#",
        icon: Play,
      },
    ],
  },
];
