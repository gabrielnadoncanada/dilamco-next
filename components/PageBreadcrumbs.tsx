import { ChevronRight } from "lucide-react";
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

  return (
    <nav
      aria-label={locale === "en" ? "Breadcrumb" : "Fil d'Ariane"}
      className="mx-auto w-full max-w-[1440px] px-[clamp(20px,1rem,56px)] pt-5 max-[700px]:px-[18px]"
    >
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-muted-foreground">
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
