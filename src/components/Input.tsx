import { ComponentProps, Dispatch, SetStateAction } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends ComponentProps<"input"> {
  label: string;
  setInputValue?: Dispatch<SetStateAction<string>>
}

export default function Input({ className, id, label, setInputValue, ...props }: InputProps) {
  return (
    <div className="w-full mb-4">
      <label
        className="text-gray-700 font-semibold text-start flex items-start justify-start w-full mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        onChange={e => setInputValue && setInputValue(e.target.value)}
        className={twMerge(
          `w-full bg-gray-100 text-gray-800 px-4 py-3 rounded-lg focus:outline-none
                    focus:ring-2 focus:ring-zinc-400 shadow-sm`,
          className
        )}
        {...props}
        maxLength={300}
      />
    </div>
  );
}