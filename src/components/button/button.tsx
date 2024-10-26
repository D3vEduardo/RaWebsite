import { ReactNode } from "react";
import "./button.css";

export default function Button({ theme, children }: { theme: "light" | "dark", children: ReactNode }) {
    return (
        <button className={theme}>
            {children}
        </button>
    )
}