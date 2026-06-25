import { getTranslations, getLocale } from "next-intl/server";
import { AppLink as Link } from "@/components/AppLink";
import { Button, ButtonArrow } from "@/components/ui/button";
import { Section, Container, SectionHeading } from "@/components/shop/ds";
import { CatCard } from "./cat-card";
import { routes } from "@/lib/shop/routes";
import {
  findCollection,
  collectionProducts,
  collectionContent,
} from "@/lib/shop/collections";

const CAT_IMG_MURALE = "/assets/cat_wall.webp";
const CAT_IMG_BAS = "/assets/cat_base.webp";
const CAT_IMG_PANTRY = "/assets/cat_kitchen.webp";
const CAT_IMG_COIN = "/assets/cat_base_corner.webp";
const CAT_IMG_FRIDGE = "/assets/cat_above_fridge.webp";

// Cartes home pilotées par la taxonomie SEO (slugs mot-clé, comptes réels).
const HOME_CARDS: Array<{ slug: string; img: string; featured?: boolean }> = [
  { slug: "armoires-cuisine", img: CAT_IMG_MURALE, featured: true },
  { slug: "garde-manger", img: CAT_IMG_PANTRY },
  { slug: "vanites", img: CAT_IMG_BAS },
  { slug: "armoires-cuisine/coin", img: CAT_IMG_COIN },
  { slug: "armoires-cuisine/micro-ondes", img: CAT_IMG_FRIDGE },
];

export async function Categories() {
  const t = await getTranslations("shop.home");
  const locale = await getLocale();

  const cards = HOME_CARDS.map((c) => {
    const col = findCollection(c.slug);
    return {
      ...c,
      title: col ? collectionContent(col, locale).crumb : c.slug,
      count: col ? collectionProducts(col).length : 0,
    };
  });

  return (
    <Section surface="secondary">
      <Container>
        <div className="mb-16 max-[700px]:mb-8 flex flex-wrap items-end justify-between gap-10 max-[700px]:gap-[18px]">
          <SectionHeading
            eyebrow={t("categories.eyebrow")}
            title={t("categories.title")}
          />
          <Button asChild variant="ghost">
            <Link href="/boutique/armoires-cuisine">
              {t("categories.browseAll")} <ButtonArrow />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6 max-[900px]:grid-cols-2 max-[700px]:gap-3.5 min-[901px]:grid-cols-[1.4fr_1fr_1fr]">
          {cards.map((c) => (
            <CatCard
              key={c.slug}
              featured={c.featured}
              img={c.img}
              count={c.count}
              title={c.title}
              viewPrices={t("categories.viewPrices")}
              href={`/boutique/${c.slug}`}
            />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild>
            <Link href={routes.quote}>{t("categories.quoteCta")}</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
