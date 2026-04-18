"use client";

import { useEffect, useState } from "react";
import { Phone, ArrowRight } from "lucide-react";

export function LandingStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-md transition-all duration-500 sm:hidden ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="flex items-stretch">
        <a
          href="tel:+15148200773"
          className="flex flex-1 items-center justify-center gap-2 border-r border-border py-4 text-sm font-medium text-foreground"
        >
          <Phone className="h-4 w-4" strokeWidth={1.8} />
          Appeler
        </a>
        <a
          href="#formulaire"
          className="flex flex-[1.3] items-center justify-center gap-2 bg-primary py-4 text-sm font-semibold text-primary-foreground"
        >
          Soumission
          <ArrowRight className="h-4 w-4" strokeWidth={2} />
        </a>
      </div>
    </div>
  );
}
