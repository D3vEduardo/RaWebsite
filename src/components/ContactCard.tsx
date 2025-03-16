import { IconType } from "../assets/types/IconType.ts";

type Props = {
    delay?: number;
    name: string;
    description: string;
    expectedTime: string;
    icon: IconType;
    onClick: () => void;
};

export default function ContactCard({
    name,
    description,
    expectedTime,
    icon: Icon,
    onClick,
    delay = 0,
}: Props) {
    return (
        <figure
            onClick={onClick}
            className={`flex items-center justify-start w-full
              bg-white px-4 py-4 gap-x-4 rounded-lg shadow-md
              lg:w-auto
              hover:cursor-pointer
          `}
            data-aos="fade-up"
            data-aos-delay={delay}
        >
            <div
                className="w-12 h-12 bg-primary-200
                  flex items-center justify-center rounded-md"
            >
                <Icon className="text-primary-600" />
            </div>

            <section>
                <h1 className="text-xl text-zinc-900">{name}</h1>
                <h2 className="text-zinc-600">{description}</h2>
                <h3 className="text-zinc-500 text-sm">{expectedTime}</h3>
            </section>
        </figure>
    );
}
