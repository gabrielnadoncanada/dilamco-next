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
  headingClassName?: string;
};

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
  headingClassName,
}: HeroContentProps) {
  const primary = actions?.[0];
  const secondary = actions?.[1];
  const isCentered = align === "center";
  const isInverse = tone === "inverse";
  const pills = badges?.slice(0, 3) ?? [];

  return (
    <div className={cn(isCentered && "text-center")}>
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 text-xs font-semibold uppercase tracking-[0.14em]",
            isInverse ? "text-white/70" : "text-primary",
          )}
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

      <Heading
        as="h1"
        variant="h1"
        className={cn(isInverse && "text-white", headingClassName)}
      >
        {heading}
      </Heading>

      {description ? (
        <p
          className={cn(
            "mt-5 max-w-[46ch] text-base leading-relaxed sm:text-lg",
            isInverse ? "text-white/85" : "text-muted-foreground",
            isCentered && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}

      {actions?.length ? (
        <div
          className={cn(
            "mt-8 flex flex-col gap-3 sm:flex-row",
            isCentered && "items-center justify-center",
            !isCentered && "sm:items-center",
          )}
        >
          <Button
            asChild
            size="xl"
            className={cn(fillActionsOnMobile && "w-full sm:w-auto")}
            variant={primary?.variant ?? "primary"}
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
              variant={secondary.variant ?? secondaryActionVariant}
            >
              <Link href={secondary.href}>{secondary.label}</Link>
            </Button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
