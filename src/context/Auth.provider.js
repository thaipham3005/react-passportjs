import { createContext, useReducer, useEffect, useMemo } from "react";
import axios from "axios";
import { authReducer } from "../reducer/Auth.reducer";
import setAuthToken from '../helpers/setAuthToken'
import { TOKEN_NAME, apiURL } from "../utils/constants";

axios.defaults.withCredentials = true
const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [authState, setAuthState] = useReducer(authReducer, {
        authLoading: true,
        isAuthenticated: false,
        user: null,
        role: [],
        permissions: []
    })

    const loadUser = async () => {
        if (localStorage[TOKEN_NAME]) {
            await setAuthToken(localStorage[TOKEN_NAME])
        }

        try {
            const response = await axios.get(`${apiURL}/auth`, {
                withCredentials: true,
            })
            if (response.data.success) {
                setAuthState({
                    type: 'SET_AUTH',
                    payload: {
                        isAuthenticated: true,
                        user: response.data.user,
                        role: response.data.role,
                        permissions: response.data.permissions
                    }
                })
            }
        } catch (error) {
            localStorage.removeItem(TOKEN_NAME);
            await setAuthToken(null);
            setAuthState({
                type: 'SET_AUTH',
                payload: {
                    isAuthenticated: false,
                    user: null,
                    role: [],
                    permissions: []
                }
            })
        }
    }

    const getUserLogin = async () => {
        try {
            const response = await axios.get(`${apiURL}/auth/login/success`)
            console.log(response);
            if (response.data.success) {
                setAuthState({
                    type: 'SET_AUTH',
                    payload: {
                        isAuthenticated: true,
                        user: response.data.user.displayName,
                        role: response.data.user.role,
                        permissions: response.data.user.permissions
                    }
                })
            }
        } catch (error) {
            localStorage.removeItem(TOKEN_NAME);
            await setAuthToken(null);
            setAuthState({
                type: 'SET_AUTH',
                payload: {
                    isAuthenticated: false,
                    user: null,
                    role: [],
                    permissions: []
                }
            })
        }
    }

    useEffect(() => {
        // loadUser()
        // fakeAuth()
        getUserLogin()
    }, [])

    const fakeAuth = async () => {
        await setAuthState({
            type: 'SET_AUTH',
            payload: {
                isAuthenticated: true,
                user: 'Demo User',
                role: ['User'],
                permissions: ['Bootstrap', 'Antd', 'MUI', 'Chakra']
            }
        })
    }

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

    const logout = () => {
        localStorage.removeItem(TOKEN_NAME);
        setAuthToken(null);
        setAuthState({
            type: 'SET_AUTH',
            payload: {
                isAuthenticated: false,
                user: null,
                role: null
            }
        })
    }

    const authContextData = { login, logout, register, authState }

    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}
export { AuthContext }
export default AuthContextProvider