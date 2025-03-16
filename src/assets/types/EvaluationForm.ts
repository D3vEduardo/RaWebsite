import { z } from "zod";

export const evaluationSchema = z.object({
    content: z.string()
        .min(10, "Mínimo 10 caracteres na avaliação.")
        .max(300, "Máximo 300 caracteres na avaliação."),
    value: z.coerce.number()
        .min(1)
        .max(5)
});

export type EvaluationSchema = z.infer<typeof evaluationSchema>;