"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** Délai (ms) avant la révélation, pour décaler des éléments voisins. */
  delay?: number;
};

/**
 * Révèle un bloc quand il entre dans le viewport. Le contenu est rendu visible
 * côté serveur ; au montage, seuls les éléments encore sous le pli reçoivent
 * `is-pending`, puis `is-visible` à l'intersection. Sans JS ou en
 * `prefers-reduced-motion`, rien ne bouge.
 */
export function Reveal({ children, className, as, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const Tag = (as ?? "div") as ElementType;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const rect = el.getBoundingClientRect();
    // Déjà (au moins partiellement) à l'écran : on ne cache rien.
    if (rect.top < window.innerHeight * 0.92) return;

    el.classList.add("is-pending");
    const show = () => {
      el.classList.remove("is-pending");
      el.classList.add("is-visible");
    };
    // Filet de sécurité : si l'observateur ne se déclenche jamais (capture
    // pleine page, onglet en arrière-plan, impression), on révèle quand même.
    const fallback = window.setTimeout(show, 2500);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          window.clearTimeout(fallback);
          window.setTimeout(show, delay);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    observer.observe(el);
    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, [delay]);

  return (
    <Tag ref={ref} data-reveal="" className={cn(className)}>
      {children}
    </Tag>
  );
}
