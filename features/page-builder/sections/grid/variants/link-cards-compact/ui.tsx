import { AppLink as Link } from "@/components/AppLink";

import { Heading } from "@/components/elements/heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import type { GridLinkCardsCompactProps } from "./schema";

export function GridLinkCardsCompact(props: GridLinkCardsCompactProps) {
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
        {props.items.map((item) => (
          <Card key={item.href} className="rounded-2xl">
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              {item.description ? (
                <p className="text-sm text-muted-foreground">{item.description}</p>
              ) : null}
            </CardHeader>

            {item.badges?.length ? (
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {item.badges.map((badge) => (
                    <Badge key={badge} variant="secondary">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            ) : null}

            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href={item.href}>{item.ctaLabel ?? "Voir la page"}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
