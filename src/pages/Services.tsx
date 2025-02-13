import { House, Building2, Power } from "lucide-react";
import { IconType } from "../assets/types/IconType";

type CardProps = {
  name: string;
  description: string;
  icon: IconType;
  delay: number;
};

const Card = ({ name, description, icon: Icon, delay }: CardProps) => {
  return (
    <figure
      data-aos="fade-up"
      data-aos-delay={delay}
      className="flex flex-col gap-1 justify-center items-center
                mt-6 max-w-80 bg-white px-4 py-8 rounded-xl shadow-lg
                hover:cursor-pointer
            "
    >
      <div
        className="w-12 h-12 bg-primary-500
                flex items-center justify-center
                rounded-lg"
      >
        <Icon className="h-6 w-6 text-zinc-50" />
      </div>

      <div className="text-center gap-0">
        <h1 className="text-zinc-900 text-xl">{name}</h1>
        <h3 className="text-zinc-500">{description}</h3>
      </div>
    </figure>
  );
};

export default function Services() {
  return (
    <div
      id="services"
      className="w-screen min-h-screen flex flex-col justify-center items-center bg-zinc-50"
    >
      <section className="text-center">
        <h1
          className="text-3xl text-gray-900 font-extrabold
                    sm:text-4xl"
          data-aos="fade-up"
        >
          Nossos Serviços
        </h1>
        <p className="text-zinc-500 text-xl max-w-2xl" data-aos="fade-up">
          Oferecemos uma ampla gama de serviços elétricos para sua residência ou
          empresa.
        </p>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-8 items-center place-items-center">
        <Card
          name="Instalações Residenciais"
          description="Instalação e manutenção elétrica completa para sua casa"
          icon={House}
          delay={0}
        />
        <Card
          name="Instalações Comerciais"
          description="Soluções elétricas profissionais para seu negócio"
          icon={Building2}
          delay={300}
        />
        <Card
          name="Quadros Elétricos"
          description="Montagem e manutenção de quadros de distribuição"
          icon={Power}
          delay={600}
        />
      </section>
    </div>
  );
}
