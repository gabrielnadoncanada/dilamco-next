import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { getTranslations } from "next-intl/server";

export async function HeaderBanner() {
  const t = await getTranslations("shop.chrome");
  return (
    // Bandeau unifié : téléphone (gauche) · mention non-cliquable (centre) ·
    // sélecteur de langue (droite).
    <div className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-[clamp(20px,4vw,56px)] py-1.5 max-[700px]:px-[18px] md:py-2">
        <a
          href="tel:+15142225300"
          className="shrink-0 font-mono text-[11px] tracking-[0.06em] hover:underline max-[380px]:text-[10px]"
        >
          514-222-5300
        </a>
        <span className="text-center text-[10px] font-medium uppercase tracking-[0.12em] md:text-[11px] max-[700px]:hidden">
          {t("announcement")}
        </span>
        <LocaleSwitcher className="shrink-0 text-[11px] [&_*]:text-primary-foreground" />
      </div>
    </div>
  );
}
