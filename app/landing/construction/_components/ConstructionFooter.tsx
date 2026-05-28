import Image from "next/image";
import { Phone, Mail } from "lucide-react";

import { CONTACT } from "./constants";

export function ConstructionFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-12 text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <Image
            src="/images/logo-white.svg"
            alt="Dilamco"
            width={130}
            height={30}
            className="h-7 w-auto"
          />

          <div className="grid gap-3 text-sm text-background/80 sm:grid-cols-2 md:text-right">
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-2 transition-colors hover:text-background md:justify-end"
            >
              <Phone className="h-4 w-4" strokeWidth={1.8} />
              {CONTACT.phoneDisplay}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-2 transition-colors hover:text-background md:justify-end"
            >
              <Mail className="h-4 w-4" strokeWidth={1.8} />
              {CONTACT.email}
            </a>
            <p className="md:col-span-2">{CONTACT.zones}</p>
            <p className="md:col-span-2">{CONTACT.hours}</p>
            <p className="md:col-span-2 font-medium text-background">
              {CONTACT.rbq}
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-background/15 pt-6 text-xs text-background/55">
          © {year} Dilamco. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
