import Link from "next/link";

import { Heading } from "@/components/elements/heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import type { HeroCenteredBadgeActionsProps } from "./schema";

export function HeroCenteredBadgeActions(props: HeroCenteredBadgeActionsProps) {
  const primary = props.actions[0];
  const secondary = props.actions[1];

  return (
    <div className="mx-auto max-w-3xl">
      {props.badge ? (
        <Badge variant="outline" className="mb-4">
          {props.badge}
        </Badge>
      ) : null}

      <Heading as="h1" variant="h1" className="text-balance">
        {props.heading}
      </Heading>

      <p className="mt-6 text-lg leading-8 text-muted-foreground">
        {props.description}
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button asChild size="lg" variant={primary.variant ?? "default"}>
          <Link href={primary.href}>{primary.label}</Link>
        </Button>

        {secondary ? (
          <Button asChild size="lg" variant={secondary.variant ?? "outline"}>
            <Link href={secondary.href}>{secondary.label}</Link>
          </Button>
        ) : null}
      </div>
    </div>
  );
}
