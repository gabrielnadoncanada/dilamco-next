import Image from "next/image";

import { Heading } from "@/components/elements/heading";
import type { SplitFactSheetProps } from "./schema";

/**
 * Fiche technique : titre collant + photo à gauche (5 col.), liste
 * label → valeur à droite (7 col.) en rangées filetées. Sur mobile, la photo
 * passe sous le tableau.
 */
export function SplitFactSheet(props: SplitFactSheetProps) {
  return (
    <div className="grid gap-y-8 text-left lg:grid-cols-12 lg:gap-x-12">
      <div className="lg:col-span-5">
        <div className="lg:sticky lg:top-28">
          <Heading as="h2" variant="h2">
            {props.heading}
          </Heading>
          {props.intro ? <p className="text-lead mt-4">{props.intro}</p> : null}
          {props.image ? (
            <figure className="relative mt-8 hidden aspect-[4/3] overflow-hidden rounded-card bg-muted lg:block">
              <Image
                src={props.image.src}
                alt={props.image.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </figure>
          ) : null}
        </div>
      </div>

      <div className="lg:col-[6/13]">
        <dl className="rounded-card border border-border/80 bg-card">
          {props.rows.map((row) => (
            <div
              key={row.label}
              className="grid gap-1 border-b border-border/80 px-5 py-4 last:border-0 sm:grid-cols-[11rem_1fr] sm:items-baseline sm:gap-6 sm:px-6"
            >
              <dt className="text-label text-muted-foreground">{row.label}</dt>
              <dd className="text-[0.9375rem] leading-relaxed text-foreground">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
        {props.note ? (
          <p className="mt-3 px-1 text-xs leading-relaxed text-muted-foreground">
            {props.note}
          </p>
        ) : null}
        {props.image ? (
          <figure className="relative mt-6 aspect-[4/3] overflow-hidden rounded-card bg-muted lg:hidden">
            <Image
              src={props.image.src}
              alt={props.image.alt}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </figure>
        ) : null}
      </div>
    </div>
  );
}
