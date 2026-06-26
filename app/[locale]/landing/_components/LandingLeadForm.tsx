"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { ArrowRight, Loader2 } from "lucide-react";

import {
  submitContactLead,
  type ContactFormState,
} from "@/lib/contact-actions";
import { Button } from "./button";
import { cn } from "@/lib/utils";

const initialState: ContactFormState = {
  status: "idle",
};

const budgetOptions = [
  { value: "25000-40000", label: "25 000 $ à 40 000 $" },
  { value: "40000-60000", label: "40 000 $ à 60 000 $" },
  { value: "60000-plus", label: "60 000 $ et plus" },
  { value: "a-discuter", label: "À discuter" },
] as const;

const timelineOptions = [
  { value: "0-3", label: "0 à 3 mois" },
  { value: "3-6", label: "3 à 6 mois" },
  { value: "6-12", label: "6 à 12 mois" },
  { value: "flexible", label: "Flexible" },
] as const;

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size="lg"
      className="group w-full gap-2 text-sm font-semibold"
      disabled={pending}
    >
      {pending ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" /> Envoi en cours...
        </>
      ) : (
        <>
          Obtenir ma soumission
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </>
      )}
    </Button>
  );
}

function FieldError({ error }: { error?: string }) {
  if (!error) return null;
  return <p className="mt-1 text-xs text-destructive">{error}</p>;
}

type FloatFieldProps = {
  id: string;
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  invalid?: boolean;
};

function FloatField({
  id,
  name,
  label,
  type = "text",
  autoComplete,
  required,
  invalid,
}: FloatFieldProps) {
  return (
    <div className="relative">
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        placeholder=" "
        aria-invalid={invalid}
        className={cn(
          "peer block w-full rounded-none border bg-background px-4 pb-2 pt-6 text-sm text-foreground outline-none transition-all",
          "border-border focus:border-foreground/60 focus:ring-2 focus:ring-foreground/10",
          invalid && "border-destructive focus:border-destructive focus:ring-destructive/15",
        )}
      />
      <label
        htmlFor={id}
        className={cn(
          "pointer-events-none absolute left-4 top-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-all",
          "peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal peer-placeholder-shown:normal-case peer-placeholder-shown:text-muted-foreground/80",
          "peer-focus:top-1 peer-focus:text-[10px] peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-[0.18em] peer-focus:text-foreground/70",
        )}
      >
        {label}
        {required && <span className="ml-0.5 text-foreground/40">*</span>}
      </label>
    </div>
  );
}

type FloatSelectProps = {
  id: string;
  name: string;
  label: string;
  options: ReadonlyArray<{ value: string; label: string }>;
  required?: boolean;
  invalid?: boolean;
  placeholder: string;
};

function FloatSelect({
  id,
  name,
  label,
  options,
  required,
  invalid,
  placeholder,
}: FloatSelectProps) {
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="absolute left-4 top-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground/70"
      >
        {label}
        {required && <span className="ml-0.5 text-foreground/40">*</span>}
      </label>
      <select
        id={id}
        name={name}
        required={required}
        defaultValue=""
        aria-invalid={invalid}
        className={cn(
          "block h-14 w-full rounded-none border bg-background px-4 pb-1 pt-6 text-sm text-foreground outline-none transition-all appearance-none",
          "border-border focus:border-foreground/60 focus:ring-2 focus:ring-foreground/10",
          invalid && "border-destructive focus:border-destructive focus:ring-destructive/15",
        )}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <svg
        className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/50"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
      </svg>
    </div>
  );
}

export function LandingLeadForm() {
  const [formState, formAction] = useActionState(
    submitContactLead,
    initialState,
  );

  const err = formState.fieldErrors ?? {};

  return (
    <form action={formAction} className="grid gap-4 md:grid-cols-2">
      <input type="hidden" name="espace" value="cuisine" />
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-10000px]"
      />

      <div>
        <FloatField
          id="landing-nom"
          name="nom"
          label="Nom complet"
          autoComplete="name"
          required
          invalid={Boolean(err.nom)}
        />
        <FieldError error={err.nom} />
      </div>

      <div>
        <FloatField
          id="landing-telephone"
          name="telephone"
          label="Téléphone"
          type="tel"
          autoComplete="tel"
          required
          invalid={Boolean(err.telephone)}
        />
        <FieldError error={err.telephone} />
      </div>

      <div>
        <FloatField
          id="landing-courriel"
          name="courriel"
          label="Courriel"
          type="email"
          autoComplete="email"
          required
          invalid={Boolean(err.courriel)}
        />
        <FieldError error={err.courriel} />
      </div>

      <div>
        <FloatField
          id="landing-ville"
          name="ville"
          label="Ville"
          autoComplete="address-level2"
          required
          invalid={Boolean(err.ville)}
        />
        <FieldError error={err.ville} />
      </div>

      <div>
        <FloatSelect
          id="landing-budget"
          name="budget"
          label="Budget estimé"
          options={budgetOptions}
          placeholder="Sélectionnez une fourchette"
          required
          invalid={Boolean(err.budget)}
        />
        <FieldError error={err.budget} />
      </div>

      <div>
        <FloatSelect
          id="landing-echeance"
          name="echeance"
          label="Échéancier souhaité"
          options={timelineOptions}
          placeholder="Sélectionnez un délai"
          required
          invalid={Boolean(err.echeance)}
        />
        <FieldError error={err.echeance} />
      </div>

      <div className="md:col-span-2">
        <div className="relative">
          <textarea
            id="landing-message"
            name="message"
            placeholder=" "
            aria-invalid={Boolean(err.message)}
            className={cn(
              "peer block min-h-[120px] w-full rounded-none border bg-background px-4 pb-3 pt-7 text-sm text-foreground outline-none transition-all",
              "border-border focus:border-foreground/60 focus:ring-2 focus:ring-foreground/10",
              err.message && "border-destructive",
            )}
          />
          <label
            htmlFor="landing-message"
            className={cn(
              "pointer-events-none absolute left-4 top-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-all",
              "peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal peer-placeholder-shown:normal-case peer-placeholder-shown:text-muted-foreground/80",
              "peer-focus:top-2 peer-focus:text-[10px] peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-[0.18em] peer-focus:text-foreground/70",
            )}
          >
            Décrivez brièvement votre projet
            <span className="ml-1.5 text-[9px] font-normal normal-case tracking-normal text-muted-foreground/70">
              (facultatif)
            </span>
          </label>
        </div>
        <FieldError error={err.message} />
      </div>

      {formState.status !== "idle" && (
        <p
          className={cn(
            "text-sm md:col-span-2",
            formState.status === "success" ? "text-green-700" : "text-destructive",
          )}
        >
          {formState.message}
        </p>
      )}

      <div className="md:col-span-2">
        <SubmitButton />

        <p className="mt-3 text-center text-xs leading-5 text-muted-foreground">
          En soumettant ce formulaire, vous acceptez d&apos;être contacté au
          sujet de votre projet. Sans engagement.
        </p>
      </div>
    </form>
  );
}
