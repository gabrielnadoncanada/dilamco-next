import { ChevronRight, DoorOpen, Package2, SlidersHorizontal, Wrench } from "lucide-react";

import { Heading } from "@/components/elements/heading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import type { GridIconCardsBulletsProps } from "./schema";

const iconMap = {
  doorOpen: DoorOpen,
  slidersHorizontal: SlidersHorizontal,
  package2: Package2,
  wrench: Wrench,
} as const;

function resolveIcon(icon: string) {
  return iconMap[icon as keyof typeof iconMap] ?? Package2;
}

export function GridIconCardsBullets(props: GridIconCardsBulletsProps) {
  const gridCols = props.columns === "3" ? "md:grid-cols-3" : "md:grid-cols-2";

  return (
    <div>
      <div className="mx-auto max-w-3xl text-center">
        <Heading as="h2" variant="h2">{props.heading}</Heading>
        {props.intro ? (
          <p className="mt-4 text-muted-foreground">{props.intro}</p>
        ) : null}
      </div>

      <div className={`mt-10 grid gap-6 ${gridCols}`}>
        {props.items.map((item) => {
          const Icon = resolveIcon(item.icon);

          return (
            <Card key={item.title} className="rounded-2xl">
              <CardHeader>
                <div className="mb-3 flex size-11 items-center justify-center rounded-xl border bg-background">
                  <Icon className="size-5" />
                </div>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <ChevronRight className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
