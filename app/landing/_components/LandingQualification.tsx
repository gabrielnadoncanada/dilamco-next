import Image from "next/image";
import { CheckCircle2, CircleAlert } from "lucide-react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";

const fitItems = [
  "Des tiroirs qui perdent en solidité avec le temps",
  "Une quincaillerie qui s'use plus vite que prévu",
  "Des matériaux plus sensibles à l'humidité",
  "Des compromis invisibles dans la structure",
  "Un budget qui évolue après le début des travaux",
  "Une utilisation quotidienne moins fluide et agréable",
] as const;

export function LandingQualification() {
  return (
    <section className="border-y bg-[var(--surface-tint-bg)] py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Ce que plusieurs propriétaires découvrent trop tard
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
            Toutes les cuisines ne se valent pas, même si elles se ressemblent
            au départ. Ce qui est visible à la soumission ne reflète pas
            toujours la qualité réelle du projet.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-5xl  gap-6 ">
          <Card className="rounded-3xl border bg-background shadow-sm col-span-12 lg:col-span-7 gap-0 py-0 text-center">
            <CardContent className="px-8 py-8  sm:p-10 sm:px-10">
              <ul className="grid gap-5 sm:grid-cols-2">
                {fitItems.map((item) => (
                  <Card key={item} className="flex gap-3 justify-center">
                    <CardContent className="flex gap-3 justify-center">
                      <span className="leading-7">{item}</span>
                    </CardContent>
                  </Card>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex justify-center">
              <p className="text-sm leading-6">
                Le problème : ces différences ne sont pas toujours visibles
                avant d'avoir signé.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
