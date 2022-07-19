export const authReducer = (state, action) => {
    const {
        type,
        payload: { isAuthenticated, user, role, permissions }
    } = action

    switch (type) {
        case 'SET_AUTH':
            return {
                ...state,
                authLoading: false,
                isAuthenticated,
                user,
                role, 
                permissions
            }
        default:
            return state
    }
}