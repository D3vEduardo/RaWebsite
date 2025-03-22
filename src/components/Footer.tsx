import { useState, useEffect } from "react";
import logo from "../../public/images/logo.png";

const LinkFooter = ({
  text,
  element,
}: {
  text: string;
  element: Element;
  delay?: number;
}) => {
  const handleClick = () => {
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <span
      className="font-bold text-gray-500 relative
            transition-all duration-0 group
            hover:cursor-pointer"
      onClick={handleClick}
    >
      <h1 className="group-hover:text-orange-500 transition-all duration-300">
        {text}
      </h1>

      <span
        className="absolute left-1/2 -bottom-1
                bg-orange-500 w-0 h-1 rounded-xl
                group-hover:w-full group-hover:left-0 transition-all duration-300"
      />
    </span>
  );
};

export default function Footer() {
  const [header, setHeader] = useState<Element | null>();
  const [services, setServices] = useState<Element | null>();
  const [contact, setContact] = useState<Element | null>();

  useEffect(() => {
    setHeader(document.querySelector("#header"));
    setServices(document.querySelector("#services"));
    setContact(document.querySelector("#contact"));
  }, []);

  return (
    <footer
      className="flex flex-col items-center justify-center
        bg-gray-900 py-8 gap-8 overflow-hidden h-[220px]"
      id="footer-anchor"
    >
      <div
        className="flex justify-center items-center text-center gap-2
            hover:cursor-pointer"
        onClick={() => window.open("https://wa.me/+5564992351422")}
      >
        <img
          src={logo}
          alt="RA Instalações Elétricas - LOGO"
          className="w-12"
        />
        <h1 className="text-white font-bold text-2xl text-center">
          RA Instalações Elétricas
        </h1>
      </div>
      <section className="flex justify-center items-center gap-4">
        <LinkFooter element={header!} text="Início" delay={600} />
        <LinkFooter element={services!} text="Serviços" delay={800} />
        <LinkFooter element={contact!} text="Contato" delay={1000} />
      </section>
      <h3 className="text-gray-500 text-sm">
        © 2025 RA Instalações Elétricas. Todos os direitos reservados.
      </h3>
    </footer>
  );
}
