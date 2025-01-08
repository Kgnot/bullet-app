import {z} from "zod";

export const schemaExpenses = (expensesArray:string[],
                               walletsArray:string[],
                               feelingsArray:string[]) => {
    return z.object({
        quantity: z.number().gte(50, "El valor mínimo es 50").positive(),
        category: z.string().refine((val) => expensesArray.includes(val), {
            message: "No es una categoría válida",
        }),
        feeling: z.string().refine((val) => feelingsArray.includes(val), {
            message: "No es un sentimiento válido",
        }),
        description: z.string().min(1, "No es una descripción válida"),
        wallet: z.string().refine((val) => walletsArray.includes(val), {
            message: "No es una billetera válida",
        }),
    })
}

export const schemaLogin = z.object({
    email: z.string().email("No es un email valido").min(1, "Ingrese un email"),
    password: z.string().min(6, "La contraseña debe ser de mínimo 6 caracteres"),
})

export const schemaSignIn = z.object({
    firstName: z.string().min(1, "No es un nombre valido"),
    lastName: z.string().min(1, "Ingrese un apellido valido"),
    email: z.string().email("No es un email valido"),
    nickName: z.string().min(1, "Ingrese un nick valido"),
    password: z.string().min(6, "La contraseña debe tener mínimo 6 dígitos"),
    confirmPassword: z.string().min(6, "La confirmación de la contraseña debe tener mínimo 6 dígitos")
}).refine(data => data.password === data.confirmPassword, {
    message: "Las contraseñas no son válidas",
    path: ['confirmPassword'],
})


// apartado de expenses:
type SchemaExpenses = ReturnType<typeof schemaExpenses>;
// export types:
export type FormSingInValues = z.infer<typeof schemaSignIn>;
export type FormLoginValues = z.infer<typeof schemaLogin>;
export type FormValues = z.infer<SchemaExpenses>;
