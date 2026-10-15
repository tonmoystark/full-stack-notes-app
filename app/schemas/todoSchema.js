import z from "zod";

export const todoSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters" })
    .max(100, { message: "Title must be at most 100 characters" })
    .trim(),
  completed: z.boolean().default(false).optional(),
});
