import { describe, expect, it } from "vitest";
import { loranziRedirect } from "@/lib/loranzi-redirects";

describe("loranziRedirect", () => {
  it("sends a shop product to the Loranzi page of the same model", () => {
    expect(loranziRedirect("/boutique/produit/armoire-cuisine-bas-1-porte-12-pouces")).toBe(
      "https://loranzi.com/fr/catalog/base/base-1-door",
    );
  });

  it("ignores a trailing slash", () => {
    expect(loranziRedirect("/espaces/cuisine/")).toBe("https://loranzi.com/fr/spaces/kitchens");
  });

  it("sends unknown shop paths to the catalogue", () => {
    expect(loranziRedirect("/boutique/produit/inconnu")).toBe("https://loranzi.com/fr/catalog");
    expect(loranziRedirect("/en/shop/whatever")).toBe("https://loranzi.com/en/catalog");
  });

  it("moves the kitchen pages", () => {
    expect(loranziRedirect("/en/spaces/kitchen")).toBe("https://loranzi.com/en/spaces/kitchens");
    expect(loranziRedirect("/projets/cuisine/cuisine-sur-mesure-laval")).toBe("https://loranzi.com/fr/projects");
    expect(loranziRedirect("/services/renovation/cuisine")).toBe("https://loranzi.com/fr/homeowners");
  });

  it("keeps the rest of Dilamco", () => {
    for (const path of ["/", "/en", "/espaces/salle-de-bain", "/espaces/walk-in", "/services/renovation/sous-sol", "/contact"]) {
      expect(loranziRedirect(path)).toBeNull();
    }
  });
});
