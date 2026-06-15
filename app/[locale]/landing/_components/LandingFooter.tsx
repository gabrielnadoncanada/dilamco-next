import { MapPin, Phone, Mail, ShieldCheck } from "lucide-react";

const currentYear = new Date().getFullYear();

export function LandingFooter() {
  return (
    <footer className="border-t bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr] md:gap-8">
          {/* Brand block */}
          <div>
            <p className="font-display text-2xl font-medium tracking-[-0.01em]">
              Dilamco
            </p>
            <p className="mt-3 max-w-xs text-sm leading-6 text-background/60">
              Cuisines, vanités et armoires sur mesure. Conçues, fabriquées et
              installées avec exigence dans le Grand Montréal depuis plus de
              20 ans.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-background/50">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="tel:+15148200773"
                  className="group inline-flex items-center gap-2.5 text-background/85 transition-colors hover:text-background"
                >
                  <Phone className="h-3.5 w-3.5 text-background/50 transition-colors group-hover:text-background/80" strokeWidth={1.6} />
                  (514) 820-0773
                </a>
              </li>
              <li>
                <a
                  href="mailto:ventes@dilamco.com"
                  className="group inline-flex items-center gap-2.5 text-background/85 transition-colors hover:text-background"
                >
                  <Mail className="h-3.5 w-3.5 text-background/50 transition-colors group-hover:text-background/80" strokeWidth={1.6} />
                  ventes@dilamco.com
                </a>
              </li>
            </ul>
          </div>

          {/* Zone desservie */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-background/50">
              Zone desservie
            </p>
            <p className="mt-4 inline-flex items-start gap-2.5 text-sm text-background/85">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-background/50" strokeWidth={1.6} />
              <span>
                Grand Montréal
                <br />
                Laval, Rive-Sud, Rive-Nord
              </span>
            </p>
          </div>

          {/* Credentials */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-background/50">
              Accréditation
            </p>
            <p className="mt-4 inline-flex items-start gap-2.5 text-sm text-background/85">
              <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-background/50" strokeWidth={1.6} />
              <span>
                Licence RBQ
                <br />
                <span className="font-mono text-xs tracking-wider text-background/70">
                  8306-0806-27
                </span>
              </span>
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-background/10 pt-6 text-xs text-background/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Dilamco. Tous droits réservés.</p>
          <p className="tracking-[0.08em]">
            Fabrication contrôlée · Livraison clé en main
          </p>
        </div>
      </div>
    </footer>
  );
}
