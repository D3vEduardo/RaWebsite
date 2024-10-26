import { useEffect, useState } from "react";
import "./header.css";
import logo from "../../../public/logo.svg";
import Button from "../button/button";

export default function Header() {
  const text = "R A Instalações Elétricas";
  const [displayText, setDisplayText] = useState<string>(""); // Corrigido para displayText

  useEffect(() => {
    let index = 0;
    const loop = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prev) => prev + text.charAt(index));
        index = index + 1;
        console.log(index);
      } else {
        clearInterval(loop);
      }
    }, 150);

    return () => clearInterval(loop);
  }, []);

  return (
    <header>
      <section className="section">
        <img src={logo} alt="RA Instalações Elétricas - LOGO" />
        <div className="texts">
          <h1 className="text-gradient">
            {displayText}
            <span className="cursor" />
          </h1>
          <p>
            Na R.A. Instalações Elétricas, oferecemos{" "}
            <span className="text-gradient">
              soluções elétricas de qualidade
            </span>{" "}
            com foco em segurança e eficiência. Nossa equipe de profissionais
            experientes está pronta para atender suas necessidades, desde
            instalações residenciais até projetos comerciais. Priorizamos um
            atendimento personalizado, utilizando{" "}
            <span className="text-gradient">tecnologia de ponta</span> para
            garantir resultados duradouros. Confie em nós para iluminar seu
            espaço com <span className="text-gradient">excelência</span>!
          </p>
        </div>
      </section>
        <Button theme="dark">Chama no zap!</Button>
    </header>
  );
}
