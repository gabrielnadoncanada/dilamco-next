import Image from "next/image";
import { Check } from "lucide-react";
import { AppLink as Link } from "@/components/AppLink";

import { Button, ButtonArrow } from "@/components/ui/button";
import type { SplitListActionsImageCardProps } from "./schema";
import { Heading } from "@/components/elements/heading";

/**
 * Texte + liste de points à gauche, grande photo dans un panneau arrondi à
 * droite avec une étiquette en bas (cardTitle / cardDescription).
 */
export function SplitListActionsImageCard(
  props: SplitListActionsImageCardProps,
) {
  const [primary, ...rest] = props.actions;

  return (
    <div className="grid gap-y-8 text-left lg:grid-cols-12 lg:items-center lg:gap-x-12">
      <div className="lg:col-span-5">
        <Heading as="h2" variant="h2">
          {props.heading}
        </Heading>

        <p className="text-lead mt-4">{props.intro}</p>

        <ul className="mt-8 space-y-4">
          {props.items.map((it) => (
            <li key={it.title} className="flex gap-3">
              <span className="icon-pill mt-0.5 size-6">
                <Check className="size-3.5" strokeWidth={3} />
              </span>
              <span className="text-sm leading-relaxed">
                <span className="font-semibold text-foreground">{it.title}</span>
                <span className="text-muted-foreground"> · {it.description}</span>
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button asChild variant={primary.variant ?? "primary"}>
            <Link href={primary.href}>
              {primary.label}
              <ButtonArrow />
            </Link>
          </Button>
          {rest.map((a) => (
            <Button
              key={`${a.href}-${a.label}`}
              asChild
              variant={a.variant ?? "ghost"}
            >
              <Link href={a.href}>{a.label}</Link>
            </Button>
          ))}
        </div>
      </div>

      <div className="lg:col-[7/13]">
        <figure className="relative aspect-[4/3] overflow-hidden rounded-panel bg-muted">
          <Image
            src={props.image.src}
            alt={props.image.alt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          {props.cardTitle ? (
          <figcaption className="absolute inset-x-4 bottom-4 flex flex-col gap-0.5 rounded-card bg-white/92 px-5 py-4 backdrop-blur sm:inset-x-6 sm:bottom-6">
            <span className="font-display text-base font-semibold tracking-[-0.01em] text-foreground">
              {props.cardTitle}
            </span>
            <span className="text-sm text-muted-foreground">
              {props.cardDescription}
            </span>
          </figcaption>
          ) : null}
        </figure>
      </div>
    </div>
  );
}
