import { Navigate, Outlet, useLocation } from 'react-router-dom'


function AuthRoute({ isAllowed, redirectPath = '/unauthorized', children }) {
    const location = useLocation()
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace state={{ from: location }} />
    }
    return children ? children : <Outlet />
}

export default AuthRoute
