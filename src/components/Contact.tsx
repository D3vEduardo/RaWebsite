import { MapPin, MessageCircle, Phone } from "lucide-react";
import { IconType } from "../assets/types/IconType";

const phoneNumber = '+556499235-1422';

export default function Contact() {
    return (
        <div id="contact"
        className="flex flex-col justify-center items-center
        w-screen h-screen bg-zinc-50 gap-10"
        >
            <section className="text-center gap-2">
                <h1
                    className="text-3xl font-extrabold text-zinc-800"
                >Entre em Contato</h1>
                <h2
                    className="text-xl text-zinc-500"
                >Estamos prontos para atender as suas necessidades</h2>
            </section>
            <section
                className="flex flex-col lg:flex-row gap-8 items-center justify-center"
            >
                <Card
                    name="Telefone"
                    description="(64) 99235-1422"
                    expectedTime="Disponível 24/7 para emergências"
                    icon={Phone}
                />
                <Card
                    name="WhatsApp"
                    description="(64) 99235-1422"
                    expectedTime="Resposta em até 24 horas"
                    icon={MessageCircle}
                />
                <Card
                    name="Endereço"
                    description="Av. Brasil - Rio Verde, Goiás"
                    expectedTime="Atendemos toda região"
                    icon={MapPin}
                />
            </section>
        </div>
    )
}

type CardProps = {
    name: string;
    description: string;
    expectedTime: string;
    icon: IconType;
}

function Card({ name, description, expectedTime, icon: Icon }: CardProps) {
    return (
        <figure
            className="flex items-center justify-start w-full
            bg-white px-4 py-4 gap-x-4 rounded-lg shadow-md
            lg:w-auto
            hover:cursor-pointer hover:-translate-y-1 hover:shadow-lg
            duration-500 ease-in-out"
        >
            <div className="w-12 h-12 bg-primary-200
                flex items-center justify-center rounded-md">
                < Icon className="text-primary-600" />
            </div>
            
            <section>
                <h1
                    className="text-xl text-zinc-900"
                >{name}</h1>
                <h2 className="text-zinc-600">{description}</h2>
                <h3 className="text-zinc-500 text-sm">{expectedTime}</h3>
            </section>
        </figure>
    )
}