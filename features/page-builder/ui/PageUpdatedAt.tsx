import type { AppLocale } from "@/i18n/routing";

const LABEL: Record<AppLocale, string> = {
  fr: "Mis à jour le",
  en: "Updated",
};

const BCP47: Record<AppLocale, string> = {
  fr: "fr-CA",
  en: "en-CA",
};

/**
 * Ligne discrète « Mis à jour le … » — signal de fraîcheur (SEO / AI Mode).
 * `date` est au format ISO court "YYYY-MM-DD" (cf. lib/seo/content-dates).
 */
export function PageUpdatedAt({
  date,
  locale,
}: {
  date: string;
  locale: AppLocale;
}) {
  const [y, m, d] = date.split("-").map(Number);
  // Construction par composants pour éviter tout décalage de fuseau horaire.
  const formatted = new Intl.DateTimeFormat(BCP47[locale], {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(y, m - 1, d));

  return (
    <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
      <p className="text-xs text-muted-foreground">
        {LABEL[locale]}{" "}
        <time dateTime={date}>{formatted}</time>
      </p>
    </div>
  );
}
