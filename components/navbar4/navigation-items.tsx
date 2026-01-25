import { SolutionsMenu } from "./menus/SolutionsMenu";
import { ProductsMenu } from "./menus/ProductsMenu";
import { GlobalGuidanceMenu } from "./menus/GlobalGuidanceMenu";
import { PartnersMenu } from "./menus/PartnersMenu";
import { ResourcesMenu } from "./menus/ResourcesMenu";

export const navigationMenuItems = [
  {
    key: "solutions",
    label: "Solutions",
    component: SolutionsMenu,
  },
  {
    key: "products",
    label: "Products",
    component: ProductsMenu,
  },
  {
    key: "global",
    label: "Company",
    component: GlobalGuidanceMenu,
  },
  {
    key: "partners",
    label: "Partners",
    component: PartnersMenu,
  },
  {
    key: "resources",
    label: "Resources",
    component: ResourcesMenu,
  },
] as const;
