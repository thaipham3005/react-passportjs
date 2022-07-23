import { createContext, useReducer, useEffect } from "react";
import { themeReducer } from "../reducer/Theme.reducer";
import { themeLight } from "./Themes";


const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {
    const initialState = localStorage['DARK_THEME'] === 'true' ? true : false

    console.log(initialState)
    const [themeState, setThemeState] = useReducer(themeReducer, {
        isDarkTheme: initialState ,
        theme: '',
        colors: {}
    })
    const loadTheme = () => {
        if (!!localStorage['DARK_THEME']) {
            setThemeState({
                type: 'SET_THEME',
                payload: {
                    isDarkTheme: initialState,
                }
            })
        }
    }

    useEffect(() => loadTheme(), [])

    const changeTheme = () => {
        setThemeState({
            type: 'SET_THEME',
            payload: {
                isDarkTheme: !themeState.isDarkTheme,
            }
        })
    }    

    useEffect(() => {
        localStorage.setItem('DARK_THEME', themeState.isDarkTheme)        
    }, [themeState])
    

    const themeContextData = { changeTheme, themeState }

    return (
        <ThemeContext.Provider value={themeContextData} theme={themeState.colors}>
            {children}
        </ThemeContext.Provider>
    )
}

const ThemeConsumer = ThemeContext.Consumer
export { ThemeContext, ThemeConsumer }
export default ThemeContextProvider