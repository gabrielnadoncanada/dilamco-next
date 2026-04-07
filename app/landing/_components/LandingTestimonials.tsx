import { Quote, Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "Très impressionnés par la qualité de finition et la gestion du projet. Tout a été plus clair que ce qu'on avait connu auparavant.",
    author: "Client, Montréal",
  },
  {
    quote:
      "Le processus a été structuré du début à la fin. On sent qu'il y a une vraie maîtrise du projet.",
    author: "Client, Laval",
  },
  {
    quote:
      "Les matériaux, la coordination et le résultat final justifient complètement le positionnement haut de gamme.",
    author: "Client, Rive-Sud",
  },
] as const;

export function LandingTestimonials() {
  return (
    <section className="py-12 md:py-24 bg-[var(--surface-tint-bg)] border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Ce que nos clients retiennent
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Card
              key={item.author}
              className="group relative rounded-3xl border bg-background shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <CardContent className="p-8">
                <Quote className="mb-4 h-8 w-8 text-foreground/10" />

                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-3.5 w-3.5 fill-foreground/70 text-foreground/70"
                    />
                  ))}
                </div>

                <p className="mt-5 text-base leading-7">
                  &laquo;&nbsp;{item.quote}&nbsp;&raquo;
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="h-px flex-1 bg-border" />
                  <p className="text-sm font-medium text-muted-foreground">
                    {item.author}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
