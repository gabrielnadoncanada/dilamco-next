import { z } from "zod";

export const ImageSchema = z.object({
  src: z.string().min(1),
  alt: z.string().min(1),
});

export type Image = z.infer<typeof ImageSchema>;
