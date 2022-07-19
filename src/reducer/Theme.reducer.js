export const themeReducer = (state, action) => {
    const {
        type,
        payload: { isDarkTheme, theme }
    } = action

    switch (type) {
        case 'SET_THEME':
            return {
                ...state,
                isDarkTheme,
                theme
            }
       
        default:
            return state
    }
}