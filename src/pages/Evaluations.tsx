import { useQuery } from "@tanstack/react-query";
import { api } from "../assets/libs/openapi/api.ts";
import EvaluationCard from "../components/EvaluationCard.tsx";
import EvaluationStatsCard from "../components/EvaluationStatsCard.tsx";

export default function Evaluations() {
  const evaluationsQuery = useQuery({
    queryKey: ["evaluations_feed", "evaluations"],
    queryFn: getEvaluations,
  });

  if (evaluationsQuery.isError || !evaluationsQuery.data?.data?.evaluations)
    return null;

  return (
    <div
      className="w-screen min-h-dvh flex flex-col items-center justify-center
            bg-zinc-50 gap-10 pt-14 pb-8 sm:pt-2 sm:pb-4"
    >
      <div className="flex flex-col items-center justify-center text-center">
        <h1
          className="text-3xl sm:text-4xl font-extrabold text-gray-900"
          data-aos="fade-up"
        >
          Avaliações
        </h1>
        <h3
          data-aos="fade-up"
          className="text-xl text-gray-500">
          Veja o que nossos clientes dizem sobre nosso serviço prestado.
        </h3>
      </div>
      <section
        className="grid grid-cols-1 lg:grid-cols-2
                content-center gap-12"
      >
        {evaluationsQuery.data.data.evaluations.map((evaluation, index) => {
          const author = evaluationsQuery.data.data?.authors?.find(
            (author) => author.uid === evaluation.authorId,
          );

          if (!author) return null;

          return (
            <EvaluationCard
              aosDelay={index * 300}
              type="public"
              key={evaluation.id}
              evaluation={{
                ...evaluation,
                author: {
                  uid: author!.uid,
                  displayName: author!.displayName,
                  photoURL: author!.photoURL,
                },
              }}
            />
          );
        })}
        <EvaluationStatsCard aosType="fade-up" aosDelay={900} />
      </section>
    </div>
  );
}

async function getEvaluations() {
  const res = await api.GET("/evaluation/", {
    params: {
      query: {
        maxValue: 5,
        minValue: 4,
        pageSize: 3,
        randomized: true,
      },
    },
  });

  return res;
}
