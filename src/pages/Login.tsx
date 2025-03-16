import { LogIn } from "lucide-react";
import Button from "../components/Button";
import { useAuth } from "../contexts/auth/hook";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackToHome from "../components/BackToHome.tsx";
import logo from "../../public/images/logo.png";

export default function Login() {
    const { login, user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        console.log("login page:", user);
        if (user?.email) {
            navigate("/");
        }
    }, [navigate, user]);
    return (
        <div
            className="flex flex-col justify-center items-center w-screen bg-zinc-50
        overflow-hidden"
        >
            <section

                className="flex flex-col items-center justify-center gap-3 h-dvh w-[290px]"
            >
                <div className="text-center flex flex-col items-center justify-center">
                    <img src={logo} alt="RA Instalações Elétricas - Logo"
                        className="w-15 mb-3"
                        data-aos="fade-up"
                    />
                    <h1
                        data-aos="fade-up"
                        data-aos-delay={300}
                        className="font-black text-3xl gap-x-2 flex items-center justify-center z-10
                        text-gray-700 leading-6"
                    >Bem-vindo(a)!</h1>
                    <p
                        className="z-10 text-zinc-500"
                        data-aos="fade-up"
                        data-aos-delay={400}
                    >Acesse ou registre-se com o Google.</p>
                </div>
                <Button
                    animationDelay={600}
                    animationType="fade-up"
                    type="submit"
                    size="md"
                    className="w-full"
                    handleClick={async () => {
                        await login();
                    }}
                >
                    <p className="font-semibold gap-x-2 flex items-center justify-center z-10"> <LogIn /> Continue com o Google</p>
                </Button>
            </section>
            <BackToHome />
        </div>
    );
}