import { z } from "zod";

import { ProseNodeSchema } from "@/features/page-builder/sections/prose/variants/toc-aside/schema";
import { ImageSchema } from "@/features/page-builder/sections/shared/schema/image";

/**
 * Modèle d'un article du blogue. Un article = deux fichiers de données
 * (`<slug>.ts` FR, `<slug>.en.ts` EN) dans data/page-builder/blog-posts qui
 * partagent le même `slug` interne FR ; l'URL EN vient de seo/blog-slugs.json.
 *
 * Le modèle ne porte que le contenu. La mise en page (blocs page-builder,
 * métadonnées, JSON-LD) est dérivée par `buildBlogPostPage` : on n'écrit jamais
 * de bloc à la main dans un article.
 */

const IsoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);

// Catégories bornées (clé interne FR, libellé par langue).
export const BLOG_CATEGORIES = {
  budget: { fr: "Budget", en: "Budget" },
  entrepreneur: { fr: "Choisir un entrepreneur", en: "Hiring a contractor" },
  sinistre: { fr: "Après sinistre", en: "After a disaster" },
} as const;

export type BlogCategory = keyof typeof BLOG_CATEGORIES;

const LinkItemSchema = z.object({
  title: z.string().min(1),
  href: z.string().startsWith("/"),
  description: z.string().min(1).optional(),
});

export const BlogPostSchema = z.object({
  /** Slug interne FR, identique dans les deux langues. */
  slug: z.string().regex(/^[a-z0-9-]+$/),
  locale: z.enum(["fr", "en"]),
  category: z.enum(Object.keys(BLOG_CATEGORIES) as [BlogCategory, ...BlogCategory[]]),
  publishedAt: IsoDate,
  /** Seulement après une vraie révision du contenu. */
  updatedAt: IsoDate.optional(),
  /** Titre h1 et titre de carte. */
  title: z.string().min(10).max(80),
  /** Balise <title> si le h1 dépasse 60 caractères (sans « | Dilamco »). */
  metaTitle: z.string().max(60).optional(),
  /** Meta description, ≤ 155 caractères. */
  description: z.string().min(50).max(160),
  /** Accroche du hero et des cartes : une phrase, ≤ 25 mots. */
  excerpt: z.string().min(1),
  cover: ImageSchema,
  body: z.array(ProseNodeSchema).min(3),
  faq: z
    .object({
      heading: z.string().min(1),
      items: z.array(z.object({ q: z.string().min(1), a: z.string().min(1) })).min(2).max(6),
    })
    .optional(),
  /** Pages du site à lire ensuite (services, zones) : maillage interne. */
  related: z
    .object({
      heading: z.string().min(1),
      items: z.array(LinkItemSchema).min(2).max(4),
    })
    .optional(),
  /**
   * Sources externes citées (organismes officiels de préférence). Rendues en
   * fin d'article : un texte sourcé est plus souvent cité par Google et les
   * moteurs IA, et chaque chiffre reste vérifiable.
   */
  sources: z
    .array(z.object({ title: z.string().min(1), url: z.string().url() }))
    .max(10)
    .optional(),
  cta: z.object({
    heading: z.string().min(1),
    intro: z.string().min(1).optional(),
  }),
});

export type BlogPost = z.infer<typeof BlogPostSchema>;
