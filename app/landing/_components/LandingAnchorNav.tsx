"use client";

import { useEffect, useState } from "react";

const sections = [
  { href: "#realisations", label: "Réalisations" },
  { href: "#materiaux", label: "Matériaux" },
  { href: "#processus", label: "Processus" },
  { href: "#faq", label: "FAQ" },
] as const;

export function LandingAnchorNav() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setSticky(window.scrollY > window.innerHeight * 0.75);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Navigation des sections"
      className={`sticky top-0 z-30 hidden border-b border-border bg-background/90 backdrop-blur-md transition-all duration-300 sm:block ${
        sticky ? "shadow-[0_1px_0_rgba(0,0,0,0.02)]" : "shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <ul className="flex gap-8 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground md:gap-12">
          {sections.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                className="transition-colors duration-200 hover:text-foreground"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
