"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import { submitContactLead, type ContactFormState } from "@/app/contact/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const initialState: ContactFormState = {
  status: "idle",
};

const projectTypeOptions = [
  { value: "sur-mesure", label: "Cuisine sur mesure" },
  { value: "renovation", label: "Renovation de cuisine" },
  { value: "a-determiner", label: "A determiner avec vous" },
] as const;

const budgetOptions = [
  { value: "moins-15000", label: "Moins de 15 000 $" },
  { value: "15000-25000", label: "15 000 $ a 25 000 $" },
  { value: "25000-40000", label: "25 000 $ a 40 000 $" },
  { value: "40000-60000", label: "40 000 $ a 60 000 $" },
  { value: "60000-plus", label: "60 000 $ et plus" },
  { value: "a-discuter", label: "A discuter" },
] as const;

const timelineOptions = [
  { value: "0-3", label: "0 a 3 mois" },
  { value: "3-6", label: "3 a 6 mois" },
  { value: "6-12", label: "6 a 12 mois" },
  { value: "flexible", label: "Flexible" },
] as const;

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size="lg"
      className="w-full rounded-full bg-primary text-base font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 hover:shadow-xl"
      disabled={pending}
    >
      {pending ? "Envoi en cours..." : "Obtenir ma soumission"}
    </Button>
  );
}

function FieldError({ error }: { error?: string }) {
  if (!error) {
    return null;
  }

  return <p className="text-xs text-destructive">{error}</p>;
}

export function LandingLeadForm() {
  const [formState, formAction] = useActionState(submitContactLead, initialState);

  return (
    <form action={formAction} className="grid gap-5 md:grid-cols-2">
      <input type="hidden" name="espace" value="cuisine" />
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-10000px]"
      />

      <div className="grid gap-2">
        <Label htmlFor="landing-nom">Nom complet</Label>
        <Input
          id="landing-nom"
          name="nom"
          autoComplete="name"
          placeholder="Votre nom"
          required
          aria-invalid={Boolean(formState.fieldErrors?.nom)}
          className="rounded-xl"
        />
        <FieldError error={formState.fieldErrors?.nom} />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="landing-telephone">Telephone</Label>
        <Input
          id="landing-telephone"
          name="telephone"
          type="tel"
          autoComplete="tel"
          placeholder="(514) 000-0000"
          required
          aria-invalid={Boolean(formState.fieldErrors?.telephone)}
          className="rounded-xl"
        />
        <FieldError error={formState.fieldErrors?.telephone} />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="landing-courriel">Courriel</Label>
        <Input
          id="landing-courriel"
          name="courriel"
          type="email"
          autoComplete="email"
          placeholder="vous@exemple.com"
          required
          aria-invalid={Boolean(formState.fieldErrors?.courriel)}
          className="rounded-xl"
        />
        <FieldError error={formState.fieldErrors?.courriel} />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="landing-ville">Ville</Label>
        <Input
          id="landing-ville"
          name="ville"
          autoComplete="address-level2"
          placeholder="Montreal, Laval, Brossard..."
          required
          aria-invalid={Boolean(formState.fieldErrors?.ville)}
          className="rounded-xl"
        />
        <FieldError error={formState.fieldErrors?.ville} />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="landing-type-projet">Type de projet</Label>
        <select
          id="landing-type-projet"
          name="type_projet"
          required
          defaultValue=""
          aria-invalid={Boolean(formState.fieldErrors?.type_projet)}
          className={cn(
            "flex h-10 w-full rounded-xl border bg-background px-3 py-2 text-sm",
            formState.fieldErrors?.type_projet && "border-destructive",
          )}
        >
          <option value="" disabled>
            Selectionnez un type
          </option>
          {projectTypeOptions.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <FieldError error={formState.fieldErrors?.type_projet} />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="landing-budget">Budget estime</Label>
        <select
          id="landing-budget"
          name="budget"
          required
          defaultValue=""
          aria-invalid={Boolean(formState.fieldErrors?.budget)}
          className={cn(
            "flex h-10 w-full rounded-xl border bg-background px-3 py-2 text-sm",
            formState.fieldErrors?.budget && "border-destructive",
          )}
        >
          <option value="" disabled>
            Selectionnez une fourchette
          </option>
          {budgetOptions.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <FieldError error={formState.fieldErrors?.budget} />
      </div>

      <div className="grid gap-2 md:col-span-2">
        <Label htmlFor="landing-echeance">Echeancier souhaite</Label>
        <select
          id="landing-echeance"
          name="echeance"
          required
          defaultValue=""
          aria-invalid={Boolean(formState.fieldErrors?.echeance)}
          className={cn(
            "flex h-10 w-full rounded-xl border bg-background px-3 py-2 text-sm",
            formState.fieldErrors?.echeance && "border-destructive",
          )}
        >
          <option value="" disabled>
            Selectionnez un delai
          </option>
          {timelineOptions.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <FieldError error={formState.fieldErrors?.echeance} />
      </div>

      <div className="grid gap-2 md:col-span-2">
        <Label htmlFor="landing-message">Decrivez brievement votre projet</Label>
        <Textarea
          id="landing-message"
          name="message"
          required
          placeholder="Vos objectifs, votre echeancier, toute information utile..."
          className="min-h-[110px] rounded-xl"
          aria-invalid={Boolean(formState.fieldErrors?.message)}
        />
        <FieldError error={formState.fieldErrors?.message} />
      </div>

      {formState.status !== "idle" ? (
        <p
          className={cn(
            "text-sm md:col-span-2",
            formState.status === "success" ? "text-green-700" : "text-destructive",
          )}
        >
          {formState.message}
        </p>
      ) : null}

      <div className="md:col-span-2">
        <SubmitButton />

        <p className="mt-3 text-center text-xs leading-5 text-muted-foreground">
          En soumettant ce formulaire, vous acceptez d&apos;etre contacte au sujet
          de votre projet. Sans engagement.
        </p>
      </div>
    </form>
  );
}
