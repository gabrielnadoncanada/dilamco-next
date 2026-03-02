import type { ReactNode } from "react";
import { z } from "zod";
import type { LucideIcon } from "lucide-react";
import { SECTION_TYPES } from "@/constants/section-types";
import type { ActionButton } from "@/components/ActionButtons";

export type SectionLink = {
  href: string;
  title?: string;
  label?: string;
  text?: string;
  description?: string;
  variant?: "default" | "outline";
};

export type SectionItemWithLink = {
  title?: string;
  label?: string;
  link?: SectionLink;
};

export type ListEntry = { title: string; description: string } | string;

export type RelatedLink = {
  title?: string;
  label?: string;
  href?: string;
  description?: string;
  icon?: LucideIcon;
};

export type TableRow = { label?: string; title?: string; values: string[] };

export type ProcessItem = {
  id?: string | number;
  step?: string | number;
  title: string;
  description: string;
};

export type AsymmetricTwoColumnsItem = {
  title?: string;
  description: string;
};

export type CenteredMinimalCard = {
  title: string;
  description: string;
};

export type IntroValueCardAction = {
  href: string;
  title?: string;
  label?: string;
  text?: string;
  variant?: "default" | "outline";
};

export type HeroSplitPremiumAction = {
  text: string;
  href: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
};

export type HeroSplitPremiumProof = {
  title: string;
  description: string;
};

export type MaterialsContrastCard = {
  title: string;
  description: string;
  fullWidth?: boolean;
};

export type MaterialsContrastCompareRow = {
  label: string;
  value: string;
};

export type ProjectsImmersiveItem = {
  title: string;
  location: string;
  href: string;
  image: {
    src: string;
    alt: string;
  };
};

export type FeatureGridItem = {
  title: string;
  description: string;
  icon?: LucideIcon;
  href?: string;
};

export type ProofItem = {
  title: string;
  description: string;
  icon?: LucideIcon;
};

export type SliderSectionItem = {
  id: string;
  title: string;
  description?: string;
  label?: string;
  href?: string;
  image?: {
    src: string;
    alt: string;
  };
  content?: ReactNode;
};

export type FaqItem = { q: string; a: string };

type TextContent = {
  type: typeof SECTION_TYPES.TEXT;
  paragraphs?: string[];
  items?: Array<ListEntry | RelatedLink>;
  links?: SectionLink[];
};

type ListContent = {
  type: typeof SECTION_TYPES.LIST;
  items: Array<ListEntry | RelatedLink>;
  links?: SectionLink[];
  variant?: "bullets" | "checkmarks" | "numbered";
};

type TableContent = {
  type: typeof SECTION_TYPES.TABLE;
  columns: string[];
  rows: TableRow[];
  firstColumnLabel?: string;
};

type AsymmetricTwoColumnsContent = {
  type: typeof SECTION_TYPES.ASYMMETRIC_2_COLUMNS;
  items: AsymmetricTwoColumnsItem[];
  links?: SectionLink[];
  image: {
    src: string;
    alt: string;
  };
  cardTitle: string;
  cardDescription: string;
  surface?: "default" | "muted";
};

type CenteredMinimalContent = {
  type: typeof SECTION_TYPES.CENTERED_MINIMAL;
  cards: CenteredMinimalCard[];
  links?: SectionLink[];
};

type IntroValueContent = {
  type: typeof SECTION_TYPES.INTRO_VALUE;
  badges?: string[];
  cardTitle: string;
  cardItems: string[];
  cardAction?: IntroValueCardAction;
};

type HeroSplitPremiumContent = {
  type: typeof SECTION_TYPES.HERO_SPLIT_PREMIUM;
  badges?: string[];
  image: {
    src: string;
    alt: string;
  };
  imagePriority?: boolean;
  actions?: HeroSplitPremiumAction[];
  proofs?: HeroSplitPremiumProof[];
};

