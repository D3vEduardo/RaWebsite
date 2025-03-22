import { Pencil, Trash } from "lucide-react";
import { ComponentProps, Dispatch, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";
import { Evaluation } from "../assets/types/Evaluation.ts";
import UserProfilePhoto from "./UserProfilePhoto.tsx";
import EvaluationStar from "./EvaluationStar.tsx";

type Props = ComponentProps<"figure"> & {
  aosDelay?: number;
  evaluation: Evaluation;
  type?: "public" | "profile";
  setModalOnScreen?: Dispatch<SetStateAction<"edit" | "delete" | "none">>;
};

export default function EvaluationCard({
  evaluation,
  className,
  type,
  setModalOnScreen,
  aosDelay = 0,
  ...props
}: Props) {
  if (type === "profile") {
    return (
      <figure
        {...props}
        className={twMerge(
          `
                flex flex-col items-center justify-between p-2 max-w-[350px]
                bg-gradient-to-br from-gray-300 gap-2 rounded-xl group
                border-2 border-gray-300`,
          className,
        )}
      >
        <div
          className="flex items-start justify-between
                    w-full"
        >
          <EvaluationStars value={evaluation.value} />
          <aside className="flex items-center justify-center gap-1">
            <Trash
              onClick={() => setModalOnScreen && setModalOnScreen("delete")}
              className="w-5 text-primary-700 cursor-pointer"
            />
            <Pencil
              onClick={() => setModalOnScreen && setModalOnScreen("edit")}
              className="w-5 text-primary-700 cursor-pointer"
            />
          </aside>
        </div>
        <p className="text-gray-800 font-medium w-full break-words">
          {evaluation.content}
        </p>
      </figure>
    );
  }

  return (
    <figure
      {...props}
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className={twMerge(
        `flex flex-col items-center gap-2 bg-gray-100 px-6 py-4 rounded-lg
            shadow-lg w-auto max-w-[90vw] sm:max-w-[450px]`,
        className,
      )}
    >
      <header
        className="flex flex-col w-full
                justify-center items-start gap-1"
      >
        <div className="flex gap-2 items-center">
          <UserProfilePhoto
            photoURL={evaluation.author.photoURL}
            className="h-18 rounded-xl"
            displayName={evaluation.author.displayName}
          />
          <div className="flex flex-col items-start justify-center">
            <p
              className="text-gray-700 font-bold text-2xl
                            max-w-[17ch] truncate"
            >
              {evaluation.author.displayName || "User"}
            </p>
            <EvaluationStars value={evaluation.value} />
          </div>
        </div>
      </header>
      <div className="flex items-center justify-start w-full">
        <p
          className="text-gray-700 max-w-[400px] text-start text-xl
                break-words"
        >
          {evaluation.content}
        </p>
      </div>
    </figure>
  );
}

function EvaluationStars({ value }: { value: number }) {
  return (
    <span className="flex justify-center items-center">
      {Array.from({ length: 5 }).map((_, index) => (
        <EvaluationStar key={index} selected={index < value} />
      ))}
    </span>
  );
}
