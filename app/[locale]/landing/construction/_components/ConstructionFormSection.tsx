import { CheckCircle2, Phone } from "lucide-react";

import { ConstructionLeadForm } from "./ConstructionLeadForm";
import { CONTACT, FORM_ANCHOR } from "./constants";

const reassurance = ["Réponse sous 24 h", "RBQ & assuré", "Sans engagement"];

export function ConstructionFormSection() {
  return (
    <section
      id={FORM_ANCHOR}
      className="scroll-mt-24 bg-primary py-20 text-primary-foreground lg:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:px-8">
        <div>
          <h2 className="font-display text-3xl font-medium leading-tight tracking-[-0.02em] sm:text-4xl">
            Recevez votre estimation gratuite sous 24 h.
          </h2>
          <p className="mt-4 max-w-md text-lg leading-8 text-primary-foreground/85">
            Dites-nous en deux mots votre projet. On vous rappelle avec une
            estimation claire — sans engagement.
          </p>

          <ul className="mt-6 space-y-2">
            {reassurance.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm">
                <CheckCircle2 className="h-4 w-4 text-primary-foreground/80" />
                {item}
              </li>
            ))}
          </ul>

          <a
            href={CONTACT.phoneHref}
            className="group mt-6 inline-flex items-center gap-2.5 text-sm text-primary-foreground/85 transition-colors hover:text-primary-foreground"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/25 bg-primary-foreground/10 transition-colors group-hover:bg-primary-foreground/15">
              <Phone className="h-3.5 w-3.5" strokeWidth={1.8} />
            </span>
            <span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/55">
                Ou appelez-nous
              </span>
              <span className="font-display text-base tracking-[-0.01em]">
                {CONTACT.phoneDisplay}
              </span>
            </span>
          </a>
        </div>

        <div className="rounded-2xl bg-card p-6 text-card-foreground shadow-xl sm:p-8">
          <ConstructionLeadForm />
        </div>
      </div>
    </section>
  );
}
