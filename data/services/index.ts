// data/services/index.ts
// Main entry point - re-exports everything for backward compatibility

// Types
export type {
  ServiceSlug,
  RenovationType,
  ServiceLink,
  FAQItem,
  ServiceSection,
  ServiceData,
  RenovationSubServiceData,
} from "./types";

// Constants
export { SITE_URL } from "./constants";

// Main services
export { SERVICES } from "./main";

// Renovation sub-services
export { RENOVATION_SUB_SERVICES } from "./renovation";

// Utils
export {
  getServiceBySlug,
  getServiceCanonicalUrl,
  getRenovationSubServiceByType,
} from "./utils";
