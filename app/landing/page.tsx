import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Warehouse,
  Wrench,
  Clock3,
  MapPin,
  Star,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

/* -------------------------------------------------------------------------- */
/*  DATA                                                                      */
/* -------------------------------------------------------------------------- */

const galleryImages = [
  {
    src: "/images/projects/cuisine-blanche-sur-mesure-brossard.webp",
    title: "Cuisine sur mesure — Brossard",
    alt: "Cuisine blanche sur mesure haut de gamme livrée à Brossard",
  },
  {
    src: "/images/projects/cuisine-haut-de-gamme-blanche-laval-1.webp",
    title: "Cuisine haut de gamme — Laval",
    alt: "Cuisine blanche haut de gamme sur mesure réalisée à Laval",
  },
  {
    src: "/images/projects/chene-moderne.webp",
    title: "Cuisine chêne moderne — Montréal",
    alt: "Cuisine moderne en chêne sur mesure à Montréal",
  },
  {
    src: "/images/projects/project11.webp",
    title: "Réalisation sur mesure — Rive-Sud",
    alt: "Projet cuisine sur mesure haut de gamme sur la Rive-Sud",
  },
] as const;

const risks = [
  "Trop d'intervenants, aucun vrai responsable",
  "Délais qui dérapent sans préavis",
  "Structures fragiles sur les zones les plus sollicitées",
  "Budget final au-dessus du devis initial",
  "Qualité difficile à évaluer avant d'avoir payé",
  "Projet mal cadré dès le départ",
] as const;

const answers = [
  "Un seul responsable du design à l'installation",
  "Processus structuré avec échéancier défini",
  "Bois massif de bouleau et contreplaqué vérifié",
  "Budget clarifié dès la consultation initiale",
  "Matériaux tangibles et vérifiables",
  "Cadrage rigoureux avant tout engagement",
] as const;

const differentiators = [
  {
    icon: Warehouse,
    title: "Entrepôt local à Montréal",
    description:
      "Plus de 20 ans de présence locale. Contrôle des inventaires, réduction des imprévus et suivi rigoureux de chaque projet.",
  },
  {
    icon: ShieldCheck,
    title: "Fabrication contrôlée",
    description:
      "Relation exclusive avec notre usine. Spécifications définies, standards haut de gamme, qualité constante et reproductible.",
  },
  {
    icon: Wrench,
    title: "Gestion complète du projet",
    description:
      "Un seul interlocuteur du design à l'installation. Moins de friction, moins d'erreurs, un résultat cohérent avec ce qui a été convenu.",
  },
] as const;

const materialProofItems = [
  "Structure de tiroirs en bois massif de bouleau",
  "Fond de tiroirs en contreplaqué de bouleau",
  "Résistance supérieure au poids et à l'humidité",
  "Meilleure stabilité dimensionnelle dans le temps",
  "Un investissement durable, pas une solution temporaire",
] as const;

const processSteps = [
  {
    step: "01",
    title: "Consultation initiale",
    description:
      "Nous échangeons sur votre projet, vos objectifs, votre budget et votre échéancier.",
  },
  {
    step: "02",
    title: "Design et sélection",
    description:
      "Configuration, matériaux et finitions adaptés à votre espace et à votre mode de vie.",
  },
  {
    step: "03",
    title: "Fabrication contrôlée",
    description:
      "Votre cuisine est fabriquée selon des spécifications précises, avec un contrôle qualité rigoureux.",
  },
  {
    step: "04",
    title: "Coordination et installation",
    description:
      "Installation organisée avec une logique claire. Un seul responsable, moins d'imprévus.",
  },
  {
    step: "05",
    title: "Inspection finale",
    description:
      "Validation complète du résultat et de la cohérence globale du projet avant clôture.",
  },
] as const;

const testimonials = [
  {
    quote:
      "Très impressionnés par la qualité de finition et la gestion du projet. Tout a été plus clair que ce qu'on avait connu auparavant.",
    author: "Client — Montréal",
  },
  {
    quote:
      "Le processus a été structuré du début à la fin. On sent qu'il y a une vraie maîtrise du projet.",
    author: "Client — Laval",
  },
  {
    quote:
      "Les matériaux, la coordination et le résultat final justifient complètement le positionnement haut de gamme.",
    author: "Client — Rive-Sud",
  },
] as const;

const fitItems = [
  "Vous rénovez votre résidence principale et visez un résultat durable",
  "Vous préférez un projet structuré et clé en main",
  "Vous avez déjà vécu une rénovation mal coordonnée",
  "La qualité des matériaux compte autant que le design",
  "Vous voulez un interlocuteur unique tout au long du projet",
  "Votre budget se situe à 30 000 $ ou plus",
] as const;

