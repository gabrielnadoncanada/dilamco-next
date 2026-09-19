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
      className="flex items-center rounded-sm focus-ring"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logoConfig.src}
        alt={logoConfig.alt}
        width={128}
        height={32}
        className="block h-5 w-auto md:h-[22px]"
      />
      <span className="sr-only">{logoConfig.title}</span>
    </Link>
  );
}
