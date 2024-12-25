import { z } from "zod";

export const schemaExpenses = z.object({
    quantity: z.number().gte(50,"El valor mínimo es 50").positive(),
    category: z.enum(["Category1", "Category2", "Category3"]),
    feeling: z.enum(["Happy", "Sad", "Neutral"]),
    description: z.string().min(1, "No es una descripción válida"),
    wallet: z.enum(["Nequi","Efectivo","Uala","DaviPlata","Otro"]),
});

export type FormValues = z.infer<typeof schemaExpenses>;
