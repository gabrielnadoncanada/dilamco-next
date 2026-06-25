import { AppLink as Link } from "@/components/AppLink";
import { ArrowRight } from "lucide-react";

import { Heading } from "@/components/elements/heading";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import type { CtaCenteredLinksActionProps } from "./schema";

export function CtaCenteredLinksAction(props: CtaCenteredLinksActionProps) {
  const gridClassName =
    props.links.length === 1
      ? "mx-auto max-w-md grid-cols-1"
      : props.links.length === 2
        ? "mx-auto max-w-2xl md:grid-cols-2"
        : props.links.length === 3
          ? "mx-auto max-w-5xl md:grid-cols-2 xl:grid-cols-3"
          : "md:grid-cols-2 xl:grid-cols-4";

  return (
    <div className="mx-auto max-w-4xl text-center">
      {props.badge ? (
        <div className="mb-4 inline-flex items-center rounded-full border px-3 py-1 text-sm text-muted-foreground">
          {props.badge}
        </div>
      ) : null}

      <Heading as="h2" variant="h2">{props.heading}</Heading>

      {props.intro ? (
        <p className="mt-4 text-muted-foreground">{props.intro}</p>
      ) : null}

      <div className={cn("mt-8 grid gap-4", gridClassName)}>
        {props.links.map((item) => (
          <Link key={item.href} href={item.href} className="block text-left">
            <Card className="h-full rounded-2xl transition-shadow hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <Button asChild size="default" variant={props.action.variant ?? "primary"}>
          <Link href={props.action.href}>
            {props.action.label}
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
