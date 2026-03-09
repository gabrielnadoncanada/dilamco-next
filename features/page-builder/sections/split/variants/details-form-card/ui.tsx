import { Heading } from "@/components/elements/heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";

import type { SplitDetailsFormCardProps } from "./schema";

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
      <select
        id={field.name}
        name={field.name}
        required={field.required}
        defaultValue=""
        className={cn(
          "border-input dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 rounded-lg border bg-transparent px-2.5 py-2 text-base transition-colors md:text-sm placeholder:text-muted-foreground h-10 w-full outline-none focus-visible:ring-3",
        )}
      >
        <option value="" disabled>
          {field.placeholder ?? "Selectionner..."}
        </option>
        {field.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
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
    <div className="grid gap-y-8 lg:grid-cols-12 lg:items-start">
      <div className="lg:col-span-5">
        <Heading as="h2" variant="h2">
          {props.heading}
        </Heading>
        <p className="mt-3 text-sm text-muted-foreground">{props.intro}</p>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-base">{props.detailsTitle}</CardTitle>
            {props.detailsIntro ? (
              <p className="text-sm text-muted-foreground">{props.detailsIntro}</p>
            ) : null}
          </CardHeader>

          <CardContent className="space-y-4">
            {props.details.map((detail) => {
              const Icon = iconMap[detail.icon];

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

      <div className="lg:col-[7/13]">
        <Card>
          <CardHeader>
            <CardTitle>{props.formTitle}</CardTitle>
            {props.formIntro ? (
              <p className="text-sm text-muted-foreground">{props.formIntro}</p>
            ) : null}
          </CardHeader>

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

                  {group.fields.map((field) => (
                    <div key={field.name} className="space-y-2">
                      <label htmlFor={field.name} className="text-sm font-medium">
                        {field.label}
                      </label>
                      {renderField(field)}
                      {field.helper ? (
                        <p className="text-xs text-muted-foreground">
                          {field.helper}
                        </p>
                      ) : null}
                    </div>
                  ))}
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
