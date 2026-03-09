import { Separator } from "@/components/ui/separator";
import type { SplitTextDividerCardsProps } from "./schema";
import { Heading } from "@/components/elements/heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SplitTextDividerCards(props: SplitTextDividerCardsProps) {
  const gridCols =
    props.columns === "1" ? "sm:grid-cols-1" : props.columns === "3" ? "sm:grid-cols-3" : "sm:grid-cols-2";

  return (
    <div className="grid gap-y-8 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <Heading as="h2" variant="h2">{props.heading}</Heading>
      </div>

      <div className="lg:col-[7/13]">
        <p className="text-muted-foreground">{props.description}</p>

        <Separator className="my-6" />

        <div className={`grid gap-3 ${gridCols}`}>
          {props.cards.map((card) => (
            <Card key={card.title} >
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}