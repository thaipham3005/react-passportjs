import { createContext, useReducer, useEffect, useMemo } from "react";
import { themeReducer } from "../reducer/Theme.reducer";


const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {
    const initialState = useMemo(()=>{
        return localStorage['DARK_THEME'] === 'true' ? true : false
    }) 

    // console.log(initialState)

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
    

    
    const value = useMemo(()=>{
        const themeContextData = { changeTheme, themeState }
        return themeContextData
    },[themeState])

    return (
        <ThemeContext.Provider value={value} >
            {children}
        </ThemeContext.Provider>
    )
}

const ThemeConsumer = ThemeContext.Consumer
export { ThemeContext, ThemeConsumer }
export default ThemeContextProvider