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
import { GridImageCardsSlider } from "@/features/page-builder/sections/grid/variants/image-cards-slider/ui";

/* -------------------------------------------------------------------------- */
/*  DATA                                                                      */
/* -------------------------------------------------------------------------- */

const galleryImages = [
  {
    src: "/images/projects/chene-moderne.webp",
    title: "Cuisine chêne moderne, Montréal",
    alt: "Cuisine moderne en chêne sur mesure à Montréal",
  },
  {
    src: "/images/projects/Signature-Bouleau.webp",
    title: "Cuisine sur mesure, Brossard",
    alt: "Cuisine blanche sur mesure haut de gamme livrée à Brossard",
  },
  {
    src: "/images/projects/cuisine-haut-de-gamme-blanche-laval-1.webp",
    title: "Cuisine haut de gamme, Laval",
    alt: "Cuisine blanche haut de gamme sur mesure réalisée à Laval",
  },

  {
    src: "/images/projects/project11.webp",
    title: "Réalisation sur mesure, Rive-Sud",
    alt: "Projet cuisine sur mesure haut de gamme sur la Rive-Sud",
  },
] as const;


const risks = [
  "Trop de monde sur le projet, personne responsable",
  "Délais qui s’allongent",
  "Des armoires qui ne tiennent pas dans le temps",
  "Budget qui dépasse la soumission initiale",
  "Difficile de juger la qualité avant de payer",
  "Un projet mal planifié dès le départ",
] as const;

const answers = [
  "Un seul responsable du début à la fin",
  "Un échéancier clair et respecté",
  "Caisson de qualité en contreplaqué",
  "Budget clair dès le départ",
  "Matériaux réels que vous pouvez voir",
  "Projet bien planifié avant de commencer",
] as const;

const differentiators = [
  {
    icon: Warehouse,
    title: "Experts depuis plus de 20 ans",
    description:
      "Basé à Montréal, Dilamco a réalisé des centaines de projets résidentiels. Une expérience concrète qui permet d’éviter les erreurs et de livrer des projets solides et bien exécutés.",
  },
  {
    icon: ShieldCheck,
    title: "Matériaux de qualité",
    description:
      "Caissons en contreplaqué, l’un des matériaux les plus durables pour des armoires conçues pour durer des décennies.",
  },
  {
    icon: Wrench,
    title: "Gestion complète du projet",
    description:
      "Un seul interlocuteur du design à l'installation. Moins de friction, moins d'erreurs, un résultat cohérent avec ce qui a été convenu.",
  },
] as const;


const materialProofItems = [
  "Structure plus rigide et plus stable",
  "Meilleure tenue des vis et des charnières",
  "Résiste mieux à l’humidité",
  "Finition intérieure solide et durable",
] as const;


const materialProofItems2 = [
  "Tiroirs qui glissent bien, sans affaissement",
  "Portes qui restent bien alignées",
  "Surfaces plus résistantes aux chocs et aux dommages",
  "Des armoires qui gardent leur apparence pendant des années",
] as const;


const materialProofItems3 = [
  "Panneaux en mélamine qui gonflent ou s’écaillent",
  "Armoires fragiles qui perdent leur forme",
  "Vis et charnières qui se desserrent avec le temps",
  "Finitions qui s’usent trop rapidement",
] as const;

const processSteps = [
  {
    step: "01",
    title: "Consultation initiale",
    description:
      "Nous échangeons sur votre projet, vos objectifs, votre budget et votre échéancier.",
    image: {
      src: "/images/process1.jpg",
      alt: "Consultation initiale",
    },
  },
  {
    step: "02",
    title: "Design et sélection",
    description:
      "Configuration, matériaux et finitions adaptés à votre espace et à votre mode de vie.",
    image: {
      src: "/images/process2.jpg",
      alt: "Design et sélection",
    },
  },
  {
    step: "03",
    title: "Fabrication sur mesure",
    description:
      "Votre cuisine est fabriquée selon des spécifications précises, avec un contrôle qualité rigoureux.",
    image: {
      src: "/images/process3.jpg",
      alt: "Fabrication sur mesure",
    },
  },
  {
    step: "04",
    title: "Démolition et rénovation",
    description:
      "Retrait des anciens cabinets et travaux connexes (plomberie, électricité, structure, plancher, etc.)",
    image: {
      src: "/images/process4.jpg",
      alt: "Démolition et rénovation",
    },
  },
  {
    step: "05",
    title: "Installation et finition",
    description:
      "Validation complète du résultat et de la cohérence globale du projet avant clôture.",
    image: {
      src: "/images/process5.jpg",
      alt: "Inspection finale",
    },
  },
] as const;

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

