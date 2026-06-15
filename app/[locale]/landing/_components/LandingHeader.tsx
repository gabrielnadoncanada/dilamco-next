"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "./button";
import Image from "next/image";

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
          href="/landing"
          aria-label="Accueil Dilamco"
          className={`text-xl font-semibold tracking-tight transition-colors duration-300 ${
            scrolled ? "text-foreground" : "text-white"
          }`}
        >
          <Image
            src="/images/logo-white.svg"
            alt="Dilamco"
            width={100}
            height={100}
            className={`w-30 ${scrolled ? "hidden" : "block"}`}
          />
          <Image
            src="/images/logo.svg"
            alt="Dilamco"
            width={100}
            height={100}
            className={`w-30 ${scrolled ? "block" : "hidden"}`}
          />
        </Link>

        <div className="flex items-center gap-3 sm:gap-5">
          <Link
            href="tel:+15148200773"
            aria-label="Appeler Dilamco"
            className={`inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
              scrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-white hover:text-white"
            }`}
          >
            <Phone className="h-4 w-4" aria-hidden />
            <span className="hidden sm:inline">(514) 820-0773</span>
          </Link>

          <Button
            asChild
            size="sm"
            className="px-4 font-semibold transition-all duration-300 sm:px-6"
          >
            <a href="#formulaire">
              <span className="hidden sm:inline">Obtenir ma soumission</span>
              <span className="sm:hidden">Soumission</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
