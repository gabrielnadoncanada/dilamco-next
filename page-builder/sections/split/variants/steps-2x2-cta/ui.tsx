import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { SplitSteps2x2CtaProps } from "./schema";
import { Heading } from "@/components/elements/heading";

export function SplitSteps2x2Cta(props: SplitSteps2x2CtaProps) {
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
      <div className="lg:col-span-5">
        <Heading as="h2" variant="h2">{props.heading}</Heading>
        <p className="mt-3 text-sm text-muted-foreground">{props.description}</p>
      </div>

      <div className="lg:col-span-7">
        <div className="grid gap-4 sm:grid-cols-2">
          {props.steps.map((s) => (
            <div key={s.label} className="rounded-lg border p-4">
              <p className="text-sm font-medium">{s.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {s.description}
              </p>
            </div>
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