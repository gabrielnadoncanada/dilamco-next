import Image from "next/image";
import { AppLink as Link } from "@/components/AppLink";

import { Button } from "@/components/ui/button";
import type { SplitListActionsImageCardProps } from "./schema";
import { Heading } from "@/components/elements/heading";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SplitListActionsImageCard(
  props: SplitListActionsImageCardProps,
) {
  const primary = props.actions[0];
  const secondary = props.actions[1];

  return (
    <div className="grid gap-y-8 lg:grid-cols-12 lg:items-center">
      {/* Left */}
      <div className="lg:col-span-5">
        <Heading as="h2" variant="h2">
          {props.heading}
        </Heading>

        <p className="mt-4 text-muted-foreground">{props.intro}</p>

        <ul className="mt-6 space-y-3 text-sm">
          {props.items.map((it) => (
            <li key={it.title} className="flex gap-3">
              <span className="flex flex-col">
                <span className="font-semibold">{it.title}</span>{" "}
                <span className="text-muted-foreground">{it.description}</span>
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant={primary.variant ?? "ghost"}>
            <Link href={primary.href}>{primary.label}</Link>
          </Button>

          {secondary ? (
            <Button asChild variant={secondary.variant ?? "ghost"}>
              <Link href={secondary.href}>{secondary.label}</Link>
            </Button>
          ) : null}
        </div>
      </div>

      {/* Right */}
      <div className="lg:col-[7/13]">
        <div className="relative overflow-hidden rounded-none border bg-background">
          <Card className="pt-0">
            <div className="relative aspect-[4/3]">
              <Image
                src={props.image.src}
                alt={props.image.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>

            <CardHeader>
              <CardTitle> {props.cardTitle} </CardTitle>
              <CardDescription> {props.cardDescription} </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