type MaterialsContrastContent = {
  type: typeof SECTION_TYPES.MATERIALS_CONTRAST;
  cards: MaterialsContrastCard[];
  links?: SectionLink[];
  image: {
    src: string;
    alt: string;
  };
  imageCardTitle: string;
  imageCardDescription: string;
  compareTitle?: string;
  compareRows?: MaterialsContrastCompareRow[];
  surface?: "default" | "muted";
};

type ProjectsImmersiveContent = {
  type: typeof SECTION_TYPES.PROJECTS_IMMERSIVE;
  items: ProjectsImmersiveItem[];
  cta?: SectionLink;
};

type StepsContent = {
  type: typeof SECTION_TYPES.STEPS;
  steps?: string[];
  links?: SectionLink[];
};

type ListWithLinksContent = {
  type: typeof SECTION_TYPES.LIST_WITH_LINKS;
  itemsWithLinks?: SectionItemWithLink[];
};

type RelatedLinksContent = {
  type: typeof SECTION_TYPES.RELATED_LINKS;
  items: RelatedLink[];
  columns?: 2 | 3;
  icon?: LucideIcon;
};

type FeatureGridContent = {
  type: typeof SECTION_TYPES.FEATURE_GRID;
  items: FeatureGridItem[];
  columns?: 2 | 3 | 4;
};

type ProofContent = {
  type: typeof SECTION_TYPES.PROOF;
  items: ProofItem[];
};

type ProcessContent = {
  type: typeof SECTION_TYPES.PROCESS;
  items: ProcessItem[];
  layout?: "cards" | "timeline";
  actions?: ReactNode;
};

type SliderContent = {
  type: typeof SECTION_TYPES.SLIDER;
  items: SliderSectionItem[];
  showNavigation?: boolean;
};

type FaqContent = {
  type: typeof SECTION_TYPES.FAQ;
  items?: FaqItem[];
};

type CustomContent = {
  type: typeof SECTION_TYPES.CUSTOM;
  node: ReactNode;
};

export type SectionContent =
  | TextContent
  | ListContent
  | TableContent
  | AsymmetricTwoColumnsContent
  | CenteredMinimalContent
  | IntroValueContent
  | HeroSplitPremiumContent
  | MaterialsContrastContent
  | ProjectsImmersiveContent
  | StepsContent
  | ListWithLinksContent
  | RelatedLinksContent
  | FeatureGridContent
  | ProofContent
  | ProcessContent
  | SliderContent
  | FaqContent
  | CustomContent;

export type ContentSection = {
  id: string;
  title: string;
  intro?: string | ReactNode;
  content: SectionContent;
};

export type ContentArticleSection = ContentSection;

const linkSchema = z.object({
  href: z.string().min(1),
  title: z.string().optional(),
  label: z.string().optional(),
  text: z.string().optional(),
  description: z.string().optional(),
  variant: z.enum(["default", "outline"]).optional(),
});

const listEntrySchema = z.union([
  z.string(),
  z.object({
    title: z.string(),
    description: z.string(),
  }),
]);

const relatedLinkSchema = z.object({
  title: z.string().optional(),
  label: z.string().optional(),
  href: z.string().min(1).optional(),
  description: z.string().optional(),
  icon: z.any().optional(),
});

const tableRowSchema = z.object({
  label: z.string().optional(),
  title: z.string().optional(),
  values: z.array(z.string()),
});

const asymmetricTwoColumnsItemSchema = z.object({
  title: z.string().optional(),
  description: z.string(),
});

const centeredMinimalCardSchema = z.object({
  title: z.string(),
  description: z.string(),
});

const introValueCardActionSchema = z.object({
  href: z.string().min(1),
  title: z.string().optional(),
  label: z.string().optional(),
  text: z.string().optional(),
  variant: z.enum(["default", "outline"]).optional(),
});

const heroSplitPremiumActionSchema = z.object({
  text: z.string(),
  href: z.string().min(1),
  variant: z.enum(["default", "outline", "secondary", "ghost", "link", "destructive"]).optional(),
});

const heroSplitPremiumProofSchema = z.object({
  title: z.string(),
  description: z.string(),
});

