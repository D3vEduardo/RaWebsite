import { ComponentProps, ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";

type Props = ComponentProps<"button"> & {
    children: ReactNode;
    handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    handleClickDelay?: number;
    size: "sm" | "md" | "lg";
    animationDelay?: number;
    animationType?: "fade-up" | "fade-down" | "fade-left" | "fade-right";
}

export default function Button({ children, handleClick, handleClickDelay, className, size, animationDelay = 0, animationType, ...props }: Props) {
    const [animateButton, setAnimateButton] = useState<boolean>(false);

    const sizes = {
        sm: "text-sm",
        md: "text-md px-4 py-3",
        lg: "text-lg px-6 py-4",
    }

    const activeEffect = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnimateButton(true);
        setTimeout(() => {
            setAnimateButton(false);
            if (handleClick) {
                handleClick(e);
            }
        }, handleClickDelay ? handleClickDelay : 0);
    }

    return (
        <button
            {...props}
            data-aos={animationType}
            data-aos-delay={animationDelay}
            className={twMerge(`flex items-center justify-center text-center bg-primary-500
        rounded-lg px-3 py-2 text-zinc-50 relative overflow-hidden cursor-pointer`, className, sizes[size])}
            onClick={activeEffect}
        >
            <span
                className={twMerge(`absolute top-0 -left-[calc(100%*2)] w-[calc(100%*2)] h-full bg-primary-600
                    transition-none z-0`,
                    animateButton && "left-full transition-all duration-600"
                )}
            />
            <span
                className={twMerge(`absolute top-0 -left-[calc(100%*2)] w-[calc(100%*2)] h-full bg-primary-700
                    transition-none z-0`,
                    animateButton && "left-full transition-all duration-600 delay-190"
                )}
            />
            {children}
        </button>
    )
}