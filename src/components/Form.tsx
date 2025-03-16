import { ReactNode } from "react";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type Props = ComponentProps<"form"> & {
    children: ReactNode,
}

export default function Form({ children, className, ...props }: Props) {
    return (
        <form
            {...props}
            className={twMerge(`
                flex flex-col justify-center items-center
                bg-white rounded-lg shadow-lg
                px-8 py-6
            `, className)}
        >
            {children}
        </form>
    )
}