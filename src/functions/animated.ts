interface AnimatedFunctionProps {
    classe: string;
    animate: string;
}

export const AnimatedFunction = ({ classe, animate }: AnimatedFunctionProps) => {
    const elements = document.querySelectorAll(classe);

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Agrega la clase de animación al entrar
                    window.requestAnimationFrame(() => {
                        entry.target.classList.add(animate);
                    });
                } else {
                    // Elimina la clase de animación al salir
                    window.requestAnimationFrame(() => {
                        entry.target.classList.remove(animate);
                    });
                }
            });
        },
        { threshold: 0.1 } // Detecta el 10% del elemento visible
    );

    elements.forEach((el) => observer.observe(el));
};
