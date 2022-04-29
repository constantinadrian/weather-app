import { useState, useEffect, useCallback } from "react";

const useDarkMode = () => {
    const defaultDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;
    const [theme, setTheme] = useState(defaultDark ? "dark" : "light");

    useEffect(() => {
        if (localStorage.getItem("theme")) {
            const themeLocalStorage = localStorage.getItem("theme");
            setTheme(themeLocalStorage);
        }
    },[]);

    const themeToggler = useCallback((themeMode) => {
        window.localStorage.setItem('theme', themeMode);
        setTheme(themeMode);
    },[]);

    return [theme, themeToggler]
};

export default useDarkMode;
