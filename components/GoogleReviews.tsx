import { ArrowUpRight } from "lucide-react";
import { getLocale } from "next-intl/server";

import { Container } from "./elements/container";
import { Heading } from "./elements/heading";
import { Reveal } from "./animations/Reveal";
import { SITE } from "@/seo/schema/site";

const COPY = {
  fr: {
    heading: "Ce que disent nos clients",
    subhead: (count: number, rating: number) =>
      `${rating.toLocaleString("fr-CA", { minimumFractionDigits: 1 })} sur 5 · ${count} avis Google`,
    cta: "Voir les avis sur Google",
  },
  en: {
    heading: "What our clients say",
    subhead: (count: number, rating: number) =>
      `${rating.toLocaleString("en-CA", { minimumFractionDigits: 1 })} out of 5 · ${count} Google reviews`,
    cta: "See the reviews on Google",
  },
} as const;

function Stars({ rating, className }: { rating: number; className?: string }) {
  // Étoiles monochromes (couleur primaire) — jamais de doré.
  return (
    <span
      className={`inline-flex items-center gap-0.5 text-primary ${className ?? ""}`}
      aria-hidden="true"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill={i < Math.round(rating) ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.77l-5.2 2.73.99-5.79-4.21-4.1 5.82-.85z" />
        </svg>
      ))}
    </span>
  );
}

export default async function GoogleReviews() {
  const locale = (await getLocale()) === "en" ? "en" : "fr";
  const t = COPY[locale];
  const { reviews, googleReviewsUrl } = SITE;

  return (
    <section aria-label={t.heading} className="bg-background">
      <Container>
        <Reveal className="py-[var(--section-py)]">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4">
              <p className="font-display text-[clamp(3rem,6vw,5rem)] font-semibold leading-none tracking-[-0.04em] text-foreground">
                {reviews.ratingValue.toLocaleString(locale === "fr" ? "fr-CA" : "en-CA", {
                  minimumFractionDigits: 1,
                })}
              </p>
              <Stars rating={reviews.ratingValue} className="mt-2" />
              <Heading as="h2" variant="h3" className="mt-4">
                {t.heading}
              </Heading>
              <p className="mt-2 text-sm text-muted-foreground">
                {t.subhead(reviews.reviewCount, reviews.ratingValue)}
              </p>
              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
              >
                {t.cta}
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
              {reviews.items.map((r) => (
                <li
                  key={r.author}
                  className="flex flex-col rounded-2xl bg-primary-soft/70 p-6"
                >
                  <Stars rating={r.rating} />
                  <blockquote className="mt-4 font-display text-lg font-medium leading-snug tracking-[-0.01em] text-foreground">
                    « {r.body} »
                  </blockquote>
                  <figcaption className="mt-auto pt-5 text-sm font-semibold text-muted-foreground">
                    {r.author}
                  </figcaption>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
