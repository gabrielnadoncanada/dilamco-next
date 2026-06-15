import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const gainItems = [
  "Tiroirs qui glissent bien, sans affaissement",
  "Portes qui restent bien alignées",
  "Surfaces plus résistantes aux chocs et aux dommages",
  "Des armoires qui gardent leur apparence pendant des années",
] as const;

export function LandingWhatYouGain() {
  return (
    <section className="pt-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative">
          <div className="relative min-h-[420px] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-border">
            <Image
              src="/images/contreplaque.jpg"
              alt="Structure de tiroir en bois massif de bouleau, qualité Dilamco"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Ce que vous gagnez
          </h2>
          <ul className="mt-8 space-y-4">
            {gainItems.map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-foreground/60" />
                <span className="leading-7">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
