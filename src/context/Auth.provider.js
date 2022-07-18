import { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import { authReducer } from "../reducer/Auth.reducer";
import setAuthToken from '../helpers/setAuthToken'
import { TOKEN_NAME, apiURL } from "../utils/constants";

const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, {
        authLoading: true,
        isAuthenticated: false,
        user: null
    })

    const loadUser = async () => {
        if (localStorage[TOKEN_NAME]) {
            setAuthToken(localStorage[TOKEN_NAME])
        }

        try {
            const response = await axios.get(`${apiURL}/auth`)
            if (response.data.success) {
                dispatch({
                    type: 'SET_AUTH',
                    payload: {
                        isAuthenticated: true,
                        user: response.data.user
                    }
                })
            }
        } catch (error) {
            localStorage.removeItem(TOKEN_NAME);
            setAuthToken(null);
            dispatch({
                type: 'SET_AUTH',
                payload: {
                    isAuthenticated: false,
                    user: null
                }
            })
        }
    }

    useEffect(() => loadUser(), [])

    const login = async userInfo => {
        try {
            const response = await axios.post(`${apiURL}/auth/login`, userInfo)
            if (response) {
                localStorage.setItem(TOKEN_NAME, response.data.accessToken)

                await loadUser()
                return response.data
            }
        } catch (error) {
            if (error.response)
                return error.response.data;
            else
                return { success: false, message: error.message }
        }
    }

    const register = async userInfo => {
        try {
            const response = await axios.post(`${apiURL}/auth/resgister`, userInfo)

            if (response) {
                localStorage.setItem(TOKEN_NAME, response.data.accessToken)

                await loadUser()
                return response.data
            }
        } catch (error) {
            if (error.response)
                return error.response.data;
            else
                return { success: false, message: error.message }
        }
    }

    const authContextData = { login, register, authState }

    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}
export {AuthContext}
export default AuthContextProvider