import { AppLink as Link } from "@/components/AppLink";

import { Heading } from "@/components/elements/heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type HeroAction = {
  label: string;
  href: string;
  variant?:
    | "default"
    | "secondary"
    | "outline"
    | "destructive"
    | "ghost"
    | "link";
};

type HeroContentProps = {
  heading: string;
  description?: string;
  badges?: string[];
  actions?: HeroAction[];
  align?: "left" | "center";
  tone?: "default" | "inverse";
  badgeStyle?: "secondary" | "outline" | "inverse";
  secondaryActionVariant?: HeroAction["variant"];
  fillActionsOnMobile?: boolean;
};

export function HeroContent({
  heading,
  description,
  badges,
  actions,
  align = "left",
  tone = "default",
  badgeStyle = tone === "inverse" ? "inverse" : "secondary",
  secondaryActionVariant = "outline",
  fillActionsOnMobile = false,
}: HeroContentProps) {
  const primary = actions?.[0];
  const secondary = actions?.[1];
  const isCentered = align === "center";
  const isInverse = tone === "inverse";

  return (
    <div className={cn(isCentered && "text-center")}>
      {badges?.length ? (
        <div
          className={cn(
            "flex flex-wrap gap-2",
            isCentered && "justify-center"
          )}
        >
          {badges.map((badge) => (
            <Badge
              key={badge}
              variant={badgeStyle === "outline" ? "outline" : "secondary"}
              className={cn(
                badgeStyle === "inverse" &&
                  "bg-white/10 text-white hover:bg-white/10"
              )}
            >
              {badge}
            </Badge>
          ))}
        </div>
      ) : null}

      <Heading
        as="h1"
        variant="h1"
        className={cn("mt-6", isInverse && "text-white", isCentered && "text-balance")}
      >
        {heading}
      </Heading>

      {description ? (
        <p
          className={cn(
            "mt-4",
            isInverse ? "text-base text-white/85 sm:text-lg" : "text-muted-foreground",
            isCentered && "text-lg"
          )}
        >
          {description}
        </p>
      ) : null}

      {actions?.length ? (
        <div
          className={cn(
            "mt-6 flex flex-col gap-3 sm:flex-row",
            isCentered && "items-center justify-center",
            !isCentered && "sm:items-center"
          )}
        >
          <Button
            asChild
            size="lg"
            className={cn(fillActionsOnMobile && "w-full sm:w-auto")}
            variant={primary?.variant ?? "default"}
          >
            <Link href={primary?.href ?? "#"}>{primary?.label ?? ""}</Link>
          </Button>

          {secondary ? (
            <Button
              asChild
              size="lg"
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
