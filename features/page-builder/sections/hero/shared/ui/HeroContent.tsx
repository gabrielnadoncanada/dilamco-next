import { AppLink as Link } from "@/components/AppLink";

import { Heading } from "@/components/elements/heading";
import { Badge } from "@/components/ui/badge";
import { Button, ButtonArrow } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type HeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "ghost" | "paper" | "ghost-light";
};

type HeroContentProps = {
  heading: string;
  description?: string;
  eyebrow?: string;
  badges?: string[];
  actions?: HeroAction[];
  align?: "left" | "center";
  tone?: "default" | "inverse";
  badgeStyle?: "secondary" | "outline" | "inverse";
  secondaryActionVariant?: HeroAction["variant"];
  fillActionsOnMobile?: boolean;
};

/**
 * Contenu textuel d'un hero : kicker, pastilles (≤ 3), titre h1 (échelle
 * `--title-2`), phrase d'accroche, deux actions au plus. Rythme fixe :
 * kicker 16px · pastilles 20px · titre · accroche 20px · actions 32px.
 */
export function HeroContent({
  heading,
  description,
  eyebrow,
  badges,
  actions,
  align = "left",
  tone = "default",
  badgeStyle = tone === "inverse" ? "inverse" : "secondary",
  secondaryActionVariant = "ghost",
  fillActionsOnMobile = false,
}: HeroContentProps) {
  const primary = actions?.[0];
  const secondary = actions?.[1];
  const isCentered = align === "center";
  const isInverse = tone === "inverse";
  const pills = badges?.slice(0, 3) ?? [];

  // Sur un panneau sombre (vert, encre), les variantes claires sont imposées :
  // un bouton vert ou une bordure encre y seraient invisibles, quel que soit
  // le `variant` écrit dans les données.
  const resolveVariant = (
    variant: HeroAction["variant"] | undefined,
    fallback: HeroAction["variant"],
  ): HeroAction["variant"] => {
    const v = variant ?? fallback;
    if (!isInverse) return v;
    if (v === "primary") return "paper";
    if (v === "ghost") return "ghost-light";
    return v;
  };

  return (
    <div className={cn(isCentered && "text-center")}>
      {eyebrow ? (
        <p
          className={`text-label mb-4 hidden sm:block ${isInverse ? "text-white/70" : "text-primary"}`}
        >
          {eyebrow}
        </p>
      ) : null}

      {pills.length ? (
        <div
          className={cn("mb-5 flex flex-wrap gap-2", isCentered && "justify-center")}
        >
          {pills.map((badge) => (
            <Badge
              key={badge}
              variant={
                badgeStyle === "outline"
                  ? "outline"
                  : badgeStyle === "inverse"
                    ? "inverse"
                    : "secondary"
              }
            >
              {badge}
            </Badge>
          ))}
        </div>
      ) : null}

      <Heading as="h1" variant="h1" className={cn(isInverse && "text-white")}>
        {heading}
      </Heading>

      {description ? (
        <p
          className={`text-lead mt-5 ${isInverse ? "text-white/85" : ""} ${isCentered ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      ) : null}

      {actions?.length ? (
        <div
          className={cn(
            "mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap",
            isCentered && "items-center justify-center",
            !isCentered && "sm:items-center",
          )}
        >
          <Button
            asChild
            size="xl"
            className={cn(fillActionsOnMobile && "w-full sm:w-auto")}
            variant={resolveVariant(primary?.variant, "primary")}
          >
            <Link href={primary?.href ?? "#"}>
              {primary?.label ?? ""}
              <ButtonArrow />
            </Link>
          </Button>

          {secondary ? (
            <Button
              asChild
              size="xl"
              className={cn(fillActionsOnMobile && "w-full sm:w-auto")}
              variant={resolveVariant(secondary.variant, secondaryActionVariant)}
            >
              <Link href={secondary.href}>{secondary.label}</Link>
            </Button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
