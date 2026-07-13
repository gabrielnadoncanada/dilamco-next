"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { submitPantrySignup, type PantrySignupState } from "../actions";

const initialState: PantrySignupState = {
  status: "idle",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" block disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" /> Envoi...
        </>
      ) : (
        <>
          Me notifier
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </>
      )}
    </Button>
  );
}

const fieldClasses = (invalid?: boolean) =>
  cn(
    "h-12 w-full border bg-background px-4 text-sm text-foreground outline-none transition-all",
    "border-border focus:border-foreground/60 focus:ring-2 focus:ring-foreground/10",
    invalid &&
      "border-destructive focus:border-destructive focus:ring-destructive/15",
  );

export function PantryNotifyForm({ idPrefix = "pantry" }: { idPrefix?: string }) {
  const [formState, formAction] = useActionState(
    submitPantrySignup,
    initialState,
  );

  const err = formState.fieldErrors ?? {};

  if (formState.status === "success") {
    return (
      <div className="flex items-start gap-3 border border-primary/25 bg-primary/5 p-5">
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
        <p className="text-sm leading-6 text-foreground/85">
          {formState.message}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="grid gap-4">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-10000px]"
      />

      <div>
        <label
          htmlFor={`${idPrefix}-nom`}
          className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground"
        >
          Nom complet
        </label>
        <input
          id={`${idPrefix}-nom`}
          name="nom"
          type="text"
          autoComplete="name"
          required
          placeholder="Votre nom"
          aria-invalid={Boolean(err.nom)}
          className={fieldClasses(Boolean(err.nom))}
        />
        {err.nom && <p className="mt-1 text-xs text-destructive">{err.nom}</p>}
      </div>

      <div>
        <label
          htmlFor={`${idPrefix}-courriel`}
          className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground"
        >
          Courriel
        </label>
        <input
          id={`${idPrefix}-courriel`}
          name="courriel"
          type="email"
          autoComplete="email"
          required
          placeholder="vous@exemple.com"
          aria-invalid={Boolean(err.courriel)}
          className={fieldClasses(Boolean(err.courriel))}
        />
        {err.courriel && (
          <p className="mt-1 text-xs text-destructive">{err.courriel}</p>
        )}
      </div>

      <SubmitButton />

      {formState.status === "error" && !formState.fieldErrors && (
        <p className="text-xs text-destructive">{formState.message}</p>
      )}

      <p className="text-xs leading-5 text-muted-foreground">
        Aucun pourriel. Nous vous écrirons uniquement lorsqu&apos;ALTO sera
        disponible.
      </p>
    </form>
  );
}
