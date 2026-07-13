"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { PantryBuyButton } from "./PantryBuyButton";

export function PantryHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          aria-label="Garde-manger Dilamco"
          className="flex items-center gap-3"
        >
          <Image
            src="/images/logo.svg"
            alt="Dilamco"
            width={100}
            height={100}
            className="w-30"
          />
          <span className="hidden border-l border-border pl-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground sm:inline">
            Garde-manger 24 po
          </span>
        </a>

        <PantryBuyButton size="small" label="Acheter" showArrow={false} />
      </div>
    </header>
  );
}
