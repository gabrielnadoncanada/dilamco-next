import { Phone } from "lucide-react";
import { Button } from "../../_components/button";
import { CONTACT, FORM_ANCHOR } from "./constants";

interface ConstructionCtaBandProps {
  title?: string;
  description?: string;
}

export function ConstructionCtaBand({
  title = "Prêt à démarrer votre projet ?",
  description = "Estimation gratuite et sans engagement, sous 24 heures.",
}: ConstructionCtaBandProps) {
  return (
    <section className="bg-primary text-primary-foreground py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-display text-3xl sm:text-4xl">{title}</h2>
        <p className="mt-4 text-primary-foreground/85">{description}</p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild variant="secondary" size="lg">
            <a href={`#${FORM_ANCHOR}`}>Obtenir mon estimation</a>
          </Button>

          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2 text-primary-foreground font-medium hover:text-primary-foreground/80 transition-colors"
          >
            <Phone className="h-5 w-5" />
            {CONTACT.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
