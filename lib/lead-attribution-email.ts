import { z } from "zod";

// Lecture côté serveur du champ caché `attribution` (voir lib/lead-attribution.ts)
// et mise en forme pour le courriel de demande. Tolérant : un champ absent ou
// invalide donne simplement « inconnue », jamais une erreur de formulaire.

const touchSchema = z.object({
  landing: z.string().max(500),
  referrer: z.string().max(500),
  params: z.record(z.string(), z.string().max(200)),
  at: z.string().max(40),
});

const attributionSchema = z.object({
  first: touchSchema.optional(),
  session: touchSchema.optional(),
  replay: z.url().max(500).optional(),
});

type Touch = z.infer<typeof touchSchema>;

const REFERRER_SOURCES: Array<[RegExp, string]> = [
  [/(^|\.)google\./, "Google (recherche)"],
  [/(^|\.)bing\.com$/, "Bing (recherche)"],
  [/(^|\.)duckduckgo\.com$/, "DuckDuckGo (recherche)"],
  [/(^|\.)yahoo\./, "Yahoo (recherche)"],
  [/(^|\.)(chatgpt\.com|openai\.com)$/, "ChatGPT"],
  [/(^|\.)perplexity\.ai$/, "Perplexity"],
  [/(^|\.)(claude\.ai|gemini\.google\.com|copilot\.microsoft\.com)$/, "Assistant IA"],
  [/(^|\.)(facebook\.com|fb\.com|instagram\.com)$/, "Facebook / Instagram"],
];

function sourceOf(touch: Touch): string {
  const { params, referrer } = touch;
  if (params.gclid) return "Google Ads";
  if (params.msclkid) return "Microsoft Ads";
  if (params.utm_source) {
    return [params.utm_source, params.utm_medium, params.utm_campaign]
      .filter(Boolean)
      .join(" / ");
  }
  if (params.fbclid) return "Facebook / Instagram";
  if (!referrer) return "Direct (lien tapé, favori ou appli)";
  let host = referrer;
  try {
    host = new URL(referrer).host;
  } catch {}
  return REFERRER_SOURCES.find(([pattern]) => pattern.test(host))?.[1] ?? host;
}

function describe(touch: Touch) {
  const date = touch.at.slice(0, 10);
  return `${sourceOf(touch)} — arrivée sur ${touch.landing} (${date})`;
}

export function leadAttributionLines(raw: string): string[] {
  let parsed: z.infer<typeof attributionSchema> | undefined;
  try {
    const result = attributionSchema.safeParse(JSON.parse(raw));
    parsed = result.success ? result.data : undefined;
  } catch {}

  if (!parsed?.session && !parsed?.first) return ["Origine: inconnue"];

  const lines: string[] = [];
  if (parsed.session) lines.push(`Origine (cette visite): ${describe(parsed.session)}`);
  if (
    parsed.first &&
    (!parsed.session || parsed.first.at !== parsed.session.at)
  ) {
    lines.push(`Premiere visite: ${describe(parsed.first)}`);
  }
  if (parsed.replay) lines.push(`Enregistrement PostHog: ${parsed.replay}`);
  return lines;
}
