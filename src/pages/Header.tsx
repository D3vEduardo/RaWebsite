import { Shield, Clock, ThumbsUp, MessageSquareShare } from "lucide-react";
import Feature from "../components/Feature";
import { TypeAnimation } from "react-type-animation";
import Button from "../components/Button";

export default function Header() {
  const now: Date = new Date();
  let message: string;
  if (now.getHours() > 5 && now.getHours() < 12) {
    message = "Bom dia!";
  } else if (now.getHours() > 12 && now.getHours() < 19) {
    message = "Boa tarde!";
  } else {
    message = "Boa noite!";
  }

  const url = `https://api.whatsapp.com/send?phone=5564992351422&text=${message}%20Gostaria%20de%20fazer%20um%20orçamento!`;

  return (
    <header
      id="header"
      className="flex flex-col
            w-screen min-h-screen bg-zinc-50"
    >
      <div className="w-full h-auto px-5 mt-20  lg:mt-28 lg:ml-16 overflow-hidden">
        <h1
          className="text-gray-900 font-extrabold text-4xl
                        sm:text-4xl md:text-5xl lg:text-6xl"
        >
          <span className="block" data-aos="fade-right" data-aos-delay={200}>
            Soluções elétricas
          </span>
          <span data-aos="fade-right" data-aos-delay={600}>
            <TypeAnimation
              sequence={[
                "profissionais,",
                2000,
                "seguras,",
                2000,
                "de qualidade,",
                2000,
              ]}
              cursor={true}
              repeat={Infinity}
              wrapper="p"
              className="text-primary-500"
            />
          </span>
        </h1>
        <p
          className="text-start text-gray-500
                        sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-0"
        >
          <span data-aos="fade-right" data-aos-delay={300}>
            Serviços elétricos residenciais e comerciais com qualidade e
            segurança.{" "}
          </span>
          <span data-aos="fade-right" data-aos-delay={500}>
            Atendimento 24 horas para emergências elétricas.
          </span>
        </p>
        <div
          className="w-full mt-4 sm:mt-6 flex sm:justify-start"
        >
          <Button
            className="font-semibold"
            animationDelay={500}
            animationType="fade-right"
            handleClick={() => window.open(url)}
            size="lg"
          >
            <p
              className="z-10 flex text-center items-center justify-center"
            >
              <MessageSquareShare className="w-6 h-6 mr-2" /> Solicitar orçamento
            </p>
          </Button>
        </div>
      </div>
      <div
        className="grid grid-cols-1 h-auto mt-20 gap-4
                sm:mt-20 md:mt-24 lg:mt-24
                sm:grid-cols-3"
        id="features"
      >
        <Feature
          id="feature1"
          icon={Shield}
          title="Segurança Garantida"
          description="Profissional certificado e materiais de qualidade"
        />
        <Feature
          id="feature2"
          icon={Clock}
          delay={300}
          title="Atendimento 24h"
          description="Disponível para emergências elétricas"
        />
        <Feature
          id="feature3"
          icon={ThumbsUp}
          delay={600}
          title="Satisfação Total"
          description="Compromisso com a qualidade do serviço"
        />
      </div>
    </header>
  );
}
