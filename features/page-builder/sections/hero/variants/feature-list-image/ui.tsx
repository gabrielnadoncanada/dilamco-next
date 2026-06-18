import {
  ArrowRight,
  Blend,
  ChartNoAxesColumn,
  CircleDot,
  Diamond,
} from "lucide-react";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AppLink } from "@/components/AppLink";
import { cn } from "@/lib/utils";

import type { HeroFeatureListImageProps } from "./schema";

const iconMap = {
  "circle-dot": CircleDot,
  blend: Blend,
  diamond: Diamond,
  "chart-no-axes-column": ChartNoAxesColumn,
} as const;

function resolveIcon(icon: HeroFeatureListImageProps["features"][number]["icon"]) {
  return iconMap[icon] ?? CircleDot;
}

function DashedLine({
  orientation = "horizontal",
  className,
}: {
  orientation?: "horizontal" | "vertical";
  className?: string;
}) {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      className={cn(
        "relative text-border/80",
        isHorizontal ? "h-px w-full" : "h-full w-px",
        className,
      )}
    >
      <div
        className={cn(
          isHorizontal
            ? [
                "h-px w-full",
                "bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)]",
                "[mask-image:linear-gradient(90deg,transparent,black_20%,black_80%,transparent)]",
              ]
            : [
                "h-full w-px",
                "bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)]",
                "[mask-image:linear-gradient(180deg,transparent,black_20%,black_80%,transparent)]",
              ],
        )}
      />
    </div>
  );
}

export function HeroFeatureListImage(props: HeroFeatureListImageProps) {
  return (
    <div className="space-y-12 lg:space-y-16">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
        <div>
          <h1 className="max-w-4xl text-3xl tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {props.heading}
          </h1>

          <p className="mt-5 max-w-3xl text-lg text-muted-foreground md:text-2xl">
            {props.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {props.actions.map((action, index) => (
              <Button
                key={`${action.href}-${action.label}`}
                asChild
                variant={action.variant ?? (index === 0 ? "default" : "outline")}
              >
                <AppLink href={action.href}>
                  {action.label}
                  {index === 1 ? <ArrowRight className="size-4 stroke-2.5" /> : null}
                </AppLink>
              </Button>
            ))}
          </div>
        </div>

        <div className="relative flex flex-col justify-center gap-5 lg:pl-8">
          <DashedLine
            orientation="vertical"
            className="absolute bottom-0 left-0 top-0 hidden lg:block"
          />
          <DashedLine orientation="horizontal" className="absolute left-0 top-0 lg:hidden" />

          {props.features.map((feature) => {
            const Icon = resolveIcon(feature.icon);

            return (
              <div key={feature.title} className="flex gap-3 lg:gap-5">
                <Icon className="mt-1 size-4 shrink-0 text-primary lg:size-5" />
                <div>
                  <h2 className="font-semibold text-foreground">{feature.title}</h2>
                  <p className="max-w-xl text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl border bg-muted/20 shadow-sm">
        <div className="absolute inset-x-0 top-0 h-40 bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,currentColor_10px,currentColor_11px),repeating-linear-gradient(180deg,transparent,transparent_10px,currentColor_10px,currentColor_11px)] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)] text-primary/15" />
        <div className="relative aspect-[16/10] w-full">
          <Image
            src={props.image.src}
            alt={props.image.alt}
            fill
            priority
            fetchPriority="high"
            className="object-cover object-left-top"
            sizes="(min-width: 1024px) 1200px, 100vw"
          />
        </div>
      </div>
    </div>
  );
}
