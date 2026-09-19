import { ChevronLeft, ChevronRight } from "lucide-react";
import { getLocale } from "next-intl/server";

import { AppLink as Link } from "@/components/AppLink";
import { SITE } from "@/seo/schema/site";

type Crumb = { name: string; url: string };

/**
 * Fil d'Ariane des pages intérieures, à partir des `breadcrumbs` de la page
 * (déjà bilingues). Masqué sur l'accueil et quand il n'y a qu'un niveau.
 */
export async function PageBreadcrumbs({ items }: { items?: Crumb[] }) {
  if (!items || items.length < 2) return null;
  const locale = await getLocale();

  const parent = items[items.length - 2];
  const parentHref = parent.url.replace(SITE.url, "") || "/";

  return (
    <nav
      aria-label={locale === "en" ? "Breadcrumb" : "Fil d'Ariane"}
      className="mx-auto w-full max-w-[1440px] px-[clamp(20px,1rem,56px)] pt-4 max-[700px]:px-[18px] sm:pt-5"
    >
      {/* Mobile : un seul lien de retour vers le parent, sur une ligne. */}
      <Link
        href={parentHref}
        className="inline-flex min-h-11 items-center gap-1 rounded-sm text-sm font-medium text-muted-foreground transition-ui focus-ring hover:text-foreground sm:hidden"
      >
        <ChevronLeft aria-hidden className="size-4" />
        {parent.name}
      </Link>

      <ol className="hidden flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-muted-foreground sm:flex">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          const href = item.url.replace(SITE.url, "") || "/";
          return (
            <li key={item.url} className="flex items-center gap-1.5">
              {i > 0 ? (
                <ChevronRight aria-hidden className="size-3.5 text-muted-foreground/60" />
              ) : null}
              {isLast ? (
                <span aria-current="page" className="font-medium text-foreground">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={href}
                  className="rounded-sm transition-ui focus-ring hover:text-foreground"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
