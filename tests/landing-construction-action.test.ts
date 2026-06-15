import { describe, it, expect } from "vitest";
import { constructionLeadSchema } from "@/app/[locale]/landing/construction/actions";

const valid = {
  nom: "Jean Tremblay",
  courriel: "jean@example.com",
  telephone: "514-820-0773",
  ville: "Laval",
  type_projet: "renovation-cuisine-sdb",
  budget: "50000-100000",
  echeance: "3-6",
  message: "",
};

describe("constructionLeadSchema", () => {
  it("accepte un lead complet et valide", () => {
    const result = constructionLeadSchema.safeParse(valid);
    expect(result.success).toBe(true);
  });

  it("rejette un nom trop court", () => {
    const result = constructionLeadSchema.safeParse({ ...valid, nom: "J" });
    expect(result.success).toBe(false);
  });

  it("rejette un courriel invalide", () => {
    const result = constructionLeadSchema.safeParse({ ...valid, courriel: "pas-un-email" });
    expect(result.success).toBe(false);
  });

  it("rejette un type_projet hors enum", () => {
    const result = constructionLeadSchema.safeParse({ ...valid, type_projet: "autre-chose" });
    expect(result.success).toBe(false);
  });

  it("rejette un budget hors enum", () => {
    const result = constructionLeadSchema.safeParse({ ...valid, budget: "1000000" });
    expect(result.success).toBe(false);
  });

  it("transforme un message absent en chaine vide", () => {
    const { message, ...rest } = valid;
    const result = constructionLeadSchema.safeParse(rest);
    expect(result.success).toBe(true);
    if (result.success) expect(result.data.message).toBe("");
  });
});
