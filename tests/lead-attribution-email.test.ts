import { describe, expect, it } from "vitest";
import { leadAttributionLines } from "@/lib/lead-attribution-email";

const touch = (overrides: Partial<{ landing: string; referrer: string; params: Record<string, string>; at: string }>) => ({
  landing: "/",
  referrer: "",
  params: {},
  at: "2026-10-26T12:00:00.000Z",
  ...overrides,
});

describe("leadAttributionLines", () => {
  it("retourne « inconnue » pour un champ vide ou invalide", () => {
    expect(leadAttributionLines("")).toEqual(["Origine: inconnue"]);
    expect(leadAttributionLines("{pas du json")).toEqual(["Origine: inconnue"]);
    expect(leadAttributionLines(JSON.stringify({ first: { landing: 3 } }))).toEqual([
      "Origine: inconnue",
    ]);
  });

  it("reconnaît Google, les IA, les UTM et les pubs", () => {
    const line = (t: ReturnType<typeof touch>) =>
      leadAttributionLines(JSON.stringify({ session: t }))[0];
    expect(line(touch({ referrer: "https://www.google.ca/", landing: "/zones/kirkland" }))).toBe(
      "Origine (cette visite): Google (recherche) — arrivée sur /zones/kirkland (2026-10-26)",
    );
    expect(line(touch({ referrer: "https://chatgpt.com/" }))).toContain("ChatGPT");
    expect(line(touch({ params: { gclid: "abc" } }))).toContain("Google Ads");
    expect(line(touch({ params: { utm_source: "gbp", utm_medium: "organic" } }))).toContain(
      "gbp / organic",
    );
    expect(line(touch({}))).toContain("Direct");
  });

  it("ajoute la première visite quand elle diffère et le lien PostHog", () => {
    const lines = leadAttributionLines(
      JSON.stringify({
        first: touch({ referrer: "https://www.bing.com/", at: "2026-10-20T08:00:00.000Z" }),
        session: touch({}),
        replay: "https://us.posthog.com/replay/abc",
      }),
    );
    expect(lines).toHaveLength(3);
    expect(lines[1]).toBe("Premiere visite: Bing (recherche) — arrivée sur / (2026-10-20)");
    expect(lines[2]).toBe("Enregistrement PostHog: https://us.posthog.com/replay/abc");
  });
});
