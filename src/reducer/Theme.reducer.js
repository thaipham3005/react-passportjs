import { themeDark, themeLight } from "../context/Themes"
export const themeReducer = (state, action) => {
    const {
        type,
        payload: { isDarkTheme }
    } = action

    switch (type) {
        case 'SET_THEME':
            return {
                ...state,
                isDarkTheme,
                theme: isDarkTheme ? 'theme-dark' : 'theme-light',
                colors: isDarkTheme ? themeDark : themeLight
            }

        default:
            return state
    }
}