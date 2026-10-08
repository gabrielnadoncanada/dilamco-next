import type { PageTemplateData } from "@/features/page-builder";
import type { Block } from "@/features/page-builder/model/block-types";
import { stripInline } from "@/features/page-builder/sections/prose/shared/inline-text";
import type { ProseNode } from "@/features/page-builder/sections/prose/variants/toc-aside/schema";
import { blogPostingJsonLd } from "@/seo/schema/builders";
import { localizePath } from "@/seo/i18n-path";
import { SITE } from "@/seo/schema/site";

import { BLOG_CATEGORIES, type BlogPost } from "./model";

const LABELS = {
  fr: {
    home: "Accueil",
    blog: "Blogue",
    toc: "Dans cet article",
    published: "Publié le",
    updated: "Mis à jour le",
    readingTime: (min: number) => `${min} min de lecture`,
    by: "Par",
    quote: "Soumission gratuite",
    call: "Nous appeler",
    sources: "Sources",
  },
  en: {
    home: "Home",
    blog: "Blog",
    toc: "In this article",
    published: "Published",
    updated: "Updated",
    readingTime: (min: number) => `${min} min read`,
    by: "By",
    quote: "Free estimate",
    call: "Call us",
    sources: "Sources",
  },
} as const;

const DATE_LOCALE = { fr: "fr-CA", en: "en-CA" } as const;

const lowerFirst = (text: string) => text.charAt(0).toLowerCase() + text.slice(1);

/** « 8 octobre 2026 » / « October 8, 2026 » (UTC : la date ISO n'a pas d'heure). */
export function formatPostDate(iso: string, locale: BlogPost["locale"], month: "long" | "short" = "long") {
  return new Intl.DateTimeFormat(DATE_LOCALE[locale], {
    day: "numeric",
    month,
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}

function nodeText(node: ProseNode): string[] {
  switch (node.type) {
    case "h2":
    case "h3":
    case "p":
      return [node.text];
    case "ul":
    case "ol":
      return node.items;
    case "callout":
      return [node.title ?? "", node.text ?? "", ...(node.items ?? [])];
    case "table":
      return [...node.head, ...node.rows.flat()];
    case "image":
      return [node.caption ?? ""];
  }
}

export function countWords(post: BlogPost): number {
  return post.body
    .flatMap(nodeText)
    .map(stripInline)
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
}

/** 200 mots/min : lecture d'un texte technique sur mobile. */
export function readingMinutes(post: BlogPost): number {
  return Math.max(1, Math.round(countWords(post) / 200));
}

export function blogPostPath(slug: string) {
  return `/blogue/${slug}`;
}

/**
 * Compose la page d'un article à partir de son contenu : hero de lecture,
 * corps avec table des matières, FAQ (→ FAQPage), pages liées, bande CTA.
 * Métadonnées (Open Graph `article`) et JSON-LD BlogPosting en découlent.
 */
export function buildBlogPostPage(post: BlogPost): PageTemplateData {
  const t = LABELS[post.locale];
  const path = blogPostPath(post.slug);
  const url = `${SITE.url}${localizePath(path, post.locale)}`;
  const category = BLOG_CATEGORIES[post.category][post.locale];
  const lastDate = post.updatedAt ?? post.publishedAt;

  const meta = [
    { label: `${t.by} ${SITE.principal.shortName}, ${lowerFirst(SITE.principal.jobTitle[post.locale])}` },
    {
      label: `${post.updatedAt ? t.updated : t.published} ${formatPostDate(lastDate, post.locale)}`,
      dateTime: lastDate,
    },
    { label: t.readingTime(readingMinutes(post)) },
  ];

  const blocks: Block[] = [
    {
      id: "hero",
      content: {
        type: "hero",
        variant: "centered-meta",
        props: {
          eyebrow: category,
          heading: post.title,
          description: post.excerpt,
          meta,
          image: post.cover,
        },
      },
    },
    {
      id: "article",
      frame: { surface: "default" },
      content: {
        type: "prose",
        variant: "toc-aside",
        props: {
          tocLabel: t.toc,
          nodes: post.sources?.length
            ? [
                ...post.body,
                { type: "h2", text: t.sources, id: "sources" },
                {
                  type: "ul",
                  items: post.sources.map((s) => `[${s.title}](${s.url})`),
                },
              ]
            : post.body,
        },
      },
    },
  ];

  if (post.faq) {
    blocks.push({
      id: "faq",
      content: { type: "faq", variant: "accordion", props: post.faq },
    });
  }

  if (post.related) {
    blocks.push({
      id: "related",
      content: {
        type: "grid",
        variant: "link-cards-compact",
        props: { heading: post.related.heading, items: post.related.items },
      },
    });
  }

  blocks.push({
    id: "cta",
    content: {
      type: "cta",
      variant: "band-split-actions",
      props: {
        heading: post.cta.heading,
        intro: post.cta.intro,
        actions: [
          { label: t.quote, href: "/contact", variant: "primary" },
          {
            label: t.call,
            href: `tel:${SITE.telephone.replace(/[^+\d]/g, "")}`,
            variant: "ghost",
          },
        ],
      },
    },
  });

  return {
    template: "default",
    metadata: {
      title: post.metaTitle ?? post.title,
      description: post.description,
      path,
      ogAlt: post.cover.alt,
      ogImage: { url: post.cover.src, alt: post.cover.alt },
      article: { publishedTime: post.publishedAt, modifiedTime: post.updatedAt },
    },
    // Chemins internes FR, comme partout : PageBreadcrumbs les localise via AppLink.
    breadcrumbs: [
      { name: t.home, url: `${SITE.url}/` },
      { name: t.blog, url: `${SITE.url}/blogue` },
      { name: post.title, url: `${SITE.url}${path}` },
    ],
    extraJsonLd: [
      blogPostingJsonLd({
        url,
        headline: post.title,
        description: post.description,
        image: post.cover.src,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        section: category,
        wordCount: countWords(post),
        locale: post.locale,
      }),
    ],
    blocks,
  };
}

/** Carte d'un article pour la grille du hub /blogue. */
export function toBlogCard(post: BlogPost) {
  return {
    title: post.title,
    description: post.excerpt,
    href: blogPostPath(post.slug),
    image: post.cover,
    meta: [
      BLOG_CATEGORIES[post.category][post.locale],
      formatPostDate(post.publishedAt, post.locale, "short"),
    ],
  };
}
