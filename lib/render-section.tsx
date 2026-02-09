import type { ReactNode } from "react";
import { ActionButtons, type ActionButton } from "@/components/ActionButtons";
import { FAQSection } from "@/components/sections/FAQSection";
import { ListSection } from "@/components/sections/ListSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { RelatedLinksSection } from "@/components/sections/RelatedLinksSection";
import { TextSection } from "@/components/sections/TextSection";
import { SECTION_TYPES } from "@/constants/section-types";

type SectionLink = { title?: string; label?: string; href: string };

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

export type RenderableSection = {
  id: string;
  title: string;
  type:
  | typeof SECTION_TYPES.TEXT
  | typeof SECTION_TYPES.LIST
  | typeof SECTION_TYPES.STEPS
  | typeof SECTION_TYPES.LIST_WITH_LINKS
  | typeof SECTION_TYPES.RELATED_LINKS
  | typeof SECTION_TYPES.CUSTOM
  | typeof SECTION_TYPES.FAQ;
  paragraphs?: string[];
  intro?: string;
  items?: ListEntry[];
  itemsWithLinks?: SectionItemWithLink[];
  steps?: string[];
  links?: SectionLink[];
  variant?: "bullets" | "checkmarks" | "numbered";
  relatedLinks?: RelatedLink[];
  columns?: 2 | 3;
  node?: ReactNode;
  faqItems?: Array<{ q: string; a: string }>;
};

export type RenderableSectionWithContent = {
  id: string;
  title: string;
  content: {
    type:
    | typeof SECTION_TYPES.TEXT
    | typeof SECTION_TYPES.LIST
    | typeof SECTION_TYPES.STEPS
    | typeof SECTION_TYPES.LIST_WITH_LINKS
    | typeof SECTION_TYPES.RELATED_LINKS
    | typeof SECTION_TYPES.CUSTOM
    | typeof SECTION_TYPES.FAQ;
    paragraphs?: string[];
    intro?: string;
    items?: ListEntry[] | Array<{ q: string; a: string }> | RelatedLink[];
    itemsWithLinks?: SectionItemWithLink[];
    steps?: string[];
    links?: SectionLink[];
    variant?: "bullets" | "checkmarks" | "numbered";
    relatedLinks?: RelatedLink[];
    columns?: 2 | 3;
    node?: ReactNode;
    faqItems?: Array<{ q: string; a: string }>;
  };
};

type RenderSectionOptions = {
  dedupeLinkedLabel?: boolean;
};

function toActionButtons(links?: SectionLink[]): ActionButton[] | undefined {
  return links?.map((link) => ({
    text: link.title ?? link.label ?? "",
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
        items:
          section.content.type === SECTION_TYPES.LIST
            ? (section.content.items as ListEntry[] | undefined)
            : undefined,
        itemsWithLinks: section.content.itemsWithLinks,
        steps: section.content.steps,
        links: section.content.links,
        variant: section.content.variant,
        relatedLinks:
          section.content.type === SECTION_TYPES.RELATED_LINKS
            ? (section.content.items as RelatedLink[] | undefined)
            : section.content.relatedLinks,
        columns: section.content.columns,
        node: section.content.node,
        faqItems:
          section.content.type === SECTION_TYPES.FAQ
            ? (section.content.items as Array<{ q: string; a: string }>)
            : section.content.faqItems,
      }
      : section;

  const { id, title, type } = normalized;
  const dedupeLinkedLabel = options.dedupeLinkedLabel ?? false;

  switch (type) {
    case SECTION_TYPES.TEXT:
      return (
        <TextSection
          key={id}
          aria-labelledby={id}
          heading={title}
          intro={normalized.intro}
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
          intro={normalized.intro}
          items={normalized.items ?? []}
          links={toActionButtons(normalized.links)}
          variant={normalized.variant ?? "bullets"}
        />
      );

    case SECTION_TYPES.LIST_WITH_LINKS:
      return (
        <ListSection
          key={id}
          aria-labelledby={id}
          heading={title}
          intro={normalized.intro}
          items={mapItemsWithLinks(normalized.itemsWithLinks, dedupeLinkedLabel)}
          variant="bullets"
        />
      );

    case SECTION_TYPES.STEPS:
      const stepLinks = toActionButtons(normalized.links);
      return (
        <ProcessSection
          key={id}
          aria-labelledby={id}
          heading={title}
          intro={normalized.intro}
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

    case SECTION_TYPES.RELATED_LINKS:
      return (
        <RelatedLinksSection
          key={id}
          aria-labelledby={id}
          heading={title}
          intro={normalized.intro}
          items={normalized.relatedLinks ?? []}
          columns={normalized.columns}
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
