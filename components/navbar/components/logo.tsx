import { AppLink as Link } from "@/components/AppLink";
import type { LogoConfig } from "../navbar.types";
import { LOGO } from "../navbar.constants";

interface LogoProps {
  logo?: LogoConfig;
}

export function Logo({ logo }: LogoProps) {
  const logoConfig = logo || LOGO;

  return (
    <Link
      href="/"
      className="flex max-h-8 items-center gap-2 text-lg font-semibold tracking-tighter"
    >
      <img
        src={logoConfig.src}
        alt={logoConfig.alt}
        className="inline-block w-30"
      />
      <span className="sr-only">{logoConfig.title}</span>
    </Link>
  );
}
