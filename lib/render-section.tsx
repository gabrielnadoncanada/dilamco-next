import type { ReactNode } from "react";
import { ActionButtons, type ActionButton } from "@/components/ActionButtons";
import { ComparisonTableSection } from "@/components/sections/ComparisonTableSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FeatureGridSection } from "@/components/sections/FeatureGridSection";
import { ListSection } from "@/components/sections/ListSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { SliderSection, type SliderItem } from "@/components/sections/SliderSection";
import { TextSection } from "@/components/sections/TextSection";
import { SECTION_TYPES } from "@/constants/section-types";
import type { LucideIcon } from "lucide-react";

type SectionLink = { title?: string; label?: string; text?: string; href: string };

type SectionItemWithLink = {
  title?: string;
  label?: string;
  link?: SectionLink;
};

type ListEntry = string | { title: string; description: string };

type RelatedLink = {
  title?: string;
  label?: string;
  href: string;
  description?: string;
};

type TableRow = { label?: string; title?: string; values: string[] };

type ProcessItem = {
  id?: string | number;
  step?: string | number;
  title: string;
  description: string;
};

type FeatureGridItem = {
  title: string;
  description: string;
  icon?: LucideIcon;
  href?: string;
};

type ProofItem = {
  title: string;
  description: string;
  icon?: LucideIcon;
};

type FaqItem = { q: string; a: string };

export type RenderableSection = {
  id: string;
  title: string;
  type:
    | typeof SECTION_TYPES.TEXT
    | typeof SECTION_TYPES.LIST
    | typeof SECTION_TYPES.TABLE
    | typeof SECTION_TYPES.STEPS
    | typeof SECTION_TYPES.LIST_WITH_LINKS
    | typeof SECTION_TYPES.RELATED_LINKS
    | typeof SECTION_TYPES.FEATURE_GRID
    | typeof SECTION_TYPES.PROOF
    | typeof SECTION_TYPES.PROCESS
    | typeof SECTION_TYPES.SLIDER
    | typeof SECTION_TYPES.CUSTOM
    | typeof SECTION_TYPES.FAQ;
  paragraphs?: string[];
  intro?: ReactNode;
  description?: string;
  items?:
    | ListEntry[]
    | Array<ListEntry | RelatedLink>
    | RelatedLink[]
    | ProcessItem[]
    | FeatureGridItem[]
    | ProofItem[]
    | SliderItem[]
    | FaqItem[];
  itemsWithLinks?: SectionItemWithLink[];
  steps?: string[];
  links?: SectionLink[];
  variant?: "bullets" | "checkmarks" | "numbered";
  relatedLinks?: RelatedLink[];
  columns?: 2 | 3 | 4;
  tableColumns?: string[];
  rows?: TableRow[];
  firstColumnLabel?: string;
  layout?: "cards" | "timeline";
  actions?: ReactNode;
  showNavigation?: boolean;
  node?: ReactNode;
  faqItems?: FaqItem[];
};

export type RenderableSectionWithContent = {
  id: string;
  title: string;
  content: {
    type:
      | typeof SECTION_TYPES.TEXT
      | typeof SECTION_TYPES.LIST
      | typeof SECTION_TYPES.TABLE
      | typeof SECTION_TYPES.STEPS
      | typeof SECTION_TYPES.LIST_WITH_LINKS
      | typeof SECTION_TYPES.RELATED_LINKS
      | typeof SECTION_TYPES.FEATURE_GRID
      | typeof SECTION_TYPES.PROOF
      | typeof SECTION_TYPES.PROCESS
      | typeof SECTION_TYPES.SLIDER
      | typeof SECTION_TYPES.CUSTOM
      | typeof SECTION_TYPES.FAQ;
    paragraphs?: string[];
    intro?: ReactNode;
    description?: string;
    items?:
      | ListEntry[]
      | Array<ListEntry | RelatedLink>
      | RelatedLink[]
      | ProcessItem[]
      | FeatureGridItem[]
      | ProofItem[]
      | SliderItem[]
      | FaqItem[];
    itemsWithLinks?: SectionItemWithLink[];
    steps?: string[];
    links?: SectionLink[];
    variant?: "bullets" | "checkmarks" | "numbered";
    relatedLinks?: RelatedLink[];
    columns?: string[] | 2 | 3 | 4;
    rows?: TableRow[];
    firstColumnLabel?: string;
    layout?: "cards" | "timeline";
    actions?: ReactNode;
    showNavigation?: boolean;
    node?: ReactNode;
    faqItems?: FaqItem[];
  };
};

type RenderSectionOptions = {
  dedupeLinkedLabel?: boolean;
};

function toActionButtons(links?: SectionLink[]): ActionButton[] | undefined {
  return links?.map((link) => ({
    text: link.title ?? link.label ?? link.text ?? "",
    href: link.href,
    variant: "outline",
  }));
}

function mapItemsWithLinks(
  items: SectionItemWithLink[] | undefined,
  dedupeLinkedLabel: boolean
) {
  return (
    items?.map((item) => {
      const itemText = item.title ?? item.label ?? "";
      if (!item.link) return itemText;
      const linkText = item.link.title ?? item.link.label ?? "";
      if (dedupeLinkedLabel && itemText === linkText) {
        return linkText;
      }
      return `${itemText} - ${linkText}`;
    }) ?? []
  );
}

function toListEntries(
  items?: Array<ListEntry | RelatedLink>
): ListEntry[] {
  return (items ?? []).map((item) => {
    if (typeof item === "string") return item;
    if ("href" in item) return item.title ?? item.label ?? item.href;
    return item;
  });
}

