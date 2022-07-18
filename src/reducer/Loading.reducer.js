export const loadingReducer = (state, action) => {
    const {
        type,
        payload: { isLoading }
    } = action

    switch (type) {
        case 'SET_LOADING':
            return {
                ...state,
                isLoading,
            }        
        default:
            return state
    }
}