const materialsContrastCardSchema = z.object({
  title: z.string(),
  description: z.string(),
  fullWidth: z.boolean().optional(),
});

const materialsContrastCompareRowSchema = z.object({
  label: z.string(),
  value: z.string(),
});

const projectsImmersiveItemSchema = z.object({
  title: z.string(),
  location: z.string(),
  href: z.string().min(1),
  image: z.object({
    src: z.string(),
    alt: z.string(),
  }),
});

const processItemSchema = z.object({
  id: z.union([z.string(), z.number()]).optional(),
  step: z.union([z.string(), z.number()]).optional(),
  title: z.string(),
  description: z.string(),
});

const featureGridItemSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.any().optional(),
  href: z.string().optional(),
});

const proofItemSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.any().optional(),
});

const sliderItemSchema = z.object({
  id: z.string().min(1),
  title: z.string(),
  description: z.string().optional(),
  label: z.string().optional(),
  href: z.string().optional(),
  image: z
    .object({
      src: z.string(),
      alt: z.string(),
    })
    .optional(),
  content: z.any().optional(),
});

const faqItemSchema = z.object({
  q: z.string(),
  a: z.string(),
});

export const sectionContentSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal(SECTION_TYPES.TEXT),
    paragraphs: z.array(z.string()).optional(),
    items: z.array(z.union([listEntrySchema, relatedLinkSchema])).optional(),
    links: z.array(linkSchema).optional(),
  }),
  z.object({
    type: z.literal(SECTION_TYPES.LIST),
    items: z.array(z.union([listEntrySchema, relatedLinkSchema])),
    links: z.array(linkSchema).optional(),
    variant: z.enum(["bullets", "checkmarks", "numbered"]).optional(),
  }),
  z.object({
    type: z.literal(SECTION_TYPES.TABLE),
    columns: z.array(z.string()),
    rows: z.array(tableRowSchema),
    firstColumnLabel: z.string().optional(),
  }),
  z.object({
    type: z.literal(SECTION_TYPES.ASYMMETRIC_2_COLUMNS),
    items: z.array(asymmetricTwoColumnsItemSchema),
    links: z.array(linkSchema).optional(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    cardTitle: z.string(),
    cardDescription: z.string(),
    surface: z.enum(["default", "muted"]).optional(),
  }),
  z.object({
    type: z.literal(SECTION_TYPES.CENTERED_MINIMAL),
    cards: z.array(centeredMinimalCardSchema),
    links: z.array(linkSchema).optional(),
  }),
  z.object({
    type: z.literal(SECTION_TYPES.INTRO_VALUE),
    badges: z.array(z.string()).optional(),
    cardTitle: z.string(),
    cardItems: z.array(z.string()),
    cardAction: introValueCardActionSchema.optional(),
  }),
  z.object({
    type: z.literal(SECTION_TYPES.HERO_SPLIT_PREMIUM),
    badges: z.array(z.string()).optional(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    imagePriority: z.boolean().optional(),
    actions: z.array(heroSplitPremiumActionSchema).optional(),
    proofs: z.array(heroSplitPremiumProofSchema).optional(),
  }),
  z.object({
    type: z.literal(SECTION_TYPES.MATERIALS_CONTRAST),
    cards: z.array(materialsContrastCardSchema),
    links: z.array(linkSchema).optional(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    imageCardTitle: z.string(),
    imageCardDescription: z.string(),
    compareTitle: z.string().optional(),
    compareRows: z.array(materialsContrastCompareRowSchema).optional(),
    surface: z.enum(["default", "muted"]).optional(),
  }),
  z.object({
    type: z.literal(SECTION_TYPES.PROJECTS_IMMERSIVE),
    items: z.array(projectsImmersiveItemSchema),
    cta: linkSchema.optional(),
  }),
  z.object({
    type: z.literal(SECTION_TYPES.STEPS),
    steps: z.array(z.string()).optional(),
    links: z.array(linkSchema).optional(),
  }),
  z.object({
    type: z.literal(SECTION_TYPES.LIST_WITH_LINKS),
    itemsWithLinks: z
      .array(
        z.object({
          title: z.string().optional(),
          label: z.string().optional(),
          link: linkSchema.optional(),
        }),
      )
      .optional(),
  }),
  z.object({
    type: z.literal(SECTION_TYPES.RELATED_LINKS),
    items: z.array(relatedLinkSchema),
    columns: z.union([z.literal(2), z.literal(3)]).optional(),
  }),
  z.object({
    type: z.literal(SECTION_TYPES.FEATURE_GRID),
    items: z.array(featureGridItemSchema),
    columns: z.union([z.literal(2), z.literal(3), z.literal(4)]).optional(),
  }),
  z.object({
    type: z.literal(SECTION_TYPES.PROOF),
    items: z.array(proofItemSchema),
  }),
  z.object({
    type: z.literal(SECTION_TYPES.PROCESS),
    items: z.array(processItemSchema),
    layout: z.enum(["cards", "timeline"]).optional(),
    actions: z.any().optional(),
  }),
  z.object({
    type: z.literal(SECTION_TYPES.SLIDER),
    items: z.array(sliderItemSchema),
    showNavigation: z.boolean().optional(),
  }),
  z.object({
    type: z.literal(SECTION_TYPES.CUSTOM),
    node: z.any(),
  }),
  z.object({
    type: z.literal(SECTION_TYPES.FAQ),
    items: z.array(faqItemSchema).optional(),
  }),
]);

export const contentSectionSchema = z.object({
  id: z.string().min(1),
  title: z.string(),
  intro: z.union([z.string(), z.any()]).optional(),
  content: sectionContentSchema,
});

export const contentSectionsSchema = z.array(contentSectionSchema);

export const actionButtonSchema = z.object({
  text: z.string(),
  href: z.string(),
  variant: z.enum(["default", "outline", "secondary", "ghost", "link", "destructive"]).optional(),
});

export const articlePageSchema = z.object({
  breadcrumbs: z.array(
    z.object({
      name: z.string(),
      url: z.string(),
    }),
  ),
  extraJsonLd: z.array(z.record(z.string(), z.unknown())).optional(),
  hero: z.object({
    variant: z.enum(["default", "boxed", "split-premium"]).optional(),
    heading: z.string(),
    description: z.any().optional(),
    list: z.array(z.string()).optional(),
    badges: z.array(z.string()).optional(),
    proofs: z
      .array(
        z.object({
          title: z.string(),
          description: z.string(),
        }),
      )
      .optional(),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    imagePriority: z.boolean().optional(),
    actions: z.array(actionButtonSchema).optional(),
    actionsSlot: z.any().optional(),
  }),
  sections: contentSectionsSchema,
  faq: z
    .object({
      ariaLabelledby: z.string(),
      heading: z.string(),
      items: z.array(faqItemSchema),
    })
    .optional(),
  cta: z
    .object({
      heading: z.string(),
      description: z.string(),
      actions: z.array(actionButtonSchema),
    })
    .optional(),
  showCta: z.boolean().optional(),
  footerSections: contentSectionsSchema.optional(),
});

export type ActionButtonArray = ActionButton[];
export interface ArticlePageData {
  breadcrumbs: Array<{ name: string; url: string }>;
  extraJsonLd?: Record<string, unknown>[];
  hero: {
    variant?: "default" | "boxed" | "split-premium";
    heading: string | ReactNode;
    description?: string | ReactNode;
    list?: string[];
    badges?: string[];
    proofs?: Array<{ title: string; description: string }>;
    image?: { src: string; alt: string };
    imagePriority?: boolean;
    actions?: ActionButton[];
    actionsSlot?: ReactNode;
  };
  sections: ContentArticleSection[];
  faq?: {
    ariaLabelledby: string;
    heading: string;
    items: FaqItem[];
  };
  cta?: {
    heading: string;
    description: string;
    actions: ActionButton[];
  };
  showCta?: boolean;
  footerSections?: ContentArticleSection[];
}
