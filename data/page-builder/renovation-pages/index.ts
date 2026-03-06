import { agrandissementMaisonPage } from "./agrandissement-de-maison";
import { renovationCuisinePage } from "./cuisine";
import { renovationPlancherPage } from "./plancher";
import { renovationSalleDeBainPage } from "./salle-de-bain";

const renovationPages = {
  cuisine: renovationCuisinePage,
  "salle-de-bain": renovationSalleDeBainPage,
  plancher: renovationPlancherPage,
  "agrandissement-de-maison": agrandissementMaisonPage,
};

export const PUBLIC_RENOVATION_PAGE_TYPES = Object.keys(renovationPages);

export function getRenovationPageByType(type: string) {
  return renovationPages[type as keyof typeof renovationPages] ?? null;
}
