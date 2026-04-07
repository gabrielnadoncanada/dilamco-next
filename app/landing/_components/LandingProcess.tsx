import { Card, CardContent } from "@/components/ui/card";
import { GridImageCardsSlider } from "@/features/page-builder/sections/grid/variants/image-cards-slider/ui";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CircleAlert, Hammer, Layers3, Wrench } from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description:
      "Nous clarifions votre projet, vos priorités, votre budget et votre échéancier.",
    image: {
      src: "/images/process1.jpg",
      alt: "Consultation",
    },
  },
  {
    step: "02",
    title: "Conception et sélection",
    description:
      "Nous définissons la configuration, les matériaux et les finitions adaptés à votre espace.",
    image: {
      src: "/images/process2.jpg",
      alt: "Conception et sélection",
    },
  },
  {
    step: "03",
    title: "Fabrication",
    description:
      "Votre cuisine est fabriquée sur mesure selon des standards précis et contrôlés.",
    image: {
      src: "/images/process3.jpg",
      alt: "Fabrication",
    },
  },
  {
    step: "04",
    title: "Rénovation et installation",
    description:
      "Nous réalisons les travaux nécessaires, installons votre cuisine et validons le résultat final.",
    image: {
      src: "/images/process4.jpg",
      alt: "Rénovation et installation",
    },
  },
] as const;

export function LandingProcess() {
  return (
    <section className="border-y bg-[var(--surface-tint-bg)] py-12 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Notre processus
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            De la première conversation à l&apos;installation
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
            Un processus clair et structuré pour un résultat sans mauvaises
            surprises.
          </p>
        </div>

        <div className="mx-auto mt-6 max-w-6xl">
          <GridImageCardsSlider
            itemClass="lg:basis-1/4"
            hasNavigation={false}
            items={processSteps.map((item) => ({
              title: item.title,
              description: item.description,
              image: {
                src: item.image.src,
                alt: item.image.alt,
              },
            }))}
          />
        </div>
      </div>
    </section>
  );
}
