import type { PageTemplateData } from "@/features/page-builder";
import { BlogPostSchema, type BlogPost } from "@/features/blog/model";
import { buildBlogPostPage, toBlogCard } from "@/features/blog/build-post-page";
import type { AppLocale } from "@/i18n/routing";
import { BLOG_SLUG_EN } from "@/seo/i18n-path";
import { post as coutRenovationCuisine } from "./cout-renovation-cuisine";
import { post as coutRenovationCuisineEn } from "./cout-renovation-cuisine.en";
import { post as verifierLicenceRbq } from "./verifier-licence-rbq-entrepreneur";
import { post as verifierLicenceRbqEn } from "./verifier-licence-rbq-entrepreneur.en";
import { post as sousSolApresDegatEau } from "./sous-sol-apres-degat-eau";
import { post as sousSolApresDegatEauEn } from "./sous-sol-apres-degat-eau.en";

// Ajouter un article : 1) une ligne dans seo/blog-slugs.json (slug FR → EN),
// 2) <slug>.ts + <slug>.en.ts ici, 3) la paire ci-dessous. Routing, liens,
// sitemaps et hub /blogue suivent seuls. Les garde-fous plus bas cassent le
// build si l'une des trois étapes manque.
const PAIRS: Array<{ fr: BlogPost; en: BlogPost }> = [
  { fr: coutRenovationCuisine, en: coutRenovationCuisineEn },
  { fr: verifierLicenceRbq, en: verifierLicenceRbqEn },
  { fr: sousSolApresDegatEau, en: sousSolApresDegatEauEn },
];

for (const { fr, en } of PAIRS) {
  BlogPostSchema.parse(fr);
  BlogPostSchema.parse(en);
  if (fr.locale !== "fr" || en.locale !== "en") {
    throw new Error(`blog-posts: "${fr.slug}" — locales inversées ou erronées`);
  }
  if (fr.slug !== en.slug) {
    throw new Error(`blog-posts: slug FR "${fr.slug}" ≠ slug EN "${en.slug}" (le slug interne est le même)`);
  }
  if (fr.category !== en.category || fr.publishedAt !== en.publishedAt) {
    throw new Error(`blog-posts: "${fr.slug}" — catégorie ou date différente entre FR et EN`);
  }
  if (!(fr.slug in BLOG_SLUG_EN)) {
    throw new Error(`blog-posts: "${fr.slug}" absent de seo/blog-slugs.json`);
  }
}
for (const slug of Object.keys(BLOG_SLUG_EN)) {
  if (!PAIRS.some((p) => p.fr.slug === slug)) {
    throw new Error(`seo/blog-slugs.json: "${slug}" sans article dans data/page-builder/blog-posts`);
  }
}

// Plus récent d'abord.
const SORTED = [...PAIRS].sort((a, b) => b.fr.publishedAt.localeCompare(a.fr.publishedAt));
const BY_SLUG = new Map(SORTED.map((p) => [p.fr.slug, p]));

export const PUBLIC_BLOG_POST_SLUGS = SORTED.map((p) => p.fr.slug);

export function getBlogPost(slug: string, locale: AppLocale = "fr"): BlogPost | null {
  return BY_SLUG.get(slug)?.[locale] ?? null;
}

export function getBlogPostPageBySlug(
  slug: string,
  locale: AppLocale = "fr",
): PageTemplateData | null {
  const post = getBlogPost(slug, locale);
  return post ? buildBlogPostPage(post) : null;
}

/** Cartes du hub /blogue, plus récentes d'abord. */
export function getBlogCards(locale: AppLocale) {
  return SORTED.map((p) => toBlogCard(p[locale]));
}
