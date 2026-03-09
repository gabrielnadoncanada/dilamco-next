import { z } from "zod";

const ContactDetailSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  icon: z.enum(["mail", "phone", "map-pin", "clock"]),
});

const FormOptionSchema = z.object({
  label: z.string().min(1),
  value: z.string().min(1),
});

const BaseFieldSchema = z.object({
  name: z.string().min(1),
  label: z.string().min(1),
  placeholder: z.string().min(1).optional(),
  required: z.boolean().optional(),
  helper: z.string().min(1).optional(),
});

const TextFieldSchema = BaseFieldSchema.extend({
  kind: z.enum(["text", "email", "tel"]),
  autoComplete: z.string().min(1).optional(),
});

const TextareaFieldSchema = BaseFieldSchema.extend({
  kind: z.literal("textarea"),
  rows: z.number().int().min(3).max(12).optional(),
});

const SelectFieldSchema = BaseFieldSchema.extend({
  kind: z.literal("select"),
  options: z.array(FormOptionSchema).min(1).max(12),
});

const FormFieldSchema = z.discriminatedUnion("kind", [
  TextFieldSchema,
  TextareaFieldSchema,
  SelectFieldSchema,
]);

const FormGroupSchema = z.object({
  legend: z.string().min(1),
  fields: z.array(FormFieldSchema).min(1).max(8),
});

export const SplitDetailsFormCardSchema = z.object({
  heading: z.string().min(1),
  intro: z.string().min(1),
  detailsTitle: z.string().min(1),
  detailsIntro: z.string().min(1).optional(),
  details: z.array(ContactDetailSchema).min(1).max(6),
  note: z.string().min(1).optional(),
  formTitle: z.string().min(1),
  formIntro: z.string().min(1).optional(),
  formAction: z.string().min(1),
  formMethod: z.enum(["get", "post"]).optional(),
  honeypotName: z.string().min(1).optional(),
  groups: z.array(FormGroupSchema).min(1).max(4),
  submitLabel: z.string().min(1),
});

export type SplitDetailsFormCardProps = z.infer<
  typeof SplitDetailsFormCardSchema
>;
