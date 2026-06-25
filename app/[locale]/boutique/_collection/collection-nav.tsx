"use client";

import { useState } from "react";
import { AppLink as Link } from "@/components/AppLink";
import { useLocale } from "next-intl";
import {
  childrenOf,
  collectionContent,
  collectionProducts,
  findCollection,
  navCollections,
  type Collection,
} from "@/lib/shop/collections";
import { cn } from "@/lib/shop/utils";

/** Le nœud `slug` est-il sur le chemin actif (= activeSlug ou un de ses ancêtres) ? */
function onActivePath(slug: string, activeSlug?: string): boolean {
  if (!activeSlug) return false;
  let cur: Collection | undefined = findCollection(activeSlug);
  while (cur) {
    if (cur.slug === slug) return true;
    cur = cur.parent ? findCollection(cur.parent) : undefined;
  }
  return false;
}

/** Chevron à gauche : pointe à droite (›) replié, vers le bas une fois ouvert. */
function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      className={cn(
        "size-3.5 text-muted-foreground transition-transform duration-150",
        open && "rotate-90",
      )}
    >
      <path d="M6 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function TreeNode({
  c,
  activeSlug,
}: {
  c: Collection;
  activeSlug?: string;
}) {
  const locale = useLocale();
  const kids = childrenOf(c.slug);
  const hasKids = kids.length > 0;
  const active = activeSlug === c.slug;
  const [open, setOpen] = useState(() => onActivePath(c.slug, activeSlug));
  const count = collectionProducts(c).length;

  return (
    <li>
      <div
        className={cn(
          "group flex items-center gap-1 rounded-md pr-2 transition-colors",
          active ? "bg-secondary" : "hover:bg-secondary/50",
        )}
      >
        {/* Chevron (plie/déplie) ou réserve d'alignement pour les feuilles. */}
        {hasKids ? (
          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? "Réduire" : "Développer"}
            onClick={() => setOpen((v) => !v)}
            className="flex size-7 shrink-0 cursor-pointer items-center justify-center text-muted-foreground hover:text-foreground"
          >
            <Chevron open={open} />
          </button>
        ) : (
          <span className="size-7 shrink-0" aria-hidden />
        )}

        {/* Le libellé navigue. */}
        <Link
          href={`/boutique/${c.slug}`}
          aria-current={active ? "page" : undefined}
          className={cn(
            "flex min-w-0 flex-1 items-center gap-2 py-[7px] transition-colors",
            active
              ? "font-medium text-foreground"
              : "text-soft-foreground group-hover:text-primary",
          )}
        >
          <span className="truncate">{collectionContent(c, locale).crumb}</span>
          <span className="ml-auto font-mono text-[10px] tabular-nums text-muted-foreground">
            {count}
          </span>
        </Link>
      </div>

      {/* Enfants : ligne de guidage indentée (alignée sous le chevron). */}
      {hasKids && open && (
        <ul className="ml-[13px] flex flex-col border-l border-border pl-1.5">
          {kids.map((k) => (
            <TreeNode key={k.slug} c={k} activeSlug={activeSlug} />
          ))}
        </ul>
      )}
    </li>
  );
}

/**
 * Arbre de navigation par collection (sidebar desktop + drawer mobile), style
 * « tree » : chevron à gauche, lignes de guidage indentées, sélection surlignée.
 * Récursif (jusqu'à 3 niveaux), accordéon cliquable. Piloté par COLLECTIONS.
 */
export function CollectionNav({ activeSlug }: { activeSlug?: string }) {
  return (
    <ul className="flex flex-col text-[13px]">
      {navCollections().map((pillar) => (
        <TreeNode key={pillar.slug} c={pillar} activeSlug={activeSlug} />
      ))}
    </ul>
  );
}
