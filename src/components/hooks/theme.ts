import { useState, useEffect } from "react";

type Theme = "dark" | "light"; //el tipo 

// Definimos el hook personalizado useTheme
export const useTheme = () => {
    // se crea un estado para el tema con un valor inicial que se obtiene del almacenamiento local
    // Si no hay nada en el almacenamiento local, se usa la preferencia del sistema
    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem("theme") as Theme;
        if (savedTheme === "dark" || savedTheme === "light") 
            return savedTheme;
        
        return window.matchMedia("(prefers-color-scheme: dark)").matches? "dark": "light";
    });

    //un estado para saber si el modo oscuro está activado
    const [isDarkMode, setIsDarkMode] = useState<boolean>(theme === "dark");

    // Usamos useEffect para realizar acciones cuando el tema cambia
    useEffect(() => {
        // se guarda el tema en el almacenamiento local
        localStorage.setItem("theme", theme);
        // se cctualiza el estado de isDarkMode
        setIsDarkMode(theme === "dark");
        (theme === "dark")? document.documentElement.classList.add("dark"): document.documentElement.classList.remove("dark");
    }, [theme]);

    const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));// funcion para cambiar el tema
    };

    return { theme, isDarkMode, toggleTheme };// Devolvemos el tema, si el modo oscuro está activado y la función para cambiar el tema
};
