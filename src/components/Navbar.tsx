import logo from "../../public/images/logo.png";

const NavLink = ({ text, element }: { text: string; element: Element; }) => {
    
    const handleClick = () => {
        element.scrollIntoView({ behavior: "smooth" })
    }
    
    return <li className="font-bold text-gray-800 
    hover:text-primary-600 hover:cursor-pointer
    transition-all ease-in-out duration-300"
    onClick={handleClick}>{text}</li>
}

export default function Navbar() {

    const header = document.querySelector("#header");
    const services = document.querySelector("#services");

    return (
        <nav className="fixed flex top-0 left-0
            w-screen h-16 md:h-auto lg:h-auto
            justify-between items-center px-6 py-2
            rounded-b-3xl shadow-md bg-white"
        >
            <div className="flex items-center">
                <img
                        src={logo}
                        alt="RA Instalações Elétricas - Logo"
                        className="w-10 md:w-10 lg:w-12"
                />
                <h1 className="text-gray-900 font-bold text-xl ml-3
                invisible lg:visible md:visible">RA Instalações Elétricas</h1>
            </div>
            
            <ul className="flex items-center justify-center gap-x-4">
                < NavLink element={header!} text="Início" />
                < NavLink element={services!} text="Serviços" />
                < NavLink element={header!} text="Sobre" />
                < NavLink element={services!} text="Contato" />
            </ul>
        </nav>
    )
}