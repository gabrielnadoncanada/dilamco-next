import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Wrappers locale-aware de Link / usePathname / useRouter / redirect.
// Respectent localePrefix "as-needed" (FR sans préfixe, EN sous /en).
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
