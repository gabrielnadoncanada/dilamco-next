"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LandingHeader() {
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
        <Link
          href="/"
          aria-label="Accueil Dilamco"
          className={`text-xl font-semibold tracking-tight transition-colors duration-300 ${
            scrolled ? "text-foreground" : "text-white"
          }`}
        >
          Dilamco
        </Link>

        <div className="hidden items-center gap-5 sm:flex">
          <Link
            href="tel:+15148200773"
            className={`inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
              scrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-white/70 hover:text-white"
            }`}
          >
            <Phone className="h-4 w-4" />
            (514) 820-0773
          </Link>

          <Button
            asChild
            size="sm"
            className={`rounded-full px-6 font-semibold transition-all duration-300 ${
              scrolled
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-white text-foreground hover:bg-white/90"
            }`}
          >
            <a href="#formulaire">Demander une estimation</a>
          </Button>
        </div>

        <Button
          asChild
          size="sm"
          className={`rounded-full px-4 font-semibold transition-all duration-300 sm:hidden ${
            scrolled
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-white text-foreground hover:bg-white/90"
          }`}
        >
          <a href="#formulaire">Estimation</a>
        </Button>
      </div>
    </header>
  );
}
