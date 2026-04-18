import { Phone, Mail, MessageCircleQuestion } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

const faqItems = [
  {
    question: "Quel budget prévoir pour une cuisine sur mesure ?",
    answer:
      "La majorité de nos projets se situent entre 30 000 $ et 60 000 $+, selon la complexité, les matériaux, la configuration et l'ampleur du chantier. Nous clarifions le budget réaliste dès la consultation initiale.",
  },
  {
    question: "Pourquoi ne pas simplement aller chez IKEA ou en grande surface ?",
    answer:
      "Les solutions standardisées peuvent convenir à certains projets. Une fabrication sur mesure permet une personnalisation complète, l'utilisation de matériaux plus robustes — bois massif et contreplaqué de bouleau plutôt que panneaux de particules — et une durabilité accrue. C'est un choix d'investissement long terme, pas de dépense à court terme.",
  },
  {
    question: "Quels matériaux utilisez-vous ?",
    answer:
      "Nos structures sont en bois massif de bouleau et nos fonds en contreplaqué de bouleau. Des matériaux denses, stables dimensionnellement, qui résistent à l'humidité et qui tiennent mieux les vis et charnières. Finitions sélectionnées pour la durabilité et la cohérence dans le temps.",
  },
  {
    question: "Offrez-vous une garantie ?",
    answer:
      "Oui. Les matériaux et la structure sont couverts par une garantie claire, présentée en détail avec la soumission. Les composants additionnels bénéficient également des garanties de leurs manufacturiers respectifs.",
  },
  {
    question: "Gérez-vous l'ensemble de la rénovation ?",
    answer:
      "Oui. Selon le projet, notre équipe coordonne l'ensemble du mandat, du design à l'installation, afin de limiter les frictions et de mieux maîtriser l'exécution.",
  },
  {
    question: "Dans quelles zones intervenez-vous ?",
    answer:
      "Nous réalisons des projets dans tout le Grand Montréal, notamment à Montréal, Laval, Longueuil, Brossard, Boucherville, Saint-Bruno, Terrebonne, Repentigny, Vaudreuil-Dorion, et plus encore.",
  },
  {
    question: "Combien de temps dure un projet typique ?",
    answer:
      "Le calendrier varie selon le projet, mais les étapes, la logique d'exécution et les délais sont clarifiés dès la phase de planification. Aucune zone grise.",
  },
] as const;

export function LandingFaq() {
  return (
    <section id="faq" className="py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left rail : sticky intro + contact card */}
          <Reveal className="lg:sticky lg:top-24 lg:self-start">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              § 06 · FAQ
            </p>
            <h2 className="font-display text-3xl font-medium tracking-[-0.02em] text-balance sm:text-4xl lg:text-5xl">
              Questions fréquentes
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">
              Les points sur lesquels les propriétaires hésitent le plus avant
              de s&apos;engager, et comment nous y répondons.
            </p>

            <div className="mt-10 rounded-2xl border border-border bg-[var(--surface-tint-bg)] p-6">
              <div className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <MessageCircleQuestion className="h-4 w-4 text-foreground/70" strokeWidth={1.5} />
                Une question spécifique ?
              </div>
              <p className="mt-3 text-sm leading-6 text-foreground/80">
                Parlez à un conseiller directement. On répond en moins de 24 h,
                sans engagement.
              </p>
              <div className="mt-5 space-y-2.5 text-sm">
                <a
                  href="tel:+15148200773"
                  className="group flex items-center gap-2.5 text-foreground transition-colors hover:text-foreground/70"
                >
                  <Phone className="h-3.5 w-3.5 text-foreground/60" strokeWidth={1.6} />
                  <span className="font-medium">(514) 820-0773</span>
                </a>
                <a
                  href="mailto:ventes@dilamco.com"
                  className="group flex items-center gap-2.5 text-foreground transition-colors hover:text-foreground/70"
                >
                  <Mail className="h-3.5 w-3.5 text-foreground/60" strokeWidth={1.6} />
                  <span className="font-medium">ventes@dilamco.com</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Accordion */}
          <Reveal
            delay={150}
            className="block"
          >
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}
