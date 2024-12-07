import { Shield, Clock, ThumbsUp } from "lucide-react";
import { IconType } from "../assets/types/IconType";

export default function Header() {

    const now: Date = new Date();
    let message: string;
    if (now.getHours() > 5 && now.getHours() < 12) {
        message = "Bom dia!";
    } else if (now.getHours() > 12 && now.getHours() < 19) {
        message = "Boa tarde!";
    } else {
        message = "Boa noite!"
    }


    const url = `https://api.whatsapp.com/send?phone=5564992351422&text=${message}%20Gostaria%20de%20fazer%20um%20orçamento!`

    return (
        <header
            id="header"
            className="flex flex-col
            w-screen h-screen bg-zinc-50"
        >
            <div className="w-full h-auto px-5 mt-20  lg:mt-28 lg:ml-16 overflow-hidden"
            >
                <h1
                    className="text-gray-900 font-extrabold text-4xl
                        sm:text-4xl md:text-5xl lg:text-6xl"
                >
                    <span className="block">Soluções elétricas</span>
                    <span className="block text-primary-500">profissionais e seguras</span>
                </h1>
                <p
                    className="text-base text-gray-500
                        sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0"
                >
                    Serviços elétricos residenciais e comerciais com qualidade e segurança.
                    Atendimento 24 horas para emergências elétricas.
                </p>
                <div
                    className="w-full mt-4 sm:mt-6 flex
                    sm:justify-center lg:justify-start"
                >
                    <a
                        className="rounded-md shadow-md
                        border-transparent
                        px-6 py-4
                        text-1xl text-white bg-primary-500
                        flex items-center justify-center
                        hover:shadow-lg hover:bg-primary-600
                        transition-all ease-in-out duration-300
                        md:text-lg w-full lg:w-56"  // Removido sm:w-full e adicionado w-full
                        target="_blank"
                        href={url}
                    >
                        Solicitar orçamento
                    </a>
                </div>
            </div>
            <div
                className="grid grid-cols-1 h-auto mt-20 gap-4
                sm:mt-20 md:mt-24 lg:mt-24
                sm:grid-cols-3"
            >
                < Feature icon={Shield} title="Segurança Garantida" description="Profissional certificado e materiais de qualidade" />
                < Feature icon={Clock} title="Atendimento 24h" description="Disponível para emergências elétricas" />
                < Feature icon={ThumbsUp} title="Satisfação Total" description="Compromisso com a qualidade do serviço" />
            </div>
        </header>
    )
}

function Feature({ icon: Icon, title, description }: { icon: IconType; title: string; description: string; }) {
    return (
        <figure className="flex flex-col items-center text-center cursor-pointer">
            <div
                className="bg-primary-200 w-12 h-12 rounded-md
                flex justify-center items-center"
            >
                < Icon className="h-6 w-6 text-primary-500" />
            </div>
            <h3 className="text-gray-900">{title}</h3>
            <p className="text-gray-500">{description}</p>
        </figure>
    )
}