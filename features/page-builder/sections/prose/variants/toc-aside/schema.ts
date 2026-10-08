import { z } from "zod";

// Texte en ligne : seuls deux marquages sont reconnus, `**gras**` et
// `[libellé](/chemin)`. Tout le reste est rendu tel quel (jamais de HTML).
const InlineText = z.string().min(1);

const HeadingNode = z.object({
  type: z.literal("h2"),
  text: InlineText,
  /** Ancre stable ; dérivée du texte si absente. */
  id: z.string().regex(/^[a-z0-9-]+$/).optional(),
});

const SubheadingNode = z.object({
  type: z.literal("h3"),
  text: InlineText,
});

const ParagraphNode = z.object({
  type: z.literal("p"),
  text: InlineText,
});

const ListItems = z.array(InlineText).min(1).max(12);

const BulletListNode = z.object({
  type: z.literal("ul"),
  items: ListItems,
});

const OrderedListNode = z.object({
  type: z.literal("ol"),
  items: ListItems,
});

const CalloutNode = z.object({
  type: z.literal("callout"),
  title: z.string().min(1).optional(),
  /** Une phrase, ou une liste courte (les deux peuvent coexister). */
  text: InlineText.optional(),
  items: z.array(InlineText).min(1).max(8).optional(),
});

const TableNode = z.object({
  type: z.literal("table"),
  caption: z.string().min(1).optional(),
  head: z.array(z.string().min(1)).min(2).max(5),
  rows: z.array(z.array(InlineText).min(2).max(5)).min(1).max(15),
});

const ImageNode = z.object({
  type: z.literal("image"),
  src: z.string().min(1),
  alt: z.string().min(1),
  caption: z.string().min(1).optional(),
});

export const ProseNodeSchema = z.discriminatedUnion("type", [
  HeadingNode,
  SubheadingNode,
  ParagraphNode,
  BulletListNode,
  OrderedListNode,
  CalloutNode,
  TableNode,
  ImageNode,
]);

export const ProseTocAsideSchema = z.object({
  /** Libellé de la table des matières (« Dans cet article »). */
  tocLabel: z.string().min(1),
  nodes: z.array(ProseNodeSchema).min(1),
});

export type ProseNode = z.infer<typeof ProseNodeSchema>;
export type ProseTocAsideProps = z.infer<typeof ProseTocAsideSchema>;
