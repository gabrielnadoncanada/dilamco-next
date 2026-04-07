import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const avoidItems = [
  "Panneaux en mélamine qui gonflent ou s’écaillent",
  "Armoires fragiles qui perdent leur forme",
  "Vis et charnières qui se desserrent avec le temps",
  "Finitions qui s’usent trop rapidement",
] as const;

export function LandingWhatYouAvoid() {
  return (
    <section className="py-12 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 sm:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Ce que vous évitez
          </h2>
          <ul className="mt-8 space-y-4">
            {avoidItems.map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-foreground/60" />
                <span className="leading-7">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative max-sm:order-first">
          <div className="relative min-h-[300px] md:min-h-[420px] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-border">
            <Image
              src="/images/contreplaque3.jpg"
              alt="Structure de tiroir en bois massif de bouleau, qualité Dilamco"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
