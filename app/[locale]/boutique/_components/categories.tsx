import { getTranslations } from "next-intl/server";
import { AppLink as Link } from "@/components/AppLink";
import { Button, ButtonArrow } from "@/components/shop/ui/button";
import {
  Section,
  Container,
  SectionHeading,
} from "@/components/shop/ds";
import { CatCard } from "./cat-card";
import { collectionsFilter, routes } from "@/lib/shop/routes";

const CAT_IMG_MURALE = "/assets/cat_wall.webp";
const CAT_IMG_BAS = "/assets/cat_base.webp";
const CAT_IMG_PANTRY = "/assets/cat_kitchen.webp";
const CAT_IMG_COIN = "/assets/cat_base_corner.webp";
const CAT_IMG_FRIDGE = "/assets/cat_above_fridge.webp";

export async function Categories() {
  const t = await getTranslations("shop.home");
  return (
    <Section surface="secondary">
      <Container>
        <div className="mb-16 max-[700px]:mb-8 flex flex-wrap items-end justify-between gap-10 max-[700px]:gap-[18px]">
          <SectionHeading
            eyebrow={t("categories.eyebrow")}
            title={t("categories.title")}
          />
          <Button asChild variant="ghost">
            <Link href={routes.collections}>
              {t("categories.browseAll")} <ButtonArrow />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6 max-[900px]:grid-cols-2 max-[700px]:gap-3.5 min-[901px]:grid-cols-[1.4fr_1fr_1fr]">
          <CatCard
            featured
            img={CAT_IMG_MURALE}
            count={210}
            title={t("categories.items.wall")}
            viewPrices={t("categories.viewPrices")}
            href={collectionsFilter.family("Armoire murale")}
          />
          <CatCard
            img={CAT_IMG_BAS}
            count={70}
            title={t("categories.items.base")}
            viewPrices={t("categories.viewPrices")}
            href={collectionsFilter.family("Armoire de bas")}
          />
          <CatCard
            img={CAT_IMG_PANTRY}
            count={138}
            title={t("categories.items.pantry")}
            viewPrices={t("categories.viewPrices")}
            href={collectionsFilter.family("Garde-manger")}
          />
          <CatCard
            img={CAT_IMG_COIN}
            count={277}
            title={t("categories.items.corner")}
            viewPrices={t("categories.viewPrices")}
            href={collectionsFilter.corner}
          />
          <CatCard
            img={CAT_IMG_FRIDGE}
            count={36}
            title={t("categories.items.aboveFridge")}
            viewPrices={t("categories.viewPrices")}
            href={collectionsFilter.family("Armoire au-dessus du réfrigérateur")}
          />
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
