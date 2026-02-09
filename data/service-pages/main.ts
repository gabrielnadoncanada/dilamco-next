// data/service-pages/main.ts
// Main services data

import type { ServiceData } from "./types";
import { DESIGN_SERVICE_PAGE } from "@/data/service-pages/services/design";
import { FABRICATION_SERVICE_PAGE } from "@/data/service-pages/services/fabrication";
import { INSTALLATION_SERVICE_PAGE } from "@/data/service-pages/services/installation";
import { RENOVATION_SERVICE_PAGE } from "@/data/service-pages/services/renovation";

export const SERVICES: ServiceData[] = [
  DESIGN_SERVICE_PAGE,
  FABRICATION_SERVICE_PAGE,
  INSTALLATION_SERVICE_PAGE,
  RENOVATION_SERVICE_PAGE,
];
