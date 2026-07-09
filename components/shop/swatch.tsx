import { swatchSlug } from "@/lib/shop/products";
import { cn } from "@/lib/shop/utils";

interface Props {
  color: string;
  size?: "sm" | "lg";
  title?: string;
}

export function Swatch({ color, size = "sm", title }: Props) {
  const colorClass = {
    blanc: "bg-[#f3efe6]",
    chene: "bg-[#c9b48a]",
    bleu: "bg-[#2a3d52]",
    // Navi = échantillon RÉEL du panneau (crop de navi.png), pas un aplat.
    navi: "bg-[url('/assets/products/swatch-navi.webp')] bg-cover bg-center",
  }[swatchSlug(color)];

  return (
    <span
      className={cn(
        "inline-block shrink-0 rounded-full border border-border-strong",
        size === "lg" ? "size-[22px]" : "size-3.5",
        colorClass,
      )}
      title={title}
    />
  );
}
