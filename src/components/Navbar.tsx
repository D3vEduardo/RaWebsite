import logo from "../../public/images/logo.png";

const NavLink = ({ text }: { text: string; }) => {
    return <li className="font-bold text-gray-800 
    hover:text-primary-600 hover:cursor-pointer
    transition-all ease-in-out duration-300">{text}</li>
}

export default function Navbar() {
    return (
        <nav className="fixed flex top-0 left-0
            w-screen h-16 md:h-auto lg:h-auto
            justify-between items-center px-6 py-2
            rounded-b-3xl shadow-md"
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
                < NavLink text="Início" />
                < NavLink text="Serviços" />
                < NavLink text="Sobre" />
                < NavLink text="Contato" />
            </ul>
        </nav>
    )
}