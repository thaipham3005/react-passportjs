import { createContext, useReducer, useEffect } from "react";
import { themeReducer } from "../reducer/Theme.reducer";

export const ThemeContext = createContext()


const ThemeContextProvider = ({children}) => {
    const [themeState, dispatch] = useReducer(themeReducer, {
        isDarkTheme: false,
        theme: 'light-theme'
    })


    const changeTheme = () => {
        if (themeState.isDarkTheme) {
            dispatch({
                type: 'SET_THEME',
                payload: {
                    isDarkTheme: false,
                    theme: 'light-theme'
                }
            })
        } else {
            dispatch({
                type: 'SET_THEME',
                payload: {
                    isDarkTheme: true,
                    theme: 'dark-theme'
                }
            })
        }
    }

    const themeContextData = {changeTheme, themeState}

    return (
        <ThemeContext.Provider value={themeContextData}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider