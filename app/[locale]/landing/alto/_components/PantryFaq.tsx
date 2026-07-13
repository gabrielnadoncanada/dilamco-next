import { Mail, MessageCircleQuestion } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Heading } from "@/components/elements/heading";

const faqItems = [
  {
    question: "Combien coûte ALTO ?",
    answer:
      "895 $, prix de lancement. Cliquez sur « Acheter » et vous serez avisé dès l'ouverture des commandes.",
  },
  {
    question: "Est-ce réellement démontable ?",
    answer:
      "Oui — c'est sa raison d'être. Aucune vis ne s'use dans les panneaux : il se remonte aussi solide qu'au premier jour.",
  },
  {
    question: "Est-ce qu'il faut des outils ?",
    answer:
      "Presque aucun. Les pièces se verrouillent à la main et la quincaillerie reste attachée au meuble. Seule la fixation murale de sécurité demande une quincaillerie adaptée à votre mur.",
  },
  {
    question: "Les tablettes sont-elles ajustables ?",
    answer:
      "Oui, quatre des cinq tablettes se repositionnent à la hauteur voulue.",
  },
  {
    question: "Quand ALTO sera-t-il disponible ?",
    answer:
      "Très bientôt. Les personnes inscrites sont avisées avant l'ouverture publique des commandes.",
  },
  {
    question: "Le fini noyer est-il du bois massif ?",
    answer:
      "C'est un panneau structurel haute densité — plus stable que le massif — avec un fini noyer premium au veinage vertical continu.",
  },
] as const;

export function PantryFaq() {
  return (
    <section id="faq" className="border-t py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              FAQ
            </p>
            <Heading as="h2" variant="h2" className="text-balance">
              Avant de faire de la <em>place</em>.
            </Heading>
            <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">
              Tout ce qu&apos;on nous demande avant d&apos;acheter, répondu sans
              détour.
            </p>

            <div className="mt-10 rounded-2xl border border-border bg-[var(--surface-tint-bg)] p-6">
              <div className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <MessageCircleQuestion
                  className="h-4 w-4 text-foreground/70"
                  strokeWidth={1.5}
                />
                Une question spécifique ?
              </div>
              <p className="mt-3 text-sm leading-6 text-foreground/80">
                Écrivez-nous, on répond en moins de 24 h.
              </p>
              <div className="mt-5 text-sm">
                <a
                  href="mailto:ventes@dilamco.com"
                  className="group flex items-center gap-2.5 text-foreground transition-colors hover:text-foreground/70"
                >
                  <Mail
                    className="h-3.5 w-3.5 text-foreground/60"
                    strokeWidth={1.6}
                  />
                  <span className="font-medium">ventes@dilamco.com</span>
                </a>
              </div>
            </div>
          </div>

          <div className="block">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-0"
              className="divide-y divide-border border-y border-border"
            >
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  value={`item-${index}`}
                  className="border-b-0"
                >
                  <AccordionTrigger className="py-5 text-left text-base font-medium text-foreground hover:no-underline sm:text-[17px]">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-base leading-7 text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
