import { Check } from "lucide-react";
import { AppLink as Link } from "@/components/AppLink";

import { Heading } from "@/components/elements/heading";
import { Button, ButtonArrow } from "@/components/ui/button";
import {
  SectionHeader,
  sectionBodyClassName,
} from "@/features/page-builder/sections/shared/ui/SectionHeader";
import { cn } from "@/lib/utils";

import type { GridPriceTilesProps } from "./schema";

export function GridPriceTiles(props: GridPriceTilesProps) {
  const cols = props.tiles.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2";

  return (
    <div className="text-left">
      <SectionHeader heading={props.heading} intro={props.intro} />

      <div className={cn(sectionBodyClassName, "grid gap-4 md:grid-cols-2", cols)}>
        {props.tiles.map((tile) => (
          <article
            key={tile.title}
            className={cn(
              "flex flex-col rounded-card border p-6 sm:p-7",
              tile.featured
                ? "surface-blueprint border-primary text-primary-foreground"
                : "border-border/80 bg-card",
            )}
          >
            <Heading
              as="h3"
              variant="card"
              className={cn(tile.featured && "text-primary-foreground")}
            >
              {tile.title}
            </Heading>
            <p
              className={cn(
                "text-numeral mt-4 text-[length:var(--title-4)] leading-tight",
                tile.featured ? "text-primary-foreground" : "text-foreground",
              )}
            >
              {tile.price}
            </p>
            {tile.hint ? (
              <p
                className={cn(
                  "mt-1.5 text-sm",
                  tile.featured ? "text-primary-foreground/80" : "text-muted-foreground",
                )}
              >
                {tile.hint}
              </p>
            ) : null}
            <ul
              className={cn(
                "mt-5 space-y-2 border-t pt-5 text-sm",
                tile.featured ? "border-white/15" : "border-border/80",
              )}
            >
              {tile.includes.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check
                    className={cn(
                      "mt-1 size-3.5 shrink-0",
                      tile.featured ? "text-primary-foreground" : "text-primary",
                    )}
                    strokeWidth={3}
                  />
                  <span className={cn(tile.featured ? "text-primary-foreground/92" : "text-foreground/85")}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[62ch] text-xs leading-relaxed text-muted-foreground">
          {props.note}
        </p>
        {props.action ? (
          <Button asChild variant={props.action.variant ?? "primary"} className="shrink-0">
            <Link href={props.action.href}>
              {props.action.label}
              <ButtonArrow />
            </Link>
          </Button>
        ) : null}
      </div>
    </div>
  );
}
