import { House, Building2, Power } from "lucide-react";
import CardService from "../components/CardService";


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
        <CardService
          name="Instalações Residenciais"
          description="Instalação e manutenção elétrica completa para sua casa"
          icon={House}
          delay={0}
        />
        <CardService
          name="Instalações Comerciais"
          description="Soluções elétricas profissionais para seu negócio"
          icon={Building2}
          delay={300}
        />
        <CardService
          name="Quadros Elétricos"
          description="Montagem e manutenção de quadros de distribuição"
          icon={Power}
          delay={600}
        />
      </section>
    </div>
  );
}