const faqItems = [
  {
    question: "Quel budget prévoir pour une cuisine sur mesure ?",
    answer:
      "La majorité de nos projets se situent entre 30 000 $ et 60 000 $+, selon la complexité, les matériaux, la configuration et l'ampleur du chantier. Nous clarifions le budget réaliste dès la consultation initiale.",
  },
  {
    question: "Gérez-vous l'ensemble de la rénovation ?",
    answer:
      "Oui. Selon le projet, notre équipe coordonne l'ensemble du mandat — du design à l'installation — afin de limiter les frictions et de mieux maîtriser l'exécution.",
  },
  {
    question: "Dans quelles zones intervenez-vous ?",
    answer:
      "Nous intervenons principalement à Montréal, Laval, sur la Rive-Sud et dans les environs, selon la nature et l'envergure du projet.",
  },
  {
    question: "Combien de temps dure un projet typique ?",
    answer:
      "Le calendrier varie selon le projet, mais les étapes, la logique d'exécution et les délais sont clarifiés dès la phase de planification. Aucune zone grise.",
  },
  {
    question: "Pourquoi choisir le sur mesure plutôt qu'une solution standard ?",
    answer:
      "Une solution standard peut convenir à certains contextes. Mais un projet sur mesure bien exécuté offre une meilleure durabilité, une meilleure cohérence avec votre espace et des matériaux pensés pour le long terme.",
  },
] as const;

const projectTypes = [
  "Cuisine sur mesure",
  "Rénovation de cuisine",
  "Salle de bain",
  "Walk-in / Rangement",
  "Autre projet",
] as const;

const budgetOptions = [
  { value: "30k-50k", label: "30 000 $ – 50 000 $" },
  { value: "50k-70k", label: "50 000 $ – 70 000 $" },
  { value: "70k-100k", label: "70 000 $ – 100 000 $" },
  { value: "100k+", label: "100 000 $ et plus" },
] as const;

/* -------------------------------------------------------------------------- */
/*  HELPERS                                                                   */
/* -------------------------------------------------------------------------- */

