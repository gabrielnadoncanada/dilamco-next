import { SITE_URL } from "@/constants/site";
import type { ServiceData } from "@/types/service-pages";

export const RENOVATION_SERVICE_PAGE: ServiceData = {
  slug: "renovation",
  metadata: {
    title: "Rénovation clé en main",
    description:
      "Rénovation clé en main : coordination et exécution lorsque le projet implique plusieurs corps de métier. Réduire les imprévus et livrer un résultat cohérent Ã  Montréal, Laval et sur la Rive-Sud.",
    canonical: `${SITE_URL}/services/renovation/`,
  },
  hero: {
    h1: "Rénovation clé en main",
    paragraphs: [
      "Coordination des travaux connexes au besoin (plomberie, électricité, plancher, etc.).",
    ],
    ctaLinks: [{ title: "Soumission", href: "/contact/" }],
  },
  sections: [],
  faq: [],
  jsonLd: {
    name: "Rénovation clé en main",
    description:
      "Coordination et exécution lorsque le projet implique plusieurs corps de métier.",
    serviceType: "Rénovation",
  },
};
