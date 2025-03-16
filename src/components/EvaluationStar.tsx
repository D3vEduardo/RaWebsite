import { Star } from "lucide-react";

type PropsType = {
    selected: boolean;
}

export default function EvaluationStar({ selected }: PropsType) {
    return (
        <>
            <Star
                fill={selected ? "#fdba74" : "#d4d4d8"}
                strokeWidth={1}
                stroke={selected ? "#f97316" : "#71717b"}
                size={24}
            />
        </>
    )
}