const fitItems = [
  "Vous rénovez votre résidence et visez un résultat durable.",
  "Vous préférez un projet structuré et clé en main.",
  "Vous avez déjà vécu une rénovation mal coordonnée.",
  "La qualité des matériaux compte autant que le design.",
  "Vous voulez un interlocuteur unique tout au long du projet.",
  "Votre budget se situe à 20 000 $ ou plus.",
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
      "Oui. Selon le projet, notre équipe coordonne l'ensemble du mandat, du design à l'installation, afin de limiter les frictions et de mieux maîtriser l'exécution.",
  },
  {
    question: "Dans quelles zones intervenez-vous ?",
    answer:
      "Nous réalisons des projets dans tout le Grand Montréal, notamment à Montréal, Laval, Longueuil, Brossard, Boucherville, Saint-Bruno, Terrebonne, Repentigny, Vaudreuil-Dorion, et plus encore!",
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
  { value: "20k-40k", label: "20 000 $ – 40 000 $" },
  { value: "40k-60k", label: "40 000 $ – 60 000 $" },
  { value: "60k-80k", label: "60 000 $ – 80 000 $" },
  { value: "80k-100k", label: "80 000 $ – 100 000 $" },
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
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/85 backdrop-blur-sm">
              <MapPin className="h-3.5 w-3.5 text-white/70" />
              Grand Montréal et les environs
            </div>

            <h1
              className="mt-7 text-4xl font-semibold leading-[1.1] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl"
              style={{ textShadow: "0 2px 14px rgba(0,0,0,0.20)" }}
            >
              Les cuisines sur mesure les plus durables du marché.

            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-white/85">
              Entrepreneur général de +20 ans d’expérience qui gère l’ensemble du projet, de la conception à l’installation, incluant la coordination de tous les travaux de rénovation requis.
            </p>



            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 text-base font-semibold shadow-lg transition-all "
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

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/85">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-white/85" />
                Soumission gratuire en moins de 24h
              </span>

              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-white/85" />
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
            "Qualité et durabilité garanties",
            "Fabrication sur mesure",
            "Soumission gratuite en 24h",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2.5 text-sm">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
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
              <CardContent className="p-8 pt-4">
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
              <CardContent className="p-8 pt-4">
                <h3 className="text-xl font-semibold">L&apos;approche Dilamco</h3>
                <ul className="mt-6 space-y-4">
                  {answers.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-foreground/60" />
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
      {/*  MID-PAGE CTA                                                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-b bg-muted/50 py-14">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 px-4 text-center">
          <div>
            <p className="text-xl font-semibold sm:text-2xl">
              Discutons de votre projet
            </p>
            <p className="mt-2 text-sm text-muted-foreground text-balance">
              Rénovation, construction ou agrandissement : obtenez une estimation
              claire et rapide pour planifier votre projet en toute confiance.
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
      {/*  GALLERY — Dark background for dramatic contrast                   */}
      {/* ------------------------------------------------------------------ */}
      <section id="realisations" className="border-y py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Nos réalisations
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Cuisines sur mesure, signé Dilamco

            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
              Des projets conçus pour durer et adaptés à chaque espace.
            </p>
          </div>

          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div
                key={image.src}
                className={`group relative overflow-hidden rounded-2xl ring-1 ring-border transition-all duration-500 hover:ring-foreground/20 ${index === 0
                  ? "sm:col-span-2 min-h-[420px]"
                  : index === 3
                    ? "sm:col-span-2 lg:col-span-2 min-h-[300px]"
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
              Besoin d’une estimation claire et rapide ?
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
      {/*  WHY CONTREPLACQUÉ                                                    */}
      {/* ------------------------------------------------------------------ */}
      <section className="pt-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Pourquoi le contreplaqué ?
            </h2>
            <ul className="mt-8 space-y-4">
              {materialProofItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-foreground/60" />
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative max-lg:order-first">
            <div className="relative min-h-[420px] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-border">
              <Image
                src="/images/contreplaque1.jpg"
                alt="Structure de tiroir en bois massif de bouleau, qualité Dilamco"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  WHAT YOU GAIN                                                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="pt-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="relative">
            <div className="relative min-h-[420px] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-border">
              <Image
                src="/images/contreplaque.jpg"
                alt="Structure de tiroir en bois massif de bouleau, qualité Dilamco"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Ce que vous gagnez
            </h2>
            <ul className="mt-8 space-y-4">
              {materialProofItems2.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-foreground/60" />
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  WHAT YOU AVOID                                                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Ce que vous évitez
            </h2>
            <ul className="mt-8 space-y-4">
              {materialProofItems3.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-foreground/60" />
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative max-lg:order-first">
            <div className="relative min-h-[420px] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-border">
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

          <div className="mx-auto mt-6 max-w-5xl">
            <GridImageCardsSlider
              hasNavigation={false}
              items={processSteps.map((item) => ({
                title: item.title,
                description: item.description,
                image: {
                  src: item.image.src,
                  alt: item.image.alt,
                },
              }))}
            >
            </GridImageCardsSlider>
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
              Obtenez une estimation claire
            </p>
            <p className="mt-2 text-sm text-muted-foreground text-balance">
              Que ce soit pour rénover, construire ou agrandir, nous vous répondons
              rapidement avec une estimation adaptée à vos besoins.
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
      {/*  TESTIMONIALS                                                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-24">
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

          <div className="mx-auto mt-14 max-w-7xl grid gap-6 lg:grid-cols-12">
            <Card className="rounded-3xl border bg-background shadow-sm col-span-12 lg:col-span-7">
              <CardContent className="px-8 pt-8  sm:p-10 sm:px-10">
                <ul className="grid gap-5 sm:grid-cols-2">
                  {fitItems.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-foreground/60" />
                      <span className="leading-7">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-2xl border border-border/60 bg-muted/40 p-6">
                  <p className="text-sm leading-6 text-muted-foreground">
                    Si votre priorité est le prix le plus bas ou une solution
                    temporaire, notre approche n&apos;est probablement pas la mieux
                    adaptée. Nous concevons des cuisines durables, et cette
                    qualité a un coût justifié.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="relative col-span-12 lg:col-span-5">
              <div className="relative max-lg:aspect-video min-h-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-border">
                <Image
                  src="/images/generated/home/home-featured-cuisine-project-01.webp"
                  alt="Structure de tiroir en bois massif de bouleau, qualité Dilamco"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
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
                "Les prochaines étapes claires et sans pression",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-foreground/60" />
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
                    Obtenir ma soumission
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
      {/*  FOOTER                                                            */}
      {/* ------------------------------------------------------------------ */}
      <footer className="border-t">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 text-sm text-muted-foreground sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div> <a href="tel:+15148200773">(514) 820-0773</a></div>
          <div> <a href="mailto:ventes@dilamco.com">ventes@dilamco.com</a></div>
          <div>Grand Montréal et les environs</div>
          <div>Licence RBQ : 8306-0806-27 </div>
        </div>
      </footer>

      {/* ------------------------------------------------------------------ */}
      {/*  MOBILE STICKY CTA                                                 */}
      {/* ------------------------------------------------------------------ */}
      <div className="fixed inset-x-0 bottom-0 py-4 bg-white border-t z-50 px-4 sm:hidden">
        <Button
          asChild
          size="lg"
          className="h-12 w-full rounded-full bg-primary font-semibold text-primary-foreground shadow-2xl hover:bg-primary/90"
        >
          <a href="#formulaire">Obtenir ma soumission</a>
        </Button>
      </div>
    </main>
  );
}
