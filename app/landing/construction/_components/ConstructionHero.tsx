import Image from "next/image";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";

import { Button } from "../../_components/button";
import { CONTACT, FORM_ANCHOR } from "./constants";

export function ConstructionHero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-foreground">
      {/* Background image */}
      <Image
        src="/images/generated/renovation/renovation-extension-hero-01.webp"
        alt="Rénovation et agrandissement résidentiel réalisé par Dilamco"
        fill
        priority
        className="ken-burns object-cover"
        sizes="100vw"
      />

      {/* Dark overlays — same two as LandingHero */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 85% 25%, rgba(255,255,255,0.08), transparent 48%), radial-gradient(circle at 0% 100%, rgba(0,0,0,0.35), transparent 55%)",
        }}
      />

      {/* Decorative left accent line */}
      <div
        className="pointer-events-none absolute left-0 top-1/2 h-[40%] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-white/25 to-transparent"
        aria-hidden
      />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-center px-4 pt-28 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Badge pill */}
          <div
            className="hero-reveal inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm"
            style={{ animationDelay: "0ms" }}
          >
            <MapPin className="h-3.5 w-3.5 text-white/70" />
            RBQ 8306-0806-27 · 20+ ans · Grand Montréal
          </div>

          {/* H1 */}
          <h1
            className="hero-reveal mt-7 text-balance font-display text-[2.6rem] font-medium leading-[1.04] tracking-[-0.025em] text-white sm:text-5xl lg:text-[4.25rem]"
            style={{
              textShadow: "0 2px 18px rgba(0,0,0,0.35)",
              animationDelay: "120ms",
            }}
          >
            Votre rénovation livrée dans les délais et le budget —{" "}
            <span className="italic text-white/95">par un seul entrepreneur.</span>
          </h1>

          {/* Subtitle */}
          <p
            className="hero-reveal mt-6 max-w-xl text-lg leading-8 text-white/85"
            style={{ animationDelay: "240ms" }}
          >
            Cuisine, salle de bain, rallonge ou projet complet : Dilamco coordonne
            tout, du premier plan à la dernière finition. Estimation gratuite sous
            24 h.
          </p>

          {/* CTA row */}
          <div
            className="hero-reveal mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
            style={{ animationDelay: "360ms" }}
          >
            <Button
              asChild
              size="lg"
              className="px-8 text-base font-semibold shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              <a href={`#${FORM_ANCHOR}`}>
                Obtenir mon estimation gratuite
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>

            {/* Phone block — mirrors LandingHero */}
            <a
              href={CONTACT.phoneHref}
              className="group inline-flex items-center gap-2.5 text-sm font-medium text-white/85 transition-colors hover:text-white sm:ml-1"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 transition-colors group-hover:bg-white/15">
                <Phone className="h-3.5 w-3.5" strokeWidth={1.8} />
              </span>
              <span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
                  Parler à un entrepreneur
                </span>
                <span className="font-display text-base tracking-[-0.01em] text-white">
                  {CONTACT.phoneDisplay}
                </span>
              </span>
            </a>
          </div>

          {/* Reassurance row */}
          <div
            className="hero-reveal mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/85"
            style={{ animationDelay: "480ms" }}
          >
            {[
              "Estimation sous 24 h",
              "Délais & budget respectés",
              "Licence RBQ & assuré",
              "Sans engagement",
            ].map((label) => (
              <span key={label} className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-white/85" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
