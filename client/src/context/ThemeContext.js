import { createContext, useReducer } from "react";
import { SET_LIGHT_THEME, SET_DARK_THEME } from "./ThemeActionTypes";

export const StateThemeContext = createContext();
export const DispatchThemeContext = createContext();

const initialState = {
    theme: "light",
};

const themeReducer = (state, action) => {
    switch (action.type) {
        case SET_LIGHT_THEME:
            return {
                ...state,
                theme: action.theme.toLowerCase(),
            };
        case SET_DARK_THEME:
            return {
                ...state,
                theme: action.theme.toLowerCase(),
            };
        default:
            return state;
    }
};

const ThemeContextProvider = (props) => {
    const [stateTheme, dispachTheme] = useReducer(
        themeReducer,
        initialState,
        () => {
            if (localStorage.getItem("theme")) {
                const themeLocalStorage = localStorage.getItem("theme");
                return { theme: themeLocalStorage };
            } else {
                const defaultDark = window.matchMedia && window.matchMedia(
                    "(prefers-color-scheme: dark)"
                ).matches;
                const browserTheme = defaultDark ? "dark" : "light";
                return { theme: browserTheme };
            }
        }
    );

    return (
        <DispatchThemeContext.Provider value={dispachTheme}>
            <StateThemeContext.Provider value={stateTheme}>
                {props.children}
            </StateThemeContext.Provider>
        </DispatchThemeContext.Provider>
    );
};

export default ThemeContextProvider;
