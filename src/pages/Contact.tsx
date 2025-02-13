import { MapPin, MessageCircle, Phone } from "lucide-react";
import { IconType } from "../assets/types/IconType";

//const phoneNumber = '+556499235-1422';

export default function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center
        w-screen min-h-screen bg-zinc-50 gap-10"
    >
      <section className="text-center gap-2">
        <h1 className="text-3xl font-extrabold text-gray-800"
        data-aos="fade-up"
        >
          Entre em Contato
        </h1>
        <h2 className="text-xl text-zinc-500"
        data-aos="fade-up"
        >
          Estamos prontos para atender as suas necessidades
        </h2>
      </section>
      <section className="flex flex-col lg:flex-row gap-8 items-center justify-center">
        <Card
          onClick={() => window.open("tel:+5564992351422")}
          name="Telefone"
          description="(64) 99235-1422"
          expectedTime="Disponível 24/7 para emergências"
          icon={Phone}
          delay={300}
        />
        <Card
          delay={600}
          onClick={() => window.open("https://wa.me/+5564992351422")}
          name="WhatsApp"
          description="(64) 99235-1422"
          expectedTime="Resposta em até 24 horas"
          icon={MessageCircle}
        />
        <Card
          delay={900}
          onClick={() =>
            window.open("https://maps.app.goo.gl/eMypBHzysJ5kN3Hw7")
          }
          name="Endereço"
          description="Av. Brasil - Rio Verde, Goiás"
          expectedTime="Atendemos toda região"
          icon={MapPin}
        />
      </section>
    </div>
  );
}

type CardProps = {
  delay?: number;
  name: string;
  description: string;
  expectedTime: string;
  icon: IconType;
  onClick: () => void;
};

function Card({
  name,
  description,
  expectedTime,
  icon: Icon,
  onClick,
  delay = 0,
}: CardProps) {
  return (
    <figure
      onClick={onClick}
      className={`flex items-center justify-start w-full
            bg-white px-4 py-4 gap-x-4 rounded-lg shadow-md
            lg:w-auto
            hover:cursor-pointer
        `}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div
        className="w-12 h-12 bg-primary-200
                flex items-center justify-center rounded-md"
      >
        <Icon className="text-primary-600" />
      </div>

      <section>
        <h1 className="text-xl text-zinc-900">{name}</h1>
        <h2 className="text-zinc-600">{description}</h2>
        <h3 className="text-zinc-500 text-sm">{expectedTime}</h3>
      </section>
    </figure>
  );
}
