// data/service-pages/renovation.ts
// Renovation sub-services data

import type { RenovationType, RenovationSubServiceData } from "./types";
import { CUISINE_RENOVATION_PAGE } from "@/data/service-pages/renovation-pages/cuisine";
import { SALLE_DE_BAIN_RENOVATION_PAGE } from "@/data/service-pages/renovation-pages/salle-de-bain";
import { PLANCHER_RENOVATION_PAGE } from "@/data/service-pages/renovation-pages/plancher";
import { AGRANDISSEMENT_DE_MAISON_RENOVATION_PAGE } from "@/data/service-pages/renovation-pages/agrandissement-de-maison";

export const RENOVATION_SUB_SERVICES: Record<RenovationType, RenovationSubServiceData> = {
  "cuisine": CUISINE_RENOVATION_PAGE,
  "salle-de-bain": SALLE_DE_BAIN_RENOVATION_PAGE,
  "plancher": PLANCHER_RENOVATION_PAGE,
  "agrandissement-de-maison": AGRANDISSEMENT_DE_MAISON_RENOVATION_PAGE
};
