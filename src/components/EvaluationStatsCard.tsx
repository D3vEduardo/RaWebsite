import { useQuery } from "@tanstack/react-query";
import { api } from "../assets/libs/openapi/api";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import EvaluationStatsPercentage from "./EvaluationStatsPercentage";

type PropsType = ComponentProps<"figure"> & {
  aosType?: "fade-up";
  aosDelay?: number;
};

export default function EvaluationStatsCard({
  aosType,
  aosDelay,
  className,
  ...props
}: PropsType) {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["evaluations", "evaluations_stats"],
    queryFn: async () => {
      const res = await api.GET("/evaluation/stats/");
      if (res.error)
        throw new Error(
          `Ocorreu um erro ao pegar as estatísticas das avaliações: ${res.error.message}`,
        );

      return res.data;
    },
  });

  if ((isLoading && !data) || isError) return null;

  return (
    <figure
      {...props}
      data-aos={aosType}
      data-aos-delay={aosDelay}
      className={twMerge(
        `flex flex-col justify-start gap-2 bg-gray-100 px-6 py-4 rounded-lg
            shadow-lg w-[90vw] sm:w-[450px]`,
        className,
      )}
    >
      <h1 className="text-2xl font-bold text-gray-700">Média de avaliações:</h1>
      <section className="flex flex-col gap-0">
        {data?.stats.evaluationsStats.map((stat, index) => (
          <EvaluationStatsPercentage
            total={data.stats.evaluationsQtd}
            part={stat.qtd}
            value={index + 1}
            key={index}
          />
        ))}
      </section>
    </figure>
  );
}
