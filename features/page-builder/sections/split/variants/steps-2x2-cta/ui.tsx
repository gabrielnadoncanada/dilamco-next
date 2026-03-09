import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { SplitSteps2x2CtaProps } from "./schema";
import { Heading } from "@/components/elements/heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SplitSteps2x2Cta(props: SplitSteps2x2CtaProps) {
  return (
    <div className="grid gap-y-8 lg:grid-cols-12 lg:items-start">
      <div className="lg:col-span-5">
        <Heading as="h2" variant="h2">{props.heading}</Heading>
        <p className="mt-3 text-sm text-muted-foreground">{props.description}</p>
      </div>

      <div className="lg:col-[7/13]">
        <div className="grid gap-4 sm:grid-cols-2">
          {props.steps.map((s) => (
            <Card key={s.label} >
              <CardHeader>
                <CardTitle>{s.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {s.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {props.actions?.length ? (
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            {props.actions.map((a) => (
              <Button
                key={`${a.href}-${a.label}`}
                asChild
                variant={a.variant === "default" ? "default" : a.variant}
              >
                <Link href={a.href}>{a.label}</Link>
              </Button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}