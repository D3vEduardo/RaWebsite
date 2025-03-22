import { Star } from "lucide-react";

type PropsType = {
  total: number;
  part: number;
  value: number;
};

export default function EvaluationStatsPercentage({
  total,
  part,
  value,
}: PropsType) {
  const percentage = (part / total) * 100;
  return (
    <figure className="flex items-center justify-center gap-1">
      <h1
        className="flex items-center justify-between text-center text-lg text-primary-600
        font-semibold"
        style={{
          gap: value === 1 ? "4px" : "1px",
        }}
      >
        {value}
        <Star size={20} fill="#fdba74" stroke="#ff6900" strokeWidth={1} />
      </h1>
      <span className="w-full h-3 bg-zinc-300 rounded-lg relative">
        <span
          className="bg-primary-500 h-3 rounded-lg z-10 absolute
          left-0 top-0"
          style={{ width: `${percentage}%` }}
        />
      </span>
    </figure>
  );
}
