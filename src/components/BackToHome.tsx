import { House } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BackToHome() {
    const navigate = useNavigate();
    return (
        <span
            onClick={() => navigate("/")}
            className="bg-primary-500 text-white
            p-3 rounded-xl absolute left-95/100 bottom-7 cursor-pointer overflow-hidden
            hover:bg-primary-600 hover:w-[160px] hover:left-[87.5%] group gap-1
            flex items-center justify-center w-[50px] h-[50px]
            transition-all duration-500 ease-in-out"
        >
            <House
                className="absolute left-auto top-auto
                group-hover:left-75/100
                transition-all duration-500 ease-in-out"
            />
            <p
                className="absolute -left-25 opacity-0
                group-hover:left-4 group-hover:opacity-100
                transition-all duration-300 ease-in-out delay-0 group-hover:delay-300
                whitespace-nowrap"
            >Ir para Home</p>
        </span>
    );
}