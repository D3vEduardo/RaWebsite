import { Dispatch, SetStateAction } from "react";
import Button from "./Button";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "../contexts/auth/hook";
import { api } from "../assets/libs/openapi/api";
import { toast } from "react-toastify";
import { queryClient } from "../assets/libs/reactQuery";
import { Trash, X } from "lucide-react";

type PropsType = {
    setModalOnScreen: Dispatch<SetStateAction<"edit" | "delete" | "none">>;
}

export default function DeleteEvaluationModal({ setModalOnScreen }: PropsType) {
    const { user } = useAuth();
    if (!user) return null;

    const deleteEvaluationMutation = useMutation({
        mutationFn: async () => {
            const accessToken = await user.getIdToken();
            const res = await api.DELETE("/evaluation/", {
                headers: {
                    authorization: `Bearer ${accessToken}`
                }
            });

            if (res.error) {
                throw new Error("Ocorreu um erro ao deletar a avaliação! " + res.error)
            }

            return res;
        },
        onSuccess: () => {
            if (user) {
                queryClient.invalidateQueries({ queryKey: ["evaluation", user.uid] });
            }
        }
    });

    return (
        <figure
            className="flex flex-col items-center justify-center gap-4 px-6 py-5
            absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            bg-zinc-200 w-[90vw] sm:w-[50vw] max-w-[300px] text-center rounded-2xl shadow-lg
            border border-gray-300"
        >
            <header>
                <h1
                    className="text-2xl font-extrabold text-gray-800"
                >
                    Deletar avaliação
                </h1>
                <p
                    className="text-gray-600 mt-2"
                >
                    Você <b>realmente</b> deseja <b>deletar sua avaliação</b>?
                </p>
            </header>
            <div
                className="flex flex-col items-center justify-center
                w-full gap-3 mt-4"
            >
                <Button
                    className="w-full bg-red-500 hover:bg-red-600 text-white
                    font-bold py-2 px-4 rounded-lg
                    gap-x-1"
                    size="md"
                    handleClickDelay={0}
                    disabled={deleteEvaluationMutation.isPending}
                    handleClick={() => {
                        toast.promise(async () => {
                            await deleteEvaluationMutation.mutateAsync();
                            setModalOnScreen("none");
                        }, {
                            error: "Ocorreu um erro ao deletar a avaliação!",
                            pending: "Deletando avaliação...",
                            success: "Avaliação deletada com sucesso!"
                        })
                    }}
                >
                    <Trash /> Sim
                </Button>
                <Button
                    className="w-full font-bold py-2 px-4 rounded-lg
                    gap-x-1 hover:bg-primary-600"
                    size="md"
                    handleClickDelay={0}
                    handleClick={() => setModalOnScreen("none")}
                    disabled={deleteEvaluationMutation.isPending}
                >
                    <X /> Não
                </Button>
            </div>
        </figure>
    )
}