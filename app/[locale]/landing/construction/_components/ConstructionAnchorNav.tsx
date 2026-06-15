import { FORM_ANCHOR } from "./constants";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Processus", href: "#processus" },
  { label: "Réalisations", href: "#realisations" },
  { label: "FAQ", href: "#faq" },
] as const;

export function ConstructionAnchorNav() {
  return (
    <nav className="sticky top-16 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-12 max-w-7xl items-center gap-6 overflow-x-auto px-4 text-sm sm:px-6 lg:px-8">
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground"
          >
            {label}
          </a>
        ))}

        <a
          href={`#${FORM_ANCHOR}`}
          className="ml-auto whitespace-nowrap font-semibold text-primary"
        >
          Soumission
        </a>
      </div>
    </nav>
  );
}