export function renderSection(
  section: RenderableSection | RenderableSectionWithContent,
  options: RenderSectionOptions = {}
): ReactNode {
  const normalized: RenderableSection =
    "content" in section
      ? {
          id: section.id,
          title: section.title,
          type: section.content.type,
          paragraphs: section.content.paragraphs,
          intro: section.content.intro,
          description: section.content.description,
          items:
            section.content.type === SECTION_TYPES.LIST
              ? toListEntries(
                  section.content.items as Array<ListEntry | RelatedLink> | undefined
                )
              : undefined,
          itemsWithLinks: section.content.itemsWithLinks,
          steps: section.content.steps,
          links: section.content.links,
          variant: section.content.variant,
          relatedLinks:
            section.content.type === SECTION_TYPES.RELATED_LINKS
              ? (section.content.items as RelatedLink[] | undefined)
              : section.content.relatedLinks,
          columns:
            typeof section.content.columns === "number"
              ? section.content.columns
              : undefined,
          tableColumns:
            section.content.type === SECTION_TYPES.TABLE
              ? (section.content.columns as string[] | undefined)
              : undefined,
          rows: section.content.rows,
          firstColumnLabel: section.content.firstColumnLabel,
          layout: section.content.layout,
          actions: section.content.actions,
          showNavigation: section.content.showNavigation,
          node: section.content.node,
          faqItems:
            section.content.type === SECTION_TYPES.FAQ
              ? (section.content.items as FaqItem[] | undefined)
              : section.content.faqItems,
        }
      : section;

  const rawItems = "content" in section ? section.content.items : normalized.items;
  const { id, title, type } = normalized;
  const dedupeLinkedLabel = options.dedupeLinkedLabel ?? false;

  switch (type) {
    case SECTION_TYPES.TEXT:
      return (
        <TextSection
          key={id}
          aria-labelledby={id}
          heading={title}
          intro={typeof normalized.intro === "string" ? normalized.intro : undefined}
          paragraphs={normalized.paragraphs ?? []}
          links={toActionButtons(normalized.links)}
        />
      );

    case SECTION_TYPES.LIST:
      return (
        <ListSection
          key={id}
          aria-labelledby={id}
          heading={title}
          intro={typeof normalized.intro === "string" ? normalized.intro : undefined}
          items={toListEntries(normalized.items as Array<ListEntry | RelatedLink> | undefined)}
          links={toActionButtons(normalized.links)}
          variant={normalized.variant ?? "bullets"}
        />
      );

    case SECTION_TYPES.TABLE:
      return (
        <ComparisonTableSection
          key={id}
          aria-labelledby={id}
          heading={title}
          description={normalized.description}
          columns={normalized.tableColumns ?? []}
          rows={normalized.rows ?? []}
          firstColumnLabel={normalized.firstColumnLabel}
        />
      );

    case SECTION_TYPES.LIST_WITH_LINKS:
      return (
        <ListSection
          key={id}
          aria-labelledby={id}
          heading={title}
          intro={typeof normalized.intro === "string" ? normalized.intro : undefined}
          items={mapItemsWithLinks(normalized.itemsWithLinks, dedupeLinkedLabel)}
          variant="bullets"
        />
      );

    case SECTION_TYPES.STEPS: {
      const stepLinks = toActionButtons(normalized.links);
      return (
        <ProcessSection
          key={id}
          aria-labelledby={id}
          heading={title}
          intro={typeof normalized.intro === "string" ? normalized.intro : undefined}
          items={(normalized.steps ?? []).map((step, idx) => ({
            step: String(idx + 1),
            title: step,
            description: "",
          }))}
          actions={
            stepLinks && stepLinks.length > 0 ? (
              <ActionButtons buttons={stepLinks} />
            ) : undefined
          }
        />
      );
    }

    case SECTION_TYPES.RELATED_LINKS:
      return (
        <RelatedLinksSection
          key={id}
          aria-labelledby={id}
          heading={title}
          intro={normalized.intro}
          items={normalized.relatedLinks ?? []}
          columns={normalized.columns as 2 | 3 | undefined}
        />
      );

    case SECTION_TYPES.FEATURE_GRID:
      return (
        <FeatureGridSection
          key={id}
          aria-labelledby={id}
          heading={title}
          description={normalized.description}
          items={(rawItems as FeatureGridItem[] | undefined) ?? []}
          columns={normalized.columns as 2 | 3 | 4 | undefined}
        />
      );

    case SECTION_TYPES.PROOF:
      return (
        <ProofSection
          key={id}
          aria-labelledby={id}
          heading={title}
          description={normalized.description}
          items={(rawItems as ProofItem[] | undefined) ?? []}
        />
      );

    case SECTION_TYPES.PROCESS:
      return (
        <ProcessSection
          key={id}
          aria-labelledby={id}
          heading={title}
          intro={normalized.description}
          items={(rawItems as ProcessItem[] | undefined) ?? []}
          layout={normalized.layout}
          actions={normalized.actions}
        />
      );

    case SECTION_TYPES.SLIDER:
      return (
        <SliderSection
          key={id}
          aria-labelledby={id}
          heading={title}
          description={normalized.description}
          items={(rawItems as SliderItem[] | undefined) ?? []}
          showNavigation={normalized.showNavigation}
        />
      );

    case SECTION_TYPES.CUSTOM:
      return <div key={id}>{normalized.node ?? null}</div>;

    case SECTION_TYPES.FAQ:
      return (
        <FAQSection
          key={id}
          aria-labelledby={id}
          heading={title}
          intro={normalized.intro}
          items={(normalized.faqItems ?? []).map((item) => ({
            question: item.q,
            answer: item.a,
          }))}
        />
      );

    default:
      return null;
  }
}
