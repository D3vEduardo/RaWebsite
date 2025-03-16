import { useQuery } from "@tanstack/react-query";
import { api } from "../assets/libs/openapi/api.ts";
import EvaluationCard from "../components/EvaluationCard.tsx";

export default function Evaluations() {
    const evaluationsQuery = useQuery({
        queryKey: ["evaluations_feed"],
        queryFn: getEvaluations
    });

    if (evaluationsQuery.isError || !evaluationsQuery.data?.data?.evaluations) return null;

    return (
        <div
            className="w-screen h-dvh flex flex-col items-center justify-center
            bg-zinc-50 gap-10"
        >
            <div
                className="flex flex-col items-center justify-center text-center"
            >
                <h1
                    className="text-3xl sm:text-4xl font-extrabold text-gray-900"
                >
                    Avaliações
                </h1>
                <h3
                    className="text-xl text-gray-500"
                >
                    Veja o que nossos clientes dizem sobre nosso serviço prestado.
                </h3>
            </div>
            <section>
                {evaluationsQuery.data.data.evaluations.map(evaluation => {
                    const author = evaluationsQuery.data.data?.authors?.find(
                        author => author.uid === evaluation.authorId
                    );

                    if (!author) return null;

                    return (
                        <EvaluationCard
                            type="public"
                            key={evaluation.id}
                            evaluation={{
                                ...evaluation,
                                author: {
                                    uid: author!.uid,
                                    displayName: author!.displayName,
                                    photoURL: author!.photoURL
                                }
                            }}
                        />
                    )
                })}
            </section>
        </div>
    )
}

async function getEvaluations() {
    const res = await api.GET("/evaluation/", {
        params: {
            query: {
                maxValue: "5",
                minValue: "4",
                pageSize: "2"
            }
        }
    });

    return res;
}