// `[libellé](/chemin)` ou `**gras**`. Le libellé d'un lien peut contenir du gras.
export const INLINE_TOKEN_RE = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;

/** Texte brut (sans marquage) : table des matières, ancres, comptage de mots. */
export function stripInline(text: string): string {
  return text.replace(INLINE_TOKEN_RE, (_m, label, _href, bold) => bold ?? label);
}

/** Ancre stable dérivée d'un titre : « Combien ça coûte ? » → combien-ca-coute */
export function slugifyHeading(text: string): string {
  return stripInline(text)
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 64);
}
