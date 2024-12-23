import { z } from "zod";

export const schema = z.object({
    quantity: z.number().gte(50,"El valor mínimo es 50").positive(),
    category: z.enum(["Category1", "Category2", "Category3"]),
    feeling: z.enum(["Happy", "Sad", "Neutral"]),
    description: z.string().min(1, "No es una descripción válida"),
});

export type FormValues = z.infer<typeof schema>;
