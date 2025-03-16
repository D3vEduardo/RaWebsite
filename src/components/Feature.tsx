import { IconType } from "../assets/types/IconType.ts";

type Props = {
  icon: IconType;
  title: string;
  description: string;
  id: string;
  delay?: number;
};

export default function Feature({
  icon: Icon,
  title,
  description,
  id,
  delay = 0,
}: Props) {
  return (
    <figure
      data-aos="fade-up"
      data-aos-delay={delay}
      id={id}
      className="flex flex-col items-center text-center cursor-pointer"
    >
      <div
        className="bg-primary-200 w-12 h-12 rounded-md
                flex justify-center items-center"
      >
        <Icon className="h-6 w-6 text-primary-500" />
      </div>
      <h3 className="text-gray-900">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </figure>
  );
}
