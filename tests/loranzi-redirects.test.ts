import { describe, expect, it } from "vitest";
import { loranziRedirect } from "@/lib/loranzi-redirects";

describe("loranziRedirect", () => {
  it("sends a shop product to the Loranzi page of the same model", () => {
    expect(loranziRedirect("/boutique/produit/armoire-cuisine-bas-1-porte-12-pouces")).toBe(
      "https://loranzi.com/fr/catalog/base/base-1-door",
    );
  });

  it("ignores a trailing slash", () => {
    expect(loranziRedirect("/boutique/produit/armoire-cuisine-bas-1-porte-12-pouces/")).toBe(
      "https://loranzi.com/fr/catalog/base/base-1-door",
    );
  });

  it("sends unknown shop paths to the catalogue", () => {
    expect(loranziRedirect("/boutique/produit/inconnu")).toBe("https://loranzi.com/fr/catalog");
    expect(loranziRedirect("/en/shop/whatever")).toBe("https://loranzi.com/en/catalog");
  });

  it("keeps the rest of Dilamco", () => {
    for (const path of [
      "/",
      "/en",
      "/espaces/cuisine",
      "/en/spaces/kitchen",
      "/services/renovation/cuisine",
      "/blogue/cout-renovation-cuisine",
      "/projets/cuisine/cuisine-sur-mesure-laval",
      "/espaces/salle-de-bain",
      "/espaces/walk-in",
      "/contact",
    ]) {
      expect(loranziRedirect(path)).toBeNull();
    }
  });
});
