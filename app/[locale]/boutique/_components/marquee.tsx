import { getTranslations } from "next-intl/server";

export async function Marquee() {
  const t = await getTranslations("shop.home");
  const items = [t("marquee.0"), t("marquee.1"), t("marquee.2")];
  return (
    <div className="border-b border-border bg-background px-[clamp(20px,1rem,56px)] py-7 flex justify-between items-center gap-10 flex-wrap text-xs tracking-[0.08em] text-muted-foreground uppercase">
      {items.map((label) => (
        <div key={label} className="flex items-center gap-2.5">
          <span className="w-1 h-1 rounded-full bg-primary"></span>
          {label}
        </div>
      ))}
    </div>
  );
}
