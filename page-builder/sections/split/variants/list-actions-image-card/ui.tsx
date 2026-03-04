import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { SplitListActionsImageCardProps } from "./schema";
import { Heading } from "@/components/elements/heading";

export function SplitListActionsImageCard(props: SplitListActionsImageCardProps) {
  const primary = props.actions[0];
  const secondary = props.actions[1];

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
      {/* Left */}
      <div className="lg:col-span-6">
        <Heading as="h2" variant="h2">{props.heading}</Heading>

        <p className="mt-4 text-muted-foreground">{props.intro}</p>

        <ul className="mt-6 space-y-3 text-sm">
          {props.items.map((it) => (
            <li key={it.title} className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/60" />
              <span>
                <span className="font-medium">{it.title}</span>{" "}
                {it.description}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant={primary.variant ?? "outline"}>
            <Link href={primary.href}>{primary.label}</Link>
          </Button>

          {secondary ? (
            <Button asChild variant={secondary.variant ?? "outline"}>
              <Link href={secondary.href}>{secondary.label}</Link>
            </Button>
          ) : null}
        </div>
      </div>

      {/* Right */}
      <div className="lg:col-span-6">
        <div className="relative overflow-hidden rounded-xl border bg-background">
          <div className="relative aspect-[4/3]">
            <Image
              src={props.image.src}
              alt={props.image.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          <div className="p-5">
            <p className="text-sm font-medium">{props.cardTitle}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              {props.cardDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}