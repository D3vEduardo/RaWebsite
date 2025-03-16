import { Star } from "lucide-react";
import { useState } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import EvaluationStar from "./EvaluationStar";

type PropsType = {
    register: UseFormRegister<{
        content: string;
        value: number;
    }>;
    setEvaluationValue: UseFormSetValue<{
        content: string;
        value: number;
    }>;
}

export default function EvaluationStarsInput({ register, setEvaluationValue }: PropsType) {

    const [valueSelected, setValueSelected] = useState<number>(1);
    setEvaluationValue("value", valueSelected);
    const evaluationTexts = [
        "Péssimo",
        "Ruim",
        "Bom",
        "Muito bom",
        "Excelente"
    ];

    const handleStarClick = (value: number) => {
        setValueSelected(value);
    }

    return (
        <div
            className="flex flex-col justify-start items-start"
        >
            <p
                className="font-semibold text-zinc-600"
            >
                Valor da avaliação:
            </p>
            <span
                className="flex justify-center items-center"
            >
                {Array.from({ length: 5 }).map((_, index) => (
                    <label
                        htmlFor={`evaluation-stars-input-${index + 1}`}
                        className="cursor-pointer"
                        key={index}
                    >
                        <EvaluationStar
                            selected={index < valueSelected}
                        />
                        <input
                            {...register("value", { required: true })}
                            id={`evaluation-stars-input-${index + 1}`}
                            onClick={() => handleStarClick(index + 1)}
                            value={index + 1}
                            type="radio"
                            className="peer hidden"
                            checked={index + 1 === (valueSelected || 1)}
                        />
                    </label>
                ))}
                <span
                    className="h-2 w-2 ml-2 bg-gradient-to-br
                from-zinc-500 to-zinc-800 rounded-full"
                />
                <p
                    className="font-bold bg-gradient-to-br from-orange-500 to-primary-700
                text-transparent bg-clip-text ml-2 text-lg"
                >
                    {evaluationTexts[valueSelected - 1]}
                </p>
            </span>
        </div>
    )
}