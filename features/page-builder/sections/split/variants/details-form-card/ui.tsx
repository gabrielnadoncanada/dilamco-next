"use client";

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
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import type { SplitDetailsFormCardProps } from "./schema";
import { cn } from "@/lib/utils";

const iconMap = {
  mail: Mail,
  phone: Phone,
  "map-pin": MapPin,
  clock: Clock3,
} as const;

function renderField(
  field: SplitDetailsFormCardProps["groups"][number]["fields"][number],
) {
  if (field.kind === "textarea") {
    return (
      <Textarea
        id={field.name}
        name={field.name}
        rows={field.rows ?? 6}
        placeholder={field.placeholder}
        required={field.required}
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
          placeholder={field.placeholder ?? "Selectionner..."}
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
    />
  );
}

export function SplitDetailsFormCard(props: SplitDetailsFormCardProps) {
  return (
    <div className="grid gap-y-8 lg:grid-cols-12 lg:items-start lg:gap-x-8 xl:gap-x-12">
      <div className="contents lg:col-span-5 lg:block lg:space-y-8">
        <div className="order-1">
          <Heading as="h1" variant="h2">{props.heading}</Heading>

          <p className="mt-3 text-sm text-muted-foreground">{props.intro}</p>
        </div>

        <div className="order-3 lg:order-none">
          <Card>
            {props.detailsTitle ? (
              <CardHeader>
                <CardTitle className="text-base">{props.detailsTitle}</CardTitle>
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
                    <Link key={`${detail.icon}-${detail.title}`} href={detail.href} target={detail.target} className="flex gap-3">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border bg-background">
                        <Icon className="size-4" />
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
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border bg-background">
                      <Icon className="size-4" />
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
                <p className="border-t pt-4 text-sm text-muted-foreground">
                  {props.note}
                </p>
              ) : null}
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="order-2 lg:col-[6/13] lg:order-none">
        <Card>
          {props.formTitle ? (
            <CardHeader>
              <CardTitle>{props.formTitle}</CardTitle>
              {props.formIntro ? (
                <p className="text-sm text-muted-foreground">{props.formIntro}</p>
              ) : null}
            </CardHeader>
          ) : null}
          <CardContent>
            <form
              action={props.formAction}
              method={props.formMethod ?? "post"}
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
                  <legend className="mb-4 text-lg font-semibold">
                    {group.legend}
                  </legend>


                  <div className="grid gap-4 md:grid-cols-2">
                    {group.fields.map((field) => (
                      <div key={field.name} className={cn("space-y-2", field.kind === "textarea" && "md:col-span-2")}>
                        <Label htmlFor={field.name}>
                          {field.label}
                        </Label>
                        {renderField(field)}
                        {field.helper ? (
                          <p className="text-xs text-muted-foreground">
                            {field.helper}
                          </p>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </fieldset>
              ))}

              <Button type="submit" size="lg" className="w-full">
                {props.submitLabel}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
