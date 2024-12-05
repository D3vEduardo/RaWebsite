import { Shield, Clock, ThumbsUp, LucideProps } from "lucide-react";

export default function Header() {

    const now: Date = new Date();
    let message: string;
    if (now.getHours() > 5 && now.getHours() < 12) {
        message = "Bom dia!";
    } else if (now.getHours() > 12 && now.getHours() < 19) {
        message = "Boa tarde!";
    } else {
        message = "Boa noite!"
    }


    const url = `https://api.whatsapp.com/send?phone=5564992351422&text=${message}%20Gostaria%20de%20fazer%20um%20orçamento!`

    return (
        <header className="bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl dm:text-6xl">
                                <span className="block">Soluções elétricas</span>
                                <span className="block text-primary-500">profissionais e seguras</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0">
                                Serviços elétricos residenciais e comerciais com qualidade e segurança.
                                Atendimento 24 horas para emergências elétricas.
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <a
                                    className="w-full rounded-md shadow border-transparent text-base flex items-center justify-center px-5 py-3 text-white bg-primary-500 hover:shadow-md hover:bg-primary-600 transition-all ease-in-out md:px-10 md:py-4 md:text-lg"
                                    target="_blank"
                                    href={url}>Solicitar orçamento</a>
                                </div>
                            </div>
                        </div>
                    </main>

                    <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6 px-4 sm:px-6 lg:px-8">
                        < Feature icon={Shield} title="Segurança Garantida" description="Profissional certificado e materiais de qualidade" />
                        < Feature icon={Clock} title="Atendimento 24h" description="Disponível para emergências elétricas" />
                        < Feature icon={ThumbsUp} title="Satisfação Total" description="Compromisso com a qualidade do serviço" />
                    </div>
                </div>
            </div>
        </header>
    )
}

type IconType = React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;

function Feature({ icon: Icon, title, description }: {icon: IconType; title: string; description: string;}) {
    return (
        <figure className="flex flex-col items-center text-center">
            <div className="bg-primary-200 w-12 h-12 rounded-md flex justify-center items-center">
                < Icon className="h-6 w-6 text-primary-500" />
            </div>
                <h3 className="text-gray-900">{title}</h3>
                <p className="text-gray-500">{description}</p>
        </figure>
    )
}