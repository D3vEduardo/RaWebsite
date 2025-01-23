import { useEffect } from "react";

export function ScrollAnimation () {
    useEffect(() => {
        const figures = document.querySelectorAll(".ocultar");
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entrie => {
                if (entrie.isIntersecting) {
                    entrie.target.classList.add("mostrar")
                } else {
                    entrie.target.classList.remove("mostrar")
                }
            })
        });
        figures.forEach(figure => observer.observe(figure))
    }, [])

    return null;
}