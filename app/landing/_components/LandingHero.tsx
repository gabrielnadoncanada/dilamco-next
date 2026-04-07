import Image from "next/image";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";

import { Button } from "./button";

export function LandingHero() {
  return (
    <section className="relative min-h-[60vh] md:min-h-[92vh] overflow-hidden bg-foreground">
      <Image
        src="/images/projects/cuisine-haut-de-gamme-blanche-laval.webp"
        alt="Cuisine sur mesure haut de gamme réalisée par Dilamco"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 85% 20%, rgba(255,255,255,0.06), transparent 42%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[60vh] md:min-h-[92vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm">
            <MapPin className="h-3.5 w-3.5 text-white/70" />
            Grand Montréal et les environs
          </div>

          <h1
            className="mt-7 text-4xl font-semibold leading-[1.1] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl"
            style={{ textShadow: "0 2px 14px rgba(0,0,0,0.20)" }}
          >
            La vraie qualité ne se voit pas toujours au départ.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-white/85">
            La différence se joue dans la structure, les matériaux et la façon
            dont le projet est conçu dès le départ.
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="px-8 text-base font-semibold shadow-lg transition-all "
            >
              <a href="#formulaire">
                Obtenir une estimation claire
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/85">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-white/85" />
              Soumission gratuire en moins de 24h
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
