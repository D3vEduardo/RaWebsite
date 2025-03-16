import Button from "./Button.tsx";
import { Check, Star, X } from "lucide-react";
import { useState } from "react";
import Form from "./Form.tsx";
import TextArea from "./TextArea.tsx";
import EvaluationStarsInput from "./EvaluationStarsInput.tsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../assets/libs/openapi/api.ts";
import { useAuth } from "../contexts/auth/hook.tsx";
import { toast } from "react-toastify";
import { evaluationSchema, EvaluationSchema } from "../assets/types/EvaluationForm.ts";

export default function CreateNewEvaluation() {
    const queryClient = useQueryClient();
    const { user } = useAuth();
    const [showForm, setShowForm] = useState(false);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<EvaluationSchema>({
        resolver: zodResolver(evaluationSchema),
    });
    const mutation = useMutation({
        mutationFn: async ({ content, value }: EvaluationSchema) => {
            if (!user) return;
            const accessToken = await user.getIdToken();
            const res = await api.POST("/evaluation/", {
                body: {
                    content,
                    value
                },
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });

            if (res.error) {
                throw new Error("Ocorreu um erro ao avaliar!: " + res.error);
            }

            return res;
        },
        onSuccess: () => {
            if (user) {
                queryClient.invalidateQueries({ queryKey: ["evaluation", user.uid] });
                setShowForm(false);
            }
        }
    });

    if (errors.content) {
        toast.error(errors.content.message);
    }

    return (
        <main
            className="flex flex-col items-center justify-center w-[90vw] md:max-w-[400px] gap-4"
        >
            <div
                className="flex flex-col items-center justify-center text-center"
            >
                <h1
                    className="font-extrabold text-2xl text-gray-800 text-center"
                >
                    Você ainda não nos avaliou!
                </h1>
                <p
                    className="text-gray-500 text-lg text-center"
                >
                    Avalie nosso serviço agora mesmo com poucos cliques.
                </p>
            </div>
            <Button
                size="lg"
                handleClick={() => setShowForm(true)}
                className="w-full"
                handleClickDelay={0}
            >
                <p
                    className="flex items-center gap-x-2 justify-center text-center z-20 text-lg
                    font-extrabold"
                >
                    <Star />Avaliar agora!
                </p>
            </Button>

            {showForm && (
                <Form
                    onSubmit={handleSubmit((data) => {
                        toast.promise(async () => await mutation.mutateAsync(data), {
                            pending: "Avaliando...",
                            error: "Ocorreu um erro ao avaliar!",
                            success: "Avaliação realizada com sucesso!"
                        });
                    })}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-9/10 max-w-[450px] z-30 gap-4 border-2 border-gray-200"
                >
                    <h1
                        className="text-2xl font-extrabold text-gray-800"
                    >
                        Avalie nosso serviço
                    </h1>
                    <TextArea
                        register={register}
                        className="h-25"
                        label="Escreva sua avaliação:"
                        placeholder="Serviço ótimo... ;)"
                        id="evaluation-content-input"
                    />
                    <div
                        className="flex items-start justify-start w-full"
                    >
                        <EvaluationStarsInput
                            setEvaluationValue={setValue}
                            register={register}
                        />
                    </div>
                    <Button
                        type="submit"
                        disabled={mutation.isPending}
                        size="lg"
                        className="w-full"
                        handleClickDelay={0}
                    >
                        <p
                            className="flex items-center gap-x-1 justify-center text-center z-20 text-lg
                            font-extrabold"
                        >
                            <Check />Avaliar
                        </p>
                    </Button>
                    <Button
                        type="button"
                        size="lg"
                        className="w-full bg-red-500"
                        handleClick={() => setShowForm(false)}
                        handleClickDelay={0}
                        disabled={mutation.isPending}
                    >
                        <p
                            className="flex items-center gap-x-1 justify-center text-center z-20 text-lg
                            font-extrabold"
                        >
                            <X />Cancelar
                        </p>
                    </Button>
                </Form>
            )
            }
        </main >
    )
}