import { useState, useEffect } from "react";
import logo from "../../public/images/logo.png";

const LinkFooter = ({ text, element }: { text: string; element: Element; }) => {

    const handleClick = () => {
        element.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <span className="font-bold text-gray-500 relative
            transition-all duration-0 ocultar group
            hover:cursor-pointer"
            onClick={handleClick}>
                <h1 className="group-hover:text-orange-500 transition-all duration-300">
                    {text}
                </h1>
            
            <span
                className="absolute left-0 -bottom-1
                bg-orange-500 w-0 h-1 rounded-xl
                group-hover:w-full transition-all duration-300"
            />
        </span>
    )
}

export default function Footer() {

    const [header, setHeader] = useState<Element | null>();
    const [services, setServices] = useState<Element | null>();
    const [contact, setContact] = useState<Element | null>();

    useEffect(() => {
        setHeader(document.querySelector("#header"));
        setServices(document.querySelector("#services"));
        setContact(document.querySelector("#contact"));
    }, [])

    return (
        <footer className="flex flex-col items-center justify-center
        bg-gray-900 py-8 gap-8"
        >
            <div className="flex justify-center items-center text-center gap-2
            hover:cursor-pointer ocultar"
                onClick={() => window.open("https://wa.me/+5564992351422")}
            >
                <img src={logo} alt="RA Instalações Elétricas - LOGO"
                    className="w-12"
                />
                <h1 className="text-white font-bold text-xl mt-2"
                >RA Instalações Elétricas</h1>
            </div>
            <section className="flex justify-center items-center gap-4"
            >
                < LinkFooter element={header!} text="Início" />
                < LinkFooter element={services!} text="Serviços" />
                < LinkFooter element={contact!} text="Contato" />
            </section>
            <h3 className="text-gray-500 text-sm">© 2024 RA Instalações Elétricas. Todos os direitos reservados.</h3>
        </footer>
    )
}