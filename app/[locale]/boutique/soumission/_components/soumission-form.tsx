"use client";

import { useState, useTransition } from "react";
import { useTranslations } from "next-intl";
import { Button, ButtonArrow } from "@/components/shop/ui/button";
import { Input } from "@/components/shop/ui/input";
import { Label } from "@/components/shop/ui/label";
import { Textarea } from "@/components/shop/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/shop/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shop/ui/select";
import { useCart } from "@/components/shop/cart-provider";
import {
  submitSoumission,
  type SoumissionState,
} from "@/lib/shop/soumission-actions";
import type { SoumissionForm as Form } from "./types";

const BUDGETS = ["25-40k", "40-60k", "60-90k", "90k+"];

const TYPE_PROJET = ["cuisine", "renovation", "rangement", "commercial"];

const TIMELINE = ["urgent", "1-3mois", "3-6mois", "6mois+"];

interface Props {
  form: Form;
  setForm: (fn: (prev: Form) => Form) => void;
  onSubmit: () => void;
}

const fieldLabel =
  "text-[11px] tracking-[0.1em] uppercase text-muted-foreground font-medium";
const fieldControl =
  "h-auto border-input bg-background px-3.5 py-3 text-sm text-foreground shadow-none focus-visible:border-ring focus-visible:ring-0";

