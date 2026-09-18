import { getLocale } from "next-intl/server";

import { AppLink as Link } from "@/components/AppLink";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Heading } from "@/components/elements/heading";
import { Button, ButtonArrow } from "@/components/ui/button";

const COPY = {
  fr: {
    kicker: "Erreur 404",
    title: "Cette page n'existe plus.",
    body: "Le lien est peut-être ancien. Les pages les plus utiles sont juste ici.",
    home: "Retour à l'accueil",
    quote: "Soumission gratuite",
    links: [
      { label: "Rénovation clé en main", href: "/services/renovation" },
      { label: "Zones desservies", href: "/zones" },
      { label: "Nos réalisations", href: "/projets" },
      { label: "À propos", href: "/a-propos" },
    ],
  },
  en: {
    kicker: "Error 404",
    title: "This page no longer exists.",
    body: "The link may be out of date. The most useful pages are right here.",
    home: "Back to home",
    quote: "Free estimate",
    links: [
      { label: "Turnkey renovation", href: "/services/renovation" },
      { label: "Areas served", href: "/zones" },
      { label: "Our work", href: "/projets" },
      { label: "About", href: "/a-propos" },
    ],
  },
} as const;

export default async function NotFound() {
  const locale = (await getLocale()) === "en" ? "en" : "fr";
  const t = COPY[locale];

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-[1440px] px-[clamp(20px,1rem,56px)] py-[var(--section-py-spacious)] max-[700px]:px-[18px]">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-label text-primary">{t.kicker}</p>
            <Heading as="h1" variant="display" className="mt-4">
              {t.title}
            </Heading>
            <p className="text-lead mt-5">{t.body}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="xl">
                <Link href="/">
                  {t.home}
                  <ButtonArrow />
                </Link>
              </Button>
              <Button asChild size="xl" variant="ghost">
                <Link href="/contact">{t.quote}</Link>
              </Button>
            </div>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-5">
            {t.links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="flex h-full items-center justify-between gap-3 rounded-card border border-border/80 bg-card px-5 py-4 font-display text-[length:var(--title-5)] font-semibold tracking-[-0.015em] transition-ui focus-ring hover:border-primary hover:bg-primary-soft"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer showReviews={false} />
    </>
  );
}
