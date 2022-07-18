import { createContext, useReducer, useEffect } from "react";
import { themeReducer } from "../reducer/Theme.reducer";

export const ThemeContext = createContext()
const darkTheme = {
    background: '#353535',
    foreground: '#fefefe'
}
const lightTheme = {
    background: '#fefefe',
    foreground: '#353535'
}

const ThemeContextProvider = ({children}) => {
    const [themeState, dispatch] = useReducer(themeReducer, {
        isDarkTheme: false,
        theme: lightTheme
    })


    const changeTheme = () => {
        if (themeState.isDarkTheme) {
            dispatch({
                type: 'SET_THEME',
                payload: {
                    isDarkTheme: false,
                    theme: lightTheme
                }
            })
        } else {
            dispatch({
                type: 'SET_THEME',
                payload: {
                    isDarkTheme: true,
                    theme: darkTheme
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