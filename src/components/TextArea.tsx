import { ComponentProps, Dispatch, SetStateAction } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface InputProps extends ComponentProps<"textarea"> {
    label: string;
    setInputValue?: Dispatch<SetStateAction<string>>,
    register: UseFormRegister<{
        content: string;
        value: number;
    }>
}

export default function TextArea({ register, className, id, label, ...props }: InputProps) {
    return (
        <div className="w-full mb-4">
            <label
                className="text-gray-700 font-semibold text-start flex items-start justify-start w-full mb-2"
                htmlFor={id}
            >
                {label}
            </label>
            <textarea
                {...register("content")}
                className={twMerge(
                    `w-full bg-gray-100 text-gray-800 px-4 py-3 rounded-lg focus:outline-none
                    focus:ring-2 focus:ring-zinc-400 shadow-sm resize-none`,
                    className
                )}
                maxLength={300}
                {...props}
            />
        </div>
    );
}