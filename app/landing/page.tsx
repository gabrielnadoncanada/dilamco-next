import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Warehouse,
  Wrench,
  MapPin,
  Star,
  Quote,
} from "lucide-react";

import { LandingHeader } from "./landing-header";
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
  "Votre budget se situe à 20 000 $ ou plus",
] as const;

const faqItems = [
  {
    question: "Quel budget prévoir pour une cuisine sur mesure ?",
    answer:
      "La majorité de nos projets se situent entre 20 000 $ et 60 000 $+, selon la complexité, les matériaux, la configuration et l'ampleur du chantier. Nous clarifions le budget réaliste dès la consultation initiale.",
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
    question:
      "Pourquoi choisir le sur mesure plutôt qu'une solution standard ?",
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
  { value: "30k-50k", label: "20 000 $ – 50 000 $" },
  { value: "50k-70k", label: "50 000 $ – 70 000 $" },
  { value: "70k-100k", label: "70 000 $ – 100 000 $" },
  { value: "100k+", label: "100 000 $ et plus" },
] as const;

/* -------------------------------------------------------------------------- */
/*  PAGE                                                                      */
/* -------------------------------------------------------------------------- */

export default function DilamcoLandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <LandingHeader />

      {/* ------------------------------------------------------------------ */}
      {/*  HERO — Full-bleed cinematic                                       */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative min-h-[92vh] overflow-hidden bg-foreground">
        {/* Background image */}
        <Image
          src="/images/projects/cuisine-haut-de-gamme-blanche-laval.webp"
          alt="Cuisine sur mesure haut de gamme réalisée par Dilamco"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 85% 20%, rgba(255,255,255,0.06), transparent 42%)" }} />

        {/* Content */}
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm">
              <MapPin className="h-3.5 w-3.5 text-white/70" />
              Montréal, Laval, Rive-Sud
            </div>

            <h1
              className="mt-7 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
              style={{ textShadow: "0 2px 14px rgba(0,0,0,0.20)" }}
            >
              Votre cuisine sur mesure.{" "}
              <span className="text-white">Conçue pour durer.</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-white/75">
              Design personnalisé, matériaux premium et gestion complète — un
              seul interlocuteur du premier appel à l&apos;installation finale.
            </p>



            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-white px-8 text-base font-semibold text-foreground shadow-lg transition-all hover:bg-white/90"
              >
                <a href="#formulaire">
                  Demander une estimation gratuite
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                className="rounded-full border-white/25 bg-white/10 px-8 text-base font-medium text-white backdrop-blur-sm hover:bg-white/20"
              >
                <a href="#realisations">Voir nos réalisations</a>
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/50">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                Sans engagement
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                Réponse en moins de 24h
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                Projets à partir de 20 000 $
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  TRUST BAR                                                         */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-b bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-5 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            "Entrepôt local à Montréal",
            "Relation directe usine",
            "Fabrication contrôlée",
            "Réponse en 24h",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2.5 text-sm">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/30" />
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  PAIN → SOLUTION                                                   */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Ce que la plupart des rénovations de cuisine ont en commun
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {/* Risks card */}
            <Card className="rounded-3xl border shadow-none">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold">
                  Les risques les plus fréquents
                </h3>
                <ul className="mt-6 space-y-4">
                  {risks.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/25" />
                      <span className="leading-7 text-muted-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Solution card */}
            <Card className="rounded-3xl border shadow-none">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold">L&apos;approche Dilamco</h3>
                <ul className="mt-6 space-y-4">
                  {answers.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-foreground/40" />
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
      <section className="border-y bg-[var(--surface-tint-bg)] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Trois raisons concrètes de choisir Dilamco
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {differentiators.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="group rounded-3xl border border-border/60 bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <CardContent className="p-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground/[0.04] transition-colors duration-300 group-hover:bg-foreground/[0.07]">
                      <Icon className="h-7 w-7 text-foreground/50" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  GALLERY — Dark background for dramatic contrast                   */}
      {/* ------------------------------------------------------------------ */}
      <section id="realisations" className="border-y py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Nos réalisations
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Quelques projets récents
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
              Cuisines sur mesure livrées à Montréal, Laval et sur la Rive-Sud.
            </p>
          </div>

          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div
                key={image.src}
                className={`group relative overflow-hidden rounded-2xl ring-1 ring-border transition-all duration-500 hover:ring-foreground/20 ${index === 0
                  ? "sm:col-span-2 min-h-[420px]"
                  : index === 3
                    ? "sm:col-span-2 lg:col-span-1 min-h-[300px]"
                    : "min-h-[300px]"
                  }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes={
                    index === 0
                      ? "(max-width: 768px) 100vw, 66vw"
                      : "(max-width: 768px) 100vw, 33vw"
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity duration-500 group-hover:from-black/60" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-sm font-medium text-white">
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
      <section className="border-b bg-muted/50 py-14">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 px-4 text-center">
          <div>
            <p className="text-xl font-semibold sm:text-2xl">
              Vous avez un projet en tête ?
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Recevez une première estimation en moins de 24 heures. Sans
              engagement.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
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
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="flex flex-col justify-center">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Qualité tangible
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Ce qui distingue une cuisine conçue pour durer
            </h2>

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
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-foreground/40" />
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="relative min-h-[420px] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-border">
              <Image
                src="/images/projects/Signature-Bouleau.webp"
                alt="Structure de tiroir en bois massif de bouleau — qualité Dilamco"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  PROCESS                                                           */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-y bg-[var(--surface-tint-bg)] py-24">
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

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid gap-8 md:grid-cols-5">
              {processSteps.map((item, index) => (
                <div key={item.step} className="relative text-center">
                  {index < processSteps.length - 1 && (
                    <div className="absolute top-6 left-[calc(50%+28px)] right-[calc(-50%+28px)] hidden h-px bg-border md:block" />
                  )}
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border bg-background text-sm font-bold text-foreground">
                    {item.step}
                  </div>
                  <h3 className="mt-5 text-sm font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">
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
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Ce que nos clients retiennent
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
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

      {/* ------------------------------------------------------------------ */}
      {/*  QUALIFICATION                                                     */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-y bg-[var(--surface-tint-bg)] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Ce projet est fait pour vous si...
            </h2>
          </div>

          <div className="mx-auto mt-14 max-w-5xl">
            <Card className="rounded-3xl border bg-background shadow-sm">
              <CardContent className="p-8 sm:p-10">
                <ul className="grid gap-5 sm:grid-cols-2">
                  {fitItems.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-foreground/40" />
                      <span className="leading-7">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 rounded-2xl border border-border/60 bg-muted/40 p-6">
                  <p className="text-sm leading-6 text-muted-foreground">
                    Si votre priorité est le prix le plus bas ou une solution
                    temporaire, notre approche n&apos;est probablement pas la mieux
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
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Questions fréquentes
            </h2>
          </div>

          <Accordion
            type="single"
            collapsible
            className="mt-12 rounded-3xl border px-6"
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
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  FORM                                                              */}
      {/* ------------------------------------------------------------------ */}
      <section id="formulaire" className="border-t bg-[var(--surface-tint-bg)] py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Commencez votre projet
            </p>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
              Recevez une estimation personnalisée
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
              Décrivez votre projet en quelques minutes. Notre équipe vous
              contacte en moins de 24 heures avec une première évaluation et les
              prochaines étapes.
            </p>

            <div className="mt-10 space-y-4">
              <p className="text-sm font-semibold">
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
                  className="flex items-center gap-2.5 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-foreground/40" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <Card className="rounded-3xl border bg-background shadow-lg">
            <CardContent className="p-6 sm:p-8">
              <form className="grid gap-5 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="name">Nom complet</Label>
                  <Input id="name" placeholder="Votre nom" className="rounded-xl" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input id="phone" placeholder="(514) 000-0000" className="rounded-xl" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Courriel</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="vous@exemple.com"
                    className="rounded-xl"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="city">Ville</Label>
                  <Input id="city" placeholder="Montréal, Laval, Brossard..." className="rounded-xl" />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="project-type">Type de projet</Label>
                  <select
                    id="project-type"
                    className="flex h-10 w-full rounded-xl border bg-background px-3 py-2 text-sm"
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
                    className="flex h-10 w-full rounded-xl border bg-background px-3 py-2 text-sm"
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
                    className="min-h-[110px] rounded-xl"
                  />
                </div>

                <div className="md:col-span-2">
                  <Button
                    size="lg"
                    className="w-full rounded-full bg-primary text-base font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 hover:shadow-xl"
                  >
                    Envoyer ma demande
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <p className="mt-3 text-center text-xs leading-5 text-muted-foreground">
                    En soumettant ce formulaire, vous acceptez d&apos;être contacté au
                    sujet de votre projet. Sans engagement.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  FINAL CTA                                                         */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto mb-6 h-px w-16 bg-foreground/20" />
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
            Notre équipe analyse votre projet et vous revient en moins de 24
            heures avec une estimation claire et les prochaines étapes.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
          >
            <a href="#formulaire">Demander mon estimation gratuite</a>
          </Button>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  FOOTER                                                            */}
      {/* ------------------------------------------------------------------ */}
      <footer className="border-t">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 text-sm text-muted-foreground sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div className="font-semibold text-foreground">Dilamco</div>
          <div>(514) 820-0773</div>
          <div>Montréal, Laval, Rive-Sud</div>
          <div>Licence RBQ | Politique de confidentialité</div>
        </div>
      </footer>

      {/* ------------------------------------------------------------------ */}
      {/*  MOBILE STICKY CTA                                                 */}
      {/* ------------------------------------------------------------------ */}
      <div className="fixed inset-x-0 bottom-4 z-50 px-4 sm:hidden">
        <Button
          asChild
          size="lg"
          className="h-12 w-full rounded-full bg-primary font-semibold text-primary-foreground shadow-2xl hover:bg-primary/90"
        >
          <a href="#formulaire">Demander une estimation gratuite</a>
        </Button>
      </div>
    </main>
  );
}
