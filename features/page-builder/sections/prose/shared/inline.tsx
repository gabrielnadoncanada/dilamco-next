import { Fragment, type ReactNode } from "react";

import { AppLink as Link } from "@/components/AppLink";

import { INLINE_TOKEN_RE } from "./inline-text";

const linkClassName =
  "font-medium text-primary underline decoration-primary/35 underline-offset-4 transition-ui hover:decoration-primary focus-ring rounded-[2px]";

/**
 * Rend le texte en ligne d'un bloc `prose` : liens internes (localisés par
 * AppLink), liens externes (nouvel onglet, rel noopener) et gras. Aucun HTML
 * n'est interprété : le contenu reste des données JSON sûres.
 */
export function renderInline(text: string): ReactNode {
  const out: ReactNode[] = [];
  let last = 0;
  let key = 0;

  for (const m of text.matchAll(INLINE_TOKEN_RE)) {
    const index = m.index ?? 0;
    if (index > last) out.push(text.slice(last, index));

    const [, label, href, bold] = m;
    if (bold) {
      out.push(
        <strong key={key++} className="font-semibold text-foreground">
          {bold}
        </strong>,
      );
    } else if (label && href) {
      const isExternal = /^https?:\/\//.test(href);
      out.push(
        isExternal ? (
          <a
            key={key++}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
          >
            {renderInline(label)}
          </a>
        ) : (
          <Link key={key++} href={href} className={linkClassName}>
            {renderInline(label)}
          </Link>
        ),
      );
    }
    last = index + m[0].length;
  }

  if (last < text.length) out.push(text.slice(last));
  return out.length === 1 ? out[0] : <Fragment>{out}</Fragment>;
}
