import { getLocale } from "next-intl/server";
import { Container } from "./elements/container";
import { SITE } from "@/seo/schema/site";

const COPY = {
  fr: {
    heading: "Ce que disent nos clients",
    subhead: (count: number, rating: number) =>
      `Note de ${rating.toLocaleString("fr-CA")} sur 5 — ${count} avis Google`,
    cta: "Voir tous les avis sur Google",
  },
  en: {
    heading: "What our clients say",
    subhead: (count: number, rating: number) =>
      `Rated ${rating.toLocaleString("en-CA")} out of 5 — ${count} Google reviews`,
    cta: "See all reviews on Google",
  },
} as const;

function Stars({ rating }: { rating: number }) {
  // Étoiles monochromes (couleur foreground) — pas d'or/accent.
  return (
    <span
      className="inline-flex items-center gap-0.5 text-foreground"
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
    <section
      aria-label={t.heading}
      className="border-t bg-muted/20"
    >
      <Container>
        <div className="py-12 md:py-16">
          <div className="flex flex-col items-start gap-2">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              {t.heading}
            </h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Stars rating={reviews.ratingValue} />
              <span>{t.subhead(reviews.reviewCount, reviews.ratingValue)}</span>
            </div>
          </div>

          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {reviews.items.map((r) => (
              <li
                key={r.author}
                className="rounded-2xl border bg-background p-6 shadow-sm"
              >
                <Stars rating={r.rating} />
                <blockquote className="mt-3 text-base leading-relaxed text-foreground">
                  « {r.body} »
                </blockquote>
                <figcaption className="mt-4 text-sm font-medium text-muted-foreground">
                  — {r.author}
                </figcaption>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-semibold text-foreground underline underline-offset-4 transition-colors hover:text-primary"
            >
              {t.cta}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
