import Image from "next/image";
import { AppLink as Link } from "@/components/AppLink";

import { Heading } from "@/components/elements/heading";
import { ArrowPill } from "@/components/ui/button";
import {
  SectionHeader,
  sectionBodyClassName,
} from "@/features/page-builder/sections/shared/ui/SectionHeader";

import type { GridImageCardsMetaProps } from "./schema";

/**
 * Grille de cartes photo cliquables avec une ligne de métadonnées (catégorie,
 * date) : listes d'articles, index de contenus. Même carte que le carrousel
 * `image-cards-slider` (image 16/10, titre, deux lignes, flèche), en grille
 * 1 → 2 → 3 colonnes.
 */
export function GridImageCardsMeta(props: GridImageCardsMetaProps) {
  return (
    <div className="text-left">
      <SectionHeader heading={props.heading} />

      <ul className={`${sectionBodyClassName} grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3`}>
        {props.items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="group block h-full rounded-card focus-ring">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-card bg-muted">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  className="transition-media object-cover group-hover:scale-[1.04]"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>

              {item.meta && item.meta.length > 0 ? (
                <p className="text-label mt-4 text-primary">{item.meta.join(" · ")}</p>
              ) : null}

              <div className="mt-2 flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <Heading as="h3" variant="card" className="transition-ui group-hover:text-primary">
                    {item.title}
                  </Heading>
                  <p className="mt-1.5 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                <ArrowPill className="shrink-0 border border-border/80 bg-transparent" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
