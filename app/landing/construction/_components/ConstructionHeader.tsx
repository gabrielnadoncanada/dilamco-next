import Image from "next/image";
import { Phone } from "lucide-react";

import { Button } from "../../_components/button";
import { CONTACT, FORM_ANCHOR } from "./constants";

export function ConstructionHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" aria-label="Accueil Dilamco">
          <Image
            src="/images/logo.svg"
            alt="Dilamco"
            width={120}
            height={28}
            priority
          />
        </a>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <a
            href={CONTACT.phoneHref}
            aria-label={`Appeler Dilamco au ${CONTACT.phoneDisplay}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Phone className="h-4 w-4" aria-hidden />
            <span className="hidden sm:inline">{CONTACT.phoneDisplay}</span>
          </a>

          <Button asChild size="sm">
            <a href={`#${FORM_ANCHOR}`}>Soumission gratuite</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
