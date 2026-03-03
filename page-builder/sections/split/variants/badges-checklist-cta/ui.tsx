import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { SplitBadgesChecklistCtaProps } from "./schema";
import { Heading } from "@/components/elements/heading";

export function SplitBadgesChecklistCta(props: SplitBadgesChecklistCtaProps) {
  const primaryAction = props.actions[0];
  const secondaryAction = props.actions[1];

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
      <div className="lg:col-span-7">
        <Heading as="h2" variant="h2">{props.heading}</Heading>

        <p className="mt-3 text-sm text-muted-foreground">{props.intro}</p>

        {props.badges?.length ? (
          <div className="mt-6 flex flex-wrap gap-2">
            {props.badges.map((badge) => (
              <Badge key={badge} variant="secondary">
                {badge}
              </Badge>
            ))}
          </div>
        ) : null}
      </div>

      <div className="lg:col-span-5">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">{props.cardTitle}</CardTitle>
          </CardHeader>

          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <ul className="list-inside list-disc space-y-2">
              {props.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </CardContent>

          <CardFooter className="bg-muted/50 border-t">
            <div className="w-full space-y-2">
              <Button asChild className="w-full" variant={primaryAction.variant ?? "default"}>
                <Link href={primaryAction.href}>{primaryAction.label}</Link>
              </Button>

              {secondaryAction ? (
                <Button asChild className="w-full" variant={secondaryAction.variant ?? "outline"}>
                  <Link href={secondaryAction.href}>{secondaryAction.label}</Link>
                </Button>
              ) : null}
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}