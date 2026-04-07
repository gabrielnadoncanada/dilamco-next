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

        <div className="hidden items-center gap-5 sm:flex">
          <Link
            href="tel:+15148200773"
            className={`inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
              scrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-white hover:text-white"
            }`}
          >
            <Phone className="h-4 w-4" aria-hidden />
            <span>(514) 820-0773</span>
          </Link>

          <Button
            asChild
            size="sm"
            className={` px-6 font-semibold transition-all duration-300 ${
              scrolled
            }`}
          >
            <a href="#formulaire">Obtenir ma soumission</a>
          </Button>
        </div>

        <Button
          asChild
          size="sm"
          className={` px-4 font-semibold transition-all duration-300 sm:hidden ${
            scrolled
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-white  hover:bg-white/90"
          }`}
        >
          <a href="#formulaire">Estimation</a>
        </Button>
      </div>
    </header>
  );
}
