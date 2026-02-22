import type { ReactNode } from "react";
import { SECTION_TYPES } from "@/constants/section-types";
import type { ActionButton } from "@/components/ActionButtons";
import type {
  ContentSection,
  FaqItem,
  FeatureGridItem,
  ListEntry,
  ProcessItem,
  ProofItem,
  RelatedLink,
  RenderableSection,
  SectionItemWithLink,
  SectionLink,
  SliderSectionItem,
  TableRow,
} from "@/types/sections";

type RenderOptions = {
  dedupeLinkedLabel?: boolean;
};

export function toActionButtons(links?: SectionLink[]): ActionButton[] | undefined {
  return links?.map((link) => ({
    text: link.title ?? link.label ?? link.text ?? "",
    href: link.href,
    variant: "outline",
  }));
}

export function mapItemsWithLinks(
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

export function toListEntries(items?: Array<ListEntry | RelatedLink>): ListEntry[] {
  return (items ?? []).map((item) => {
    if (typeof item === "string") return item;
    if ("href" in item) return item.title ?? item.label ?? item.href;
    return item;
  });
}

export function normalizeContentSection(
  section: ContentSection,
  options: RenderOptions = {}
): RenderableSection {
  const dedupeLinkedLabel = options.dedupeLinkedLabel ?? false;
  const { id, title, content } = section;
  const intro = section.intro;

  if (content.type === SECTION_TYPES.LIST) {
    return {
      id,
      title,
      type: content.type,
      intro,
      items: toListEntries(content.items),
      links: content.links,
      variant: content.variant,
    };
  }

  if (content.type === SECTION_TYPES.TABLE) {
    return {
      id,
      title,
      type: content.type,
      description: content.description,
      tableColumns: content.columns,
      rows: content.rows,
      firstColumnLabel: content.firstColumnLabel,
    };
  }

  if (content.type === SECTION_TYPES.RELATED_LINKS) {
    return {
      id,
      title,
      type: content.type,
      intro,
      relatedLinks: content.items,
      columns: content.columns,
    };
  }

  if (content.type === SECTION_TYPES.FEATURE_GRID) {
    return {
      id,
      title,
      type: content.type,
      description: content.description,
      items: content.items as FeatureGridItem[],
      columns: content.columns,
    };
  }

  if (content.type === SECTION_TYPES.PROOF) {
    return {
      id,
      title,
      type: content.type,
      description: content.description,
      items: content.items as ProofItem[],
    };
  }

  if (content.type === SECTION_TYPES.PROCESS) {
    return {
      id,
      title,
      type: content.type,
      description: content.description,
      items: content.items as ProcessItem[],
      layout: content.layout,
      actions: content.actions,
    };
  }

  if (content.type === SECTION_TYPES.SLIDER) {
    return {
      id,
      title,
      type: content.type,
      description: content.description,
      items: content.items as SliderSectionItem[],
      showNavigation: content.showNavigation,
    };
  }

  if (content.type === SECTION_TYPES.FAQ) {
    return {
      id,
      title,
      type: content.type,
      intro,
      items: content.items,
    };
  }

  if (content.type === SECTION_TYPES.TEXT) {
    const paragraphs =
      content.paragraphs ??
      (content.items
        ? toListEntries(content.items).map((item) =>
            typeof item === "string" ? item : `${item.title} ${item.description}`.trim()
          )
        : undefined);

    return {
      id,
      title,
      type: content.type,
      intro,
      paragraphs,
      links: content.links,
    };
  }

  if (content.type === SECTION_TYPES.STEPS) {
    return {
      id,
      title,
      type: content.type,
      intro,
      steps: content.steps,
      links: content.links,
    };
  }

  if (content.type === SECTION_TYPES.LIST_WITH_LINKS) {
    return {
      id,
      title,
      type: content.type,
      intro,
      items: mapItemsWithLinks(content.itemsWithLinks, dedupeLinkedLabel),
      itemsWithLinks: content.itemsWithLinks,
    };
  }

  return {
    id,
    title,
    type: content.type,
    node: content.node as ReactNode,
  };
}

export function normalizeContentSections(
  sections: ContentSection[],
  options: RenderOptions = {}
) {
  return sections.map((section) => normalizeContentSection(section, options));
}

export function faqItemsToSectionItems(items: FaqItem[] | undefined) {
  return (items ?? []).map((item) => ({
    question: item.q,
    answer: item.a,
  }));
}

export function emptyTableRows(rows?: TableRow[]) {
  return rows ?? [];
}
