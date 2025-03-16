import { IconType } from "../assets/types/IconType.ts";

type Props = {
  name: string;
  description: string;
  icon: IconType;
  delay: number;
};

export default function CardService({ name, description, icon: Icon, delay }: Props) {
  return (
    <figure
      data-aos="fade-up"
      data-aos-delay={delay}
      className="flex flex-col gap-1 justify-center items-center
                  mt-6 max-w-80 bg-white px-4 py-8 rounded-xl shadow-lg
                  hover:cursor-pointer
              "
    >
      <div
        className="w-12 h-12 bg-primary-500
                  flex items-center justify-center
                  rounded-lg"
      >
        <Icon className="h-6 w-6 text-zinc-50" />
      </div>

      <div className="text-center gap-0">
        <h1 className="text-zinc-900 text-xl">{name}</h1>
        <h3 className="text-zinc-500">{description}</h3>
      </div>
    </figure>
  );
};
