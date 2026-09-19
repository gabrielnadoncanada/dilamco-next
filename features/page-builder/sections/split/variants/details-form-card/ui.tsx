"use client";

import { submitContactLead, type ContactFormState } from "@/lib/contact-actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Heading } from "@/components/elements/heading";
import { useActionState } from "react";
import { useLocale } from "next-intl";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { AppLink as Link } from "@/components/AppLink";
import { useFormStatus } from "react-dom";

import type { SplitDetailsFormCardProps } from "./schema";
import { cn } from "@/lib/utils";

const iconMap = {
  mail: Mail,
  phone: Phone,
  "map-pin": MapPin,
  clock: Clock3,
} as const;

const initialContactFormState: ContactFormState = {
  status: "idle",
};

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  const locale = useLocale();

  return (
    <Button type="submit" block disabled={pending}>
      {pending ? (locale === "en" ? "Sending…" : "Envoi en cours…") : label}
    </Button>
  );
}

function renderField(
  field: SplitDetailsFormCardProps["groups"][number]["fields"][number],
  error: string | undefined,
  selectPlaceholder: string,
) {
  const requiredClassName = field.required ? "required" : undefined;

  if (field.kind === "textarea") {
    return (
      <Textarea
        id={field.name}
        name={field.name}
        rows={field.rows ?? 6}
        placeholder={field.placeholder}
        required={field.required}
        aria-invalid={Boolean(error)}
        className={requiredClassName}
      />
    );
  }

  if (field.kind === "select") {
    return (
      <Combobox
        name={field.name}
        required={field.required}
        items={field.options}
      >
        <ComboboxInput
          id={field.name}
          placeholder={field.placeholder ?? selectPlaceholder}
          aria-invalid={Boolean(error)}
          className={requiredClassName}
        />
        <ComboboxContent>
          <ComboboxEmpty>Aucun resultat.</ComboboxEmpty>
          <ComboboxList>
            {(option) => (
              <ComboboxItem key={option.value} value={option}>
                {option.label}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    );
  }

  return (
    <Input
      id={field.name}
      name={field.name}
      type={field.kind}
      autoComplete={field.autoComplete}
      placeholder={field.placeholder}
      required={field.required}
      aria-invalid={Boolean(error)}
      className={requiredClassName}
    />
  );
}

export function SplitDetailsFormCard(props: SplitDetailsFormCardProps) {
  const locale = useLocale();
  const selectPlaceholder = locale === "en" ? "Select…" : "Sélectionner…";
  const [formState, contactFormAction] = useActionState(
    submitContactLead,
    initialContactFormState,
  );
  const isContactSubmission =
    props.formAction === "/contact/" && (props.formMethod ?? "post") === "post";

  return (
    <div className="grid gap-y-8 text-left lg:grid-cols-12 lg:items-start lg:gap-x-8 xl:gap-x-12">
      <div className="contents lg:col-span-5 lg:block lg:space-y-8">
        <div className="order-1">
          <Heading as="h1" variant="h1">{props.heading}</Heading>

          <p className="text-lead mt-4">{props.intro}</p>
        </div>

        <div className="order-3 lg:order-none">
          <Card className="border-0 bg-primary-soft/60">
            {props.detailsTitle ? (
              <CardHeader>
                <CardTitle className="text-xl">{props.detailsTitle}</CardTitle>
                {props.detailsIntro ? (
                  <p className="text-sm text-muted-foreground">{props.detailsIntro}</p>
                ) : null}
              </CardHeader>
            ) : null}
            <CardContent className="space-y-4">
              {props.details.map((detail) => {
                const Icon = iconMap[detail.icon];

                if (detail.href) {
                  return (
                    <Link key={`${detail.icon}-${detail.title}`} href={detail.href} target={detail.target} className="group flex gap-3 rounded-control focus-ring">
                      <div className="icon-pill size-10 bg-primary text-primary-foreground">
                        <Icon className="size-4" strokeWidth={2} />
                      </div>
                      <div>
                        <p className="font-medium">{detail.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {detail.description}
                        </p>
                      </div>
                    </Link>
                  );
                }
                return (
                  <div key={`${detail.icon}-${detail.title}`} className="flex gap-3">
                    <div className="icon-pill size-10 bg-primary text-primary-foreground">
                      <Icon className="size-4" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="font-medium">{detail.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {detail.description}
                      </p>
                    </div>
                  </div>
                );
              })}

              {props.note ? (
                <p className="border-t border-primary/10 pt-4 text-xs leading-relaxed text-muted-foreground">
                  {props.note}
                </p>
              ) : null}
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="order-2 lg:col-[6/13] lg:order-none">
        <Card className="rounded-panel py-7 sm:py-9">
          {props.formTitle ? (
            <CardHeader className="px-5 sm:px-9">
              <CardTitle className="text-2xl">{props.formTitle}</CardTitle>
              {props.formIntro ? (
                <p className="text-sm text-muted-foreground">{props.formIntro}</p>
              ) : null}
            </CardHeader>
          ) : null}
          <CardContent className="px-5 sm:px-9">
            <form
              action={isContactSubmission ? contactFormAction : props.formAction}
              method={isContactSubmission ? undefined : (props.formMethod ?? "post")}
              className="space-y-6"
            >
              {props.honeypotName ? (
                <input
                  type="text"
                  name={props.honeypotName}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute left-[-10000px]"
                />
              ) : null}

              {props.groups.map((group) => (
                <fieldset key={group.legend} className="space-y-4">
                  <legend className="mb-4 font-display text-lg font-semibold tracking-[-0.01em]">
                    {group.legend}
                  </legend>


                  <div className="grid gap-4 md:grid-cols-2">
                    {group.fields.map((field) => {
                      const fieldError =
                        isContactSubmission ? formState.fieldErrors?.[field.name] : undefined;

                      return (
                        <div
                          key={field.name}
                          className={cn(
                            "space-y-2",
                            field.kind === "textarea" && "md:col-span-2",
                            field.required && "required",
                          )}
                        >
                          <Label htmlFor={field.name}>
                            {field.label}
                          </Label>
                          {renderField(field, fieldError, selectPlaceholder)}
                          {fieldError ? (
                            <p className="text-xs text-destructive">{fieldError}</p>
                          ) : null}
                          {field.helper ? (
                            <p className="text-xs text-muted-foreground">
                              {field.helper}
                            </p>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                </fieldset>
              ))}

              {isContactSubmission && formState.status !== "idle" ? (
                <p
                  className={cn(
                    "text-sm",
                    formState.status === "success"
                      ? "text-green-700"
                      : "text-destructive",
                  )}
                >
                  {formState.message}
                </p>
              ) : null}

              <SubmitButton label={props.submitLabel} />
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