export function SoumissionForm({ form, setForm, onSubmit }: Props) {
  const cart = useCart();
  const t = useTranslations("shop.quote.form");
  const [isPending, startTransition] = useTransition();
  const [state, setState] = useState<SoumissionState>({ status: "idle" });

  const update = <K extends keyof Form>(k: K, v: Form[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const fieldError = (k: string) => state.fieldErrors?.[k];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isPending) return;
    startTransition(async () => {
      const result = await submitSoumission({
        prenom: form.prenom,
        nom: form.nom,
        email: form.email,
        tel: form.tel,
        code_postal: form.code_postal,
        type_projet: form.type_projet as never,
        budget: form.budget as never,
        timeline: form.timeline as never,
        notes: form.notes,
        items: cart.items.map((it) => ({
          name: it.name,
          color: it.color,
          molding: it.molding,
          qty: it.qty,
          price: it.price,
          w: it.w,
          h: it.h,
          d: it.d,
          productId: it.productId,
        })),
      });
      setState(result);
      if (result.status === "success") {
        onSubmit();
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <section className="mb-10">
        <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-primary mb-6 pb-3 border-b border-border">
          {t("section1")}
        </div>
        <div className="mb-4 grid grid-cols-2 gap-4 max-[700px]:grid-cols-1 max-[700px]:gap-3">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="prenom" className={fieldLabel}>{t("firstName")}</Label>
            <Input
              id="prenom"
              required
              value={form.prenom}
              onChange={(e) => update("prenom", e.target.value)}
              className={fieldControl}
            />
            {fieldError("prenom") ? (
              <span className="text-[11px] text-destructive">{fieldError("prenom")}</span>
            ) : null}
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="nom" className={fieldLabel}>{t("lastName")}</Label>
            <Input
              id="nom"
              required
              value={form.nom}
              onChange={(e) => update("nom", e.target.value)}
              className={fieldControl}
            />
            {fieldError("nom") ? (
              <span className="text-[11px] text-destructive">{fieldError("nom")}</span>
            ) : null}
          </div>
        </div>
        <div className="mb-4 grid grid-cols-2 gap-4 max-[700px]:grid-cols-1 max-[700px]:gap-3">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email" className={fieldLabel}>{t("email")}</Label>
            <Input
              id="email"
              required
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className={fieldControl}
            />
            {fieldError("email") ? (
              <span className="text-[11px] text-destructive">{fieldError("email")}</span>
            ) : null}
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="tel" className={fieldLabel}>
              {t("phone")}{" "}
              <span className="normal-case tracking-normal text-muted-foreground">
                {t("phoneHint")}
              </span>
            </Label>
            <Input
              id="tel"
              required
              type="tel"
              value={form.tel}
              onChange={(e) => update("tel", e.target.value)}
              placeholder="514 555 0000"
              className={fieldControl}
            />
            {fieldError("tel") ? (
              <span className="text-[11px] text-destructive">{fieldError("tel")}</span>
            ) : null}
          </div>
        </div>
        <div className="mb-4 grid grid-cols-1 gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="code_postal" className={fieldLabel}>
              {t("postalCode")}
            </Label>
            <Input
              id="code_postal"
              required
              value={form.code_postal}
              onChange={(e) => update("code_postal", e.target.value)}
              placeholder="H2T 1B5"
              className={fieldControl}
            />
            {fieldError("code_postal") ? (
              <span className="text-[11px] text-destructive">{fieldError("code_postal")}</span>
            ) : null}
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-primary mb-6 pb-3 border-b border-border">
          {t("section2")}
        </div>
        <div className="mb-4 grid grid-cols-2 gap-4 max-[700px]:grid-cols-1 max-[700px]:gap-3">
          <div className="flex flex-col gap-1.5">
            <Label className={fieldLabel}>{t("projectType")}</Label>
            <Select
              value={form.type_projet}
              onValueChange={(v) => update("type_projet", v)}
            >
              <SelectTrigger className={`${fieldControl} w-full data-[size=default]:h-auto`}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="">
                {TYPE_PROJET.map((value) => (
                  <SelectItem key={value} value={value} className="">
                    {t(`typeProjet.${value}`)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label className={fieldLabel}>{t("timeline")}</Label>
            <Select
              value={form.timeline}
              onValueChange={(v) => update("timeline", v)}
            >
              <SelectTrigger className={`${fieldControl} w-full data-[size=default]:h-auto`}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="">
                {TIMELINE.map((value) => (
                  <SelectItem key={value} value={value} className="">
                    {t(`timelineOptions.${value}`)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col gap-1.5 mt-3">
          <Label className={fieldLabel}>{t("budget")}</Label>
          <RadioGroup
            value={form.budget}
            onValueChange={(v) => update("budget", v)}
            className="mt-1 grid grid-cols-4 gap-2 max-[1000px]:grid-cols-2"
          >
            {BUDGETS.map((b) => (
              <Label
                key={b}
                htmlFor={`budget-${b}`}
                className="flex items-center justify-center gap-2 p-3 border border-input bg-background text-[13px] tracking-[0.02em] normal-case font-normal text-foreground/70 cursor-pointer transition-all has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-secondary has-[[data-state=checked]]:text-foreground"
              >
                <RadioGroupItem
                  id={`budget-${b}`}
                  value={b}
                  className="size-3 border-input data-[state=checked]:border-primary data-[state=checked]:text-primary"
                />
                ${b}
              </Label>
            ))}
          </RadioGroup>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-5">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="notes" className={fieldLabel}>
              {t("notes")}{" "}
              <span className="normal-case tracking-normal text-muted-foreground">
                {t("notesOptional")}
              </span>
            </Label>
            <Textarea
              id="notes"
              value={form.notes}
              onChange={(e) => update("notes", e.target.value)}
              placeholder={t("notesPlaceholder")}
              className={`${fieldControl} min-h-[120px] resize-y leading-[1.5]`}
            />
          </div>
        </div>
      </section>

      {/* Honeypot anti-spam : champ invisible que seuls les bots remplissent. */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">{t("honeypot")}</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website ?? ""}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-3">
        {state.status === "error" && state.message ? (
          <p
            role="alert"
            className="m-0 border border-destructive/40 bg-destructive/5 px-3.5 py-3 text-[13px] leading-[1.5] text-destructive"
          >
            {state.message}
          </p>
        ) : null}
        <Button
          type="submit"
          disabled={isPending}
          className="px-9 py-[18px] text-sm font-semibold max-[700px]:w-full"
        >
          {isPending ? t("submitPending") : t("submit")} <ButtonArrow />
        </Button>
        <p className="m-0 text-[12px] leading-[1.6] text-muted-foreground">
          {t("reassurance")}
        </p>
      </div>
    </form>
  );
}
