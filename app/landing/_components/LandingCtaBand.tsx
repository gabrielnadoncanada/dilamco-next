import { ArrowRight } from "lucide-react";

import { Button } from "./button";

type LandingCtaBandProps = {
  title: string;
  description: string;
};

export function LandingCtaBand({ title, description }: LandingCtaBandProps) {
  return (
    <section className="border-b py-14">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 px-4 text-center">
        <div>
          <p className="text-xl font-semibold sm:text-2xl">{title}</p>
          <p className="mt-2 text-sm text-muted-foreground text-balance">
            {description}
          </p>
        </div>
        <Button
          asChild
          size="lg"
          className="bg-primary px-8 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
        >
          <a href="#formulaire">
            Demander une estimation gratuite
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  );
}
