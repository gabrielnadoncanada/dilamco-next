import { notFound } from "next/navigation";
import { AppLink as Link } from "@/components/AppLink";
import { Eyebrow, Headline, Body } from "@/components/shop/ds";
import { JsonLd } from "@/seo/JsonLd";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  itemListJsonLd,
} from "@/seo/schema/builders";
import { SITE } from "@/seo/schema/site";
import { localizePath } from "@/seo/i18n-path";
import { routes } from "@/lib/shop/routes";
import { slugForCode } from "@/lib/shop/models";
import { localizeProductLabel } from "@/lib/shop/catalog-i18n";
import {
  ancestorsOf,
  childrenOf,
  collectionContent,
  collectionProducts,
  findCollection,
} from "@/lib/shop/collections";
import { CollectionsShell } from "../collections/_components/collections-shell";
import { ProductGrid } from "../collections/_components/product-grid";
import { SidebarFilters } from "../collections/_components/sidebar-filters";
import type { CatalogScope } from "../collections/_components/filtering";
import { CollectionNav } from "./collection-nav";

type ShopLocale = "fr" | "en";

/**
 * Page d'une COLLECTION : en-tête mot-clé (H1 + intro), fil d'Ariane, chips des
 * sous-collections, schema (ItemList + BreadcrumbList + FAQPage), puis la grille
 * de produits (règle + manuels épinglés). Pilotée par lib/shop/collections.ts —
 * remplace l'ancienne TaxonLanding. C'est la page qui RANKE.
 */
export async function CollectionLanding({
  slug,
  locale,
}: {
  slug: string;
  locale: ShopLocale;
}) {
  const c = findCollection(slug);
  if (!c) notFound();

  const content = collectionContent(c, locale);
  const products = collectionProducts(c);
  const children = childrenOf(c.slug);
  const chain = ancestorsOf(c);

  const scope: CatalogScope = {
    cats: c.rule?.cats,
    couleur: c.rule?.couleur,
    width: c.rule?.width,
    codes: c.products,
  };

  const url = (path: string) => `${SITE.url}${localizePath(path, locale)}`;
  const pageUrl = url(`/boutique/${c.slug}`);
  const rootLabel = locale === "en" ? "Shop" : "Boutique";

  // Fil d'Ariane : Boutique > …ancêtres… > collection courante.
  const crumbs = [
    { name: rootLabel, path: routes.home },
    ...chain.map((n) => ({
      name: collectionContent(n, locale).crumb,
      path: `/boutique/${n.slug}`,
    })),
  ];

  const faq = content.faq ?? [];

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(
          crumbs.map((cr) => ({ name: cr.name, url: url(cr.path) })),
        )}
      />
      <JsonLd
        data={itemListJsonLd({
          name: content.h1,
          url: pageUrl,
          items: products.slice(0, 50).map((m) => ({
            url: url(routes.product(slugForCode(m.code, locale))),
            name: localizeProductLabel(m.name, locale),
          })),
        })}
      />
      {faq.length > 0 && <JsonLd data={faqJsonLd(faq)} />}

      <CollectionsShell
        scope={scope}
        activeSlug={c.slug}
        filters={
          <SidebarFilters
            scope={scope}
            activeSlug={c.slug}
            categories={<CollectionNav activeSlug={c.slug} />}
          />
        }
      >
        {/* Fil d'Ariane */}
        <nav className="font-mono text-[11px] tracking-[0.04em] text-muted-foreground [&_a:hover]:text-primary">
          {crumbs.map((cr, i) => (
            <span key={cr.path}>
              {i > 0 ? " / " : ""}
              {i === crumbs.length - 1 ? (
                <span className="text-foreground">{cr.name}</span>
              ) : (
                <Link href={cr.path}>{cr.name}</Link>
              )}
            </span>
          ))}
        </nav>

        {/* En-tête mot-clé (H1 + intro) */}
        <header className="mt-4 max-w-[760px] border-b border-border pb-8">
          {content.eyebrow && <Eyebrow>{content.eyebrow}</Eyebrow>}
          <Headline level="headline" as="h1" className="mt-2">
            {content.h1}
          </Headline>
          {content.intro && (
            <Body size="lead" tone="soft" className="mt-4 leading-[1.6]">
              {content.intro}
            </Body>
          )}
          {children.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {children.map((child) => (
                <Link
                  key={child.slug}
                  href={`/boutique/${child.slug}`}
                  className="border border-border-strong bg-card px-3.5 py-1.5 font-mono text-[11px] tracking-[0.04em] text-foreground no-underline transition-colors hover:border-foreground"
                >
                  {collectionContent(child, locale).crumb}
                </Link>
              ))}
            </div>
          )}
        </header>

        <div className="mt-6">
          <ProductGrid scope={scope} />
        </div>

        {/* Index des modèles rendu CÔTÉ SERVEUR : la grille ci-dessus est un
            composant client (nuqs/useSearchParams), donc ses liens produits
            sont absents du HTML brut. Cette liste garantit à Googlebot des
            <a> crawlables vers chaque fiche de la collection (découverte +
            budget de crawl), en plus d'un index texte utile. */}
        {products.length > 0 && (
          <nav
            aria-label={
              locale === "en"
                ? "All models in this collection"
                : "Tous les modèles de cette collection"
            }
            className="mt-16 max-w-[760px] border-t border-border pt-10"
          >
            <Headline level="title" as="h2" className="text-[22px]">
              {locale === "en" ? "All models" : "Tous les modèles"}
            </Headline>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 max-[700px]:grid-cols-1">
              {products.map((m) => (
                <li key={m.code}>
                  <Link
                    href={routes.product(slugForCode(m.code, locale))}
                    className="text-[14px] leading-[1.5] text-foreground underline-offset-2 hover:underline"
                  >
                    {localizeProductLabel(m.name, locale)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* FAQ niveau-collection : profondeur de contenu + citabilité IA. */}
        {faq.length > 0 && (
          <section className="mt-16 max-w-[760px] border-t border-border pt-10">
            <Headline level="title" as="h2" className="text-[22px]">
              {locale === "en" ? "Frequently asked questions" : "Questions fréquentes"}
            </Headline>
            <div className="mt-4">
              {faq.map((item, i) => (
                <details key={i} className="group/f border-b border-border py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-foreground [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <span className="font-mono text-muted-foreground transition-transform group-open/f:rotate-45">
                      +
                    </span>
                  </summary>
                  <Body
                    size="default"
                    tone="soft"
                    className="mt-3 leading-[1.65] max-w-[680px]"
                  >
                    {item.a}
                  </Body>
                </details>
              ))}
            </div>
          </section>
        )}
      </CollectionsShell>
    </>
  );
}
