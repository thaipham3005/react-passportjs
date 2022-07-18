export const themeReducer = (state, action) => {
    const {
        type,
        payload: { isDarkTheme, theme }
    } = action

    switch (type) {
        case 'SET_DARK':
            return {
                ...state,
                isDarkTheme,
                theme
            }
        case 'SET_LIGHT':
            return {
                ...state,
                isDarkTheme,
                theme
            }
        default:
            return state
    }
}