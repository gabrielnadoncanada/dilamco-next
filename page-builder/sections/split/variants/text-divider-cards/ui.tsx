import { Separator } from "@/components/ui/separator";
import type { SplitTextDividerCardsProps } from "./schema";
import { Heading } from "@/components/elements/heading";

export function SplitTextDividerCards(props: SplitTextDividerCardsProps) {
  const gridCols =
    props.columns === "3" ? "sm:grid-cols-3" : "sm:grid-cols-2";

  return (
    <div className="grid gap-8 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <Heading as="h2" variant="h2">{props.heading}</Heading>
      </div>

      <div className="lg:col-span-7">
        <p className="text-muted-foreground">{props.description}</p>

        <Separator className="my-6" />

        <div className={`grid gap-3 ${gridCols}`}>
          {props.cards.map((card) => (
            <div key={card.title} className="rounded-lg border p-4">
              <p className="text-sm font-medium">{card.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}