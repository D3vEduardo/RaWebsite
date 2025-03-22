import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { Check, X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import Form from "../components/Form";
import { toast } from "react-toastify";
import { api } from "../assets/libs/openapi/api";
import { useAuth } from "../contexts/auth/hook";
import Button from "./Button";
import EvaluationStarsInput from "./EvaluationStarsInput";
import TextArea from "./TextArea";
import {
  EvaluationSchema,
  evaluationSchema,
} from "../assets/types/EvaluationForm";

type PropsType = {
  setModalOnScreen: Dispatch<SetStateAction<"edit" | "delete" | "none">>;
};

export default function EditEvaluationModal({ setModalOnScreen }: PropsType) {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<EvaluationSchema>({
    resolver: zodResolver(evaluationSchema),
  });
  const mutation = useMutation({
    mutationFn: async ({ content, value }: EvaluationSchema) => {
      if (!user) return;
      const accessToken = await user.getIdToken();
      console.log(accessToken);
      const res = await api.PUT("/evaluation/", {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
        body: {
          content,
          value,
        },
      });

      if (res.error) {
        throw new Error("Ocorreu um erro ao editar a avaliação: " + res.error);
      }
      return res;
    },
    onSuccess: () => {
      if (user) {
        queryClient.invalidateQueries({
          queryKey: ["evaluations", user.uid],
        });
        setModalOnScreen("none");
      }
    },
  });

  if (errors.content) {
    toast.error(errors.content.message);
  }

  return (
    <main className="flex flex-col items-center justify-center w-[90vw] md:max-w-[400px] gap-4">
      <Form
        onSubmit={handleSubmit((data) => {
          console.log("Form", data);
          toast.promise(async () => await mutation.mutateAsync(data), {
            pending: "Editando avaliação...",
            error: "Ocorreu um erro ao editar a avaliação!",
            success: "Avaliação editada com sucesso!",
          });
        })}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    w-9/10 max-w-[450px] z-30 gap-4 border-2 border-gray-200"
      >
        <h1 className="text-2xl font-extrabold text-gray-800">
          Editar sua avaliação
        </h1>
        <TextArea
          register={register}
          className="h-25"
          label="Escreva sua avaliação:"
          placeholder="Serviço ótimo... ;)"
          id="evaluation-content-input"
        />
        <div className="flex items-start justify-start w-full">
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
            <Check />
            Editar avaliação
          </p>
        </Button>
        <Button
          type="button"
          size="lg"
          className="w-full bg-red-500"
          handleClick={() => setModalOnScreen("none")}
          handleClickDelay={0}
          disabled={mutation.isPending}
        >
          <p
            className="flex items-center gap-x-1 justify-center text-center z-20 text-lg
                                    font-extrabold"
          >
            <X />
            Cancelar
          </p>
        </Button>
      </Form>
    </main>
  );
}