function SectionTitle({
  badge,
  title,
  description,
  align = "center",
}: {
  badge?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      }
    >
      {badge ? (
        <Badge
          variant="outline"
          className="mb-4 rounded-full px-4 py-1 text-xs uppercase tracking-[0.18em]"
        >
          {badge}
        </Badge>
      ) : null}

      <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  PAGE                                                                      */
/* -------------------------------------------------------------------------- */

export default function DilamcoLandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* ------------------------------------------------------------------ */}
      {/*  HEADER                                                            */}
      {/* ------------------------------------------------------------------ */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" aria-label="Accueil Dilamco">
            <Image
              src="/images/logo.svg"
              alt="Dilamco"
              width={120}
              height={32}
              className="h-6 w-auto"
              priority
            />
          </Link>

          <div className="hidden items-center gap-4 sm:flex">
            <Link
              href="tel:+15140000000"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              <Phone className="h-4 w-4" />
              <a href="tel:+15148200773">(514) 820-0773</a>
            </Link>

            <Button asChild size="sm" className="rounded-full px-5">
              <a href="#formulaire">Demander une estimation</a>
            </Button>
          </div>

          <Button asChild size="sm" className="rounded-full px-4 sm:hidden">
            <a href="#formulaire">Estimation gratuite</a>
          </Button>
        </div>
      </header>

      {/* ------------------------------------------------------------------ */}
      {/*  HERO                                                              */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--muted))_0%,transparent_45%),radial-gradient(circle_at_bottom_right,hsl(var(--muted))_0%,transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <Badge
              variant="outline"
              className="mb-5 w-fit rounded-full px-4 py-1"
            >
              Cuisines sur mesure — Montréal, Laval, Rive-Sud
            </Badge>

            <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]">
              Votre cuisine sur mesure. Conçue pour durer.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-muted-foreground">
              Design personnalisé, matériaux premium et gestion complète — un
              seul interlocuteur du premier appel à l'installation finale.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3 sm:gap-4">
              {[
                "Fabrication contrôlée",
                "Bois massif de bouleau",
                "Projet clé en main",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-2xl border bg-background/85 px-4 py-3 text-sm font-medium shadow-sm"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-full px-7 text-base"
              >
                <a href="#formulaire">
                  Demander une estimation gratuite
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-7 text-base"
              >
                <a href="#realisations">Voir nos réalisations</a>
              </Button>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Sans engagement
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Réponse en moins de 24h
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Projets à partir de 30 000 $
              </span>
            </div>
          </div>

          <div className="flex items-center">
            <div className="relative w-full min-h-[460px] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/projects/cuisine-haut-de-gamme-blanche-laval.webp"
                alt="Cuisine sur mesure haut de gamme réalisée par Dilamco"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  TRUST BAR                                                         */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-y bg-muted/30">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:px-6 md:grid-cols-4 lg:px-8">
          <div className="flex items-center gap-2 text-sm font-medium">
            <MapPin className="h-4 w-4 shrink-0" />
            Entrepôt local à Montréal
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="h-4 w-4 shrink-0 text-foreground" />
            Relation directe avec l'usine
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-foreground" />
            Fabrication contrôlée
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock3 className="h-4 w-4 shrink-0 text-foreground" />
            Réponse en moins de 24h
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  PAIN → SOLUTION                                                   */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-muted/20 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Ce que la plupart des rénovations de cuisine ont en commun" />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Card className="rounded-3xl border-0 bg-background shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold">
                  Les risques les plus fréquents
                </h3>
                <ul className="mt-6 space-y-4">
                  {risks.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-destructive/50" />
                      <span className="leading-7 text-muted-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-0 bg-background shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold">L'approche Dilamco</h3>
                <ul className="mt-6 space-y-4">
                  {answers.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                      <span className="leading-7 text-muted-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  DIFFERENTIATORS                                                   */}
      {/* ------------------------------------------------------------------ */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle title="Trois raisons concrètes de choisir Dilamco" />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.title}
                className="rounded-3xl border-0 bg-muted/30 shadow-none"
              >
                <CardContent className="p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-background shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  GALLERY                                                           */}
      {/* ------------------------------------------------------------------ */}
      <section id="realisations" className="bg-muted/20 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Quelques réalisations récentes"
            description="Cuisines sur mesure livrées à Montréal, Laval et sur la Rive-Sud."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div
                key={image.src}
                className={`group relative overflow-hidden rounded-2xl ${index === 0
                  ? "sm:col-span-2 min-h-[380px]"
                  : index === 3
                    ? "sm:col-span-2 lg:col-span-2 min-h-[280px]"
                    : "min-h-[280px]"
                  }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes={
                    index === 0
                      ? "(max-width: 768px) 100vw, 66vw"
                      : "(max-width: 768px) 100vw, 33vw"
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-sm font-medium text-white drop-shadow-sm">
                    {image.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  MID-PAGE CTA                                                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-y py-10 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <p className="text-lg font-semibold sm:text-xl">
            Vous avez un projet en tête ?
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Recevez une première estimation en moins de 24 heures. Sans
            engagement.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-5 rounded-full px-7 text-base"
          >
            <a href="#formulaire">
              Demander une estimation gratuite
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  MATERIAL PROOF                                                    */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div>
            <SectionTitle
              badge="Qualité tangible"
              title="Ce qui distingue une cuisine conçue pour durer"
              align="left"
            />

            <p className="mt-6 leading-7 text-muted-foreground">
              La majorité des cuisines standards utilisent des structures en
              mélamine ou en MDF sur les zones les plus sollicitées. Chez
              Dilamco, chaque tiroir repose sur une structure en bois massif de
              bouleau avec un fond en contreplaqué de bouleau — pour une
              robustesse, une stabilité et une longévité supérieures.
            </p>

            <ul className="mt-8 space-y-4">
              {materialProofItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-h-[380px] overflow-hidden rounded-3xl">
            <Image
              src="/images/projects/Signature-Bouleau.webp"
              alt="Structure de tiroir en bois massif de bouleau — qualité Dilamco"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  PROCESS                                                           */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-muted/20 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Notre processus"
            title="De la première conversation à l'installation"
            description="Un processus clair et structuré pour un résultat sans mauvaises surprises."
          />

          <div className="mx-auto mt-12 max-w-6xl">
            <div className="grid gap-6 lg:grid-cols-5">
              {processSteps.map((item, index) => (
                <div key={item.step} className="relative text-center">
                  {index < processSteps.length - 1 && (
                    <div className="absolute top-5 left-[calc(50%+24px)] right-[calc(-50%+24px)] hidden h-px bg-border lg:block" />
                  )}
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-sm font-semibold text-background">
                    {item.step}
                  </div>
                  <h3 className="mt-4 text-sm font-semibold">{item.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground text-balance">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  TESTIMONIALS                                                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle title="Ce que nos clients retiennent" />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card
              key={item.author}
              className="rounded-3xl border-0 bg-muted/30 shadow-none"
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <p className="mt-5 text-base leading-7">
                  &laquo;&nbsp;{item.quote}&nbsp;&raquo;
                </p>
                <p className="mt-5 text-sm font-medium text-muted-foreground">
                  {item.author}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  QUALIFICATION                                                     */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-muted/20 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Ce projet est fait pour vous si..." />

          <div className="mx-auto mt-12 max-w-5xl">
            <Card className="rounded-3xl border-0 bg-background shadow-sm">
              <CardContent className="p-8">
                <ul className="grid gap-5 sm:grid-cols-2">
                  {fitItems.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                      <span className="leading-7">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 rounded-2xl border bg-muted/30 p-5">
                  <p className="text-sm leading-6 text-muted-foreground">
                    Si votre priorité est le prix le plus bas ou une solution
                    temporaire, notre approche n'est probablement pas la mieux
                    adaptée. Nous concevons des cuisines durables — et cette
                    qualité a un coût justifié.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  FAQ                                                               */}
      {/* ------------------------------------------------------------------ */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle title="Questions fréquentes" />

        <Accordion
          type="single"
          collapsible
          className="mt-10 rounded-3xl border px-6"
        >
          {faqItems.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-7 text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  FORM                                                              */}
      {/* ------------------------------------------------------------------ */}
      <section
        id="formulaire"
        className="bg-foreground py-20 text-background"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <Badge className="rounded-full bg-background/10 px-4 py-1 text-background hover:bg-background/10">
              Commencez votre projet
            </Badge>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Recevez une estimation personnalisée
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-background/80">
              Décrivez votre projet en quelques minutes. Notre équipe vous
              contacte en moins de 24 heures avec une première évaluation et les
              prochaines étapes.
            </p>

            <div className="mt-8 space-y-4">
              <p className="text-sm font-medium text-background/90">
                En soumettant votre projet, vous recevez :
              </p>
              {[
                "Une première estimation budgétaire réaliste",
                "Une validation de la faisabilité",
                "Des recommandations sur les matériaux adaptés",
                "Les prochaines étapes claires et sans pression",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-background/80"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <Card className="rounded-3xl border-0 bg-background text-foreground shadow-2xl">
            <CardContent className="p-6 sm:p-8">
              <form className="grid gap-5 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="name">Nom complet</Label>
                  <Input id="name" placeholder="Votre nom" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input id="phone" placeholder="(514) 000-0000" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Courriel</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="vous@exemple.com"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="city">Ville</Label>
                  <Input id="city" placeholder="Montréal, Laval, Brossard..." />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="project-type">Type de projet</Label>
                  <select
                    id="project-type"
                    className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Sélectionnez un type
                    </option>
                    {projectTypes.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="budget">Budget estimé</Label>
                  <select
                    id="budget"
                    className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Sélectionnez une fourchette
                    </option>
                    {budgetOptions.map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-2 md:col-span-2">
                  <Label htmlFor="description">
                    Décrivez brièvement votre projet
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Vos objectifs, votre échéancier, toute information utile..."
                    className="min-h-[110px]"
                  />
                </div>

                <div className="md:col-span-2">
                  <Button size="lg" className="w-full rounded-full text-base">
                    Envoyer ma demande
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <p className="mt-3 text-center text-xs leading-5 text-muted-foreground">
                    En soumettant ce formulaire, vous acceptez d'être contacté au
                    sujet de votre projet. Sans engagement.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>


      {/* ------------------------------------------------------------------ */}
      {/*  FOOTER                                                            */}
      {/* ------------------------------------------------------------------ */}
      <footer className="border-t">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 text-sm text-muted-foreground sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <Link href="/" aria-label="Accueil Dilamco">
            <Image
              src="/images/logo.svg"
              alt="Dilamco"
              width={80}
              height={22}
              className="h-6 w-auto"
              priority
            />
          </Link>
          <div><a href="tel:+15148200773">(514) 820-0773</a></div>
          <div>Montréal, Laval, Rive-Sud</div>
          <div>Licence RBQ : 8306-0806-27</div>
        </div>
      </footer>

      {/* ------------------------------------------------------------------ */}
      {/*  MOBILE STICKY CTA                                                 */}
      {/* ------------------------------------------------------------------ */}
      <div className="fixed inset-x-0 py-4 bottom-0 border-t z-50 px-4 sm:hidden bg-white">
        <Button asChild size="lg" className="h-12 w-full rounded-full shadow-2xl">
          <a href="#formulaire">Demander une estimation gratuite</a>
        </Button>
      </div>
    </main>
  );
}
