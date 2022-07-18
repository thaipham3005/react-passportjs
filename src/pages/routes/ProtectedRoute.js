import { Route, Navigate } from 'react-router-dom'
import { AuthContext } from '../../context/Auth.provider'
import { useContext } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};
const color = '#FFFFFF'

function ProtectedRoute({ element: Component, ...rest }) {
    const {
        authState: { authLoading, isAuthenticated }
    } = useContext(AuthContext)

    if (authLoading) {
        return <div className='fullscreen centered'>
            <ClipLoader color={color} loading={authLoading} cssOverride={override} size={150} />
        </div>
    }
    return (
        <>
            {isAuthenticated ?
                <Route {...rest} element={Component} />
                : 
                <Navigate replace to='/Error503'></Navigate>}
        </>
    )
}

export default ProtectedRoute
