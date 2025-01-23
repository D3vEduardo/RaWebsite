import { useEffect, useState } from "react";
import logo from "../../public/images/logo.png";

const NavLink = ({ text, element }: { text: string; element: Element; }) => {

    const handleClick = () => {
        element.scrollIntoView({ behavior: "smooth" })
    }

    return (
    <li className="relative font-bold text-gray-800 
    hover:text-primary-600 hover:cursor-pointer
    transition-all ease-in-out duration-300 group"
        onClick={handleClick}>
        {text}
        <span
            className="absolute left-0 bottom-0
                bg-orange-500 w-0 h-1 rounded-xl
                group-hover:w-full transition-all duration-300"
        />
    </li>
    )
}

export default function Navbar() {

    const [header, setHeader] = useState<Element | null>();
    const [services, setServices] = useState<Element | null>();
    const [contact, setContact] = useState<Element | null>();

    useEffect(() => {
        setHeader(document.querySelector("#header"));
        setServices(document.querySelector("#services"));
        setContact(document.querySelector("#contact"));
    }, [])

    return (
        <nav className="fixed flex top-0 left-0
            w-screen h-16 md:h-auto lg:h-auto
            justify-between items-center px-6 py-2
            rounded-b-3xl shadow-md bg-white z-50"
        >
            <div className="flex items-center group">
                <img
                    src={logo}
                    alt="RA Instalações Elétricas - Logo"
                    className="w-10 md:w-10 lg:w-12 group-hover:rotate-360 transition-all duration-1000"
                />
                <h1 className="text-gray-900 font-bold text-xl ml-3
                invisible lg:visible md:visible">RA Instalações Elétricas</h1>
            </div>

            <ul className="flex items-center justify-center gap-x-4">
                < NavLink element={header!} text="Início" />
                < NavLink element={services!} text="Serviços" />
                < NavLink element={contact!} text="Contato" />
            </ul>
        </nav>
    )
}